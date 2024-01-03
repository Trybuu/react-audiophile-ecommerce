import { products } from '../../public/data/data.js'
import ContentWrapper from '../components/ContentWrapper.jsx'
import CategoryTitle from '../ui/CategoryTitle.jsx'
import ProductsList from '../components/ProductsList.jsx'
import AdditionalNavigation from '../components/AdditionalNavigation.jsx'
import About from '../components/About.jsx'

export default function Earphones() {
  const earphones = products.filter(
    (product) => product.category === 'earphones',
  )
  return (
    <>
      <CategoryTitle category={'Earphones'} />
      <ContentWrapper>
        <ProductsList products={earphones} />
        <AdditionalNavigation />
        <About />
      </ContentWrapper>
    </>
  )
}
