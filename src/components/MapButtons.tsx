import { setIsLoading } from "../features/spinner/spinnerSlice"
import { MdMyLocation, MdSearch } from "react-icons/md"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectHasLoadedVendingMachines,
  setHasLoadedVendingMachines,
} from "../features/hasLoadedVendingMachines/hasLoadedVendingMachineSlice"
import { fetchVendingMachinesInBounds } from "../features/vending-icons/vendingAPI"
import { setVendingMachines } from "../features/vending-icons/vending-machineSlice"
import { useMapEvents } from "react-leaflet"

const SearchButtonFlex = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 70px;
  width: 100dvw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SearchButton = styled.button`
  padding: 10px;
  height: 50px;
  border-radius: 10px;
  background-color: #177a72;
  border: 1px solid #177a72;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;

  &:hover {
    background-color: #f5f5f5;
    color: #177a72;
  }

  &:active {
    animation: click 0.1s linear;
  }

  @keyframes click {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`

const LocationButton = styled.button`
  padding: 10px;
  height: 50px;
  border-radius: 10px;
  background-color: #177a72;
  border: 1px solid #177a72;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  justify-self: flex-end;

  &:hover {
    background-color: #f5f5f5;
    color: #177a72;
  }

  &:active {
    animation: click 0.1s linear;
  }

  @keyframes click {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`

export default function MapButtons() {
  const map = useMapEvents({})
  const dispatch = useAppDispatch()

  const hasLoadedVendingMachines = useAppSelector(
    selectHasLoadedVendingMachines,
  )

  const handleSearchClick = () => {
    if (map.getZoom() < 15) {
      map.setZoom(15)
    }
    const bounds = map.getBounds()
    fetchVendingMachinesInBounds(bounds).then((result) => {
      dispatch(setVendingMachines(result))
      dispatch(setHasLoadedVendingMachines(true))
    })
  }

  const ShouldShowSearchButton = () => {
    if (hasLoadedVendingMachines === false) {
      return (
        <SearchButton
          id={"search-button"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleSearchClick}
        >
          <MdSearch />
        </SearchButton>
      )
    }
    return <></>
  }

  return (
    <SearchButtonFlex>
      <div style={{ flex: 1 }}>{ShouldShowSearchButton()}</div>
      <LocationButton
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          dispatch(setIsLoading(true))
          map.locate()
        }}
      >
        <MdMyLocation />{" "}
      </LocationButton>
    </SearchButtonFlex>
  )
}
