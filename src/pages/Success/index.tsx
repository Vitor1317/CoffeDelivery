import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer, DeliveryData, Wrapper, IconData } from './styles'
import imageDelivery from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { DeliveryContext } from '../../context/delivery'

export function Success() {
  const { adressDelivery } = useContext(DeliveryContext)
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido Confirmado</h1>
      <p>Agora é so aguardar que logo o café chegará até você</p>
      <div>
        <Wrapper>
          <DeliveryData>
            <div>
              <IconData variant="purple">
                <MapPin size={16} weight="fill" />
              </IconData>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {adressDelivery?.rua}, {adressDelivery?.numero}
                  </strong>
                </p>
                <p>
                  {adressDelivery?.bairro} - {adressDelivery?.cidade},{' '}
                  {adressDelivery?.uf}
                </p>
              </div>
            </div>
            <div>
              <IconData variant="yellow">
                <Timer size={16} weight="fill" />
              </IconData>
              <div>
                <p>Previsão de entrega</p>
                <strong>20min - 30 min</strong>
              </div>
            </div>
            <div>
              <IconData variant="yellowDark">
                <CurrencyDollar size={16} weight="fill" />
              </IconData>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{adressDelivery?.paymentMethod}</strong>
              </div>
            </div>
          </DeliveryData>
        </Wrapper>
        <img src={imageDelivery} alt="" />
      </div>
    </SuccessContainer>
  )
}
