import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavouritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <Text>No favourite meals found. Start adding some!</Text>
            </View>
        );
    };

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};


FavouritesScreen.navigationOptions = NavData => {
    return {
        headerTitle: 'Your Favourite',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    iconName='ios-menu'
                    title='Filters'
                    onPress={() => {
                        NavData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default FavouritesScreen;
