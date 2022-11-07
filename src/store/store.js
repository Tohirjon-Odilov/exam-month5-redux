import { configureStore } from '@reduxjs/toolkit';
import generalData from "../redux/generalDataSlice";

export const store = configureStore({
  reducer: {
    generalData
  },
});
