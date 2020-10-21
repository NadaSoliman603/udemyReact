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
        { name: "frind #1"},
        { name: "frind #2"},
        { name: "frind #3"},
        { name: "frind #4"},
        { name: "frind #5"},
        { name: "frind #6"},
        { name: "frind #7"},
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

# part 7
2- add margineVertical to return text >> to scrol top and botom
3- add prop horizontal to FlatList >>>>>  to scrol left and right
4- add prop showesHorizontalScrollIndicator={fsals} to FlatList >>>>>  to hiedd scrolbar



# ============================
    lect 04
# =============================

# how to navigat betwen multable pages

>>>>>>>>>>> homeScreen> import view and button
>>>>>>>>>>>but Text and <button onPress={() => consol.log("")} title="string" > in view tage
>>>>>>>>>>><ToushableOpacity onpress={()=>}><ToutchabeOpacit/> >>>> onclik it fadeout then fadin
we can put more than one elemant unsid but in button we used title

>>>>>> cost homeScreen = prop=>{}
onpress =()=>prop.navigation.navigate('')

# ====================================
    lect 05
# ====================================
>>>>>> srce>> screeen >>> creat file (imageScreem.js) >>>add this page to >.app.Js navegator
>>>>>  homeScreen>>>> creat button navigate to image Screen
>>>>>>>> src >>>>>creat folder collld commponent >>>> creat file imageDetales.js

>>>>>>>>> HOW show imageDetiles in imageScreen ??
    >1- imageScreen >> import imageDetailes from "src"
    >2- <imageDetaile  propThatWeCllInImageDetaile=""/> in cost of imageScreen
    >3- add images to assets folder
    >4- imageDetaile >> import Image the use it <Image sorce={requier('path of image')}/>
    >5- git image sorce from imageScreen > imageDetailes prop



================================================================================================
# ---------------Lect 06  
>>>>>>>State Management in React Components
# ===========================

# part 01 >>>>> State In Components
>>>>>Prop|To Pass Data From Parent To child|
>>>>State|tracking a piece of data that's going to change over time inside of our application|

# part 02 >>>>> Creat Counter
>>>>>> srce>> screeen >>> creat file (CouunterScreen.js) >>>add this page to >.app.Js navegator 

# part 03 04 05 >>>>> State In Action
>>>>>CouunterScreen.js >>>>> add tow button and text of current Count
>>>> add var let counter = {0}
>>>> button >>> onpress counter-- or ++
>>>>> browser Console  
    >>>> const coloer = ["red","blue"]
    coloer[0] >>>>> red
    coloer[1] >>>>> blue
   >>>> const  ["colorOne","colorTow"] = coloer
    colorOne >>>> red 
>>>> import {useState}  from react
    const [counter , stCounter] = useState(0)
>>>> button >>>> onpress {setCountet(conter+1)}

------------------------------------------------------------------------------------------------
# aprt 06
>>>>>>>>>>>>>>>>>>>>>>>>
create random coloers
>>>>>>>>>>>>>>>>>>>>>>>>
1-srce>> screeen >>> creat file (ColorScreen.js) >>>add this page to >.app.Js navegator 
2- add button that will creat color
3-creat view element with width ,hight, backgroundcolor
4-creat const randameRgb =()=>{red=math.floor(math.random())*256} >>>green blue
  return rgb(${red},${green},${blue})
  >>> call this function in backgroundcolor
5- import {useState} from react
6- in const colorScreen >>> const [color,srtColor]=usrState([])
7-onpress>> setcolor([...color, randomRgb()])
8- use flatList

# part 08  >> app that change color rgb(red,green,blue)
1-srce>> screeen >>> creat file (ColorScreen.js) >>>add this page to >.app.Js navegator 
2-srce>>>> creat file (ColorCounter.js) >>> import it to colorScreen 
   >>>>> creat text 2button
3-path props color from colorScreen to Color Counter

