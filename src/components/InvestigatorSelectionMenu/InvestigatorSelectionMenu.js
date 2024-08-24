import InvestigatorMenuInvestigator from '../InvestigatorMenuInvestigator/InvestigatorMenuInvestigator';
import styles from './InvestigatorSelectionMenu.module.scss';

export default function InvestigatorSelectionMenu({ 
    selection, 
    setSelection, 
    investigatorMenuInvestigators, 
    activeScenario 
}) {
    const investigators = investigatorMenuInvestigators.map(investigator => (
        <InvestigatorMenuInvestigator 
            key={investigator._id} 
            investigatorMenuInvestigator={investigator} 
            selection={selection} 
            setSelection={setSelection} 
        />
    ));

    return (
        <div className={styles.investigatorMenu}>
            <h2>{`Scenario: ${activeScenario.name}`}</h2>
            <div>
                {investigators}
            </div>
        </div>
    );
}