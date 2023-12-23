import { configureStore } from '@reduxjs/toolkit';
import MonthYearReducer from './redux/MonthYearReducer';
export default configureStore({
  reducer: {
    monthYear: MonthYearReducer
  }
})

