import styled from "styled-components"
import { useState } from "react"
import { searchProducts } from "./drink-searchAPI"
import { DrinkType } from "../../Types"

export default function DrinkSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

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
        <ClearButton
          onClick={() => {
            setSearchTerm("")
            setSearchResults([])
          }}
        >
          Clear
        </ClearButton>
      </SearchContainer>
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
            <SearchResultsCard key={drink.id}>
              {drink.name} - {drink.description} - {drink.price}
            </SearchResultsCard>
          ))}
        </SearchResultsList>
      </SearchResults>
    )
}

const SearchContainer = styled.div`
  width: 100vw;
  padding: 10px;
  background: #b4b4b4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchField = styled.input`
  width: 50vw;
  height: 90%;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`
const ClearButton = styled.button`
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

const SearchResults = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9990;
`

const SearchResultsList = styled.ul`
  width: 50vw;
  height: 50vh;
  background: white;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchResultsCard = styled.li`
  width: 100%;
  height: 100px;
  background: #b4b4b4;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
