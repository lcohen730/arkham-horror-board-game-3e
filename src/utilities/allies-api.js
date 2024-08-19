import sendRequest from "./send-request";

const BASE_URL = '/api/allies';

export function getAllAllies() {
    return sendRequest(BASE_URL);
}

export function getAlly(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}