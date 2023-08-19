import { FriendListItemEl } from "components/FriendListItem/FriendListItem"

export const FriendListEl = ({friends}) =>{
    return(
        <ul>
           {friends.map(friend=>(
            <li key  ={friend.id}>
              <FriendListItemEl friend = {friend}/>
            </li>
           ))}
</ul>
    )
}