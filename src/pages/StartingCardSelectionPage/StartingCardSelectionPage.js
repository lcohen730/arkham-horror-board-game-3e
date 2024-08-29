import SelectionArea from '../../components/SelectionArea/SelectionArea';

export default function StartingCardSelectionPage({ selection, setSelection, activeInvestigators }) {
    return (
        <div>
            <SelectionArea
                selection={selection} 
                setSelection={setSelection} 
                activeInvestigators={activeInvestigators} 
            />
        </div>
    );
}