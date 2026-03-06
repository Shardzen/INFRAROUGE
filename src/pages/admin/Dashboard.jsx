import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { artists } from '../../data/artists';
import { events } from '../../data/events';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('artists');
  
  // Vérification de l'accès
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Sidebar / Topbar */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-infrared-hot rounded-sm flex items-center justify-center font-display text-black font-bold">I</div>
            <h1 className="font-display text-xl tracking-tighter uppercase">Infrarouge <span className="text-gray-500">CMS</span></h1>
          </div>
          
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setActiveTab('artists')}
              className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${activeTab === 'artists' ? 'text-infrared-hot' : 'text-gray-500 hover:text-white'}`}
            >
              Artistes
            </button>
            <button 
              onClick={() => setActiveTab('events')}
              className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${activeTab === 'events' ? 'text-infrared-hot' : 'text-gray-500 hover:text-white'}`}
            >
              Événements
            </button>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 border border-white/10 rounded font-mono text-[8px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {activeTab === 'artists' ? (
          <div className="space-y-12">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Gestion des Artistes</h2>
                <p className="text-gray-500 font-mono text-xs">Ajouter, modifier ou supprimer des profils de la plateforme.</p>
              </div>
              <button className="btn-premium py-3 px-8 text-[10px]">Nouveil Artiste +</button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {Object.keys(artists).map(category => (
                <div key={category} className="space-y-4">
                  <h3 className="text-infrared-orange font-mono text-[10px] tracking-[0.3em] uppercase border-b border-white/5 pb-2">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {artists[category].map(artist => (
                      <div key={artist.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between group hover:border-white/20 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded overflow-hidden bg-gray-900">
                            <img src={artist.coverImage} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="font-bold text-sm">{artist.name}</div>
                            <div className="text-[10px] text-gray-500 font-mono uppercase">{artist.id}</div>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:text-infrared-hot transition-colors">✎</button>
                          <button className="p-2 hover:text-red-500 transition-colors">✕</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Agenda Live</h2>
                <p className="text-gray-500 font-mono text-xs">Gérer les concerts et performances à venir.</p>
              </div>
              <button className="btn-premium py-3 px-8 text-[10px]">Nouvel Événement +</button>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
              <table className="w-full text-left font-mono text-[10px] uppercase tracking-wider">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.01]">
                    <th className="p-6 text-gray-500 font-normal">Date</th>
                    <th className="p-6 text-gray-500 font-normal">Artiste / Titre</th>
                    <th className="p-6 text-gray-500 font-normal">Lieu</th>
                    <th className="p-6 text-gray-500 font-normal text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(event => (
                    <tr key={event.id} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                      <td className="p-6 text-white">{event.date}</td>
                      <td className="p-6">
                        <div className="font-bold text-xs text-white">{event.title}</div>
                        <div className="text-gray-500">{event.artist}</div>
                      </td>
                      <td className="p-6 text-gray-400">{event.location}</td>
                      <td className="p-6 text-right space-x-4">
                        <button className="text-gray-500 hover:text-white transition-colors">Modifier</button>
                        <button className="text-gray-500 hover:text-red-500 transition-colors">Supprimer</button>
                      </td>
                    </tr>
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
