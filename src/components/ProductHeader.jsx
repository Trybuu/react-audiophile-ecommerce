import classes from './ProductHeader.module.css'

export default function ProductHeader({
  img,
  name,
  desc,
  isNew,
  price,
  children,
}) {
  return (
    <header className={classes.header}>
      <img className={classes.header__image} src={img} alt={name} />
      <div className={classes.header__content}>
        {isNew === true ? (
          <p className={classes.header__new}>New Product</p>
        ) : undefined}
        <h2>{name}</h2>
        <p>{desc}</p>
        <p className={classes.header__price}>${price}</p>
        {children}
      </div>
    </header>
  )
}
