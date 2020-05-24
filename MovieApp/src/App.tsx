import React from 'react'
import {StatusBar} from 'react-native'
import Navigator from '~/Screens/Navigators'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </>
  )
}

export default App
