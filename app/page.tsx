import Hero from '@/components/Hero/Hero'
import TrustBar from '@/components/TrustBar/TrustBar'
import Reviews from '@/components/Reviews/Reviews'
import BrandStory from '@/components/BrandStory/BrandStory'
import Services from '@/components/Services/Services'
import FirstGroom from '@/components/FirstGroom/FirstGroom'
import CatCare from '@/components/CatCare/CatCare'
import Gallery from '@/components/Gallery/Gallery'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import Neighborhoods from '@/components/Neighborhoods/Neighborhoods'
import FAQ from '@/components/FAQ/FAQ'
import CTABanner from '@/components/CTABanner/CTABanner'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  metaTitle: 'Brooklyn Pet Spa | Premium Grooming, Daycare & Boarding in Park Slope',
  metaDescription:
    "Brooklyn's premier pet spa offering professional dog & cat grooming, daycare, boarding, and spa services in Park Slope. Cage-free, fear-free, NYC DOH compliant.",
  canonical: 'https://brooklynpetspa.com',
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Reviews />
      <BrandStory />
      <Services />
      <FirstGroom />
      <CatCare />
      <Gallery />
      <WhyChooseUs />
      <Neighborhoods />
      <FAQ />
      <CTABanner />
    </>
  )
}
