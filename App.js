import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';
import { useScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './src/navigation/MealsNavigator';
import mealsReducer from './src/store/reducer/meal';

//rootReducer is merge any reducer
const rootReducer = combineReducers({
  meals: mealsReducer
});

//this create store is main data store of react
const store = createStore(rootReducer);

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  //this for load Font open-sans
  if (fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() =>
          setFontLoaded(true)}
      />
    )
  }

  //this is main functional component
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: '100%'
  },
  buttonContainer: {
    justifyContent: 'space-around',
    borderRadius: 20,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5
  },
  button: {
    width: 90,
    marginVertical: 10,
  }
});
