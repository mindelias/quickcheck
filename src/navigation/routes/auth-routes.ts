import {routes} from './routesData';

import Login from '../../screens/auths/login/Login';
import ForgotPassword from '../../screens/auths/ForgotPassword';
import SignUp from '../../screens/auths/register/SignUp';
const authRoutes = [
  {
    route: routes.signUp,
    component: SignUp,
  },
  {
    route: routes.login,
    component: Login,
  },

  {
    route: routes.forgotPassword,
    component: ForgotPassword,
  },
];

export default authRoutes;
