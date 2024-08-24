import styles from './InvestigatorMenuInvestigator.module.scss';
import { useNavigate } from 'react-router-dom';

export default function InvestigatorMenuInvestigator({ investigatorMenuInvestigator, selection, setSelection }) {
    const navigate = useNavigate();
    
    const handleInvestigatorClick = () => {
        navigate('/startingcards');
    };
    
    return (
        <div className={styles.investigator} onClick={handleInvestigatorClick}>
            <h1>{investigatorMenuInvestigator.name}</h1>
        </div>
    );
}