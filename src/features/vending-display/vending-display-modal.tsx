import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  selectDrinks,
  selectSelectedVendingMachine,
  setSelectedVendingMachine,
} from "./vending-display-Slice"
import { DrinkType, VendingMachineType } from "../../Types"
import styled from "styled-components"

export default function VendingDisplayModal() {
  const dispatch = useAppDispatch()

  let onClick = () => {
    dispatch(setSelectedVendingMachine(null))
  }

  const selectedVending: VendingMachineType = useAppSelector(
    selectSelectedVendingMachine,
  )
  const vendingItems: DrinkType[] = useAppSelector(selectDrinks)

  if (!selectedVending) return <></>

  return (
    <ModalBackground>
      <Modal>
        <ModalHeader>
          <h1>{selectedVending.name}</h1>
          <CloseButton onClick={onClick}>X</CloseButton>
        </ModalHeader>
        <h3>Products</h3>
        <ProductList>
          {vendingItems.map((item) => (
            <ProductCard key={item.id}>
              <ProductCardHeader>
                {" "}
                {item.name} - ¥{item.price}
              </ProductCardHeader>
              <p>{item.description}</p>
            </ProductCard>
          ))}
        </ProductList>
      </Modal>
    </ModalBackground>
  )
}

const ModalBackground = styled.div`
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

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  max-height: 80vh;
`

const ProductCard = styled.div`
  background: #b4b4b4;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`

const ProductCardHeader = styled.h4`
  display: flex;
  justify-content: space-between;
`

const CloseButton = styled.button`
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
`
