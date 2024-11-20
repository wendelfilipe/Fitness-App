import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/initialPage'
import { User } from '../interfaces/User'

const InitialPage = () => {
  const [user, setUser] = useState<User | null>();

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
  )
}

export default InitialPage