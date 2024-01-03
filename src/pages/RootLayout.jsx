import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from './RootLayout.module.css'
import Footer from '../components/Footer'
import NavMobile from '../components/NavMobile'

import { useMenu } from '../store/MenuProvider'
import ScrollToTop from '../components/ScrollToTop'

export default function RootLayout() {
  const { menu } = useMenu()
  console.log(menu)
  return (
    <>
      <ScrollToTop />
      <div className={classes.wrapper}>
        <MainNavigation />
      </div>
      <div className={classes.margin}></div>
      <NavMobile isOpen={menu} />
      <Outlet />
      <div className={classes.wrapper}>
        <Footer />
      </div>
    </>
  )
}
