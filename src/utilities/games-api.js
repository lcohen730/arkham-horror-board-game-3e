import sendRequest from "./send-request";

const BASE_URL = '/api/games';

export function createGame() {
    return sendRequest(BASE_URL), 'POST';
}

export function getGame(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function addInvestigator(id, investigator) {
    return sendRequest(`${BASE_URL}/${id}/add-investigator`, 'PUT', investigator );
}

export function removeInvestigator(id, investigator) {
    return sendRequest(`${BASE_URL}/${id}/remove-investigator`, 'PUT', investigator );
}

export function addItemToStore(id, item) {
    return sendRequest(`${BASE_URL}/${id}/add-item-to-store`, 'PUT', item );
}

export function removeItemFromStore(id, item) {
    return sendRequest(`${BASE_URL}/${id}/remove-item-from-store`, 'PUT', item );
}