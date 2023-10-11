const api = "https://vending.yrin.duckdns.org/"

export async function fetchDrinks() {
  return fetch(api + "products")
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export async function searchProducts(search: string) {
  return fetch(api + "products_search?search=" + search)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
