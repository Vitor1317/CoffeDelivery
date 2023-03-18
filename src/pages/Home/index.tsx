import { useContext } from 'react'
import { OrderContext } from '../../context/order'
import { About } from './components/About'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeContainer, HomeContainer } from './styles'

export function Home() {
  const { coffees } = useContext(OrderContext)

  return (
    <HomeContainer>
      <About />
      <h1>Nossos Cafés</h1>
      <CoffeeContainer>
        {coffees.map((data) => (
          <CoffeeCard key={data.title} data={data} />
        ))}
      </CoffeeContainer>
    </HomeContainer>
  )
}
