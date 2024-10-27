import React from 'react';
import Seasons from './Screen/Seasons';
import { Provider } from 'react-redux';
import store from './Screen/store/store';


const App = () => {
  return (
    <Provider store={store}>
      <Seasons />
    </Provider>
  );
}

export default App;
