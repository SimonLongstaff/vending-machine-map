export interface VendingMachineType {
  id: number | null
  name: string
  lat: number
  lng: number
}

export interface VendingMachineDTO {
  name: string
  lat: number
  lng: number
}

export interface DrinkType {
  id: number
  name: string
  description: string
  price: number
}
