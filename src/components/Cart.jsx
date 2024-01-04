import { useContext } from 'react'
import Modal from '../ui/Modal'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext'

import classes from './Cart.module.css'

export default function Cart() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  )

  function handleCloseCart() {
    userProgressCtx.hideCart()
  }

  return (
    <Modal
      open={userProgressCtx.progress === 'cart'}
      className={classes.cartModal}
    >
      <div className={classes.cart}>
        <div className={classes.cart__top}>
          <h2>Cart (0)</h2>
          <button className={classes.cart__remove}>Remove all</button>
        </div>

        <ul className={classes.cart__items}>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              {item.id} - {item.quantity}
            </li>
          ))}
        </ul>
        <div className={classes.cart__total}>
          <span>TOTAL</span>
          <p className={classes.cart__totalPrice}>{cartTotal}</p>
        </div>

        <div className={classes.cart__buttons}>
          <button className={classes.cart__button} onClick={handleCloseCart}>
            Close
          </button>
          <button className={classes.cart__button} onClick={handleCloseCart}>
            Checkout
          </button>
        </div>
      </div>
    </Modal>
  )
}
