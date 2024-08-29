import Collections from '../components/Collections';
import CollectionTop from '../components/CollectionTop';
import FloatingButtons from '../components/FloatingButtons';
import HeroSection from '../components/HeroSection';
import MiddleSection from '../components/MiddleSection';
import TrendingProducts from '../components/Trending';
import TrendingTop from '../components/TrendingTop';

export default function Home() {
  return (
    <div className=' w-full'>
      <HeroSection />
      <MiddleSection />
      <CollectionTop />
      <Collections />
      <TrendingTop />
      <TrendingProducts />
      <FloatingButtons />
    </div>
  );
}
