import React, { useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { latLng } from "leaflet"
import styled from "styled-components"
import { VendingIcons } from "../features/vending-icons/vending-icons"
import { useAppDispatch } from "../app/hooks"
import { setVendingMachines } from "../features/vending-icons/vending-machineSlice"
import { fetchVendingMachines } from "../features/vending-icons/vendingAPI"
import AddVendingModal from "./AddVendingModal"

const tokyo = latLng(35.68630240145625, 139.77355957031253)

const StyledMap = styled(MapContainer)`
  width: 100vw;
  height: 100vh;
`

const MapFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

function VendingMap() {
  const dispatch = useAppDispatch()

  //Fetch data from API using the async method Data.GetVendingMachines()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchVendingMachines()
      dispatch(setVendingMachines(result))
    }
    fetchData()
  }, [dispatch])

  return (
    <MapFlex>
      <StyledMap id="map" center={tokyo} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <VendingIcons />
        <AddVendingModal />
      </StyledMap>
    </MapFlex>
  )
}

export default VendingMap
