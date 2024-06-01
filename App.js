import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import listingScreen from './screens/listingScreen';
import welcomeScreen from './screens/welcomeScreen';
import foodDetail from './screens/foodDetail';
import AddFoodScreen from './screens/AddFoodScreen';
import Account from './screens/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import firebase from 'firebase';

const firebaseConfiguration = {
  apiKey: 'AIzaSyAfp5dVwfpr8fZRNdy4EpbNbukqWDShXDk',
  authDomain: 'orderup-505f9.firebaseapp.com',
  databaseURL: 'https://orderup-505f9-default-rtdb.firebaseio.com',
  projectId: 'orderup-505f9',
  storageBucket: 'orderup-505f9.appspot.com',
  messagingSenderId: '480262404908',
  appId: '1:480262404908:web:c04e510bf58f9cc68aca89',
  measurementId: 'G-H36YDM8V55',
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfiguration);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabNavigatorComponent() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#4175B0' }}>
      <Tab.Screen
        name="FoodListing"
        component={listingScreen}
        options={{
          tabBarLabel: 'Food Listing',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>RecipeMaster</Text>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={welcomeScreen} />
          <Stack.Screen name="FoodListing" component={MainTabNavigatorComponent} options={{ headerShown: false }}
          />
          <Stack.Screen name="FoodDetail" component={foodDetail} />
          <Stack.Screen name="AddFood" component={AddFoodScreen} options={{ title: 'Add food' }}/>
          <Stack.Screen name="Account" component={Account}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#2C3042',
    padding: 8,
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    fontSize: 25,
    color: 'white',
  },
  
});
