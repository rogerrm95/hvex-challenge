// Components //
import { HomeSection } from '../components/Sections/HomeSection'
import { OmniTrafoSection } from '../components/Sections/OmniTrafoSection'
import { SmartEnergySection } from '../components/Sections/SmartEnergySection'

import { HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      {/* 1 - HOME */}
      <HomeSection />

      {/* 2 - SMART ENERGY */}
      <SmartEnergySection />

      {/* 3 - OMNI TRAFO */}
      <OmniTrafoSection />
    </HomeContainer>
  )
}
