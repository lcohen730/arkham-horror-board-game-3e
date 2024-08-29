import styles from './GamePage.module.scss';
import GameArea from '../../components/GameArea/GameArea';

export default function GamePage({ activeScenario }) {
    return (
        <div className={styles.gamePage}>
            <h2>Scenario: {activeScenario.name}</h2>
            <GameArea />
        </div>
    );
}