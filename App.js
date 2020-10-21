import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen  from "./src/screens/componentsScreen.js";
import listScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CouunterScreen from "./src/screens/CouunterScreen";
import colorScreeen from "./src/screens/ColorScreen";
import SquarScreen from "./src/screens/SquarScreen";
import ColorCounter from "./src/commponent/ColorCounter";
import TextScreen from "./src/screens/TextScreen";
import PasswordScreen from "./src/screens/PasswordScreen"



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    component: componentsScreen,
    list: listScreen,
    imag: ImageScreen,
    counter: CouunterScreen,
    squar: SquarScreen,
    cou: ColorCounter,
    color: colorScreeen ,
    inputScreen: TextScreen,
    pass: PasswordScreen
  },
  {
    initialRouteName: "pass",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
