import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <Text>No meals found, maybe check your filters?</Text>
            </View>
        );
    }

    return (
        <MealList
            navigation={props.navigation}
            listData={displayedMeals}
        />
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default CategoryMealsScreen
