import { useState } from "react"
import { DrinkDTO } from "../Types"
import styled from "styled-components"

export default function AddProductModal() {
  const [showModal, setShowModal] = useState(false)
  const [drink, setDrink] = useState<DrinkDTO>({
    name: "",
    description: "",
    price: 0,
    size: 0,
    temperature: "cold",
  })

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true)
        }}
      >
        Add Product
      </button>
      {showModal ? (
        <Backdrop>
          <Modal>
            <ModalHeader>
              <ModalTitle>Add Product</ModalTitle>
              <ModalCloseButton
                onClick={() => {
                  setShowModal(false)
                  setDrink({
                    name: "",
                    description: "",
                    price: 0,
                    size: 0,
                    temperature: "cold",
                  })
                }}
              >
                X
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <ModalLabel htmlFor="name">Name</ModalLabel>
              <ModalInput
                type="text"
                value={drink.name}
                onChange={(e) => {
                  setDrink({ ...drink, name: e.target.value })
                }}
              />
              <ModalLabel htmlFor="description">Description</ModalLabel>
              <ModalTextArea
                placeholder="Description"
                value={drink.description}
                onChange={(e) => {
                  setDrink({ ...drink, description: e.target.value })
                }}
              />
              <ModalLabel htmlFor="price">Price</ModalLabel>
              <ModalInput
                type="number"
                placeholder="Price"
                value={drink.price}
                onChange={(e) => {
                  setDrink({ ...drink, price: parseInt(e.target.value) })
                }}
              />
              <ModalLabel htmlFor="size">Size</ModalLabel>
              <ModalInput
                type="number"
                placeholder="Size"
                value={drink.size}
                onChange={(e) => {
                  setDrink({ ...drink, size: parseInt(e.target.value) })
                }}
              />
              <ModalLabel htmlFor="temperature">Temperature</ModalLabel>
              <ModalSelect
                value={drink.temperature}
                onChange={(e) => {
                  setDrink({ ...drink, temperature: e.target.value })
                }}
              >
                <option value="cold">Cold</option>
                <option value="hot">Hot</option>
              </ModalSelect>
            </ModalBody>
            <ModalFooter>
              <ModalButton
                onClick={() => {
                  Submit(drink)
                  setDrink({
                    name: "",
                    description: "",
                    price: 0,
                    size: 0,
                    temperature: "cold",
                  })
                  setShowModal(false)
                }}
              >
                Submit
              </ModalButton>
            </ModalFooter>
          </Modal>
        </Backdrop>
      ) : (
        <></>
      )}
    </>
  )
}

function Submit(drink: DrinkDTO) {
  console.log(drink)
}

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  background: white;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  z-index: 9999;
`

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
  align-items: center;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ModalTitle = styled.h1`
  font-size: 20px;
  margin: 0;
`

const ModalCloseButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background: #ff0000;
  color: white;
  height: 40px;

  &:hover {
    background: white;
    color: #ff0000;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`

const ModalLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`

const ModalInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`

const ModalTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`

const ModalSelect = styled.select`
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

const ModalButton = styled.button`
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background: #ff0000;
  color: white;
  height: 40px;

  &:hover {
    background: white;
    color: #ff0000;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`
