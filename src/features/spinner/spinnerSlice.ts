import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface SpinnerState {
  isLoading: boolean
}

const initialState: SpinnerState = {
  isLoading: false,
}

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setIsLoading } = spinnerSlice.actions

export const selectIsLoading = (state: RootState) => state.spinner.isLoading

export default spinnerSlice.reducer
