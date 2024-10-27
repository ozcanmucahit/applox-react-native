// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; 

const store = configureStore({
  reducer: rootReducer, // Reducer'ı ayarlayın
});

export default store;
