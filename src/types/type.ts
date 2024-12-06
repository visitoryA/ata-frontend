import { OperationEnum } from "./OperationEnum"
import { SymbolEnum } from "./SymbolEnum"

export type Order = {
    account: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    description: string,
    status: string,
    noRef: string,
    extRef: string
    margin: string,
    tel: string,
    userId: string,
    date: string,
    expDate: string,
    qty: number,
    filledQty: number,
    price: number,
    netAmt: number,
    exchangeRate?: number,
    osLimit: number,
    operation: OperationEnum,
    symbol: SymbolEnum
}

export type TableColumn = {
    colName: string,
    colValue: string
}