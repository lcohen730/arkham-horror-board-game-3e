import styles from './StartingCardSelection.module.scss';
import { useNavigate } from 'react-router-dom';

export default function StartingCardSelection({ activeInvestigators }) {
    const navigate = useNavigate();
    
    const handleCardClick = () => {
        navigate('/play');
    }
    
    return (
        <div className={styles.selection}>
            <h2>{activeInvestigators[0].name}: Choose Your Starting Cards</h2>
            <div className={styles.row2}>
                <p className={styles.image}>{activeInvestigators[0].name}</p>
                <div>
                    <p>You start with:</p>
                    <p className={styles.image}>Static starting card</p>
                </div>
                <p>AND</p>
                <div>
                    <p>Choose one of the following:</p>
                    <div className={styles.options}>
                        <p 
                            className={styles.image} 
                            onClick={handleCardClick}
                        >
                            Starting card option
                        </p>
                        <p 
                            className={styles.image} 
                            onClick={handleCardClick}
                        >
                            Starting card option
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}