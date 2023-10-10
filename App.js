import { StyleSheet, Text, View } from 'react-native';

import RegisterPage from './src/pages/RegisterPage';
import ForgorPassword from './src/pages/ForgorPasswordPage';
import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgorPassword" component={ForgorPassword} />
        <Stack.Screen name="RegisterPage" component={RegisterPage}/>
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
      </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
