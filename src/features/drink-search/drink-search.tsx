import styled from "styled-components"
import React, { useState } from "react"
import { searchProducts } from "./drink-searchAPI"
import { DrinkType } from "../../Types"
import {
  selectAddingVendingMachine,
  setAddingVendingMachine,
} from "../AddVending/addVendingSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import BurgerMenu from "../../components/NavBarBurgerMenu"
import ProductCard from "../../components/ProductCard"

export default function DrinkSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const dispatch = useAppDispatch()
  const addingVendingMachine = useAppSelector(selectAddingVendingMachine)

  if (addingVendingMachine)
    return (
      <>
        <SearchContainer>
          <HeaderButton
            onClick={() => {
              dispatch(setAddingVendingMachine(false))
            }}
          >
            Finished Adding
          </HeaderButton>
        </SearchContainer>
      </>
    )

  return (
    <>
      <SearchContainer>
        <SearchField
          type="text"
          placeholder="Search drinks"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            searchProducts(e.target.value).then((res) => {
              setSearchResults(res)
            })
          }}
        />
      </SearchContainer>
      <BurgerMenu />
      {GetSearchResults(searchTerm, searchResults)}
    </>
  )
}

function GetSearchResults(searchterm: string, searchResults: DrinkType[]) {
  if (!searchResults || searchterm === "") return <></>
  else if (searchResults.length === 0) return <></>
  else
    return (
      <SearchResults>
        <SearchResultsList>
          {searchResults.map((drink) => (
            <ProductCard key={drink.id} {...drink} />
          ))}
        </SearchResultsList>
      </SearchResults>
    )
}

const SearchContainer = styled.div`
  padding: 10px;
  background: #177a72;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchField = styled.input`
  width: 50vw;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 20px;
  text-align: center;
`

const SearchResults = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9990;
`

const SearchResultsList = styled.div`
  height: 90vh;
  border-radius: 5px;
  margin: 10px;
  overflow-y: scroll;
`

const HeaderButton = styled.button`
  border: none;
  background: #8d3131;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 10px;

  &:hover {
    background: #fff;
    color: #8d3131;
  }
`
