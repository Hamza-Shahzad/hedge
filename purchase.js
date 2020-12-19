import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';


export default function Purchase() {
  return (
    <View style={styles.container}>
      <Text>Buy Amazon Stock</Text>
      <StatusBar style="auto" />

      <Button title="Buy" onPress={()=> purchase("AMZN")} />
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
});
