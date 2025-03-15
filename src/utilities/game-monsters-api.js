import sendRequest from './send-request';

const BASE_URL = '/api/game-monsters';

export function createGameMonster() {
	return sendRequest(BASE_URL), 'POST';
}

export function getGameMonster(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function getGameMonstersByActivation(activation) {
	return sendRequest(`${BASE_URL}/activation/${activation}`);
}

export function getGameMonster(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function updateMonsterHealth(id, health) {
	return sendRequest(`${BASE_URL}/${id}/health`, 'PUT', health);
}

export function updateMonsterLocation(id, location) {
	return sendRequest(`${BASE_URL}/${id}/location`, 'PUT', location);
}

export function updateMonsterStreet(id, street) {
	return sendRequest(`${BASE_URL}/${id}/street`, 'PUT', street);
}

export function toggleMonsterExhausted(id) {
	return sendRequest(`${BASE_URL}/${id}/exhausted`, 'PUT');
}
