import { TableCellProps } from "@mui/material/TableCell/TableCell"
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
    refNo: string,
    extRef: string
    margin: string,
    tel: string,
    userId: string,
    date: string,
    expDate: string,
    qty: string,
    filledQty: string,
    price: string,
    netAmt: string,
    exchangeRate: string,
    osLimit: string,
    operation: OperationEnum,
    symbol: SymbolEnum
}

export type TableColumn = {
    colName: string,
    colValue: string,
    style?: React.CSSProperties
}