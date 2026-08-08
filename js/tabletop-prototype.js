const state = {
  interpretations: [],
  activePlayer: 0,
  selected: '',
  canonIndex: -1,
};

const $ = (selector) => document.querySelector(selector);
const all = (selector) => [...document.querySelectorAll(selector)];
const names = ['Storyteller One', 'Storyteller Two', 'Storyteller Three'];

function updateLockState() {
  $('#lock-button').disabled = !(state.selected && $('#private-note').value.trim());
}

function selectInterpretation(button) {
  state.selected = button.dataset.interpretation;
  all('.interpretation-button').forEach((item) => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  updateLockState();
}

function showActiveStoryteller() {
  $('#phase-label').textContent = `${names[state.activePlayer]} · ${state.activePlayer + 1} of 3`;
  $('#phase-instruction').textContent = state.activePlayer === 0
    ? 'Choose what you believe is happening. The other storytellers should look away.'
    : 'Pass the screen to the next storyteller. Keep the previous interpretations hidden.';
  $('#private-note').value = '';
  state.selected = '';
  all('.interpretation-button').forEach((item) => {
    item.classList.remove('selected');
    item.setAttribute('aria-pressed', 'false');
  });
  updateLockState();
}

function lockInterpretation() {
  state.interpretations.push({
    player: names[state.activePlayer],
    interpretation: state.selected,
    note: $('#private-note').value.trim(),
  });
  $('#privacy-note').textContent = 'Locked. Pass the screen without discussing your interpretation.';
  $('#lock-button').disabled = true;
  if (state.activePlayer < names.length - 1) {
    $('#lock-button').classList.add('hidden');
    $('#pass-button')?.remove();
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
    $('#lock-button').textContent = 'All interpretations locked';
    $('#lock-button').classList.add('hidden');
    $('#signal-button').classList.remove('hidden');
    $('#privacy-note').textContent = 'Everyone has committed. Reveal the Signal when the table is ready.';
  }
}

function revealSignal() {
  $('#story-panel').classList.add('hidden');
  $('#reveal-panel').classList.remove('hidden');
  renderReveals();
}

function renderReveals() {
  const list = $('#reveal-list');
  list.innerHTML = '';
  state.interpretations.forEach((entry, index) => {
    const card = document.createElement('article');
    card.className = 'reveal-card';
    card.innerHTML = `<h3>${entry.player}</h3><p><strong>${entry.interpretation}</strong> — ${entry.note}</p>`;
    const choose = document.createElement('button');
    choose.className = 'ghost canon-button';
    choose.textContent = 'Make this canon';
    choose.addEventListener('click', () => {
      state.canonIndex = index;
      all('.reveal-card').forEach((item, itemIndex) => item.classList.toggle('selected', itemIndex === index));
      $('#resolve-button').disabled = false;
    });
    card.append(choose);
    list.append(card);
  });
}

function resolveScene() {
  const canon = state.interpretations[state.canonIndex];
  $('#reveal-panel').classList.add('hidden');
  $('#next-panel').classList.remove('hidden');
  $('#canon-text').textContent = `${canon.interpretation}: ${canon.note}`;
  $('#canon-summary').textContent = `The table made ${canon.player}'s interpretation true: ${canon.interpretation.toLowerCase()}.`;
  $('#scene-log').textContent = `The Bell Beneath the Mire: ${canon.note}`;
}

all('.interpretation-button').forEach((button) => button.addEventListener('click', () => selectInterpretation(button)));
$('#private-note').addEventListener('input', updateLockState);
$('#lock-button').addEventListener('click', lockInterpretation);
$('#signal-button').addEventListener('click', revealSignal);
$('#resolve-button').addEventListener('click', resolveScene);
updateLockState();
