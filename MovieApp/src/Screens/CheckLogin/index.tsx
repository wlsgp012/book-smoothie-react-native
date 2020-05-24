import React from 'react'
import Styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage'
import {NavigationScreenProp, NavigationState} from 'react-navigation'
import {ActivityIndicator} from 'react-native'

const Container = Styled.View`
  flex: 1;
  background-color: #141414;
  justify-content: center;
  align-items: center;
`

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

const CheckLogin = ({navigation}: Props) => {
  AsyncStorage.getItem('key')
    .then(value => (value ? 'MovieNavigator' : 'LoginNavigator'))
    .then(n => navigation.navigate(n))
    .catch(console.log)
  return (
    <Container>
      <ActivityIndicator size="large" color="#E70915" />
    </Container>
  )
}

CheckLogin.navigationOptions = {
  header: null,
}

export default CheckLogin
