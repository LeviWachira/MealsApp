import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'

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
        headerTitle: headerMealDetailTitle.title
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

