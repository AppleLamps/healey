import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StatsBanner from '@/components/StatsBanner'
import PlayersSection from '@/components/PlayersSection'
import ShelterCrisis from '@/components/ShelterCrisis'
import StewardBailout from '@/components/StewardBailout'
import TransparencyWar from '@/components/TransparencyWar'
import StatePolice from '@/components/StatePolice'
import EnergyCollapse from '@/components/EnergyCollapse'
import ConnectionMap from '@/components/ConnectionMap'
import QuoteBank from '@/components/QuoteBank'
import Sources from '@/components/Sources'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />

      <Hero />

      <div className="section-divider" />

      <StatsBanner />

      <div className="section-divider" />

      <PlayersSection />

      <div className="section-divider" />

      <ShelterCrisis />

      <div className="section-divider" />

      <StewardBailout />

      <div className="section-divider" />

      <TransparencyWar />

      <div className="section-divider" />

      <StatePolice />

      <div className="section-divider" />

      <EnergyCollapse />

      <div className="section-divider" />

      <ConnectionMap />

      <div className="section-divider" />

      <QuoteBank />

      <div className="section-divider" />

      <Sources />
    </main>
  )
}
