import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'

import {
  Card,
  MethodsPayments,
  MethodsPaymentsButton,
  OrderInputContainer,
  OrderInputs,
  Title,
} from './styles'

export function OrderInput() {
  const { register, control } = useFormContext()

  return (
    <OrderInputContainer>
      <Card>
        <Title>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Title>
        <OrderInputs>
          <input type="text" required placeholder="CEP" {...register('cep')} />
          <input type="text" required placeholder="Rua" {...register('rua')} />
          <input
            type="number"
            required
            min={0}
            placeholder="Número"
            {...register('numero', { valueAsNumber: true })}
          />
          <input type="text" placeholder="Complemento" />
          <input
            type="text"
            required
            placeholder="Bairro"
            {...register('bairro')}
          />
          <div>
            <input
              type="text"
              required
              placeholder="Cidade"
              {...register('cidade')}
            />
            <input type="text" required placeholder="UF" {...register('uf')} />
          </div>
        </OrderInputs>
      </Card>
      <Card>
        <Title>
          <CurrencyDollar size={22} color="#8047F8" />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Title>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <MethodsPayments
              required
              onValueChange={field.onChange}
              value={field.value}
            >
              <MethodsPaymentsButton value="cartão de credito">
                <CreditCard size={16} color="#8047F8" />
                <span>Cartão de crédito</span>
              </MethodsPaymentsButton>
              <MethodsPaymentsButton value="cartão de débito">
                <Bank size={16} color="#8047F8" />
                <span>Cartão de débito</span>
              </MethodsPaymentsButton>
              <MethodsPaymentsButton value="dinheiro">
                <Money size={16} color="#8047F8" />
                <span>Dinheiro</span>
              </MethodsPaymentsButton>
            </MethodsPayments>
          )}
        />
      </Card>
    </OrderInputContainer>
  )
}
