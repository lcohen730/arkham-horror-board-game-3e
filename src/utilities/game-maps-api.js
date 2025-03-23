import sendRequest from './send-request';

const BASE_URL = '/api/game-maps';

// might need to edit this: createGameMap will be made based on the scenario
export function createGameMap(gameMap) {
    return sendRequest(BASE_URL, 'POST', gameMap);
}

export function getGameMap(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function updateUnstableSpace(id, location) {
    return sendRequest(`${BASE_URL}/${id}/unstable-space`, 'PUT', location);
}