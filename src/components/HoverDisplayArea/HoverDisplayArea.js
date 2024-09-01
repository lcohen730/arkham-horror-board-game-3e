import styles from './HoverDisplayArea.module.scss';

export default function HoverDisplayArea({ hovered }) {
    return (
        <div className={styles.hoverDisplayArea}>
            {hovered &&
                <img className={styles.hoveredImage}
                    src={hovered}
                    alt='Hovered Image'
                />
            }
        </div>
    );
}