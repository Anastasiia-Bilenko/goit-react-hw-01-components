import { DescriptionEl } from "components/Description/Description"
import userinfo from "../user.json"
import { ListStarsEl } from "components/ListStars/ListStars"

export const ProfileEl = () => {
    return (
<div>
<DescriptionEl info ={userinfo}/>
<ListStarsEl/>
</div>    
    )
}