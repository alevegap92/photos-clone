import { StackNavigator } from 'react-navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'

const RutasNoAutenticadas = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
        title: 'SignIn titulo desde la screen',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Desde screen',
      },
    },
  },
  {
    // headerMode: 'none',
    navigationOptions: {
      title: 'TITULO PRINCIPAL',
    },
  }
)

export { RutasNoAutenticadas }
