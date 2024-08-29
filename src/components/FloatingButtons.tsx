import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function FloatingButtons() {
  return (
    <div className='flex flex-col gap-4 fixed bottom-7 right-7 z-50'>
      <Link
        to='#'
        className='p-4 bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-white/30 transition-all animate-pulse border border-white/10 flex justify-center items-center'
      >
        <HeartIcon className='w-7 h-7' />
      </Link>
      <Link
        to='#'
        className='p-4 bg-white/30 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all animate-pulse flex justify-center items-center border border-white/20'
      >
        <ShoppingBagIcon className='w-7 h-7' />
      </Link>
    </div>
  );
}
