import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { artists } from '../data/artists';

const ArtistDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = artists.find((a) => a.id === parseInt(id));

  if (!artist) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <div className="text-6xl text-infrared-purple/30 mb-4">◇</div>
        <h2 className="text-2xl font-bold text-gray-400 mb-8">Artiste non trouvé</h2>
        <Link
          to="/artists"
          className="inline-block px-6 py-3 bg-thermal-gradient rounded-lg text-white font-mono text-sm tracking-widest"
        >
          RETOUR AUX ARTISTES
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-400 hover:text-infrared-hot transition-colors mb-8 font-mono text-sm"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          RETOUR
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-infrared-purple/30">
            {artist.image ? (
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover img-infrared"
              />
            ) : (
              <div className="w-full h-full bg-infrared-gradient flex items-center justify-center">
                <div className="text-9xl font-bold text-white/10">{artist.name.charAt(0)}</div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient" />
          </div>

          <div className="space-y-8">
            <div>
              <div className="font-mono text-sm tracking-widest text-infrared-orange mb-2 uppercase">
                {artist.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-gradient mb-4">
                {artist.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                {artist.genres.map((genre, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono border border-infrared-purple/50 rounded bg-infrared-darker/50 text-gray-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">{artist.description}</p>

            <div className="space-y-4">
              <h3 className="font-mono text-sm tracking-widest text-infrared-hot">BIOGRAPHIE</h3>
              <p className="text-gray-400 leading-relaxed">{artist.bio}</p>
            </div>

            <div className="flex gap-4">
              {Object.entries(artist.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="w-12 h-12 flex items-center justify-center border border-infrared-purple/50 hover:border-infrared-hot rounded-lg text-xs font-mono text-gray-400 hover:text-infrared-hot transition-all hover:shadow-glow uppercase"
                >
                  {platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-gradient">DISCOGRAPHIE</h2>
            <div className="space-y-4">
              {artist.discography.map((release, index) => (
                <div
                  key={index}
                  className="group p-4 border border-infrared-purple/30 rounded-lg hover:border-infrared-hot/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-colors">
                      {release.title}
                    </h3>
                    <span className="text-xs font-mono text-infrared-orange px-2 py-1 bg-infrared-deep rounded">
                      {release.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-mono">{release.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-gradient">PROCHAINS CONCERTS</h2>
            {artist.upcomingShows.length > 0 ? (
              <div className="space-y-4">
                {artist.upcomingShows.map((show, index) => (
                  <div
                    key={index}
                    className="group p-4 border border-infrared-purple/30 rounded-lg hover:border-infrared-hot/50 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-thermal-radial opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="font-mono text-sm tracking-widest text-infrared-hot mb-2">
                        {show.date}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{show.venue}</h3>
                      <p className="text-sm text-gray-400">{show.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 border border-infrared-purple/20 rounded-lg text-center">
                <p className="text-gray-500 font-mono text-sm">Aucun concert prévu pour le moment</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-gradient">
            DÉCOUVREZ D'AUTRES ARTISTES
          </h2>
          <Link
            to="/artists"
            className="inline-block px-8 py-4 bg-thermal-gradient rounded-lg text-white font-mono text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300"
          >
            VOIR TOUS LES ARTISTES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
