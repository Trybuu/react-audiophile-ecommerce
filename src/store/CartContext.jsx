import { createContext, useReducer } from 'react'

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  itemsQuantity: () => {},
})

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    )

    const updatedItems = [...state.items]

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      }
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems.push({ ...action.item, quantity: action.item.quantity })
    }

    return { ...state, items: updatedItems }
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    )
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedItems = [...state.items]
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      }

      updatedItems[existingCartItemIndex] = updatedItem
    }

    return { ...state, items: updatedItems }
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] }
  }

  if (action.type === 'INCREASE_QUANTITY') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    )

    const updatedItems = [...state.items]

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex]
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      }
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems.push({ ...action.item, quantity: action.item.quantity })
    }

    return { ...state, items: updatedItems }
  }

  return state
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id })
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' })
  }

  function increaseQuantity(item) {
    dispatchCartAction({ type: 'INCREASE_QUANTITY', item: item })
  }

  function itemsQuantity() {
    const quantity = cart.items.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0,
    )
    return quantity
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
    itemsQuantity: itemsQuantity,
    increaseQuantity: increaseQuantity,
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartContext
