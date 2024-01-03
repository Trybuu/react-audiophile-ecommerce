import AdditionalNavigation from './AdditionalNavigation'
import Modal from '../ui/Modal'
import classes from './NavMobile.module.css'

export default function NavMobile({ isOpen }) {
  return (
    <Modal open={isOpen}>
      <nav className={classes.navMobile}>
        <div className={classes.navMobile__content}>
          <AdditionalNavigation />
        </div>
      </nav>
    </Modal>
  )
}
