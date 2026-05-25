import { Outlet, useLocation } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className='selection:bg-accent selection:text-bg flex min-h-screen flex-col'>
      <Header />

      <main className='relative flex w-full grow flex-col'>
        <Outlet key={location.pathname} />
      </main>

      <Footer />
    </div>
  );
}
