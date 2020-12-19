import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import App from './App.js'
import Purchase from './purchase.js'


const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "app" component = {App} title = "App" initial = {true} />
          <Scene key = "purchase" component = {Purchase} title = "Purchase" />
       </Scene>
    </Router>
 )
 export default Routes