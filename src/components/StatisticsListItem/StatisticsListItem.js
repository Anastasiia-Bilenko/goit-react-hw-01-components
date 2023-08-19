export const StatisticsListItemEl = ({ item: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
};
