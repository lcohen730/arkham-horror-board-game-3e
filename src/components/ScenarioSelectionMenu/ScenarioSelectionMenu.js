import ScenarioMenuScenario from '../ScenarioMenuScenario/ScenarioMenuScenario';
import styles from './ScenarioSelectionMenu.module.scss';

export default function ScenarioSelectionMenu({ selection, setSelection, scenarioMenuScenarios }) {
    const scenarios = scenarioMenuScenarios.map(scenario => (
        <ScenarioMenuScenario 
            key={scenario._id} 
            scenarioMenuScenario={scenario} 
            selection={selection} 
            setSelection={setSelection} 
        />
    ));

    return (
        <div className={styles.scenarioMenu}>
            {scenarios}
        </div>
    );
}