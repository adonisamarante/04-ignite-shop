import { createContext, FC, ReactNode, useContext } from 'react'
import { IProduct } from '../pages'

export interface IOrderData {
  products: IProduct[]
}

interface IOrderContext {
  props: IOrderData
  children: ReactNode
}

const OrderContext = createContext<IOrderData>({} as IOrderData)

export const OrderProvider: FC<IOrderContext> = ({ props, children }) => {
  return <OrderContext.Provider value={props}>{children}</OrderContext.Provider>
}

export const useOrderData = (): IOrderData => useContext(OrderContext)
