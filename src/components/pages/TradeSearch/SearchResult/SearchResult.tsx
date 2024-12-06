import { Order } from "../../../../types/type";
  
interface SearchResultProps {
    data: Order[];
}

function SearchResult(props: SearchResultProps) {
    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {props.data.map((order) => (
                <tr key={order.account}>
                <td>{order.firstName}</td>
                <td>{order.lastName}</td>
            
                <td>{order.tel}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
};
export default SearchResult;