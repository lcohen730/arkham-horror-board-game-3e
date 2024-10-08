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

  const location = useLocation();

  useEffect(function () {
    setSelection('home');
  }, [location.pathname === '/']);
  
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
          />} 
        />
        <Route path="/startingcards" 
          element={<StartingCardSelectionPage 
            activeInvestigators={activeInvestigators} 
            setActiveInvestigators={setActiveInvestigators} 
            selection={selection} 
            setSelection={setSelection} 
          />} 
        />
        <Route path="/play" element={<GamePage activeScenario={activeScenario} />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}