import "./App.css"
import VendingDisplayModal from "./features/vending-display/vending-display-modal"
import DrinkSearch from "./features/drink-search/drink-search"
import Spinner from "./features/spinner/spinner"
import VendingMapContainer from "./components/MapContainer"

function App() {
  return (
    <div className="App">
      <Spinner />
      <DrinkSearch />
      <VendingMapContainer />
      <VendingDisplayModal />
    </div>
  )
}

export default App
