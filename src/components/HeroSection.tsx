import Button from './Button';

export default function HeroSection() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-4 p-4 max-w-screen-xl min-h-screen mx-auto'>
      {/* Top Left  */}
      <div className='col-span-1 sm:col-span-2 sm:row-span-2 h-[100vh] rounded-tr-[200px] overflow-hidden bg-[#301951] relative'>
        <img
          src='/Hero-img.png'
          alt='Image'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='absolute inset-0 flex flex-col items-left justify-center ml-6 sm:ml-28 gap-8 sm:gap-16'>
          <h1 className='text-white text-4xl sm:text-6xl font-bold drop-shadow-lg font-serif tracking-wider'>
            Discover Timeless <br /> Elegance
          </h1>
          <Button buttonType='primary'>Explore</Button>
        </div>
      </div>

      {/* Top Right*/}
      <div className='col-span-1 rounded-md sm:row-span-2 sm:rounded-b-full sm:rounded-tr-full bg-[#edebef]/80 flex flex-col items-center justify-center text-center p-6 gap-4 sm:gap-12'>
        <div className='w-20 h-20 sm:w-44 sm:h-44 flex items-center justify-center rounded-full'>
          <img
            src='/Diamond.png'
            alt='Image'
            className='w-full h-full object-cover'
          />
        </div>
        <h1 className='text-lg sm:text-xl font-sans p-2 sm:p-4'>
          Experience the finest craftsmanship and timeless design with our
          exclusive collection.
        </h1>
        <Button buttonType='secondary'>Collection</Button>
      </div>

      {/* Bottom Left */}
      <div className='col-span-1 sm:col-span-2 row-span-1 rounded-md sm:rounded-br-[200px] bg-[#1a0d2b] flex flex-col items-start justify-center p-8 pl-6 sm:pl-28 relative gap-4 sm:gap-8'>
        <p className='text-white text-lg font-sans pr-8 sm:pr-28'>
          Crafted with precision and care, our jewelry exemplifies the highest
          standards of quality. Experience the excellence that has defined our
          brand for over a century.
        </p>
        <p className='text-[#ff6200] underline'>
          <a href='http://'>Learn More About Our Craft.</a>
        </p>
      </div>

      {/* Bottom Right */}
      <div className='col-span-1 row-span-1 rounded-br-xl overflow-hidden relative flex items-center justify-center bg-transparent mt-16 sm:mt-0'>
        <div className='w-32 h-32 sm:w-full sm:h-full flex items-center justify-center rounded-full'>
          <img
            src='/Diamond-ring.jpg'
            alt='Image'
            className='w-full h-full rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
