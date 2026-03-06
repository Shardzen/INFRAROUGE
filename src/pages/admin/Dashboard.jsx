import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  addDoc, 
  setDoc,
  deleteDoc
} from 'firebase/firestore';
import { artists as initialArtists } from '../../data/artists';
import { events as initialEvents } from '../../data/events';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('artists');
  const [artists, setArtists] = useState({ music: [], visualArts: [], photography: [], videography: [] });
  const [events, setEvents] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Form states
  const [showArtistForm, setShowArtistForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  
  const initialArtistState = { id: '', name: '', categoryKey: 'music', category: 'Musique', description: '', bio: '', coverImage: '', heroImage: '', instagram: '', soundcloud: '', youtube: '', embedUrl: '' };
  const initialEventState = { title: '', artist: '', date: '', time: '', location: '', category: '', description: '', price: 'Gratuit', ticketUrl: '', coverImage: '', status: 'Ventes ouvertes' };

  const [artistData, setArtistData] = useState(initialArtistState);
  const [eventData, setEventData] = useState(initialEventState);
  const [isEditing, setIsEditing] = useState(false);

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
      const artistsSnap = await getDocs(collection(db, "artists"));
      if (artistsSnap.empty) {
        setArtists(initialArtists);
      } else {
        const artistsDict = { music: [], visualArts: [], photography: [], videography: [] };
        artistsSnap.forEach(doc => {
          const data = { ...doc.data(), id: doc.id };
          const cat = data.categoryKey || 'music';
          if (artistsDict[cat]) artistsDict[cat].push(data);
        });
        setArtists(artistsDict);
      }

      const eventsSnap = await getDocs(collection(db, "events"));
      const eventsList = [];
      eventsSnap.forEach(doc => eventsList.push({ ...doc.data(), id: doc.id }));
      setEvents(eventsList.sort((a, b) => new Date(a.date) - new Date(b.date)));

    } catch (err) {
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
          await setDoc(doc(db, "artists", artist.id), { ...artist, categoryKey: cat });
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

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  // --- ARTIST CRUD ---
  const handleEditArtist = (artist, catKey) => {
    setIsEditing(true);
    setArtistData({
      ...initialArtistState,
      ...artist,
      categoryKey: catKey,
      instagram: artist.socials?.instagram || '',
      soundcloud: artist.socials?.soundcloud || '',
      youtube: artist.socials?.youtube || ''
    });
    setShowArtistForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteArtist = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet artiste définitivement ?")) {
      try {
        await deleteDoc(doc(db, "artists", id));
        showMessage('ARTISTE SUPPRIMÉ');
        fetchData();
      } catch (err) {
        setError("Erreur de suppression: " + err.message);
      }
    }
  };

  const handleSaveArtist = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: artistData.name,
        categoryKey: artistData.categoryKey,
        category: artistData.categoryKey === 'music' ? 'Musique' : artistData.categoryKey === 'visualArts' ? 'Arts Plastiques' : artistData.categoryKey === 'photography' ? 'Photographie' : 'Vidéographie',
        description: artistData.description,
        bio: artistData.bio,
        coverImage: artistData.coverImage,
        heroImage: artistData.heroImage,
        embedUrl: artistData.embedUrl,
        socials: {
          instagram: artistData.instagram,
          soundcloud: artistData.soundcloud,
          youtube: artistData.youtube
        }
      };

      if (isEditing) {
        await updateDoc(doc(db, "artists", artistData.id), payload);
        showMessage('ARTISTE MIS À JOUR');
      } else {
        const customId = artistData.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        await setDoc(doc(db, "artists", customId), { ...payload, id: customId });
        showMessage('ARTISTE AJOUTÉ');
      }
      setShowArtistForm(false);
      fetchData();
    } catch (err) {
      setError("Erreur de sauvegarde: " + err.message);
    }
  };

  // --- EVENT CRUD ---
  const handleEditEvent = (event) => {
    setIsEditing(true);
    setEventData(event);
    setShowEventForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Supprimer cet événement ?")) {
      try {
        await deleteDoc(doc(db, "events", id));
        showMessage('ÉVÉNEMENT SUPPRIMÉ');
        fetchData();
      } catch (err) {
        setError("Erreur de suppression: " + err.message);
      }
    }
  };

  const handleSaveEvent = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateDoc(doc(db, "events", eventData.id), eventData);
        showMessage('ÉVÉNEMENT MIS À JOUR');
      } else {
        await addDoc(collection(db, "events"), eventData);
        showMessage('ÉVÉNEMENT AJOUTÉ');
      }
      setShowEventForm(false);
      fetchData();
    } catch (err) {
      setError("Erreur de sauvegarde: " + err.message);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center space-y-6">
      <div className="w-12 h-12 border-2 border-infrared-hot border-t-transparent rounded-full animate-spin"></div>
      <div className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase animate-pulse">Synchronisation Cloud...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-display text-black font-bold">I</div>
            <h1 className="font-display text-xl tracking-tighter uppercase">Infrarouge <span className="text-infrared-hot text-[10px] ml-2">Admin Panel</span></h1>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={() => {setActiveTab('artists'); setShowArtistForm(false); setShowEventForm(false);}} className={`font-mono text-[10px] tracking-widest uppercase ${activeTab === 'artists' ? 'text-infrared-hot' : 'text-gray-500 hover:text-white'}`}>Artistes</button>
            <button onClick={() => {setActiveTab('events'); setShowArtistForm(false); setShowEventForm(false);}} className={`font-mono text-[10px] tracking-widest uppercase ${activeTab === 'events' ? 'text-infrared-hot' : 'text-gray-500 hover:text-white'}`}>Agenda</button>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 font-mono text-[8px] uppercase tracking-widest">Quitter</button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {error && (
          <div className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl space-y-4">
            <div className="flex items-center gap-3 text-red-500 font-mono text-xs uppercase tracking-widest"><span>⚠️</span> Erreur</div>
            <p className="text-gray-400 text-xs font-mono">{error}</p>
            <button onClick={() => setError(null)} className="text-[8px] font-mono uppercase bg-red-500 px-4 py-2 rounded">Ignorer</button>
          </div>
        )}

        {message && <div className="fixed top-24 right-6 bg-infrared-hot text-white px-6 py-3 rounded-lg font-mono text-[10px] z-[100] shadow-glow">{message}</div>}

        <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter">
            {activeTab === 'artists' ? 'Catalogue Artistes' : 'Agenda Live'}
          </h2>
          <div className="flex gap-4">
            {activeTab === 'artists' && !showArtistForm && (
              <button onClick={() => { setIsEditing(false); setArtistData(initialArtistState); setShowArtistForm(true); }} className="btn-premium px-6 py-2 text-[10px]">Ajouter un artiste</button>
            )}
            {activeTab === 'events' && !showEventForm && (
              <button onClick={() => { setIsEditing(false); setEventData(initialEventState); setShowEventForm(true); }} className="btn-premium px-6 py-2 text-[10px]">Ajouter un événement</button>
            )}
            <button onClick={seedDatabase} className="text-[8px] font-mono border border-white/10 px-4 py-2 rounded hover:text-infrared-hot">FORCER SYNCHRO CLOUD</button>
          </div>
        </div>

        {/* ARTIST FORM */}
        {showArtistForm && activeTab === 'artists' && (
          <div className="mb-20 p-8 border border-white/10 rounded-2xl bg-white/[0.02] space-y-8 animate-page-flash">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-display font-black uppercase">{isEditing ? 'Éditer Artiste' : 'Nouvel Artiste'}</h3>
              <button onClick={() => setShowArtistForm(false)} className="text-gray-500 font-mono text-[10px] uppercase">Annuler</button>
            </div>
            
            <form onSubmit={handleSaveArtist} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Nom complet</label>
                <input required type="text" value={artistData.name} onChange={e => setArtistData({...artistData, name: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white outline-none focus:border-infrared-hot" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Catégorie</label>
                <select value={artistData.categoryKey} onChange={e => setArtistData({...artistData, categoryKey: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-sm text-white outline-none focus:border-infrared-hot">
                  <option value="music">Musique</option>
                  <option value="visualArts">Arts Plastiques</option>
                  <option value="photography">Photographie</option>
                  <option value="videography">Vidéographie</option>
                </select>
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Slogan / Courte description (1 phrase)</label>
                <input required type="text" value={artistData.description} onChange={e => setArtistData({...artistData, description: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white outline-none focus:border-infrared-hot" />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Biographie complète</label>
                <textarea required rows="4" value={artistData.bio} onChange={e => setArtistData({...artistData, bio: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white outline-none focus:border-infrared-hot" />
              </div>

              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Cover Image (URL 1:1)</label>
                <input required type="url" value={artistData.coverImage} onChange={e => setArtistData({...artistData, coverImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs text-infrared-hot" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Hero Banner (URL large)</label>
                <input type="url" value={artistData.heroImage} onChange={e => setArtistData({...artistData, heroImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs text-infrared-hot" />
              </div>

              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Instagram URL</label>
                <input type="url" value={artistData.instagram} onChange={e => setArtistData({...artistData, instagram: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs text-white" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Soundcloud URL</label>
                <input type="url" value={artistData.soundcloud} onChange={e => setArtistData({...artistData, soundcloud: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs text-white" />
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full btn-premium py-4">Enregistrer l'artiste</button>
              </div>
            </form>
          </div>
        )}

        {/* EVENT FORM */}
        {showEventForm && activeTab === 'events' && (
          <div className="mb-20 p-8 border border-white/10 rounded-2xl bg-white/[0.02] space-y-8 animate-page-flash">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-display font-black uppercase">{isEditing ? 'Éditer Événement' : 'Nouvel Événement'}</h3>
              <button onClick={() => setShowEventForm(false)} className="text-gray-500 font-mono text-[10px] uppercase">Annuler</button>
            </div>
            
            <form onSubmit={handleSaveEvent} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Titre de la soirée</label>
                <input required type="text" value={eventData.title} onChange={e => setEventData({...eventData, title: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Artiste principal</label>
                <input required type="text" value={eventData.artist} onChange={e => setEventData({...eventData, artist: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>

              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Date (ex: 2026-05-15)</label>
                <input required type="date" value={eventData.date} onChange={e => setEventData({...eventData, date: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Heure (ex: 23:00)</label>
                <input required type="time" value={eventData.time} onChange={e => setEventData({...eventData, time: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>

              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Lieu (ex: L'Ubu, Rennes)</label>
                <input required type="text" value={eventData.location} onChange={e => setEventData({...eventData, location: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Prix (ex: 15€)</label>
                <input required type="text" value={eventData.price} onChange={e => setEventData({...eventData, price: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Description</label>
                <textarea required rows="3" value={eventData.description} onChange={e => setEventData({...eventData, description: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white" />
              </div>

              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Lien Billeterie</label>
                <input required type="url" value={eventData.ticketUrl} onChange={e => setEventData({...eventData, ticketUrl: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs text-infrared-hot" />
              </div>
              <div className="space-y-4">
                <label className="block font-mono text-[10px] text-gray-500 uppercase">Image d'illustration (URL)</label>
                <input required type="url" value={eventData.coverImage} onChange={e => setEventData({...eventData, coverImage: e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-xs text-infrared-hot" />
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full btn-premium py-4">Enregistrer l'événement</button>
              </div>
            </form>
          </div>
        )}

        {/* LISTS */}
        {!showArtistForm && activeTab === 'artists' && (
          <div className="grid grid-cols-1 gap-12">
            {Object.keys(artists).map(category => (
              artists[category].length > 0 && (
                <div key={category} className="space-y-6">
                  <h3 className="text-infrared-orange font-mono text-[10px] tracking-[0.4em] uppercase border-b border-white/5 pb-4">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artists[category].map(artist => (
                      <div key={artist.id} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.03] transition-all">
                        <div className="flex items-center gap-4">
                          <img src={artist.coverImage} className="w-14 h-14 rounded-lg object-cover" alt="" />
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-sm truncate">{artist.name}</div>
                            <div className="text-[10px] text-gray-500 font-mono truncate">{artist.description}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditArtist(artist, category)} className="flex-1 py-2 bg-white/5 rounded text-[8px] font-mono uppercase hover:bg-white hover:text-black transition-all">Éditer</button>
                          <button onClick={() => handleDeleteArtist(artist.id)} className="px-4 py-2 bg-red-500/10 text-red-500 rounded text-[8px] font-mono uppercase hover:bg-red-500 hover:text-white transition-all">Sup</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {!showEventForm && activeTab === 'events' && (
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
            <table className="w-full text-left font-mono text-[10px] uppercase">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01]">
                  <th className="p-6 text-gray-500">Date</th>
                  <th className="p-6 text-gray-500">Titre & Artiste</th>
                  <th className="p-6 text-gray-500">Lieu</th>
                  <th className="p-6 text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event.id} className="border-b border-white/5 hover:bg-white/[0.01]">
                    <td className="p-6 text-white whitespace-nowrap">{event.date}</td>
                    <td className="p-6">
                      <div className="font-bold text-sm text-white">{event.title}</div>
                      <div className="text-gray-500 mt-1">{event.artist}</div>
                    </td>
                    <td className="p-6 text-gray-400">{event.location}</td>
                    <td className="p-6 text-right space-x-2 whitespace-nowrap">
                      <button onClick={() => handleEditEvent(event)} className="px-4 py-2 bg-white/5 rounded text-[8px] hover:bg-white hover:text-black transition-all">Éditer</button>
                      <button onClick={() => handleDeleteEvent(event.id)} className="px-4 py-2 bg-red-500/10 text-red-500 rounded text-[8px] hover:bg-red-500 hover:text-white transition-all">✕</button>
                    </td>
                  </tr>
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
