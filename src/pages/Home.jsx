import ContentWrapper from '../components/ContentWrapper'
import HeaderContent from '../components/HeaderContent'
import Hero from '../components/Hero'
import AdditionalNavigation from '../components/AdditionalNavigation'

export default function Home() {
  return (
    <>
      <Hero>
        <HeaderContent />
      </Hero>
      <ContentWrapper>
        <AdditionalNavigation />
      </ContentWrapper>
    </>
  )
}
