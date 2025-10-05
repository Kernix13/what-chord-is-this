export const SHARP = '♯';
export const FLAT = '♭';
export const SHARPS = ["A", "A♯", "B", "C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯"]
export const FLATS = ["A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭"]
export const TUNINGS = [
  {
    "Standard": ["E", "A", "D", "G", "B", "E"],
    "Drop D": ["D", "A", "D", "G", "B", "E"], 
    "Dbl Drop D": ["D", "A", "D", "G", "B", "D"], 
    "Drop C": ["C", "G", "D", "F", "A", "D"], 
    "Open C": ["C", "G", "C", "G", "C", "E"], 
    "Open A": ["E", "A", "C♯", "E", "A", "E"], 
    "Open D": ["D", "A", "D", "F♯", "A", "D"], 
    "DADGAD": ["D", "A", "D", "G", "A", "D"], 
    "Open D Minor": ["D", "A", "D", "F", "A", "D"], 
    "Open E": ["E", "B", "E", "G♯", "B", "E"], 
    "Open F": ["F", "A", "C", "F", "C", "F"], 
    "Open G": ["D", "G", "D", "G", "B", "D"], 
    "Open G Minor": ["D", "G", "D", "G", "B♭", "D"]
  },
  {
    "Standard": ["G", "D", "G", "B", "D"],
    "Double C": ["G", "C", "G", "C", "D"],
    "Drop C": ["G", "C", "G", "B", "D"],
    "D Tuning": ["F♯", "D", "F♯", "A", "D"],
    "G Modal": ["G", "C", "G", "C", "D"],
    "Long Neck": ["E", "B", "E", "G♯", "B"],
    "A-Scale": ["A", "E", "A", "C♯", "E"],
    "Baritone": ["C", "G", "C", "E", "G"],
    "D Minor": ["F", "D", "F", "A", "D"],
    "Drop C": ["G", "C", "G", "B", "D"],
    "G Minor": ["G", "D", "G", "B♭", "D"]
  },
  {
    "Standard": ["G", "D", "A", "E"],
    "Cajun Tuning": ["F", "C", "G", "D"],
    "Open G": ["G", "D", "G", "B"],
    "Cross G": ["G", "D", "G", "D"],
    "G-DAD": ["G", "D", "A", "D"],
    "Open D": ["D", "D", "A", "D"],
    "High Bass": ["A", "D", "A", "E"],
    "Cross A": ["A", "E", "A", "E"],
    "Open A": ["A", "E", "A", "C♯"]
  },
  {
    "Standard": ["G", "C", "E", "A"],
    "D Tuning": ["A", "D", "F♯", "B"],
    "Slack-Key": ["G", "C", "E", "G"],
    "Slide Tuning": ["G", "C", "E", "B♭"],
    "Traditional": ["A", "D", "F♯", "B"],
    "Baritone": ["D", "G", "B", "E"]
  },
];

// I have to prevent the user from changing the key to sharp if these are chosen or I have to write a function for handing that scenario
export const FLAT_TUNINGS = [
  TUNINGS[0]["Open D Minor"], 
  TUNINGS[0]["Open F"], 
  TUNINGS[0]["Open G Minor"], 
  TUNINGS[1]["D Minor"], 
  TUNINGS[1]["G Minor"], 
  TUNINGS[3]["Slide Tuning"]
];

/* This data structure is wrong, and so is my scales in chord-intervals.js */

