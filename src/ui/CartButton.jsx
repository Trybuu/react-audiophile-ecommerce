import { useContext } from 'react'
import cart from '/icons/icon-cart.svg'
import UserProgressContext from '../store/UserProgressContext'

export default function CartButton() {
  const userProgressCtx = useContext(UserProgressContext)

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <button onClick={handleShowCart}>
      <img src={cart} alt="Cart icon" />
    </button>
  )
}
