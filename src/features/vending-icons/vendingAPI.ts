import { VendingMachineDTO, VendingMachineType } from "../../Types"
import { LatLngBounds } from "leaflet"

const api = "http://192.168.0.19:8000/"

export async function fetchVendingMachines(): Promise<VendingMachineType[]> {
  return fetch(api + "vending_machines")
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export async function fetchVendingMachinesInBounds(
  bounds: LatLngBounds,
): Promise<VendingMachineType[]> {
  return fetch(
    api +
      "vending_machines_local?lat1=" +
      bounds.getSouth() +
      "&lng1=" +
      bounds.getWest() +
      "&lat2=" +
      bounds.getNorth() +
      "&lng2=" +
      bounds.getEast(),
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export async function fetchVendingMachine(id: string) {
  return fetch(api + "vending_machines/" + id)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export async function addVendingMachine(vendingMachine: VendingMachineDTO) {
  return fetch(api + "vending_machines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vendingMachine),
  })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export async function fetchProducts(id: string) {
  return fetch(api + "vending_machines/" + id + "/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    })
}
