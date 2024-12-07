import { useState } from "react";
import { dataSet } from "../../../../constants/Dataset";
import { orderMobileTable } from "../../../../constants/TableCol";
import { Order } from "../../../../types/type";
import './TradeSearchMobile.css';
import SearchFieldMobile from "./SearchFieldMobile/SearchFieldMobile";
import OrderTable from "./OrderTable/OrderTable";

const TradeSearchMobile: React.FC = () => {
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
        <SearchFieldMobile setData={setSearchField} totalData={filteredData.length} filterData={filterData} />
        <OrderTable columns={orderMobileTable} data={filteredData} />
    </div>
};
export default TradeSearchMobile;