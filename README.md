#===============================
# lect 01
#===============================

#===============================
# lect 02
#===============================
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
