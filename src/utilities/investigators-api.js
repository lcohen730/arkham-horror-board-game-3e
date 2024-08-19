import sendRequest from "./send-request";

const BASE_URL = '/api/investigators';

export function getAllInvestigators() {
    return sendRequest(BASE_URL);
}

export function getInvestigator(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}