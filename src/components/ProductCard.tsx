import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className='bg-white hover:opacity-85 transition-all duration-100'>
      <div className='w-full overflow-hidden mx-auto'>
        <img src={image} alt={title} className='w-full h-full object-contain' />
      </div>
      <div className=' p-4 flex flex-col gap-4'>
        <h3 className='text-lg font-semibold mt-4'>{title}</h3>
        <div className=' flex justify-between items-center'>
          <p className='text-lg text-indigo-600'>{price} KR</p>
          <div className=' flex justify-end items-center gap-4'>
            <ShoppingBagIcon className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer' />
            <HeartIcon className=' w-5 h-5 sm:w-7 sm:h-7 cursor-pointer text-red-700' />
          </div>
        </div>
      </div>
    </div>
  );
}
