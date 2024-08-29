import styles from './InvestigatorMenuInvestigator.module.scss';
import { useNavigate } from 'react-router-dom';

export default function InvestigatorMenuInvestigator({ 
    investigatorMenuInvestigator, 
    selection, 
    setSelection, 
    activeInvestigators, 
    setActiveInvestigators 
}) {
    const navigate = useNavigate();
    
    const handleInvestigatorClick = () => {
        setSelection('starting card selection');
        setActiveInvestigators([...activeInvestigators, investigatorMenuInvestigator]);
        navigate('/startingcards');
    };
    
    return (
        <div className={styles.investigator} onClick={handleInvestigatorClick}>
            <h1>{investigatorMenuInvestigator.name}</h1>
        </div>
    );
}