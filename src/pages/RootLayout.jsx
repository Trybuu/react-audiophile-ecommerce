import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from './RootLayout.module.css'
import Footer from '../components/Footer'

import { useMenu } from '../store/MenuProvider'
import ScrollToTop from '../components/ScrollToTop'
import NavMobile from '../components/NavMobile'

export default function RootLayout() {
  const { menu } = useMenu()

  return (
    <>
      <ScrollToTop />
      <div className={classes.wrapper}>
        <MainNavigation />
        <NavMobile open={menu} />
      </div>
      <div className={classes.margin}></div>
      <Outlet />
      <div className={classes.wrapper}>
        <Footer />
      </div>
    </>
  )
}
