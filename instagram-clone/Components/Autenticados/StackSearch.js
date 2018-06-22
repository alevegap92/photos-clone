import { StackNavigator } from 'react-navigation';
import Search from './Search';
import Autor from './Profile';
import Publicacion from './Publicacion';
import Comentarios from './Comentarios';

const StackSearch = StackNavigator({
  Search: {
    screen: Search,
  },
  Autor: {
    screen: Autor,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Comentarios: {
    screen: Comentarios,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
});

export { StackSearch };
