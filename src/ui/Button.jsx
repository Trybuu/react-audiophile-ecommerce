import classes from './Button.module.css'

export default function Button({ props, children }) {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  )
}
