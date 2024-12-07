import { OperationEnum } from '../types/OperationEnum';
import { SymbolEnum } from '../types/SymbolEnum';
import { Order } from '../types/type';

const createData = (account: string, qty: string, 
    firstName: string, lastName: string, date: string, middleName?: string): Order => {
    return {
        account: account,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        description: 'NATIONAL BANK OF CDA',
        status: 'Waiting',
        noRef: '95749207',
        refNo: '1234567890',
        extRef: '2-XXXXXXX1-0',
        margin: 'US margin',
        tel: '000-000-0000',
        userId: '12344321',
        qty: qty,
        filledQty: '1',
        price: '135.00',
        exchangeRate: '1.3357',
        netAmt: '1,152.95',
        osLimit: '140.0',
        date: date,
        expDate: '2024/12/14 08:12:36',
        operation: OperationEnum.Buy,
        symbol: SymbolEnum.NA
    }
}
export const dataSet: Order[] = [
    createData('10000000', '11', 'First-Name', 'Last-Name', '2024/12/14 05:12:36'),
    createData('10000001', '5', 'firstName', 'lastName', '2024/12/01 07:11:45'),
    createData('10000002', '12', 'name', 'last_name', '2024/12/20 07:11:45', 'middle-name'),
]