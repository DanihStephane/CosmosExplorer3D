import React, { useState } from 'react';
import { SolarSystem } from './components/SolarSystem';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-opacity-50 backdrop-blur-sm z-10"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>
      
      <div className="absolute top-4 left-4 z-10">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Système Solaire
        </h1>
        <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Explorez les planètes en 3D
        </p>
      </div>

      <div className="w-full h-screen">
        <SolarSystem />
      </div>
    </div>
  );
}

export default App;