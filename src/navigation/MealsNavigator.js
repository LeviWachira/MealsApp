
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constant/Colors';


//***************************************************** defaultNavigationOptions Fig HandleTitle  
const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    
}

//**************************************************** StackCategory Meals
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

//************************************************** HandleIconTabBottom
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarColor: Colors.primaryColor,
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={23}
                        color={tabInfo.tintColor}
                    />
                );
            }
        }
    },
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarColor: Colors.orangeColor,
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={23}
                        color={tabInfo.tintColor}
                    />
                );
            }
        }
    }
}

//**************************************************** HandleTabBottom  
const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.orangeColor,
        shifting: true,
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.orangeColor
        }
    });

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

//************************************************ HandleDrawer Between Meals and Filters
const MainNavigator = createDrawerNavigator({
    MealCategories: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerIcon: (tabInfo) => {
                return (
                    <MaterialCommunityIcons
                        name='food'
                        size={23}
                        color={tabInfo.tintColor === Colors.blackColor ? Colors.blackColor :tabInfo.tintColor }
                    />
                );
            }
        }
    },
    Filters: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-settings'
                        size={23}
                        color={tabInfo.tintColor === Colors.blackColor ? Colors.blackColor :tabInfo.tintColor }
                    />
                );
            }
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.blackColor
    }
});

export default createAppContainer(MainNavigator);

