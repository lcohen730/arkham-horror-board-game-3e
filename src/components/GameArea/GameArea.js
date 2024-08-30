import styles from './GameArea.module.scss';
import Map from '../Map/Map';

export default function GameArea() {
    return (
        <div className={styles.gameArea}>
            <div className={styles.row1}>
                <div className={styles.monsterDeck}>
                    <p>MONSTER DECK</p>
                    <img
                        className={styles.monsterDeckHolder}
                        src='/img/monster-deck-holder.png'
                        alt='Monster Deck'
                    />
                </div>
                <div className={styles.assetsStore}>
                    <p>ASSETS</p>
                    <div className={styles.assets}>
                        <img
                            className={styles.smallCard}
                            src='/img/ally-back.png'
                            alt='Ally Deck'
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/spell-back.png'
                            alt='Spell Deck'
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/item-back.png'
                            alt='Item Deck'
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/special-back.png'
                            alt='Special Items'
                        />
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
                        <img
                            className={styles.mediumCard}
                            src='/img/northside-deck.png'
                            alt='Northside Deck'
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/downtown-deck.png'
                            alt='Downtown Deck'
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/easttown-deck.png'
                            alt='Easttown Deck'
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/merchant-district-deck.png'
                            alt='Merchant District Deck'
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/rivertown-deck.png'
                            alt='Rivertown Deck'
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/streets-deck.png'
                            alt='The Streets Deck'
                        />
                    </div>
                    <p>ENCOUNTER DECKS</p>
                </div>
                <div className={styles.player3Area}>
                    <p>PLAYER AREA</p>
                </div>
            </div>
            <div className={styles.row3}>
                <div className={styles.headlineArea}>
                    <img
                        className={styles.mediumCard}
                        src='/img/headline-deck.png'
                        alt='Headline Deck'
                    />
                    <div>
                        <p className={styles.mediumCard}>HEADLINE DISCARD</p>
                    </div>
                </div>
                <div className={styles.anomalyDeckArea}>
                    <img
                        className={styles.mediumCard}
                        src='/img/altered-reality-anomaly-deck.png'
                        alt='Altered Reality Anomaly Deck'
                    />
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