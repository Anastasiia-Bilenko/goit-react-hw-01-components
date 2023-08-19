import { StatisticsListEL } from "components/StatisticsList/StatisticsList"
import data from '../data.json'

export const StatisticsEl = () => {
    return (
        <section>
  <h2>Upload stats</h2>
<StatisticsListEL data={data}/>
  </section>
    )
}