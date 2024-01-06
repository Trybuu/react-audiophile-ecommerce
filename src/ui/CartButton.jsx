import { useContext, useEffect, useState } from 'react'
import cart from '/icons/icon-cart.svg'
import UserProgressContext from '../store/UserProgressContext'
import classes from './CartButton.module.css'
import CartContext from '../store/CartContext'

export default function CartButton() {
  const [quantity, setQuantity] = useState()

  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  useEffect(() => {
    setQuantity(cartCtx.itemsQuantity())
  }, [cartCtx])

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <button className={classes.cart__button} onClick={handleShowCart}>
      <img src={cart} alt="Cart icon" />
      {quantity === 0 ? undefined : (
        <div className={classes.cart__quantity}>
          <span className={classes.cart__quantityNumber}>
            {quantity <= 99 ? quantity : '99+'}
          </span>
        </div>
      )}
    </button>
  )
}
