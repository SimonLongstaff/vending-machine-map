const api = "http://192.168.0.19:8000/"

export async function fetchDrinks() {
  return fetch(api + "drinks")
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
