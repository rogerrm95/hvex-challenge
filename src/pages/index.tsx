// Components //
import { HomeSection } from '../components/Sections/HomeSection'
import { SmartSection } from '../components/Sections/SmartEnergySection'

import { HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      {/* 1 - HOME */}
      <HomeSection />

      {/* 2 - SMART ENERGY */}
      <SmartSection />
    </HomeContainer>
  )
}
