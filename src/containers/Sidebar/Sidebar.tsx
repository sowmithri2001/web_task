import { Tab } from '@mui/material'
import classes from './Sidebar.module.scss'
import ScrollableTabsButtonPrevent from '../../components/Tabs'
import data from '../../assets/data/data.json'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTab, setWatchlists } from '../../redux/tabSliceSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setWatchlists(data.watchlists)) // Set watchlists from JSON data
  }, [dispatch])
  const tabList = useSelector((state: any) => state.tab.watchlists)
  const handleClick = (tabIndex: number) => {
    dispatch(setTab(tabIndex))
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.wishlistContainer}>
        <ScrollableTabsButtonPrevent>
          {tabList &&
            tabList.map((ele: any, i: any) => (
              <Tab
                label={`Watchlist${i + 1}`}
                className={classes.wishlist}
                sx={{
                  '& .Mui-selected': {
                    bgcolor: '#f3f3f3',
                  },
                }}
                onClick={() => handleClick(i)}
              />
            ))}
        </ScrollableTabsButtonPrevent>
      </div>
      <div className={classes.basket}>Basket</div>
    </div>
  )
}

export default Sidebar
