import { NavLink } from 'react-router-dom'

import NavLinks from './NavLinks'
import MenuButton from '../ui/MenuButton'
import CartButton from '../ui/CartButton'

import Logo from '../ui/Logo'

import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <>
      <nav className={classes.nav}>
        <MenuButton />
        <NavLink to="/">
          <Logo />
        </NavLink>

        <div className={classes.nav__links}>
          <NavLinks />
        </div>

        <CartButton />
      </nav>
    </>
  )
}
