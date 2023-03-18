import { Cart, HeaderContainer, Locale } from './styles'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../context/order'

export function Header() {
  const { cart } = useContext(OrderContext)
  const navigate = useNavigate()

  function Redirect() {
    if (cart.length > 0) {
      navigate('checkout')
    }
  }

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Copo de café" />
      </NavLink>
      <div>
        <Locale>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Locale>

        <Cart onClick={Redirect}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </Cart>
      </div>
    </HeaderContainer>
  )
}
