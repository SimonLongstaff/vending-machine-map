const api = "http://192.168.0.19:8000/"

export async function fetchProducts(id: string) {
  return fetch(api + "vending_machines/" + { id } + "/products")
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
