const titleChord = document.getElementById('title-chord');
const results = document.getElementById('results');

// Reset the page and the variables so user can enter another chord
export function resetAllData(arr, arr2) {
  arr.length = 0;
  arr2.length = 0;

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
  degreesTitle.append(document.createTextNode('Scale degrees that build '))

  const degreesTitleChord = document.createElement('span');
  degreesTitleChord.append(document.createTextNode(`${str}:`))
  
  degreesTitle.append(degreesTitleChord)
  card.append(degreesTitle)

  const degreesOl = document.createElement('ol');
  degreesOl.className = 'scale-degrees-list';

  arr.forEach(scale => {
    const li = document.createElement('li');
    const liText = document.createTextNode(`${Object.keys(scale)}: ${Object.values(scale)}`);

    li.append(liText);
    degreesOl.append(li)
  });

  card.append(degreesOl) 
  results.append(card)
}