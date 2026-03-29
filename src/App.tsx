import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/conactUs/ContactPage.tsx';
import LandingPage from './pages/landing/LandingPage.tsx';
import MapPage from './pages/map/MapPage.tsx';
import ZooPage from './pages/zoos/ZooPage.tsx';
import { Layout } from './layouts/MainLayout.tsx';
import NotFoundPage from './pages/notFound/NotFoundPage.tsx';
import { AuthProvider } from './providers/AuthProvider.tsx';

function App() {

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/zoo/:id" element={<ZooPage />} />
          <Route
            path="/contacts"
            element={<ContactPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
