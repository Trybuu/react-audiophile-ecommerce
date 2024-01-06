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

  const totalQuantityOfProducts = cartCtx.items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0,
  )

  function handleCloseCart() {
    userProgressCtx.hideCart()
  }

  function handleClearCart() {
    cartCtx.clearCart()
  }

  function handleAddItem(id) {
    const existingProduct = cartCtx.items.filter((product) => product.id === id)
    const [product] = [...existingProduct] // cartCtx.addItem(product)
    // console.log('Add item', id, product)
    cartCtx.increaseQuantity(product)
  }

  function handleRemoveItem(id) {
    cartCtx.removeItem(id)
  }

  return (
    <Modal
      open={userProgressCtx.progress === 'cart'}
      className={classes.cartModal}
    >
      <div className={classes.cart}>
        <div className={classes.cart__top}>
          <h2>Cart ({totalQuantityOfProducts})</h2>
          <button onClick={handleClearCart} className={classes.cart__remove}>
            Remove all
          </button>
        </div>

        <ul className={classes.cart__items}>
          {cartCtx.items.map((item) => (
            <li className={classes.cart__item} key={item.id}>
              <img
                className={classes.item__image}
                src={item.image}
                alt={`Image of ${item.name}`}
              />
              <div className={classes.item__desc}>
                <p className={classes.item__name}>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div>
                {' '}
                <p className={classes.buttons}>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className={classes.button}
                  >
                    -
                  </button>
                  <span className={classes.counter}>{item.quantity}</span>
                  <button
                    onClick={() => handleAddItem(item.id)}
                    className={classes.button}
                  >
                    +
                  </button>
                </p>
              </div>
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
