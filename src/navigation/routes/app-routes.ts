import Home from '../../screens/home/Home';
import {routes} from './routesData';

const appRoutes = [
  {
    route: routes.home,
    component: Home,
    label: 'Home',
    icon: require('../../assets/icons/home.svg'),
  },
];

export default appRoutes;
