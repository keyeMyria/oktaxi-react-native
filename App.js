import React from 'react';
import { StackNavigator } from 'react-navigation';

import IntroScreen from './src/components/screens/IntroScreen';
import RegistrationScreen from './src/components/screens/RegistrationScreen';
import ForgottenPasswordScreen from './src/components/screens/ForgottenPasswordScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import OrderTaxiScreen from './src/components/screens/OrderTaxiScreen';
import OrderTaxiResultScreen from './src/components/screens/OrderTaxiResultScreen';

const Navigator = StackNavigator({
  Intro: { screen: IntroScreen },
  Registration: { screen: RegistrationScreen },
  ForgottenPassword: { screen: ForgottenPasswordScreen },
  Home: { screen: HomeScreen },
  OrderTaxi: { screen: OrderTaxiScreen },
  OrderTaxiResult: { screen: OrderTaxiResultScreen },
}, {
  headerMode: 'none',
});

export default class App extends React.Component {

  render() {
    return (
      <Navigator/>
    );
  }
}
