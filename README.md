#===============================
# lect 01
#===============================

# ===============================
# lect 02
# ===============================
# part 01
    src>screens>newFill(componentsScreen.js){
        1- // Import Libs we need to create a component
                import React from 'react';
                import { Text , styleSheet} from 'react-narive'

        2-//Create a component - a function that return some 'JSX'
            const componentsScreen = function(){}
            const componentsScreen = () =>{
                return <Text style = {styles.textStyle}> this is components screen</Text>;
            };

        3-//Create a stylesheet to style our component
            const styles = stylesheet.create({
                textStyle : {
                    fontSize:30
                }
            });

        
        4-//Export the component so we can use it elsewhere in our project 
            export defult componentsScreen;
    }


# part 02

App.js{ 
    1- import ComponentsScreen; import ComponentsScreen from './src/screens/ComponentsScreen' 2- add Components: ComponentsScreen in the navigator 
    3- Change initialRouteName to Components
}

# part 3
1-what's that text thing >>>>>>>>>>>>>>>>>>>> show some amount of basic content on screen such as
--text--view-image-button--

2-What's that Html looking stuff >>>>>>>>>>>>>>  JSX it is dialect of JS that tell react what content we want to show

3-What's that app navigator in "app.js" >>>>>>> it is tool from library called react native used to show diffrent screen

4-Howe that style thing work >>>>>>>>>>>>>>>>>>> StyleSheet.create()

# part4
1-<view> >>>>>>>>>> to grop some element to gether
2- we can refer to JS var insid  JSX by useing {}
    const variableName = "string" OR number OR [array] OR JSX element
    <Text>{variableName}</Text>

 We can not show a javascript object inside of a text element.

# =========================
  # lect 03
# =========================

# part 1
1- src>screens>newFill(listScreen.js){
    1- import react from react
    import {text, view, styleSheet} from react-native

    const listScreen = () =>{
        return <Text>listScreen</Text>;
    }

    const Styles = styleSheet.create({}) 

    export default listScreen;
}
 2- app.js>> 
   >> import listScreen from "path"
   >> navigator >> list: listScreen
   >>inntalRootName : 'list; 


# part 02 and 03
array of object                           list of frindes 
{name:'samy'}                             samy
{name:'jell'}  >>>>>>>>>>>>>>>>>>>>>>>>>  jel
{name:'jes'}                              jes

# flatList Element                            
1-it turn array abject to list of element
>listScreen > import FlatList 
>> const listScreen >> creat an array 
    const frindsListArray = [
        { name: "frind #1"}
        { name: "frind #2"}
        { name: "frind #3"}
        { name: "frind #4"}
        { name: "frind #5"}
        { name: "frind #6"}
        { name: "frind #7"}
        { name: "frind #8"}
    ];
2- we are requier to path  in 'prop' of 'data' the array of data   
return <FlatList data={frindsListArray}/>

3 -we are requier to path in 'renderItem' prop- #function# that will turn  each individual iteinto an element
return( 
<FlatLisr 
    data={frindsListArray} 
    rinderItem={ (element)=> {}} 
    // element ==== {item:{ name: "frind #1"},  index: 0 } >>>>>>>>>>>
    //item === { name: "frind #1"} >>>>>>>>>>>>>>> so it is change to rinderItem={ (item)

    return <Text>{item.name}</Text>
/>
);


1- we should ad key  prop to array object so that we can deal with it if we want to delete it
but we should not add the same key to more than one object
key value should be string
>we can but kay in  FlatList
<FlatList KeyExstractor {(array>object>proparity>value) => what we want to ruturn}/>

2- add margineVertical to return text