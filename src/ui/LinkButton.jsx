import { Link } from 'react-router-dom'
import classes from './LinkButton.module.css'

export default function LinkButton({ linkTo, children, classStyle }) {
  return (
    <Link className={`${classes.linkButton} ${classStyle}`} to={linkTo}>
      {children}
    </Link>
  )
}
