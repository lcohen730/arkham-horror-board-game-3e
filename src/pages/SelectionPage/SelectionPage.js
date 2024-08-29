import { useState, useEffect } from 'react';
import SelectionArea from "../../components/SelectionArea/SelectionArea";
import * as scenariosAPI from '../../utilities/scenarios-api';
import * as investigatorsAPI from '../../utilities/investigators-api';

export default function SelectionPage({ 
    selection, 
    setSelection, 
    activeScenario, 
    setActiveScenario, 
    activeInvestigators, 
    setActiveInvestigators 
}) {
    const [scenarioMenuScenarios, setScenarioMenuScenarios] = useState([]);
    const [investigatorMenuInvestigators, setInvestigatorMenuInvestigators] = useState([]);

    useEffect(function () {
        async function getScenarios() {
            const fetchedScenarios = await scenariosAPI.getAllScenarios();
            setScenarioMenuScenarios(fetchedScenarios);
        }
        getScenarios();

        async function getInvestigators() {
            const fetchedInvestigators = await investigatorsAPI.getAllInvestigators();
            setInvestigatorMenuInvestigators(fetchedInvestigators);
        }
        getInvestigators();
    }, []);

    return (
        <div>
            <SelectionArea
                selection={selection}
                setSelection={setSelection}
                scenarioMenuScenarios={scenarioMenuScenarios} 
                activeScenario={activeScenario} 
                setActiveScenario={setActiveScenario} 
                investigatorMenuInvestigators={investigatorMenuInvestigators} 
                activeInvestigators={activeInvestigators} 
                setActiveInvestigators={setActiveInvestigators} 
            />
        </div>
    );
}