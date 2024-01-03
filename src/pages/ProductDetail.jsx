import { useParams, Link } from 'react-router-dom'
import { products } from '/public/data/data'

import classes from './ProductDetail.module.css'
import ProductHeader from '../components/ProductHeader'
import AddToCart from '../components/AddToCart'
import Features from '../components/Features'
import InTheBox from '../components/InTheBox'
import ProductGallery from '../components/ProductGallery'

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
      <ProductHeader
        img={product.mainImage}
        name={product.name}
        desc={product.description}
        isNew={product.isNew}
        price={product.price}
      >
        <AddToCart />
      </ProductHeader>
      <div className={classes.flex}>
        <Features title="Features" description={product.features} />
        <InTheBox arr={product.inTheBox} />
      </div>

      <ProductGallery gallery={product.gallery} />
    </div>
  )
}
