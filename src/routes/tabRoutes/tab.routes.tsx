import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import Home from '../../pages/Home';
import { Feather } from '@expo/vector-icons';
import Status from '../../pages/Status';
import InitialPage from '../../pages/InitialPage';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
    const [totalDistance, setTotalDistance] = useState<number>(0);

    const handleDistanceChange = (distance: number) => {
        setTotalDistance(distance);
    };
  return (
    <Tab.Navigator 
        initialRouteName='Login'
        screenOptions={{
            tabBarStyle:  {
                backgroundColor: 'red',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
            headerStyle: {
                backgroundColor: 'red'
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }}
    >
        <Tab.Screen
            name='Fitness App'
            component={InitialPage}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color } size={size} />,
                tabBarLabel: 'Home'
            }}
        />
        <Tab.Screen
            name='Mapa'
            children={() => <Home onDistanceChange={handleDistanceChange}/>}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='map' color={color} size={size} />,
                tabBarLabel: 'Map'
            }}
        />
        <Tab.Screen
            name='Status'
            component={Status}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='info' color={color} size={size} />,
                tabBarLabel: 'status'
            }}
        />
    </Tab.Navigator>
  )
}

export default TabRoutes