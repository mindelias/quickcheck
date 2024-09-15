import {routes} from './routesData';

import Login from '../../screens/auths/Login';
import ForgotPassword from '../../screens/auths/ForgotPassword';
import ResetPassword from '../../screens/auths/ResetPassword';
import SignUp from '../../screens/auths/SignUp';
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
  {
    route: routes.resetPassword,
    component: ResetPassword,
  },
];

export default authRoutes;
