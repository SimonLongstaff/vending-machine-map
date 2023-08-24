import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { VendingMachineType } from "../../Types"

export interface VendingMachineState {
  vendingMachines: VendingMachineType[]
}

const initialState: VendingMachineState = {
  vendingMachines: [],
}

export const vendingMachineSlice = createSlice({
  name: "vendingMachine",
  initialState,
  reducers: {
    setVendingMachines: (
      state,
      action: PayloadAction<VendingMachineType[]>,
    ) => {
      state.vendingMachines = action.payload
    },
  },
})

export const { setVendingMachines } = vendingMachineSlice.actions

export const selectVendingMachines = (state: RootState) =>
  state.vendingMachine.vendingMachines

export default vendingMachineSlice.reducer
