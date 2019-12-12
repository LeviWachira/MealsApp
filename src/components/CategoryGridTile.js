import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableNativeFeedback,
    Platform
} from 'react-native';


const CategoryGridTile = props => {

    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={{ flex : 1}} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 130,
        borderRadius : 10 ,
        elevation: 3,
        overflow : Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible' ,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        // fontFamily : 'open-sans',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right'
    }

})
export default CategoryGridTile;
