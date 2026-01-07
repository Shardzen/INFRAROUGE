'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Play, Calendar, MapPin } from 'lucide-react'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const featuredArtists = [
    {
      id: 1,
      name: 'Petite Sœur',
      genre: 'Rap · Marseille',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
      description: 'L\'ascension fulgurante du rap marseillais'
    },
    {
      id: 2,
      name: 'Lorenzo',
      genre: 'Rap · Groove',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600',
      description: '10 ans de carrière décryptés'
    },
    {
      id: 3,
      name: 'Laylow',
      genre: 'Rap · Trap',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600',
      description: 'L\'évolution du rap français'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Showcase Petite Sœur',
      date: '28 Déc',
      location: 'La Machine du Moulin Rouge · Paris',
      type: 'Concert'
    },
    {
      id: 2,
      title: 'Expo Street Art',
      date: '05 Jan',
      location: 'Galerie Itinerrance · Paris',
      type: 'Exposition'
    },
    {
      id: 3,
      title: 'Soirée Underground Sessions',
      date: '12 Jan',
      location: 'Ground Control · Paris',
      type: 'Soirée'
    }
  ]

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-sm font-medium">Underground Culture Since 2020</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-bold mb-6"
          >
            <span className="text-white">INFRA</span>
            <span className="text-yellow-400">ROUGE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            La nouvelle référence de la culture artistique française.<br />
            <span className="text-yellow-400">Rap · Street Art · Photographie · Art Numérique</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
              Découvrir
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Nos Artistes
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">150+</div>
              <div className="text-gray-400 text-sm">Artistes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-gray-400 text-sm">Events</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-medium mb-4 block">À la une</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Dernières <span className="text-yellow-400">Actualités</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-96">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
                  alt="Featured"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Exclusif
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-yellow-400 text-sm">Interview</span>
                  <span className="text-gray-400 text-sm">22 Déc 2025</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Petite Sœur : L'ascension fulgurante du rap marseillais
                </h3>
                <p className="text-gray-300 mb-6">
                  Rencontre exclusive avec l'artiste qui bouleverse les codes du rap français avec son style unique et authentique.
                </p>
                <button className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  Lire l'article →
                </button>
              </div>
            </motion.article>

            {/* Side Articles */}
            <div className="space-y-8">
              {featuredArtists.slice(1).map((artist, index) => (
                <motion.article
                  key={artist.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-yellow-400 text-sm">{artist.genre.split('·')[0]}</span>
                      <span className="text-gray-400 text-sm">20 Déc</span>
                    </div>
                    <h3 className="font-bold mb-2">{artist.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{artist.description}</p>
                    <button className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium">
                      Découvrir →
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artists Spotlight */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-medium mb-4 block">Talents</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Artistes en <span className="text-yellow-400">Lumière</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les voix qui redéfinissent la culture underground
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center space-x-4">
                      <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                        <Play className="w-5 h-5 text-black" />
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
                <p className="text-gray-400 text-sm">{artist.genre}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Events Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-yellow-400 text-sm font-medium mb-4 block">Agenda</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Événements à <span className="text-yellow-400">Venir</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Concerts, expositions, vernissages et rencontres avec les artistes du moment.
                Ne manquez aucun événement de la scène underground.
              </p>
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors duration-300">
                Voir tous les événements
              </button>
            </motion.div>

            {/* Events List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{event.date.split(' ')[0]}</div>
                    <div className="text-sm text-gray-400">{event.date.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 group-hover:text-yellow-400 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <span className="inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-yellow-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-purple-400/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Restez dans le <span className="text-yellow-400">Spectre</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Recevez nos dernières actus, interviews exclusives et découvertes underground directement dans votre inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-r-lg hover:bg-yellow-300 transition-colors">
                S'abonner
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Pas de spam, promis. Désabonnement en un clic.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
