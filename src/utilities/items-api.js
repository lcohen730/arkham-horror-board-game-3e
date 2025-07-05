import sendRequest from "./send-request";

const BASE_URL = '/api/items';

export function getAllItems() {
    return sendRequest(BASE_URL);
}

export function getItem(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function getItemByName(name) {
    return sendRequest(`${BASE_URL}/name/${name}`);
}