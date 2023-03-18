import {
  CartContainer,
  CoffeeCardContainer,
  FooterCard,
  VariantCoffe,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CoffeeType, OrderContext } from '../../../../context/order'

interface CoffeeCardProps {
  data: CoffeeType
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { changeCoffeeOrder } = useContext(OrderContext)
  const navigation = useNavigate()

  function increment() {
    changeCoffeeOrder(data.id, data.order + 1)
  }

  function decrement() {
    if (data.order >= 1) {
      changeCoffeeOrder(data.id, data.order - 1)
    }
  }

  function addCart() {
    if (data.order === 0) {
      changeCoffeeOrder(data.id, data.order + 1)
    } else {
      changeCoffeeOrder(data.id, data.order)
      navigation('/checkout')
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={data.src} alt="" />
      <VariantCoffe>
        {data.variant.map((item) => (
          <strong key={item}>{item}</strong>
        ))}
      </VariantCoffe>
      <h3>{data.title}</h3>
      <small>{data.description}</small>
      <FooterCard>
        <span>
          R$<h2>{String(data.price).replace('.', ',').concat('0')}</h2>
        </span>
        <CartContainer>
          <button>
            <Minus onClick={decrement} size={14} weight="bold" />
            {data.order}
            <Plus onClick={increment} size={14} weight="bold" />
          </button>

          <div onClick={addCart}>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </CartContainer>
      </FooterCard>
    </CoffeeCardContainer>
  )
}
