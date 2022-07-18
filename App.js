import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationContainer from 'react-native-navigation-container';
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Naga Tere</Text>
      </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
