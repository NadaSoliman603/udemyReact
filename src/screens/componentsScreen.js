import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

//const componentsScreen = function(){} or
const componentsScreen = () =>{
    const myname = "Nada" ;

    // return <Text style={styles.styleText}>this is component Screen </Text> 

    //multable line
    /*
    return ( 
        <View>
            <Text style={styles.styleText}>this is component Screen </Text>
            <Text>{greting}</Text> 
        </View>
        );
     */ 

    return <View>
        <Text style={styles.styleText}>giting start with reactnative  </Text>
        <Text style={styles.mynameSryle}> my name is {myname}</Text> 
    </View>
};



const styles = StyleSheet.create({
    styleText :{
        fontSize: 32
    },
    mynameSryle :{
        fontSize: 20
    } 
});

export default componentsScreen;