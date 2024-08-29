import CollectionRow from '../components/CollectionRow';
import { collection } from '../data/CollectionList';

export default function Collections() {
  return (
    <div className='bg-white/20 w-full flex flex-col justify-center items-center text-black gap-8 pb-72 pt-8 sm:pt-3 px-2 sm:mt-40 sm:max-w-[90%] mx-auto'>
      <h2 className='text-3xl text-white sm:mt-10 mb-4'>
        Explore Our Collections
      </h2>

      {collection.map((product) => (
        <CollectionRow
          key={product.title}
          title={product.title}
          collection={product.items}
        />
      ))}
    </div>
  );
}
