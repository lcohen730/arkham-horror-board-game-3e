import sendRequest from "./send-request";

const BASE_URL = '/api/spells';

export function getAllSpells() {
    return sendRequest(BASE_URL);
}

export function getSpell(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}