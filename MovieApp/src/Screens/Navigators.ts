import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation'
import Login from '~/Screens/Login'
import MovieDetail from '~/Screens/MovieDetail'
import MovieHome from '~/Screens/MovieHome'
import CheckLogin from '~/Screens/CheckLogin'

const LoginNavigator = createStackNavigator({
  Login,
})

const MovieNavigator = createStackNavigator({
  MovieHome,
  MovieDetail,
})

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin,
    LoginNavigator,
    MovieNavigator,
  },
  {initialRouteName: 'CheckLogin'},
)

export default createAppContainer(AppNavigator)