------------------------------------------------------------------------------------------------
# aprt 10
>>>>>>>>>>>>>>>>>>>>>>>>
create your  coloer
>>>>>>>>>>>>>>>>>>>>>>>>
1-srce>> screeen >>> creat file (SquarScreen.js) >>>add this page to >.app.Js navegator 
2-srce>>>> creat file (ColorCounter.js) >>> import it to SquarSreen
2-srce>>>> creat file (ColorCounter.js) >>>>> creat text 2button >>>import it to colorScreen 
3- insert color in Colorcounter by pass props color from colorScreen to Color Counter   
***if a child needs to read a state value the parent can pass it ass a prop
***if a child needs to change a state value the parent can pass it as a callback function to change the state value as a prop
>>>pass callback function from squarScreen to color counter

4- import{useSyaye}from react
>>const[red,setred]=useState(0)>>> and blue green

>>>>squarScreen>>callBack funktion
    --onIncrease{() =>setRed(red+1)}>>>and onDecrease So
    --consil.log(red)
>>pass the function>>> as prop ({prop1,prop2,....})
>>buton onPress={()=>function()}

5- creat view element hieght width backgroundcolor `rgb ($(red),($(blue),($(blue))`


inisted of 1 we can add aconst value COLOR_INCREASMENT=number


6->>> const squarScreen >>>>>  const setColor(color, change)

//// color === red OR green OR blue
////change === colorIncreasement=15 Or -15
if (color === red){
    if(red + chang>255 ||>or red + change<0){
        return;
    }else
    setRed(red+change)
}

>>> as this green  and blue 
>>insert this function 


>>>>> use swish case
switch(color){
    1- case'red':
            >if>red + change > 255 >OR>||red + change <0 ? null >do nothing>:>other>        setred(red + change) 
    return;

    default;>>>not equal anycas
    return;
}


>>>>>>>>>>>>>>>>>>>>>>>>WE CAN   DO THIS IN OTHER WAY
 >>Using reducer function >>>> function that mange chang to an object
    >>Argument#1 >>> Has All Of State In It>>>>>>> {red:0,green:0,blue:0}  >>> 
        >>1-never change it directry
        >> we maust always rturn a value  to be used as  Argument#1
    >>Argument#2 >>> Describes the update We want To DO >>>>{colorToChange:'red', amout:15}


>>>import {useReducer} from react
>>>squarScreen>>>
    >>>>const reducer= (satat, action ) =>{
    
        switch(action.colorToChange){
            case'red':
                return{...state >>>{red
                :0,green:0,blue:0}
                , red:state.red + action.amount}
             default:
                return satte;
        }
        ***state >>{red:0, green:0, blue:0}
        ***action>howToChange Object>>{colorToChange:'red'||"green'||blue,amount:15})=>

   >>>> const[state ,runMyReducer ]=useReducer(reducer, {red:0, green:0, blue:0})
    ----console.log(sate)>>>>{red:0, green:0, blue:0}
>>>>onInCrease={()=>runMyReducer(colorToChange:'red' , amount:COLOR_INCREASE)}
>>>> backgroundColor>>stat.red

const {red, greane, blue} = state;

# use if condition in case
# usually by convention we will instead use
colorTochange >>>> type
red   >>>>>>>>>>>> change_red
 ammount >>>>>>>> payload

 ---------------------------------input text screen ---------------------------------------------
 1- srce>> screeen >>> creat file (TextScreen.js) >>>add this page to >.app.Js navegator 
 2- import TextInput >>> add style 
                                1=margin 15
                                2=borderColor black
                                3=borderWidth 1
                    
                    >>> autoCapitalize = 'none'
                    >>> autocorect =  {false}
                    >>> value = 'hi'
3-import useState
    > TextScreen >const [ name, setName] = useState("")
                    >>> value = {name}
                    >>> onChangeText = {newValue => setName(newValue) }


                
