import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../../pages/Login';
import { RootStackParamList } from '../../typescript/RootStackParamList';
import DrawerRoutes from '../drawerRoutes/drawer.routes';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Login'
      screenOptions={{
        headerStyle:{
          backgroundColor: 'white',
          ...(Platform.OS === 'ios' && {
            shadowColor: '#ff000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          })
        },
        headerShadowVisible: true
      }}
    >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
            name='DrawerRoutes'
            component={DrawerRoutes}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default StackRoutes