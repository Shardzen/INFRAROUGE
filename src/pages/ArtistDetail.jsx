import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { artists } from '../data/artists';

const ArtistDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const artist = artists[category]?.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (artist) {
      document.title = `${artist.name} | INFRAROUGE`;
    }
    return () => {
      document.title = 'INFRAROUGE';
    };
  }, [artist]);

  if (!artist) {
    return (
      <div className="pt-32 pb-20 px-4 sm:px-6 text-center">
        <div className="text-4xl sm:text-6xl text-infrared-purple/30 mb-4">◇</div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-400 mb-8">Artiste non trouvé</h2>
        <Link
          to="/artists"
          className="inline-block px-6 py-3 bg-thermal-gradient rounded-lg text-white font-mono text-xs sm:text-sm tracking-widest"
        >
          RETOUR AUX ARTISTES
        </Link>
      </div>
    );
  }

  const getCategoryIcon = (cat) => {
    const icons = {
      music: '♪',
      visualArts: '◈',
      photography: '◇',
      videography: '▸',
    };
    return icons[cat] || '◆';
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-6">
      {/* Hero Image Section - Full Width */}
      {artist.heroImage && (
        <div className="container mx-auto max-w-7xl mb-8 sm:mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border border-infrared-purple/30 group">
            <img 
              src={artist.heroImage} 
              alt={`${artist.name} hero`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-infrared-darker/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl font-display break-words animate-float">
                {artist.name}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-400 hover:text-infrared-hot transition-colors mb-6 sm:mb-8 font-mono text-xs sm:text-sm"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          RETOUR
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Cover Image - Left Column */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-infrared-purple/30 group">
              {artist.coverImage ? (
                <>
                  <img 
                    src={artist.coverImage} 
                    alt={artist.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-transparent to-transparent" />
                </>
              ) : (
                <div className="w-full h-full bg-infrared-gradient flex items-center justify-center">
                  <div className="text-7xl sm:text-9xl font-bold text-white/10">{getCategoryIcon(category)}</div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient" />
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 border border-infrared-purple/30 rounded-lg bg-infrared-deep/30">
              <div className="font-mono text-xs tracking-widest text-infrared-orange uppercase">
                Réseaux
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {artist.socials?.soundcloud && (
                  <a
                    href={artist.socials.soundcloud}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 sm:p-3 border border-infrared-purple/30 rounded-lg hover:border-infrared-hot/50 transition-all group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-infrared-hot/20 rounded text-infrared-hot font-mono text-xs">
                      SC
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-infrared-hot transition-colors">
                      SoundCloud
                    </span>
                  </a>
                )}
                
                {artist.socials?.instagram && (
                  <a
                    href={artist.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 sm:p-3 border border-infrared-purple/30 rounded-lg hover:border-infrared-orange/50 transition-all group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-infrared-orange/20 rounded text-infrared-orange font-mono text-xs">
                      IG
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-infrared-orange transition-colors">
                      Instagram
                    </span>
                  </a>
                )}
                
                {artist.socials?.youtube && (
                  <a
                    href={artist.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 sm:p-3 border border-infrared-purple/30 rounded-lg hover:border-infrared-magenta/50 transition-all group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-infrared-magenta/20 rounded text-infrared-magenta font-mono text-xs">
                      YT
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-infrared-magenta transition-colors">
                      YouTube
                    </span>
                  </a>
                )}
              </div>
            </div>

            {artist.genres && (
              <div className="p-4 sm:p-6 border border-infrared-purple/30 rounded-lg bg-infrared-deep/30">
                <div className="font-mono text-xs tracking-widest text-infrared-orange mb-3 sm:mb-4 uppercase">
                  Genres / Styles
                </div>
                <div className="flex flex-wrap gap-2">
                  {artist.genres.map((genre, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Only show title here if no hero image */}
            {!artist.heroImage && (
              <div>
                <div className="font-mono text-xs sm:text-sm tracking-widest text-infrared-orange mb-3 uppercase flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">{getCategoryIcon(category)}</span>
                  {artist.category}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-gradient mb-4 sm:mb-6 font-display break-words">
                  {artist.name}
                </h1>
              </div>
            )}

            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                {artist.description}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot uppercase">
                Biographie
              </h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                {artist.bio}
              </p>
            </div>

            {category === 'music' && artist.embedUrl && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot uppercase">
                  Écouter
                </h3>
                <div className="rounded-lg overflow-hidden border border-infrared-purple/30">
                  <iframe
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={artist.embedUrl}
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Instagram Feed pour Arts Plastiques et Photographie */}
            {(category === 'visualArts' || category === 'photography') && artist.instagramHandle && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot uppercase">
                  Portfolio Instagram
                </h3>
                
                {/* Widget Instagram Embed */}
                <div className="rounded-lg overflow-hidden border border-infrared-purple/30 bg-infrared-deep/30">
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-infrared-orange/20 flex items-center justify-center">
                          <span className="text-infrared-orange font-mono text-sm">IG</span>
                        </div>
                        <div>
                          <a 
                            href={artist.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base sm:text-lg font-bold text-white hover:text-infrared-orange transition-colors"
                          >
                            @{artist.instagramHandle}
                          </a>
                          <p className="text-xs text-gray-500 font-mono">Instagram</p>
                        </div>
                      </div>
                      <a
                        href={artist.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-thermal-gradient rounded-lg text-white font-mono text-xs tracking-widest hover:shadow-glow transition-all duration-300"
                      >
                        SUIVRE
                      </a>
                    </div>

                    {/* Message pour voir sur Instagram */}
                    <div className="text-center py-8 space-y-4 border-t border-infrared-purple/20">
                      <div className="text-infrared-orange text-4xl">◈</div>
                      <p className="text-sm sm:text-base text-gray-400">
                        Découvrez le portfolio complet de <span className="text-infrared-hot font-bold">@{artist.instagramHandle}</span>
                      </p>
                      <a
                        href={artist.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-infrared-purple/30 border border-infrared-orange/50 rounded-lg text-infrared-orange font-mono text-xs sm:text-sm tracking-widest hover:border-infrared-orange hover:shadow-glow transition-all duration-300"
                      >
                        VOIR SUR INSTAGRAM →
                      </a>
                      <p className="text-xs text-gray-500 font-mono">
                        Photos • Créations • Behind the scenes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === 'videography' && artist.videos && artist.videos.length > 0 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot uppercase">
                  Vidéos
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {artist.videos.map((video, index) => (
                    <div key={index} className="space-y-3">
                      {video.title && (
                        <h4 className="text-base sm:text-lg font-bold text-white">{video.title}</h4>
                      )}
                      
                      {video.type === 'instagram' ? (
                        <div className="p-4 sm:p-6 border border-infrared-purple/30 rounded-lg bg-infrared-deep/30 text-center space-y-4">
                          <p className="text-sm sm:text-base text-gray-400">Contenu Instagram</p>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-thermal-gradient rounded-lg text-white font-mono text-xs sm:text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300"
                          >
                            VOIR SUR INSTAGRAM
                          </a>
                        </div>
                      ) : video.embedId ? (
                        <div className="relative rounded-lg overflow-hidden border border-infrared-purple/30 aspect-video">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.embedId}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {category === 'videography' && artist.instagramHandle && !artist.videos && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-mono text-xs sm:text-sm tracking-widest text-infrared-hot uppercase">
                  Contenus Instagram
                </h3>
                <div className="p-4 sm:p-6 border border-infrared-purple/30 rounded-lg bg-infrared-deep/30 text-center space-y-4">
                  <p className="text-sm sm:text-base text-gray-400">
                    Découvrez le travail de <span className="text-infrared-hot">@{artist.instagramHandle}</span> sur Instagram
                  </p>
                  <a
                    href={artist.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-thermal-gradient rounded-lg text-white font-mono text-xs sm:text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300"
                  >
                    VOIR SUR INSTAGRAM
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center space-y-4 sm:space-y-6 p-6 sm:p-8 border border-infrared-purple/30 rounded-lg bg-infrared-deep/30">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-gradient">
            Découvrez d'autres artistes
          </h2>
          <Link
            to="/artists"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-thermal-gradient rounded-lg text-white font-mono text-xs sm:text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300"
          >
            VOIR TOUS LES ARTISTES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
