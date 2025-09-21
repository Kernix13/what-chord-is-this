"use strict"

import { onFirstVisit, 
  toggleSettingsForm, 
  onInstrumentChange, 
  onTuningChange, 
  onKeyChange } from "./ui/eventHandlers.js";
import { resetAllData } from "./ui/renderResults.js";
import { buildUserStrings } from "./modules/buildUserStrings.js";
import { getUserNotes } from "./modules/getUserNotes.js";
import { getLocalStorage } from "./utils/storage.js";
import { SHARPS, FLATS } from "./data/constants.js";

/* Get DOM elements */
// Settings form
const instruments = document.getElementById('instruments');
const tuningsSelect = document.getElementById('tunings-select');
const keys = document.querySelectorAll('#key input');
// Settings Button
const settingsBtn = document.getElementById('settings-btn');
// Frets form
const fretsForm = document.getElementById('frets-form');
const pageReset = document.getElementById('page-reset');

// 1 Global variable 
const userFretNotes = [];

// The main function called in the fretsForm event listener
function getChordName() {
  
  // 1. Build six 12-note strings based on the users' tuning
  buildUserStrings();

  // 2. Get user fret #'s and convert fret #'s into note values
  getUserNotes(userFretNotes);

  // 3. Remove duplicate user notes
  let uniqueUserNotes = [];
  uniqueUserNotes = userFretNotes.filter(tone => {
    return !uniqueUserNotes.includes(tone) && tone !== undefined 
      ? uniqueUserNotes.push(tone) 
      : null;
  });

  let scaleFromUniqueNote = [];
  let intervalsForUniqueNotes;

  // MAIN LOOP WHERE ALL THE WORK IS DONE
  for (const userNote of uniqueUserNotes) {

    // 4. Build 12-note string arrays for each unique USER note
    const savedSettings = getLocalStorage();
    const userKey = savedSettings.keyId;

    if (userKey === 'sharp') {
      scaleFromUniqueNote = SHARPS
        .slice(SHARPS.indexOf(userNote))
        .concat(SHARPS.slice(0, SHARPS.indexOf(userNote)));
    } else if (userKey === 'flat') {
      scaleFromUniqueNote = FLATS
        .slice(FLATS.indexOf(userNote))
        .concat(FLATS.slice(0, FLATS.indexOf(userNote)));
    }

    // 5. Convert unique user notes to intervals
    intervalsForUniqueNotes = [];
    uniqueUserNotes.forEach(note => intervalsForUniqueNotes.push(scaleFromUniqueNote.indexOf(note)));
  
    // 6. Create an object: key = note interval, value = note
    const intervalsAndNotes = {};
    intervalsForUniqueNotes.forEach((key, i) => {
      intervalsAndNotes[key] = uniqueUserNotes[i];
    });
    
  }
}

/** 
 * * Event Listeners 
*/
// Set initial state for Instrument, Tuning, Strings and Key
document.addEventListener("DOMContentLoaded", onFirstVisit);

// Show/Hide settings form
settingsBtn.addEventListener('click', toggleSettingsForm);

// Instrument Select list event listener
instruments.addEventListener('change', e => {
  // resetAllData(userFretNotes, chordFound);
  onInstrumentChange(e);
})

// Tunings Select list event listener
tuningsSelect.addEventListener('change', e => {
  // resetAllData(userFretNotes, chordFound);
  onTuningChange(e);
})

// Sharp/Flat keys event listener
keys.forEach((key) => {
  key.addEventListener('click', e => {
    // resetAllData(userFretNotes, chordFound);
    onKeyChange(e);
  })
})

// Reset number inputs, and remove chord search results from DOM 
// pageReset.addEventListener('click', () => {
//   resetAllData(userFretNotes, chordFound);
//   document.querySelector('h1').scrollIntoView({ behavior: 'smooth' });
// });

// Run main function and get user numbers
fretsForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // resetAllData(userFretNotes, chordFound);

  getChordName();

  // document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });
});