import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';


const TextScreen = () => {
    const [name, setName] = useState("");
    return (
        <View>
            <Text style={styles.textStyle}>Enter Your Name</Text>
            <TextInput 
                style = {styles.Input}
                //value = {name}
               onChangeText = {newValue => setName(newValue) }
            />
          
            <Text style = {{marginLeft: 15, color:"blue"}}>
                Your Name is: {name}
            </Text> 
            
            
           
         {/*    { false ?
            <Text style = {{marginLeft: 15, color:"red"}}>
                The Password Mast be at less 5 Letter 
            </Text>
            : null
            } */}

            { false ?
                <Text style = {{marginLeft: 15, color:"red"}}>
                    The Password Mast be at less 5 Letter 
                </Text>
             : null
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    Input: {
        borderColor: "black",
        margin: 15,
        borderWidth:1,
        height: 50 ,
    },
    textStyle: {
        marginTop: 200 ,
        marginLeft: 100,
        fontSize: 20,
        color: "blue"
    }
})


export default TextScreen;