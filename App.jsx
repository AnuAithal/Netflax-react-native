import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {enableScreens} from 'react-native-screens';
import Home from './components/Home';
import Movies from './components/Movies';
import Login from './components/Login';
import TrailerScreen from './components/TrailerScreen';

// enableScreens();

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen
          name="Trailer"
          component={TrailerScreen}
          options={({route}) => ({
            params: {movie: route.params?.movie},
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
