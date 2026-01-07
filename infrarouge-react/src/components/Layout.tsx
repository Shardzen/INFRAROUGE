'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Search, Sun, Moon } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Galerie', href: '/gallery' },
    { name: 'Événements', href: '/events' },
    { name: 'À Propos', href: '/about' },
    { name: 'Proposer un Artiste', href: '/submit' }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              <span className="text-white">INFRA</span>
              <span className="text-yellow-400">ROUGE</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">INFRA</span>
                <span className="text-yellow-400">ROUGE</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Le magazine qui illumine la culture underground
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  IG
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  SC
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  YT
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Explorer</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/gallery" className="hover:text-yellow-400 transition-colors">Galerie</a></li>
                <li><a href="/events" className="hover:text-yellow-400 transition-colors">Événements</a></li>
                <li><a href="/about" className="hover:text-yellow-400 transition-colors">À Propos</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">CGU</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:border-yellow-400"
                />
                <button className="px-4 py-2 bg-yellow-400 text-black rounded-r hover:bg-yellow-300 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 INFRAROUGE. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
