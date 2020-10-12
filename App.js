import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen  from "./src/screens/componentsScreen.js";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    component: componentsScreen
  },
  {
    initialRouteName: "component",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
