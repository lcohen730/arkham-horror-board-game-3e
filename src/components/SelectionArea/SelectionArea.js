import styles from './SelectionArea.module.scss';
import Logo from '../Logo/Logo';

export default function SelectionArea() {
  return (
    <div className={styles.selectionArea}>
       <Logo width="30vw" /> 
    </div>
  );
}