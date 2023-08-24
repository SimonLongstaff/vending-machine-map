import { DrinkType } from "../../Types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface DrinkSearchState {
  drinks: DrinkType[]
}

const initialState: DrinkSearchState = {
  drinks: [],
}

export const drinkSearchSlice = createSlice({
  name: "drinkSearch",
  initialState,
  reducers: {
    setDrinks: (state, action: PayloadAction<DrinkType[]>) => {
      state.drinks = action.payload
    },
  },
})

export const { setDrinks } = drinkSearchSlice.actions

export const selectDrinks = (state: any) => state.drinkSearch.drinks

export default drinkSearchSlice.reducer
