import classes from './HeaderContent.module.css'
import LinkButton from '../ui/LinkButton'

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
            <LinkButton linkTo="/headphones/xx99_mk2">SEE PRODUCT</LinkButton>
          </p>
        </div>
        <div className={classes.headerImage}></div>
      </div>
    </>
  )
}
