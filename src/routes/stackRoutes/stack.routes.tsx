import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabRoutes from '../tabRoutes/tab.routes';
import Login from '../../pages/Login';
import { RootStackParamList } from '../../typescript/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{}}
        />
        <Stack.Screen
            name='TabRoutes'
            component={TabRoutes}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default StackRoutes