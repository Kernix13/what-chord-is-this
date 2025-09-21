import { chordIntervals } from "../data/chord-intervals.js"

export const chordFound = [];

// 9. Check for matching chord in chord-intervals.js: {} = chordIntervals
// arr = intervalsForUniqueNotes
export function searchForChordMatch(arr) {
  chordIntervals.forEach(chord => {
    const hasMatchingIntervals = arr.every(interval => chord.steps.includes(interval));
    
    if (arr.length === chord.steps.length && hasMatchingIntervals) {
      chordFound.push(chord);
    }
  });
  // return chordFound; // does this do anything?
}