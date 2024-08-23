import SelectionArea from '../../components/SelectionArea/SelectionArea';
import styles from './HomePage.module.scss';

export default function HomePage({ selection, setSelection }) {
    return (
        <div className={styles.homePage}>
            <SelectionArea 
                selection={selection} 
                setSelection={setSelection} 
            />
        </div>
    );
}