import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen  from "./src/screens/componentsScreen.js";
import listScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CouunterScreen from "./src/screens/CouunterScreen";
import colorScreeen from "./src/screens/ColorScreen";
import SquarScreen from "./src/screens/SquarScreen";
import ColorCounter from "./src/commponent/ColorCounter"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    component: componentsScreen,
    list: listScreen,
    imag: ImageScreen,
    counter: CouunterScreen,
    color: colorScreeen ,
    squar: SquarScreen,
    cou: ColorCounter
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
