import { chordIntervals } from "../data/chord-intervals.js"
import { chordIntervals2 } from "../data/chord-intervals2.js"

export const chordFound = [];

// 9. Check for matching chord in chord-intervals.js: {} = chordIntervals
// arr = intervalsForUniqueNotes
export function searchForChordMatch(arr) {
  // clear previous matches first
  chordFound.length = 0;

  // Filter all chordIntervals to find matches, then push them all at once
  const matches = chordIntervals2.filter(chord =>
    arr.length === chord.steps.length &&
    arr.every(interval => chord.steps.includes(interval))
  );

  // Populate the shared array
  chordFound.push(...matches);
}