import { productsCollection } from '../data/ProductsList';
import CollectionCard, { CollectionCardProps } from './CollectionCard';

export default function Collections() {
  return (
    <div
      id='new-collections'
      className=' bg-white/30 sm:h-[600px] w-full flex flex-col justify-center items-center text-white gap-8 py-10 pb-40 px-2'
    >
      <h2 className=' text-2xl mb-10'>Explore Our New Collection</h2>
      <div
        className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
         gap-1 sm:gap-4 w-full max-w-screen-xl mx-auto
      '
      >
        {productsCollection.map((product: CollectionCardProps) => (
          <CollectionCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
