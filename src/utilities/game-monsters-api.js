import sendRequest from './send-request';

const BASE_URL = '/api/game-monsters';

export function createGameMonster(monsterId) {
	return sendRequest(`${BASE_URL}/${monsterId}`, 'POST');
}

export function getGameMonster(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function getGameMonstersByActivation(activation) {
	return sendRequest(`${BASE_URL}/activation/${activation}`);
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

export function updateEngagedInvestigator(id, engagedInvestigator) {
	return sendRequest(`${BASE_URL}/${id}/engaged`, 'PUT', engagedInvestigator);
}