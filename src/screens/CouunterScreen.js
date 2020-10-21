import React, {useReducer} from "react";
import {Text, View, StyleSheet, Button,} from "react-native";


const reducer = (state , action)=>{
    //state === count === 0
    // action ==== dispatch === type:increas||decreas , payload: 1||-1
    switch(action.type){
        case "increas":
            return {...state, count: state.count + action.payload };

        case "decreas":
            return {...state, count: state.count + action.payload };
 
        default:
            return state;
    }

}

const CouunterScreen = () =>{
    const [ state, dispatch] = useReducer(reducer , {count: 0} )
    // state === count === 0
    // dispatch === type:increas||decreas , payload: 1||-1

    return <View style={styles.viewStyle}>
        <Button 
            onPress={() =>{ dispatch( { type: 'increas' , payload: 1 } ) }} 
            title="Increas"
        />

<       Text style={styles.buttonStyle}>Current Counter: {state.count}</Text>
        <Button
            onPress={()=> {dispatch({type: 'decreas' , payload: -1})}}
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
