import styled from "styled-components"
import React, { useState } from "react"
import { setAddingVendingMachine } from "../features/AddVending/addVendingSlice"
import { useAppDispatch } from "../app/hooks"
import { MdClose, MdMenu } from "react-icons/md"

interface BurgerMenuProps {
  open: boolean
  onClick: () => void
}

interface MenuProps {
  open: boolean
}

const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(0, 0, 0, 0.8);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  text-align: right;
  padding: 1.5rem;
  position: fixed;
  top: 64px;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 600;

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #177a72;
    }

    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: right;
    }
  }
`

export default function BurgerMenu() {
  const [open, setOpen] = useState(false)

  const dispatch = useAppDispatch()
  const AddVendingMachine = () => {
    dispatch(setAddingVendingMachine(true))
  }

  return (
    <>
      {!open && (
        <MdMenu
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 9999,
            fontSize: "45px",
            cursor: "pointer",
            color: "#ffffff",
            fontWeight: "lighter",
          }}
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <MdClose
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 9999,
            fontSize: "45px",
            cursor: "pointer",
            color: "#ff5555",
            fontWeight: "lighter",
          }}
          onClick={() => setOpen(!open)}
        />
      )}
      <Menu open={open}>
        <a
          onClick={() => {
            AddVendingMachine()
            setOpen(!open)
          }}
        >
          Add Vending Machine
        </a>
        <a
          onClick={() => {
            setOpen(!open)
          }}
        >
          Add Product
        </a>
      </Menu>
    </>
  )
}
