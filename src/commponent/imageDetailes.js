import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

const ImageDetailes = prop =>{
return <View>
    <Image source={prop.imageSource}/>
    <Text>{prop.title}</Text>
    <Text>image Score -{prop.score}</Text>
</View>
}

const styles = StyleSheet.create({});

export default  ImageDetailes;