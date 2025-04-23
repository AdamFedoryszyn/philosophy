import Philosophers from "./Philosophers";
import { Glossar } from "./Glossar";
import './Navbar.css'
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [activeSection, setActiveSection] = useState("philosophen");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Prüfe gespeicherten Modus im localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const renderContent = () => {
    switch (activeSection) {
      case "kontakt":
        return <Kontakt />;
      case "philosophen":
        return <Philosophers />;
      case "begriffe":
        return <Glossar />;
      case "videos":
        return <Videos />;
      default:
        return <Philosophers />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" id="mainContent">
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">PhiloWeb</h1>
        <div className="space-x-6">
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <span className="text-xl">☀️</span> // Sonne für Light Mode
            ) : (
              <span className="text-xl">🌙</span> // Mond für Dark Mode
            )}
          </button>
          <button onClick={() => setActiveSection("philosophen")} className="hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">Philosophen</button>
          <button onClick={() => setActiveSection("begriffe")} className="hover:text-blue-600">Begriffe</button>
          <button onClick={() => setActiveSection("videos")} className="hover:text-blue-600">Videos</button>
          <button onClick={() => setActiveSection("kontakt")} className="hover:text-blue-600">Kontakt</button>
        </div>
      </nav>

      <main className="p-8 dark:text-gray-200">{renderContent()}</main>
    </div>
  );
};

const Kontakt = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Kontakt</h2>
    <p>Du erreichst mich unter: <a href="mailto:beispiel@email.de" className="text-blue-600">beispiel@email.de</a></p>
  </div>
);

const Videos = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Video Vorschläge</h2>
    <ul className="space-y-2">
      <li>
        <a href="https://www.youtube.com/watch?v=video1" className="text-blue-600" target="_blank" rel="noopener noreferrer">
          Einführung in Kant – ARD alpha
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=video2" className="text-blue-600" target="_blank" rel="noopener noreferrer">
          Nietzsche erklärt in 10 Minuten
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;