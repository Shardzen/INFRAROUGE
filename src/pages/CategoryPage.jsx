import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div className="pt-32 pb-20 px-6 text-center">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient uppercase">
            {category}
          </h1>
          <div className="absolute -inset-8 bg-thermal-radial opacity-20 blur-3xl animate-pulse-glow" />
        </div>

        <div className="h-1 w-32 bg-thermal-gradient mx-auto rounded-full" />

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Page de catégorie en construction. Revenez bientôt pour découvrir plus de contenu.
        </p>

        <div className="pt-8">
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-thermal-gradient rounded-lg text-white font-mono text-sm tracking-widest hover:shadow-glow-strong transition-all duration-300"
          >
            RETOUR À L'ACCUEIL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
