import LinkButton from '../ui/LinkButton'
import classes from './ShowProductBig.module.css'

export default function ShowProductBig({ product }) {
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
        <p>{product.shortDescription}</p>
        <LinkButton
          classStyle="black"
          linkTo={`/${product.category}/${product.id}`}
        >
          SEE PRODUCT
        </LinkButton>
      </div>
    </div>
  )
}
