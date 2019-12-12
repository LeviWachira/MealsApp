import React from 'react';
import { View, Text, StyleSheet, Button, Platform, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import Colors from '../constant/Colors';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    const renderMealItem = itemData => {
        return (
            <MealItem title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                           mealId : itemData.item.id
                        }
                    });
                }} />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={(item, index) => item.id}
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '95%' }}
            />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId');
    const selectCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen
