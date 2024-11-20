import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabRoutes from '../tabRoutes/tab.routes';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
            name='TabRoutes'
            component={TabRoutes}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default StackRoutes