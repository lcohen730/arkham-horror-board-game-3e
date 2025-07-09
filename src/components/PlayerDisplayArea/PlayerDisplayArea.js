import styles from './PlayerDisplayArea.module.scss';

export default function PlayerDisplayArea({ playerDisplayed, setPlayerDisplayed }) {
    const handleXClick = () => {
        setPlayerDisplayed(false);
    }
    return (
        <>
            {playerDisplayed && (
                <div className={styles.playerDisplayArea}>
                    <div className={styles.row1}>
                        <div className={styles.stats}>STATS</div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.x} onClick={handleXClick}>[ x ]</div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                    </div>
                    <div className={styles.row3}>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.investigatorCard}>
                            <div>INVESTIGATOR</div>
                            <div>CARD</div>
                        </div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                    </div>
                </div>
            )}
        </>
    );
}