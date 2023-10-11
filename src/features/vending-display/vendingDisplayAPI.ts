const api = "https://vending.yrin.duckdns.org/"

export async function fetchProducts(id: string) {
  return fetch(api + "products/vending_machine/" + { id })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
