import React from 'react';
import {Text, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppStore from './src/store/AppStore';
import MainScreen from './src/screens/Main';
import DetailsScreen from './src/screens/Details';

const App = () => {
  const addToFavouritesHandler = id => {
    console.log(id);
  };
  const Stack = createStackNavigator();
  return (
    <AppStore>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({navigation, route}) => ({
              headerTitle: props => <Text {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => {
                    addToFavouritesHandler(navigation.navigate('Favourites'));
                  }}
                  title="To Favourites"
                  color="red"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppStore>
  );
};
export default App;
