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
  const savedSettings = getLocalStorage('userSettings');
  const instrumentTunings = TUNINGS[savedSettings.instrument];
  const currentTuning = Object.values(instrumentTunings)[index]
  createStrings(currentTuning);
}

// Create number inputs and labels then append to the DOM (Frets Form)
function createStrings(tuning) {
  tuning.forEach((string, i) => {

    // label and input container
    const div = document.createElement('div');
    div.setAttribute('class', 'string-group');

    const label = document.createElement('label');
    label.setAttribute('for', `str-${i + 1}`);
    label.setAttribute('class', 'form-label');
    label.append(document.createTextNode(string))

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control note');
    input.setAttribute('id', `str-${i + 1}`);
    input.setAttribute('min', '0');
    input.setAttribute('step', '1');
    input.setAttribute('max', '18');

    div.append(label);
    div.append(input);
    stringsDiv.append(div)
  })
}