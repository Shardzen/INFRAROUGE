import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  addDoc, 
  setDoc 
} from 'firebase/firestore';
import { artists as initialArtists } from '../../data/artists';
import { events as initialEvents } from '../../data/events';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('artists');
  const [artists, setArtists] = useState({ music: [], visualArts: [], photography: [], videography: [] });
  const [events, setEvents] = useState([]);
  const [editingArtist, setEditingArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    setError(null);
    try {
      console.log("Tentative de connexion Firestore...");
      // Fetch Artists
      const artistsSnap = await getDocs(collection(db, "artists"));
      
      if (artistsSnap.empty) {
        console.log("Base vide, initialisation nécessaire.");
        setArtists(initialArtists); // Fallback pour affichage immédiat
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

    } catch (err) {
      console.error("Erreur détaillée:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const seedDatabase = async () => {
    setLoading(true);
    setMessage("SYNCHRONISATION EN COURS...");
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
      setMessage("CLOUD SYNCHRONISÉ AVEC SUCCÈS");
      setTimeout(() => setMessage(''), 3000);
      fetchData();
    } catch (e) {
      setError("ERREUR DE SYNC: " + e.message);
      setLoading(false);
    }
  };

  const startEditing = (category, artist) => {
    setEditingArtist({ ...artist, categoryKey: category });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveArtist = async (e) => {
    e.preventDefault();
    setMessage('SAUVEGARDE...');
    try {
      const artistRef = doc(db, "artists", editingArtist.id);
      await updateDoc(artistRef, {
        coverImage: editingArtist.coverImage,
        heroImage: editingArtist.heroImage
      });
      
      setEditingArtist(null);
      setMessage('MISE À JOUR RÉUSSIE');
      fetchData();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setError("ERREUR CLOUD: " + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center space-y-6">
      <div className="w-12 h-12 border-2 border-infrared-hot border-t-transparent rounded-full animate-spin"></div>
      <div className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase animate-pulse">
        Initialisation de la liaison Cloud...
      </div>
      {message && <div className="text-infrared-hot font-mono text-[8px]">{message}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-display text-black font-bold">I</div>
            <h1 className="font-display text-xl tracking-tighter uppercase">Infrarouge <span className="text-infrared-hot text-[10px] ml-2">Admin</span></h1>
          </div>
          
          <div className="flex items-center gap-8">
            <button onClick={() => setActiveTab('artists')} className={`font-mono text-[10px] tracking-widest uppercase ${activeTab === 'artists' ? 'text-infrared-hot' : 'text-gray-500'}`}>Artistes</button>
            <button onClick={() => setActiveTab('events')} className={`font-mono text-[10px] tracking-widest uppercase ${activeTab === 'events' ? 'text-infrared-hot' : 'text-gray-500'}`}>Événements</button>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 font-mono text-[8px] uppercase tracking-widest">Quitter</button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {error && (
          <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl space-y-4">
            <div className="flex items-center gap-3 text-red-500 font-mono text-xs uppercase tracking-widest">
              <span>⚠️</span> Erreur de connexion Cloud
            </div>
            <p className="text-gray-400 text-xs font-mono">{error}</p>
            <div className="flex gap-4">
              <button onClick={fetchData} className="text-[8px] font-mono uppercase bg-red-500 text-white px-4 py-2 rounded">Réessayer</button>
              <button onClick={() => setError(null)} className="text-[8px] font-mono uppercase text-gray-500">Ignorer</button>
            </div>
          </div>
        )}

        {message && <div className="fixed top-24 right-6 bg-infrared-hot text-white px-6 py-3 rounded-lg font-mono text-[10px] z-[100] shadow-glow">{message}</div>}

        <div className="flex justify-between items-center mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter">
              {activeTab === 'artists' ? 'Catalogue' : 'Agenda'}
            </h2>
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Contrôle des flux de données</p>
          </div>
          <button onClick={seedDatabase} className="text-[8px] font-mono tracking-widest border border-white/10 px-4 py-2 rounded hover:bg-white hover:text-black transition-all">
            FORCER LA SYNCHRO CLOUD
          </button>
        </div>

        {editingArtist && (
          <div className="mb-20 p-8 border border-white/10 rounded-2xl bg-white/[0.02] space-y-8 animate-page-flash">
            <h2 className="text-2xl font-display font-black uppercase tracking-tighter">Éditer : {editingArtist.name}</h2>
            <form onSubmit={handleSaveArtist} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">URL Cover</label>
                <input type="text" value={editingArtist.coverImage} onChange={(e) => setEditingArtist({...editingArtist, coverImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs font-mono text-infrared-hot outline-none" />
                <div className="aspect-square rounded-lg overflow-hidden border border-white/5">
                  <img src={editingArtist.coverImage} className="w-full h-full object-cover opacity-50" alt="Preview" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">URL Hero</label>
                <input type="text" value={editingArtist.heroImage} onChange={(e) => setEditingArtist({...editingArtist, heroImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs font-mono text-infrared-hot outline-none" />
                <div className="aspect-video rounded-lg overflow-hidden border border-white/5">
                  <img src={editingArtist.heroImage} className="w-full h-full object-cover opacity-50" alt="Preview" />
                </div>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full btn-premium py-4">Mettre à jour sur le Cloud</button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'artists' ? (
          <div className="grid grid-cols-1 gap-12">
            {Object.keys(artists).map(category => (
              <div key={category} className="space-y-6">
                <h3 className="text-infrared-orange font-mono text-[10px] tracking-[0.4em] uppercase border-b border-white/5 pb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artists[category]?.map(artist => (
                    <div key={artist.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-6 group hover:border-white/20 transition-all">
                      <div className="flex items-center gap-4">
                        <img src={artist.coverImage} className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0" alt="" />
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
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
            <table className="w-full text-left font-mono text-[10px] uppercase">
              <thead><tr className="border-b border-white/5 bg-white/[0.01]"><th className="p-6 text-gray-500">Date</th><th className="p-6 text-gray-500">Artiste</th><th className="p-6 text-gray-500">Lieu</th></tr></thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id} className="border-b border-white/5 hover:bg-white/[0.01]"><td className="p-6">{event.date}</td><td className="p-6 font-bold">{event.artist}</td><td className="p-6 text-gray-400">{event.location}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
