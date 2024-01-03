import Button from '../ui/Button'
import classes from './AddToCart.module.css'

export default function AddToCart() {
  return (
    <div className={classes.toCart}>
      <p className={classes.buttons}>
        <button className={classes.button}>-</button>
        <span className={classes.counter}>1</span>
        <button className={classes.button}>+</button>
      </p>
      <Button>Add to cart</Button>
    </div>
  )
}
