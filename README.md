# What Chord Is This?

"**_What Chord Is This?_**" is a lightweight web app that helps musicians identify chords instantly. Enter three or more fret numbers and the app returns the matching chord (or an error if no chord is found). Supports Guitar, Banjo, Mandolin, and Ukulele. Built with pure HTML, CSS, and JavaScript.

## Features

- **Multi-instrument support:** Handles Guitar (default), Banjo, Mandolin, and Ukulele, each with customizable tunings.
- **Tuning configurations:** Each instrument comes with multiple preset tunings:
  - Guitar: 13 tunings (default: E-A-D-G-B-E)
  - Banjo: 11 tunings (default: D-D-G-B-D)
  - Mandolin: 9 tunings (default: G-D-A-E)
  - Ukulele: 6 tunings (default: D-G-B-E)
- **Key handling:** Users can select sharp (default) or flat keys, which affects chord name generation.
- **Chord detection logic:** The app accepts three or more fret numbers per instrument and:
  - Maps frets to notes based on instrument and tuning
  - Validates if the combination forms a known chord
  - Calculates intervals and identifies chord tendencies
  - Determines all other chord names that match the same notes
  - Computes the scale degrees for each note and associated scales
- **Pure JS implementation:** All chord mapping, tuning logic, and interval calculations are handled with vanilla JavaScript, without any frameworks, making the codebase lightweight and easy to extend.

## Demos

Below are screenshots showing the main components of the app:

1. **Settings Form:** Choose the instrument, tuning, and key (sharp or flat).
2. **Fret Number Inputs:** Enter three or more fret numbers to identify a chord.
3. **Results Output Cards:** View the detected chord name, intervals, scale degrees, tendencies, and other chord names that match the same notes.

These screenshots illustrate how the app handles input and displays chord analysis for Guitar, Banjo, Mandolin, and Ukulele.

<!-- Add shot of both forms and results cards -->

## Getting Started / Installation

To run this project locally, clone the repository:

```sh
git clone https://github.com/Kernix13/what-chord-is-this.git
cd what-chord-is-this
```

### Prerequisites

- A modern browser (ES6 modules are used via <script type="module">)
- For local testing, a simple server is recommended to avoid CORS issues (opening index.html directly may work in some browsers).

### Running Locally

If you’re using VS Code, the easiest way is with the Live Server extension:

- Open the project folder in VS Code.
- Right-click index.html → Open with Live Server.

> ⚠️ If you’re not using VS Code/Live Server, you can still run a local server with:

Python (if installed):

```sh
python3 -m http.server
```

Node.js:

```sh
npx http-server .
```

Then open the server URL in your browser (e.g., http://localhost:8000).

## Notes

- The project uses ES6 modules (`<script type="module">`), so it requires a modern browser.
- Opening index.html directly may work in some browsers, but a local server avoids potential CORS restrictions.

## Usage

1. Click **Show Settings** to select the instrument (default: Guitar), tuning (default: Standard), and key (default: sharp).
2. Enter fret numbers for the chord:
   - Use `0` for open strings.
   - Leave muted strings blank.
3. Press **Submit** to see the results.
4. View the chord analysis:
   - Chord name
   - Unique notes and intervals
   - Chord tendencies
   - Other chord names that match the same notes
   - Associated scales and scale degrees
5. To enter a new chord:
   - Reset the page, or
   - Click **Show Settings** to change the instrument, tuning, or key.

## Project Structure

The project is organized as follows:

```
├── .gitignore
├── CHANGELOG.md                    # Project version history and changes
├── README.md                       #
├── index.html                      # Main HTML page
├── css/
│   └── style.css                   # Main stylesheet
├── js/
│   ├── index.js                    # Entry point; imports modules, event listeners
│   ├── data/
│   │   ├── chord-intervals.js      # Array of the chord objects with chord info
│   │   ├── chord-intervals.json    # (Optional; reserved for future API use)
│   │   └── constants.js            # Constants used across the app
│   ├── modules/
│   │   ├── buildUserStrings.js     # Generates a 12-note array for each string
│   │   ├── fixEnharmonics.js       # Corrects chord note names for enharmonics
│   │   ├── getUserNotes.js         # Converts user-entered fret numbers into notes
│   │   └── searchForChordMatch.js  # Searches chord-intervals.js for matching chords
│   ├── ui/
│   │   ├── eventHandlers.js        # Functions for event listeners
│   │   ├── renderErrors.js         # Functions to render error messages
│   │   ├── renderResults.js        # Functions to display chord result cards
│   │   └── setupForms.js           # Functions to populate tunings and fret inputs
│   └── utils/
│       └── storage.js              # LocalStorage get/set functions
```

### Notes

- All JavaScript files are currently in the root or subfolders (`modules/`, `ui/`, `utils/`). They could be moved to a `js/` folder for cleaner organization in future refactors.
- `chord-intervals.json` is included for potential API or external data usage; currently, `chord-intervals.js` is used in the app logic.

## Future Improvements

Planned enhancements and potential features for upcoming versions:

1. **Custom tunings:** Allow users to define their own instrument tunings beyond the preset options.
2. **Scale and mode support:** Display the actual note values for scales and modes that build the chord, improving educational value.
3. **Deployment and hosting:** Publish the app to a live environment (Netlify or personal website) for easy access.
4. **Improved UI/UX:** Refine styling, responsive layout, and accessibility features, including better keyboard navigation and screen reader support.

## Contributing

Contributions are welcome! If you find bugs, have suggestions, or want to add features, feel free to:

- Open an issue describing the problem or feature request.
- Fork the repository and submit a pull request with your changes.

Please ensure any code contributions follow the existing code style and include comments where necessary.

## License

<!-- If you want to allow others to freely use your code, MIT is a common, simple choice. Here’s a concise way to put it in your README: -->

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

> `LICENSE` coming soon...

## Acknowledgements

This project was inspired by the need for a simple, framework-free chord identification tool for fretted string instruments.
