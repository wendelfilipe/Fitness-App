import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import Home from '../../pages/Home';
import { Feather } from '@expo/vector-icons';
import Status from '../../pages/Status';
import InitialPage from '../../pages/InitialPage';
import { RootStackParamList } from '../../typescript/RootStackParamList';

const Tab = createBottomTabNavigator<RootStackParamList>();

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
        }}
    >
        <Tab.Screen
            name='FitnessApp'
            component={InitialPage}
            initialParams={{distance: totalDistance}}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color } size={size} />,
                tabBarLabel: 'Home',
                title: 'Fitness App',
                headerShown: false
            }}
        />
        <Tab.Screen
            name='Map'
            children={() => <Home onDistanceChange={handleDistanceChange}/>}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='map' color={color} size={size} />,
                tabBarLabel: 'Mapa',
                title: 'Mapa',
                headerShown: false
            }}
        />
    </Tab.Navigator>
  )
}

export default TabRoutes