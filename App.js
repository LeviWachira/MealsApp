import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mis</Text>
      
      <Button title='OK'/>
      <Button title='OK' color='red'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#ff0000',
    borderRadius: 5 ,
    marginVertical : 5
  }
});
