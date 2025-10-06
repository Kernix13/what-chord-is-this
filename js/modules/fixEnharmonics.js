import { searchForChordMatch, chordFound } from "./searchForChordMatch.js"; 
import { SHARP, FLAT } from "../data/constants.js";
import { setLocalStorage } from "../utils/storage.js";

const flatKey = document.getElementById('flat'); 

/*
* searchForChordMatch called in enharmonics function
* Check for and fix enharmonic equivalents - used for the chord name
- object = intervalsAndNotes, arr = scaleFromUniqueNote, arr2 = intervalsForUniqueNotes
*/
export default function fixEnharmonics(object, arr, arr2) {
  searchForChordMatch(arr2);
  if (chordFound.length > 0) {
    console.log('chordFound', chordFound[0])
    setLocalStorage('foundChord', chordFound[0]);
    // 9. if blocks to handle special cases such as enharmonic equivalents
    // 1. Fix flat 9's if the ♭9 is a sharp
    if (object.hasOwnProperty(1) && object[1].length === 2) {
      arr.splice(1, 1, arr[2] + FLAT);
      object[1] = arr[1];
    }

    // 2. Fix sharp 9's / flat 3's
    if (object.hasOwnProperty(3) && !object.hasOwnProperty(4) && object[3].length === 2) {
      arr.splice(3, 1, arr[4] + FLAT);
      object[3] = arr[3];
    }
    if (object.hasOwnProperty(3) && object.hasOwnProperty(4) && object[3].length === 2 && flatKey.checked) {
      arr.splice(3, 1, arr[2] + SHARP);
      object[3] = arr[3];
    }

    // 3. Fix sharp 11's / flat 5's
    if (object.hasOwnProperty(6) && !object.hasOwnProperty(7) && object[6].length === 2) {
      arr.splice(6, 1, arr[7] + FLAT);
      object[6] = arr[6];
    }

    // 4. Fix sharp 5's / flat 13's
    if (object.hasOwnProperty(7) && object.hasOwnProperty(8) && object[8].length === 2) {
      arr.splice(8, 1, arr[9] + FLAT);
      object[8] = arr[8];

    }
    if (!object.hasOwnProperty(7) && object.hasOwnProperty(8) && object[8].length === 2 && flatKey.checked) {
      arr.splice(8, 1, arr[7] + SHARP);
      object[8] = arr[8];
    }

    // 5. Fix flat 7's for the keys F & C if sharpRadioBtn.checked
    if (object.hasOwnProperty(10) && object[10].length === 2 && arr[0].length === 1) {
      arr.splice(10, 1, arr[11] + FLAT);
      object[10] = arr[10];
    }
  }
}