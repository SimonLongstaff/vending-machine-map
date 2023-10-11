import { useState } from "react"
import styled from "styled-components"
import { Marker, useMapEvents } from "react-leaflet"
import { LeafletMouseEvent } from "leaflet"
import { addVendingMachine } from "../vending-icons/vendingAPI"
import { VendingMachineDTO } from "../../Types"
import { selectAddingVendingMachine } from "./addVendingSlice"
import { useAppSelector } from "../../app/hooks"

function AddVendingModal() {
  const [modalEnabled, setModalEnabled] = useState(false)
  const [name, setName] = useState("")
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [hasBin, setHasBin] = useState(false)

  const addingVendingMachine = useAppSelector(selectAddingVendingMachine)

  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      if (modalEnabled || !addingVendingMachine) return
      setLat(e.latlng.lat)
      setLng(e.latlng.lng)
      setModalEnabled(true)
    },
  })

  if (!modalEnabled) return <></>
  return (
    <Backdrop>
      <Modal>
        <ModalHeader>
          <h1>Add Vending Machine</h1>
          <CloseButton
            onClick={() => {
              setModalEnabled(false)
            }}
          >
            X
          </CloseButton>
        </ModalHeader>
        <InputContainer>
          <label htmlFor="name">Description</label>
          <input
            id="name"
            type="text"
            value={name}
            style={{ flex: 1, margin: "0 10px" }}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="hasBin">Has Bin</label>
          <input
            id="hasBin"
            type="checkbox"
            checked={hasBin}
            onChange={(e) => setHasBin(e.target.checked)}
          />
        </InputContainer>
        <button
          style={{ width: "fit-content", alignSelf: "center" }}
          onClick={() => {
            const vendingMachine: VendingMachineDTO = {
              name: name,
              lat: lat,
              lng: lng,
              hasBin: hasBin,
            }
            Submit(vendingMachine)
            setName("")
            setLat(0)
            setLng(0)
            setModalEnabled(false)
            setHasBin(false)
          }}
        >
          Submit
        </button>
      </Modal>
      <Marker position={[lat, lng]} />
    </Backdrop>
  )
}

function Submit(vendingMachine: VendingMachineDTO) {
  console.log(vendingMachine)
  addVendingMachine(vendingMachine).then((r) => {
    console.log(r)
  })
}

const Backdrop = styled.div`
  position: fixed;
  z-index: 9998;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`

const Modal = styled.div`
  background-color: white;
  width: 50vw;
  height: fit-content;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  margin-top: 10dvh;

  @media (max-width: 768px) {
    width: 85vw;
    padding: 10px;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  max-height: 10vh;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CloseButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: darkred;
  }

  &:focus {
    outline: none;
  }
`

export default AddVendingModal
