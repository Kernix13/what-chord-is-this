import { setLocalStorage } from "../utils/storage.js";

const titleChord = document.getElementById('title-chord');
const results = document.getElementById('results');

// Reset the page and the variables so user can enter another chord
export function resetAllData(...arrays) {
  // Clear all arrays passed in
  arrays.forEach(arr => arr.length = 0);

  // Clear local storage for the saved chord data
  setLocalStorage('chordName', '');
  setLocalStorage('foundChord', {});
  setLocalStorage('scaleFromUniqueNote', []);
  setLocalStorage('userFretNumbers', []);

  // Reset UI
  titleChord.innerText = '';
  results.innerText = '';

  const errorOutput = document.getElementById("error-output");
  errorOutput.textContent = '';
  errorOutput.classList.remove('show');
}

// Function to create the title card
export function createTitleCard(text) {
  const card = document.createElement('div')
  card.className = 'title-card';

  const heading = document.createElement('h2');
  heading.className = 'title-chord';
  heading.append(document.createTextNode('Chord name: '));
  card.append(heading);

  const p = document.createElement('p');
  p.className = 'chord-name'
  p.append(document.createTextNode(text));
  card.append(p);

  titleChord.append(card);
}

// Function to create the results cards
export function createCard(classes, text) {
  const card = document.createElement('div')
  card.className = 'card';

  const heading = document.createElement('h3');
  heading.className = 'title';
  heading.append(document.createTextNode(text[0]));
  card.append(heading);

  const p = document.createElement('p');
  p.className = 'result'
  p.classList.add(classes)
  p.append(document.createTextNode(text[1]));

  card.append(p);
  results.append(card);
}

// Function to create the scale degrees card
export function createScaleDegreesCard(str, arr) {
  const card = document.createElement('div');
  card.className = 'card scale-degrees';

  const degreesTitle = document.createElement('h3');
  const degreesTitleChord = document.createElement('span');
  const degreesOl = document.createElement('ol');

  degreesTitle.append(document.createTextNode('Scale degrees that build '))
  degreesTitleChord.append(document.createTextNode(`${str}:`))
  degreesTitle.append(degreesTitleChord)
  card.append(degreesTitle)

  degreesOl.className = 'scale-degrees-list';

  arr.forEach(scale => {
    const li = document.createElement('li');
    const liText = document.createTextNode(`${scale.scale}: ${scale.ordinals.join(', ')}`);

    li.append(liText);
    degreesOl.append(li)
  });

  const a = document.createElement('a')
  a.setAttribute('href', '#')
  a.append(document.createTextNode('See the notes in these modes for this chord ⇾'))

  card.append(degreesOl) 
  card.append(a)
  results.append(card)
}

// Function to create the interval: notes card
export function createDegreesNotesCard(arr) {
  const card = document.createElement('div');
  card.className = 'card degrees-notes';

  const degreesTitle = document.createElement('h3');
  degreesTitle.append(document.createTextNode('Degrees & notes:'))
  card.append(degreesTitle)

  const ul = document.createElement('ul');
  ul.className = 'degrees-notes-list';

  arr.forEach(item => {
    const li = document.createElement('li');
    const liText = document.createTextNode(item);

    li.append(liText);
    ul.append(li)
  });

  card.append(ul) 
  results.append(card)
}