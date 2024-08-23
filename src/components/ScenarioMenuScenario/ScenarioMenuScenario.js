import styles from './ScenarioMenuScenario.module.scss';

export default function ScenarioMenuScenario({ scenarioMenuScenario, selection, setSelection }) {
    const handleScenarioClick = () => {
        setSelection('select investigator(s) button')
    };
    
    return (
        <div className={styles.scenario} onClick={handleScenarioClick}>
            <h1>{scenarioMenuScenario.name}</h1>
        </div>
    );
}