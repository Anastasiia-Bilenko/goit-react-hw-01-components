import { FriendListEl } from "./FriendList/FriendList";
import { ProfileEl } from "./Profile/Profile";
import { StatisticsEl } from "./Statistics/Statistics";
import { TransactionHistoryTableEl } from "./TransactionHistory/TransactionHistory";
import friends from './friends.json'
export const App = () => {
  return (<div>
      <ProfileEl/>
      <StatisticsEl/>
      <FriendListEl friends={friends}/>
      <TransactionHistoryTableEl/>
  </div>  
)
};
