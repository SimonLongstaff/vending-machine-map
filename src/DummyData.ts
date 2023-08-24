import { DrinkType, VendingMachineType } from "./Types"

export default class Data {
  public static readonly Products = [
    {
      id: 1,
      name: "Coke",
      description: "Coke",
      price: 100,
    },
    {
      id: 2,
      name: "Pepsi",
      description: "Pepsi",
      price: 100,
    },
    {
      id: 3,
      name: "Water",
      description: "Water",
      price: 100,
    },
  ]
  public static readonly VendingItemLinkTable = [
    {
      id: 1,
      vendingMachineId: 1,
      productId: 1,
    },
    {
      id: 2,
      vendingMachineId: 1,
      productId: 2,
    },
  ]

  public static VendingMachines(): VendingMachineType[] {
    return [
      {
        id: 1,
        name: "Nakano",
        description: "Nakano test vending machine",
        lat: 35.71006468356279,
        lng: 139.66860998469298,
      },
      {
        id: 2,
        name: "Shinjuku",
        description: "Shinjuku test vending machine",
        lat: 35.690921,
        lng: 139.700258,
      },
    ]
  }

  public static async getVendingMachines(): Promise<VendingMachineType[]> {
    return Data.VendingMachines()
  }

  public static async getVendingMachineDrinks(
    vendingMachineId: number,
  ): Promise<DrinkType[]> {
    const vendingMachineDrinks = Data.VendingItemLinkTable.filter(
      (vendingItemLink) =>
        vendingItemLink.vendingMachineId === vendingMachineId,
    )
    const products = Data.Products.filter((product) =>
      vendingMachineDrinks.find(
        (vendingMachineDrink) => vendingMachineDrink.productId === product.id,
      ),
    )
    return products
  }
}
