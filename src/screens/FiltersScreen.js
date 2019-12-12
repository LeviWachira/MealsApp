import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>this FiltersScreen</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = NavData => {
    return {
        headerTitle: 'FilterScreen',
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FiltersScreen
