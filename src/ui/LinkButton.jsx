import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

export default function LinkButton({ linkTo, children }) {
  return (
    <Link className={classes.linkButton} to={linkTo}>
      {children}
    </Link>
  )
}
