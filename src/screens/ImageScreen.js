import React from "react";
import {Text, StyleSheet, View} from "react-native";
import ImageDetailes from "../commponent/imageDetailes"

const ImageScreen = ()=>{
    return <View>
      <ImageDetailes 
        title="Forest" 
        imageSource={require("../../assets/beach.jpg")} 
        score={4} 
      />
      <ImageDetailes 
        title="Beach"
        imageSource={require("../../assets/forest.jpg")} 
        score={5} 
       />
      <ImageDetailes 
        title="Mountain" 
        imageSource={require("../../assets/mountain.jpg")} 
        score={9} 
      />
    </View>
}
 
const styles = StyleSheet.create({})

export default ImageScreen;






