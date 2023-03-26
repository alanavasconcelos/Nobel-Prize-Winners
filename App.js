import * as React from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { styles, colors } from './styles.js'
import HomeStack from './src/screens/HomeStack.js';
import FavouritesScreen from './src/screens/Favorites.js';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [loaded] = useFonts({
    'Julius Sans One': require('./assets/fonts/JuliusSansOne.ttf'),
  });

  NavigationBar.setBackgroundColorAsync(colors.tabBar);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts and other required resources here
        await SplashScreen.preventAutoHideAsync();
        if (!loaded) {
          await Font.loadAsync({
            'Julius Sans One': require('./assets/fonts/JuliusSansOne.ttf'),
          });
        }
        // Wait for at least 2 seconds
        setTimeout(() => {
          setIsReady(true);
          SplashScreen.hideAsync();
        }, 2000);
      } catch (e) {
        console.warn(e);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="white"
        labeled={false}
        barStyle={{ backgroundColor: colors.tabBar }}>
        <Tab.Screen name="Home" component={HomeStack}
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
      <StatusBar style="light" backgroundColor={colors.primaryDark} />
    </NavigationContainer>
  );
}
