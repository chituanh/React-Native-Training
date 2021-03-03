// import * as Font from "expo-font";

import React, { useState } from "react";
import {combineReducers, createStore} from 'redux';

import MealsNavigator from './navigation/MealsNavigator';
import {Provider} from 'react-redux';
import { StyleSheet } from "react-native";
import {enableScreens} from 'react-native-screens';
import mealsReducer from './store/reducers/meals';

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const rootReducer = combineReducers({
  meals: mealsReducer,
})

const store = createStore(rootReducer)

enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setFontLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   )
  // }

  return (
    <Provider store = {store}><MealsNavigator/></Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
