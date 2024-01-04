import classes from './MenuButton.module.css'
import { useMenu } from '../store/MenuProvider'

export default function MenuButton() {
  const { menu, setMenu } = useMenu()

  function handleClick() {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
    console.log(menu, window.location.pathname)
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu === true) {
      setMenu(false)
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.href !== undefined) {
      setMenu(false)
    }
  })

  return (
    <button
      className={`${classes.menuButton} ${
        menu === true ? classes.open : undefined
      }`}
      onClick={handleClick}
      aria-label="Menu button"
    >
      <div className={classes.menuButton__stripe}></div>
      <div className={classes.menuButton__stripe}></div>
      <div className={classes.menuButton__stripe}></div>
      <div className={classes.menuButton__stripe}></div>
    </button>
  )
}
