import styles from './GameArea.module.scss';
import Map from '../Map/Map';

export default function GameArea() {
    return (
        <div className={styles.gameArea}>
            <div className={styles.row1}>
                <div className={styles.monsterDeck}>
                    <p>MONSTER DECK</p>
                    <div className={styles.smallCard}></div>
                </div>
                <div className={styles.assetsStore}>
                    <p>ASSETS</p>
                    <div className={styles.assets}>
                        <div className={styles.smallCard}>
                            <p>ALLY DECK</p>
                        </div>
                        <div className={styles.smallCard}>
                            <p>SPELL DECK</p>
                        </div>
                        <div className={styles.smallCard}>
                            <p>ITEM DECK</p>
                        </div>
                        <div className={styles.smallCard}>
                            <p>SPECIAL ITEMS</p>
                        </div>
                        <div className={styles.smallCard}>
                            <p>CONDITIONS</p>
                        </div>
                    </div>
                    <div className={styles.store}>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                        <div className={styles.smallCard}></div>
                    </div>
                    <p>STORE</p>
                </div>
                <div className={styles.player1Area}>
                    <p>PLAYER AREA</p>
                </div>
                <div>
                    <p>ARCHIVE AREA</p>
                </div>
                <div className={styles.eventArea}>
                    <div className={styles.mediumCard}>
                        <p>EVENT DISCARD</p>
                    </div>
                    <div className={styles.mediumCard}>
                        <p>EVENT DECK</p>
                    </div>
                </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.player2Area}>
                    <p>PLAYER AREA</p>
                </div>
                <div className={styles.center}>
                    <p>BOARD</p>
                    {/* <div className={styles.map}></div> */}
                    <Map />
                    <div className={styles.encounterDecks}>
                        <div className={styles.mediumCard}></div>
                        <div className={styles.mediumCard}></div>
                        <div className={styles.mediumCard}></div>
                        <div className={styles.mediumCard}></div>
                        <div className={styles.mediumCard}></div>
                        <div className={styles.mediumCard}></div>
                    </div>
                    <p>ENCOUNTER DECKS</p>
                </div>
                <div className={styles.player3Area}>
                    <p>PLAYER AREA</p>
                </div>
            </div>
            <div className={styles.row3}>
                <div className={styles.headlineArea}>
                    <div>
                        <p className={styles.mediumCard}>HEADLINE DECK</p>
                    </div>
                    <div>
                        <p className={styles.mediumCard}>HEADLINE DISCARD</p>
                    </div>
                </div>
                <div className={styles.anomalyDeckArea}>
                    <div>
                        <p className={styles.mediumCard}>ANOMALY DECK</p>
                    </div>
                    <div>
                        <p className={styles.mediumCard}>ANOMALY DISCARD</p>
                    </div>
                </div>
                <div className={styles.player4Area}>
                    <p>PLAYER AREA</p>
                </div>
                <div>
                    <p>DICE AREA</p>
                </div>
                <div>
                    <p>MYTHOS CUP</p>
                </div>
            </div>
        </div>
    );
}