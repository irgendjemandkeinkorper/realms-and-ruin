const state = {
  scene: '',
  contribution: '',
  interpretations: [],
  activePlayer: 0,
  canonIndex: -1,
};

const $ = (selector) => document.querySelector(selector);
const all = (selector) => [...document.querySelectorAll(selector)];
const names = ['Storyteller One', 'Storyteller Two', 'Storyteller Three'];
let artStyle = 'painterly';

function updateArtStyle(style) {
  artStyle = style;
  all('[data-art-style]').forEach((button) => {
    const selected = button.dataset.artStyle === style;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  all('[data-art-key]').forEach((image) => {
    image.src = `art/images/${artStyle}/${image.dataset.artKey}.png`;
  });
  document.body.dataset.artStyle = style;
}

function setPhase(current) {
  const phases = ['hook', 'heroes', 'scene', 'resolve'];
  phases.forEach((phase, index) => {
    const element = $(`#phase-${phase}`);
    element.classList.toggle('active', phase === current);
    element.classList.toggle('done', index < phases.indexOf(current));
  });
}

function updateLockState() {
  $('#lock-button').disabled = !(state.contribution && $('#private-note').value.trim());
}

function selectCard(button, selector) {
  state[selector] = button.dataset.card || button.dataset.scene;
  all(`.${selector === 'scene' ? 'scene-card' : 'contribution-card'}`).forEach((item) => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  if (selector === 'contribution') updateLockState();
}

function chooseHook() {
  $('#hook-stage').classList.add('hidden');
  $('#scene-stage').classList.remove('hidden');
  $('#board-title').textContent = 'Deal the Scene';
  $('#scene-log').textContent = 'The Drowned Bell is chosen. The Scene deck is ready.';
  setPhase('scene');
}

function chooseScene(button) {
  selectCard(button, 'scene');
  $('#active-scene').textContent = `${state.scene}: the shared moment is open. Now each storyteller adds one private reading.`;
  $('#active-scene').classList.remove('hidden');
  $('#contribution-stage').classList.remove('hidden');
  $('#board-title').textContent = state.scene;
  $('#scene-log').textContent = `${state.scene} is on the table. Contributions are still hidden.`;
  button.closest('.scene-deck').querySelectorAll('button').forEach((item) => { item.disabled = true; });
}

function showActiveStoryteller() {
  $('#storyteller-label').textContent = `${names[state.activePlayer]} · ${state.activePlayer + 1} of 3`;
  $('#contribution-instruction').textContent = state.activePlayer === 0
    ? 'Choose one Scene or Portent card privately. Add the meaning you want the table to notice.'
    : 'Pass the screen to the next storyteller. Keep the previous card choices and readings hidden.';
  $('#private-note').value = '';
  state.contribution = '';
  all('.contribution-card').forEach((item) => { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
  updateLockState();
}

function lockContribution() {
  state.interpretations.push({
    player: names[state.activePlayer],
    card: state.contribution,
    note: $('#private-note').value.trim(),
  });
  $('#lock-button').disabled = true;
  $('#privacy-note').textContent = 'Locked. Pass the screen without discussing your card or reading.';
  if (state.activePlayer < names.length - 1) {
    $('#lock-button').classList.add('hidden');
    const pass = document.createElement('button');
    pass.className = 'primary action-button';
    pass.id = 'pass-button';
    pass.textContent = 'Pass to the next storyteller';
    pass.addEventListener('click', () => {
      pass.remove();
      $('#lock-button').classList.remove('hidden');
      state.activePlayer += 1;
      showActiveStoryteller();
    });
    $('#lock-button').after(pass);
  } else {
    $('#lock-button').classList.add('hidden');
    $('#reveal-button').classList.remove('hidden');
    $('#privacy-note').textContent = 'All contributions are locked. Reveal the stack when the table is ready.';
  }
}

function renderStack() {
  const row = $('#stack-row');
  row.innerHTML = `<div class="game-card stack-card"><span class="card-type">QUEST</span><strong>The Drowned Bell</strong></div><div class="game-card stack-card"><span class="card-type">SCENE</span><strong>${state.scene}</strong></div>`;
  state.interpretations.forEach((entry) => {
    row.insertAdjacentHTML('beforeend', `<div class="game-card stack-card"><span class="card-type">${entry.card.includes('Debt') ? 'PORTENT' : 'SCENE'}</span><strong>${entry.card}</strong></div>`);
  });
}

function revealStack() {
  $('#scene-stage').classList.add('hidden');
  $('#resolve-stage').classList.remove('hidden');
  $('#board-title').textContent = 'Resolve the Card Stack';
  renderStack();
  const list = $('#canon-list');
  list.innerHTML = '';
  state.interpretations.forEach((entry, index) => {
    const item = document.createElement('article');
    item.className = 'canon-entry';
    item.innerHTML = `<p><strong>${entry.player}</strong> played <em>${entry.card}</em>: ${entry.note}</p>`;
    const button = document.createElement('button');
    button.className = 'ghost canon-button';
    button.textContent = 'Make this canon';
    button.addEventListener('click', () => {
      state.canonIndex = index;
      all('.canon-entry').forEach((card, cardIndex) => card.classList.toggle('selected', cardIndex === index));
      $('#resolve-button').disabled = false;
    });
    item.append(button);
    list.append(item);
  });
  setPhase('resolve');
}

function resolveScene() {
  const canon = state.interpretations[state.canonIndex];
  $('#resolve-stage').classList.add('hidden');
  $('#complete-stage').classList.remove('hidden');
  $('#board-title').textContent = 'The Dossier Remembers';
  $('#canon-summary').textContent = `The table made ${canon.player}'s reading true: ${canon.note}`;
  $('#scene-log').textContent = `${state.scene}: ${canon.note}`;
  setPhase('resolve');
}

$('#hook-button').addEventListener('click', chooseHook);
all('.scene-card').forEach((button) => button.addEventListener('click', () => chooseScene(button)));
all('.contribution-card').forEach((button) => button.addEventListener('click', () => selectCard(button, 'contribution')));
$('#private-note').addEventListener('input', updateLockState);
$('#lock-button').addEventListener('click', lockContribution);
$('#reveal-button').addEventListener('click', revealStack);
$('#resolve-button').addEventListener('click', resolveScene);
all('[data-art-style]').forEach((button) => button.addEventListener('click', () => updateArtStyle(button.dataset.artStyle)));
