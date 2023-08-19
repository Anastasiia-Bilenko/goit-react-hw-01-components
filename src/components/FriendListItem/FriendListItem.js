export const FriendListItemEl = ({ friend:{isOnline, avatar, name} }) => {
  console.log(isOnline)
  return (
    <>
      <span>{isOnline.toString()}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};
