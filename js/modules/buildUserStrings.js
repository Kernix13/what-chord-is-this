import { SHARPS, FLATS } from "../data/constants.js";
import { getLocalStorage } from "../utils/storage.js"

export const allUserStrings = [];

// STEP 1: build chromatic 12-note arrays for each string of current tuning
export function buildUserStrings() {
  const savedSettings = getLocalStorage();
  const currentUserStrings = savedSettings.strings;
  const userKey = savedSettings.keyId;
  
  if (userKey === 'sharp') {
    currentUserStrings.forEach((string, i) => {
    const currentString = SHARPS
      .slice(SHARPS.indexOf(string))
      .concat(SHARPS.slice(0, SHARPS.indexOf(string)));
    allUserStrings.push(currentString)
    })
  } else if (userKey === 'flat') {
    currentUserStrings.forEach((string, i) => {
    const currentString = FLATS
      .slice(FLATS.indexOf(string))
      .concat(FLATS.slice(0, FLATS.indexOf(string)));
    allUserStrings.push(currentString)
    })
  }
}