import { useState } from "react"
import styled from "styled-components"
import { useMapEvents } from "react-leaflet"
import { LeafletMouseEvent } from "leaflet"
import { addVendingMachine } from "../features/vending-icons/vendingAPI"
import { VendingMachineDTO } from "../Types"

function AddVendingModal() {
  const [modalEnabled, setModalEnabled] = useState(false)
  const [name, setName] = useState("")
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      if (modalEnabled) return
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
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="lat">Latitude</label>
        <input
          id="lat"
          type="text"
          readOnly={true}
          value={lat}
          onChange={(e) => setLat(parseFloat(e.target.value))}
        />
        <label htmlFor="lng">Longitude</label>
        <input
          id="lng"
          type="text"
          readOnly={true}
          value={lng}
          onChange={(e) => setLng(parseFloat(e.target.value))}
        />
        <button
          onClick={() => {
            const vendingMachine: VendingMachineDTO = {
              name: name,
              lat: lat,
              lng: lng,
            }
            Submit(vendingMachine)
            setName("")
            setLat(0)
            setLng(0)
            setModalEnabled(false)
          }}
        >
          Submit
        </button>
      </Modal>
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
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  background-color: white;
  width: 50vw;
  height: 50vh;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 9999;

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vh;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  max-height: 10vh;
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
