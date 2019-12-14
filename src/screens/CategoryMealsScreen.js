import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

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

export default CategoryMealsScreen
