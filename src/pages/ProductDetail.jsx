import { useParams, Link } from 'react-router-dom'
import { products } from '/public/data/data'

import classes from './ProductDetail.module.css'

export default function ProductDetail() {
  const params = useParams()
  const data = products.filter((product) => product.id === params.id)
  const product = data[0]
  console.log(product)

  return (
    <div className={classes.productDetail__wrapper}>
      <Link to=".." relative="path" className={classes.backLink}>
        Go Back
      </Link>

      <div>
        <img src={product.mainImage} alt="" />
        {product.isNew && (
          <p>
            <span>New Product</span>
          </p>
        )}
        <p>{product.description}</p>
      </div>

      <div>
        <p>${product.price}</p>
        <div>
          <p>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </p>
          <button>Add to cart</button>
        </div>
      </div>

      <div>
        <h2>Features</h2>
        <p>{product.features}</p>
      </div>

      <div>
        <h2>In the box</h2>
        <ul>
          {product.inTheBox.map((el) => {
            return (
              <li key={Math.random(1000)}>
                <span>{el[0]}x </span>
                {el[1]}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
