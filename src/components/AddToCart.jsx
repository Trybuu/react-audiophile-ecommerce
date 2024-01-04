import { useContext, useState } from 'react'
import Button from '../ui/Button'
import classes from './AddToCart.module.css'

import CartContext from '../store/CartContext'

export default function AddToCart() {
  const [count, setCount] = useState(1)
  const cartCtx = useContext(CartContext)

  function incrementCount() {
    setCount((prev) => prev + 1)
  }
  function decrementCount() {
    if (count > 1) setCount((prev) => prev - 1)
    else return
  }

  function handleAddProductToCart() {
    console.log('Hello!')
    cartCtx.addItem({ id: 'zx9', price: 550, img: '/image/photo.jpg' })
  }

  return (
    <div className={classes.toCart}>
      <p className={classes.buttons}>
        <button onClick={decrementCount} className={classes.button}>
          -
        </button>
        <span className={classes.counter}>{count}</span>
        <button onClick={incrementCount} className={classes.button}>
          +
        </button>
      </p>
      <Button onClick={handleAddProductToCart}>Add to cart</Button>
      <button onClick={handleAddProductToCart}>Add</button>
    </div>
  )
}
