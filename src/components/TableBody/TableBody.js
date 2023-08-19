import { TableBodyDataEl } from "components/TableBodyData/TableBodyData"

export const  TableBodyEl = ({items}) =>{
    return(
        <tbody>
            {items.map(item=>(
               <tr key ={item.id}>
                <TableBodyDataEl item = {item}/>
               </tr> 
            ))}
        </tbody>
    )
}