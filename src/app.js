import React from 'react'
import { Provider } from 'react-redux'
import {AppRegistry, View} from 'react-native'
import {name as appName} from '../app.json'
import AppContainer from './routes'
import store from './store'

console.disableYellowBox = true

export const App = () => {
    return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
    )
}
AppRegistry.registerComponent(appName, () => App);
