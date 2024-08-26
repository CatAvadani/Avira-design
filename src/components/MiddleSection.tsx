import Button from './Button';

export default function MiddleSection() {
  return (
    <div className='relative bg-[#1a0d2b] w-full mt-20 '>
      <video
        src='https://cdn.pixabay.com/video/2018/11/10/19253-300109077_large.mp4'
        autoPlay
        loop
        muted
        className='w-full h-[50vh] object-cover'
      ></video>
      <div className='absolute inset-0 bg-black/50 top-0 left-0 w-full flex flex-col justify-center items-center gap-12'>
        <h1 className=' text-xl px-8 text-center sm:text-4xl text-white font-sans capitalize'>
          Introducing Our Latest Collection. Timeless Elegance Meets Modern
          Design.
        </h1>

        <Button buttonType='primary'>Discover Now</Button>
      </div>
    </div>
  );
}
