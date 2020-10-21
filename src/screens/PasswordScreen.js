import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';


const TextScreen = () => {
    const [Password, setPassword] = useState("");
    return (
        <View>
            <Text style={styles.textStyle}>Enter Your Password</Text>
            <TextInput 
                style = {styles.Input}
                //value = {name}
               onChangeText = {newValue => setPassword(newValue) }
            />
          
            <Text style = {{marginLeft: 15, color:"green"}}>
                Your Password is: {Password}
            </Text> 
            
            
           
         {/*    { false ?
            <Text style = {{marginLeft: 15, color:"red"}}>
                The Password Mast be at less 5 Letter 
            </Text>
            : null
            } */}

            { Password.length < 5 ?
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
        color: "green"
    }
})


export default TextScreen;