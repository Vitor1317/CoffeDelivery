import { OrderAmount } from './components/OrderAmount'
import { OrderInput } from './components/OrderInput'
import { CheckoutContainer, InputDelevery, ListCoffeeAmount } from './styles'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { DeliveryContext } from '../../context/delivery'
import { useNavigate } from 'react-router-dom'
import { OrderContext } from '../../context/order'

const AdressDeliverySchema = zod.object({
  cep: zod.string().min(8).max(9),
  rua: zod.string(),
  numero: zod.number().min(0),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  paymentMethod: zod.string(),
})

export type AdressDeliveryType = zod.infer<typeof AdressDeliverySchema>

export function Checkout() {
  const { handleSetCurrentAdressDelivery } = useContext(DeliveryContext)
  const { resetCoffeesOrder } = useContext(OrderContext)
  const deliveryData = useForm<AdressDeliveryType>({
    resolver: zodResolver(AdressDeliverySchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = deliveryData
  const navigation = useNavigate()

  function handleSubmitAdressDelivery(data: AdressDeliveryType) {
    handleSetCurrentAdressDelivery(data)
    reset()
    navigation('/success')
    resetCoffeesOrder()
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSubmitAdressDelivery)}>
      <FormProvider {...deliveryData}>
        <InputDelevery>
          <h3>Complete seu pedido</h3>
          <OrderInput />
        </InputDelevery>
        <ListCoffeeAmount>
          <h3>Cafés selecionados</h3>
          <OrderAmount />
        </ListCoffeeAmount>
      </FormProvider>
    </CheckoutContainer>
  )
}
