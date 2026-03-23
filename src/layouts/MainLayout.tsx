import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import type { ReactNode } from 'react';
import PopupProvider from '../components/popups/contextProvider/PopupProvider.tsx';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps>   = ({ children }) => {
  return (
    <PopupProvider>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </PopupProvider>
  );
};