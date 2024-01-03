import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'

export default function Modal({ children, open, className = '' }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog} className={`${classes.dialog} ${className}`}>
      {children}
    </dialog>,
    document.getElementById('modal'),
  )
}
