import { StatisticsListItemEl } from "components/StatisticsListItem/StatisticsListItem"

 export const StatisticsListEL = ({data}) =>{
    return(
        <ul>
           {data.map(item => (
           <li key = {item.id}>
          <StatisticsListItemEl item = {item}/>
           </li>
           ))}  
        </ul>
        )
 }