/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import{ createStackNavigator } from "react-navigation";
import MainScreen from "./src/components/MainScreen/MainScreen";
import SecondScreen from "./src/components/SecondScreen/SecondScreen";

export default (App = createStackNavigator(
  {
    MainScreen: { screen: MainScreen },
    SecondScreen: { screen: SecondScreen }
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: "blue" },
      headerTitleStyle: {
        color: "black",
        flex: 1,
        textAlign: "left",
        fontSize: 18,
        fontWeight: 'bold'
      },
      headerTintColor: "white"
    }
  }
));