import sendRequest from "./send-request";

const BASE_URL = "/api/events";

export function showEvent(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function getEventsByScenario(scenarioId) {
    return sendRequest(`${BASE_URL}/scenario/${scenarioId}`);
}