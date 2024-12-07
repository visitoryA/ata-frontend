import React from 'react';
import CustomDatePicker from '../../../../CustomDatePicker/CustomDatePicker';
import Dropdown from '../../../../Dropdown/Dropdown';
import './SearchFieldMobile.css'
import { defaultPeriod, defaultStatus, Period, Status } from '../../../../../constants/ConstantData';
import Button from 'react-bootstrap/Button';

interface SearchFieldMobileProps {
    totalData: number;
    setData: (value: string, field: string) => void;
    filterData: () => void;
}

const SearchFieldMobile: React.FC<SearchFieldMobileProps> = (props: SearchFieldMobileProps) => {
    const totalDataStr = new Intl.NumberFormat('en-En').format(props.totalData);

    return (<div className='search-header-mobile'>
        <div className='search-text'>
            <b className='header-topic inline'>Search</b>
            <span id='header-sub-topic' className='header-sub-topic'>Search results: 
                <span className='result-number'>{totalDataStr}</span></span>
        </div>
        <div className='search-field-mobile'>
            <Dropdown label='Period' fieldName='period'
                defaultValue={defaultPeriod} options={Period} setData={props.setData} />
            <Dropdown label='Status' fieldName='status'
                defaultValue={defaultStatus} options={Status} setData={props.setData} />
            <CustomDatePicker label='From' fieldName='startDate' setData={props.setData} />
            <CustomDatePicker label='To' fieldName='endDate' setData={props.setData} />
            <Button className='order-button search-button-mobile' onClick={props.filterData}>Search</Button>
        </div>
    </div>);
};
export default SearchFieldMobile;