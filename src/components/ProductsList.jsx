import classes from './ProductsList.module.css'
import LinkButton from '../ui/LinkButton'

export default function ProductsList({ products }) {
  return (
    <ul>
      {products.map((el) => (
        <li className={classes.element} key={el.id}>
          <img
            className={classes.element__image}
            src={el.mainImage}
            alt={`${el.name} main image`}
          />
          <div className={classes.element__content}>
            {el.isNew === true ? (
              <p className={classes.element__new}>NEW PRODUCT</p>
            ) : undefined}
            <h2>{el.name}</h2>
            <p>{el.shortDescription}</p>
            <LinkButton linkTo={`/${el.category}/${el.id}`}>
              See product
            </LinkButton>
          </div>
        </li>
      ))}
    </ul>
  )
}
