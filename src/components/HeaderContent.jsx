import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import classes from './HeaderContent.module.css'

export default function HeaderContent() {
  return (
    <>
      <div className={classes.headerWrapper}>
        <div className={classes.headerContent}>
          <span className={classes.productFeature}>New product</span>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p className={classes.headerText}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <p>
            <Button>
              <NavLink to="/headphones/xx99_mk1">See product</NavLink>
            </Button>
          </p>
        </div>
        <div className={classes.headerImage}></div>
      </div>
    </>
  )
}
