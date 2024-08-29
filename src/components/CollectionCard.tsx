import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export interface CollectionCardProps {
  id: number;
  title: string;
  description: string;
}

export default function CollectionCard({
  title,
  description,
}: CollectionCardProps) {
  return (
    <div className=' bg-white/10 p-4 flex flex-col gap-4 hover:opacity-80 transition-all mx-auto'>
      <h3 className=' text-sm  sm:text-xl font-bold'>{title}</h3>
      <p className=' text-sm sm:text-lg'>{description}</p>
      <Link
        to='#'
        className=' flex gap-3 justify-start items-center  text-lg text-white underline hover:text-black/45 transition-all duration-300'
      >
        View Collection{' '}
        <span>
          <ChevronDoubleRightIcon className='size-5 ' />
        </span>
      </Link>
    </div>
  );
}
