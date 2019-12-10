import React from 'react'
import { View, Text , StyleSheet , Button} from 'react-native'

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>this MealDetailScreen</Text>
            <Button title='Go to top'
            onPress={() => props.navigation.popToTop()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MealDetailScreen

