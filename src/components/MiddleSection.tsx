import { Link } from 'react-scroll';
import Button from './Button';

export default function MiddleSection() {
  return (
    <div id='middle-section' className='relative w-full h-full mt-32'>
      <video
        src='/ring-video.mp4'
        autoPlay
        loop
        muted
        className='w-full h-[80vh] object-cover'
      ></video>
      <div className='absolute inset-0 bg-black/10 top-0 left-0 w-full flex flex-col justify-center items-center gap-16'>
        <h1 className='text-xl px-8 text-center sm:text-4xl text-white font-sans capitalize'>
          Introducing Our Latest Collection. Timeless Elegance Meets Modern
          Design.
        </h1>
        <Link
          to='trending'
          smooth={true}
          duration={500}
          offset={-70} 
        >
          <Button buttonType='primary'>Discover Now</Button>
        </Link>
      </div>
    </div>
  );
}
