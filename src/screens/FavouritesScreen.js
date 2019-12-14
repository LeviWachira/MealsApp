import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavouritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favouriteMeals);

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


export default FavouritesScreen ;
