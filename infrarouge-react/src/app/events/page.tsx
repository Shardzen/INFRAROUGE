'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Ticket, ExternalLink } from 'lucide-react'
import Layout from '@/components/Layout'

interface Event {
  id: number
  title: string
  artist: string
  date: string
  time: string
  location: string
  venue: string
  type: 'concert' | 'exposition' | 'soiree' | 'vernissage'
  description: string
  image: string
  ticketUrl?: string
  price?: string
}

export default function Events() {
  const events: Event[] = [
    {
      id: 1,
      title: 'Showcase Petite Sœur',
      artist: 'Petite Sœur',
      date: '2025-12-28',
      time: '20:00',
      location: 'Paris',
      venue: 'La Machine du Moulin Rouge',
      type: 'concert',
      description: 'Découvrez le nouveau projet de Petite Sœur avec des invités surprises et une scénographie immersive.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      ticketUrl: '#',
      price: '25€'
    },
    {
      id: 2,
      title: 'Expo Street Art',
      artist: 'Collectif Underground',
      date: '2026-01-05',
      time: '14:00',
      location: 'Paris',
      venue: 'Galerie Itinerrance',
      type: 'exposition',
      description: 'Une exposition collective rassemblant les meilleurs street artists de la scène française actuelle.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      ticketUrl: '#',
      price: 'Gratuit'
    },
    {
      id: 3,
      title: 'Soirée Underground Sessions',
      artist: 'Various Artists',
      date: '2026-01-12',
      time: '22:00',
      location: 'Paris',
      venue: 'Ground Control',
      type: 'soiree',
      description: 'Une soirée exceptionnelle avec des DJ sets et performances live des artistes phares du moment.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      ticketUrl: '#',
      price: '15€'
    },
    {
      id: 4,
      title: 'Vernissage Lorenzo',
      artist: 'Lorenzo',
      date: '2026-01-20',
      time: '18:30',
      location: 'Marseille',
      venue: 'MuCEM',
      type: 'vernissage',
      description: 'Vernissage de l&apos;exposition rétrospective de Lorenzo, 10 ans de carrière.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      ticketUrl: '#',
      price: '12€'
    },
    {
      id: 5,
      title: 'Festival Underground',
      artist: 'Line-up TBA',
      date: '2026-02-15',
      time: '16:00',
      location: 'Lyon',
      venue: 'Transbordeur',
      type: 'concert',
      description: 'Le plus grand rassemblement de la scène underground française avec plus de 20 artistes.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      ticketUrl: '#',
      price: '45€'
    },
    {
      id: 6,
      title: 'Pop-up Store Art Numérique',
      artist: 'Digital Collective',
      date: '2026-02-08',
      time: '11:00',
      location: 'Paris',
      venue: 'Le Centquatre',
      type: 'exposition',
      description: 'Découvrez et achetez les œuvres numériques des artistes les plus innovants.',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800',
      ticketUrl: '#',
      price: 'Gratuit'
    }
  ]

  const getTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'concert': return 'bg-red-500'
      case 'exposition': return 'bg-blue-500'
      case 'soiree': return 'bg-purple-500'
      case 'vernissage': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getTypeLabel = (type: Event['type']) => {
    switch (type) {
      case 'concert': return 'Concert'
      case 'exposition': return 'Exposition'
      case 'soiree': return 'Soirée'
      case 'vernissage': return 'Vernissage'
      default: return type
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-red-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white">ÉVÉNEMENTS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Concerts, expositions, vernissages et rencontres avec les artistes du moment.
              Ne manquez aucun événement de la scène underground.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${getTypeColor(event.type)}`}>
                      {getTypeLabel(event.type)}
                    </span>
                  </div>

                  {/* Price */}
                  {event.price && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full">
                        {event.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 mb-4">par {event.artist}</p>

                  {/* Date & Time */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 mb-4 text-sm text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue} · {event.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {event.ticketUrl && (
                      <a
                        href={event.ticketUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                      >
                        <Ticket className="w-4 h-4" />
                        Billetterie
                      </a>
                    )}
                    <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ne manquez plus aucun <span className="text-yellow-400">événement</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Abonnez-vous à notre newsletter pour être informé des prochains événements en avant-première.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white"
              />
              <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-r-lg hover:bg-yellow-300 transition-colors">
                S&apos;abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
