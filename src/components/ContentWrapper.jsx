import classes from './ContentWrapper.module.css'

export default function ContentWrapper({ children }) {
  return <main className={classes.contentWrapper}>{children}</main>
}
