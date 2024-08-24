import styles from './InvestigatorMenuInvestigator.module.scss';

export default function InvestigatorMenuInvestigator({ investigatorMenuInvestigator, selection, setSelection }) {
    const handleInvestigatorClick = () => {
        setSelection('select investigator(s) button')
    };
    
    return (
        <div className={styles.investigator} onClick={handleInvestigatorClick}>
            <h1>{investigatorMenuInvestigator.name}</h1>
        </div>
    );
}