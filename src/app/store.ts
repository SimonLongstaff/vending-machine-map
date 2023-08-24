import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import vendingMachineReducer from "../features/vending-icons/vending-machineSlice"
import vendingDisplayReducer from "../features/vending-display/vending-display-Slice"
import drinkSearchReducer from "../features/drink-search/drink-searchSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vendingMachine: vendingMachineReducer,
    vendingDisplay: vendingDisplayReducer,
    drinkSearch: drinkSearchReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
