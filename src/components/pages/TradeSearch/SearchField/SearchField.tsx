import React from 'react';
import CustomDatePicker from '../../../CustomDatePicker/CustomDatePicker';
import Dropdown from '../../../Dropdown/Dropdown';
import './SearchField.css'
import { defaultPeriod, defaultStatus, Period, Status } from '../../../../constants/ConstantData';
import Button from 'react-bootstrap/Button';

interface SearchProps {
    totalData: number;
    setData: (value: string, field: string) => void;
    filterData: () => void;
}

const SearchField: React.FC<SearchProps> = (props: SearchProps) => {
    const totalDataStr = new Intl.NumberFormat('en-En').format(props.totalData);

    return (<div className='header-item'>
        <div className='search-text'>
            <b style={{fontSize: 'calc(15px + 2vmin)'}}>Search</b>
            <div style={{fontSize: 'calc(10px + 1vmin)'}}>Search results: {totalDataStr}</div>
        </div>
        <div className='search-field inline'>
            <Dropdown label='Period' fieldName='period'
                defaultValue={defaultPeriod} options={Period} setData={props.setData} />
            <Dropdown label='Status' fieldName='status'
                defaultValue={defaultStatus} options={Status} setData={props.setData} />
            <CustomDatePicker label='From' fieldName='startDate' setData={props.setData} />
            <CustomDatePicker label='To' fieldName='endDate' setData={props.setData} />
            <Button variant='Primary' onClick={props.filterData}>Search</Button>
        </div>
    </div>);
};
export default SearchField;