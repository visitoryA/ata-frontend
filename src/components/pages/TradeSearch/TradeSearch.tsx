import { useState } from "react";
import { dataSet } from "../../../constants/Dataset";
import { orderTable } from "../../../constants/TableCol";
import SearchField from "./SearchField/SearchField";
import { Order } from "../../../types/type";
import './TradeSearch.css';
import ExpandableTable from "./ExpandableTable/ExpandableTable";

const TradeSearch: React.FC = () => {
    const [period, setPeriod] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Order[]>([]);

    const setSearchField = (value: string, field: string) => {
        if (field === 'period') {
            setPeriod(value);
        } else if (field === 'status') {
            setStatus(value);
        } else if (field === 'startDate') {
            setStartDate(value);
        } else if (field === 'endDate') {
            setEndDate(value);
        }
    }

    const filterData = () => {
        let data = dataSet;
        if (!!status) {
            data = data.filter(it => it.status === status);
        }
        if (!!startDate) {
            data = data.filter(it => it.date >= startDate);
        }
        if (!!endDate) {
            data = data.filter(it => it.date < endDate);
        }
        setFilteredData(data);
    }
    return <div>
        <SearchField setData={setSearchField} totalData={filteredData.length} filterData={filterData} />
        <ExpandableTable columns={orderTable} data={filteredData} />
    </div>
};
export default TradeSearch;