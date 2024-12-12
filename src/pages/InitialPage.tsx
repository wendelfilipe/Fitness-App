import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/initialPage'
import { User } from '../interfaces/User'
import { Props } from '../typescript/LoginScreenNavigationProp'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../typescript/RootStackParamList'

type InitialPageProps = NativeStackScreenProps<RootStackParamList, 'FitnessApp'>;

const InitialPage: React.FC<InitialPageProps> = ({route, navigation}) => {
  const [user, setUser] = useState<User | null>();
  const { distance } = route.params;

  function clickBack() {
    navigation.push('Login')
  }

  useEffect(() => {
    const loadUser: User = {
      name: 'João',
      email: 'wendel@wendel',
      idade: 27,
      peso: 72
    };

    setUser(loadUser)
  }, []);

  return (
   <View style={styles.containerAll}>
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.containerImg}>
            <Image/>
          </View>
          <View style={styles.containerProps}>
            <Text style={styles.text}>Nome: {user?.name}</Text>
            <Text style={styles.text}>Idade: {user?.idade}</Text>
            <Text style={styles.text}>Peso: {user?.peso}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text>{distance}</Text>
        <TouchableOpacity onPress={clickBack }style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
   </View>
  )
}

export default InitialPage