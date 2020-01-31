import React from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#ea1d2c" />
    <Routes />
  </>
);

export default App;
