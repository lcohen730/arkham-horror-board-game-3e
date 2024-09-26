export default function ArchiveArea() {
	const row2 = function () {
		for (let i = 0; i < 5; i++) {
			return (
				<img className={styles.mediumCard} src={card.img} alt="Archive Card" />
			);
		}
	};

	return (
		<div>
			<div>
				<div>
					<img src={card.img} alt="Scenario Card" />
				</div>
				<div>
					<img className={styles.mediumCard} src={card.img} alt="Headline" />
					<img className={styles.mediumCard} src={card.img} alt="Headline" />
				</div>
				<div>
					<img
						className={styles.mediumCard}
						src={card.img}
						alt="Archive Card"
					/>
				</div>
			</div>
			<div>{row2}</div>

			<div>{otherCards}</div>
		</div>
	);
}
