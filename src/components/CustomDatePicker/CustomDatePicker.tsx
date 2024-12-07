import React, { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enNZ } from 'date-fns/locale/en-NZ';
import './CustomDatePicker.css';
import { FormControl } from '@mui/material';

interface CustomDatePickerProps {
    label: string;
    fieldName: string;
    setData: (value: string, field: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props: CustomDatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (!!selectedDate) {
      const date = new Date(selectedDate);
      if (props.fieldName === 'endDate') {
        date.setDate(date.getDate() + 1);
      }
      const formattedDate = formatDateToString(date);
      props.setData(formattedDate, props.fieldName);
    }
  }, [selectedDate]);

  const formatDateToString = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  };

  return (
    <div className='custom-date-picker item-indent'>
      <label id='date-picker-label'>{props.label}</label>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enNZ}>
        <DatePicker
          className='date-picker-input'
          slotProps={{ textField: { size: 'small', sx: { m: 1, width: 170 } } }}
          value={selectedDate} 
          onChange={setSelectedDate} />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
