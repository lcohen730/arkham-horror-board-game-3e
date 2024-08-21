import NavBar from '../../components/NavBar/NavBar';
import SelectionArea from '../../components/SelectionArea/SelectionArea';
import styles from './HomePage.module.scss';

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <NavBar />
            <SelectionArea />
        </div>
    );
}