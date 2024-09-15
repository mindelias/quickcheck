import React from 'react';
import {SvgProps} from 'react-native-svg';
import HomeIcon from '../../assets/icons/home.svg';
import ProductIcon from '../../assets/icons/product.svg';
import SalesIcon from '../../assets/icons/sales.svg';
// import {props} from './getRouteIcon';

export const GetIcon: React.FC<SvgProps & {route: any}> = props => {
  switch (props.route.name) {
    case 'home':
      return <HomeIcon />;

    case 'product':
      return <ProductIcon />;
    case 'sales':
      return <SalesIcon />;

    default:
      return <HomeIcon />;
  }
};
