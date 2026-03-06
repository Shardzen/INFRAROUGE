import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import Events from './pages/Events';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

// Wrapper component to trigger fast animation on route change
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition-fast">
      {children}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('preload');
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('preload');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505] selection:bg-infrared-hot/30">
        {/* Enhanced Light Leaks Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="light-leak leak-1 opacity-30" />
          <div className="light-leak leak-2 opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-infrared-magenta/5 blur-[150px] rounded-full" />
        </div>
        
        <div className="scanline z-50" />
        <div className="grid-lines fixed inset-0 pointer-events-none opacity-5 z-0" />
        
        <Navbar />
        
        <main className="relative z-10">
          <PageTransitionWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:category/:id" element={<ArtistDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Routes>
          </PageTransitionWrapper>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
