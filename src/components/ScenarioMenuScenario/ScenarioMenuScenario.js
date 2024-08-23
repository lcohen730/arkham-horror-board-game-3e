import styles from './ScenarioMenuScenario.module.scss';

export default function ScenarioMenuScenario({ scenarioMenuScenario, selection, setSelection, setActiveScenario }) {
    const handleScenarioClick = () => {
        setSelection('select investigator(s) button');
        setActiveScenario(scenarioMenuScenario);
    };
    
    return (
        <div className={styles.scenario} onClick={handleScenarioClick}>
            <h1>{scenarioMenuScenario.name}</h1>
        </div>
    );
}