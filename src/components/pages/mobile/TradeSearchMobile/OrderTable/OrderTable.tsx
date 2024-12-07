import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { Order, TableColumn } from "../../../../../types/type";
import OrderRow from "../../../TradeSearch/OrderRow/OrderRow";
import './OrderTable.css';
import React from "react";

interface OrderTableProps {
    data: Order[],
    columns: TableColumn[]
}

const OrderTable: React.FC<OrderTableProps> = (props: OrderTableProps) => {
    const [order, setOrder] = React.useState('asc'); // 'asc' or 'desc'
    console.log(props.data.length);
    
    const handleRequestSort = () => {
        const isAsc = order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
    };

  const sortRows = (array: Order[]) => {
    return array.sort((a, b) => {
      if (a.date < b.date) {
        return order === 'asc' ? -1 : 1;
      }
      if (a.date > b.date) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  // Sorted data
  const sortedData = sortRows(props.data);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {props.columns.map((col) => (
              <TableCell align='center'>
                {col.colValue}
            </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row: Order) => (
            <TableRow key={row.account} sx={{ '& > *': { borderBottom: 'unset' } }}>
                {props.columns.map((col) => (
                    <TableCell style={!!col.style? col.style : {}} className='order-mobile'>
                        {row[col.colName as keyof Order]?.toString()}
                    </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;