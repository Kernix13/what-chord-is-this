import { TUNINGS } from "../data/constants.js";
import { getLocalStorage } from "../utils/storage.js";

const tuningsSelect = document.getElementById('tunings-select');
const stringsDiv = document.getElementById('strings');

// Load instruments tunings into the DOM (Settings Form)
export function loadTunings(index) {
  const instrumentTunings = TUNINGS[index];

  let i = 0;

  for (const tuning in instrumentTunings) {
    const option = document.createElement('option');
    option.setAttribute('value', i);
    i++;

    // Stringify the tunings arrays then append to the DOM
    const tuningString = instrumentTunings[tuning].join('-');
    const optionText = document.createTextNode(`${tuning}: ${tuningString}`);

    option.append(optionText);
    tuningsSelect.append(option);
  }
}

// Load number inputs and labels into the DOM on instrument select or tunings select (Frets Form)
export function loadStrings(index) {
  const savedSettings = getLocalStorage();
  const instrumentTunings = TUNINGS[savedSettings.instrument];
  const currentTuning = Object.values(instrumentTunings)[index]
  createStrings(currentTuning);
}