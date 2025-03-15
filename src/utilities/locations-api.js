import sendRequest from "./send-request";

const BASE_URL = "/api/locations";

export function createLocation() {
    return sendRequest(BASE_URL, "POST");
}

export function getLocations() {
    return sendRequest(BASE_URL);
}

export function getLocation(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function updateDoomAmt(id) {
    return sendRequest(`${BASE_URL}/${id}/doom`, "PUT");
}

export function addInvestigator(id) {
    return sendRequest(`${BASE_URL}/${id}/add-investigator`, "PUT");
}

export function removeInvestigator(id) {
    return sendRequest(`${BASE_URL}/${id}/remove-investigator`, "PUT");
}

export function addMonster(id) {
    return sendRequest(`${BASE_URL}/${id}/add-monster`, "PUT");
}

export function removeMonster(id) {
    return sendRequest(`${BASE_URL}/${id}/remove-monster`, "PUT");
}