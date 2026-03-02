const PURCHASE_PRICE_EL = document.getElementById('purchasePrice');
const PARTICIPANTS_COUNT_EL = document.getElementById('participantsCount');
const EQUAL_SHARE_EL = document.getElementById('equalShare');
const FORM = document.getElementById('participantForm');
const LEDGER = document.getElementById('ledger');
const FORM_MESSAGE = document.getElementById('formMessage');
const COUNTY_SELECT = document.getElementById('county');

const COUNTIES = [
  'Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia',
  'Cowlitz', 'Douglas', 'Ferry', 'Franklin', 'Garfield', 'Grant',
  'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas',
  'Klickitat', 'Lewis', 'Lincoln', 'Mason', 'Okanogan', 'Pacific',
  'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania',
  'Snohomish', 'Spokane', 'Stevens', 'Thurston', 'Wahkiakum',
  'Walla Walla', 'Whatcom', 'Whitman', 'Yakima'
];

function currency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function formatDate(ts) {
  return new Date(ts).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function renderLedger(items) {
  LEDGER.innerHTML = '';

  if (items.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No entries yet.';
    LEDGER.appendChild(li);
    return;
  }

  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = `${item.initials} — ${item.county} (${formatDate(item.createdAt)})`;
    LEDGER.appendChild(li);
  }
}

function renderStats(stats) {
  PURCHASE_PRICE_EL.textContent = currency(stats.purchasePrice);
  PARTICIPANTS_COUNT_EL.textContent = String(stats.participantsCount);
  EQUAL_SHARE_EL.textContent =
    stats.equalShare == null ? 'Not yet calculable' : currency(stats.equalShare);
}

async function loadStats() {
  const res = await fetch('/api/stats');
  if (!res.ok) throw new Error('Failed to load stats.');
  const data = await res.json();
  renderStats(data);
}

async function loadParticipants() {
  const res = await fetch('/api/participants');
  if (!res.ok) throw new Error('Failed to load participants.');
  const data = await res.json();
  renderLedger(data.list || []);
}

function loadCounties() {
  for (const county of COUNTIES) {
    const option = document.createElement('option');
    option.value = county;
    option.textContent = county;
    COUNTY_SELECT.appendChild(option);
  }
}

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  FORM_MESSAGE.textContent = '';

  const payload = {
    name: document.getElementById('name').value,
    county: document.getElementById('county').value,
    email: document.getElementById('email').value
  };

  try {
    const res = await fetch('/api/participants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Unable to record participation.');
    }

    FORM.reset();
    FORM_MESSAGE.textContent = 'Participation recorded.';

    renderStats(data.stats);
    await loadParticipants();
  } catch (err) {
    FORM_MESSAGE.textContent = err.message;
  }
});

async function init() {
  loadCounties();
  await Promise.all([loadStats(), loadParticipants()]);
}

init().catch((err) => {
  FORM_MESSAGE.textContent = err.message;
});
