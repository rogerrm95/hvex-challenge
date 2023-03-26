// Components //
import { FifthSection } from '../components/Sections/FifthSection'
import { FourthSection } from '../components/Sections/FourthSection'
import { HomeSection } from '../components/Sections/HomeSection'
import { OmniTrafoSection } from '../components/Sections/OmniTrafoSection'
import { SixthSection } from '../components/Sections/SixthSection'
import { SmartEnergySection } from '../components/Sections/SmartEnergySection'

import { HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      {/* 1 - HOME */}
      <HomeSection />

      {/* 2 - SMART ENERGY */}
      <SmartEnergySection />

      {/* 3 - OMNI TRAFO #1 */}
      <OmniTrafoSection />

      {/* 4 - OMINI TRAFO #2 */}
      <FourthSection />

      {/* 5 - TRANSFORMER  */}
      <FifthSection />

      {/* 6 - TALK TO CONSULTER  */}
      <SixthSection />

      {/* 7 - FAQ  */}

      {/* 8 - FOOTER */}
    </HomeContainer>
  )
}
