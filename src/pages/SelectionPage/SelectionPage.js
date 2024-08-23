import { useState, useEffect } from 'react';
import SelectionArea from "../../components/SelectionArea/SelectionArea";
import * as scenariosAPI from '../../utilities/scenarios-api';

export default function SelectionPage({ selection, setSelection }) {
    const [scenarioMenuScenarios, setScenarioMenuScenarios] = useState([]);

    useEffect(function () {
        async function getScenarios() {
            const fetchedScenarios = await scenariosAPI.getAllScenarios();
            setScenarioMenuScenarios(fetchedScenarios);
        }
        getScenarios();
    }, []);

    return (
        <div>
            <SelectionArea
                selection={selection}
                setSelection={setSelection}
                scenarioMenuScenarios={scenarioMenuScenarios}
            />
        </div>
    );
}