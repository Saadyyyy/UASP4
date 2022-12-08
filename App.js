import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './src/Screens/Login'
import RegisterScreen from './src/Screens/Register'
import Homepage from './src/Screens/Home';
import Content from './src/Screens/Content';
import ContentDetail from './src/Screens/ContestDetail'
import Account from './src/Screens/Profile';
import Pemenang from './src/Screens/Pemenang';
import Submit from './src/Screens/Submit';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#ffff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1DD1A1',
        },
      }}
    > 
      <Tab.Screen
        name="Profile"
        component={Account}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarLabel: 'HomePage',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ContentDetail}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="hamburger" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='Pemenang' component={Pemenang}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='Homepage' component={RootHome} />
        <Stack.Screen name='ContentScreen' component={Content}/>
        <Stack.Screen name='ContentDetail' component={ContentDetail}/>
        <Stack.Screen name='Sumbit'component={Submit}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App