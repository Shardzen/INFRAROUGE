import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ArtistDetail from './pages/ArtistDetail';
import About from './pages/About';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation du chargement initial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/musique" element={<CategoryPage category="Musique" />} />
            <Route path="/arts-plastiques" element={<CategoryPage category="Arts Plastiques" />} />
            <Route path="/street-art" element={<CategoryPage category="Street Art" />} />
            <Route path="/photographie" element={<CategoryPage category="Photographie" />} />
            <Route path="/artiste/:slug" element={<ArtistDetail />} />
            <Route path="/a-propos" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
