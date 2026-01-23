import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Euro } from 'lucide-react';
import { upcomingEvents } from '../data/mockData';

export default function Events() {
  // Trier les événements par date
  const sortedEvents = [...upcomingEvents].sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );

  // Grouper par mois
  const eventsByMonth = sortedEvents.reduce((acc, event) => {
    const monthYear = new Date(event.date).toLocaleDateString('fr-FR', { 
      month: 'long', 
      year: 'numeric' 
    });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(event);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-6">
            <Calendar size={80} className="text-yellow-400" />
            <h1 className="text-8xl md:text-9xl font-black leading-none">
              ÉVÉNEMENTS
            </h1>
          </div>
          <div className="w-40 h-2 bg-yellow-400 mb-8" />
          <p className="text-2xl text-gray-400 max-w-3xl">
            Les prochaines dates à ne pas manquer pour vibrer au rythme de la scène underground.
          </p>
        </motion.div>

        {/* ÉVÉNEMENTS PAR MOIS */}
        {Object.entries(eventsByMonth).map(([month, events], monthIndex) => (
          <motion.div
            key={month}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: monthIndex * 0.1 }}
            className="mb-16"
          >
            {/* TITRE MOIS */}
            <div className="mb-8 pb-4 border-b-2 border-purple-500/30">
              <h2 className="text-4xl font-black uppercase">{month}</h2>
            </div>

            {/* LISTE ÉVÉNEMENTS */}
            <div className="space-y-6">
              {events.map((event, eventIndex) => {
                const eventDate = new Date(event.date);
                const dayName = eventDate.toLocaleDateString('fr-FR', { weekday: 'long' });
                const day = eventDate.getDate();
                const monthName = eventDate.toLocaleDateString('fr-FR', { month: 'short' });

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: eventIndex * 0.05 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 bg-black">
                      <div className="flex flex-col md:flex-row">
                        {/* DATE BLOCK - Style Flyer */}
                        <div className="w-full md:w-48 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black flex flex-col items-center justify-center p-8 flex-shrink-0">
                          <span className="text-sm font-bold uppercase mb-2">
                            {dayName}
                          </span>
                          <span className="text-7xl font-black leading-none mb-2">
                            {day}
                          </span>
                          <span className="text-xl font-bold uppercase">
                            {monthName}
                          </span>
                        </div>

                        {/* IMAGE */}
                        <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0">
                          <img 
                            src={event.image}
                            alt={event.artist}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r" />
                        </div>

                        {/* INFO */}
                        <div className="flex-1 p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="px-3 py-1 bg-purple-500 text-xs font-bold">
                                CONCERT
                              </span>
                              <span className="text-gray-500 text-sm font-mono">
                                #{event.id}
                              </span>
                            </div>

                            <h3 className="text-5xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
                              {event.artist}
                            </h3>

                            <p className="text-2xl text-purple-400 font-bold mb-6">
                              {event.title}
                            </p>

                            <div className="space-y-3 text-gray-400">
                              <div className="flex items-center gap-3">
                                <MapPin size={20} className="text-yellow-400 flex-shrink-0" />
                                <div>
                                  <p className="font-bold text-white">{event.venue}</p>
                                  <p className="text-sm">{event.city}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                <Clock size={20} className="text-purple-400 flex-shrink-0" />
                                <p className="text-sm">
                                  Portes : 19h00 • Concert : 20h30
                                </p>
                              </div>

                              <div className="flex items-center gap-3">
                                <Euro size={20} className="text-yellow-400 flex-shrink-0" />
                                <p className="text-2xl font-black text-yellow-400">
                                  {event.price}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 flex gap-4">
                            <a
                              href={event.ticketUrl}
                              className="flex-1 text-center px-8 py-4 bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-colors"
                            >
                              ACHETER DES BILLETS
                            </a>
                            <button className="px-6 py-4 border-2 border-purple-500 text-purple-400 font-bold hover:bg-purple-500 hover:text-white transition-colors">
                              PLUS D'INFOS
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* DECORATION CORNER */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-10 transform rotate-45 translate-x-16 -translate-y-16" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* ABONNEMENT NEWSLETTER */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-2 border-yellow-400 p-12 text-center"
        >
          <h2 className="text-4xl font-black mb-4">
            NE RATEZ AUCUN ÉVÉNEMENT
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières annonces
          </p>
          <div className="max-w-xl mx-auto flex gap-4">
            <input 
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-6 py-4 bg-white/10 border-2 border-white/30 focus:border-yellow-400 outline-none text-lg"
            />
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg hover:bg-white transition-colors">
              S'ABONNER
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
