import React from "react"
import { TileLayer, useMapEvents } from "react-leaflet"
import { VendingIcons } from "../features/vending-icons/vending-icons"
import AddVendingModal from "../features/AddVending/AddVendingModal"
import MapButtons from "./MapButtons"
import { setHasLoadedVendingMachines } from "../features/hasLoadedVendingMachines/hasLoadedVendingMachineSlice"
import { setIsLoading } from "../features/spinner/spinnerSlice"
import { useAppDispatch } from "../app/hooks"

function VendingMap() {
  const dispatch = useAppDispatch()

  const map = useMapEvents({
    moveend: (e) => {
      dispatch(setHasLoadedVendingMachines(false))
    },
    locationfound: (e) => {
      dispatch(setIsLoading(false))
      map.flyTo(e.latlng, 18)
    },
    locationerror: (e) => {
      dispatch(setIsLoading(false))
      alert(e.message)
    },
  })

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <VendingIcons />
      <AddVendingModal />
      <MapButtons />
    </>
  )
}

export default VendingMap
