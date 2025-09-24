import { getLocalStorage } from "../utils/storage.js";
import { SHARPS, FLATS } from "../data/constants.js";

export const allUserStrings = []; 

// STEP 1: build chromatic 12-note arrays for each string of current tuning
export function buildUserStrings() {
  const { strings: currentUserStrings, keyId: userKey } = getLocalStorage();
  const NOTES = userKey === 'sharp' ? SHARPS : FLATS;

  return currentUserStrings.map(string => {
    const startIndex = NOTES.indexOf(string);
    return NOTES.slice(startIndex).concat(NOTES.slice(0, startIndex));
  });
}