import ScenarioMenuScenario from '../ScenarioMenuScenario/ScenarioMenuScenario';
import styles from './ScenarioSelectionMenu.module.scss';

export default function ScenarioSelectionMenu({ selection, setSelection, scenarioMenuScenarios, setActiveScenario }) {
    const scenarios = scenarioMenuScenarios.map(scenario => (
        <ScenarioMenuScenario 
            key={scenario._id} 
            scenarioMenuScenario={scenario} 
            selection={selection} 
            setSelection={setSelection} 
            setActiveScenario={setActiveScenario} 
        />
    ));

    return (
        <div className={styles.scenarioMenu}>
            {scenarios}
        </div>
    );
}