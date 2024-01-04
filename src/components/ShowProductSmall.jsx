import LinkButtonOutline from '../ui/LinkButtonOutline'
import classes from './ShowProductSmall.module.css'

export default function ShowProductSmall({ product }) {
  const image =
    product.imageRender !== undefined ? product.imageRender : product.mainImage

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.image}
          src={image}
          alt={`Image of ${product.name} ${product.category}`}
        />
      </div>

      <div className={classes.content}>
        <h2>{product.name}</h2>
        <LinkButtonOutline
          classStyle="black"
          linkTo={`/${product.category}/${product.id}`}
        >
          SEE PRODUCT
        </LinkButtonOutline>
      </div>
    </div>
  )
}
