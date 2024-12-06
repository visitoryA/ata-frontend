import { useEffect, useState } from "react";
import { dataSet } from "../../../constants/Dataset";
import { orderTable } from "../../../constants/TableCol";
import ExpandableTable from "./ExpandTable";
import SearchField from "./SearchField/SearchField";
import { Order } from "../../../types/type";

const TradeSearch: React.FC = () => {
    const [period, setPeriod] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Order[]>([]);

    useEffect(() => {
        console.log(`period: ${period}\nstatus: ${status}\nstart: ${startDate}\nend: ${endDate}`)
        // data = data.filter(it => it.date >= startDate && it.date <= endDate);
    }, [period, status, startDate, endDate]);

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
        console.log('before filtering:', data.length)
        if (!!status) {
            data = data.filter(it => it.status === status);
            console.log('status filtering:', data.length)
        }
        if (!!startDate) {
            data = data.filter(it => it.date >= startDate);
            console.log('start filtering:', data.length)
        }
        if (!!endDate) {
            data = data.filter(it => it.date < endDate);
            console.log('end filtering:', data.length)
        }
        setFilteredData(data);
        console.log('filtering data:', data.length);
    }
    return <div>
        <SearchField setData={setSearchField} totalData={16757000} filterData={filterData} />
        <ExpandableTable column={orderTable} data={filteredData} />
    </div>
};
export default TradeSearch;