// Components //
import { FifthSection } from '../components/Sections/FifthSection'
import { FooterSection } from '../components/Sections/FooterSection'
import { FourthSection } from '../components/Sections/FourthSection'
import { FirstSection } from '../components/Sections/FirstSection'
import { ThirdSection } from '../components/Sections/ThirdSection'
import { SeventhSection } from '../components/Sections/SeventhSection'
import { SixthSection } from '../components/Sections/SixthSection'
import { SecondSection } from '../components/Sections/SecondSection'

import { HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      {/* 1 - HOME */}
      <FirstSection />

      {/* 2 - SMART ENERGY */}
      <SecondSection />

      {/* 3 - OMNI TRAFO #1 */}
      <ThirdSection />

      {/* 4 - OMINI TRAFO #2 */}
      <FourthSection />

      {/* 5 - TRANSFORMER  */}
      <FifthSection />

      {/* 6 - TALK TO CONSULTER  */}
      <SixthSection />

      {/* 7 - FAQ  */}
      <SeventhSection />

      {/* 8 - FOOTER */}
      <FooterSection />
    </HomeContainer>
  )
}
