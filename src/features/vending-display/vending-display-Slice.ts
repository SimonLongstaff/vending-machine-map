import { DrinkType, VendingMachineType } from "../../Types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface VendingDisplayState {
  selectedVendingMachine: VendingMachineType | null
  drinks: DrinkType[]
}

const initialState: VendingDisplayState = {
  selectedVendingMachine: null,
  drinks: [],
}

export const vendingDisplaySlice = createSlice({
  name: "vendingDisplay",
  initialState,
  reducers: {
    setSelectedVendingMachine: (
      state,
      action: PayloadAction<VendingMachineType | null>,
    ) => {
      state.selectedVendingMachine = action.payload
    },
    setDrinks: (state, action: PayloadAction<DrinkType[]>) => {
      state.drinks = action.payload
    },
  },
})

export const { setSelectedVendingMachine, setDrinks } =
  vendingDisplaySlice.actions

export const selectSelectedVendingMachine = (state: any) =>
  state.vendingDisplay.selectedVendingMachine
export const selectDrinks = (state: any) => state.vendingDisplay.drinks

export default vendingDisplaySlice.reducer
