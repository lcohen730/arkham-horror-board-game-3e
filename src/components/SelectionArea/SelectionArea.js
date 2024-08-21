import styles from './SelectionArea.module.scss';
import Logo from '../Logo/Logo';
import PlayButton from '../PlayButton/PlayButton';

export default function SelectionArea() {
  return (
    <div className={styles.selectionArea}>
       <Logo width="30vw" />
       <PlayButton />
    </div>
  );
}