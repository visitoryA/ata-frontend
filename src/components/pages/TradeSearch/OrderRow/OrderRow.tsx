import React from 'react';
import { Order, TableColumn } from '../../../../types/type';
import './OrderRow.css';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from 'react-bootstrap';
import { OpenInNew } from '@mui/icons-material';

interface OrderRowProps {
    key: string,
    row: Order,
    columns: TableColumn[]
}

const OrderRow: React.FC<OrderRowProps> = (props: OrderRowProps) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [colNum, setColNum] = React.useState(1);
    
    React.useEffect(() => {
        setColNum(props.columns.length);
    });
    
    return (
        <React.Fragment>
        <TableRow key={props.key} sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
            <IconButton
                aria-label="expand-row-icon"
                size="small"
                onClick={() => setOpen(!open)}
            >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            </TableCell>

            {props.columns.map((col) => (
                <TableCell style={!!col.style? col.style : {}} className='order-data'>
                    {row[col.colName as keyof Order]?.toString()}
                </TableCell>
            ))}
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={colNum + 1}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                <Table className='sub-table' size="small" aria-label="purchases">
                    <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <span className='sub-table-header'>
                                {row.firstName}{!!row.middleName ? row.middleName + ' ' : ' '} {row.lastName} {!!row.margin ? `(${row.margin})` : ''} 
                            </span>
                            <Button variant='outline-primary' className='order-button'>Full review details <OpenInNew /></Button>
                        </TableCell>
                        <TableCell align='right' colSpan={2}>
                        <Button className='order-button'>ACCEPT</Button>
                        <Button variant='outline-danger' className='order-button'>Reject <KeyboardArrowDownIcon /></Button>
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell className='sub-table-cell'>
                        Net Amount: <b>{row.netAmt} USD</b>
                        </TableCell>
                        <TableCell className='sub-table-cell'>
                        Price: <b>{row.price}</b>
                        </TableCell>
                        <TableCell className='sub-table-cell'>
                        Exchange Rate: <b>{row.exchangeRate}</b>
                        </TableCell>
                        <TableCell className='sub-table-cell'>
                        O/S Limit: <b>{row.osLimit}</b>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='sub-table-cell'>
                        Reference Number: <b>{row.refNo}</b>
                        </TableCell>
                        <TableCell className='sub-table-cell'>
                        Date / Time: <b>{row.date}</b>
                        </TableCell>
                        <TableCell className='sub-table-cell'>
                        Telephone: <b>{row.tel}</b>
                        </TableCell>
                        <TableCell className='sub-table-cell'>
                        User ID: <b>{row.userId}</b>
                        </TableCell>
                    </TableRow>
                    <TableRow style={{padding: '15px'}}>
                        <TableCell colSpan={4} className='sub-table-cell static-warning' style={{ margin: '15px'}}>
                        <b style={{color: '#2a506a'}}>Warning(s)</b>
                        <ul>
                            <li>To trade this security in this account, a currency conversion will be mafe at the current rate.</li>
                            <li>A similar order has already been submitted.</li>
                            <li>Your transaction will be processed the following business day.</li>
                            <li>It is not possible to calculate the buying power of this order.</li>
                            <li>A cancellation will not be possible during business hours on market order. You can call a representative for more information.</li>
                            <li>For the above-mentoined reason(s), your order will be processed by one of our representatives.</li>
                        </ul>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </Box>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
}
export default OrderRow;