import Sidebar from '../Sidebar/Sidebar'
import Navigator from '../Navigator/Navigator'
import classes from './Sideviewbar.module.scss'

const sideviewbar = () => {

  return (
    <div className={classes.wrapper}>
      <Navigator />
      <Sidebar />
    </div>
  )
}

export default sideviewbar
