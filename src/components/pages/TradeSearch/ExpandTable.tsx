import React, { useState } from 'react';
import { Order, TableColumn } from '../../../types/type';
import { Button } from 'react-bootstrap';

interface TableProps {
  column: TableColumn[];
  data: Order[];
}

const ExpandableTable: React.FC<TableProps> = ({ column, data }) => {
  // State to track expanded rows
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // Toggle the expansion of a row
  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {column.map((col)  => {
              return <th>{col.colValue}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <React.Fragment key={order.account}>
              <tr onClick={() => toggleRow(order.account)}>
                <td colSpan={column.length}>
                  <div style={{width: '100%', minWidth: 'fit-content'}}>
                    {column.map((col) => (
                      <td>{order[col.colName as keyof Order]?.toString()}</td>
                    ))}
                  </div>
                  {expandedRow === order.account && (
                    <tr>
                      <td colSpan={column.length}>
                        <div style={{backgroundColor: '#fafaff'}}>
                          <div>
                            {order.firstName} {order.middleName} {order.lastName} ({order.margin})
                            <Button variant='outline-primary'>Full review details</Button>
                            <Button variant='primary'>ACCEPT</Button>
                            <Button variant='outline-danger'>Reject</Button>
                          </div>
                          <div>
                            <div>
                              <td colSpan={4}>Net Amount: {order.netAmt}</td>
                            </div>
                            <div style={{backgroundColor: '#f5f5f5', padding: '15px', fontSize: '12px'}}>
                              <b style={{color: '#2a506a'}}>Warning(s)</b>
                              <ul>
                                <li>To trade this security in this account, a currency conversion will be mafe at the current rate.</li>
                                <li>A similar order has already been submitted.</li>
                                <li>Your transaction will be processed the following business day.</li>
                                <li>It is not possible to calculate the buying power of this order.</li>
                                <li>A cancellation will not be possible during business hours on market order. You can call a representative for more information.</li>
                                <li>For the above-mentoined reason(s), your order will be processed by one of our representatives.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                </td>
                {/* {column.map((col) => (
                  <td>{order[col.colName as keyof Order]?.toString()}</td>
                ))} */}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;
