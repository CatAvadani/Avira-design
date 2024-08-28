import { trendingProducts } from '../data/ProductsList';
import Button from './Button';
import ProductCard, { ProductCardProps } from './ProductCard';

export default function TrendingProducts() {
  return (
    <div
      id='trending'
      className='bg-white/20 w-full flex flex-col justify-center items-center text-black gap-8 pb-72 pt-8'
    >
      <h2 className='text-2xl text-white mb-10'>Trending Now</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 w-full max-w-screen-xl mx-auto px-2'>
        {trendingProducts.map((product: ProductCardProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button buttonType='secondary'>View More</Button>
    </div>
  );
}
