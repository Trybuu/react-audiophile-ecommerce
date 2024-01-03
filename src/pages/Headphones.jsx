import { products } from '../../public/data/data.js'
import ContentWrapper from '../components/ContentWrapper.jsx'
import CategoryTitle from '../ui/CategoryTitle.jsx'
import ProductsList from '../components/ProductsList.jsx'
import AdditionalNavigation from '../components/AdditionalNavigation.jsx'
import About from '../components/About.jsx'

export default function Headphones() {
  const headphones = products.filter(
    (product) => product.category === 'headphones',
  )
  return (
    <>
      <CategoryTitle category={'Headphones'} />
      <ContentWrapper>
        <ProductsList products={headphones} />
        <AdditionalNavigation />
        <About />
      </ContentWrapper>
    </>
  )
}
