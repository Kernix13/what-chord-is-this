# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-09-20

### Added

- Implemented utility functions for localStorage (`getLocalStorage` and `setLocalStorage`) in `utils/storage.js` to manage instrument/tuning selection, fret number inputs, and sharp/flat keys. (Issue #1)

## [Unreleased] - 2025-09-21

### Added

- Create ui functions to load tunings and strings into DOM. (Issue #5)

## [Unreleased] - 2025-09-21

### Added

- Created `toggleSettingsForm` function to be called in the listener for the `settingsBtn` in index.js. (Issue #9)

## [Unreleased] - 2025-09-21

### Added

- Created `onFirstVisit` function for DOMContentLoaded listener. (Issue #7)

## [Unreleased] - 2025-09-21

### Added

- Created `onInstrumentChange` function for instrument select list listener. (Issue #11)

## [Unreleased] - 2025-09-21

### Added

- Created `onTuningChange` function for tunings select list listener. (Issue #15)

## [Unreleased] - 2025-09-21

### Added

- Created `resetAllData` function for the event listeners. (Issue #12)

## [Unreleased] - 2025-09-21

### Added

- Created `onKeyChange` function for keys radio buttons listener. (Issue #17)

## [Unreleased] - 2025-09-21

### Added

- Created `modules/buildUserStrings` to build 12-note arrays for each instrument string based on the tuning and keys setting. (Issue #21)

## [Unreleased] - 2025-09-21

### Added

- Created `modules/getUserNotes` to convert the user fret numbers to note values. (Commit 92381e1)

## [Unreleased] - 2025-09-21

### Added

- Created 12-note arrays for each unique user note. (Issue #24)

## [Unreleased] - 2025-09-21

### Added

- Created logic in `getChordName` in index.js to convert unique user notes to intervals and then build an object: { interval: note }. (Issue #25)

## [Unreleased] - 2025-09-21

### Added

- Created the function `modules/fixEnharmonics` to fix edge cases for the chord name. (Issue #27)

## [Unreleased] - 2025-09-21

### Added

- Created the function `modules/searchForChordMatch` to fix edge cases for the chord name. (Issue #28)

## [Unreleased] - 2025-09-21

### Added

- Created the functions `createTitleCard`, `createCard`, and `createScaleDegreesCard`. (Issue #33)

## [Unreleased] - 2025-09-21

### Added

- Created the functions notEnoughNotesError and noMatchError to handle errors (Issue #35)