export const SCALES = [
  {
    "Major Scale": [ 
      [[0, 2, 4, 5, 7, 9, 11], 'Major Scale'], 
      [[0, 2, 3, 5, 7, 9, 10], 'Dorian'], // D E F G A B C
      [[0, 1, 3, 5, 7, 8, 10], 'Phrygian'], // E F G A B C D
      [[0, 2, 4, 6, 7, 9, 11], 'Lydian'], // F G A B C D E
      [[0, 2, 4, 5, 7, 9, 10], 'Mixolydian'], // G A B C D E F
      [[0, 2, 4, 5, 7, 8, 10], 'Natural Minor'], // A B C D E F G
      [[0, 1, 3, 5, 6, 8, 10], 'Locrian'], // B C D E F G A
    ],
    "Minor Pentatonic": [
      [[0, 3, 5, 7, 10], 'Minor Pentatonic'], // A C D E G
      [[0, 2, 4, 7, 9], 'Major Pentatonic'], // C D E G A
      [[0, 2, 5, 7, 10], '7sus Pentatonic'], // D E G A C
      [[0, 3, 5, 8, 10], 'Mode 4'], // E G A C D
      [[0, 2, 5, 7, 9], 'sus add Pentatonic'], // G A C D E
    ],
    "Blues Scale": [
      [[0, 3, 5, 6, 7, 10], 'Blues Scale'], // A C D E♭ E G
      [[0, 2, 3, 4, 7, 9], 'Country Blues Scale'], // C D E♭ E G A
      [[0, 1, 2, 5, 7, 10], 'Phrygian Hexatonic'], // D E♭ E G A C
      [[0, 1, 4, 6, 9, 10], 'Locrian Hexatonic'], // E♭ E G A C D
      [[0, 3, 5, 8, 10, 11], 'Mode 5'], // E G A C D E♭
      [[0, 2, 5, 7, 8, 9], 'Sus add Hexatonic'], // G A C D E♭ E
    ],
    "Harmonic Minor": [
      [[0, 2, 3, 5, 7, 8, 11], 'Harmonic Minor'], // A B C D E F G♯
      [[0, 1, 3, 5, 6, 9, 10], 'Locrian Natural 6'], // B C D E F G♯ A
      [[0, 2, 4, 5, 8, 9, 11], 'Ionian ♯5'], // C D E F G♯ A B
      [[0, 2, 3, 6, 7, 9, 10], 'Dorian ♯11'], // D E F G♯ A B C
      [[0, 1, 4, 5, 7, 8, 10], 'Phrygian Dominant'], // E F G♯ A B C D
      [[0, 3, 4, 6, 7, 9, 11], 'Lydian ♯9'], // F G♯ A B C D E
      [[0, 1, 3, 4, 6, 8, 9], 'Super Locrian'], // G♯ A B C D E F
    ],
    "Melodic Minor": [
      [[0, 2, 3, 5, 7, 9, 11], 'Melodic Minor'], // A B C D E F♯ G♯
      [[0, 1, 3, 5, 7, 9, 10], 'Dorian ♭9'], // B C D E F♯ G♯ A
      [[0, 2, 4, 6, 8, 9, 11], 'Lydian Augmented'], // C D E F♯ G♯ A B
      [[0, 2, 4, 6, 7, 9, 10], 'Lydian Dominant'], // D E F♯ G♯ A B C
      [[0, 2, 4, 5, 7, 8, 10], 'Mixolydian ♭6'], // E F♯ G♯ A B C D
      [[0, 2, 3, 5, 6, 9, 10], 'Aeolian ♭5'], // F♯ G♯ A B C D E 
      [[0, 1, 3, 4, 6, 8, 10], 'Altered Scale'] // G♯ A B C D E F♯ 
    ],
    "Major Bebop": [
      [[0, 2, 4, 5, 7, 8, 9, 11], 'Major Bebop'], // C D E F G G♯ A B
      [[0, 2, 3, 5, 6, 7, 9, 10], 'Dorian Blues'], // D E F G G♯ A B C
      [[0, 1, 3, 4, 5, 7, 8, 10], 'Mode 3'], // E F G G♯ A B C D
      [[0, 2, 3, 4, 6, 7, 9, 11], 'Mode 4'], // F G G♯ A B C D E
      [[0, 1, 2, 4, 5, 7, 9, 10], 'Mode 5'], // G G♯ A B C D E F
      [[0, 1, 3, 4, 6, 8, 9, 11], 'Mode 6'], // G♯ A B C D E F G
      [[0, 2, 3, 5, 7, 8, 10, 11], 'Mode 7'], // A B C D E F G G♯
      [[0, 1, 3, 5, 6, 8, 9, 10], 'Mode 8'] // B C D E F G G♯ A
    ],
    "Minor Bebop": [
      [[0, 2, 3, 4, 5, 7, 9, 10], 'Minor Bebop'], // D E F F♯ G A B C
      [[0, 1, 2, 3, 5, 7, 8, 10], 'Mode 2'], // E F F♯ G A B C D
      [[0, 1, 2, 4, 6, 7, 9, 11], 'Mode 3'], // F F♯ G A B C D E
      [[0, 1, 3, 5, 6, 8, 10, 11], 'Mode 4'], // F♯ G A B C D E F
      [[0, 2, 4, 5, 7, 9, 10, 11], 'Dominant Bebop'], // G A B C D E F F♯ 
      [[0, 2, 3, 5, 7, 8, 9, 10], 'Mode 6'], // A B C D E F F♯ G
      [[0, 1, 3, 5, 6, 7, 8, 10], 'Mode 7'], // B C D E F F♯ G A
      [[0, 2, 5, 5, 6, 7, 9, 11], 'Mode 8'] // C D E F F♯ G A B
    ],
    "Augmented": [
      [[0, 3, 4, 7, 8, 11], 'Augmented Mode 1'], // C E♭ E G A♭ B
      [[0, 1, 4, 5, 8, 9], 'Augmented Mode 2'] // E♭ E G A♭ B C
    ],
    "HW Diminished": [
      [[0, 1, 3, 4, 6, 7, 9, 10], 'HW Diminished'], // C D♭ E♭ E F♯ G A B♭
      [[0, 2, 3, 5, 6, 8, 9, 11], 'WH Diminished'] // dim, dim7, m-maj7♭5
    ],
    "Whole Tone": [
      [[0, 2, 4, 6, 8, 10], 'Whole Tone']
    ]
  }
];
