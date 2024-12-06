import React, { useEffect, useState } from 'react';
import './Dropdown.css'

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
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='dropdown'>
      <label className='field-name' htmlFor='dropdown'>{props.label}</label>
      <select className='dropdown-selector' id='dropdown' value={selectedOption} onChange={handleChange}>
        {props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
