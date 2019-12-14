import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = props => {

    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = itemData => {
        const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id);
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
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavourite
                        }
                    });
                }} />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList keyExtractor={(item, index) => item.id}
                data={props.listData}
                renderItem={renderMealItem}
                style={{ width: '95%' }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealList
