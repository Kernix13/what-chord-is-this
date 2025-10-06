import { getLocalStorage } from "../utils/storage.js";

/**
 * STEP 2: convert each fret number into a note
 */
export function getUserNotes(arr, allUserStrings) {
  const userFretNumbers = [];
  const { strings: currentUserStrings } = getLocalStorage('userSettings');

  const numberInputs = document.querySelectorAll('input[type="number"]');

  numberInputs.forEach(input => {
    if (input.value !== "") {
      userFretNumbers.push(input.value % 12);
    } else {
      userFretNumbers.push(input.value);
    }
  });

  currentUserStrings.forEach((_, i) => {
    const stringNotes = allUserStrings[i];
    arr.push(stringNotes[userFretNumbers[i]]);
  });
}
