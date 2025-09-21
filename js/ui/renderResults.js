const titleChord = document.getElementById('title-chord');
const results = document.getElementById('results');

export function resetAllData(arr, arr2) {
  arr.length = 0;
  arr2.length = 0;

  titleChord.innerText = '';
  results.innerText = '';

  const errorOutput = document.getElementById("error-output");
  errorOutput.textContent = '';
  errorOutput.classList.remove('show');
}