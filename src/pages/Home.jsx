import ContentWrapper from '../components/ContentWrapper'
import HeaderContent from '../components/HeaderContent'
import Hero from '../components/Hero'
import AdditionalNavigation from '../components/AdditionalNavigation'
import About from '../components/About'
import ShowProductBig from '../components/ShowProductBig'

import { products } from '/public/data/data'

export default function Home() {
  console.log(products)
  return (
    <>
      <Hero>
        <HeaderContent />
      </Hero>
      <ContentWrapper>
        <AdditionalNavigation />
        <ShowProductBig product={products[4]} />
        <About />
      </ContentWrapper>
    </>
  )
}
