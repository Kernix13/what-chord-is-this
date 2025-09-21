import { getLocalStorage } from "../utils/storage.js"
import { allUserStrings } from "./buildUserStrings.js";

const userFretNumbers = [];

/**  
* STEP 2 convert each fret number into a note based on the 
* 12-note chromatic arrays from buildUserStrings 
* getUserNotes(userFretNotes)
*/
export function getUserNotes(arr) {
  
  const savedSettings = getLocalStorage();
  const currentUserStrings = savedSettings.strings;
  
  const numberInputs = document.querySelectorAll('input[type="number"]'); 

  numberInputs.forEach(input => {
    if (input.value !== '') {
      userFretNumbers.push(input.value % 12);
    } else {
      userFretNumbers.push(input.value);
    }
  })
  
  currentUserStrings.forEach((_, i) => {
    const stringNotes = allUserStrings[i];
    arr.push(stringNotes[userFretNumbers[i]])
  })

  userFretNumbers.length = 0;
  allUserStrings.length = 0;
}