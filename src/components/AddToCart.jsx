import { useContext, useState } from 'react'
import Button from '../ui/Button'
import classes from './AddToCart.module.css'

import CartContext from '../store/CartContext'

export default function AddToCart({ product }) {
  const [count, setCount] = useState(1)
  const cartCtx = useContext(CartContext)

  function incrementCount() {
    console.log(product)
    setCount((prev) => prev + 1)
  }
  function decrementCount() {
    if (count > 1) setCount((prev) => prev - 1)
    else return
  }

  function handleAddProductToCart() {
    cartCtx.addItem({
      id: product.id,
      name: product.name,
      image: product.mainImage,
      price: product.price,
      quantity: count,
    })

    setCount(1)
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
    </div>
  )
}
