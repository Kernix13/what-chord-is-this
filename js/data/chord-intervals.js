export const chordIntervals = [
  {
    Chord: "",
    Intervals: ["1", "3", "5"],
    steps: [0, 4, 7],
    Tendency: ["I", "IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["2nd"] ,
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th", "6th"],
        "degrees": [4, 5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "3rd", "4th", "5th"],
        "degrees": [0, 2, 3, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "3rd", "5th", "8th"],
        "degrees": [0, 2, 4, 7]
      }
    ]
  },
  {
    Chord: " lydian",
    Intervals: ["1", "♯4", "5"],
    steps: [0, 6, 7],
    Tendency: ["I", "II", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "6",
    Intervals: ["1", "3", "5", "6"],
    steps: [0, 4, 7, 9],
    Tendency: ["I", "V"],
    "Equal Chords": [
      { key: 9, name: "m7" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th", "5th"] ,
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals":  ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "3rd", "5th", "8th"],
        "degrees": [0, 2, 4, 7]
      }
    ]
  },
  {
    Chord: " add9",
    Intervals: ["1", "3", "5", "9"],
    steps: [0, 4, 7, 2],
    Tendency: ["I", "V"],
    Tendency: ["I", "V"],
    "Equal Chords": [
      { key: 7, name: "6 sus" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "3rd", "5th", "8th"],
        "degrees": [0, 2, 4, 7]
      }
    ]
  },
  {
    Chord: " add11",
    Intervals: ["1", "3", "5", "11"],
    steps: [0, 4, 7, 5],
    Tendency: ["I", "IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "3rd", "5th"],
        "degrees": [0, 2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th", "8th"],
        "degrees": [0, 4, 7]
      }
    ]
  },
  {
    Chord: " add♯11",
    Intervals: ["1", "3", "5", "♯11"],
    steps: [0, 4, 7, 6],
    Tendency: ["I", "II", "V"],
    "Equal Chords": [{ key: 6, name: "7♭59 N3" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "6 add9",
    Intervals: ["1", "3", "5", "6", "9"],
    steps: [0, 4, 7, 9, 2],
    Tendency: ["I", "V"],
    "Equal Chords": [
      { key: 2, name: "9sus" },
      { key: 7, name: "6 sus add9" },
      { key: 9, name: "m11" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "3rd", "5th", "8th"],
        "degrees": [0, 2, 4, 7]
      }
    ]
  },
  {
    Chord: "6 add9 N5",
    Intervals: ["1", "3", "6", "9"],
    steps: [0, 4, 9, 2],
    Tendency: ["I", "V"],
    "Equal Chords": [ { key: 5, name: "maj13 NR" } ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "3rd", "5th", "8th"],
        "degrees": [0, 2, 4, 7]
      }   
    ]
  },
  {
    Chord: " add9/11",
    Intervals: ["1", "3", "5", "9", "11"],
    steps: [0, 4, 7, 2, 5],
    Tendency: ["I", "IV", "V"],
    "Equal Chords": [{ key: 7, name: "13sus" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th", "8th"],
        "degrees": [0, 4, 7]
      }
    ]
  },
  {
    Chord: " add9/♯11",
    Intervals: ["1", "3", "5", "9", "♯11"],
    steps: [0, 4, 7, 2, 6],
    Tendency: ["I", "II", "V"],
    "Equal Chords": [
      { key: 2, name: "9/11 N5" },
      { key: 7, name: "maj13sus" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "6 add9/11",
    Intervals: ["1", "3", "5", "6", "9", "11"],
    steps: [0, 4, 7, 9, 2, 5],
    Tendency: ["I", "IV", "V"],
    "Equal Chords": [
      { key: 5, name: "maj9/13" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["8th"],
        "degrees": [7]
      }
    ]
  },
  {
    Chord: "6 add9/♯11",
    Intervals: ["1", "3", "5", "6", "9", "♯11"],
    steps: [0, 4, 7, 9, 2, 6],
    Tendency: ["I", "II", "V"],
    "Equal Chords": [{ key: 2, name: "9/11" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "maj7",
    Intervals: ["1", "3", "5", "7"],
    steps: [0, 4, 7, 11],
    Tendency: ["I", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj7 N5",
    Intervals: ["1", "3", "7"],
    steps: [0, 4, 11],
    Tendency: ["I", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj9",
    Intervals: ["1", "3", "5", "7", "9"],
    steps: [0, 4, 7, 11, 2],
    Tendency: ["I", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj9 N5",
    Intervals: ["1", "3", "7", "9"],
    steps: [0, 4, 11, 2],
    Tendency: ["I", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj13",
    Intervals: ["1", "3", "5", "7", "13"],
    steps: [0, 4, 7, 11, 9],
    Tendency: ["I", "V"],
    "Equal Chords": [{ key: 9, name: "m9" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"] ,
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj13 NR",
    Intervals: ["3", "5", "7", "13"],
    steps: [4, 7, 11, 9],
    Tendency: ["I", "V"],
    "Equal Chords": [{ key: 7, name: "6 add9 N5" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj13 N5",
    Intervals: ["1", "3", "7", "13"],
    steps: [0, 4, 11, 9],
    Tendency: ["I", "V"],
    "Equal Chords": [{ key: 9, name: "m add9" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj9/13",
    Intervals: ["1", "3", "5", "7", "9", "13"],
    steps: [0, 4, 7, 11, 2, 9],
    Tendency: ["I", "V"],
    "Equal Chords": [{ key: 7, name: "6 add9/11" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj9/13 N5",
    Intervals: ["1", "3", "7", "9", "13"],
    steps: [0, 4, 11, 2, 9],
    Tendency: ["I", "V"],
    "Equal Chords": [{ key: 5, name: "maj13♯11 NR" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "5th", "8th"],
        "degrees": [2, 4, 7]
      }
    ]
  },
  {
    Chord: "maj7♯11",
    Intervals: ["1", "3", "5", "7", "♯11"],
    steps: [0, 4, 7, 11, 6],
    Tendency: ["V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [3, 7]
      }
    ]
  },
  {
    Chord: "maj9♯11",
    Intervals: ["1", "3", "5", "7", "9", "♯11"],
    steps: [0, 4, 7, 11, 2, 6],
    Tendency: ["II", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "maj13♯11",
    Intervals: ["1", "3", "5", "7", "13", "♯11"],
    steps: [0, 4, 7, 11, 9, 6],
    Tendency: ["II", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "maj13♯11 NR",
    Intervals: ["3", "5", "7", "13", "♯11"],
    steps: [4, 7, 11, 9, 6],
    Tendency: ["II", "V"],
    "Equal Chords": [{ key: 7, name: "maj9/13 N5" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "7",
    Intervals: ["1", "3", "5", "♭7"],
    steps: [0, 4, 7, 10],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "7 N3",
    Intervals: ["1", "5", "♭7"],
    steps: [0, 7, 10],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "5th", "6th"],
        "degrees": [1, 2, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd", "4th", "5th"],
        "degrees": [1, 3, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "5th", "6th"],
        "degrees": [1, 2, 4, 5]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "5th", "6th"],
        "degrees": [0, 1, 4, 6]
      }
    ]
  },
  {
    Chord: "7 N5",
    Intervals: ["1", "3", "♭7"],
    steps: [0, 4, 10],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th", "7th"],
        "degrees": [3, 4, 6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      },
    ]
  },
  {
    Chord: "9",
    Intervals: ["1", "3", "5", "♭7", "9"],
    steps: [0, 4, 7, 10, 2],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "9 N5",
    Intervals: ["1", "3", "♭7", "9"],
    steps: [0, 4, 10, 2],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 6, name: "7♭5♭13 NR" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "11",
    Intervals: ["1", "3", "5", "♭7", "11"],
    steps: [0, 4, 7, 10, 5],
    Tendency: ["IV", "I"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "11 NR",
    Intervals: ["3", "5", "♭7", "11"],
    steps: [4, 7, 10, 5],
    Tendency: ["IV", "I"],
    "Equal Chords": [{ key: 7, name: "m13 N5" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "11 N5",
    Intervals: ["1", "3", "♭7", "11"],
    steps: [0, 4, 10, 5],
    Tendency: ["IV", "I"],
    "Equal Chords": [{ key: 5, name: "maj7sus" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "13",
    Intervals: ["1", "3", "5", "♭7", "13"],
    steps: [0, 4, 7, 10, 9],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "13 NR",
    Intervals: ["3", "5", "♭7", "13"],
    steps: [4, 7, 10, 9],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "13 N3",
    Intervals: ["1", "5", "♭7", "13"],
    steps: [0, 7, 10, 9],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "5th"],
        "degrees": [1, 4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "5th"],
        "degrees": [1, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th", "6th"],
        "degrees": [0, 4, 5]
      }
    ]
  },
  {
    Chord: "13 N5",
    Intervals: ["1", "3", "♭7", "13"],
    steps: [0, 4, 10, 9],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 6, name: "7♭5♯9 NR" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "9/11",
    Intervals: ["1", "3", "5", "♭7", "9", "11"],
    steps: [0, 4, 7, 10, 2, 5],
    Tendency: ["IV", "I"],
    "Equal Chords": [{ key: 10, name: "6 add9/♯11" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "9/11 N5",
    Intervals: ["1", "3", "♭7", "9", "11"],
    steps: [0, 4, 10, 2, 5],
    Tendency: ["IV", "I"],
    "Equal Chords": [
      { key: 5, name: "maj13sus" },
      { key: 10, name: "add9/♯11" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "9/13",
    Intervals: ["1", "3", "5", "♭7", "9", "13"],
    steps: [0, 4, 7, 10, 2, 9],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "9/13 N5",
    Intervals: ["1", "3", "♭7", "9", "13"],
    steps: [0, 4, 10, 2, 9],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "11/13",
    Intervals: ["1", "3", "5", "♭7", "11", "13"],
    steps: [0, 4, 7, 10, 5, 9],
    Tendency: ["IV", "I"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "11/13 NR",
    Intervals: ["3", "5", "♭7", "11", "13"],
    steps: [4, 7, 10, 5, 9],
    Tendency: ["IV", "I"],
    "Equal Chords": [{ key: 9, name: "7♭5♭13 N3" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "11/13 N5",
    Intervals: ["1", "3", "♭7", "11", "13"],
    steps: [0, 4, 10, 5, 9],
    Tendency: ["IV", "I"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      }
    ]
  },
  {
    Chord: "7♭9",
    Intervals: ["1", "3", "5", "♭7", "♭9"],
    steps: [0, 4, 7, 10, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      }
    ]
  },
  {
    Chord: "7♭9 N5",
    Intervals: ["1", "3", "♭7", "♭9"],
    steps: [0, 4, 10, 1],
    Tendency: ["♭II", "II", "IV", "♭VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      }
    ]
  },
  {
    Chord: "7♭9♯11",
    Intervals: ["1", "3", "5", "♭7", "♭9", "♯11"],
    steps: [0, 4, 7, 10, 1, 6],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VII"],
    "Equal Chords": [{ key: 6, name: "7♭9♯11" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: " add ♭9/♯11",
    Intervals: ["1", "3", "5", "♭9", "♯11"],
    steps: [0, 4, 7, 1, 6],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VII"],
    "Equal Chords": [{ key: 6, name: "7♭9♯11 N3" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭9♭13",
    Intervals: ["1", "3", "5", "♭7", "♭9", "♭13"],
    steps: [0, 4, 7, 10, 1, 8],
    Tendency: ["♭II", "II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: " add ♭9/♭13",
    Intervals: ["1", "3", "5", "♭9", "♭13"],
    steps: [0, 4, 7, 1, 8],
    Tendency: ["♭II", "II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♭9♭13 NR",
    Intervals: ["3", "5", "♭7", "♭9", "♭13"],
    steps: [4, 7, 10, 1, 8],
    Tendency: ["II", "♭III", "III", "IV", "♭VI", "VI", "VII"],
    "Equal Chords": [{ key: 3, name: "11♭9 NR" }],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♭9♭13 N3",
    Intervals: ["1", "5", "♭7", "♭9", "♭13"],
    steps: [0, 7, 10, 1, 8],
    Tendency: ["♭II", "II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [{ key: 3, name: "11/13 NR" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["2nd"],
        "degrees": [1]
      }
    ]
  },
  {
    Chord: "11♭9",
    Intervals: ["1", "3", "5", "♭7", "11", "♭9"],
    steps: [0, 4, 7, 10, 5, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      }
    ]
  },
  {
    Chord: " add ♭9/11",
    Intervals: ["1", "3", "5", "11", "♭9"],
    steps: [0, 4, 7, 5, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      }
    ]
  },
  {
    Chord: "11♭9 NR",
    Intervals: ["3", "5", "♭7", "11", "♭9"],
    steps: [4, 7, 10, 5, 1],
    Tendency: ["♭II", "II", "IV", "♭VI", "VII"],
    "Equal Chords": [{ key: 9, name: "7♭9♭13 NR" }],
    scales: [
      { "Harmonic Minor": ["5th"] }, 
      { "Major Bebop": ["3rd", "5th"] }
    ]
  },
  {
    Chord: "11♭9 N5",
    Intervals: ["1", "3", "♭7", "11", "♭9"],
    steps: [0, 4, 10, 5, 1],
    Tendency: ["♭II", "II", "IV", "♭VI", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      }
    ]
  },
  {
    Chord: "13♭9",
    Intervals: ["1", "3", "5", "♭7", "13", "♭9"],
    steps: [0, 4, 7, 10, 9, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      }
    ]
  },
  {
    Chord: "13♭9 N5",
    Intervals: ["1", "3", "♭7", "13", "♭9"],
    steps: [0, 4, 10, 9, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [{ key: 6, name: "7♯9♯11 NR" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      }
    ]
  },
  {
    Chord: "13♭9 NR/N5",
    Intervals: ["3", "♭7", "13", "♭9"],
    steps: [4, 10, 9, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [
      { key: 6, name: "7♯9 NR" },
      { key: 10, name: "m-maj7♭5" }
    ],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["5th"],
        "degrees": [4]
      }
    ]
  },
  {
    Chord: "7♭13",
    Intervals: ["1", "3", "5", "♭7", "♭13"],
    steps: [0, 4, 7, 10, 8],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 8, name: "maj9♯5" }],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯9",
    Intervals: ["1", "3", "5", "♭7", "♯9"],
    steps: [0, 4, 7, 10, 3],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 6, name: "13♭5♭9 NR" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: " add ♯9",
    Intervals: ["1", "3", "5", "♯9"],
    steps: [0, 4, 7, 3],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 6, name: "13♭5♭9 NR" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♯9 NR",
    Intervals: ["3", "5", "♭7", "♯9"],
    steps: [4, 7, 10, 3],
    Tendency: ["IV", "VII"],
    "Equal Chords": [
      { key: 4, name: "m-maj7♭5" },
      { key: 6, name: "13♭9 NR/N5" }
    ],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♯9 N5",
    Intervals: ["1", "3", "♭7", "♯9"],
    steps: [0, 4, 10, 3],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 6, name: "13♭5 NR" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭9/♯9",
    Intervals: ["1", "3", "5", "♭7", "♭9", "♯9"],
    steps: [0, 4, 7, 10, 1, 3],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [{ key: 3, name: "13♭9" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯9♯11",
    Intervals: ["1", "3", "5", "♭7", "♯9", "♯11"],
    steps: [0, 4, 7, 10, 3, 6],
    Tendency: ["♭II", "II", "♭III", "IV", "V", "♭VI", "VI", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "13♭5♭9" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♯9♯11 NR",
    Intervals: ["3", "5", "♭7", "♯9", "♯11"],
    steps: [4, 7, 10, 3, 6],
    Tendency: ["II", "♭III", "IV", "♭V", "♭VI", "VI", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "13♭9 NR" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♯9♭13",
    Intervals: ["1", "3", "5", "♭7", "♯9", "♭13"],
    steps: [0, 4, 7, 10, 3, 8],
    Tendency: ["♭II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: " add ♯9/♭13",
    Intervals: ["1", "3", "5", "♯9", "♭13"],
    steps: [0, 4, 7, 3, 8],
    Tendency: ["♭II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯9♭13 NR",
    Intervals: ["3", "5", "♭7", "♯9", "♭13"],
    steps: [4, 7, 10, 3, 8],
    Tendency: ["♭III", "III", "IV", "♭VI", "VII"],
    scales: [
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "13♯9",
    Intervals: ["1", "3", "5", "♭7", "13", "♯9"],
    steps: [0, 4, 7, 10, 3, 9],
    Tendency: ["♭II", "III", "IV", "V", "♭VII", "VII"],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "6 add ♯9",
    Intervals: ["1", "3", "5", "13", "♯9"],
    steps: [0, 4, 7, 3, 9],
    Tendency: ["♭II", "III", "IV", "V", "♭VII", "VII"],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♯9 NR",
    Intervals: ["3", "5", "♭7", "13", "♯9"],
    steps: [4, 7, 10, 3, 9],
    Tendency: ["♭II", "III", "IV", "V", "♭VII", "VII"],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♯9 N5",
    Intervals: ["1", "3", "♭7", "13", "♯9"],
    steps: [0, 4, 10, 9, 3],
    Tendency: ["♭II", "III", "IV", "V", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "13♭5♯9 NR" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♯9 NR/N5",
    Intervals: ["3", "♭7", "13", "♯9"],
    steps: [4, 10, 9, 3],
    Tendency: ["♭II", "III", "IV", "V", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "13♯9 NR/N5" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♯11",
    Intervals: ["1", "3", "5", "♭7", "♯11"],
    steps: [0, 4, 7, 10, 6],
    Tendency: ["♭II", "IV", "V", "VII"],
    "Equal Chords": [{ key: 6, name: "7♭5♭9" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "9♯11",
    Intervals: ["1", "3", "5", "♭7", "9", "♯11"],
    steps: [0, 4, 7, 10, 2, 6],
    Tendency: ["Any key"],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      }
    ]
  },
  {
    Chord: "9♯11 NR",
    Intervals: ["3", "5", "♭7", "9", "♯11"],
    steps: [4, 7, 10, 2, 6],
    Tendency: ["♭II", "III", "IV", "V", "♭VII", "VII"],
    "Equal Chords": [
      { key: 4, name: "m9♭5" },
      { key: 6, name: "7♯5♭9" }
    ],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      }
    ]
  },
  {
    Chord: "9♯11 N3",
    Intervals: ["1", "5", "♭7", "9", "♯11"],
    steps: [0, 7, 10, 2, 6],
    Tendency: ["♭II", "II", "♭III", "IV", "♭V", "V", "♭VI", "♭VII", "VII"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      }
    ]
  },
  {
    Chord: "13♯11",
    Intervals: ["1", "3", "5", "♭7", "13", "♯11"],
    steps: [0, 4, 7, 10, 9, 6],
    Tendency: ["Any key"],
    "Equal Chords": [{ key: 6, name: "7♭5♭9/♯9" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♯11 NR",
    Intervals: ["3", "5", "♭7", "13", "♯11"],
    steps: [4, 7, 10, 9, 6],
    Tendency: ["All but I & ♭V"],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♯11 N3",
    Intervals: ["1", "5", "♭7", "13", "♯11"],
    steps: [0, 7, 10, 9, 6],
    Tendency: ["All but IV & VI"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "m",
    Intervals: ["1", "♭3", "5"],
    steps: [0, 3, 7],
    Tendency: ["♭VII", "♭III"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "6th"],
        "degrees": [1, 2, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st", "4th", "6th"],
        "degrees": [0, 3, 5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st", "2nd"],
        "degrees": [0, 1]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "4th", "7th"],
        "degrees": [1, 2, 3, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th", "7th"],
        "degrees": [0, 1, 5, 6]
      }
    ]
  },
  {
    Chord: " phrygian",
    Intervals: ["1", "♭2", "5"],
    steps: [0, 1, 7],
    Tendency: ["♭II", "II", "VII"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["2nd", "7th"],
        "degrees": [1, 6]
      }
    ]
  },
  {
    Chord: "m6",
    Intervals: ["1", "♭3", "5", "6"],
    steps: [0, 3, 7, 9],
    Tendency: ["♭VII"],
    "Equal Chords": [{ key: 9, name: "m7♭5" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th", "6th"],
        "degrees": [3, 5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st", "2nd"],
        "degrees": [0, 1]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 3]
      },
      { "Major Bebop": ["2nd", "4th"] }, 
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      }
    ]
  },
  {
    Chord: "m add9",
    Intervals: ["1", "♭3", "5", "9"],
    steps: [0, 3, 7, 2],
    Tendency: ["♭VII", "♭III"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "6th"],
        "degrees": [1, 5]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th", "7th"],
        "degrees": [1, 3, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th"],
        "degrees": [0, 1, 5]
      }
    ]
  },
  {
    Chord: "m add11",
    Intervals: ["1", "♭3", "5", "11"],
    steps: [0, 3, 7, 5],
    Tendency: ["♭VII", "♭III"],
    "Equal Chords": [{ key: 5, name: "7sus2" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "6th"],
        "degrees": [1, 2, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "7th"],
        "degrees": [1, 2, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th", "7th"],
        "degrees": [0, 1, 5, 6]
      }
    ]
  },
  {
    Chord: "m6 add9",
    Intervals: ["1", "♭3", "5", "6", "9"],
    steps: [0, 3, 7, 9, 2],
    Tendency: ["♭VII"],
    "Equal Chords": [
      { key: 2, name: "7sus ♭9" },
      { key: 9, name: "m11♭5" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 2]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      }
    ]
  },
  {
    Chord: "m6 add9 NR",
    Intervals: ["♭3", "5", "6", "9"],
    steps: [3, 7, 9, 2],
    Tendency: ["♭VII"],
    "Equal Chords": [
      { key: 3, name: "maj7♭5" },
      { key: 11, name: "7♯5♯9 NR" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      }
    ]
  },
  {
    Chord: "m7",
    Intervals: ["1", "♭3", "5", "♭7"],
    steps: [0, 3, 7, 10],
    Tendency: ["♭VI", "♭VII", "♭III"],
    "Equal Chords": [{ key: 3, name: "6" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "6th"],
        "degrees": [1, 2, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "7th", "8th"],
        "degrees": [1, 2, 6, 7]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th", "7th"],
        "degrees": [0, 1, 5, 6]
      }
    ]
  },
  {
    Chord: "m7 N5",
    Intervals: ["1", "♭3", "♭7"],
    steps: [0, 3, 10],
    Tendency: ["♭VI", "♭VII", "♭III"],
    "Equal Chords": [{ key: 3, name: "6" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "6th", "7th"],
        "degrees": [1, 2, 5, 6]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd", "6th", "7th"],
        "degrees": [1, 5, 6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "7th", "8th"],
        "degrees": [1, 2, 6, 7]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th", "7th"],
        "degrees": [0, 1, 5, 6]
      }
    ]
  },
  {
    Chord: "m9",
    Intervals: ["1", "♭3", "5", "♭7", "9"],
    steps: [0, 3, 7, 10, 2],
    Tendency: ["♭VI", "♭VII", "♭III"],
    "Equal Chords": [{ key: 3, name: "maj13" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "6th"],
        "degrees": [1, 5]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th", "6th"],
        "degrees": [1, 3, 5]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th"],
        "degrees": [0, 1, 5]
      }
    ]
  },
  {
    Chord: "m9 N5",
    Intervals: ["1", "♭3", "♭7", "9"],
    steps: [0, 3, 10, 2],
    Tendency: ["♭VI", "♭VII"],
    "Equal Chords": [{ key: 2, name: "7♯5♭9 N3" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "6th"],
        "degrees": [1, 5]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th", "6th"],
        "degrees": [1, 3, 5]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th"],
        "degrees": [0, 1, 5]
      }
    ]
  },
  {
    Chord: "m11",
    Intervals: ["1", "♭3", "5", "♭7", "11"],
    steps: [0, 3, 7, 10, 5],
    Tendency: ["♭III", "♭VI", "♭VII"],
    "Equal Chords": [
      { key: 3, name: "6 add9" },
      { key: 5, name: "9sus" },
      { key: 10, name: "6 sus add9" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "6th"],
        "degrees": [1, 2, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "6th"],
        "degrees": [1, 2, 5]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "6th", "7th"],
        "degrees": [0, 1, 5, 6]
      }
    ]
  },
  {
    Chord: "m13",
    Intervals: ["1", "♭3", "5", "♭7", "13"],
    steps: [0, 3, 7, 10, 9],
    Tendency: ["♭VII"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      },
      {
        "scale": "",
        "ordinals": ["2nd", "3rd", "6th"],
        "degrees": [1, 2, 5]
      }
    ]
  },
  {
    Chord: "m13 N5",
    Intervals: ["1", "♭3", "♭7", "13"],
    steps: [0, 3, 10, 9],
    Tendency: ["♭VII"],
    "Equal Chords": [{ key: 5, name: "11 NR" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      }
    ]
  },
  {
    Chord: "m-maj7",
    Intervals: ["1", "♭3", "5", "7"],
    steps: [0, 3, 7, 11],
    Tendency: ["♭VII", "I", "V"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "m-maj7 N5",
    Intervals: ["1", "♭3", "7"],
    steps: [0, 3, 11],
    Tendency: ["♭VII", "I", "V"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "m9-maj7",
    Intervals: ["1", "♭3", "5", "7", "9"],
    steps: [0, 3, 7, 11, 2],
    Tendency: ["♭VII", "I", "V"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "sus2",
    Intervals: ["1", "2", "5"],
    steps: [0, 2, 7],
    Tendency: ["I", "V"],
    "Equal Chords": [{ key: 7, name: "sus" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "2nd", "4th", "5th", "6th"],
        "degrees": [0, 1, 3, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["2nd", "3rd"],
        "degrees": [1, 2]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["2nd", "3rd"],
        "degrees": [1, 2]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st", "4th"],
        "degrees": [0, 3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st", "4th", "5th"],
        "degrees": [0, 3, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "2nd", "4th", "5th", "7th"],
        "degrees": [0, 1, 3, 4, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "3rd", "5th", "6th", "8th"],
        "degrees": [0, 1, 2, 4, 5, 7]
      }
    ]
  },
  {
    Chord: "sus",
    Intervals: ["1", "4", "5"],
    steps: [0, 5, 7],
    Tendency: ["I", "IV"],
    "Equal Chords": [{ key: 5, name: "sus2" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "2nd", "3rd", "5th", "6th"],
        "degrees": [0, 1, 2, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["3rd", "6th"],
        "degrees": [2, 5]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st", "5th"],
        "degrees": [0, 4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st", "2nd", "5th"],
        "degrees": [0, 1, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "2nd", "3rd", "5th", "7th"],
        "degrees": [0, 1, 2, 4, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "5th", "6th", "7th", "8th"],
        "degrees": [0, 1, 4, 5, 6, 7]
      }
    ]
  },
  {
    Chord: "sus add9",
    Intervals: ["1", "4", "5", "9"],
    steps: [0, 5, 7, 2],
    Tendency: ["I", "IV"],
    "Equal Chords": [{ key: 7, name: "7sus" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "2nd", "5th", "6th"],
        "degrees": [0, 1, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["3rd", "5th"],
        "degrees": [2, 4]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["3rd", "6th"],
        "degrees": [2, 5]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "2nd", "5th", "7th"],
        "degrees": [0, 1, 4, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "5th", "6th", "8th"],
        "degrees": [0, 1, 4, 5, 7]
      }
    ]
  },
  {
    Chord: "6 sus",
    Intervals: ["1", "4", "5", "6"],
    steps: [0, 5, 7, 9],
    Tendency: ["I", "IV"],
    "Equal Chords": [
      { key: 5, name: " add9" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "2nd", "5th"],
        "degrees": [0, 1, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st", "2nd"],
        "degrees": [0, 1]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "2nd", "5th"],
        "degrees": [0, 1, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th", "6th", "8th"],
        "degrees": [0, 4, 5, 7]
      }
    ]
  },
  {
    Chord: "6 sus add9",
    Intervals: ["1", "4", "5", "6", "9"],
    steps: [0, 5, 7, 9, 2],
    Tendency: ["I", "IV"],
    "Equal Chords": [
      { key: 2, name: "m11" },
      { key: 5, name: "6 add9" },
      { key: 7, name: "9sus" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st", "2nd", "5th"],
        "degrees": [0, 1, 4]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "2nd", "5th"],
        "degrees": [0, 1, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th", "6th", "8th"],
        "degrees": [0, 4, 5, 7]
      }
    ]
  },
  {
    Chord: "7sus2",
    Intervals: ["1", "2", "5", "♭7"],
    steps: [0, 2, 7, 10],
    Tendency: ["IV", "♭VII"],
    "Equal Chords": [{ key: 7, name: "m add11" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "5th", "6th"],
        "degrees": [1, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "5th"],
        "degrees": [3, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "5th", "7th"],
        "degrees": [1, 4, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "5th", "6th"],
        "degrees": [0, 1, 4, 5]
      }
    ]
  },
  {
    Chord: "7sus",
    Intervals: ["1", "4", "5", "♭7"],
    steps: [0, 5, 7, 10],
    Tendency: ["I", "IV", "V"],
    "Equal Chords": [{ key: 5, name: "sus add9" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "3rd", "5th", "6th"],
        "degrees": [1, 2, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd", "5th"],
        "degrees": [1, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "3rd", "5th", "7th"],
        "degrees": [1, 2, 4, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "5th", "6th", "7th"],
        "degrees": [0, 1, 4, 5, 6]
      }
    ]
  },
  {
    Chord: "7sus ♭9",
    Intervals: ["1", "4", "5", "♭7", "♭9"],
    steps: [0, 5, 7, 10, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [
      { key: 7, name: "m11♭5" },
      { key: 10, name: "m6 add9" }
    ],
    scales: [
      {
        "scale": "",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      { "Major Scale": ["3rd"] }, 
      { "Blues Scale": ["3rd"] }, 
      { "Harmonic Minor": ["5th"] }, 
      { "Melodic Minor": ["2nd"] }, 
      { "Major Bebop": ["3rd"] }, 
      { "Minor Bebop": ["2nd", "7th"] }
    ]
  },
  {
    Chord: "9sus",
    Intervals: ["1", "4", "5", "♭7", "9"],
    steps: [0, 5, 7, 10, 2],
    Tendency: ["I", "♭III", "IV", "V"],
    "Equal Chords": [
      { key: 5, name: "6 sus add9" },
      { key: 7, name: "m11" },
      { key: 10, name: "6 add9" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "5th", "6th"],
        "degrees": [1, 4, 5]
      },
      {
        "scale": "Minor Pentatonic",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "5th", "7th"],
        "degrees": [1, 4, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "2nd", "5th", "6th"],
        "degrees": [0, 1, 4, 5]
      }
    ]
  },
  {
    Chord: "13sus",
    Intervals: ["1", "4", "5", "♭7", "13"],
    steps: [0, 5, 7, 10, 9],
    Tendency: ["I", "IV"],
    "Equal Chords": [{ key: 5, name: "add9/11" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["2nd", "5th"],
        "degrees": [1, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "5th"],
        "degrees": [1, 4]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["1st", "5th", "6th"],
        "degrees": [0, 4, 5]
      }
    ]
  },
  {
    Chord: "13sus ♭9",
    Intervals: ["1", "4", "5", "♭7", "13", "♭9"],
    steps: [0, 5, 7, 10, 9, 1],
    Tendency: ["♭II", "II", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [{ key: 9, name: "7♯5♭9/♯9" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      }
    ]
  },
  {
    Chord: "maj7 sus",
    Intervals: ["1", "4", "5", "7"],
    steps: [0, 5, 7, 11],
    Tendency: ["I", "V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "7th"],
        "degrees": [0, 6]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["5th", "8th"],
        "degrees": [4, 7]
      }
    ]
  },
  {
    Chord: "maj13 sus",
    Intervals: ["1", "4", "5", "7", "13"],
    steps: [0, 5, 7, 11, 13],
    Tendency: ["I", "V"],
    "Equal Chords": [
      { key: 5, name: " add9/♯11" },
      { key: 7, name: "9/11 N5" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["5th", "8th"],
        "degrees": [4, 7]
      }
    ]
  },
  {
    Chord: "dim",
    Intervals: ["1", "♭3", "♭5"],
    steps: [0, 3, 6],
    Tendency: ["♭II"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["2nd", "4th", "6th", "7th"],
        "degrees": [1, 3, 5, 6]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["6th", "7th"],
        "degrees": [5, 6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th", "6th", "8th"],
        "degrees": [1, 3, 5, 7]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "dim7",
    Intervals: ["1", "♭3", "♭5", "♭♭7"],
    steps: [0, 3, 6, 9],
    Tendency: ["♭II", "III", "V", "♭VII"],
    "Equal Chords": [
      { key: 3, name: "dim7" },
      { key: 6, name: "dim7" },
      { key: 9, name: "dim7" }
    ],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["2nd", "4th", "6th", "7th"],
        "degrees": [1, 3, 5, 6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "4th", "6th", "8th"],
        "degrees": [1, 3, 5, 7]
      }
    ]
  },
  {
    Chord: "m7♭5",
    Intervals: ["1", "♭3", "♭5", "♭7"],
    steps: [0, 3, 6, 10],
    Tendency: ["♭II"],
    "Equal Chords": [{ key: 3, name: "m6" }],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["2nd", "4th"],
        "degrees": [1, 3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["6th", "7th"],
        "degrees": [5, 6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "8th"],
        "degrees": [1, 7]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "m9♭5",
    Intervals: ["1", "♭3", "♭5", "♭7", "9"],
    steps: [0, 3, 6, 10, 2],
    Tendency: ["♭II", "V"],
    "Equal Chords": [{ key: 2, name: "7♯5♭9" }],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      }
    ]
  },
  {
    Chord: "m11♭5",
    Intervals: ["1", "♭3", "♭5", "♭7", "11"],
    steps: [0, 3, 6, 10, 5],
    Tendency: ["♭II"],
    "Equal Chords": [
      { key: 3, name: "m6 add9" },
      { key: 5, name: "7sus ♭9" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["2nd"],
        "degrees": [0]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "8th"],
        "degrees": [1, 7]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "dim add11",
    Intervals: ["1", "♭3", "♭5", "11"],
    steps: [0, 3, 6, 5],
    Tendency: ["♭II"],
    "Equal Chords": [
      { key: 3, name: "m6 add9" },
      { key: 5, name: "7sus ♭9" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Blues Scale",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "8th"],
        "degrees": [1, 7]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      }
    ]
  },
  {
    Chord: "m-maj7♭5",
    Intervals: ["1", "♭3", "♭5", "7"],
    steps: [0, 3, 6, 11],
    Tendency: ["I", "♭II", "III", "V"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["2nd"],
        "degrees": [1]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["2nd", "6th"],
        "degrees": [1, 5]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      }
    ]
  },
  {
    Chord: "+",
    Intervals: ["1", "3", "♯5"],
    steps: [0, 4, 8],
    Tendency: ["♭II", "IV", "VI"],
    "Equal Chords": [
      { key: 4, name: "+" },
      { key: 8, name: "+" }
    ],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["3rd", "5th", "7th"],
        "degrees": [2, 4, 6]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["3rd", "5th", "7th"],
        "degrees": [2, 4, 6]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st", "2nd"],
        "degrees": [0, 1]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "3rd", "6th"],
        "degrees": [0, 2, 5]
      }
    ]
  },
  {
    Chord: "7♯5",
    Intervals: ["1", "3", "♯5", "♭7"],
    steps: [0, 4, 8, 10],
    Tendency: ["♭II", "♭III", "IV"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th", "7th"],
        "degrees": [4, 6]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯5♭9",
    Intervals: ["1", "3", "♯5", "♭7", "♭9"],
    steps: [0, 4, 8, 10, 1],
    Tendency: ["♭II", "♭III", "IV", "V", "VI", "VII"],
    "Equal Chords": [
      { key: 6, name: "9/♯11 NR" },
      { key: 10, name: "m9♭5" }
    ],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯5♭9 N3",
    Intervals: ["1", "♯5", "♭7", "♭9"],
    steps: [0, 8, 10, 1],
    Tendency: ["♭II", "♭III", "IV", "V", "VI"],
    "Equal Chords": [{ key: 10, name: "m9 N5" }],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "9♯5",
    Intervals: ["1", "3", "♯5", "♭7", "9"],
    steps: [0, 4, 8, 10, 2],
    Tendency: ["♭III", "IV", "V", "♭VI", "VII"],
    "Equal Chords": [
      { key: 4, name: "7♭5♭13" },
      { key: 10, name: "9♭5" }
    ],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["5th"],
        "degrees": [4]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♯5♯9",
    Intervals: ["1", "3", "♯5", "♭7", "♯9"],
    steps: [0, 4, 8, 10, 3],
    Tendency: ["♭II", "♭III", "III", "IV", "♭VI", "VI", "VII"],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯5♯9 NR",
    Intervals: ["3", "♯5", "♭7", "♯9"],
    steps: [4, 8, 10, 3],
    Tendency: ["IV", "VII"],
    "Equal Chords": [
      { key: 1, name: "m6 add9 NR" },
      { key: 4, name: "maj7♭5" }
    ],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "7♯5♭9/♯9",
    Intervals: ["1", "3", "♯5", "♭7", "♭9", "♯9"],
    steps: [0, 4, 8, 10, 1, 3],
    Tendency: ["♭II", "♭III", "III", "IV", "V", "♭VI", "VI", "VII"],
    "Equal Chords": [{ key: 3, name: "13sus ♭9" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["3rd"],
        "degrees": [2]
      }
    ]
  },
  {
    Chord: "maj7♯5",
    Intervals: ["1", "3", "♯5", "7"],
    steps: [0, 4, 8, 11],
    Tendency: ["IV"],
    scales: [
      {
        "scale": "Harmonic Minor",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["3rd"],
        "degrees": [2]
      },
      {
        "scale": "Augmented",
        "ordinals": ["1st", "3rd", "5th"],
        "degrees": [0, 2, 4]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["1st", "6th"],
        "degrees": [0, 5]
      }
    ]
  },
  {
    Chord: "maj ♭5",
    Intervals: ["1", "3", "♭5"],
    steps: [0, 4, 6],
    Tendency: ["V"],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  },
  {
    Chord: "7♭5",
    Intervals: ["1", "3", "♭5", "♭7"],
    steps: [0, 4, 6, 10],
    Tendency: ["♭II", "IV", "V", "VII"],
    "Equal Chords": [{ key: 6, name: "7♭5" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th", "7th"],
        "degrees": [3, 6]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      },
    ]
  },
  {
    Chord: "7♭5♭9",
    Intervals: ["1", "3", "♭5", "♭7", "♭9"],
    steps: [0, 4, 6, 10, 1],
    Tendency: ["♭II", "IV", "V", "VII"],
    "Equal Chords": [{ key: 6, name: "7♯11" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "maj ♭5 add ♭9",
    Intervals: ["1", "3", "♭5", "♭9"],
    steps: [0, 4, 6, 1],
    Tendency: ["♭II", "IV", "V", "VII"],
    "Equal Chords": [{ key: 6, name: "7♯11" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭5♭9 N3",
    Intervals: ["1", "♭5", "♭7", "♭9"],
    steps: [0, 6, 10, 1],
    Tendency: ["♭II", "IV", "♭V", "♭VI"],
    "Equal Chords": [{ key: 6, name: "add♯11" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭5♯9",
    Intervals: ["1", "3", "♭5", "♭7", "♯9"],
    steps: [0, 4, 6, 10, 3],
    Tendency: ["♭II", "IV", "V", "VII"],
    "Equal Chords": [{ key: 6, name: "13♭5" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭5♯9 NR",
    Intervals: ["3", "♭5", "♭7", "♯9"],
    steps: [4, 6, 10, 3],
    Tendency: ["IV"],
    "Equal Chords": [{ key: 6, name: "13 N5" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭5♭9/♯9",
    Intervals: ["1", "3", "♭5", "♭7", "♭9", "♯9"],
    steps: [0, 4, 6, 10, 1, 3],
    Tendency: ["♭II", "IV", "♭V", "V", "♭VI", "VII"],
    "Equal Chords": [{ key: 6, name: "13♯11" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭5♭13",
    Intervals: ["1", "3", "♭5", "♭7", "♭13"],
    steps: [0, 4, 6, 10, 8],
    Tendency: ["♭II", "IV", "V", "VII"],
    "Equal Chords": [
      { key: 0, name: "7♯5♯11" },
      { key: 6, name: "9♭5" },
      { key: 8, name: "9♯5" }
    ],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "7♭5♭13 NR",
    Intervals: ["3", "♭5", "♭7", "♭13"],
    steps: [4, 6, 10, 8],
    Tendency: ["IV", "VII"],
    "Equal Chords": [{ key: 6, name: "9 N5" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["7th"],
        "degrees": [6]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "9♭5",
    Intervals: ["1", "3", "♭5", "♭7", "9"],
    steps: [0, 4, 6, 10, 2],
    Tendency: ["All but I, III & ♭VI"],
    "Equal Chords": [
      { key: 2, name: "9♯5" },
      { key: 6, name: "7♭5♭13" }
    ],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "9♭5♭13",
    Intervals: ["1", "3", "♭5", "♭7", "9", "♭13"],
    steps: [0, 4, 6, 10, 2, 8],
    Tendency: ["Any key"],
    "Equal Chords": [
      { key: 2, name: "9♭5♭13" },
      { key: 4, name: "9♭5♭13" },
      { key: 6, name: "9♭5♭13" },
      { key: 8, name: "9♭5♭13" }
    ],
    scales: [
      {
        "scale": "Whole Tone",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5",
    Intervals: ["1", "3", "♭5", "♭7", "13"],
    steps: [0, 4, 6, 10, 9],
    Tendency: ["♭II", "IV", "♭V", "V", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "7♭5♯9" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5 NR",
    Intervals: ["3", "♭5", "♭7", "13"],
    steps: [4, 6, 10, 9],
    Tendency: ["IV", "♭V", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "7♯9 N5" }],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5 N3",
    Intervals: ["1", "♭5", "♭7", "13"],
    steps: [0, 6, 10, 9],
    Tendency: ["♭II", "♭V", "V", "♭VII"],
    scales: [
      {
        "scale": "Melodic Minor",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5♭9",
    Intervals: ["1", "3", "♭5", "♭7", "13", "♭9"],
    steps: [0, 4, 6, 10, 9, 1],
    Tendency: ["Any key"],
    "Equal Chords": [{ key: 6, name: "7♯9♯11" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "maj♭5 6 add ♭9",
    Intervals: ["1", "3", "♭5", "13", "♭9"],
    steps: [0, 4, 6, 9, 1],
    Tendency: ["Any key"],
    "Equal Chords": [{ key: 6, name: "7♯9♯11" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5♭9 N3",
    Intervals: ["1", "♭5", "♭7", "13", "♭9"],
    steps: [0, 6, 10, 9, 1],
    Tendency: ["All but I, IV, VI & VII"],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5♯9",
    Intervals: ["1", "3", "♭5", "♭7", "13", "♯9"],
    steps: [0, 4, 6, 10, 9, 3],
    Tendency: ["Any key"],
    "Equal Chords": [{ key: 6, name: "13♭5♯9" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "maj♭5 6 add ♯9",
    Intervals: ["1", "3", "♭5", "13", "♯9"],
    steps: [0, 4, 6, 9, 3],
    Tendency: ["Any key"],
    "Equal Chords": [{ key: 6, name: "13♭5♯9" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "13♭5♯9 NR",
    Intervals: ["3", "♭5", "♭7", "13", "♯9"],
    steps: [4, 6, 10, 9, 3],
    Tendency: ["♭II", "IV", "♭V", "V", "♭VII", "VII"],
    "Equal Chords": [{ key: 6, name: "13♯9 N5" }],
    scales: [
      {
        "scale": "HW Diminished",
        "ordinals": ["1st"],
        "degrees": [0]
      }
    ]
  },
  {
    Chord: "maj7♭5",
    Intervals: ["1", "3", "♭5", "7"],
    steps: [0, 4, 6, 11],
    Tendency: ["V"],
    "Equal Chords": [
      { key: 9, name: "m6 add9 NR" },
      { key: 10, name: "7♯5♯9 NR" }
    ],
    scales: [
      {
        "scale": "Major Scale",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Harmonic Minor",
        "ordinals": ["6th"],
        "degrees": [5]
      },
      {
        "scale": "Major Bebop",
        "ordinals": ["4th"],
        "degrees": [3]
      },
      {
        "scale": "Minor Bebop",
        "ordinals": ["3rd", "8th"],
        "degrees": [2, 7]
      }
    ]
  }
];
