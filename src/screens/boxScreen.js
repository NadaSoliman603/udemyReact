import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const BoxScreen = () =>{
    return (
        <View style = {styles.parentStyle}>
            <Text style = {styles.childOneStyle}>child #1</Text>
            <Text style = {styles.childTwoStyle}>child #2</Text>
            <Text style = {styles.childThreeStyle}>child #3</Text>

            <View style = {styles.viewBoxParent}>
            <View style = {styles.viewBoxStyle}/>
            <View style = {styles.viewCenterStyle}/>
            <View style = {styles.viewBoxStyle}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: "black",
        marginHorizontal: 10,
        marginVertical: 30,
        minHeight: 400,
        padding: 10,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    childOneStyle: {
        borderColor: "red",
        borderWidth: 2,
        paddingHorizontal: 7,
        flex: 1
    },
    childTwoStyle: {
        borderColor: "green",
        borderWidth: 2,
        paddingHorizontal: 7,
        flex: 2,
        alignSelf: "center",
        position: "absolute",
        /* top: 0,
        bottom: 0,
        left: 0,
        right: 0 */ //====
        ...StyleSheet.absoluteFillObject 
    },
    childThreeStyle: {
        borderColor: "red",
        borderWidth: 2,
        paddingHorizontal: 7,
        flex: 3
    },

    viewBoxParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:200,
        borderColor: 'blue',
        borderWidth: 2
    },
    viewBoxStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        //marginLeft: 4,
 
    },
    viewCenterStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    }
});

export default BoxScreen;