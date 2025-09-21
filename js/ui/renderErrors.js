const errorOutput = document.getElementById("error-output");

// Error function for not enough notes entered by user
export function notEnoughNotesError(notes) {
    errorOutput.classList.add('show');

    const errorMsg = "That is not a chord. Enter at least 3 unique chord tones or check your sharp/flat selection.";
    const userNotes = notes.join('-')

    errorOutput.innerText = `⚠️  Your notes: ${userNotes}. ${errorMsg}`;
}

// Error function is user enter 3 or more unique notes but they do not match a chord
export function noMatchError(notes) {
  errorOutput.classList.add('show');

  const errorMsg = "That is not a valid chord or it is not in our database. Check the tuning and/or sharp/flat key radio buttons.";
  const userNotes = notes.join("-");

  errorOutput.innerText = `⚠️  Your notes: ${userNotes}. ${errorMsg}`
  console.log(userNotes, errorMsg)
}