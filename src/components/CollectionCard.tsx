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
    <div className='  bg-white/10 p-4 flex flex-col gap-4 hover:opacity-80 transition-all'>
      <h3 className='  text-lg font-bold'>{title}</h3>
      <p className=' text-sm'>{description}</p>
      <p className=' text-sm text-black underline hover:text-black/45 transition-all'>
        View Collection
      </p>
    </div>
  );
}
