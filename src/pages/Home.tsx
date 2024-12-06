import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject, watchPositionAsync, LocationAccuracy, LocationSubscription } from 'expo-location'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import styles from '../styles/home';
import {getDistance } from 'geolib';

interface HomeProps {
  onDistanceChange: (distance: number) => void;
}

const Home: React.FC<HomeProps> = ({ onDistanceChange }) => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<{ latitude: number, longitude: number }[]>([]);
  const [totalDistance, setTotalDistance ] = useState<number>(0)

  const mapRef = useRef<MapView | null>(null);

  async function requestLocationPermissions() {
   const { granted } = await requestForegroundPermissionsAsync();

   if( granted ){
    const currentPosition = await getCurrentPositionAsync();
    setLocation(currentPosition);
   }
  }

  const clearRoute = () => {
    setRouteCoordinates([]);
    setTotalDistance(0);
    onDistanceChange(0);
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    let subscription: LocationSubscription;
    const startWachingLocation = async () => {
      watchPositionAsync({
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1
      }, (response) => {

      setLocation(response);

      if(routeCoordinates.length > 0) {
        const lastCoordinate = routeCoordinates[routeCoordinates.length -1 ];
        const distance = getDistance(
          {latitude: lastCoordinate.latitude, longitude: lastCoordinate.longitude},
          {latitude: response.coords.latitude, longitude: response.coords.longitude}
        );
        const newTotalDistance = totalDistance + distance
        setTotalDistance(newTotalDistance);
        onDistanceChange(newTotalDistance);
      }

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
  };
  startWachingLocation();

    return () => {
      subscription?.remove();
    };
  },[routeCoordinates, totalDistance]);

  return (
   <View style={styles.container}>
      { location && 
      <>
        <View style={styles.containerMap}>
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
        </View>
        <View style={styles.containerButton}>
              <TouchableOpacity style={styles.buttonClean} onPress={clearRoute}>
                <Text style={styles.buttonCleanText}>
                  Limpar Rota
                </Text>
              </TouchableOpacity>
        </View>
        <Text>Total Distance: {(totalDistance / 1000).toFixed(2)} Km</Text>
        </>
      }
   </View>
  )
}

export default Home;