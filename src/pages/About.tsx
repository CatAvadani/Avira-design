import { people } from '../data/ListOfPeople';

export default function About() {
  return (
    <div className='bg-white/20 pb-24 sm:py-4 sm:pb-44 m-2 p-4 sm:m-20 mb-44 sm:my-44 flex flex-col gap-16 justify-center items-center'>
      <div className='max-w-2xl flex flex-col justify-center items-center gap-4'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl sm:mt-10'>
          Meet Our Team
        </h2>
        <p className='mt-6 text-lg leading-8 text-white text-center'>
          Together, they drive the vision and growth of our company, ensuring
          that we continue to set the standard in the luxury market.
        </p>
      </div>

      <ul className='grid  gap-4 sm:grid-cols-3  xl:col-span-2'>
        {people.map((person) => (
          <li key={person.name}>
            <div className=' bg-white/10 p-4 flex flex-col gap-4 hover:opacity-80 transition-all mx-auto px-10'>
              <img
                alt=''
                src={person.imageUrl}
                className='h-16 w-16 rounded-full object-cover'
              />
              <div>
                <h3 className='text-base font-semibold leading-7 tracking-tight text-white'>
                  {person.name}
                </h3>
                <p className='text-sm font-semibold leading-6 text-white'>
                  {person.role}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
