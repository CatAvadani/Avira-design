import Button from './Button';
import ProductCard, { ProductCardProps } from './ProductCard';

interface CollectionRowProps {
  title: string;
  collection: ProductCardProps[];
}

export default function CollectionRow({
  title,
  collection,
}: CollectionRowProps) {
  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      <p className='p-2 text-white text-lg'>{title}</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4'>
        {collection.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <Button buttonType='secondary'>View More</Button>
      </div>
    </div>
  );
}
