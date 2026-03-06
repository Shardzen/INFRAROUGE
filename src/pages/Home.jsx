import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { artists as fallbackArtists } from '../data/artists';
import { events as fallbackEvents } from '../data/events';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [artists, setArtists] = useState(fallbackArtists);
  const [events, setEvents] = useState(fallbackEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistsSnap = await getDocs(collection(db, "artists"));
        if (!artistsSnap.empty) {
          const artistsData = { music: [], visualArts: [], photography: [], videography: [] };
          artistsSnap.forEach(doc => {
            const data = { ...doc.data(), id: doc.id };
            const cat = data.categoryKey || 'music';
            if (artistsData[cat]) artistsData[cat].push(data);
          });
          setArtists(artistsData);
        }

        const eventsSnap = await getDocs(collection(db, "events"));
        if (!eventsSnap.empty) {
          const eventsList = [];
          eventsSnap.forEach(doc => eventsList.push({ ...doc.data(), id: doc.id }));
          setEvents(eventsList);
        }
      } catch (e) {
        console.error("Firebase error, using fallback:", e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const featuredMusic = artists.music.slice(0, 3);
  const featuredVisual = artists.visualArts.slice(0, 3);
  const featuredPhoto = artists.photography.slice(0, 3);
  const featuredVideo = artists.videography.slice(0, 3);
  const upcomingEvents = events.slice(0, 2);

  const ArtistCard = ({ artist, categoryKey, offsetFactor = 30 }) => {
    const cardRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      let requestRef;
      const updateParallax = () => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight && rect.bottom > 0) {
            const relativePos = (rect.top + rect.height / 2) / windowHeight - 0.5;
            setOffset(relativePos * offsetFactor);
          }
        }
        requestRef = requestAnimationFrame(updateParallax);
      };
      requestRef = requestAnimationFrame(updateParallax);
      return () => cancelAnimationFrame(requestRef);
    }, [offsetFactor]);

    return (
      <Link
        ref={cardRef}
        to={`/artist/${categoryKey}/${artist.id}`}
        className="editorial-card group relative overflow-hidden rounded-2xl bg-black aspect-[4/5] border border-white/5"
      >
        <div className="thermal-reveal absolute inset-0 z-10" />
        
        {artist.coverImage ? (
          <img 
            src={artist.coverImage} 
            alt={artist.name}
            className="parallax-img transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-[0.8] group-hover:brightness-100"
            style={{ transform: `translateY(${offset}px)` }}
          />
        ) : (
          <div className="w-full h-full bg-[#111]" />
        )}

        <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="px-3 py-1 text-[8px] font-mono tracking-[0.2em] border border-white/10 rounded-full text-white/40 bg-black/20 backdrop-blur-sm uppercase">
              {artist.category}
            </span>
          </div>
          
          <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tighter text-white leading-none">
              {artist.name}
            </h3>
            <div className="flex items-center gap-3">
              <div className="h-px w-4 bg-infrared-hot" />
              <p className="text-[10px] text-gray-400 font-mono uppercase tracking-[0.2em]">
                Explorer
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="relative bg-[#050505]">
      <HeroSection />

      {/* Marquee Section */}
      <div className="py-12 overflow-hidden border-y border-white/5 bg-white/[0.01]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-[8vw] font-display font-black text-white/[0.03] uppercase mx-10 flex items-center gap-10">
              <span>Underground Scene</span>
              <span className="text-infrared-hot opacity-20">/</span>
              <span>Contemporain</span>
              <span className="text-infrared-hot opacity-20">/</span>
              <span>Expérimental</span>
              <span className="text-infrared-hot opacity-20">/</span>
            </div>
          ))}
        </div>
      </div>

      {/* Musique Section */}
      <section className="py-24 sm:py-40 px-4 sm:px-10">
        <div className="container mx-auto">
          <div className="mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-infrared-hot font-mono text-xs tracking-[0.5em] uppercase">
                <span className="w-8 h-px bg-current opacity-30" />
                Selection_01
              </div>
              <h2 className="text-6xl sm:text-9xl font-display font-black tracking-tighter text-white uppercase leading-none">
                Musique
              </h2>
            </div>
            <Link to="/artists" className="btn-premium py-3 px-8 text-[10px]">Voir tout</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMusic.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="music" />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Arts Section */}
      <section className="py-24 sm:py-40 px-4 sm:px-10 bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="mb-20 flex flex-col sm:flex-row-reverse sm:items-end justify-between gap-8">
            <div className="space-y-4 sm:text-right">
              <div className="flex items-center sm:justify-end gap-4 text-infrared-orange font-mono text-xs tracking-[0.5em] uppercase">
                Selection_02
                <span className="w-8 h-px bg-current opacity-30" />
              </div>
              <h2 className="text-6xl sm:text-9xl font-display font-black tracking-tighter text-white uppercase leading-none">
                Visuels
              </h2>
            </div>
            <Link to="/artists" className="btn-premium py-3 px-8 text-[10px]">Archive</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVisual.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="visualArts" />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-24 sm:py-40 px-4 sm:px-10">
        <div className="container mx-auto">
          <div className="mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-infrared-magenta font-mono text-xs tracking-[0.5em] uppercase">
                <span className="w-8 h-px bg-current opacity-30" />
                Capture_03
              </div>
              <h2 className="text-6xl sm:text-9xl font-display font-black tracking-tighter text-white uppercase leading-none">
                Photo
              </h2>
            </div>
            <Link to="/artists" className="btn-premium py-3 px-8 text-[10px]">Galerie</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhoto.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="photography" />
            ))}
          </div>
        </div>
      </section>

      {/* Videography Section */}
      <section className="py-24 sm:py-40 px-4 sm:px-10 bg-white/[0.01]">
        <div className="container mx-auto">
          <div className="mb-20 flex flex-col sm:flex-row-reverse sm:items-end justify-between gap-8">
            <div className="space-y-4 sm:text-right">
              <div className="flex items-center sm:justify-end gap-4 text-infrared-yellow font-mono text-xs tracking-[0.5em] uppercase">
                Motion_04
                <span className="w-8 h-px bg-current opacity-30" />
              </div>
              <h2 className="text-6xl sm:text-9xl font-display font-black tracking-tighter text-white uppercase leading-none">
                Vidéo
              </h2>
            </div>
            <Link to="/artists" className="btn-premium py-3 px-8 text-[10px]">Reels</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideo.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} categoryKey="videography" />
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-32 sm:py-48 px-4 sm:px-10 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-6xl sm:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.8]">
                  Agenda<br /><span className="text-infrared-hot">Live</span>
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md font-mono text-xs uppercase tracking-widest">
                  Performances sonores et immersions visuelles à Rennes.
                </p>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="group py-8 border-b border-white/5 flex items-center justify-between hover:bg-white/[0.01] px-4 transition-colors">
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] text-infrared-orange uppercase tracking-[0.2em]">
                        {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} — {event.location.split(',')[0]}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-infrared-hot transition-colors">
                        {event.title}
                      </h3>
                    </div>
                    <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md group">
                <div className="absolute inset-0 bg-infrared-hot opacity-20 blur-[100px] group-hover:opacity-40 transition-opacity" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=1200&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Event" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 text-[8vw] font-display font-black text-white/10 select-none">
                    JOIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Panel */}
      <section className="py-32 sm:py-48 px-4 sm:px-10">
        <div className="container mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 p-12 sm:p-24 text-center space-y-10">
            <div className="space-y-4">
              <div className="text-infrared-hot font-mono text-[10px] tracking-[0.5em] uppercase">Recrutement_Ouvert</div>
              <h2 className="text-5xl sm:text-8xl font-display font-black tracking-tighter text-white uppercase leading-none">
                Rejoins le<br /><span className="text-gradient">Collectif</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Musique, Visuels, Photo ou Vidéo. Nous scannons la scène underground pour les prochains visionnaires.
            </p>
            <button className="btn-premium">Soumettre ton travail</button>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
              <div className="absolute top-10 left-10 font-mono text-[10px] text-white">001_SCAN_TALENT</div>
              <div className="absolute bottom-10 right-10 font-mono text-[10px] text-white">INF_DEV_2026</div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-black text-white select-none">
                INFRA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center space-y-8">
        <div className="flex justify-center gap-10 font-mono text-[10px] tracking-widest text-gray-500 uppercase">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/artists" className="hover:text-white transition-colors">Artists</Link>
          <Link to="/events" className="hover:text-white transition-colors">Agenda</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
        </div>
        <div className="text-[8px] font-mono text-gray-700 tracking-[0.5em] uppercase">
          INFRAROUGE COLLECTIVE © 2026 / ALL RIGHTS RESERVED
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
