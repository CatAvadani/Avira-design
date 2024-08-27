import { trendingProducts } from '../data/ProductsList';
import ProductCard, { ProductCardProps } from './ProductCard';

export default function TrendingProducts() {
  return (
    <div className='bg-white/30 w-full flex flex-col justify-center items-center text-black gap-8 py-10'>
      <h2 className='text-2xl text-white'>Trending Now</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-xl mx-auto'>
        {trendingProducts.map((product: ProductCardProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
