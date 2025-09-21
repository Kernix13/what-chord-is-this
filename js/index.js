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
import fixEnharmonics from "./modules/fixEnharmonics.js";
import { chordFound } from "./modules/searchForChordMatch.js";
import { createCard, createScaleDegreesCard, createTitleCard } from "./ui/renderResults.js";

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

    // 8. Handle edge cases/exceptions: enharmonic equivalents
    fixEnharmonics(intervalsAndNotes, scaleFromUniqueNote, intervalsForUniqueNotes);

    // 9. Check for matching chord in chord-intervals.js: modules/searchForChordMatch() - called in fixEnharmonics

    // 10. Check for a matching chord and then perform all other steps 
    if (chordFound.length > 0) {
      // 11. Join the users' notes
      const userNotes = uniqueUserNotes.join('-');

      // 12. Put the chord notes in "proper" order then join
      const foundChordNotes = [];
      let chordNotes = '';

      chordFound[0].steps.forEach(note => {
        foundChordNotes.push(intervalsAndNotes[note]);
      });
      chordNotes = foundChordNotes.join('-');
      
      // 12. Create slash chords for "short" names, or set slashChordName to = the normal name - skip if the chord name is >= 7 characters
      let slashChordName = '';

      if (intervalsForUniqueNotes[0] !== 0 && chordFound[0].Chord.length < 4) {
        slashChordName = `${userNote}${chordFound[0].Chord}/${intervalsAndNotes[intervalsForUniqueNotes[0]]}`;
      } else {
        slashChordName = userNote + chordFound[0].Chord;
      }

      // 13. use non-slash chord name for scale degrees card
      const chordName = userNote + chordFound[0].Chord;

      // 14. Get "Equal Chords" if chordFound has that property then join
      const equalChordNames = [];
      if (chordFound[0].hasOwnProperty('Equal Chords')) {
        chordFound[0]['Equal Chords'].forEach(equal => {
          equalChordNames.push(scaleFromUniqueNote[equal['key']] + equal['name']);
        });
      } else {
        equalChordNames.push(['Unique']);
      }
      const equalChords = equalChordNames.join(', ');

      // 15. Create an object of degrees number and chord notes
      const degreesNotesObj = {};
      chordFound[0].Intervals.forEach((key, i) => {
        degreesNotesObj[key] = foundChordNotes[i];
      });   

      // now join that as a string and push to an array to output as a string
      const degreesNotesStr = [];
      Object.keys(degreesNotesObj).forEach((item, i) => {
        if (item.includes('1') && i === 0) {
          item = item.replace('1', 'R')
        }
        degreesNotesStr.push(`${item} = ${Object.values(degreesNotesObj)[i]}`)
      })

      // 16. Get chord tendency and chord intervals then join
      const chordIntervalsString = chordFound[0].Intervals.join('-');
      const chordTendency = chordFound[0].Tendency.join(', ').split(' ').join(' ');

      // 17. Create the card for the h2 title and the found chord name
      createTitleCard(slashChordName)

      // 18. Create cards for 5 other pieces of information
      /* I think showing the user notes in their order is redundant
      */
      createCard('user-notes', ['Your notes: ', userNotes]);
      createCard('chord-notes', ['Chord notes: ', chordNotes]);
      createCard('equal-chords', ['Equal chord(s): ', equalChords]);
      createCard('tendency', ['Chord tendency: ', chordTendency]);
      createCard('intervals', ['Chord degrees: ', chordIntervalsString]);

      // 19. Get scale degrees for the chord
      createScaleDegreesCard(chordName, chordFound[0]['scales']);

      break;
    }
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