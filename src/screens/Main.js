import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MoviesScreen from './Movies';
import FavouritesScreen from './Favourites';

const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  );
};
export default MainScreen;
