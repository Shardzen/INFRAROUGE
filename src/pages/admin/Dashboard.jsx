import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  addDoc, 
  deleteDoc, 
  setDoc 
} from 'firebase/firestore';
import { artists as initialArtists } from '../../data/artists';
import { events as initialEvents } from '../../data/events';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('artists');
  const [artists, setArtists] = useState({});
  const [events, setEvents] = useState([]);
  const [editingArtist, setEditingArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  // Vérification de l'accès
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Artists
      const artistsSnap = await getDocs(collection(db, "artists"));
      if (artistsSnap.empty) {
        // Si Firebase est vide, on initialise avec les données locales
        await seedDatabase();
      } else {
        const artistsData = { music: [], visualArts: [], photography: [], videography: [] };
        artistsSnap.forEach(doc => {
          const data = { ...doc.data(), id: doc.id };
          const cat = data.categoryKey || 'music';
          if (artistsData[cat]) artistsData[cat].push(data);
        });
        setArtists(artistsData);
      }

      // Fetch Events
      const eventsSnap = await getDocs(collection(db, "events"));
      const eventsList = [];
      eventsSnap.forEach(doc => eventsList.push({ ...doc.data(), id: doc.id }));
      setEvents(eventsList.length > 0 ? eventsList : initialEvents);

    } catch (error) {
      console.error("Erreur Fetch:", error);
    }
    setLoading(false);
  };

  const seedDatabase = async () => {
    setMessage("INITIALISATION DE LA BASE...");
    try {
      for (const cat in initialArtists) {
        for (const artist of initialArtists[cat]) {
          await setDoc(doc(db, "artists", artist.id), {
            ...artist,
            categoryKey: cat
          });
        }
      }
      for (const event of initialEvents) {
        await addDoc(collection(db, "events"), event);
      }
      setMessage("BASE DE DONNÉES PRÊTE");
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  const startEditing = (category, artist) => {
    setEditingArtist({ ...artist, categoryKey: category });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveArtist = async (e) => {
    e.preventDefault();
    try {
      const artistRef = doc(db, "artists", editingArtist.id);
      await updateDoc(artistRef, {
        coverImage: editingArtist.coverImage,
        heroImage: editingArtist.heroImage
      });
      
      setEditingArtist(null);
      setMessage('IMAGE MISE À JOUR SUR GOOGLE CLOUD');
      fetchData();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      alert("Erreur de sauvegarde : " + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono text-xs tracking-widest text-gray-500">
      SYNCHRONISATION FIREBASE...
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-display text-black font-bold">I</div>
            <h1 className="font-display text-xl tracking-tighter uppercase">Infrarouge <span className="text-infrared-hot text-[10px] ml-2">Live Database</span></h1>
          </div>
          
          <div className="flex items-center gap-8">
            <button onClick={() => setActiveTab('artists')} className={`font-mono text-[10px] tracking-widest uppercase ${activeTab === 'artists' ? 'text-infrared-hot' : 'text-gray-500'}`}>Artistes</button>
            <button onClick={() => setActiveTab('events')} className={`font-mono text-[10px] tracking-widest uppercase ${activeTab === 'events' ? 'text-infrared-hot' : 'text-gray-500'}`}>Événements</button>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 font-mono text-[8px] uppercase tracking-widest">Quitter</button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {message && <div className="fixed top-24 right-6 bg-infrared-hot text-white px-6 py-3 rounded-lg font-mono text-[10px] z-[100]">{message}</div>}

        {editingArtist && (
          <div className="mb-20 p-8 border border-white/10 rounded-2xl bg-white/[0.02] space-y-8 animate-page-flash">
            <h2 className="text-2xl font-display font-black uppercase tracking-tighter">Éditer Images : {editingArtist.name}</h2>
            <form onSubmit={handleSaveArtist} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">URL Cover (1:1)</label>
                <input type="text" value={editingArtist.coverImage} onChange={(e) => setEditingArtist({...editingArtist, coverImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs font-mono text-infrared-hot" />
                <img src={editingArtist.coverImage} className="w-full aspect-square object-cover rounded-lg border border-white/5 opacity-50" alt="Preview" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">URL Hero (Banner)</label>
                <input type="text" value={editingArtist.heroImage} onChange={(e) => setEditingArtist({...editingArtist, heroImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs font-mono text-infrared-hot" />
                <img src={editingArtist.heroImage} className="w-full aspect-video object-cover rounded-lg border border-white/5 opacity-50" alt="Preview" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full btn-premium py-4">Sauvegarder dans le Cloud</button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'artists' ? (
          <div className="space-y-12">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Catalogue Cloud</h2>
            {Object.keys(artists).map(category => (
              <div key={category} className="space-y-6">
                <h3 className="text-infrared-orange font-mono text-[10px] tracking-[0.4em] uppercase border-b border-white/5 pb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artists[category].map(artist => (
                    <div key={artist.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <img src={artist.coverImage} className="w-12 h-12 rounded-lg object-cover" alt="" />
                        <div className="font-bold text-sm truncate">{artist.name}</div>
                      </div>
                      <button onClick={() => startEditing(category, artist)} className="w-full py-2 bg-white/[0.05] rounded text-[8px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all">Éditer Images</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Agenda Cloud</h2>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
              <table className="w-full text-left font-mono text-[10px] uppercase">
                <thead><tr className="border-b border-white/5"><th className="p-6">Date</th><th className="p-6">Artiste</th><th className="p-6">Lieu</th></tr></thead>
                <tbody>
                  {events.map(event => (
                    <tr key={event.id} className="border-b border-white/5"><td className="p-6">{event.date}</td><td className="p-6 font-bold">{event.artist}</td><td className="p-6 text-gray-400">{event.location}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
