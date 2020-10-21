import React from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';

const ColorCounter = ({color, OnInCrease, OnDeCrease }) =>{
    return (
    <View style={{marginVertical: 20, backgroundColor:`${color}`}}>
        <Text style={{marginHorizontal:160}}>{color}</Text>
        <Button  
            onPress={() =>OnInCrease()}
            title={`Increase ${color}`}
        />

    <Text></Text>
        <Button
            onPress={() =>OnDeCrease()} 
            title={`Decrease ${color}`}
        />
    </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter;