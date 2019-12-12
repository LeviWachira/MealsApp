import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavouritesScreen = props => {

    const FavMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
        <MealList listData={FavMeals} navigation={props.navigation} />
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


export default FavouritesScreen ;
