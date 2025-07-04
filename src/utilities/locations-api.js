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

export function updateDoomAmt(id, doomAmt) {
    return sendRequest(`${BASE_URL}/${id}/doom`, "PUT", doomAmt);
}

export function addInvestigator(locationId, investigatorId) {``
    return sendRequest(`${BASE_URL}/${locationId}/add-investigator`, "PUT", investigatorId);
}

export function removeInvestigator(locationId, investigatorId) {
    return sendRequest(`${BASE_URL}/${locationId}/remove-investigator`, "PUT", investigatorId);
}

export function addMonster(locationId, monsterId) {
    return sendRequest(`${BASE_URL}/${locationId}/add-monster`, "PUT", monsterId);
}

export function removeMonster(locationId, monsterId) {
    return sendRequest(`${BASE_URL}/${locationId}/remove-monster`, "PUT", monsterId);
}