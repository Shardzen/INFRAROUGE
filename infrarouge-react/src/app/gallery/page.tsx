'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Filter, Eye, Heart, Share2 } from 'lucide-react'
import Layout from '@/components/Layout'

interface GalleryItem {
  id: number
  title: string
  artist: string
  category: 'street-art' | 'photography' | 'digital-art' | 'painting'
  image: string
  likes: number
  views: number
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const categories = [
    { id: 'all', name: 'Tout', count: 24 },
    { id: 'street-art', name: 'Street Art', count: 8 },
    { id: 'photography', name: 'Photographie', count: 6 },
    { id: 'digital-art', name: 'Art Numérique', count: 5 },
    { id: 'painting', name: 'Peinture', count: 5 }
  ]

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Mural Urbain',
      artist: 'Street King',
      category: 'street-art',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
      likes: 234,
      views: 1250
    },
    {
      id: 2,
      title: 'Tags Underground',
      artist: 'Tag Master',
      category: 'street-art',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: 'Nuit Urbaine',
      artist: 'Night Lens',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: 456,
      views: 2100
    },
    {
      id: 4,
      title: 'Portrait d&apos;Artiste',
      artist: 'Soul Capture',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=600&fit=crop',
      likes: 321,
      views: 1650
    },
    {
      id: 5,
      title: 'Abstraction Numérique',
      artist: 'Digital Wave',
      category: 'digital-art',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=600&fit=crop',
      likes: 278,
      views: 1420
    },
    {
      id: 6,
      title: 'Scène Urbaine',
      artist: 'Urban Sketch',
      category: 'digital-art',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
      likes: 198,
      views: 890
    },
    {
      id: 7,
      title: 'Expression Urbaine',
      artist: 'Canvas Rebel',
      category: 'painting',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
      likes: 345,
      views: 1780
    },
    {
      id: 8,
      title: 'Géométries Urbaines',
      artist: 'Shape Master',
      category: 'painting',
      image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=600&fit=crop',
      likes: 267,
      views: 1340
    },
    {
      id: 9,
      title: 'Message Social',
      artist: 'Voice Wall',
      category: 'street-art',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop',
      likes: 412,
      views: 1950
    }
  ]

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white">GALERIE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez les œuvres des artistes underground qui repoussent les limites de la créativité visuelle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-900 border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">par {item.artist}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {item.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views}
                        </div>
                      </div>
                      <button className="p-2 rounded-full bg-yellow-400/20 hover:bg-yellow-400/40 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full capitalize">
                      {item.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
              Charger plus d&apos;œuvres
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full bg-gray-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                  <p className="text-gray-400">par {selectedItem.artist}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {selectedItem.likes} likes
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {selectedItem.views} vues
                </div>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full capitalize">
                  {selectedItem.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  )
}
