import styles from './PlayButton.module.scss';
import { useNavigate } from 'react-router-dom';

export default function PlayButton({ setSelection }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/selection');
        setSelection('select scenario button');
    };
    
    return (
        <h1 className={styles.playButton} onClick={handleClick}>PLAY NOW</h1>
    );
}