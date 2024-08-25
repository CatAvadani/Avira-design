export default function HeroSection() {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-4 p-4 max-w-screen-xl min-h-screen'>
      {/* Top Left: Large image  */}
      <div className='col-span-2 row-span-2 rounded-tr-[200px] overflow-hidden bg-[#301951] relative'>
        <img
          src='https://img.freepik.com/free-photo/beautiful-model-with-ponytail-makeup_144627-1328.jpg?t=st=1724588595~exp=1724592195~hmac=d97a04427bba65295335c55f4e9567c177ad7b481c1e09c7a3323de907383414&w=1380'
          alt='Image'
          className='w-full h-full object-cover'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-white text-6xl font-bold drop-shadow-lg'>
            Your Text Here
          </h1>
        </div>
      </div>

      {/* Top Right: Growth Text */}
      <div className='col-span-1 row-span-2 rounded-b-full rounded-tr-full bg-[#edebef] opacity-80  flex flex-col items-center justify-center text-center p-6 gap-16'>
        <div className='w-64 h-64 flex items-center justify-center rounded-full'>
          <img
            src='/public/Diamond-transparent.png'
            alt='Image'
            className='w-full h-full rounded-full object-cover'
          />
        </div>
        <h1 className='text-4xl font-serif'>
          Text
          <br />
          <span className='text-md font-light'>Some text</span>
        </h1>
      </div>

      {/* Bottom Center: Grow Together text */}
      <div className='col-span-2 row-span-1 rounded-br-[200px] bg-[#130a20] flex flex-col items-center justify-center p-4 relative'>
        <p className='text-white text-lg font-bold'>
          Text
          <br />
          <span className='text-sm font-light'>more text</span>
        </p>
        <div className='mt-10 w-24 h-10 bg-[#ff6200] rounded-full flex items-center justify-center text-xs text-white'>
          BUTTON
        </div>
      </div>

      {/* Bottom Right: Circular masked image */}
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
