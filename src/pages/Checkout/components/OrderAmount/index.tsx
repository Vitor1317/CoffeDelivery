import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeType, OrderContext } from '../../../../context/order'
import {
  ButtonCoffee,
  CoffeeOrder,
  OrderAmountContainer,
  SubmitOrder,
  TotalPrice,
} from './styles'

export function OrderAmount() {
  const { cart, changeCoffeeOrder } = useContext(OrderContext)
  const navigation = useNavigate()

  const cartIsEmpty = cart.length === 0

  const priceOrder = cart.reduce((acc, item) => {
    return item.order * item.price + acc
  }, 0)

  useEffect(() => {
    if (cartIsEmpty) {
      navigation('/')
    }
  }, [navigation, cartIsEmpty])

  function priceOrderFormated(price: number) {
    const formated = String(price).split('.')

    if (formated[1] !== undefined) {
      return formated[0].concat(',').concat(formated[1].concat('0').slice(0, 2))
    }

    return formated[0].concat(',00')
  }

  function increment(data: CoffeeType) {
    changeCoffeeOrder(data.id, data.order + 1)
  }

  function decrement(data: CoffeeType) {
    if (data.order >= 2) {
      changeCoffeeOrder(data.id, data.order - 1)
    }
  }

  function remove(data: CoffeeType) {
    changeCoffeeOrder(data.id, 0)
  }

  return (
    <OrderAmountContainer>
      <>
        {cart.map((coffee) => (
          <CoffeeOrder key={coffee.id}>
            <div>
              <img src={coffee.src} alt="" />
              <ButtonCoffee>
                <span>{coffee.title}</span>
                <div>
                  <button type="button">
                    <Minus size={14} onClick={() => decrement(coffee)} />
                    {coffee.order}
                    <Plus size={14} onClick={() => increment(coffee)} />
                  </button>
                  <button type="button" onClick={() => remove(coffee)}>
                    <Trash size={14} />
                    <span>Remover</span>
                  </button>
                </div>
              </ButtonCoffee>
            </div>
            <strong>
              R$ {String(coffee.price).replace('.', ',').concat('0')}
            </strong>
          </CoffeeOrder>
        ))}

        <SubmitOrder>
          <TotalPrice>
            <div>
              <span>Total de itens</span>
              <span>R$ {priceOrderFormated(priceOrder)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 5,00</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {priceOrderFormated(priceOrder + 5)}</strong>
            </div>
          </TotalPrice>
          <button type="submit">Confirmar Pedido</button>
        </SubmitOrder>
      </>
    </OrderAmountContainer>
  )
}
