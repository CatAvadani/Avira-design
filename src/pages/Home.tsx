import Collections from '../components/Collections';
import HeroSection from '../components/HeroSection';
import MiddleSection from '../components/MiddleSection';
import TrendingProducts from '../components/Trending';

export default function Home() {
  return (
    <div className=' w-full'>
      <HeroSection />
      <MiddleSection />
      <Collections />
      <TrendingProducts />
    </div>
  );
}
