import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import FooterTop from './components/FooterTop';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <body className='bg-[#301951] flex flex-col justify-center items-center min-h-screen font-sans overflow-hidden'>
        <Navbar />
        <main className='flex-1 w-full'>
          <Outlet />
        </main>
        <FooterTop />
        <Footer />
      </body>
    </>
  );
}

export default App;
