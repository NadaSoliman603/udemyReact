import React, {useState, useReducer} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { getActiveChildNavigationOptions } from 'react-navigation';
import ColorCounter from "../commponent/ColorCounter.js";
/* const SquarScreen = () =>{
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const COLOE_INCREASEMENT = 5;
    const setColor = (color, change) =>{
       switch(color){
           case 'red':
               red + change > 255 || red + change < 0 ? null : setRed(red + change);
               return ;

            case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return ;

            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return ;


            
       } 
    }
    return(
        <View>
            <ColorCounter
                style={{backgroundColor:"red"}}
                OnInCrease={() =>setColor( 'red' , COLOE_INCREASEMENT)}
                OnDeCrease={() =>setColor('red' , -1* COLOE_INCREASEMENT)}
                color="red"
            />
            

            <ColorCounter
                OnInCrease={() =>setColor('green' , COLOE_INCREASEMENT)}
                OnDeCrease={() =>setColor('green' , -1* COLOE_INCREASEMENT)} 
                color="green"
            />

            <ColorCounter
                OnInCrease={() =>setColor('blue' , COLOE_INCREASEMENT)}
                OnDeCrease={() =>setColor('blue' , -1* COLOE_INCREASEMENT)}
                color="blue"
            />
            <Text 
                style={{width:360,
                    height:180,
                    fontSize:65,
                    color:"rgb(255,255,255)",
                    backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
                {red}, {green}, {blue}
            </Text>
        </View>
    );
}
 */

////////////////////////////////////////// Anther Way To /////////////////////////////////////


const COLOE_INCREASEMENT = 5;
const reducer = (state, action) =>{
    // state ==== {red:number, green:number, blue:number}
    // action === {colorToChange: red || green || blue , amount: 15 || -15}
    switch (action.colorToChange){
        case 'red':
            //never change it directry like sate.red = state.red -1 (fuls)
            /*if( state.red + action.amount > 255 || state.red + action.amount < 0 ){
                return state;
            }  anther way */

            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : {...state, red: state.red + action.amount};

        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                :{...state, green: state.green + action.amount};
        case 'blue':
            return  state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                :{...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquarScreen = () =>{
    const [ state, runMYReducer ] = useReducer(reducer, {red:0, green:0, blue:0});
    // state >>>> {red:0, green:0, blue:0}
    const {red, green, blue}= state;
    
    return(
        <View>
             <ColorCounter
                style={{backgroundColor:"red"}}
                OnInCrease={ () =>runMYReducer( { colorToChange:'red', amount: COLOE_INCREASEMENT } ) }
                OnDeCrease={() =>runMYReducer ({colorToChange:'red', amount: -1*COLOE_INCREASEMENT})}
                color="red"
            />
            

            <ColorCounter
                OnInCrease={() =>runMYReducer( { colorToChange:'green', amount: COLOE_INCREASEMENT } )}
                OnDeCrease={() =>runMYReducer ({colorToChange:'green', amount: -1*COLOE_INCREASEMENT})} 
                color="green"
            />

            <ColorCounter
                OnInCrease={() =>runMYReducer( { colorToChange:'blue', amount: COLOE_INCREASEMENT } )}
                OnDeCrease={() =>runMYReducer ({colorToChange:'blue', amount: -1*COLOE_INCREASEMENT})}
                color="blue"
            />
            
            <Text 
                style={{
                    width:360,
                    height:180,
                    fontSize:65,
                    color:"rgb(255,255,255)",
                    backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})` 
                    }}>
                {state.red}, {state.green}, {state.blue}
            </Text> 
        </View>
    );
    
}
const styles= StyleSheet.create({});

export default SquarScreen; 