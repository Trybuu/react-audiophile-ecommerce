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
      <h1>{product.name}</h1>
      <p>{params.id}</p>
    </div>
  )
}
