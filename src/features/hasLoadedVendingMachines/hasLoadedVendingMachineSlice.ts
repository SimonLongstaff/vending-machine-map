import { RootState } from "../../app/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface HasLoadedVendingMachineState {
  hasLoadedVendingMachines: boolean
}

const initialState: HasLoadedVendingMachineState = {
  hasLoadedVendingMachines: false,
}

export const hasLoadedVendingMachineSlice = createSlice({
  name: "hasLoadedVendingMachine",
  initialState,
  reducers: {
    setHasLoadedVendingMachines: (state, action: PayloadAction<boolean>) => {
      state.hasLoadedVendingMachines = action.payload
    },
  },
})

export const { setHasLoadedVendingMachines } =
  hasLoadedVendingMachineSlice.actions

export const selectHasLoadedVendingMachines = (state: RootState) =>
  state.hasLoadedVendingMachine.hasLoadedVendingMachines

export default hasLoadedVendingMachineSlice.reducer
