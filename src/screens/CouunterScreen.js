import React, {useState} from "react";
import {Text, View, StyleSheet, Button,} from "react-native";

const CouunterScreen = () =>{
    const [ counter, setCounter] = useState(0)
    return <View style={styles.viewStyle}>
        <Button 
            onPress={()=>{setCounter(counter +1)}} 
            title="Increas"
        />

<       Text style={styles.buttonStyle}>Current Counter: {counter}</Text>
        <Button
            onPress={()=>{setCounter(counter -1)}}
            title="Decreas"
        />
 
    </View>
};

const styles = StyleSheet.create({
    buttonStyle:{
        marginVertical: 30
    },

    viewStyle:{
        marginVertical: 200
    }
});

export default CouunterScreen;
