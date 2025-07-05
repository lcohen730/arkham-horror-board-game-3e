import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SelectionPage from '../SelectionPage/SelectionPage';
import StartingCardSelectionPage from '../StartingCardSelectionPage/StartingCardSelectionPage';
import GamePage from '../GamePage/GamePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {  
  const [selection, setSelection] = useState(null);
  const [activeScenario, setActiveScenario] = useState(null);
  const [activeInvestigators, setActiveInvestigators] = useState([]);
  const [playerInvestigators, setPlayerInvestigators] = useState([]);

  const location = useLocation();

  // ensure selection state is set based on the current path
  useEffect(() => {
    if (location.pathname === '/') {
      setSelection('home');
    } else if (location.pathname === '/selection') {
      setSelection('select scenario button');
    } else if (location.pathname === '/startingcards') {
      setSelection('starting card selection');
    }
  }, [location.pathname]);
  
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" 
          element={<HomePage 
            selection={selection} 
            setSelection={setSelection}  
          />} 
        />
        <Route path="/selection" 
          element={<SelectionPage 
            selection={selection} 
            setSelection={setSelection} 
            activeScenario={activeScenario} 
            setActiveScenario={setActiveScenario} 
            activeInvestigators={activeInvestigators} 
            setActiveInvestigators={setActiveInvestigators} 
            playerInvestigators={playerInvestigators}
            setPlayerInvestigators={setPlayerInvestigators}
          />} 
        />
        <Route path="/startingcards" 
          element={<StartingCardSelectionPage 
            activeInvestigators={activeInvestigators} 
            setActiveInvestigators={setActiveInvestigators} 
            selection={selection} 
            setSelection={setSelection} 
            playerInvestigators={playerInvestigators}
            setPlayerInvestigators={setPlayerInvestigators} 
          />} 
        />
        <Route path="/play" 
          element={<GamePage 
            activeScenario={activeScenario} 
            playerInvestigators={playerInvestigators} 
            setPlayerInvestigators={setPlayerInvestigators}
          />} 
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}