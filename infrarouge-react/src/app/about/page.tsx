'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, Heart, Zap } from 'lucide-react'
import Layout from '@/components/Layout'

export default function About() {
  const stats = [
    { label: 'Artistes accompagnés', value: '150+', icon: Users },
    { label: 'Publications', value: '500+', icon: Award },
    { label: 'Événements organisés', value: '50+', icon: TrendingUp },
    { label: 'Années d&apos;existence', value: '5+', icon: Heart }
  ]

  const values = [
    {
      icon: Target,
      title: 'Authenticité',
      description: 'Nous valorisons l&apos;art brut, sincère et sans compromis.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous encourageons les artistes à repousser les limites de leur art.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Nous créons des liens entre artistes et amateurs d&apos;art underground.'
    }
  ]

  const team = [
    {
      name: 'Alexandre Martin',
      role: 'Directeur Artistique',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Ancien street artist reconverti dans la direction artistique.'
    },
    {
      name: 'Sarah Dubois',
      role: 'Responsable Événements',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
      bio: 'Organisatrice d&apos;événements culturels depuis 8 ans.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Photographe Officiel',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'Spécialiste de la photographie urbaine et artistique.'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-yellow-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-white">À PROPOS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Depuis 2020, INFRAROUGE illumine la culture underground française en donnant
              une voix aux artistes qui repoussent les limites de la créativité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Notre <span className="text-yellow-400">Histoire</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">Les Débuts</h3>
                <p className="text-gray-300 mb-6">
                  Fondé en 2020 par une équipe de passionnés de culture urbaine, INFRAROUGE
                  est né d&apos;un constat simple : les artistes underground français méritaient
                  une plateforme dédiée pour exprimer leur talent.
                </p>
                <p className="text-gray-300">
                  Nous avons commencé avec un simple blog et quelques interviews, mais
                  notre vision était claire : créer le média de référence pour la culture
                  artistique française alternative.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">Aujourd&apos;hui</h3>
                <p className="text-gray-300 mb-6">
                  Aujourd&apos;hui, INFRAROUGE est la référence incontournable pour découvrir
                  les talents émergents de la scène française. De la musique au street art,
                  en passant par la photographie et l&apos;art numérique, nous couvrons tous
                  les aspects de la culture underground.
                </p>
                <p className="text-gray-300">
                  Notre communauté compte des milliers d&apos;amateurs d&apos;art passionnés,
                  et nous organisons régulièrement des événements exclusifs pour rapprocher
                  artistes et public.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-yellow-400">Valeurs</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Notre <span className="text-yellow-400">Équipe</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Une équipe passionnée composée d&apos;artistes, de journalistes et de professionnels
              de la culture underground.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-yellow-400 mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rejoignez la <span className="text-yellow-400">communauté</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Vous êtes artiste ou amateur d&apos;art underground ? Rejoignez notre communauté
              et faites partie de l&apos;aventure INFRAROUGE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/submit"
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-colors"
              >
                Proposer un artiste
              </a>
              <a
                href="/gallery"
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all"
              >
                Découvrir la galerie
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
