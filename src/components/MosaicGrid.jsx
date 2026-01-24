import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MosaicGrid = ({ items, type = 'artist' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Link
          key={item.id}
          to={type === 'artist' ? `/artist/${item.id}` : `/event/${item.id}`}
          className="group relative aspect-square overflow-hidden rounded-lg border border-infrared-purple/30 hover:border-infrared-hot/50 transition-all duration-500"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name || item.title}
                className="w-full h-full object-cover img-infrared transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-infrared-gradient" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-infrared-darker via-infrared-darker/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>

          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div
              className="transform transition-all duration-500"
              style={{
                transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(10px)',
                opacity: hoveredIndex === index ? 1 : 0.9,
              }}
            >
              {item.category && (
                <div className="font-mono text-xs tracking-widest text-infrared-orange mb-2 uppercase">
                  {item.category}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-gradient">
                {item.name || item.title}
              </h3>
              
              {item.description && (
                <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                  {item.description}
                </p>
              )}

              {item.date && (
                <div className="font-mono text-xs text-infrared-hot">
                  {item.date}
                </div>
              )}

              {item.genres && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.genres.slice(0, 3).map((genre, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono border border-infrared-purple/50 rounded bg-infrared-darker/50"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-1 bg-thermal-gradient transform origin-left transition-transform duration-500"
              style={{
                transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
              }}
            />
          </div>

          <div
            className="absolute top-4 right-4 w-10 h-10 border border-infrared-hot/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-infrared-darker/50 transition-all duration-500"
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              transform: hoveredIndex === index ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.8)',
            }}
          >
            <svg
              className="w-5 h-5 text-infrared-hot"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MosaicGrid;
