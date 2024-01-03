import { products } from '../../public/data/data.js'
import ContentWrapper from '../components/ContentWrapper.jsx'
import CategoryTitle from '../ui/CategoryTitle.jsx'
import ProductsList from '../components/ProductsList.jsx'
import AdditionalNavigation from '../components/AdditionalNavigation.jsx'
import About from '../components/About.jsx'

export default function Speakers() {
  const speakers = products.filter((product) => product.category === 'speakers')
  return (
    <>
      <CategoryTitle category={'Speakers'} />
      <ContentWrapper>
        <ProductsList products={speakers} />
        <AdditionalNavigation />
        <About />
      </ContentWrapper>
    </>
  )
}
