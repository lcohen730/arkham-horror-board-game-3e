import sendRequest from "./send-request";

const BASE_URL = '/api/maps';

export function getAllMaps() {
    return sendRequest(BASE_URL);
}

export function getMap(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}