import sendRequest from './send-request';

const BASE_URL = '/api/neighborhoods';

export function createNeighborhood() {
	return sendRequest(BASE_URL, 'POST');
}

export function getNeighborhoods() {
	return sendRequest(BASE_URL);
}

export function getNeighborhood(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function updateClues(id, cluesAmt) {
	return sendRequest(`${BASE_URL}/${id}/clues`, 'PUT', cluesAmt);
}

export function addInvestigatorToNeighborhood(id, investigatorId) {
	return sendRequest(
		`${BASE_URL}/${id}/add-investigator`,
		'PUT',
		investigatorId
	);
}

export function removeInvestigatorFromNeighborhood(id, investigatorId) {
	return sendRequest(
		`${BASE_URL}/${id}/remove-investigator`,
		'PUT',
		investigatorId
	);
}

export function addMonsterToNeighborhood(id, monsterId) {
	return sendRequest(`${BASE_URL}/${id}/add-monster`, 'PUT', monsterId);
}

export function removeMonsterFromNeighborhood(id, monsterId) {
	return sendRequest(`${BASE_URL}/${id}/remove-monster`, 'PUT', monsterId);
}

export function updateDoom(id, doomAmt) {
	return sendRequest(`${BASE_URL}/${id}/doom`, 'PUT', doomAmt);
}

export function toggleAnomalyStatus(id) {
	return sendRequest(`${BASE_URL}/${id}/anomaly`, 'PUT');
}
