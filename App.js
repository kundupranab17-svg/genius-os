import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import LoginPortal from './components/LoginPortal';
import Dashboard from './components/Dashboard';

export default function GeniusOS() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('dark'); // Initial Premium Dark Theme

  useEffect(() => {
    // Phase 1: Splash Animation Timer
    setTimeout(() => setLoading(false), 4500); 
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className={theme === 'dark' ? 'bg-obsidian text-white' : 'bg-silver text-black'}>
      {!isLoggedIn ? (
        <LoginPortal onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard theme={theme} setTheme={setTheme} />
      )}
    </div>
  );
}
