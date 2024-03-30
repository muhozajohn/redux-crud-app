import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import tutorialsReducer from "./slices/tutorialsSlice"
const store = configureStore({
  reducer: {
    theme: themeReducer,
    tutorials: tutorialsReducer
  },
});

export default store;