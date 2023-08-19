import { ListStarsItems } from "components/ListStarsItems/ListStarsItems"
import info from '../user.json'
export const ListStarsEl = () => {
    return (
<ul>
<ListStarsItems stats ={info.stats}/>
</ul>
    )
}