import React, { useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { toggleFavourite } from '../store/action/meal';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = props => {

    const available = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const selectMeals = available.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavouriteHandle = useCallback(() => {
        dispatch(toggleFavourite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavouriteHandle });
    }, [toggleFavouriteHandle]);

    return (
        <ScrollView>
            <Image source={{ uri: selectMeals.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectMeals.duration}</Text>
                <Text>{selectMeals.complexity.toUpperCase()}</Text>
                <Text>{selectMeals.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectMeals.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>steps</Text>
            {selectMeals.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'

    },
    listItem: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

MealDetailScreen.navigationOptions = navigationData => {

    // const headerTitle = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavourite = navigationData.navigation.getParam('toggleFav')
    // const headerMealDetailTitle = MEALS.find(meal => meal.id === headerTitle);

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favourite'
                    iconName='ios-star'
                    onPress={toggleFavourite}
                />
                {/* <Item
                    title='Un Favourite'
                    iconName='ios-star-outline'
                    onPress={() => {
                        Alert.alert(`UnMark up Favourite`)
                    }}
                /> */}
            </HeaderButtons>
        )
    }
}


export default MealDetailScreen

