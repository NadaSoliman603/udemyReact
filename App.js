import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen  from "./src/screens/componentsScreen.js";
import listScreen from "./src/screens/listScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    component: componentsScreen,
    list: listScreen
  },
  {
    initialRouteName: "list",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
