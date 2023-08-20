import { chartData } from '../../components/Headergraph'
import classes from './Stocklist.module.scss'
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'
const Stocklist = () => {
  const tabList = useSelector((state) => state.tab.watchlists)
  const currentTab = useSelector((state) => state.tab.currentTab)
  return (
    <div className={classes.wrapper}>
      {tabList[currentTab].map((ele) => {
        return (
          <div className={classes.stockItem}>
            <div className={classes.stockInfoLeft}>
              <div className={classes.stockGraph}>
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="area"
                  height={100}
                  width={82}
                  style={{
                    top: '-24px',
                    left: '-12px',
                    position: 'relative',
                  }}
                />
              </div>
              <div className={classes.stockName}>{ele.symbol}</div>
            </div>
            <div className={classes.stockInfoRight}>
              <div
                className={
                  ele.price < 500 ? classes.stockLossData1 : classes.stockdata1
                }
              >
                +0.35% +0.10
              </div>
              <div
                className={
                  ele.price < 500 ? classes.stockLossData2 : classes.stockdata2
                }
              >
                {ele.price}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Stocklist
