const state = {
  intent: '',
  approach: '',
  modifier: 0,
  job: 1,
  crew: 1,
  threat: 0,
};

const $ = (selector) => document.querySelector(selector);
const all = (selector) => [...document.querySelectorAll(selector)];

function updateRollAvailability() {
  $('#roll-button').disabled = !(state.intent && state.approach);
  $('#selected-intent').textContent = state.intent || 'Choose an intent first';
  $('#roll-hint').textContent = state.intent && state.approach
    ? `${state.approach} selected. What are you willing to risk?`
    : 'Select an intent and approach to resolve the scene.';
}

function setSelected(items, selected) {
  items.forEach((item) => {
    item.classList.toggle('selected', item === selected);
    item.setAttribute('aria-pressed', item === selected ? 'true' : 'false');
  });
}

function updateTrack(name, value) {
  const clamped = Math.max(0, Math.min(6, value));
  state[name] = clamped;
  $(`#${name}-value`).textContent = `${clamped}/6`;
  $(`#${name}-track`).style.width = `${(clamped / 6) * 100}%`;
  if (name === 'threat') {
    $('#threat-track').setAttribute('aria-valuenow', String(clamped));
  }
}

function resolveRoll() {
  const die = Math.floor(Math.random() * 20) + 1;
  const total = die + state.modifier;
  const result = total >= 16 ? 'Full success' : total >= 10 ? 'Success with a cost' : 'Setback';
  let consequence;

  if (result === 'Full success') {
    updateTrack('job', state.job + 1);
    consequence = `You ${state.intent.toLowerCase()}. Mark Job and gain a clear clue.`;
  } else if (result === 'Success with a cost') {
    updateTrack('job', state.job + 1);
    updateTrack('threat', state.threat + 1);
    consequence = `You ${state.intent.toLowerCase()}, but the bell rings. Mark Job and advance Threat.`;
  } else {
    updateTrack('threat', state.threat + 1);
    consequence = `The chapel shifts before you can ${state.intent.toLowerCase()}. Advance Threat and choose a new risk.`;
  }

  $('#roll-result').textContent = `d20: ${die} ${state.modifier >= 0 ? '+' : '−'} ${Math.abs(state.modifier)} = ${total} · ${result}`;
  $('#scene-log').textContent = `The Bell Beneath the Mire: ${consequence}`;
  $('#roll-hint').textContent = 'The table has changed. You may try another approach to see a different consequence.';
  $('#roll-button').textContent = 'Roll again';
}

all('.intent-button').forEach((button) => {
  button.addEventListener('click', () => {
    state.intent = button.dataset.intent;
    setSelected(all('.intent-button'), button);
    updateRollAvailability();
  });
});

all('.approach-button').forEach((button) => {
  button.addEventListener('click', () => {
    state.approach = button.dataset.attribute;
    state.modifier = Number(button.dataset.modifier);
    setSelected(all('.approach-button'), button);
    updateRollAvailability();
  });
});

$('#roll-button').addEventListener('click', resolveRoll);
updateRollAvailability();
