import "./App.css"
import VendingMap from "./components/VendingMap"
import VendingDisplayModal from "./features/vending-display/vending-display-modal"
import DrinkSearch from "./features/drink-search/drink-search"

function App() {
  return (
    <div className="App">
      <DrinkSearch />
      <VendingMap />
      <VendingDisplayModal />
    </div>
  )
}

export default App
