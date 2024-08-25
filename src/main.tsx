import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Explore from './pages/Explore.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index Component={Home} />
      <Route path='explore' Component={Explore} />
      <Route path='about' Component={About} />
      <Route path='contact' Component={Contact} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
