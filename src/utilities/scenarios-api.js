import sendRequest from "./send-request";

const BASE_URL = '/api/scenarios';

export function getAllScenarios() {
    return sendRequest(BASE_URL);
}

export function getScenario(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}