import { TabNavigator } from 'react-navigation'
// import Home from './Home'
// import Search from './Search'
import Add from './Add'
import Follow from './Follow'
import Profile from './Profile'
import { StackHome } from './StackHome'
import { StackSearch } from './StackSearch'

const RutasAutenticadas = TabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: StackSearch,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: Follow,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
  }
)

export { RutasAutenticadas }
