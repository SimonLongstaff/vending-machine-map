import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectVendingMachines } from "./vending-machineSlice"
import VendingIcon from "../../components/vending-icon"

export function VendingIcons() {
  const vendingItems = useAppSelector(selectVendingMachines)
  const dispatch = useAppDispatch()

  if (!vendingItems || vendingItems?.length === undefined) return <></>

  return (
    <>
      {vendingItems.map((item) => (
        <VendingIcon key={item.id} {...item} />
      ))}
    </>
  )
}
