import { configureStore } from '@reduxjs/toolkit';
import generalData from "./generalDataSlice";

export const store = configureStore({
  reducer: {
    generalData
  },
});
