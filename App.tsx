import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackRoutes from './src/routes/stackRoutes/stack.routes';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StackRoutes />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
