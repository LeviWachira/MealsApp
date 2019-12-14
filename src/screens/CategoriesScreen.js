import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Platform
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constant/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        );
    };

    return (
        <FlatList keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
};

CategoriesScreen.navigationOptions = NavData => {
    return {
        headerTitle: 'Meals Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    iconName='ios-menu'
                    title='Filter'
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})


export default CategoriesScreen;