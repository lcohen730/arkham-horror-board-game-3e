import sendRequest from './send-request';

const BASE_URL = '/api/player-investigators';

export function createPlayerInvestigator() {
	return sendRequest(BASE_URL), 'POST';
}

export function getPlayerInvestigators() {
	return sendRequest(BASE_URL);
}

export function getPlayerInvestigator(id) {
	return sendRequest(`${BASE_URL}/${id}`);
}

export function updateFocusLimit(id, focusLimit) {
	return sendRequest(`${BASE_URL}/${id}/focus-limit`, 'PUT', focusLimit);
}

export function updateHealth(id, health) {
	return sendRequest(`${BASE_URL}/${id}/health`, 'PUT', health);
}

export function updateSanity(id, sanity) {
	return sendRequest(`${BASE_URL}/${id}/sanity`, 'PUT', sanity);
}

export function updateLore(id, lore) {
	return sendRequest(`${BASE_URL}/${id}/lore`, 'PUT', lore);
}

export function updateInfluence(id, influence) {
	return sendRequest(`${BASE_URL}/${id}/influence`, 'PUT', influence);
}

export function updateObservation(id, observation) {
	return sendRequest(`${BASE_URL}/${id}/observation`, 'PUT', observation);
}

export function updateStrength(id, strength) {
	return sendRequest(`${BASE_URL}/${id}/strength`, 'PUT', strength);
}

export function updateWill(id, will) {
	return sendRequest(`${BASE_URL}/${id}/will`, 'PUT', will);
}

export function updateMoneyAmt(id, money) {
	return sendRequest(`${BASE_URL}/${id}/money`, 'PUT', money);
}

export function addFocus(id, focus) {
	return sendRequest(`${BASE_URL}/${id}/add-focus`, 'PUT', focus);
}

export function removeFocus(id, focus) {
	return sendRequest(`${BASE_URL}/${id}/remove-focus`, 'PUT', focus);
}

export function updateRemnants(id, remnants) {
	return sendRequest(`${BASE_URL}/${id}/remnants`, 'PUT', remnants);
}

export function updateClues(id, clues) {
	return sendRequest(`${BASE_URL}/${id}/clues`, 'PUT', clues);
}

export function engageMonster(id, monster) {
	return sendRequest(`${BASE_URL}/${id}/engage-monster`, 'PUT', monster);
}

export function disengageMonster(id, monster) {
	return sendRequest(`${BASE_URL}/${id}/disengage-monster`, 'PUT', monster);
}

export function addItem(id, item) {
	return sendRequest(`${BASE_URL}/${id}/add-item`, 'PUT', item);
}

export function removeItem(id, item) {
	return sendRequest(`${BASE_URL}/${id}/remove-item`, 'PUT', item);
}

export function addSpell(id, spell) {
	return sendRequest(`${BASE_URL}/${id}/add-spell`, 'PUT', spell);
}

export function removeSpell(id, spell) {
	return sendRequest(`${BASE_URL}/${id}/remove-spell`, 'PUT', spell);
}

export function addAlly(id, ally) {
	return sendRequest(`${BASE_URL}/${id}/add-ally`, 'PUT', ally);
}

export function removeAlly(id, ally) {
	return sendRequest(`${BASE_URL}/${id}/remove-ally`, 'PUT', ally);
}

export function addCondition(id, condition) {
	return sendRequest(`${BASE_URL}/${id}/add-condition`, 'PUT', condition);
}

export function removeCondition(id, condition) {
	return sendRequest(`${BASE_URL}/${id}/remove-condition`, 'PUT', condition);
}

export function updateLocation(id, location) {
	return sendRequest(`${BASE_URL}/${id}/location`, 'PUT', location);
}

export function updateStreet(id, street) {
	return sendRequest(`${BASE_URL}/${id}/street`, 'PUT', street);
}

export function deleteInvestigator(id) {
	return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
