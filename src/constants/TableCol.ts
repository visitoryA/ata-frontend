import { TableColumn } from "../types/type";

export const orderTable: TableColumn[] = [
    {colName: 'account', colValue: 'Account', style: {'textAlign': 'center', 'color': 'var(--light-blue-text)' } as React.CSSProperties},
    {colName: 'operation', colValue: 'Operation', style: {'textAlign': 'center', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'symbol', colValue: 'Symbol', style: {'textAlign': 'center', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'description', colValue: 'Description', style: {'textAlign': 'left', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'qty', colValue: 'Qty.', style: {'textAlign': 'right', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'filledQty', colValue: 'Filled Qty.', style: {'textAlign': 'right', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'price', colValue: 'Price', style: {'textAlign': 'right', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'status', colValue: 'Status', style: {'textAlign': 'center', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'date', colValue: 'Date', style: {'textAlign': 'center', 'color': 'gray' } as React.CSSProperties},
    {colName: 'expDate', colValue: 'Expiration', style: {'textAlign': 'left', 'color': 'gray' } as React.CSSProperties},
    {colName: 'noRef', colValue: 'No. Ref.', style: {'textAlign': 'left', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'extRef', colValue: 'Ext. Ref.', style: {'textAlign': 'left', 'color': 'gray' } as React.CSSProperties},
];

export const orderMobileTable: TableColumn[] = [
    {colName: 'account', colValue: 'Account', style: {'textAlign': 'center', 'color': 'var(--light-blue-text)' } as React.CSSProperties},
    {colName: 'operation', colValue: 'Operation', style: {'textAlign': 'center', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'symbol', colValue: 'Symbol', style: {'textAlign': 'center', 'color': 'var(--dark-blue-text)' } as React.CSSProperties},
    {colName: 'status', colValue: 'Status', style: {'textAlign': 'center', 'color': 'var(--dark-blue-text)' } as React.CSSProperties}
]