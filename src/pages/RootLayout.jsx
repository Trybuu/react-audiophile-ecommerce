import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from './RootLayout.module.css'
import Footer from '../components/Footer'

import { useMenu } from '../store/MenuProvider'
import ScrollToTop from '../components/ScrollToTop'
import NavMobile from '../components/NavMobile'
import { CartContextProvider } from '../store/CartContext'
import { UserProgressContextProvider } from '../store/UserProgressContext'
import Cart from '../components/Cart'

export default function RootLayout() {
  const { menu } = useMenu()

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <ScrollToTop />
        <div className={classes.wrapper}>
          <MainNavigation />
          <NavMobile open={menu} />
          <Cart />
        </div>
        <div className={classes.margin}></div>
        <Outlet />
        <div className={classes.wrapper}>
          <Footer />
        </div>
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}
