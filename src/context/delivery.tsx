import { createContext, ReactNode, useEffect, useState } from 'react'

interface DeliveryContextProviderProps {
  children: ReactNode
}

interface AdressDeliveryType {
  cep: string
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

interface DeliveryContextType {
  adressDelivery: AdressDeliveryType | undefined
  handleSetCurrentAdressDelivery: (data: AdressDeliveryType) => void
}

export const DeliveryContext = createContext({} as DeliveryContextType)

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [adressDelivery, setAdressDelivery] = useState<AdressDeliveryType>()

  function handleSetCurrentAdressDelivery(data: AdressDeliveryType) {
    setAdressDelivery(data)
    const dataStorage = JSON.stringify(data)
    localStorage.setItem('@vitor-coffee:delivery-1.0', dataStorage)
  }

  useEffect(() => {
    const adressDeliveryJSON = localStorage.getItem(
      '@vitor-coffee:delivery-1.0',
    )

    if (adressDeliveryJSON !== null) {
      const data = JSON.parse(adressDeliveryJSON)

      setAdressDelivery(data)
    }
  }, [])

  return (
    <DeliveryContext.Provider
      value={{ adressDelivery, handleSetCurrentAdressDelivery }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
