export interface VendingMachineType {
  id: string
  name: string
  lat: number
  lng: number
  hasBin: boolean
}

export interface VendingMachineDTO {
  name: string
  lat: number
  lng: number
  hasBin: boolean
}

export interface DrinkType {
  id: string
  name: string
  description: string
  price: number
  size: number
  temperature: string
}

export interface DrinkDTO {
  name: string
  description: string
  price: number
  size: number
  temperature: string
}
