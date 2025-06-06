import sendRequest from './send-request';

const BASE_URL = '/api/game-scenarios';

export function createGameScenario(gameScenarioData) {
	return sendRequest(BASE_URL, 'POST', gameScenarioData);
}

export function getGameScenario(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function addTokenToMythosCup(id, tokenName) {
	return sendRequest(`${BASE_URL}/${id}/add-mythos-token`, 'PUT', tokenName);
}

export function removeTokenFromMythosCup(id, tokenName) {
	return sendRequest(`${BASE_URL}/${id}/remove-mythos-token`, 'PUT', tokenName);
}

export function updateDoom(id, doomAmt) {
	return sendRequest(`${BASE_URL}/${id}/doom`, 'PUT', doomAmt);
}

export function updateClues(id, cluesAmt) {
	return sendRequest(`${BASE_URL}/${id}/clues`, 'PUT', cluesAmt);
}
