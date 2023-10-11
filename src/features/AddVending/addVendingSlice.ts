import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AddVendingState {
  addingVendingMachine: boolean
}

const initialState: AddVendingState = {
  addingVendingMachine: false,
}

export const addVendingSlice = createSlice({
  name: "addVending",
  initialState,
  reducers: {
    setAddingVendingMachine: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.addingVendingMachine = action.payload
    },
  },
})

export const { setAddingVendingMachine } = addVendingSlice.actions

export const selectAddingVendingMachine = (state: any) =>
  state.addVending.addingVendingMachine

export default addVendingSlice.reducer
