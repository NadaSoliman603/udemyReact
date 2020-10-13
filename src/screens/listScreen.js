import React from "react";
import { Text, StyleSheet, View, FlatList} from 'react-native';

const listScreen = () =>{
    /* 
     const frindesArray =[
        { name: "friend #1", key: "1" },
        { name: "friend #2", key: "2"},
        { name: "friend #3", key: "3"},
        { name: "friend #4", key: "4"},
        { name: "friend #5", key: "5"},
        { name: "friend #6", key: "6"},
        { name: "friend #7", key: "7"},
        { name: "friend #8", key: "8"}
    ]
  return (
        <FlatList
            // keyExtractor={(friend) => friend} >>>>>>>> we can wright Key like this 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={frindesArray}
            renderItem={ ( {item} ) =>{
            return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    );
    const styles = StyleSheet.create({
        textStyle:{
        marginVertical: 50
    }
});
    */

    const friendNameAge=[
        { name: "friend #1", age: 45, key: "1"},
        { name: "friend #2", age: 21, key: "2"},
        { name: "friend #3", age: 24, key: "3"},
        { name: "friend #4", age: 23, key: "4"},
        { name: "friend #5", age: 33, key: "5"},
        { name: "friend #6", age: 34, key: "6"},
        { name: "friend #7", age: 44, key: "7"},
        { name: "friend #8", age: 34, key: "8"}
    ]
    return(
        <FlatList
            data={friendNameAge}
            renderItem={ ( {item} ) =>{
                return(
                <Text>  
                    {item.name} _ age {item.age} 
                </Text>
                );
             }}
        />
    );
};


export default listScreen;

