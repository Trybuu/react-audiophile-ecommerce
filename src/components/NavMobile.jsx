import AdditionalNavigation from './AdditionalNavigation'
import classes from './NavMobile.module.css'

export default function NavMobile({ open }) {
  if (open)
    return (
      <nav className={classes.navMobile}>
        <div className={classes.navMobile__content}>
          <AdditionalNavigation />
        </div>
      </nav>
    )
}
