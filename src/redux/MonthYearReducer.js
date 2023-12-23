import { createSlice } from "@reduxjs/toolkit";

const today = new Date()

export const MonthYearReducer = createSlice({
  name: "monthYear",
  initialState: {
    month: today.getMonth(),
    year: today.getFullYear(),
    render: true
  },
  reducers: {
    plus: (state) => {
      state.month += 1
      if(state.month === 12){
        state.month = 0
        state.year += 1
      }
    },
    minus: (state) => {
      state.month -= 1
      if(state.month === -1){
        state.month = 11
        state.year -= 1
      }
    },
    forceRender: (state) => {
      state.render = !state.render
    }
  }
})

export const {plus, minus, forceRender} = MonthYearReducer.actions
export default MonthYearReducer.reducer