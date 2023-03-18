import { createContext, ReactNode, useEffect, useState } from 'react'
import { dataCoffee } from '../utils/coffeeData'

export interface CoffeeType {
  id: number
  title: string
  description: string
  price: number
  variant: string[]
  src: string
  order: number
}

interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  coffees: CoffeeType[]
  changeCoffeeOrder: (id: number, value: number) => void
  cart: CoffeeType[]
  resetCoffeesOrder: () => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>(dataCoffee)

  const cart = coffees.filter((coffee) => coffee.order >= 1)

  function changeCoffeeOrder(id: number, value: number) {
    const currentCoffee = coffees.map((coffee) => {
      if (coffee.id === id) {
        return { ...coffee, order: value }
      }

      return coffee
    })

    const data = JSON.stringify(currentCoffee)
    localStorage.setItem('@vitor-coffee:cart-1.0', data)
    setCoffees(currentCoffee)
  }

  function resetCoffeesOrder() {
    const reseted = coffees.map((coffee) => {
      return { ...coffee, order: 0 }
    })

    setCoffees(reseted)
  }

  useEffect(() => {
    const cartJSON = localStorage.getItem('@vitor-coffee:cart-1.0')

    if (cartJSON !== null) {
      const data = JSON.parse(cartJSON)

      setCoffees(data)
    }
  }, [])

  return (
    <OrderContext.Provider
      value={{
        cart,
        coffees,
        changeCoffeeOrder,
        resetCoffeesOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
