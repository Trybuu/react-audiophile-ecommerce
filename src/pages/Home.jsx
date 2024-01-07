import ContentWrapper from '../components/ContentWrapper'
import HeaderContent from '../components/HeaderContent'
import Hero from '../components/Hero'
import AdditionalNavigation from '../components/AdditionalNavigation'
import About from '../components/About'
import ShowProductBig from '../components/ShowProductBig'
import ShowProductMedium from '../components/ShowProductMedium'
import ShowProductSmall from '../components/ShowProductSmall'
import { products } from '/public/data/data'

export default function Home() {
  return (
    <>
      <Hero>
        <HeaderContent />
      </Hero>
      <ContentWrapper>
        <AdditionalNavigation />
        <ShowProductBig product={products[4]} />
        <ShowProductMedium product={products[3]} />
        <ShowProductSmall product={products[5]} />
        <About />
      </ContentWrapper>
    </>
  )
}
