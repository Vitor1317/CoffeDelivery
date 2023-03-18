import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { AboutContainer, Item, ItemsContainer, Section } from './styles'
import coffeImg from '../../../../assets/coffee.svg'

export function About() {
  return (
    <AboutContainer>
      <Section>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsContainer>
          <Item variant="yellowDark">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>

            <span>Compra simples e segura</span>
          </Item>
          <Item variant="text">
            <span>
              <Package size={16} weight="fill" />
            </span>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item variant="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item variant="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemsContainer>
      </Section>
      <img src={coffeImg} alt="" />
    </AboutContainer>
  )
}
