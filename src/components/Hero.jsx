import classes from './Hero.module.css'

export default function Hero({ children }) {
  return <main className={classes.hero}>{children}</main>
}
