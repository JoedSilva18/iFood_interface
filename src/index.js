import React from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';
import colors from '~/utils/colors';
import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    <Routes />
  </>
);

export default App;
