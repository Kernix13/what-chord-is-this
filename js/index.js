"use strict"

import { onFirstVisit, toggleSettingsForm, onInstrumentChange, onTuningChange, onKeyChange } from "./ui/eventHandlers.js";
import { resetAllData } from "./ui/renderResults.js";

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

// 1 Global variable (?!?)
const userFretNotes = [];

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