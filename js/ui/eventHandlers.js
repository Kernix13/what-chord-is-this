import { TUNINGS, FLAT_TUNINGS } from "../data/constants.js";
import { setLocalStorage, getLocalStorage } from "../utils/storage.js";
import { loadStrings, loadTunings } from "./setupForms.js";

const instrumentsOptions = document.querySelectorAll('#instruments option');
const tuningsSelect = document.getElementById('tunings-select');
const keys = document.querySelectorAll('#key input');
const sharpKey = document.getElementById('sharp'); 
const flatKey = document.getElementById('flat'); 
const stringsDiv = document.getElementById('strings');
const settingsForm = document.getElementById('settings-form');
const settingsBtn = document.getElementById('settings-btn');

// Listener for DomContentLoaded
export function onFirstVisit() {
  const initialSettings = {
      instrument: 0,
      tuning: 0,
      strings: TUNINGS[0]["Standard"],
      keyId: 'sharp'
    }
  
  if (!getLocalStorage()) {
    setLocalStorage(initialSettings);
    loadTunings(0);
    loadStrings(0);
    keys[0].setAttribute('checked', '');

    document.getElementById('str-1').focus();
  } else {
      // Get localStorage object & add selected to userSettings instrument
      const savedSettings = getLocalStorage();
      instrumentsOptions[savedSettings.instrument].setAttribute('selected', '');
      
      // Load tunings and add selected to the tuning in localStorage
      loadTunings(savedSettings.instrument);
      // Get all the select list option elements
      const tuningsOptions = document.querySelectorAll('#tunings-select option');
      tuningsOptions[savedSettings.tuning].setAttribute('selected', '');
      
      // Add checked to localStorage keyId
      const selectedKey = [...keys].filter(key => key.value === savedSettings.keyId);
      selectedKey[0].setAttribute('checked', '');
  
      // Load localStorage string number inputs into the DOM
      loadStrings(savedSettings.tuning);
  
      document.getElementById('str-1').focus();
    }
}

// Listener for Show Settings button
export function toggleSettingsForm() {
  settingsForm.classList.toggle('onscreen');

  if (settingsForm.classList.contains('onscreen')) {
    settingsBtn.innerText = "Hide Settings"
  } else {
    settingsBtn.innerText = "Show Settings"
    document.getElementById('str-1').focus();
  }
}

// Listener for instruments select list
export function onInstrumentChange(event) {
  const savedSettings = getLocalStorage();
  
    // Get all select list option elements, find the selected instrument
    const options = [...event.target.options]
    const selectedInstrument = options.filter(option => option.selected === true);
  
    // Get the tunings object and select the first property
    const instrumentTunings = TUNINGS[parseInt(selectedInstrument[0].value)];
    const standardTuningStrings = Object.values(instrumentTunings)[0]
    
    // Remove selected attribute for saved instrument, add it for selected instrument
    if (savedSettings.instrument !== parseInt(selectedInstrument[0].value)) {
      options[savedSettings.instrument].removeAttribute('selected');
    }
    selectedInstrument[0].setAttribute('selected', '');
  
    // Update localStorage
    setLocalStorage({ ...savedSettings, instrument:  parseInt(selectedInstrument[0].value), tuning: 0, strings: standardTuningStrings });
  
    // Remove old tunings from select list
    [...tuningsSelect.children].forEach(tuning => tuning.remove());
    // Load new tunings into select list
    loadTunings(parseInt(selectedInstrument[0].value));
  
    // Remove string number inputs for old instrument/tuning
    [...stringsDiv.children].forEach(string => string.remove());
    // Load new strings number inputs
    loadStrings(0);
}