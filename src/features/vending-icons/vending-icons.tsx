import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  selectVendingMachines,
  setVendingMachines,
} from "./vending-machineSlice"
import { Marker, useMapEvents } from "react-leaflet"
import { fetchProducts, fetchVendingMachinesInBounds } from "./vendingAPI"
import {
  setDrinks,
  setSelectedVendingMachine,
} from "../vending-display/vending-display-Slice"

export function VendingIcons() {
  const vendingItems = useAppSelector(selectVendingMachines)
  const dispatch = useAppDispatch()

  const map = useMapEvents({
    moveend: (e) => {
      //get the bounds of the map
      const bounds = e.target.getBounds()
      fetchVendingMachinesInBounds(bounds).then((result) => {
        dispatch(setVendingMachines(result))
      })
    },
  })

  if (!vendingItems || vendingItems?.length === undefined) return <></>

  let onClick = async (e: any) => {
    console.log(e)
    dispatch(setSelectedVendingMachine(e))
    dispatch(setDrinks(await fetchProducts(e.id)))
  }
  return (
    <div>
      {vendingItems.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          eventHandlers={{ click: () => onClick(item) }}
        />
      ))}
    </div>
  )
}
