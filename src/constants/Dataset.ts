import { OperationEnum } from '../types/OperationEnum';
import { SymbolEnum } from '../types/SymbolEnum';
import { Order } from '../types/type';

export const dataSet: Order[] = [
    {
        account: '10000000',
        firstName: 'First-Name',
        middleName: '',
        lastName: 'Last-Name',
        description: '',
        status: 'Waiting',
        noRef: '',
        extRef: '',
        margin: 'US margin',
        tel: '',
        userId: '',
        qty: 0,
        filledQty: 0,
        price: 0,
        netAmt: 0,
        osLimit: 0,
        date: '2024/12/14 05:12:36',
        expDate: '2024/12/14 08:12:36',
        operation: OperationEnum.Buy,
        symbol: SymbolEnum.NA
    },
    {
        account: '10000000',
        firstName: 'First-Name',
        middleName: '',
        lastName: 'Last-Name',
        description: '',
        status: 'Waiting',
        noRef: '',
        extRef: '',
        margin: 'US margin',
        tel: '',
        userId: '',
        qty: 0,
        filledQty: 0,
        price: 0,
        netAmt: 0,
        osLimit: 0,
        date: '2024/12/25 05:12:36',
        expDate: '2024/12/25 08:12:36',
        operation: OperationEnum.Buy,
        symbol: SymbolEnum.NA
    }
]