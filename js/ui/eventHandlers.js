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