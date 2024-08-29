const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Lylla Andersson',
    role: 'Chief Operations Officer (COO)',
    imageUrl:
      'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg5fHxmcmVlJTIwaW1hZ2VzJTIwcGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    name: 'Olivia Martinez',
    role: 'Chief Marketing Officer (CMO)',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXMlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Alexander Carter',
    role: 'Chief Operations Officer (COO)',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxmcmVlJTIwaW1hZ2VzJTIwcGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    name: 'Michael Williams',
    role: 'Chief Financial Officer (CFO)',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHxmcmVlJTIwaW1hZ2VzJTIwcGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Product Design',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function About() {
  return (
    <div className='bg-white/20 pb-24 sm:py-4 sm:pb-44 m-2 p-4 sm:m-20 mb-44 sm:my-44 flex flex-col gap-16 justify-center items-center'>
      <div className='max-w-2xl flex flex-col justify-center items-center gap-4'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
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
      {/* </div> */}
    </div>
  );
}
