export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className='bg-white'>
      <div className='w-full overflow-hidden mx-auto'>
        <img src={image} alt={title} className='w-full h-full object-contain' />
      </div>
      <div className=' p-4 flex flex-col gap-4'>
        <h3 className='text-lg font-semibold mt-4'>{title}</h3>
        <p className='text-lg font-bold text-indigo-600'>{price} KR</p>
      </div>
    </div>
  );
}
