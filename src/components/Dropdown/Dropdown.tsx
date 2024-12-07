import React, { useEffect, useState } from 'react';
import './Dropdown.css'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface DropdownProps {
    label: string;
    fieldName: string,
    defaultValue: string;
    options: string[];
    setData: (value: string, field: string) => void;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(props.defaultValue);

  useEffect(() => {
    props.setData(selectedOption, props.fieldName);
  }, [selectedOption]);
  
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown item-indent'>
      <label>{props.label}</label>
      <FormControl sx={{ m: 1, width: 170 }} size='small'>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
        >
          {props.options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
