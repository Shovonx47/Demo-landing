import Navbar from '@/components/Navbar'
import HeroSlider from '@/components/HeroSlider'
import PrincipalMessage from '@/components/PrincipalMessage'
import QuickLinks from '@/components/QuickLinks'
import NoticeBoard from '@/components/NoticeBoard'
import CollegeStats from '@/components/CollegeStats'
import RecentEvents from '@/components/RecentEvents'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        <div className="lg:col-span-2">
          <PrincipalMessage />
          <CollegeStats />
          <RecentEvents />
        </div>
        <div className="lg:col-span-1">
          <QuickLinks />
          <NoticeBoard />
        </div>
      </div>
      <Footer />
    </main>
  )
}




