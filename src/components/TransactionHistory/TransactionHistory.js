import { TableBodyEl } from "components/TableBody/TableBody"
import { TableHeadEl } from "components/TableHead/TableHead"
import items from '../transactions.json'
export const TransactionHistoryTableEl = () =>{
    return(
        <table>
            <TableHeadEl/>
            <TableBodyEl items ={items}/>
        </table>
    )
}