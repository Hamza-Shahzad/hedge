import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {TextInput} from 'react-native';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Amplify.configure(awsconfig)

async function signOut(){

  try{
    await Auth.signOut();
  } catch(error){
    console.log('error signing out', error);
  }


}

var state = { apiResponse: null };

async function getSample() {
 const path = "/items"; // you can specify the path
  const apiResponse = await API.get("sampleCloudApi" , path); //replace the API name
  console.log('response:' + apiResponse);
  this.setState({ apiResponse });
}


function App() {
  
  const [value, onChangeText] = React.useState('158');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button title="Sign out" onPress={()=> signOut()} />

      <Text>Buy Some Amazon Stock!</Text>


          <View>
          <Button title="Send Request" onPress={getSample.bind(this)} />
          <Text>Response: {state.apiResponse && JSON.stringify(state.apiResponse)}</Text>
        </View>


      <TextInput 
         style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={text => onchangeText(text)}
         value={value}/>
      
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

// export default class reactApp extends Component {
//   constructor() {
//      super()
//      this.state = {
//         myText: `The price is ${testPrice()}`
//      }
//   }
//  // updateText = () => {
//  //    this.setState({myText: 'My Changed Text'})
//  // }
//   render() {
//      return (
//         <View>
//            <Text onPress = {this.updateText}>
//               {this.state.myText}
//            </Text>
//            <Text>More text!</Text>
//         </View>
//      );
//   }
// }

// function testPrice(){
//   const request = require('request');
//   let price;
//   request('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bve1ac748v6qmf0gufcg', { json: true }, (err, res, body) => {
//       //if (err) { return console.log(err); }
//       //console.log(body.url);
//       //console.log(body.explanation);
//       console.log(body)
//       console.log(body.c)
//       price = body.c
//       console.log(`the price is ${price}`)
//       return(`$${price}`)
//     })
//     setTimeout(function(){return(`The price is ${price}`); }, 300);
// }

// async function getPrice(){
//   //let price;
//   //const request = require('request');
//   //var requester = await (await request('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bve1ac748v6qmf0gufcg', { json: true }, (err, res, body) => {price = body.c}))
//   //console.log(`price is ${price}`)
//   //return requester;
//   //return(price)
//   let price
//   const request = require('request');
//   var goods = await request('https://finnhub.io/api/v1/quote?symbol=AAPL&token=bve1ac748v6qmf0gufcg', { json: true }, (err, res, body) => {
//       //if (err) { return console.log(err); }
//       //console.log(body.url);
//       //console.log(body.explanation);
//       console.log(body)
//       console.log(body.c)
//       price = body.c
//       console.log(`the price is ${price}`)
//       return(`${price}`)
//     })
//   console.log(`i wonder what ${goods} is`)
//   return(`${price}`)
// }

// async function returnPrice(){
//   var result = await getPrice();
//   console.log(`could it be ${result}`)
//   return(`The price is $${result}.`)
// }

// getPrice()
// returnPrice()