import classes from './CategoryTitle.module.css'

export default function CategoryTitle({ category }) {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{category}</h1>
    </div>
  )
}
