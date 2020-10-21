import React, {useState} from "react";
import {View, StyleSheet, Button, FlatList} from "react-native";

const colorScreeen = () =>{
    const [color, setColor]= useState([])
    return <View>
        <Button 
            onPress={ () => {
                setColor( [...color,randomRgb()] );
            }}
            title="generat color"
        />

        <FlatList
            keyExtractor={item =>item}
            data={color}
            renderItem={({item})=>{
                return<View style={{height:100, width:100, backgroundColor:item}}/>
            }}
        />         
    </View>
};
const randomRgb= () =>{
    const red = Math.floor(Math.random()*265);
    const green = Math.floor(Math.random()*265);
    const blue = Math.floor(Math.random()*265);
    return `rgb(${red}, ${green}, ${blue})`;
}
const styles= StyleSheet.create({});

export default colorScreeen; 