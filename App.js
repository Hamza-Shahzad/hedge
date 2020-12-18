import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';


Amplify.configure(awsconfig)

async function signOut(){

  try{
    await Auth.signOut();
  } catch(error){
    console.log('error signing out', error);
  }


}


function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button title="Sign out" onPress={()=> signOut()} />
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

export default withAuthenticator(App);
