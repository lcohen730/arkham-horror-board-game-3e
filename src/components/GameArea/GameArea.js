import styles from './GameArea.module.scss';
import { useState } from 'react';
import Map from '../Map/Map';
import HoverDisplayArea from '../HoverDisplayArea/HoverDisplayArea';

export default function GameArea() {
    const [hovered, setHovered] = useState(null);
    
    const handleHover = (e) => {
        setHovered(e.target.src);
    };

    const handleUnhover = () => {
        setHovered(null);
    };
    
    return (
        <div className={styles.gameArea}>
            <HoverDisplayArea hovered={hovered} />
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
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/spell-back.png'
                            alt='Spell Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/item-back.png'
                            alt='Item Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/special-back.png'
                            alt='Special Items'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/conditions-deck.png'
                            alt='Conditions Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                    </div>
                    <div className={styles.store}>
                        <img
                            className={styles.smallCard}
                            src='/img/45-thompson.png'
                            alt='.45 Thompson'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/liquid-courage.png'
                            alt='Liquid Courage'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/38-revolver.png'
                            alt='.38 Revolver'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/shotgun.png'
                            alt='Shotgun'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.smallCard}
                            src='/img/first-aid-kit.png'
                            alt='First Aid Kit'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                    </div>
                    <p>STORE</p>
                </div>
                <div className={styles.player1Area}>
                    <p>PLAYER AREA</p>
                </div>
                <div className={styles.archiveArea}>
                    <p>ARCHIVE AREA</p>
                </div>
                <div className={styles.eventArea}>
                    <div className={styles.mediumCard}>
                        <p>EVENT DISCARD</p>
                    </div>
                    <img
                        className={styles.eventDeck}
                        src='/img/event-deck.png'
                        alt='Event Deck'
                    />
                </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.player2Area}>
                    <p>PLAYER AREA</p>
                </div>
                <div className={styles.center}>
                    <p>BOARD</p>
                    {/* <div className={styles.map}></div> */}
                    <Map 
                        hovered={hovered}
                        setHovered={setHovered}
                        handleUnhover={handleUnhover}
                    />
                    <div className={styles.encounterDecks}>
                        <img
                            className={styles.mediumCard}
                            src='/img/northside-deck.png'
                            alt='Northside Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/downtown-deck.png'
                            alt='Downtown Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/easttown-deck.png'
                            alt='Easttown Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
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
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
                        />
                        <img
                            className={styles.mediumCard}
                            src='/img/streets-deck.png'
                            alt='The Streets Deck'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleUnhover}
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
                        onMouseEnter={handleHover}
                        onMouseLeave={handleUnhover}
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
                        onMouseEnter={handleHover}
                        onMouseLeave={handleUnhover}
                    />
                    <div>
                        <p className={styles.mediumCard}>ANOMALY DISCARD</p>
                    </div>
                </div>
                <div className={styles.player4Area}>
                    <p>PLAYER AREA</p>
                </div>
                <div className={styles.diceArea}>
                    <p>DICE AREA</p>
                </div>
                <div className={styles.mythosCup}>
                    <p>MYTHOS CUP</p>
                </div>
            </div>
        </div>
    );
}