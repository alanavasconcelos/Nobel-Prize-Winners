import * as React from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1C1C1C' }}>
      <Text style = {{ color: '#D4AF37', fontFamily: 'Italiana'}}>Home!</Text>
    </View>
  );
}

function FavouritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1C1C1C'}}>
      <Text style = {{ color: '#D4AF37', fontFamily: 'Italiana'}}>Favourites!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  NavigationBar.setBackgroundColorAsync("#455A64");

  const [fontsLoaded] = useFonts({
    'Italiana': require('./assets/fonts/Italiana.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="white"
        labeled={false}
        barStyle={{ backgroundColor: '#455A64' }}>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Favourites" component={FavouritesScreen} 
            options={{
              tabBarLabel: 'Favourites',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="star" color={color} size={26} />
              ),
            }}
        />
      </Tab.Navigator>
      <StatusBar style="light" backgroundColor="#1C1C1C"/>
    </NavigationContainer>
  );
}
