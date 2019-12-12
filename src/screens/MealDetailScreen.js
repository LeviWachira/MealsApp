import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId')
    const displayedMealDetails = MEALS.find(meal => meal.id === mealId)

    return (
        <View style={styles.screen}>
            <Text>{displayedMealDetails.title}</Text>

            <Button title='Go to top'
                onPress={() => props.navigation.popToTop()}
            />
        </View>
    )
}

MealDetailScreen.navigationOptions = navigationData => {

    const headerTitle = navigationData.navigation.getParam('mealId');
    const headerMealDetailTitle = MEALS.find(meal => meal.id === headerTitle);

    return {
        headerTitle: headerMealDetailTitle.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favourite'
                    iconName='ios-star'
                    onPress={() => {
                        Alert.alert(`Mark up Favourite`)
                    }}
                />
                <Item
                    title='Un Favourite'
                    iconName='ios-star-outline'
                    onPress={() => {
                        Alert.alert(`UnMark up Favourite`)
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealDetailScreen

