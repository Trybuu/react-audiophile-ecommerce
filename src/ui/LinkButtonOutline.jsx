import { Link } from 'react-router-dom'
import classes from './LinkButtonOutline.module.css'

export default function LinkButtonOutline({ linkTo, children }) {
  return (
    <Link className={`${classes.linkButtonOutline}`} to={linkTo}>
      {children}
    </Link>
  )
}
