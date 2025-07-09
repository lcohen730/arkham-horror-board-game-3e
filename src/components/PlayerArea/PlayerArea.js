import styles from './PlayerArea.module.scss';

export default function PlayerArea() {
	return (
		<div className={styles.playerArea}>
			<div className={styles.row1}>
				<div className={styles.stats}>STATS</div>
				<button>INTERACT</button>
				<div className={styles.smallCard}></div>
				<div className={styles.smallCard}></div>
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
				<div className = {styles.investigatorCard}></div>
				<div className={styles.smallCard}></div>
				<div className={styles.smallCard}></div>
			</div>
		</div>
	);
}
