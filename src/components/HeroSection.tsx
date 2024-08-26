import Button from './Button';

export default function HeroSection() {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-4 p-4 max-w-screen-xl min-h-screen mx-auto'>
      {/* Top Left  */}
      <div className='col-span-2 row-span-2 rounded-tr-[200px] overflow-hidden bg-[#301951] relative'>
        <img
          src='https://img.freepik.com/free-photo/beautiful-model-with-ponytail-makeup_144627-1328.jpg?t=st=1724588595~exp=1724592195~hmac=d97a04427bba65295335c55f4e9567c177ad7b481c1e09c7a3323de907383414&w=1380'
          alt='Image'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='absolute inset-0 flex flex-col items-left justify-center ml-28 gap-16'>
          <h1 className='text-white text-6xl font-bold drop-shadow-lg  font-serif tracking-wider'>
            Discover Timeless <br /> Elegance
          </h1>
          <Button buttonType='primary'>Explore</Button>
        </div>
      </div>

      {/* Top Right*/}
      <div className='col-span-1 row-span-2 rounded-b-full rounded-tr-full bg-[#edebef] opacity-80  flex flex-col items-center justify-center text-center p-6 gap-12'>
        <div className='w-56 h-56 flex items-center justify-center rounded-full'>
          <img
            src='https://r2.erweima.ai/imgcompressed/img/compressed_5d24bf3b4cd3711d41c7473b96bd4ca8.webp'
            alt='Image'
            className='w-full h-full  object-cover'
          />
        </div>
        <h1 className='text-xl font-sans p-4'>
          Experience the finest craftsmanship and timeless design with our
          exclusive collection.
        </h1>
        <Button buttonType='secondary'>Collection</Button>
      </div>

      {/* Bottom Left */}
      <div className='col-span-2 row-span-1 rounded-br-[200px] bg-[#1a0d2b] flex flex-col items-start justify-center pl-28 relative gap-8'>
        <p className='text-white text-lg font-sans pr-28'>
          Crafted with precision and care, our jewelry exemplifies the highest
          standards of quality. Experience the excellence that has defined our
          brand for over a century.
        </p>
        <p className=' text-orange-600 underline'>
          <a href='http://'>Learn More About Our Craft.</a>
        </p>
      </div>

      {/* Bottom Right */}
      <div className='col-span-1 row-span-1 rounded-br-xl overflow-hidden relative flex items-center justify-center bg-transparent'>
        <div className='w-full h-full flex items-center justify-center rounded-full'>
          <img
            src='https://images.unsplash.com/photo-1588445046108-14dced0c98fb?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image'
            className='w-full h-full rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
}
