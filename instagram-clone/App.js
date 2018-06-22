import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import Store from './Store/Store'
import { RutasNoAutenticadas } from './Components/NoAutenticados/RutasNoAutenticadas'
import { RutasAutenticadas } from './Components/Autenticados/RutasAutenticadas'
import './ReactotronConfig'
import Reactotron from 'reactotron-react-native'

console.disableYellowBox = ['Remote debugger']
Reactotron.log('hello rendering world')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const App = () => (
  <Provider store={Store}>
    <View style={styles.container}>
      <RutasAutenticadas />
    </View>
  </Provider>
)
export default App
