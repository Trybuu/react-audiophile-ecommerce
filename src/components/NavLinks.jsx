import { NavLink } from 'react-router-dom'
import classes from './NavLinks.module.css'
export default function NavLinks() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/headphones"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Headphones
      </NavLink>
      <NavLink
        to="/speakers"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Speakers
      </NavLink>
      <NavLink
        to="/earphones"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        Earphones
      </NavLink>
    </div>
  )
}
