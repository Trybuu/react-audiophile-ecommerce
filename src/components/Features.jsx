import classes from './Features.module.css'

export default function Features({ title, description }) {
  return (
    <div className={classes.features}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
