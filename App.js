import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import LoginScreen from './LoginScreen'
import ContactsScreen from './ContactsScreen';
//import Contact from './components/Contact'
import { createStackNavigator } from '@react-navigation/stack';

const  Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Login' options={{header:()=>null}}
        component={LoginScreen}/>

        <Stack.Screen 
        name='register' options={{header:()=>null}}
        component={Register}/>
        
        <Stack.Screen 
        name='Contacts' 
        component={ContactsScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App