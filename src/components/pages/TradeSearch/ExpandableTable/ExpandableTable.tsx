import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Order, TableColumn } from '../../../../types/type';
import './ExpandableTable.css';
import OrderRow from '../OrderRow/OrderRow';
import { TableSortLabel } from '@mui/material';

interface ExpandableTableProps {
  data: Order[],
  columns: TableColumn[]
}

const ExpandableTable: React.FC<ExpandableTableProps> = (props: ExpandableTableProps) => {
  
  const [order, setOrder] = React.useState('asc'); // 'asc' or 'desc'

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
            <TableCell />
            {props.columns.map((col) => (
              <TableCell align='center'>
                {col.colName === 'date' ? 
                  (<TableSortLabel
                    direction={order === 'desc' ? order : 'asc'}
                    onClick={() => handleRequestSort()}
                  >
                    {col.colValue}
                  </TableSortLabel>)
               : col.colValue}
              
            </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row: Order) => (
            <OrderRow key={row.account} row={row} columns={props.columns} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpandableTable;