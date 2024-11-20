import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import styles from '../styles/home';

const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<{ latitude: number, longitude: number }[]>([]);

  const mapRef = useRef<MapView>(null);

  async function requestLocationPermissions() {
   const { granted } = await requestForegroundPermissionsAsync();

   if( granted ){
    const currentPosition = await getCurrentPositionAsync();
    setLocation(currentPosition);
   }
  }

  const clearRoute = () => {
    setRouteCoordinates([]);
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {

      setLocation(response);

      setRouteCoordinates((prevCoordinates) => [
        ...prevCoordinates, 
        {
          latitude: response.coords.latitude, 
          longitude: response.coords.longitude
        }
      ]);

      mapRef.current?.animateCamera({
        center: response.coords
      })
    });
  },[]);

  return (
    <View style={styles.container}>
      { location && 
      <>
        <MapView
          style={styles.map}
          ref={mapRef}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker 
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}
          />
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#000" // Cor da linha
            strokeWidth={3} // Largura da linha
          />
        </MapView>
        <Button title='Limpar Rota' onPress={clearRoute}/>
        </>
      }
    </View>
  )
}

export default Home