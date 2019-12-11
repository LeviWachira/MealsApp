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

    let TouchableComponet = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponet = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponet style={{ flex : 1}} onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableComponet>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 130,
        borderRadius : 10 ,
        overflow : 'hidden' ,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
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
