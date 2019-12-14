import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Platform, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { setFilters } from '../store/action/meal';

const FiltersSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.text}>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.whiteColor : ''}
            />
        </View>
    )
}

const FiltersScreen = props => {

    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliesFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        console.log(appliesFilters);

        dispatch(setFilters(appliesFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <View style={styles.empty}>

            </View>
            <FiltersSwitch
                label={'Gluten-free'}
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FiltersSwitch
                label={'Lactose-free'}
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FiltersSwitch
                label={'Vegan'}
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FiltersSwitch
                label={'Vegetarian'}
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />

        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    iconName='ios-menu'
                    title='Filters'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    iconName='ios-save'
                    title='Save Filters'
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Platform.OS === 'android' ? 'white' : '#dcdcdc',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        margin: 20,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16
    },
    empty: {
        height: Platform.OS === 'ios' ? '7%' : 15,
    }
})

export default FiltersScreen
