// Import existing components
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import PrincipalMessage from '@/components/PrincipalMessage';
import QuickLinks from '@/components/QuickLinks';
import NoticeBoard from '@/components/NoticeBoard';
import CollegeStats from '@/components/CollegeStats';
import RecentEvents from '@/components/RecentEvents';
import Footer from '@/components/Footer';

// Import the new components
import NoticeTicker from '@/components/NoticeTicker';
import WelcomeSection from '@/components/sections/WelcomeSection';
import KeyFeaturesSection from '@/components/sections/KeyFeaturesSection';
import NewsEventsSection from '@/components/sections/NewsEventsSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Add NoticeTicker here */}
      <NoticeTicker />
      
      <HeroSlider />
      
      {/* Add WelcomeSection, KeyFeaturesSection, and NewsEventsSection */}
      <WelcomeSection />
      <KeyFeaturesSection />
      <NewsEventsSection />
      
      {/* Original content layout */}
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
  );
}
