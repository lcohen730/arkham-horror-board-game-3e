import sendRequest from "./send-request";

const BASE_URL = "/api/players";

export function createPlayer(playerData) {
  return sendRequest(BASE_URL, "POST", playerData);
}

export function getPlayers() {
  return sendRequest(BASE_URL);
}

export function getPlayer(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addInvestigator(id, investigator) {
  return sendRequest(`${BASE_URL}/${id}/add-investigator`, "PUT", { investigator });
}

export function removeInvestigator(id, investigator) {
  return sendRequest(`${BASE_URL}/${id}/remove-investigator`, "PUT", { investigator });
}