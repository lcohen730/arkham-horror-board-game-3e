import styles from './SelectionArea.module.scss';
/* import { useLocation } from 'react-router-dom'; */
import Logo from '../Logo/Logo';
import PlayButton from '../PlayButton/PlayButton';
import ScenarioSelectionMenu from '../ScenarioSelectionMenu/ScenarioSelectionMenu';
import InvestigatorSelectionMenu from '../InvestigatorSelectionMenu/InvestigatorSelectionMenu';
import StartingCardSelection from '../StartingCardSelection/StartingCardSelection';

export default function SelectionArea({ 
  selection, 
  setSelection, 
  scenarioMenuScenarios, 
  activeScenario, 
  setActiveScenario, 
  investigatorMenuInvestigators, 
  activeInvestigators, 
  setActiveInvestigators 
}) {
  /* const location = useLocation(); */

  const handleSelectScenarioClick = () => {
    setSelection('scenario selection menu');
  };

  const handleSelectInvestigatorClick = () => {
    setSelection('investigator selection menu');
  };

  return (
    <div className={styles.selectionArea}>
      {/* {location.pathname === '/' ? ( */}
      {selection === 'home' ? (
        <div className={styles.homeSelection}>
          <Logo width="30vw" />
          <PlayButton setSelection={setSelection} />
        </div>
      ) : selection === 'select scenario button' ? (
        <button onClick={handleSelectScenarioClick}>SELECT SCENARIO</button>
      ) : selection === 'scenario selection menu' ? (
        <ScenarioSelectionMenu
          selection={selection}
          setSelection={setSelection}
          scenarioMenuScenarios={scenarioMenuScenarios} 
          setActiveScenario={setActiveScenario} 
        />
      ) : selection === 'select investigator(s) button' ? (
        <button onClick={handleSelectInvestigatorClick}>SELECT INVESTIGATOR(S)</button>
      ) : selection === 'investigator selection menu' ? (
        <InvestigatorSelectionMenu 
          activeScenario={activeScenario} 
          investigatorMenuInvestigators={investigatorMenuInvestigators} 
          activeInvestigators={activeInvestigators} 
          setActiveInvestigators={setActiveInvestigators} 
          setSelection={setSelection} 
          selection={selection} 
        />
      ) : selection === 'starting card selection' ? (
        <StartingCardSelection 
          activeInvestigators={activeInvestigators} 
          selection={selection} 
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}