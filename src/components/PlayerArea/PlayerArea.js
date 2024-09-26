export default function PlayerArea() {
	const otherCards = function () {
		for (let i = 0; i < 7; i++) {
			return (
				<img className={styles.smallCard} src={card.img} alt="Player Card" />
			);
		}
	};

	return (
		<div>
			<button>INTERACT</button>
			<div>{otherCards}</div>
			<div>
				<img className={styles.smallCard} src={card.img} alt="Monster" />
				<img className={styles.smallCard} src={card.img} alt="Monster" />
				<img src={card.img} alt="Player Card" />
				<img className={styles.smallCard} src={card.img} alt="Static Card" />
				<img className={styles.smallCard} src={card.img} alt="Chosen Card" />
			</div>
		</div>
	);
}
