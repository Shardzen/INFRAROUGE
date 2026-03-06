import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { artists } from '../data/artists';

const ArtistDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtist = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "artists", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArtist(docSnap.data());
        } else {
          // Fallback local
          const localArtist = artists[category]?.find((a) => a.id === id);
          setArtist(localArtist);
        }
      } catch (e) {
        const localArtist = artists[category]?.find((a) => a.id === id);
        setArtist(localArtist);
      }
      setLoading(false);
    };
    fetchArtist();
  }, [id, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (artist) {
      document.title = `${artist.name} | INFRAROUGE`;
    }
  }, [artist]);

  useEffect(() => {
    let requestRef;
    const updateParallax = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffset(rect.top / 10);
        }
      }
      requestRef = requestAnimationFrame(updateParallax);
    };
    requestRef = requestAnimationFrame(updateParallax);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  if (loading) return <div className="min-h-screen bg-[#050505]" />;

  if (!artist) {
    return (
      <div className="pt-40 pb-20 px-4 text-center bg-[#050505] min-h-screen">
        <h2 className="text-4xl font-display text-white mb-8 uppercase">Artiste introuvable</h2>
        <Link to="/artists" className="btn-premium">RETOUR INDEX</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen pb-40">
      {/* Cinematic Hero */}
      <section className="relative h-[90vh] overflow-hidden parallax-container">
        <div ref={heroRef} className="absolute inset-0">
          <img 
            src={artist.heroImage || artist.coverImage} 
            alt={artist.name}
            className="parallax-img scale-110 brightness-50"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <span className="text-infrared-hot font-mono text-[10px] tracking-[0.8em] uppercase mb-6 reveal-text">Profil_Artiste_{artist.id.slice(0, 4)}</span>
          <h1 className="text-7xl sm:text-[15vw] font-display font-black tracking-tighter text-white uppercase leading-[0.8] reveal-text">
            {artist.name}
          </h1>
          <div className="mt-10 flex gap-4 reveal-text animate-delay-500">
            {artist.genres?.map((g, i) => (
              <span key={i} className="px-4 py-1 border border-white/20 rounded-full font-mono text-[8px] text-gray-400 uppercase tracking-widest">{g}</span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="absolute top-32 left-4 sm:left-10 z-30 font-mono text-[8px] text-gray-500 hover:text-white tracking-[0.5em] transition-colors uppercase"
        >
          ← Retour
        </button>
      </section>

      <div className="container mx-auto px-4 sm:px-10 mt-20 sm:mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-20">
            <div className="space-y-8">
              <h2 className="text-gray-800 font-display font-black text-4xl sm:text-6xl uppercase leading-none">Manifeste</h2>
              <p className="text-white text-xl sm:text-3xl font-light leading-relaxed">
                {artist.description}
              </p>
            </div>

            <div className="space-y-8">
              <div className="h-px w-20 bg-infrared-hot opacity-50" />
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                {artist.bio}
              </p>
            </div>

            {/* Media Content */}
            {artist.embedUrl && (
              <div className="pt-10 space-y-8">
                <h3 className="text-gray-800 font-display font-black text-4xl uppercase">Soundcloud_Stream</h3>
                <div className="rounded-3xl overflow-hidden border border-white/5 bg-black">
                  <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src={artist.embedUrl}></iframe>
                </div>
              </div>
            )}

            {artist.videos?.map((v, i) => (
              <div key={i} className="pt-10 space-y-8">
                <h3 className="text-gray-800 font-display font-black text-4xl uppercase">{v.title}</h3>
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 bg-black">
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${v.embedId}`} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Side Info Column */}
          <div className="lg:col-span-5 space-y-12 sticky top-32">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
              <img src={artist.coverImage} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/5 space-y-8">
              <div className="space-y-2">
                <div className="text-gray-600 font-mono text-[8px] uppercase tracking-widest">Localisation</div>
                <div className="text-white font-display text-2xl uppercase">Rennes, FR</div>
              </div>

              <div className="space-y-4">
                <div className="text-gray-600 font-mono text-[8px] uppercase tracking-widest">Connectivité</div>
                <div className="flex flex-col gap-4">
                  {artist.socials?.instagram && (
                    <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group">
                      <span className="font-mono text-[10px] uppercase text-gray-400 group-hover:text-white transition-colors">Instagram</span>
                      <span className="text-infrared-orange group-hover:translate-x-2 transition-transform">↗</span>
                    </a>
                  )}
                  {artist.socials?.soundcloud && (
                    <a href={artist.socials.soundcloud} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center group">
                      <span className="font-mono text-[10px] uppercase text-gray-400 group-hover:text-white transition-colors">Soundcloud</span>
                      <span className="text-infrared-hot group-hover:translate-x-2 transition-transform">↗</span>
                    </a>
                  )}
                </div>
              </div>

              <button className="w-full btn-premium py-4 text-[10px]">Partager le profil</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
