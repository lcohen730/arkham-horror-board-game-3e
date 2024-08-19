import sendRequest from "./send-request";

const BASE_URL = '/api/monsters';

export function getAllMonsters() {
    return sendRequest(BASE_URL);
}

export function getMonster(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}