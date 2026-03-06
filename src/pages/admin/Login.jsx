import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Pour l'instant, on utilise un mot de passe simple. 
    // On passera à Firebase Auth pour une sécurité totale ensuite.
    if (password === 'infra2026') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('ACCÈS REFUSÉ : SIGNATURE INCORRECTE');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4">
      <div className="light-leak leak-1 opacity-10" />
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-block p-4 border border-infrared-hot/30 rounded-full animate-pulse">
            <div className="w-12 h-12 rounded-full bg-infrared-hot/20 flex items-center justify-center">
              <span className="text-infrared-hot text-2xl font-display">I</span>
            </div>
          </div>
          <h1 className="text-4xl font-display font-black tracking-tighter text-white uppercase">
            Admin <span className="text-outline">Portal</span>
          </h1>
          <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
            Système d'administration Infrarouge v1.0
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENTRER LE CODE D'ACCÈS"
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-6 py-4 text-white font-mono text-xs tracking-widest focus:outline-none focus:border-infrared-hot transition-all placeholder:text-gray-700"
              />
              {error && (
                <div className="absolute -bottom-6 left-0 w-full text-[8px] font-mono text-infrared-hot tracking-widest text-center animate-bounce">
                  {error}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-premium py-4"
          >
            AUTHENTIFICATION
          </button>
        </form>

        <div className="pt-10 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 font-mono text-[8px] tracking-[0.5em] uppercase hover:text-white transition-colors"
          >
            ← Retour au site public
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
