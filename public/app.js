const PARTICIPANTS_COUNT_EL = document.getElementById('participantsCount');
const EQUAL_SHARE_EL = document.getElementById('equalShare');
const FORM = document.getElementById('participantForm');
const FORM_MESSAGE = document.getElementById('formMessage');
const COUNTY_SELECT = document.getElementById('county');
const JUMP_TO_SIGNUP = document.getElementById('jumpToSignup');
const JOIN_SECTION = document.getElementById('join-section');
const STAGE = document.getElementById('stadiumStage');
const STADIUM_FRAME_MASK = document.querySelector('.stadiumFrameMask');
const SCENE = document.querySelector('.stadium-scene');
const SCENE_LAYER_WRAPS = SCENE ? Array.from(SCENE.querySelectorAll('.layerWrap[data-layer]')) : [];
const SCENE_IMAGES = SCENE ? Array.from(SCENE.querySelectorAll('.layerAsset')) : [];
const ENDZONE_LAYER_WRAP = SCENE ? SCENE.querySelector('.layerWrap--endzone') : null;
const LED_OVERLAY = SCENE ? SCENE.querySelector('.ledOverlay') : null;
const LITTLE_SCREENS_DIM = document.getElementById('littleScreensDim');
const LITTLE_SCREENS_LIT = document.getElementById('littleScreensLit');
const SPARKLE_REGIONS = SCENE ? Array.from(SCENE.querySelectorAll('.sparkleRegion')) : [];
const CITY_SHIMMER_CANVAS = document.getElementById('cityShimmerCanvas');
const FX_FIREWORKS_CANVAS = document.getElementById('fxFireworksCanvas');
const FX_CONFETTI_CANVAS = document.getElementById('fxConfettiCanvas');
const SKYLINE_IMAGE = SCENE ? SCENE.querySelector('.layerWrap--skyline .layerAsset') : null;
const READ_PROPOSAL_BTN = document.getElementById('readProposalBtn');
const JOIN_COLLECTIVE_BTN = document.getElementById('joinCollectiveBtn');
const POST_SPLASH_UI = document.getElementById('postSplashUi');
const UI_HEADLINE_ALT = document.querySelector('.uiOverlay__headlineAlt');
const FIELD_WELCOME_MSG = document.getElementById('fieldWelcomeMsg');
const SEAPLANE_OVERLAY = document.getElementById('seaplaneOverlay');
const EAGLE_OVERLAY = document.getElementById('eagleOverlay');
const JUMBOTRON_OVERLAY = document.getElementById('jumbotronOverlay');
const JUMBOTRON_CLOSE_BTN = document.getElementById('jumbotronCloseBtn');
const JUMBOTRON_SHAREHOLDERS_HEADING = document.querySelector('[data-testid="jhSharehawksLabel"]');
const JUMBOTRON_SHAREHOLDERS_VALUE = document.querySelector('[data-testid="jhValueTop"]');
const JUMBOTRON_COMMITMENT_HEADING = document.querySelector('[data-testid="jhInvestmentLabel"]');
const JUMBOTRON_COMMITMENT_VALUE = document.querySelector('[data-testid="jhValueBottom"]');
const JUMBOTRON_PANEL = document.getElementById('jumbotronPanel');
const JUMBOTRON_CONTENT = document.querySelector('#jumbotronOverlay .jumbotronContent');
const JUMBOTRON_SCREEN = document.querySelector('[data-testid="jumbotronScreen"]');
const JUMBOTRON_SHAREHAWKS_VALUE_ROW = document.querySelector('[data-impact-target="sharehawksValueRow"]');
const SHARE_HAWK_BTN = document.getElementById('shareHawkBtn');
const JUMBOTRON_IMPACT_LAYER = document.getElementById('jumbotronImpactLayer');
const JUMBOTRON_IMPACT_SPRITE = document.getElementById('jumbotronImpactSprite');
const JUMBOTRON_GLASS_SPRITE = document.getElementById('jumbotronGlassSprite');
const JOIN_COLLECTIVE_LAYER = document.getElementById('joinCollectiveLayer');
const JOIN_COLLECTIVE_PANEL = document.getElementById('joinCollectivePanel');
const JOIN_COLLECTIVE_CLOSE_BTN = document.getElementById('joinCollectiveCloseBtn');
const JOIN_PARTICIPANTS_COUNT_EL = document.getElementById('joinParticipantsCount');
const JOIN_EQUAL_SHARE_EL = document.getElementById('joinEqualShare');
const JOIN_COMMIT_FORM = document.getElementById('joinCommitForm');
const JOIN_COMMIT_CHECKBOX = document.getElementById('joinCommitCheckbox');
const JOIN_INITIALS_INPUT = document.getElementById('joinInitials');
const JOIN_EMAIL_INPUT = document.getElementById('joinEmail');
const JOIN_SIGNATURE_PAD = document.getElementById('joinSignaturePad');
const JOIN_SIGNATURE_CLEAR = document.getElementById('joinSignatureClear');
const JOIN_INLINE_ERROR = document.getElementById('joinInlineError');
const PROPOSAL_REVEAL_LAYER = document.getElementById('proposalRevealLayer');
const PROPOSAL_HAWK = document.getElementById('proposalHawk');
const PROPOSAL_CLOSED_SCROLL = document.getElementById('proposalClosedScroll');
const PROPOSAL_OPEN_SCROLL = document.getElementById('proposalOpenScroll');
const PROPOSAL_CONTENT = document.getElementById('proposalContent');
const PROPOSAL_CLOSE_BTN = document.getElementById('proposalCloseBtn');
const KICKOFF_COUNTDOWN_DAYS = document.getElementById('kickoffCountdownDays');
const SKIP_INTRO_BTN = document.getElementById('skipIntro');
const CLAIM_SHARE_BTN = document.getElementById('claimShareBtn');
const RECEIPT_PREVIEW_OVERLAY = document.getElementById('receiptPreviewOverlay');
const RECEIPT_PREVIEW_CARD = document.getElementById('receiptPreviewCard');
const RECEIPT_PREVIEW_IMAGE = document.getElementById('receiptPreviewImage');
const RECEIPT_PREVIEW_HINT = document.getElementById('receiptPreviewHint');
const RECEIPT_PREVIEW_CLOSE_BTN = document.getElementById('receiptPreviewCloseBtn');
const SUBSCRIBE_OVERLAY = document.getElementById('subscribeOverlay');
const SUBSCRIBE_CLOSE_BTN = document.getElementById('subscribeCloseBtn');
const KIT_SUBSCRIBE_MOUNT = document.getElementById('kitSubscribeMount');
const ACTION_ROW_SECONDARY = document.getElementById('actionRowSecondary');
const SUBSCRIBE_BTN = document.getElementById('subscribeBtn');
const SHARE_BTN = document.getElementById('shareBtn');
const UI_TOAST = document.getElementById('uiToast');
const ACTION_BUTTON_LABELS = Array.from(document.querySelectorAll('.uiOverlay__actions .uiBtn__label'));
const BODY = document.body;

const PURCHASE_PRICE = 12_000_000_000;
const BACKGROUND_SETTLE_MS = 1680;
const SPLASH_TOTAL_MS = 8650;
const PARALLAX_BASE_MAX = 14;
const PARALLAX_LERP = 0.1;
const DRAG_SENSITIVITY = 0.45;
const HAWK_INTERVAL_MIN_MS = 6_000;
const HAWK_INTERVAL_MAX_MS = 12_000;
const HAWK_RANDOM_RENDER_SCALE = 1;
const HAWK_BASE_WIDTH_RATIO = 0.12;
const HAWK_BOB_AMPLITUDE_MIN = 1;
const HAWK_BOB_AMPLITUDE_MAX = 3;
const HAWK_FACES_RIGHT = true;
const SEAPLANE_INTERVAL_MIN_MS = 20_000;
const SEAPLANE_INTERVAL_MAX_MS = 35_000;
const BALD_EAGLE_INTERVAL_MIN_MS = 40_000;
const BALD_EAGLE_INTERVAL_MAX_MS = 50_000;
const BALD_EAGLE_RENDER_SCALE = 0.25;
const SALMON_INTERVAL_MIN_MS = 70_000;
const SALMON_INTERVAL_MAX_MS = 70_000;
const SALMON_FIRST_PASS_DELAY_MS = 2_500;
const SEAPLANE_SPRITE_CANDIDATES = [
  '/assets/seaplane-16bit.png',
  '/assets/16bit seaplane.png',
  '/assets/16bit%20seaplane.png'
];
const SALMON_SPRITE_RIGHT_CANDIDATES = [
  '/assets/salmon-facing-right.png',
  '/assets/salmon facing right.png',
  '/assets/salmon%20facing%20right.png'
];
const SALMON_SPRITE_LEFT_CANDIDATES = [
  '/assets/salmon-facing-left.png',
  '/assets/salmon facing left.png',
  '/assets/salmon%20facing%20left.png'
];
const SALMON_SPRITE_FALLBACK_CANDIDATES = [
  '/assets/salmon.png',
  '/assets/salmon%20sprite.png',
  '/assets/salmon sprite.png'
];
const HAWK_SPRITE_CANDIDATES = [
  '/assets/hawk-sprite.png',
  '/assets/hawk_sprite.png',
  '/assets/hawk.png'
];
const HAWK_WITH_SCROLL_SPRITE_CANDIDATES = [
  '/assets/hawk-with-scroll.png',
  '/assets/hawk%20with%20scroll.png',
  '/assets/hawk with scroll.png'
];
const BALD_EAGLE_RIGHT_SPRITE_CANDIDATES = [
  '/assets/bald-eagle-rightfacing.png',
  '/assets/bald eagle rightfacing.png',
  '/assets/bald%20eagle%20rightfacing.png'
];
const BALD_EAGLE_LEFT_SPRITE_CANDIDATES = [
  '/assets/bald-eagle-leftfacing.png',
  '/assets/bald eagle leftfacing.png',
  '/assets/bald%20eagle%20leftfacing.png'
];
const BALD_EAGLE_WITH_SALMON_SPRITE_CANDIDATES = [
  '/assets/bald-eagle-with-salmon.png',
  '/assets/bald eagle with salmon.png',
  '/assets/bald%20eagle%20with%20salmon.png'
];
const CLOSED_SCROLL_SPRITE_CANDIDATES = [
  '/assets/closed-scroll.png',
  '/assets/closed%20scroll.png',
  '/assets/closed scroll.png',
  '/assets/closed scrole.png'
];
const OPEN_SCROLL_SPRITE_CANDIDATES = [
  '/assets/open-scroll.png',
  '/assets/open%20scroll.png',
  '/assets/open scroll.png',
  '/assets/scroll%20open.png',
  '/assets/scroll open.png',
  '/assets/open scrole.png'
];
const PROPOSAL_HAWK_FLIGHT_MS = 1900;
const PROPOSAL_SCROLL_DROP_MS = 640;
const PROPOSAL_SCROLL_OPEN_MS = 480;
const JUMBOTRON_KICKOFF_TARGET = new Date('2026-09-10T17:15:00-07:00');
const JUMBOTRON_COUNTDOWN_ENABLED = false;
let latestStats = null;
let animationToken = 0;
let sceneInitialized = false;
let parallaxEnabled = false;
let parallaxRaf = 0;
let parallaxTargetX = 0;
let parallaxTargetY = 0;
let parallaxCurrentX = 0;
let parallaxCurrentY = 0;
let pointerDragId = null;
let pointerDragStartX = 0;
let pointerDragStartY = 0;
let hawkTimerId = 0;
let hawkRafId = 0;
let activeHawkEl = null;
let hawkSpriteSrc = '';
let seaplaneSpriteSrc = '';
let baldEagleRightSrc = '';
let baldEagleLeftSrc = '';
let baldEagleWithSalmonSrc = '';
let salmonSpriteRightSrc = '';
let salmonSpriteLeftSrc = '';
let hawkWithScrollSrc = '';
let closedScrollSrc = '';
let openScrollSrc = '';
let proposalRunning = false;
let proposalOpen = false;
let isJumbotronOpen = false;
let isJumbotronAnimating = false;
let joinOpen = false;
let joinAnimating = false;
let signaturePadReady = false;
let signatureDrawing = false;
let signatureLastX = 0;
let signatureLastY = 0;
let seaplaneTimerId = 0;
let seaplaneRafId = 0;
let activeSeaplaneEl = null;
let baldEagleTimerId = 0;
let baldEagleRafId = 0;
let activeBaldEagleEl = null;
let salmonTimerId = 0;
let salmonRafId = 0;
let activeSalmonEl = null;
let salmonFirstTimerId = 0;
let sparkleTimerId = 0;
let sparkleActiveCount = 0;
let cityShimmerRaf = 0;
let cityShimmerActive = false;
let cityShimmerCtx = null;
let cityShimmerTwinkles = [];
let cityShimmerGlint = null;
let cityShimmerNextTwinkleAt = 0;
let cityShimmerNextGlintAt = 0;
let cityShimmerLastFrameAt = 0;
let cityShimmerMaskCanvas = null;
let cityShimmerMaskCtx = null;
let cityShimmerMaskPoints = [];
let cityShimmerMaskWidth = 0;
let cityShimmerMaskHeight = 0;
let cityShimmerResizeObserver = null;
let littleScreensTimerId = 0;
let littleScreensLit = false;
let jumbotronFitRaf = 0;
let jumbotronCountdownTimerId = 0;
let footballSpriteSrc = '';
let brokenGlassSpriteSrc = '';
let sharehawkRafId = 0;
let sharehawkAnimating = false;
let sharehawkImpacted = false;
let sharehawkJoined = false;
let brokenGlassLock = null;
let splashPlayTimerId = 0;
let splashCompleteTimerId = 0;
let splashFinished = false;
let fxFireworksCtx = null;
let fxConfettiCtx = null;
let fxFireworksRafId = 0;
let fxConfettiRafId = 0;
let fxFireworksComets = [];
let fxFireworksBursts = [];
let fxConfettiPieces = [];
let fxCelebrationStartAt = 0;
let fxCelebrationPlayed = false;
let welcomeHeadingActive = false;
let ticketUnlocked = false;
let pendingTicketUnlock = false;
let ticketCountersComplete = false;
let welcomeMessageActive = false;
let welcomeMessageTimerId = 0;
let currentImpactPoint = null;
let receiptPreviewOpen = false;
let receiptPreviewOpening = false;
let receiptPreviewGenerating = false;
let receiptPreviewPayload = null;
let isSubscribeOpen = false;
let actionLabelLayoutRaf = 0;
let isSharehawkSession = false;
let uiToastTimerId = 0;

const SPARKLE_COLORS = ['#108040', '#263c92', '#ffffff'];
const SPARKLE_MAX_CONCURRENT = 1000;
const SPARKLE_REGION_MAX = 200;
const SPARKLE_SPAWN_BURST = 20;
const CITY_TWINKLE_COLORS = ['#FFFFFF', '#E8F0FF', '#F7F3E6'];
const CITY_TWINKLE_MAX_ACTIVE = 500;
const CITY_GLINT_REGION = {
  x: 0.11,
  y: 0.27,
  w: 0.17,
  h: 0.24
};
const CITY_SHIMMER_DEBUG = false;
const DEBUG_JUMBOTRON = false;
const FOOTBALL_SPRITE_CANDIDATES = [
  '/assets/football.png',
  '/assets/football%20sprite.png',
  '/assets/football sprite.png'
];
const BROKEN_GLASS_SPRITE_CANDIDATES = [
  '/assets/broken-glass.png',
  '/assets/broken%20glass.png',
  '/assets/broken glass.png'
];
const BROKEN_GLASS_NUDGE_Y_PX = 10;
const SHAREHAWK_SESSION_KEY = 'sharehawkJoined';
const JUMBOTRON_BROKEN_SESSION_KEY = 'jumbotronBroken';
const JUMBOTRON_BROKEN_LOCK_SESSION_KEY = 'jumbotronBrokenLock';
const JUMBOTRON_GLASS_NX_SESSION_KEY = 'glassNX';
const JUMBOTRON_GLASS_NY_SESSION_KEY = 'glassNY';
const CELEBRATION_PLAYED_SESSION_KEY = 'celebrationPlayed';
const WELCOME_HEADING_SESSION_KEY = 'welcomeToTeamHeading';
const TICKET_UNLOCKED_SESSION_KEY = 'ticketUnlocked';
const IS_SHAREHAWK_SESSION_KEY = 'isSharehawk';
const KIT_SUBSCRIBE_UID = 'fff5fdf72a';
const KIT_SUBSCRIBE_SRC = 'https://extragood.kit.com/fff5fdf72a/index.js';
const JUMBOTRON_LABEL_FULL_TOP = 'NUMBER OF SHARE-HAWKS';
const JUMBOTRON_LABEL_FULL_BOTTOM = 'INVESTMENT/SHARE-HAWK';
const JUMBOTRON_LABEL_COMPACT_TOP = '# OF SHARE-HAWKS';
const JUMBOTRON_LABEL_COMPACT_BOTTOM = 'INVESTMENT/EACH';

// Hawk spawn slots are defined as "between layers" by mounting the sprite
// inside the lower layer host. This keeps it visually between layer stacks.
// Size is halved for every layer farther back.
const HAWK_DEPTH_LAYERS = [
  {
    key: 'between-endzone-field',
    selector: '.layerWrap--endzone .layerInner',
    scaleFactor: 1.0,
    depthWeight: 0.1,
    yMinPct: 0.24,
    yMaxPct: 0.58,
    speedPxPerSec: 220
  },
  {
    key: 'between-arches-endzone',
    selector: '.layerWrap--right .layerInner',
    scaleFactor: 0.5,
    depthWeight: 0.2,
    yMinPct: 0.18,
    yMaxPct: 0.50,
    speedPxPerSec: 180
  },
  {
    key: 'between-skyline-arches',
    selector: '.layerWrap--skyline .layerInner',
    scaleFactor: 0.25,
    depthWeight: 0.3,
    yMinPct: 0.12,
    yMaxPct: 0.42,
    speedPxPerSec: 140
  },
  {
    key: 'between-mountains-skyline',
    selector: '.layerWrap--mountains .layerInner',
    scaleFactor: 0.125,
    depthWeight: 0.4,
    yMinPct: 0.08,
    yMaxPct: 0.34,
    speedPxPerSec: 100
  }
];

const EAGLE_DEPTH_PROFILES = [
  {
    key: 'front-overlay',
    selector: '#eagleOverlay',
    scaleFactor: 1,
    depthWeight: 0.35,
    yMinPct: 0.03,
    yMaxPct: 0.33,
    speedMin: 95,
    speedMax: 125
  },
  {
    key: 'mid-back-skyline',
    selector: '.layerWrap--skyline .layerInner',
    scaleFactor: 0.55,
    depthWeight: 0.4,
    yMinPct: 0.08,
    yMaxPct: 0.27,
    speedMin: 85,
    speedMax: 110
  },
  {
    key: 'far-back-mountains',
    selector: '.layerWrap--mountains .layerInner',
    scaleFactor: 0.35,
    depthWeight: 0.25,
    yMinPct: 0.05,
    yMaxPct: 0.22,
    speedMin: 70,
    speedMax: 95
  }
];

const COUNTIES = [
  'Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia',
  'Cowlitz', 'Douglas', 'Ferry', 'Franklin', 'Garfield', 'Grant',
  'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas',
  'Klickitat', 'Lewis', 'Lincoln', 'Mason', 'Okanogan', 'Pacific',
  'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania',
  'Snohomish', 'Spokane', 'Stevens', 'Thurston', 'Wahkiakum',
  'Walla Walla', 'Whatcom', 'Whitman', 'Yakima'
];

function padNumber(value, width) {
  const safe = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  return String(safe).padStart(width, '0');
}

function formatShareholders(count) {
  const safe = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;

  if (safe < 1_000_000) {
    const padded = String(safe).padStart(6, '0');
    return padded.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return safe.toLocaleString('en-US');
}

function formatCurrency(amount) {
  if (amount == null || !Number.isFinite(amount)) {
    return '$0';
  }

  const safe = Math.max(0, Math.round(amount));
  return `$${safe.toLocaleString('en-US')}`;
}

function formatCommitment(value) {
  if (value == null || !Number.isFinite(value)) {
    return '$0';
  }
  return formatCurrency(value);
}

function formatSharehawksDisplay(value) {
  const safe = Math.max(0, Math.min(999999, Math.floor(Number(value) || 0)));
  const digits = String(safe).padStart(6, '0');
  return `${digits.slice(0, 3)},${digits.slice(3)}`;
}


function fitTextToContainer(el) {
  if (!el) return;
  const computed = window.getComputedStyle(el);
  const max = Number(el.dataset.fitMax || computed.getPropertyValue('--fit-max') || 16);
  const min = Number(el.dataset.fitMin || computed.getPropertyValue('--fit-min') || 7);
  el.style.fontSize = `${max}px`;
  let size = max;
  while (size > min && (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight)) {
    size -= 1;
    el.style.fontSize = `${size}px`;
  }
}

function applyJumbotronHeadingFit() {
  if (!JUMBOTRON_SHAREHOLDERS_HEADING || !JUMBOTRON_COMMITMENT_HEADING) return;

  JUMBOTRON_SHAREHOLDERS_HEADING.textContent = JUMBOTRON_LABEL_FULL_TOP;
  JUMBOTRON_COMMITMENT_HEADING.textContent = JUMBOTRON_LABEL_FULL_BOTTOM;

  // Clear previous fit result so overflow checks are meaningful.
  JUMBOTRON_SHAREHOLDERS_HEADING.style.fontSize = '';
  JUMBOTRON_COMMITMENT_HEADING.style.fontSize = '';

  // Force layout before measuring overflow.
  // eslint-disable-next-line no-unused-expressions
  JUMBOTRON_SHAREHOLDERS_HEADING.offsetWidth;
  // eslint-disable-next-line no-unused-expressions
  JUMBOTRON_COMMITMENT_HEADING.offsetWidth;

  const sharehawksOverflow = JUMBOTRON_SHAREHOLDERS_HEADING.scrollWidth > (JUMBOTRON_SHAREHOLDERS_HEADING.clientWidth + 1);
  const investmentOverflow = JUMBOTRON_COMMITMENT_HEADING.scrollWidth > (JUMBOTRON_COMMITMENT_HEADING.clientWidth + 1);

  if (sharehawksOverflow || investmentOverflow) {
    JUMBOTRON_SHAREHOLDERS_HEADING.textContent = JUMBOTRON_LABEL_COMPACT_TOP;
    JUMBOTRON_COMMITMENT_HEADING.textContent = JUMBOTRON_LABEL_COMPACT_BOTTOM;
  }
}

function computeSafeImpactPoint() {
  if (!JUMBOTRON_SCREEN || !JUMBOTRON_SHAREHAWKS_VALUE_ROW) {
    console.warn('[sharehawk-impact] Missing screen or sharehawks row; using fallback impact point.');
    return null;
  }

  const screenRect = JUMBOTRON_SCREEN.getBoundingClientRect();
  const shareRect = JUMBOTRON_SHAREHAWKS_VALUE_ROW.getBoundingClientRect();
  if (!screenRect.width || !screenRect.height || !shareRect.width || !shareRect.height) {
    console.warn('[sharehawk-impact] Invalid layout bounds; using fallback impact point.');
    return null;
  }

  const padding = Math.max(10, screenRect.height * 0.02);
  const noHitBottom = shareRect.bottom + padding;
  const minX = screenRect.left + (screenRect.width * 0.1);
  const maxX = screenRect.right - (screenRect.width * 0.1);
  const defaultX = screenRect.left + (screenRect.width * 0.68);
  const impactX = clamp(defaultX, minX, maxX);

  const preferredY = screenRect.top + (screenRect.height * 0.62);
  const minY = noHitBottom;
  const maxY = screenRect.bottom - (screenRect.height * 0.1);
  const impactY = clamp(preferredY, minY, maxY);

  const safePoint = { impactX, impactY, screenRect };
  currentImpactPoint = safePoint;
  return safePoint;
}

function refreshImpactPoint() {
  computeSafeImpactPoint();
}

function splitCommitmentForJumbotron(rawValue) {
  const digitsOnly = String(Math.max(0, Math.round(Number(rawValue) || 0)));
  if (digitsOnly.length <= 6) {
    return {
      split: false,
      line1: formatCurrency(rawValue),
      line2: ''
    };
  }
  const topDigits = digitsOnly.slice(0, -6);
  const bottomDigits = digitsOnly.slice(-6);
  return {
    split: true,
    line1: `$${Number(topDigits).toLocaleString('en-US')}`,
    line2: `${bottomDigits.slice(0, 3)},${bottomDigits.slice(3)}`
  };
}

function renderJumbotronCommitmentValue(value, forceSplit = false) {
  if (!JUMBOTRON_COMMITMENT_VALUE) return;
  const splitValue = splitCommitmentForJumbotron(value);
  const shouldSplit = forceSplit && splitValue.split;
  if (shouldSplit) {
    JUMBOTRON_COMMITMENT_VALUE.classList.add('two-line');
    JUMBOTRON_COMMITMENT_VALUE.innerHTML = `<span>${splitValue.line1}</span><span>${splitValue.line2}</span>`;
  } else {
    JUMBOTRON_COMMITMENT_VALUE.classList.remove('two-line');
    JUMBOTRON_COMMITMENT_VALUE.textContent = formatCurrency(value);
  }
}

function setJumbotronCommitmentDisplay(value) {
  if (!JUMBOTRON_COMMITMENT_VALUE) return;
  renderJumbotronCommitmentValue(value, false);
  fitTextToContainer(JUMBOTRON_COMMITMENT_VALUE);
  const overflow = JUMBOTRON_COMMITMENT_VALUE.scrollWidth > JUMBOTRON_COMMITMENT_VALUE.clientWidth
    || JUMBOTRON_COMMITMENT_VALUE.scrollHeight > JUMBOTRON_COMMITMENT_VALUE.clientHeight;
  if (overflow) {
    renderJumbotronCommitmentValue(value, true);
    fitTextToContainer(JUMBOTRON_COMMITMENT_VALUE);
  }
}

function setJumbotronShareholdersDisplay(valueText) {
  if (!JUMBOTRON_SHAREHOLDERS_VALUE) return;
  JUMBOTRON_SHAREHOLDERS_VALUE.textContent = valueText;
}

function updateJumbotronValueDisplays(shareholdersText, commitmentValue) {
  setJumbotronShareholdersDisplay(shareholdersText);
  setJumbotronCommitmentDisplay(commitmentValue);
  scheduleJumbotronFit();
}

function fitJumbotronTextRows() {
  jumbotronFitRaf = 0;
  if (!JUMBOTRON_OVERLAY) return;
  applyJumbotronHeadingFit();
  if (JUMBOTRON_SHAREHOLDERS_HEADING && JUMBOTRON_COMMITMENT_HEADING) {
    fitTextToContainer(JUMBOTRON_SHAREHOLDERS_HEADING);
    fitTextToContainer(JUMBOTRON_COMMITMENT_HEADING);
    const h1 = Number.parseFloat(window.getComputedStyle(JUMBOTRON_SHAREHOLDERS_HEADING).fontSize);
    const h2 = Number.parseFloat(window.getComputedStyle(JUMBOTRON_COMMITMENT_HEADING).fontSize);
    const common = Math.min(h1, h2);
    if (Number.isFinite(common) && common > 0) {
      JUMBOTRON_SHAREHOLDERS_HEADING.style.fontSize = `${common}px`;
      JUMBOTRON_COMMITMENT_HEADING.style.fontSize = `${common}px`;
    }
  }

  if (JUMBOTRON_SHAREHOLDERS_VALUE) fitTextToContainer(JUMBOTRON_SHAREHOLDERS_VALUE);
  if (JUMBOTRON_COMMITMENT_VALUE) setJumbotronCommitmentDisplay(latestStats?.equalShare ?? PURCHASE_PRICE);
}

function scheduleJumbotronFit() {
  if (jumbotronFitRaf) return;
  jumbotronFitRaf = requestAnimationFrame(fitJumbotronTextRows);
}

function renderJumbotronStats(stats) {
  updateJumbotronValueDisplays(
    formatSharehawksDisplay(stats.participantsCount),
    stats.equalShare
  );
}

function initJumbotronCountdownTicker() {
  if (jumbotronCountdownTimerId) return;
}

function renderAllStatTargets(stats) {
  if (PARTICIPANTS_COUNT_EL) {
    PARTICIPANTS_COUNT_EL.textContent = formatShareholders(stats.participantsCount);
  }
  if (EQUAL_SHARE_EL) {
    EQUAL_SHARE_EL.textContent = formatCommitment(stats.equalShare);
  }
  if (JOIN_PARTICIPANTS_COUNT_EL) {
    JOIN_PARTICIPANTS_COUNT_EL.textContent = formatShareholders(stats.participantsCount);
  }
  if (JOIN_EQUAL_SHARE_EL) {
    JOIN_EQUAL_SHARE_EL.textContent = formatCommitment(stats.equalShare);
  }
  renderJumbotronStats(stats);
}

function waitForImage(img) {
  if (img.complete && img.naturalWidth > 0) {
    return Promise.resolve();
  }

  if (typeof img.decode === 'function') {
    return img.decode().catch(() => new Promise((resolve) => {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    }));
  }

  return new Promise((resolve) => {
    img.addEventListener('load', resolve, { once: true });
    img.addEventListener('error', resolve, { once: true });
  });
}

function getDepthForLayer(layerName) {
  switch (layerName) {
    case 'mountains':
      return 0.2;
    case 'skyline':
      return 0.35;
    case 'left-arch':
    case 'right-arch':
      return 0.55;
    case 'endzone':
    case 'endzone-group':
      return 0.75;
    case 'jumbotron':
      return 0.86;
    case 'field':
      return 1.0;
    default:
      return 0.4;
  }
}

function applyParallaxToLayers() {
  if (!SCENE_LAYER_WRAPS.length) return;

  for (const wrap of SCENE_LAYER_WRAPS) {
    const depth = getDepthForLayer(wrap.dataset.layer);
    const layerX = Math.max(-PARALLAX_BASE_MAX * depth, Math.min(PARALLAX_BASE_MAX * depth, parallaxCurrentX * depth));
    const layerY = Math.max(-PARALLAX_BASE_MAX * depth, Math.min(PARALLAX_BASE_MAX * depth, parallaxCurrentY * depth));
    const inner = wrap.querySelector('.layerInner');
    if (!inner) continue;
    inner.style.setProperty('--parallax-x', `${layerX.toFixed(2)}px`);
    inner.style.setProperty('--parallax-y', `${layerY.toFixed(2)}px`);
  }
  positionJumbotronCloseButton();
}

function tickParallax() {
  if (!parallaxEnabled) {
    parallaxRaf = 0;
    return;
  }

  parallaxCurrentX += (parallaxTargetX - parallaxCurrentX) * PARALLAX_LERP;
  parallaxCurrentY += (parallaxTargetY - parallaxCurrentY) * PARALLAX_LERP;
  applyParallaxToLayers();

  if (Math.abs(parallaxCurrentX - parallaxTargetX) < 0.02 && Math.abs(parallaxCurrentY - parallaxTargetY) < 0.02) {
    parallaxCurrentX = parallaxTargetX;
    parallaxCurrentY = parallaxTargetY;
    applyParallaxToLayers();
  }

  parallaxRaf = window.requestAnimationFrame(tickParallax);
}

function startParallaxLoop() {
  if (parallaxRaf) return;
  parallaxRaf = window.requestAnimationFrame(tickParallax);
}

function setParallaxTarget(x, y) {
  parallaxTargetX = Math.max(-PARALLAX_BASE_MAX, Math.min(PARALLAX_BASE_MAX, x));
  parallaxTargetY = Math.max(-PARALLAX_BASE_MAX, Math.min(PARALLAX_BASE_MAX, y));
}

function handleMouseMove(event) {
  if (!parallaxEnabled || !STADIUM_FRAME_MASK) return;

  const rect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  setParallaxTarget(nx * PARALLAX_BASE_MAX, ny * PARALLAX_BASE_MAX);
}

function handlePointerDown(event) {
  if (!parallaxEnabled || !STADIUM_FRAME_MASK) return;
  if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
  if (event.target instanceof Element && event.target.closest('.uiOverlay__actions')) return;

  pointerDragId = event.pointerId;
  pointerDragStartX = event.clientX;
  pointerDragStartY = event.clientY;
  STADIUM_FRAME_MASK.setPointerCapture(event.pointerId);
}

function handlePointerMove(event) {
  if (!parallaxEnabled || !STADIUM_FRAME_MASK) return;

  if (event.pointerType === 'mouse') {
    handleMouseMove(event);
    return;
  }

  if (pointerDragId !== event.pointerId) return;

  const dx = (event.clientX - pointerDragStartX) * DRAG_SENSITIVITY;
  const dy = (event.clientY - pointerDragStartY) * DRAG_SENSITIVITY;
  setParallaxTarget(dx, dy);
}

function handlePointerUpOrCancel(event) {
  if (!STADIUM_FRAME_MASK) return;
  if (pointerDragId !== event.pointerId) return;

  try {
    STADIUM_FRAME_MASK.releasePointerCapture(event.pointerId);
  } catch {
    // no-op
  }
  pointerDragId = null;
  setParallaxTarget(0, 0);
}

function handleMouseLeave() {
  if (!parallaxEnabled) return;
  setParallaxTarget(0, 0);
}

function initParallax() {
  if (!STADIUM_FRAME_MASK || !SCENE_LAYER_WRAPS.length || parallaxEnabled) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  parallaxEnabled = true;
  STAGE?.classList.add('parallax-active');
  STADIUM_FRAME_MASK.addEventListener('mousemove', handleMouseMove, { passive: true });
  STADIUM_FRAME_MASK.addEventListener('mouseleave', handleMouseLeave, { passive: true });
  STADIUM_FRAME_MASK.addEventListener('pointerdown', handlePointerDown);
  STADIUM_FRAME_MASK.addEventListener('pointermove', handlePointerMove, { passive: true });
  STADIUM_FRAME_MASK.addEventListener('pointerup', handlePointerUpOrCancel, { passive: true });
  STADIUM_FRAME_MASK.addEventListener('pointercancel', handlePointerUpOrCancel, { passive: true });
  startParallaxLoop();
}

function getSparkleRegionWeight(region) {
  if (region.classList.contains('sparkleRegion--endzone-stands')) return 0.32;
  if (region.classList.contains('sparkleRegion--left-stands')) return 0.24;
  if (region.classList.contains('sparkleRegion--right-stands')) return 0.24;
  if (region.classList.contains('sparkleRegion--tower-top')) return 0.08;
  if (region.classList.contains('sparkleRegion--left-top')) return 0.06;
  if (region.classList.contains('sparkleRegion--right-top')) return 0.06;
  return 0.04;
}

function pickSparkleRegion() {
  if (!SPARKLE_REGIONS.length) return null;
  const candidates = SPARKLE_REGIONS.filter((region) => {
    const localCount = Number(region.dataset.sparkleCount || '0');
    return localCount < SPARKLE_REGION_MAX;
  });
  if (!candidates.length) return null;

  const weighted = candidates.map((region) => ({ region, weight: getSparkleRegionWeight(region) }));
  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of weighted) {
    roll -= item.weight;
    if (roll <= 0) return item.region;
  }
  return weighted[weighted.length - 1].region;
}

function spawnSparkle() {
  if (!SPARKLE_REGIONS.length) return;
  if (sparkleActiveCount >= SPARKLE_MAX_CONCURRENT) return;

  const region = pickSparkleRegion();
  if (!region) return;

  const dot = document.createElement('span');
  dot.className = 'sparkleDot';
  dot.style.backgroundColor = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
  const pxSize = Math.random() > 0.72 ? 2 : 1;
  dot.style.width = `${pxSize}px`;
  dot.style.height = `${pxSize}px`;
  dot.style.left = `${(Math.random() * 100).toFixed(2)}%`;
  dot.style.top = `${(Math.random() * 100).toFixed(2)}%`;
  dot.style.animationDuration = `${Math.floor(randomBetween(400, 900))}ms`;

  sparkleActiveCount += 1;
  region.dataset.sparkleCount = String(Number(region.dataset.sparkleCount || '0') + 1);
  region.appendChild(dot);

  dot.addEventListener('animationend', () => {
    if (dot.parentNode) {
      dot.parentNode.removeChild(dot);
    }
    sparkleActiveCount = Math.max(0, sparkleActiveCount - 1);
    region.dataset.sparkleCount = String(Math.max(0, Number(region.dataset.sparkleCount || '1') - 1));
  }, { once: true });
}

function scheduleSparkleTick() {
  if (sparkleTimerId) {
    clearTimeout(sparkleTimerId);
  }
  const delay = Math.floor(randomBetween(10, 20));
  sparkleTimerId = window.setTimeout(() => {
    sparkleTimerId = 0;
    for (let i = 0; i < SPARKLE_SPAWN_BURST; i += 1) {
      spawnSparkle();
    }
    scheduleSparkleTick();
  }, delay);
}

function initCrowdSparkles() {
  if (!SPARKLE_REGIONS.length || sparkleTimerId) return;
  for (const region of SPARKLE_REGIONS) {
    region.dataset.sparkleCount = '0';
  }
  scheduleSparkleTick();
}

function scheduleLittleScreensFlicker() {
  if (!ENDZONE_LAYER_WRAP || !LITTLE_SCREENS_DIM || !LITTLE_SCREENS_LIT) return;
  if (littleScreensTimerId) {
    clearTimeout(littleScreensTimerId);
  }

  const delay = Math.floor(randomBetween(780, 1120));
  littleScreensTimerId = window.setTimeout(() => {
    littleScreensTimerId = 0;
    // Slight imperfect cadence so the LED flicker feels organic.
    if (Math.random() > 0.06) {
      littleScreensLit = !littleScreensLit;
      ENDZONE_LAYER_WRAP.classList.toggle('little-screens-lit', littleScreensLit);
    }
    scheduleLittleScreensFlicker();
  }, delay);
}

function initLittleScreensFlicker() {
  if (!ENDZONE_LAYER_WRAP || !LITTLE_SCREENS_DIM || !LITTLE_SCREENS_LIT || littleScreensTimerId) return;
  littleScreensLit = false;
  ENDZONE_LAYER_WRAP.classList.remove('little-screens-lit');
  scheduleLittleScreensFlicker();
}

function syncCityShimmerCanvasSize() {
  if (!CITY_SHIMMER_CANVAS || !cityShimmerCtx) return null;
  const rect = CITY_SHIMMER_CANVAS.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const nextWidth = Math.max(1, Math.round(width * dpr));
  const nextHeight = Math.max(1, Math.round(height * dpr));

  const resized = CITY_SHIMMER_CANVAS.width !== nextWidth || CITY_SHIMMER_CANVAS.height !== nextHeight;
  if (resized) {
    CITY_SHIMMER_CANVAS.width = nextWidth;
    CITY_SHIMMER_CANVAS.height = nextHeight;
    cityShimmerCtx.setTransform(1, 0, 0, 1, 0, 0);
    cityShimmerCtx.scale(dpr, dpr);
  }

  return { width, height, resized };
}

function logShimmerAttach(size) {
  if (!CITY_SHIMMER_CANVAS) return;
  const parent = CITY_SHIMMER_CANVAS.parentElement;
  const parentClass = parent?.className || '(none)';
  console.log('city shimmer init', {
    canvasWidth: CITY_SHIMMER_CANVAS.width,
    canvasHeight: CITY_SHIMMER_CANVAS.height,
    cssWidth: size?.width,
    cssHeight: size?.height,
    parent: parentClass
  });
}

function scheduleNextCityTwinkle(now) {
  cityShimmerNextTwinkleAt = now + 500;
}

function scheduleNextCityGlint(now) {
  cityShimmerNextGlintAt = now + randomBetween(4_000, 8_000);
}

function rebuildCityShimmerMask(width, height) {
  if (!SKYLINE_IMAGE || !width || !height) return;

  if (!cityShimmerMaskCanvas) {
    cityShimmerMaskCanvas = document.createElement('canvas');
  }
  if (!cityShimmerMaskCtx) {
    cityShimmerMaskCtx = cityShimmerMaskCanvas.getContext('2d', { alpha: true });
  }
  if (!cityShimmerMaskCtx) return;

  if (cityShimmerMaskWidth !== width || cityShimmerMaskHeight !== height) {
    cityShimmerMaskCanvas.width = width;
    cityShimmerMaskCanvas.height = height;
    cityShimmerMaskWidth = width;
    cityShimmerMaskHeight = height;
  }

  cityShimmerMaskCtx.clearRect(0, 0, width, height);
  cityShimmerMaskCtx.drawImage(SKYLINE_IMAGE, 0, 0, width, height);

  const image = cityShimmerMaskCtx.getImageData(0, 0, width, height);
  const data = image.data;
  const points = [];

  // Sample only skyline pixels where alpha exists, mostly in visible building area.
  for (let y = Math.floor(height * 0.26); y < Math.floor(height * 0.80); y += 3) {
    for (let x = 0; x < width; x += 3) {
      const idx = (y * width + x) * 4 + 3;
      if (data[idx] > 28) {
        points.push({ x, y });
      }
    }
  }

  // Convert skyline alpha to a hard mask so shimmer stays bright/visible.
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    const on = a > 28;
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
    data[i + 3] = on ? 255 : 0;
  }
  cityShimmerMaskCtx.putImageData(image, 0, 0);

  cityShimmerMaskPoints = points;
}

function spawnCityTwinkle(now, width, height) {
  if (cityShimmerTwinkles.length >= CITY_TWINKLE_MAX_ACTIVE) return;
  if (!cityShimmerMaskPoints.length) return;
  const p = cityShimmerMaskPoints[Math.floor(Math.random() * cityShimmerMaskPoints.length)];
  cityShimmerTwinkles.push({
    x: p.x + randomBetween(-1.2, 1.2),
    y: p.y + randomBetween(-1.2, 1.2),
    size: Math.random() > 0.18 ? 2 : 1,
    color: CITY_TWINKLE_COLORS[Math.floor(Math.random() * CITY_TWINKLE_COLORS.length)],
    duration: 2000,
    bornAt: now
  });
}

function startCityNeedleGlint(now, width, height) {
  const regionX = width * CITY_GLINT_REGION.x;
  const regionY = height * CITY_GLINT_REGION.y;
  const regionW = width * CITY_GLINT_REGION.w;
  const regionH = height * CITY_GLINT_REGION.h;
  const y = randomBetween(regionY, regionY + regionH);
  cityShimmerGlint = {
    bornAt: now,
    duration: randomBetween(600, 900),
    x0: regionX - 8,
    x1: regionX + regionW + 8,
    y,
    length: randomBetween(4, 8),
    color: Math.random() > 0.5 ? '#FFFFFF' : '#E8F0FF'
  };
}

function drawCityShimmer(now) {
  if (!cityShimmerActive || !cityShimmerCtx || !CITY_SHIMMER_CANVAS || !SKYLINE_IMAGE) {
    cityShimmerRaf = 0;
    return;
  }

  if (cityShimmerLastFrameAt && now - cityShimmerLastFrameAt < 33) {
    cityShimmerRaf = requestAnimationFrame(drawCityShimmer);
    return;
  }
  cityShimmerLastFrameAt = now;

  const size = syncCityShimmerCanvasSize();
  if (!size) {
    cityShimmerRaf = requestAnimationFrame(drawCityShimmer);
    return;
  }
  const { width, height, resized } = size;
  const ctx = cityShimmerCtx;
  if (resized || !cityShimmerMaskPoints.length) {
    rebuildCityShimmerMask(width, height);
  }

  if (CITY_SHIMMER_DEBUG) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.08, height * 0.40);
    ctx.lineTo(width * 0.92, height * 0.70);
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.max(14, Math.round(width * 0.04))}px monospace`;
    ctx.fillText('SHIMMER DEBUG', width * 0.18, height * 0.50);
    cityShimmerRaf = requestAnimationFrame(drawCityShimmer);
    return;
  }

  if (now >= cityShimmerNextTwinkleAt) {
    spawnCityTwinkle(now, width, height);
    scheduleNextCityTwinkle(now);
  }

  if (!cityShimmerGlint && now >= cityShimmerNextGlintAt) {
    startCityNeedleGlint(now, width, height);
  }

  ctx.clearRect(0, 0, width, height);

  const nextTwinkles = [];
  for (const twinkle of cityShimmerTwinkles) {
    const age = now - twinkle.bornAt;
    const t = age / twinkle.duration;
    if (t >= 1) continue;
    const alpha = t < 0.5 ? (t / 0.5) : ((1 - t) / 0.5);
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
    ctx.fillStyle = twinkle.color;
    ctx.fillRect(Math.round(twinkle.x), Math.round(twinkle.y), twinkle.size, twinkle.size);
    nextTwinkles.push(twinkle);
  }
  cityShimmerTwinkles = nextTwinkles;

  if (cityShimmerGlint) {
    const t = (now - cityShimmerGlint.bornAt) / cityShimmerGlint.duration;
    if (t >= 1) {
      cityShimmerGlint = null;
      scheduleNextCityGlint(now);
    } else {
      const eased = t < 0.5 ? (t / 0.5) : ((1 - t) / 0.5);
      const x = cityShimmerGlint.x0 + (cityShimmerGlint.x1 - cityShimmerGlint.x0) * t;
      ctx.globalAlpha = Math.max(0, Math.min(0.9, eased));
      ctx.fillStyle = cityShimmerGlint.color;
      for (let i = 0; i < cityShimmerGlint.length; i += 1) {
        ctx.fillRect(Math.round(x + i), Math.round(cityShimmerGlint.y + i * 0.25), 2, 1);
      }
    }
  }

  // Clip shimmer strictly to skyline opaque pixels (hard mask).
  ctx.globalCompositeOperation = 'destination-in';
  ctx.globalAlpha = 1;
  if (cityShimmerMaskCanvas) {
    ctx.drawImage(cityShimmerMaskCanvas, 0, 0, width, height);
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;

  cityShimmerRaf = requestAnimationFrame(drawCityShimmer);
}

function initCityShimmer() {
  if (!CITY_SHIMMER_CANVAS || !SKYLINE_IMAGE || cityShimmerActive) return;
  cityShimmerCtx = CITY_SHIMMER_CANVAS.getContext('2d', { alpha: true });
  if (!cityShimmerCtx) return;
  cityShimmerActive = true;
  cityShimmerTwinkles = [];
  cityShimmerGlint = null;
  cityShimmerLastFrameAt = 0;
  cityShimmerMaskPoints = [];
  cityShimmerMaskWidth = 0;
  cityShimmerMaskHeight = 0;
  const initialSize = syncCityShimmerCanvasSize();
  logShimmerAttach(initialSize);
  if (!cityShimmerResizeObserver && STADIUM_FRAME_MASK) {
    cityShimmerResizeObserver = new ResizeObserver(() => {
      syncCityShimmerCanvasSize();
    });
    cityShimmerResizeObserver.observe(STADIUM_FRAME_MASK);
  }
  scheduleNextCityTwinkle(performance.now());
  scheduleNextCityGlint(performance.now() + randomBetween(1500, 3200));
  cityShimmerRaf = requestAnimationFrame(drawCityShimmer);
}

function completeSplash() {
  if (splashFinished) return;
  splashFinished = true;
  if (splashPlayTimerId) {
    clearTimeout(splashPlayTimerId);
    splashPlayTimerId = 0;
  }
  if (splashCompleteTimerId) {
    clearTimeout(splashCompleteTimerId);
    splashCompleteTimerId = 0;
  }
  if (!BODY) return;
  STAGE?.classList.add('splash--done');
  BODY.classList.remove('splash-active');
  BODY.classList.add('splash-complete');
  initHawkFlyovers();
  initBaldEagleFlyovers();
  initSeaplaneFlyovers();
  initSalmonFlyovers();
}

function startSplashSequence(reduceMotion = false) {
  if (!STAGE || !BODY) {
    completeSplash();
    return;
  }

  if (reduceMotion) {
    STAGE.classList.add('splash--play', 'splash--reduced');
    if (splashCompleteTimerId) clearTimeout(splashCompleteTimerId);
    splashCompleteTimerId = window.setTimeout(completeSplash, 700);
    return;
  }

  if (splashPlayTimerId) clearTimeout(splashPlayTimerId);
  splashPlayTimerId = window.setTimeout(() => {
    STAGE.classList.add('splash--play');
  }, BACKGROUND_SETTLE_MS);

  if (splashCompleteTimerId) clearTimeout(splashCompleteTimerId);
  splashCompleteTimerId = window.setTimeout(completeSplash, BACKGROUND_SETTLE_MS + SPLASH_TOTAL_MS);
}

function skipIntro() {
  if (!BODY?.classList.contains('splash-active')) return;
  STAGE?.classList.remove('stage--entering');
  STAGE?.classList.add('stage--settled', 'splash--done');
  STAGE?.classList.remove('splash--play');
  completeSplash();
}

function initSceneIntro() {
  if (sceneInitialized) return;
  sceneInitialized = true;

  if (!STAGE || !SCENE || SCENE_IMAGES.length === 0) {
    completeSplash();
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    STAGE.classList.remove('stage--entering');
    STAGE.classList.add('stage--settled');
    startSplashSequence(true);
    return;
  }

  // Start the intro movement immediately to avoid a frozen pre-animation frame.
  requestAnimationFrame(() => {
    STAGE.classList.remove('stage--entering');
    STAGE.classList.add('stage--settled');
    initParallax();
    initCrowdSparkles();
    initCityShimmer();
    initLittleScreensFlicker();
    startSplashSequence(false);
  });
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function getRandomIntBetween(min, max) {
  return Math.floor(randomBetween(min, max + 1));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function updateUIScaleVar() {
  const frameWidth = STADIUM_FRAME_MASK?.clientWidth || window.innerWidth || 1080;
  const frameHeight = STADIUM_FRAME_MASK?.clientHeight || window.innerHeight || 1920;
  const uiScale = clamp(Math.min(frameWidth / 1080, frameHeight / 1920), 0.2, 2);
  const root = document.documentElement;
  root.style.setProperty('--frameScale', `${uiScale}`);
  root.style.setProperty('--stage-scale', `${uiScale}`);
  root.style.setProperty('--uiScale', `${uiScale}`);
  root.style.setProperty('--ui-scale', `${uiScale}`);
  root.style.setProperty('--ui-font', `clamp(10px, calc(14px * ${uiScale}), 18px)`);
  root.style.setProperty('--ui-font-sm', `clamp(9px, calc(12px * ${uiScale}), 16px)`);
  root.style.setProperty('--ui-font-lg', `clamp(12px, calc(22px * ${uiScale}), 28px)`);
  if (STADIUM_FRAME_MASK) {
    STADIUM_FRAME_MASK.style.setProperty('--frameScale', `${uiScale}`);
    STADIUM_FRAME_MASK.style.setProperty('--stage-scale', `${uiScale}`);
    STADIUM_FRAME_MASK.style.setProperty('--uiScale', `${uiScale}`);
    STADIUM_FRAME_MASK.style.setProperty('--ui-scale', `${uiScale}`);
  }
  scheduleActionButtonLabelLayout();
}

function updateActionButtonLabelLayout() {
  actionLabelLayoutRaf = 0;
  if (!BODY || !ACTION_BUTTON_LABELS.length) return;
  const frameScaleRaw = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--frameScale'));
  const frameScale = Number.isFinite(frameScaleRaw) ? frameScaleRaw : 1;
  let shouldStack = frameScale <= 0.62;
  for (const label of ACTION_BUTTON_LABELS) {
    if (!label?.isConnected) continue;
    if (label.scrollWidth > (label.clientWidth + 1) || label.scrollHeight > (label.clientHeight + 1)) {
      shouldStack = true;
      break;
    }
  }
  BODY.classList.toggle('ui-btn-labels-stacked', shouldStack);
}

function scheduleActionButtonLabelLayout() {
  if (actionLabelLayoutRaf) return;
  actionLabelLayoutRaf = requestAnimationFrame(updateActionButtonLabelLayout);
}

function isCelebrationPlayed() {
  try {
    return sessionStorage.getItem(CELEBRATION_PLAYED_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function setCelebrationPlayed() {
  fxCelebrationPlayed = true;
  try {
    sessionStorage.setItem(CELEBRATION_PLAYED_SESSION_KEY, '1');
  } catch {
    // no-op
  }
}

function renderHeadlineAlt() {
  // Headings are fixed in HTML; jumbotron state only toggles visibility.
}

function setWelcomeHeadingActive(active) {
  welcomeHeadingActive = !!active;
  renderHeadlineAlt();
  try {
    if (welcomeHeadingActive) {
      sessionStorage.setItem(WELCOME_HEADING_SESSION_KEY, '1');
    } else {
      sessionStorage.removeItem(WELCOME_HEADING_SESSION_KEY);
    }
  } catch {
    // no-op
  }
}

function hydrateWelcomeHeadingState() {
  try {
    welcomeHeadingActive = sessionStorage.getItem(WELCOME_HEADING_SESSION_KEY) === '1';
  } catch {
    welcomeHeadingActive = false;
  }
  renderHeadlineAlt();
}

function maybeFinalizeTicketUnlock() {
  if (!pendingTicketUnlock) return;
  if (!ticketCountersComplete) return;
  if (welcomeMessageActive) return;
  pendingTicketUnlock = false;
  ticketCountersComplete = false;
  setTicketUnlocked(true);
}

function setWelcomeMessageActive(active) {
  welcomeMessageActive = !!active;
  if (BODY) {
    BODY.classList.toggle('welcome-msg-active', welcomeMessageActive);
  }
  if (FIELD_WELCOME_MSG) {
    FIELD_WELCOME_MSG.setAttribute('aria-hidden', welcomeMessageActive ? 'false' : 'true');
  }
  if (!welcomeMessageActive) {
    maybeFinalizeTicketUnlock();
  }
}

function setTicketUnlocked(active) {
  ticketUnlocked = !!active;
  if (BODY) {
    BODY.classList.toggle('ticket-unlocked', ticketUnlocked);
  }
  try {
    if (ticketUnlocked) {
      sessionStorage.setItem(TICKET_UNLOCKED_SESSION_KEY, '1');
    } else {
      sessionStorage.removeItem(TICKET_UNLOCKED_SESSION_KEY);
    }
  } catch {
    // no-op
  }
}

function hydrateTicketUnlockedState() {
  try {
    setTicketUnlocked(sessionStorage.getItem(TICKET_UNLOCKED_SESSION_KEY) === '1');
  } catch {
    setTicketUnlocked(false);
  }
}

function showUiToast(message) {
  if (!BODY || !UI_TOAST) return;
  UI_TOAST.textContent = message;
  BODY.classList.add('ui-toast-show');
  if (uiToastTimerId) {
    clearTimeout(uiToastTimerId);
  }
  uiToastTimerId = window.setTimeout(() => {
    BODY.classList.remove('ui-toast-show');
    uiToastTimerId = 0;
  }, 1500);
}

function setSharehawkSessionState(active) {
  isSharehawkSession = !!active;
  if (BODY) {
    BODY.classList.toggle('is-sharehawk', isSharehawkSession);
  }
  if (ACTION_ROW_SECONDARY) {
    ACTION_ROW_SECONDARY.setAttribute('aria-hidden', isSharehawkSession ? 'false' : 'true');
  }
  try {
    if (isSharehawkSession) {
      sessionStorage.setItem(IS_SHAREHAWK_SESSION_KEY, '1');
    } else {
      sessionStorage.removeItem(IS_SHAREHAWK_SESSION_KEY);
    }
  } catch {
    // no-op
  }
}

function hydrateSharehawkSessionState() {
  try {
    setSharehawkSessionState(sessionStorage.getItem(IS_SHAREHAWK_SESSION_KEY) === '1');
  } catch {
    setSharehawkSessionState(false);
  }
}

function isMobileReceiptSaveMode() {
  const coarse = window.matchMedia?.('(pointer: coarse)')?.matches;
  return Boolean(coarse);
}

function setReceiptPreviewVisible(active) {
  receiptPreviewOpen = !!active;
  if (!BODY || !RECEIPT_PREVIEW_OVERLAY) return;
  BODY.classList.toggle('receipt-preview-open', receiptPreviewOpen);
  RECEIPT_PREVIEW_OVERLAY.setAttribute('aria-hidden', receiptPreviewOpen ? 'false' : 'true');
}

function closeReceiptPreview(exitJumbotron = true) {
  receiptPreviewOpening = false;
  setReceiptPreviewVisible(false);
  BODY?.classList.remove('receipt-preview-opening');
  if (exitJumbotron && isJumbotronOpen && !isJumbotronAnimating) {
    closeJumbotronOverlay();
  }
}

function setSubscribeOverlayVisible(active) {
  isSubscribeOpen = !!active;
  if (!BODY || !SUBSCRIBE_OVERLAY) return;
  BODY.classList.toggle('subscribe-open', isSubscribeOpen);
  SUBSCRIBE_OVERLAY.setAttribute('aria-hidden', isSubscribeOpen ? 'false' : 'true');
}

function mountKitSubscribeOnce() {
  if (!KIT_SUBSCRIBE_MOUNT) return;
  const existing = KIT_SUBSCRIBE_MOUNT.querySelector(`script[data-uid="${KIT_SUBSCRIBE_UID}"]`);
  if (existing || KIT_SUBSCRIBE_MOUNT.dataset.kitMounted === '1') return;
  const script = document.createElement('script');
  script.async = true;
  script.setAttribute('data-uid', KIT_SUBSCRIBE_UID);
  script.src = KIT_SUBSCRIBE_SRC;
  KIT_SUBSCRIBE_MOUNT.appendChild(script);
  KIT_SUBSCRIBE_MOUNT.dataset.kitMounted = '1';
}

function openSubscribeWindow() {
  if (!BODY || isSubscribeOpen) return;
  if (receiptPreviewOpen) {
    closeReceiptPreview(false);
  }
  setSubscribeOverlayVisible(true);
  mountKitSubscribeOnce();
}

function closeSubscribeWindow() {
  if (!isSubscribeOpen) return;
  setSubscribeOverlayVisible(false);
}

function updateReceiptPreviewHint() {
  if (!RECEIPT_PREVIEW_HINT) return;
  RECEIPT_PREVIEW_HINT.setAttribute(
    'aria-label',
    isMobileReceiptSaveMode() ? 'Hold down to save' : 'Click to download'
  );
}

function setReceiptPreviewAnimationOrigin(triggerEl) {
  if (!RECEIPT_PREVIEW_CARD || !STADIUM_FRAME_MASK) return;
  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const sourceRect = triggerEl?.getBoundingClientRect();
  const cardRect = RECEIPT_PREVIEW_CARD.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height || !sourceRect || !cardRect.width || !cardRect.height) {
    RECEIPT_PREVIEW_CARD.style.setProperty('--receipt-from-dx', '0px');
    RECEIPT_PREVIEW_CARD.style.setProperty('--receipt-from-dy', '0px');
    return;
  }
  const fromX = (sourceRect.left + sourceRect.width * 0.5) - frameRect.left;
  const fromY = (sourceRect.top + sourceRect.height * 0.5) - frameRect.top;
  const toX = (cardRect.left + cardRect.width * 0.5) - frameRect.left;
  const toY = (cardRect.top + cardRect.height * 0.5) - frameRect.top;
  RECEIPT_PREVIEW_CARD.style.setProperty('--receipt-from-dx', `${(fromX - toX).toFixed(2)}px`);
  RECEIPT_PREVIEW_CARD.style.setProperty('--receipt-from-dy', `${(fromY - toY).toFixed(2)}px`);
}

function closeJumbotronInstantForTicketPreview() {
  if (!BODY || !JUMBOTRON_OVERLAY) return;
  if (!isJumbotronOpen && JUMBOTRON_OVERLAY.getAttribute('aria-hidden') === 'true') return;
  isJumbotronOpen = false;
  isJumbotronAnimating = false;
  BODY.classList.remove('jumbotron-open', 'jumbotron-opening', 'jumbotron-closing', 'jumbotron-quiet-closing');
  JUMBOTRON_OVERLAY.setAttribute('aria-hidden', 'true');
  resetSharehawkImpactState();
  if (DEBUG_JUMBOTRON) BODY.classList.remove('debug-jumbotron');
}

function closeJumbotronQuietlyForTicketPreview() {
  if (!BODY || !JUMBOTRON_OVERLAY || !isJumbotronOpen || isJumbotronAnimating) return;
  BODY.classList.add('jumbotron-quiet-closing');
  window.setTimeout(() => {
    closeJumbotronInstantForTicketPreview();
  }, 240);
}

async function openReceiptPreview(triggerEl) {
  if (!CLAIM_SHARE_BTN || !RECEIPT_PREVIEW_OVERLAY || !RECEIPT_PREVIEW_CARD || !RECEIPT_PREVIEW_IMAGE) return;
  if (receiptPreviewGenerating || receiptPreviewOpen || receiptPreviewOpening) return;

  const stats = latestStats || { participantsCount: 0, equalShare: PURCHASE_PRICE };
  const sharehawkCount = Math.max(0, Math.floor(Number(stats.participantsCount) || 0));

  receiptPreviewGenerating = true;
  CLAIM_SHARE_BTN.disabled = true;
  try {
    const payload = await buildSharehawkReceiptPNGData({ sharehawkNumber: sharehawkCount });
    receiptPreviewPayload = payload;
    RECEIPT_PREVIEW_IMAGE.src = payload.href;
    updateReceiptPreviewHint();
    setReceiptPreviewVisible(true);
    BODY?.classList.add('receipt-preview-opening');
    receiptPreviewOpening = true;
    // Measure once visible so the card can animate out of the button center.
    setReceiptPreviewAnimationOrigin(triggerEl || CLAIM_SHARE_BTN);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      BODY?.classList.remove('receipt-preview-opening');
      receiptPreviewOpening = false;
      closeJumbotronQuietlyForTicketPreview();
    } else {
      window.setTimeout(() => {
        BODY?.classList.remove('receipt-preview-opening');
        receiptPreviewOpening = false;
        closeJumbotronQuietlyForTicketPreview();
      }, 480);
    }
  } catch {
    closeReceiptPreview();
  } finally {
    receiptPreviewGenerating = false;
    CLAIM_SHARE_BTN.disabled = false;
  }
}

function loadImageForTicket(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function buildSharehawkReceiptPNGData({ sharehawkNumber }) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const safeNumber = Math.max(0, Math.floor(Number(sharehawkNumber) || 0));
  const displayNumber = padNumber(safeNumber, 6);
  const [ticketArtImg, stadiumComposite, mountainsImg, skylineImg, leftImg, rightImg, endzoneImg, fieldImg] = await Promise.all([
    loadImageForTicket('/assets/ticket-art.png'),
    loadImageForTicket('/assets/mobile layout guide - stadium design.png'),
    loadImageForTicket('/stadium/01-mountains.png'),
    loadImageForTicket('/stadium/02-skyline.png'),
    loadImageForTicket('/stadium/03-stadium-left.png'),
    loadImageForTicket('/stadium/04-stadium-right.png'),
    loadImageForTicket('/stadium/06-endzone-base.png'),
    loadImageForTicket('/stadium/07-field.png')
  ]);

  const W = canvas.width;
  const H = canvas.height;
  const PAD = 80;
  const innerX = PAD;
  const innerY = PAD;
  const innerW = W - PAD * 2;
  const innerH = H - PAD * 2;
  const topH = Math.round(innerH * 0.58);
  const dividerY = innerY + topH;
  const infoY = dividerY + 74;
  const infoH = innerY + innerH - infoY;

  ctx.fillStyle = '#eceee9';
  ctx.fillRect(0, 0, W, H);

  // Ticket body
  ctx.fillStyle = '#f7f8f6';
  ctx.fillRect(innerX, innerY, innerW, innerH);
  ctx.strokeStyle = '#263c92';
  ctx.lineWidth = 6;
  ctx.strokeRect(innerX, innerY, innerW, innerH);

  // Top image area (no text overlay).
  ctx.save();
  ctx.beginPath();
  ctx.rect(innerX, innerY, innerW, topH);
  ctx.clip();
  ctx.fillStyle = '#2f5ea4';
  ctx.fillRect(innerX, innerY, innerW, topH);

  if (ticketArtImg) {
    ctx.drawImage(ticketArtImg, innerX, innerY, innerW, topH);
  } else if (stadiumComposite) {
    ctx.drawImage(stadiumComposite, innerX, innerY, innerW, topH);
  } else {
    if (mountainsImg) ctx.drawImage(mountainsImg, innerX, innerY, innerW, topH);
    if (skylineImg) ctx.drawImage(skylineImg, innerX, innerY + topH * 0.2, innerW, topH * 0.58);
    if (leftImg) ctx.drawImage(leftImg, innerX, innerY + topH * 0.28, innerW * 0.5, topH * 0.6);
    if (rightImg) ctx.drawImage(rightImg, innerX + innerW * 0.5, innerY + topH * 0.28, innerW * 0.5, topH * 0.6);
    if (endzoneImg) ctx.drawImage(endzoneImg, innerX + innerW * 0.18, innerY + topH * 0.34, innerW * 0.64, topH * 0.52);
    if (fieldImg) ctx.drawImage(fieldImg, innerX, innerY + topH * 0.63, innerW, topH * 0.45);
  }
  ctx.restore();

  // Bold diagonal divider: blue / white / green.
  const stripeRise = 48;
  const stripeBand = 30;
  const drawStripeBand = (offset, color) => {
    const yL = dividerY - stripeRise + offset;
    const yR = dividerY + stripeRise + offset;
    ctx.beginPath();
    ctx.moveTo(innerX, yL);
    ctx.lineTo(innerX + innerW, yR);
    ctx.lineTo(innerX + innerW, yR + stripeBand);
    ctx.lineTo(innerX, yL + stripeBand);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };
  drawStripeBand(0, '#263c92');
  drawStripeBand(stripeBand, '#ffffff');
  drawStripeBand(stripeBand * 2, '#108040');

  // Bottom information area.
  ctx.fillStyle = '#f7f8f6';
  ctx.fillRect(innerX, infoY, innerW, infoH);
  ctx.strokeStyle = '#c6cbd4';
  ctx.lineWidth = 2;
  ctx.strokeRect(innerX + 1, infoY + 1, innerW - 2, infoH - 2);

  const centerX = innerX + innerW / 2;
  const sectionTop = infoY + 84;
  ctx.textAlign = 'center';

  ctx.fillStyle = '#263c92';
  ctx.font = '700 38px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('COMMUNITY OWNERSHIP PROPOSAL', centerX, sectionTop);
  ctx.fillStyle = '#41598f';
  ctx.font = '600 28px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('Receipt of Intent', centerX, sectionTop + 50);

  ctx.fillStyle = '#263c92';
  ctx.font = '700 30px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('Share-Hawk Number', centerX, sectionTop + 150);

  ctx.fillStyle = '#108040';
  ctx.font = '900 104px "Arial Black", "DIN Condensed", "Arial Narrow", Arial, sans-serif';
  ctx.fillText(displayNumber, centerX, sectionTop + 258);

  ctx.fillStyle = '#263c92';
  ctx.font = '700 30px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('Minimum Investment Commitment', centerX, sectionTop + 354);
  ctx.font = '700 42px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('Target Bid: $12,000,000,000', centerX, sectionTop + 412);

  ctx.fillStyle = '#2d3f67';
  ctx.font = '500 30px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('This receipt documents your intent to participate in a', centerX, sectionTop + 520);
  ctx.fillText('community bid to purchase the Seattle Seahawks.', centerX, sectionTop + 562);
  ctx.fillText('Please hold onto this for your personal records.', centerX, sectionTop + 604);

  ctx.fillStyle = '#4a5f8e';
  ctx.font = '500 24px "Helvetica Neue", Arial, sans-serif';
  ctx.fillText('An Extra Good Studio Production', centerX, sectionTop + 730);
  ctx.fillText('extragood.studio', centerX, sectionTop + 766);

  const href = canvas.toDataURL('image/png');
  return { href, displayNumber };
}

function downloadSharehawkReceiptPNG(payload) {
  if (!payload?.href || !payload?.displayNumber) return;
  const a = document.createElement('a');
  a.href = payload.href;
  a.download = `sharehawk-receipt-${payload.displayNumber}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

async function generateSharehawkReceiptPNG({ sharehawkNumber }) {
  const payload = await buildSharehawkReceiptPNGData({ sharehawkNumber });
  downloadSharehawkReceiptPNG(payload);
}

function syncFXCanvasSize() {
  if (!STADIUM_FRAME_MASK) return null;
  const rect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const pxW = Math.max(1, Math.round(width * dpr));
  const pxH = Math.max(1, Math.round(height * dpr));

  if (FX_FIREWORKS_CANVAS) {
    if (FX_FIREWORKS_CANVAS.width !== pxW || FX_FIREWORKS_CANVAS.height !== pxH) {
      FX_FIREWORKS_CANVAS.width = pxW;
      FX_FIREWORKS_CANVAS.height = pxH;
    }
    if (fxFireworksCtx) {
      fxFireworksCtx.setTransform(1, 0, 0, 1, 0, 0);
      fxFireworksCtx.scale(dpr, dpr);
    }
  }

  if (FX_CONFETTI_CANVAS) {
    if (FX_CONFETTI_CANVAS.width !== pxW || FX_CONFETTI_CANVAS.height !== pxH) {
      FX_CONFETTI_CANVAS.width = pxW;
      FX_CONFETTI_CANVAS.height = pxH;
    }
    if (fxConfettiCtx) {
      fxConfettiCtx.setTransform(1, 0, 0, 1, 0, 0);
      fxConfettiCtx.scale(dpr, dpr);
    }
  }

  return { width, height };
}

function clearCelebrationFX() {
  if (welcomeMessageTimerId) {
    clearTimeout(welcomeMessageTimerId);
    welcomeMessageTimerId = 0;
  }
  setWelcomeMessageActive(false);
  if (fxFireworksRafId) {
    cancelAnimationFrame(fxFireworksRafId);
    fxFireworksRafId = 0;
  }
  if (fxConfettiRafId) {
    cancelAnimationFrame(fxConfettiRafId);
    fxConfettiRafId = 0;
  }
  fxFireworksComets = [];
  fxFireworksBursts = [];
  fxConfettiPieces = [];
  if (fxFireworksCtx && FX_FIREWORKS_CANVAS) {
    const size = syncFXCanvasSize();
    if (size) fxFireworksCtx.clearRect(0, 0, size.width, size.height);
  }
  if (fxConfettiCtx && FX_CONFETTI_CANVAS) {
    const size = syncFXCanvasSize();
    if (size) fxConfettiCtx.clearRect(0, 0, size.width, size.height);
  }
}

function initCelebrationFX() {
  if (FX_FIREWORKS_CANVAS && !fxFireworksCtx) {
    fxFireworksCtx = FX_FIREWORKS_CANVAS.getContext('2d', { alpha: true });
  }
  if (FX_CONFETTI_CANVAS && !fxConfettiCtx) {
    fxConfettiCtx = FX_CONFETTI_CANVAS.getContext('2d', { alpha: true });
  }
  syncFXCanvasSize();
}

function buildFireworkComets(width, height, now) {
  const count = getRandomIntBetween(40, 64);
  const palette = ['#69BE28', '#263c92', '#ffffff', '#7fd63a', '#7ba8ff'];
  const comets = [];
  for (let i = 0; i < count; i += 1) {
    const fromLeft = Math.random() > 0.5;
    const startX = fromLeft ? -24 : width + 24;
    const endX = randomBetween(width * 0.18, width * 0.82);
    const startY = randomBetween(height * 0.28, height * 0.40);
    const endY = randomBetween(height * 0.07, height * 0.28);
    const travel = randomBetween(540, 960);
    comets.push({
      startX,
      endX,
      startY,
      endY,
      bornAt: now + randomBetween(0, 280),
      travel,
      color: palette[i % palette.length],
      tailLength: getRandomIntBetween(8, 16),
      launchArc: randomBetween(8, 30)
    });
  }
  return comets;
}

function buildConfettiPieces(width, height, now) {
  const count = getRandomIntBetween(120, 220);
  const colors = ['#263c92', '#108040', '#ffffff', '#d9dde2'];
  const pieces = [];
  for (let i = 0; i < count; i += 1) {
    pieces.push({
      x: randomBetween(0, width),
      y: randomBetween(-height * 0.18, -8),
      vy: randomBetween(height * 0.22, height * 0.42) / 1000,
      driftAmp: randomBetween(2, 8),
      driftFreq: randomBetween(0.9, 2.4),
      sizeW: Math.random() > 0.58 ? 2 : 1,
      sizeH: Math.random() > 0.45 ? 2 : 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      bornAt: now
    });
  }
  return pieces;
}

function triggerCelebrationFX(options = {}) {
  const independent = !!options.independent;
  const showWelcome = options.showWelcome !== false;
  if (showWelcome) {
    if (welcomeMessageTimerId) {
      clearTimeout(welcomeMessageTimerId);
      welcomeMessageTimerId = 0;
    }
    setWelcomeMessageActive(true);
  }
  if (!fxFireworksCtx || !fxConfettiCtx) {
    if (showWelcome) {
      welcomeMessageTimerId = window.setTimeout(() => {
        welcomeMessageTimerId = 0;
        setWelcomeMessageActive(false);
      }, 900);
    }
    return;
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (showWelcome) {
      welcomeMessageTimerId = window.setTimeout(() => {
        welcomeMessageTimerId = 0;
        setWelcomeMessageActive(false);
      }, 900);
    }
    return;
  }
  if (!independent && (fxCelebrationPlayed || isCelebrationPlayed())) {
    if (showWelcome) {
      welcomeMessageTimerId = window.setTimeout(() => {
        welcomeMessageTimerId = 0;
        setWelcomeMessageActive(false);
      }, 1200);
    }
    return;
  }

  const size = syncFXCanvasSize();
  if (!size) return;
  const { width, height } = size;
  const now = performance.now();
  fxCelebrationStartAt = now;
  fxFireworksComets = buildFireworkComets(width, height, now);
  fxFireworksBursts = [];
  fxConfettiPieces = buildConfettiPieces(width, height, now);
  if (!independent) {
    setCelebrationPlayed();
  }

  const fireworksDuration = randomBetween(1500, 2500);
  const confettiDuration = randomBetween(2500, 4000);
  if (showWelcome) {
    welcomeMessageTimerId = window.setTimeout(() => {
      welcomeMessageTimerId = 0;
      setWelcomeMessageActive(false);
    }, Math.round(confettiDuration));
  }

  const runFireworks = (ts) => {
    if (!fxFireworksCtx) return;
    const sizeNow = syncFXCanvasSize();
    if (!sizeNow) return;
    const w = sizeNow.width;
    const h = sizeNow.height;
    const ctx = fxFireworksCtx;
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, w, h * 0.33);
    ctx.clip();

    const nextComets = [];
    for (const comet of fxFireworksComets) {
      const age = ts - comet.bornAt;
      if (age < 0) {
        nextComets.push(comet);
        continue;
      }
      const t = clamp(age / comet.travel, 0, 1);
      const eased = 1 - Math.pow(1 - t, 1.65);
      const x = comet.startX + (comet.endX - comet.startX) * eased;
      const yLinear = comet.startY + (comet.endY - comet.startY) * eased;
      const y = yLinear - comet.launchArc * (4 * eased * (1 - eased));
      ctx.fillStyle = comet.color;
      ctx.fillRect(Math.round(x), Math.round(y), 2, 2);
      const dir = comet.endX > comet.startX ? 1 : -1;
      for (let trail = 1; trail <= comet.tailLength; trail += 1) {
        const tx = x - (dir * trail * 2);
        const ty = y + trail * 0.35;
        ctx.globalAlpha = Math.max(0.06, 1 - trail * 0.11);
        ctx.fillRect(Math.round(tx), Math.round(ty), trail % 3 === 0 ? 1 : 2, 1);
      }
      ctx.globalAlpha = 1;
      if (t < 1) {
        nextComets.push(comet);
      } else {
        const burstCount = getRandomIntBetween(80, 136);
        const burstColors = [comet.color, '#ffffff', '#69BE28', '#263c92'];
        for (let i = 0; i < burstCount; i += 1) {
          const angle = (Math.PI * 2 * i) / burstCount;
          fxFireworksBursts.push({
            x,
            y,
            vx: Math.cos(angle) * randomBetween(20, 68) / 1000,
            vy: Math.sin(angle) * randomBetween(20, 68) / 1000,
            bornAt: ts,
            duration: randomBetween(340, 820),
            color: burstColors[Math.floor(Math.random() * burstColors.length)],
            shape: Math.random() > 0.5 ? '+' : 'x',
            size: Math.random() > 0.65 ? 2 : 1
          });
        }
        // Core flash for a more dynamic 16-bit burst pop.
        fxFireworksBursts.push({
          x,
          y,
          vx: 0,
          vy: 0,
          bornAt: ts,
          duration: randomBetween(120, 220),
          color: '#ffffff',
          shape: 'core',
          size: 4
        });
      }
    }
    fxFireworksComets = nextComets;

    const nextBursts = [];
    for (const p of fxFireworksBursts) {
      const age = ts - p.bornAt;
      if (age >= p.duration) continue;
      const alpha = 1 - age / p.duration;
      const px = p.x + p.vx * age;
      const py = p.y + p.vy * age;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      if (p.shape === 'core') {
        const r = Math.max(1, Math.round(p.size * alpha));
        ctx.fillRect(Math.round(px) - r, Math.round(py) - 1, r * 2 + 1, 2);
        ctx.fillRect(Math.round(px) - 1, Math.round(py) - r, 2, r * 2 + 1);
      } else if (p.shape === '+') {
        const s = p.size || 1;
        ctx.fillRect(Math.round(px) - s, Math.round(py), s * 2 + 1, 1);
        ctx.fillRect(Math.round(px), Math.round(py) - s, 1, s * 2 + 1);
      } else {
        ctx.fillRect(Math.round(px), Math.round(py), 1, 1);
        if (p.size > 1) {
          ctx.fillRect(Math.round(px) + 1, Math.round(py) + 1, 1, 1);
          ctx.fillRect(Math.round(px) - 1, Math.round(py) + 1, 1, 1);
        }
      }
      nextBursts.push(p);
    }
    ctx.globalAlpha = 1;
    fxFireworksBursts = nextBursts;
    ctx.restore();

    if (ts - fxCelebrationStartAt < fireworksDuration || fxFireworksComets.length || fxFireworksBursts.length) {
      fxFireworksRafId = requestAnimationFrame(runFireworks);
    } else {
      fxFireworksRafId = 0;
      ctx.clearRect(0, 0, w, h);
    }
  };

  const runConfetti = (ts) => {
    if (!fxConfettiCtx) return;
    const sizeNow = syncFXCanvasSize();
    if (!sizeNow) return;
    const w = sizeNow.width;
    const h = sizeNow.height;
    const ctx = fxConfettiCtx;
    ctx.clearRect(0, 0, w, h);

    const nextPieces = [];
    for (const piece of fxConfettiPieces) {
      const age = ts - piece.bornAt;
      const t = age / 3000;
      const px = piece.x + Math.sin(t * Math.PI * 2 * piece.driftFreq) * piece.driftAmp;
      const py = piece.y + piece.vy * age;
      if (py > h + 12) continue;
      ctx.fillStyle = piece.color;
      const flip = Math.sin(t * Math.PI * 8) > 0 ? piece.sizeW : 1;
      ctx.fillRect(Math.round(px), Math.round(py), flip, piece.sizeH);
      nextPieces.push(piece);
    }
    fxConfettiPieces = nextPieces;

    if (ts - fxCelebrationStartAt < confettiDuration || fxConfettiPieces.length) {
      fxConfettiRafId = requestAnimationFrame(runConfetti);
    } else {
      fxConfettiRafId = 0;
      ctx.clearRect(0, 0, w, h);
    }
  };

  if (fxFireworksRafId) cancelAnimationFrame(fxFireworksRafId);
  if (fxConfettiRafId) cancelAnimationFrame(fxConfettiRafId);
  fxFireworksRafId = requestAnimationFrame(runFireworks);
  fxConfettiRafId = requestAnimationFrame(runConfetti);
}

function pickFlightTrajectoryType() {
  const r = Math.random();
  if (r < 0.2) return 'straight'; // Keep straight paths occasional only.
  if (r < 0.42) return 'sine';
  if (r < 0.6) return 'climb';
  if (r < 0.78) return 'descent';
  if (r < 0.89) return 'dipRise';
  return 'riseDip';
}

function buildFlightPathConfig(frameHeight, yMin, yMax) {
  const type = pickFlightTrajectoryType();
  const range = Math.max(1, yMax - yMin);
  const amplitude = clamp(
    randomBetween(frameHeight * 0.01, frameHeight * 0.03),
    2,
    range * 0.22
  );
  const margin = type === 'sine' || type === 'dipRise' || type === 'riseDip' ? amplitude : 0;
  const safeMin = Math.min(yMax, yMin + margin);
  const safeMax = Math.max(safeMin, yMax - margin);
  const y0 = randomBetween(safeMin, safeMax);
  const drift = randomBetween(frameHeight * 0.01, frameHeight * 0.04);

  let y1 = y0;
  if (type === 'climb') y1 = y0 - drift;
  if (type === 'descent') y1 = y0 + drift;
  if (type === 'dipRise' || type === 'riseDip') {
    y1 = y0 + randomBetween(-drift * 0.35, drift * 0.35);
  }
  y1 = clamp(y1, safeMin, safeMax);

  return {
    type,
    yMin,
    yMax,
    y0,
    y1,
    amplitude,
    wobbleAmplitude: type === 'straight' ? 0 : amplitude * randomBetween(0.12, 0.28),
    wobbleFrequency: randomBetween(0.65, 1.4),
    frequency: randomBetween(0.6, 1.25),
    phase: randomBetween(0, Math.PI * 2)
  };
}

function getFlightPathY(progress, cfg) {
  const eased = 1 - Math.pow(1 - progress, 2);
  const linear = cfg.y0 + (cfg.y1 - cfg.y0) * eased;
  // Subtle airborne variation so sprites soar instead of sliding in rigid lines.
  if (cfg.type === 'sine') {
    const sineY = linear + cfg.amplitude * Math.sin(progress * cfg.frequency * Math.PI * 2 + cfg.phase);
    return clamp(sineY, cfg.yMin, cfg.yMax);
  }
  if (cfg.type === 'dipRise') {
    const dipRiseY = linear + cfg.amplitude * (4 * progress * (1 - progress));
    const wobble = cfg.wobbleAmplitude * Math.sin(progress * cfg.wobbleFrequency * Math.PI + cfg.phase);
    return clamp(dipRiseY + wobble, cfg.yMin, cfg.yMax);
  }
  if (cfg.type === 'riseDip') {
    const riseDipY = linear - cfg.amplitude * (4 * progress * (1 - progress));
    const wobble = cfg.wobbleAmplitude * Math.sin(progress * cfg.wobbleFrequency * Math.PI + cfg.phase);
    return clamp(riseDipY + wobble, cfg.yMin, cfg.yMax);
  }
  if (cfg.type === 'straight') {
    return clamp(linear, cfg.yMin, cfg.yMax);
  }
  const wobble = cfg.wobbleAmplitude * Math.sin(progress * cfg.wobbleFrequency * Math.PI + cfg.phase);
  return clamp(linear + wobble, cfg.yMin, cfg.yMax);
}

function chooseHawkDepthLayer() {
  if (!SCENE || !HAWK_DEPTH_LAYERS.length) return null;
  const available = HAWK_DEPTH_LAYERS
    .map((profile) => {
      const host = SCENE.querySelector(profile.selector);
      return host ? { ...profile, host } : null;
    })
    .filter(Boolean);
  if (!available.length) return null;

  const total = available.reduce((sum, profile) => sum + (profile.depthWeight || 0), 0);
  let roll = Math.random() * total;
  for (const profile of available) {
    roll -= (profile.depthWeight || 0);
    if (roll <= 0) return profile;
  }
  return available[available.length - 1];
}

function chooseEagleDepthProfile() {
  if (!EAGLE_DEPTH_PROFILES.length) return null;
  const available = EAGLE_DEPTH_PROFILES
    .map((profile) => {
      const host = profile.selector === '#eagleOverlay'
        ? EAGLE_OVERLAY
        : SCENE?.querySelector(profile.selector);
      return host ? { ...profile, host } : null;
    })
    .filter(Boolean);
  if (!available.length) return null;

  const total = available.reduce((sum, profile) => sum + (profile.depthWeight || 0), 0);
  let roll = Math.random() * total;
  for (const profile of available) {
    roll -= (profile.depthWeight || 0);
    if (roll <= 0) return profile;
  }
  return available[available.length - 1];
}

function scheduleNextHawkFlyover() {
  if (hawkTimerId) {
    clearTimeout(hawkTimerId);
  }
  const delay = getRandomIntBetween(HAWK_INTERVAL_MIN_MS, HAWK_INTERVAL_MAX_MS);
  hawkTimerId = window.setTimeout(() => {
    hawkTimerId = 0;
    launchHawkFlyover();
  }, delay);
}

function scheduleNextSeaplaneFlyover() {
  if (seaplaneTimerId) {
    clearTimeout(seaplaneTimerId);
  }
  const delay = getRandomIntBetween(SEAPLANE_INTERVAL_MIN_MS, SEAPLANE_INTERVAL_MAX_MS);
  seaplaneTimerId = window.setTimeout(() => {
    seaplaneTimerId = 0;
    launchSeaplaneFlyover();
  }, delay);
}

function scheduleNextBaldEagleFlyover() {
  if (baldEagleTimerId) {
    clearTimeout(baldEagleTimerId);
  }
  const delay = getRandomIntBetween(BALD_EAGLE_INTERVAL_MIN_MS, BALD_EAGLE_INTERVAL_MAX_MS);
  baldEagleTimerId = window.setTimeout(() => {
    baldEagleTimerId = 0;
    launchBaldEagleFlyover();
  }, delay);
}

function scheduleNextSalmonFlyover() {
  if (salmonTimerId) {
    clearTimeout(salmonTimerId);
  }
  const delay = getRandomIntBetween(SALMON_INTERVAL_MIN_MS, SALMON_INTERVAL_MAX_MS);
  salmonTimerId = window.setTimeout(() => {
    salmonTimerId = 0;
    launchSalmonFlyover();
  }, delay);
}

function cleanupActiveHawk() {
  if (hawkRafId) {
    cancelAnimationFrame(hawkRafId);
    hawkRafId = 0;
  }
  if (activeHawkEl?.parentNode) {
    activeHawkEl.parentNode.removeChild(activeHawkEl);
  }
  activeHawkEl = null;
}

function cleanupActiveSeaplane() {
  if (seaplaneRafId) {
    cancelAnimationFrame(seaplaneRafId);
    seaplaneRafId = 0;
  }
  if (activeSeaplaneEl?.parentNode) {
    activeSeaplaneEl.parentNode.removeChild(activeSeaplaneEl);
  }
  activeSeaplaneEl = null;
}

function cleanupActiveBaldEagle() {
  if (baldEagleRafId) {
    cancelAnimationFrame(baldEagleRafId);
    baldEagleRafId = 0;
  }
  if (activeBaldEagleEl?.parentNode) {
    activeBaldEagleEl.parentNode.removeChild(activeBaldEagleEl);
  }
  activeBaldEagleEl = null;
}

function cleanupActiveSalmon() {
  if (salmonRafId) {
    cancelAnimationFrame(salmonRafId);
    salmonRafId = 0;
  }
  if (activeSalmonEl?.parentNode) {
    activeSalmonEl.parentNode.removeChild(activeSalmonEl);
  }
  activeSalmonEl = null;
}

function launchHawkFlyover() {
  if (!STADIUM_FRAME_MASK || !hawkSpriteSrc) {
    scheduleNextHawkFlyover();
    return;
  }
  if (activeHawkEl) {
    return;
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const profile = chooseHawkDepthLayer();
  if (!profile) {
    scheduleNextHawkFlyover();
    return;
  }

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) {
    scheduleNextHawkFlyover();
    return;
  }

  const hawk = document.createElement('img');
  hawk.className = 'hawkSprite';
  hawk.src = hawkSpriteSrc;
  hawk.alt = '';
  hawk.decoding = 'async';
  hawk.setAttribute('aria-hidden', 'true');

  const hawkWidth = frameRect.width * HAWK_BASE_WIDTH_RATIO * profile.scaleFactor * HAWK_RANDOM_RENDER_SCALE;
  const hawkHeight = hawkWidth * 0.5;

  const yMin = frameRect.height * profile.yMinPct;
  const yMax = frameRect.height * profile.yMaxPct;
  const yMaxClamped = Math.max(yMin, yMax - hawkHeight);
  const flightPath = buildFlightPathConfig(frameRect.height, yMin, yMaxClamped);

  const leftToRight = Math.random() > 0.5;
  const startX = leftToRight ? -hawkWidth * 1.2 : frameRect.width + hawkWidth * 1.2;
  const endX = leftToRight ? frameRect.width + hawkWidth * 1.2 : -hawkWidth * 1.2;
  const distance = Math.abs(endX - startX);
  const speed = profile.speedPxPerSec;
  const durationMs = (distance / speed) * 1000;
  hawk.style.width = `${hawkWidth.toFixed(2)}px`;
  hawk.style.height = `${hawkHeight.toFixed(2)}px`;
  profile.host.appendChild(hawk);
  activeHawkEl = hawk;

  const startTime = performance.now();
  const facing = leftToRight
    ? (HAWK_FACES_RIGHT ? 1 : -1)
    : (HAWK_FACES_RIGHT ? -1 : 1);

  function tick(now) {
    if (!activeHawkEl) return;
    const elapsed = now - startTime;
    const progress = Math.max(0, Math.min(1, elapsed / durationMs));
    const x = startX + (endX - startX) * progress;
    const y = getFlightPathY(progress, flightPath);
    activeHawkEl.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scaleX(${facing})`;

    if (progress < 1) {
      hawkRafId = requestAnimationFrame(tick);
      return;
    }

    cleanupActiveHawk();
    scheduleNextHawkFlyover();
  }

  hawkRafId = requestAnimationFrame(tick);
}

function launchSeaplaneFlyover() {
  if (!STADIUM_FRAME_MASK || !SEAPLANE_OVERLAY || !seaplaneSpriteSrc) {
    scheduleNextSeaplaneFlyover();
    return;
  }
  if (activeSeaplaneEl) return;

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) {
    scheduleNextSeaplaneFlyover();
    return;
  }

  const plane = document.createElement('img');
  plane.className = 'seaplaneOverlay__sprite';
  plane.src = seaplaneSpriteSrc;
  plane.alt = '';
  plane.decoding = 'async';
  plane.setAttribute('aria-hidden', 'true');

  const baseWidth = frameRect.width * randomBetween(0.23, 0.3);
  const planeWidth = baseWidth;
  const planeHeight = planeWidth * 0.45;
  const yMin = frameRect.height * 0.02;
  const yMax = Math.max(yMin, frameRect.height * 0.22 - planeHeight);
  const flightPath = buildFlightPathConfig(frameRect.height, yMin, yMax);
  // Random depth pass relative to heading copy: sometimes behind, sometimes above.
  const inFrontOfHeading = Math.random() > 0.5;
  SEAPLANE_OVERLAY.style.zIndex = inFrontOfHeading ? '56' : '54';
  const leftToRight = Math.random() > 0.5;
  const facing = leftToRight ? 1 : -1;
  const startX = leftToRight ? -planeWidth * 1.3 : frameRect.width + planeWidth * 1.3;
  const endX = leftToRight ? frameRect.width + planeWidth * 1.3 : -planeWidth * 1.3;
  const distance = Math.abs(endX - startX);
  // Slow down on smaller viewports and add broader per-pass variance so flyovers feel less uniform.
  const frameScale = clamp(frameRect.width / 1080, 0.45, 1.25);
  const screenSpeedFactor = 0.55 + (0.45 * frameScale);
  const speed = randomBetween(160, 250) * screenSpeedFactor;
  const durationMs = (distance / speed) * 1000;

  plane.style.width = `${planeWidth.toFixed(2)}px`;
  plane.style.height = `${planeHeight.toFixed(2)}px`;
  plane.style.opacity = '1';
  plane.style.filter = 'drop-shadow(0 1px 0 rgba(255, 255, 255, 0.36)) drop-shadow(0 3px 0 rgba(5, 12, 28, 0.62))';
  SEAPLANE_OVERLAY.appendChild(plane);
  activeSeaplaneEl = plane;

  const startTime = performance.now();
  function tick(now) {
    if (!activeSeaplaneEl) return;
    const elapsed = now - startTime;
    const progress = Math.max(0, Math.min(1, elapsed / durationMs));
    const x = startX + (endX - startX) * progress;
    const y = getFlightPathY(progress, flightPath);
    activeSeaplaneEl.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scaleX(${facing})`;

    if (progress < 1) {
      seaplaneRafId = requestAnimationFrame(tick);
      return;
    }
    cleanupActiveSeaplane();
    scheduleNextSeaplaneFlyover();
  }
  seaplaneRafId = requestAnimationFrame(tick);
}

function launchBaldEagleFlyover() {
  if (!STADIUM_FRAME_MASK || !EAGLE_OVERLAY || (!baldEagleRightSrc && !baldEagleLeftSrc)) {
    scheduleNextBaldEagleFlyover();
    return;
  }
  if (activeBaldEagleEl) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!BODY?.classList.contains('splash-complete')) {
    scheduleNextBaldEagleFlyover();
    return;
  }

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) {
    scheduleNextBaldEagleFlyover();
    return;
  }

  const depthProfile = chooseEagleDepthProfile();
  if (!depthProfile) {
    scheduleNextBaldEagleFlyover();
    return;
  }

  const leftToRight = Math.random() > 0.5;
  let spriteSrc = '';
  if (leftToRight) {
    // L->R only: with-salmon appears half as often as the standard right-facing eagle.
    const useWithSalmon = !!baldEagleWithSalmonSrc && Math.random() < (1 / 3);
    spriteSrc = useWithSalmon
      ? baldEagleWithSalmonSrc
      : (baldEagleRightSrc || baldEagleWithSalmonSrc || baldEagleLeftSrc);
  } else {
    spriteSrc = baldEagleLeftSrc || baldEagleRightSrc;
  }
  if (!spriteSrc) {
    scheduleNextBaldEagleFlyover();
    return;
  }

  const probe = new Image();
  probe.src = spriteSrc;
  const eagleWidth = (probe.naturalWidth || 346) * BALD_EAGLE_RENDER_SCALE * depthProfile.scaleFactor;
  const eagleHeight = (probe.naturalHeight || 300) * BALD_EAGLE_RENDER_SCALE * depthProfile.scaleFactor;

  const eagle = document.createElement('img');
  eagle.className = 'baldEagleSprite';
  eagle.src = spriteSrc;
  eagle.alt = '';
  eagle.decoding = 'async';
  eagle.setAttribute('aria-hidden', 'true');
  eagle.style.width = `${eagleWidth}px`;
  eagle.style.height = `${eagleHeight}px`;

  const yMin = frameRect.height * depthProfile.yMinPct;
  const yMax = Math.max(yMin, frameRect.height * depthProfile.yMaxPct - eagleHeight);
  const flightPath = buildFlightPathConfig(frameRect.height, yMin, yMax);

  const startX = leftToRight ? -eagleWidth * 1.2 : frameRect.width + eagleWidth * 1.2;
  const endX = leftToRight ? frameRect.width + eagleWidth * 1.2 : -eagleWidth * 1.2;
  const distance = Math.abs(endX - startX);
  const durationMs = (distance / randomBetween(depthProfile.speedMin, depthProfile.speedMax)) * 1000;

  depthProfile.host.appendChild(eagle);
  activeBaldEagleEl = eagle;

  const startTime = performance.now();
  function tick(now) {
    if (!activeBaldEagleEl) return;
    const t = Math.max(0, Math.min(1, (now - startTime) / durationMs));
    const x = startX + (endX - startX) * t;
    const y = getFlightPathY(t, flightPath);
    activeBaldEagleEl.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;

    if (t < 1) {
      baldEagleRafId = requestAnimationFrame(tick);
      return;
    }
    cleanupActiveBaldEagle();
    scheduleNextBaldEagleFlyover();
  }

  baldEagleRafId = requestAnimationFrame(tick);
}

function launchSalmonFlyover() {
  if (!STADIUM_FRAME_MASK || !SCENE || (!salmonSpriteRightSrc && !salmonSpriteLeftSrc)) {
    scheduleNextSalmonFlyover();
    return;
  }
  if (activeSalmonEl) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!BODY?.classList.contains('splash-complete')) {
    scheduleNextSalmonFlyover();
    return;
  }

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) {
    scheduleNextSalmonFlyover();
    return;
  }

  const salmon = document.createElement('img');
  salmon.className = 'salmonSprite';
  const leftToRight = Math.random() > 0.5;
  const salmonSrc = leftToRight
    ? (salmonSpriteRightSrc || salmonSpriteLeftSrc)
    : (salmonSpriteLeftSrc || salmonSpriteRightSrc);
  if (!salmonSrc) {
    scheduleNextSalmonFlyover();
    return;
  }
  salmon.src = salmonSrc;
  salmon.alt = '';
  salmon.decoding = 'async';
  salmon.setAttribute('aria-hidden', 'true');

  const salmonWidth = frameRect.width * randomBetween(1.6, 2.4);
  const salmonHeight = salmonWidth * 0.55;
  const xStart = leftToRight ? -salmonWidth * 1.4 : frameRect.width + salmonWidth * 1.4;
  const xEnd = leftToRight ? frameRect.width + salmonWidth * 1.4 : -salmonWidth * 1.4;
  const startY = frameRect.height * randomBetween(0.64, 0.72);
  const apexY = frameRect.height * randomBetween(0.46, 0.54);
  const distance = Math.abs(xEnd - xStart);
  const durationMs = (distance / randomBetween(360, 460)) * 1000;

  SCENE.appendChild(salmon);
  activeSalmonEl = salmon;

  const startTime = performance.now();
  function tick(now) {
    if (!activeSalmonEl) return;
    const t = Math.max(0, Math.min(1, (now - startTime) / durationMs));
    const x = xStart + (xEnd - xStart) * t;
    // Parabolic arc with peak at midpoint (t=0.5).
    const y = startY - (4 * (startY - apexY) * t * (1 - t));
    const tilt = leftToRight ? -14 + t * 28 : 14 - t * 28;
    activeSalmonEl.style.width = `${salmonWidth.toFixed(2)}px`;
    activeSalmonEl.style.height = `${salmonHeight.toFixed(2)}px`;
    activeSalmonEl.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg)`;

    if (t < 1) {
      salmonRafId = requestAnimationFrame(tick);
      return;
    }
    cleanupActiveSalmon();
    scheduleNextSalmonFlyover();
  }

  salmonRafId = requestAnimationFrame(tick);
}

function resolveHawkSpriteSource() {
  return new Promise((resolve) => {
    const candidates = [...HAWK_SPRITE_CANDIDATES];

    function tryNext() {
      const src = candidates.shift();
      if (!src) {
        resolve('');
        return;
      }
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => tryNext();
      img.src = src;
    }

    tryNext();
  });
}

function resolveSpriteSource(candidates) {
  return new Promise((resolve) => {
    const queue = [...candidates];

    function tryNext() {
      const src = queue.shift();
      if (!src) {
        resolve('');
        return;
      }
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => tryNext();
      img.src = src;
    }

    tryNext();
  });
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInQuad(t) {
  return t * t;
}

function runRafAnimation(durationMs, onFrame) {
  return new Promise((resolve) => {
    const start = performance.now();

    function tick(now) {
      const t = Math.max(0, Math.min(1, (now - start) / durationMs));
      onFrame(t, now - start);
      if (t < 1) {
        requestAnimationFrame(tick);
        return;
      }
      resolve();
    }

    requestAnimationFrame(tick);
  });
}

function hideProposalSprites() {
  if (PROPOSAL_HAWK) PROPOSAL_HAWK.style.opacity = '0';
  if (PROPOSAL_CLOSED_SCROLL) PROPOSAL_CLOSED_SCROLL.style.opacity = '0';
  if (PROPOSAL_OPEN_SCROLL) PROPOSAL_OPEN_SCROLL.style.opacity = '0';
}

function setSpriteFramePos(el, x, y, w, h, rotationDeg = 0) {
  if (!el) return;
  el.style.width = `${w}px`;
  el.style.height = `${h}px`;
  el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotationDeg}deg)`;
}

function closeProposalReveal() {
  proposalRunning = false;
  proposalOpen = false;
  BODY?.classList.remove('proposal-open');
  hideProposalSprites();
  if (PROPOSAL_HAWK) {
    PROPOSAL_HAWK.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (PROPOSAL_CLOSED_SCROLL) {
    PROPOSAL_CLOSED_SCROLL.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (PROPOSAL_OPEN_SCROLL) {
    PROPOSAL_OPEN_SCROLL.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (PROPOSAL_CONTENT) {
    PROPOSAL_CONTENT.style.removeProperty('--proposal-content-left');
    PROPOSAL_CONTENT.style.removeProperty('--proposal-content-top');
    PROPOSAL_CONTENT.style.removeProperty('--proposal-content-right');
    PROPOSAL_CONTENT.style.removeProperty('--proposal-content-bottom');
    PROPOSAL_CONTENT.scrollTop = 0;
  }
}

function resizeSignatureCanvas() {
  if (!JOIN_SIGNATURE_PAD) return;
  const rect = JOIN_SIGNATURE_PAD.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  JOIN_SIGNATURE_PAD.width = Math.max(1, Math.floor(rect.width * dpr));
  JOIN_SIGNATURE_PAD.height = Math.max(1, Math.floor(rect.height * dpr));
  const ctx = JOIN_SIGNATURE_PAD.getContext('2d');
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = '#f7f7ee';
  ctx.fillRect(0, 0, rect.width, rect.height);
}

function clearSignaturePad() {
  if (!JOIN_SIGNATURE_PAD) return;
  const ctx = JOIN_SIGNATURE_PAD.getContext('2d');
  if (!ctx) return;
  const rect = JOIN_SIGNATURE_PAD.getBoundingClientRect();
  ctx.fillStyle = '#f7f7ee';
  ctx.fillRect(0, 0, rect.width, rect.height);
}

function getSignaturePoint(event) {
  if (!JOIN_SIGNATURE_PAD) return { x: 0, y: 0 };
  const rect = JOIN_SIGNATURE_PAD.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function drawSignatureLine(x0, y0, x1, y1) {
  if (!JOIN_SIGNATURE_PAD) return;
  const ctx = JOIN_SIGNATURE_PAD.getContext('2d');
  if (!ctx) return;
  ctx.strokeStyle = '#263c92';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

function initJoinSignaturePad() {
  if (signaturePadReady || !JOIN_SIGNATURE_PAD) return;
  signaturePadReady = true;
  resizeSignatureCanvas();

  JOIN_SIGNATURE_PAD.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    signatureDrawing = true;
    const p = getSignaturePoint(event);
    signatureLastX = p.x;
    signatureLastY = p.y;
    JOIN_SIGNATURE_PAD.setPointerCapture(event.pointerId);
  });

  JOIN_SIGNATURE_PAD.addEventListener('pointermove', (event) => {
    if (!signatureDrawing) return;
    event.preventDefault();
    const p = getSignaturePoint(event);
    drawSignatureLine(signatureLastX, signatureLastY, p.x, p.y);
    signatureLastX = p.x;
    signatureLastY = p.y;
  });

  const endDraw = (event) => {
    if (!signatureDrawing) return;
    signatureDrawing = false;
    try {
      JOIN_SIGNATURE_PAD.releasePointerCapture(event.pointerId);
    } catch {
      // no-op
    }
  };

  JOIN_SIGNATURE_PAD.addEventListener('pointerup', endDraw);
  JOIN_SIGNATURE_PAD.addEventListener('pointercancel', endDraw);
  window.addEventListener('resize', () => {
    if (!joinOpen) return;
    resizeSignatureCanvas();
  });
}

function closeJoinCollective() {
  joinOpen = false;
  joinAnimating = false;
  BODY?.classList.remove('join-open', 'join-animating');
  if (JOIN_INLINE_ERROR) JOIN_INLINE_ERROR.textContent = '';
}

async function ensureSharehawkAssets() {
  const [footballSrc, glassSrc] = await Promise.all([
    footballSpriteSrc ? Promise.resolve(footballSpriteSrc) : resolveSpriteSource(FOOTBALL_SPRITE_CANDIDATES),
    brokenGlassSpriteSrc ? Promise.resolve(brokenGlassSpriteSrc) : resolveSpriteSource(BROKEN_GLASS_SPRITE_CANDIDATES)
  ]);
  footballSpriteSrc = footballSrc || footballSpriteSrc;
  brokenGlassSpriteSrc = glassSrc || brokenGlassSpriteSrc;
}

function resetSharehawkImpactState() {
  if (sharehawkRafId) {
    cancelAnimationFrame(sharehawkRafId);
    sharehawkRafId = 0;
  }
  sharehawkAnimating = false;
  sharehawkImpacted = false;
  if (JUMBOTRON_PANEL) {
    JUMBOTRON_PANEL.classList.remove('jumbotronFlicker', 'jumbotronOff');
  }
  if (JUMBOTRON_IMPACT_SPRITE) {
    JUMBOTRON_IMPACT_SPRITE.style.opacity = '0';
    JUMBOTRON_IMPACT_SPRITE.style.width = '0';
    JUMBOTRON_IMPACT_SPRITE.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (JUMBOTRON_GLASS_SPRITE) {
    JUMBOTRON_GLASS_SPRITE.style.opacity = '0';
    JUMBOTRON_GLASS_SPRITE.style.width = '0';
    JUMBOTRON_GLASS_SPRITE.style.left = '0';
    JUMBOTRON_GLASS_SPRITE.style.top = '0';
  }
  if (!isJumbotronBroken()) {
    brokenGlassLock = null;
  }
  if (SHARE_HAWK_BTN) {
    SHARE_HAWK_BTN.disabled = sharehawkJoined;
    SHARE_HAWK_BTN.setAttribute('aria-disabled', sharehawkJoined ? 'true' : 'false');
  }
}

function isJumbotronBroken() {
  try {
    return sessionStorage.getItem(JUMBOTRON_BROKEN_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

function setJumbotronBroken(lock) {
  try {
    sessionStorage.setItem(JUMBOTRON_BROKEN_SESSION_KEY, '1');
    if (lock) {
      const safeLock = {
        xPct: clamp(Number(lock.xPct) || 0.62, 0, 1),
        yPct: clamp(Number(lock.yPct) || 0.45, 0, 1),
        widthPct: clamp(Number(lock.widthPct) || 0.18, 0.01, 1),
        screenNX: clamp(Number(lock.screenNX) || 0.62, 0, 1),
        screenNY: clamp(Number(lock.screenNY) || 0.45, 0, 1)
      };
      sessionStorage.setItem(JUMBOTRON_BROKEN_LOCK_SESSION_KEY, JSON.stringify(safeLock));
      sessionStorage.setItem(JUMBOTRON_GLASS_NX_SESSION_KEY, String(safeLock.screenNX));
      sessionStorage.setItem(JUMBOTRON_GLASS_NY_SESSION_KEY, String(safeLock.screenNY));
      brokenGlassLock = safeLock;
    }
  } catch {
    // Ignore storage failures; keep runtime behavior.
    if (lock) {
      brokenGlassLock = lock;
    }
  }
}

function hydrateJumbotronBrokenState() {
  if (!isJumbotronBroken()) return;
  try {
    const raw = sessionStorage.getItem(JUMBOTRON_BROKEN_LOCK_SESSION_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return;
    brokenGlassLock = {
      xPct: clamp(Number(parsed.xPct) || 0.62, 0, 1),
      yPct: clamp(Number(parsed.yPct) || 0.45, 0, 1),
      widthPct: clamp(Number(parsed.widthPct) || 0.18, 0.01, 1),
      screenNX: clamp(Number(parsed.screenNX) || Number(sessionStorage.getItem(JUMBOTRON_GLASS_NX_SESSION_KEY)) || 0.62, 0, 1),
      screenNY: clamp(Number(parsed.screenNY) || Number(sessionStorage.getItem(JUMBOTRON_GLASS_NY_SESSION_KEY)) || 0.45, 0, 1)
    };
  } catch {
    // no-op
  }
}

function applyBrokenGlassIfNeeded() {
  if (!JUMBOTRON_GLASS_SPRITE || !JUMBOTRON_PANEL) return;
  if (!isJumbotronBroken()) {
    JUMBOTRON_GLASS_SPRITE.style.opacity = '0';
    return;
  }
  if (!brokenGlassLock) {
    brokenGlassLock = { xPct: 0.62, yPct: 0.45, widthPct: 0.18, screenNX: 0.62, screenNY: 0.45 };
  }
  if (!brokenGlassSpriteSrc) {
    brokenGlassSpriteSrc = BROKEN_GLASS_SPRITE_CANDIDATES[0];
  }
  JUMBOTRON_GLASS_SPRITE.src = brokenGlassSpriteSrc;
  updateBrokenGlassLayout();
}

function persistSharehawkJoinedState(joined) {
  sharehawkJoined = joined;
  if (BODY) {
    BODY.classList.toggle('sharehawk-joined', joined);
  }
  if (SHARE_HAWK_BTN) {
    SHARE_HAWK_BTN.disabled = joined;
    SHARE_HAWK_BTN.setAttribute('aria-disabled', joined ? 'true' : 'false');
  }
  try {
    if (joined) {
      sessionStorage.setItem(SHAREHAWK_SESSION_KEY, '1');
      setSharehawkSessionState(true);
    } else {
      sessionStorage.removeItem(SHAREHAWK_SESSION_KEY);
      setSharehawkSessionState(false);
    }
  } catch {
    // Ignore storage failures and keep runtime behavior stable.
  }
}

function hydrateSharehawkJoinedState() {
  try {
    persistSharehawkJoinedState(sessionStorage.getItem(SHAREHAWK_SESSION_KEY) === '1');
  } catch {
    persistSharehawkJoinedState(false);
  }
}

function updateBrokenGlassLayout() {
  if (!brokenGlassLock || !JUMBOTRON_GLASS_SPRITE || !JUMBOTRON_PANEL) return;
  const panelRect = JUMBOTRON_PANEL.getBoundingClientRect();
  if (!panelRect.width || !panelRect.height) return;

  const widthPct = brokenGlassLock.widthPct;
  let leftPct = brokenGlassLock.xPct * 100;
  let topPct = brokenGlassLock.yPct * 100;
  if (JUMBOTRON_SCREEN && Number.isFinite(brokenGlassLock.screenNX) && Number.isFinite(brokenGlassLock.screenNY)) {
    const screenRect = JUMBOTRON_SCREEN.getBoundingClientRect();
    if (screenRect.width && screenRect.height) {
      const lockX = (screenRect.left - panelRect.left) + (screenRect.width * brokenGlassLock.screenNX);
      const lockY = (screenRect.top - panelRect.top) + (screenRect.height * brokenGlassLock.screenNY);
      leftPct = (lockX / panelRect.width) * 100;
      topPct = (lockY / panelRect.height) * 100;
    }
  }
  JUMBOTRON_GLASS_SPRITE.style.left = `${leftPct.toFixed(4)}%`;
  JUMBOTRON_GLASS_SPRITE.style.top = `${topPct.toFixed(4)}%`;
  JUMBOTRON_GLASS_SPRITE.style.width = `${(widthPct * 100).toFixed(4)}%`;
  JUMBOTRON_GLASS_SPRITE.style.opacity = '1';
}

async function triggerSharehawkCounterUpdate() {
  const base = latestStats || { participantsCount: 0, equalShare: PURCHASE_PRICE };
  const maybeUnlockTicket = () => {
    if (!pendingTicketUnlock) return;
    ticketCountersComplete = true;
    maybeFinalizeTicketUnlock();
  };
  try {
    const res = await fetch('/api/commitments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ county: '' })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error || 'Unable to record share-hawk.');
    if (data?.stats) {
      animateToStats(data.stats, 760, 1120, maybeUnlockTicket);
      return;
    }
  } catch {
    // Fallback keeps the interaction responsive if API call fails.
  }
  const nextCount = base.participantsCount + 1;
  animateToStats(
    {
      participantsCount: nextCount,
      equalShare: PURCHASE_PRICE / Math.max(nextCount, 1)
    },
    760,
    1120,
    maybeUnlockTicket
  );
}

async function runSharehawkImpact() {
  if (sharehawkAnimating || sharehawkJoined || !BODY?.classList.contains('jumbotron-open')) return;
  if (!STADIUM_FRAME_MASK || !JUMBOTRON_PANEL || !JUMBOTRON_CONTENT || !JUMBOTRON_IMPACT_SPRITE || !JUMBOTRON_GLASS_SPRITE) return;
  if (!SHARE_HAWK_BTN) return;
  const sharehawkBtnStyle = window.getComputedStyle(SHARE_HAWK_BTN);
  if (sharehawkBtnStyle.display === 'none' || sharehawkBtnStyle.visibility === 'hidden' || sharehawkBtnStyle.opacity === '0') return;

  sharehawkAnimating = true;
  if (SHARE_HAWK_BTN) {
    SHARE_HAWK_BTN.disabled = true;
    SHARE_HAWK_BTN.setAttribute('aria-disabled', 'true');
  }
  // Single-use per tab session: hide/lock the CTA immediately on first click.
  persistSharehawkJoinedState(true);
  pendingTicketUnlock = true;
  ticketCountersComplete = false;
  await ensureSharehawkAssets();
  if (!footballSpriteSrc || !brokenGlassSpriteSrc) {
    sharehawkAnimating = false;
    pendingTicketUnlock = false;
    if (SHARE_HAWK_BTN) SHARE_HAWK_BTN.disabled = false;
    return;
  }

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const screenRect = JUMBOTRON_CONTENT.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height || !screenRect.width || !screenRect.height) {
    sharehawkAnimating = false;
    pendingTicketUnlock = false;
    if (SHARE_HAWK_BTN) SHARE_HAWK_BTN.disabled = false;
    return;
  }

  const startX = frameRect.width * 0.92;
  const startY = frameRect.height * 0.9;
  const safeImpact = currentImpactPoint || computeSafeImpactPoint();
  const impactClientX = safeImpact?.impactX ?? (screenRect.left + screenRect.width * 0.62);
  const impactClientYBase = safeImpact?.impactY ?? (screenRect.top + screenRect.height * 0.45);
  const impactX = impactClientX - frameRect.left;
  const impactY = impactClientYBase - frameRect.top;
  const travelMs = randomBetween(1100, 1600);
  const arcLift = frameRect.height * 0.2;
  const footballEndW = frameRect.width * 0.09;
  const footballStartW = footballEndW * 3.0;
  const footballStartH = footballStartW * 0.62;
  const footballEndH = footballEndW * 0.62;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  JUMBOTRON_IMPACT_SPRITE.src = footballSpriteSrc;
  JUMBOTRON_IMPACT_SPRITE.style.opacity = '1';
  JUMBOTRON_IMPACT_SPRITE.style.width = `${footballStartW.toFixed(2)}px`;
  JUMBOTRON_GLASS_SPRITE.style.opacity = '0';

  const startTime = performance.now();
  if (reduceMotion) {
    const panelRect = JUMBOTRON_PANEL.getBoundingClientRect();
    const impactClientY = impactClientYBase + BROKEN_GLASS_NUDGE_Y_PX;
    const lockScreenRect = JUMBOTRON_SCREEN?.getBoundingClientRect() || screenRect;
    brokenGlassLock = {
      xPct: clamp((impactClientX - panelRect.left) / panelRect.width, 0, 1),
      yPct: clamp((impactClientY - panelRect.top) / panelRect.height, 0, 1),
      widthPct: clamp((footballEndW * 3.75) / panelRect.width, 0.01, 1),
      screenNX: clamp((impactClientX - lockScreenRect.left) / lockScreenRect.width, 0, 1),
      screenNY: clamp((impactClientY - lockScreenRect.top) / lockScreenRect.height, 0, 1)
    };
    setJumbotronBroken(brokenGlassLock);
    JUMBOTRON_GLASS_SPRITE.src = brokenGlassSpriteSrc;
    updateBrokenGlassLayout();
    triggerCelebrationFX();
    JUMBOTRON_IMPACT_SPRITE.style.opacity = '0';
    JUMBOTRON_PANEL.classList.add('jumbotronFlicker');
    window.setTimeout(async () => {
      JUMBOTRON_PANEL.classList.remove('jumbotronFlicker');
      await triggerSharehawkCounterUpdate();
      sharehawkAnimating = false;
    }, 360);
    sharehawkImpacted = true;
    return;
  }

  function tick(now) {
    if (!JUMBOTRON_IMPACT_SPRITE) return;
    const t = Math.max(0, Math.min(1, (now - startTime) / travelMs));
    const x = startX + (impactX - startX) * t;
    const yLinear = startY + (impactY - startY) * t;
    const y = yLinear - arcLift * (4 * t * (1 - t));
    const rotate = -180 + (760 * t);
    const currentW = footballStartW + (footballEndW - footballStartW) * t;
    const currentH = footballStartH + (footballEndH - footballStartH) * t;
    JUMBOTRON_IMPACT_SPRITE.style.width = `${currentW.toFixed(2)}px`;
    JUMBOTRON_IMPACT_SPRITE.style.transform = `translate3d(${(x - currentW * 0.5).toFixed(2)}px, ${(y - currentH * 0.5).toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg)`;

    if (t < 1) {
      sharehawkRafId = requestAnimationFrame(tick);
      return;
    }

    sharehawkRafId = 0;
    const panelRect = JUMBOTRON_PANEL.getBoundingClientRect();
    const impactClientY = impactClientYBase + BROKEN_GLASS_NUDGE_Y_PX;
    const lockScreenRect = JUMBOTRON_SCREEN?.getBoundingClientRect() || screenRect;
    brokenGlassLock = {
      xPct: clamp((impactClientX - panelRect.left) / panelRect.width, 0, 1),
      yPct: clamp((impactClientY - panelRect.top) / panelRect.height, 0, 1),
      widthPct: clamp((currentW * 3.75) / panelRect.width, 0.01, 1),
      screenNX: clamp((impactClientX - lockScreenRect.left) / lockScreenRect.width, 0, 1),
      screenNY: clamp((impactClientY - lockScreenRect.top) / lockScreenRect.height, 0, 1)
    };
    setJumbotronBroken(brokenGlassLock);
    JUMBOTRON_GLASS_SPRITE.src = brokenGlassSpriteSrc;
    updateBrokenGlassLayout();
    triggerCelebrationFX();
    JUMBOTRON_IMPACT_SPRITE.style.opacity = '0';
    JUMBOTRON_IMPACT_SPRITE.style.width = '0';
    JUMBOTRON_IMPACT_SPRITE.style.transform = 'translate3d(-9999px, -9999px, 0)';
    JUMBOTRON_PANEL.classList.remove('jumbotronOff');
    JUMBOTRON_PANEL.classList.add('jumbotronFlicker');

    window.setTimeout(() => {
      if (!JUMBOTRON_PANEL) return;
      JUMBOTRON_PANEL.classList.remove('jumbotronFlicker');
      triggerSharehawkCounterUpdate().finally(() => {
        sharehawkAnimating = false;
        sharehawkImpacted = true;
      });
    }, 760);
  }

  sharehawkRafId = requestAnimationFrame(tick);
}

function updateJumbotronAnchorVars() {
  if (!JUMBOTRON_OVERLAY || !STADIUM_FRAME_MASK) return;
  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) return;

  let anchorX = frameRect.width * 0.5;
  let anchorY = frameRect.height * 0.44;
  if (LED_OVERLAY) {
    const ledRect = LED_OVERLAY.getBoundingClientRect();
    anchorX = (ledRect.left - frameRect.left) + ledRect.width * 0.5;
    anchorY = (ledRect.top - frameRect.top) + ledRect.height * 0.5;
  }

  const centerX = frameRect.width * 0.5;
  const centerY = frameRect.height * 0.5;
  const dx = anchorX - centerX;
  const dy = anchorY - centerY;
  JUMBOTRON_OVERLAY.style.setProperty('--jumbotron-origin-dx', `${dx.toFixed(2)}px`);
  JUMBOTRON_OVERLAY.style.setProperty('--jumbotron-origin-dy', `${dy.toFixed(2)}px`);
}

function positionJumbotronCloseButton() {
  if (!JUMBOTRON_CLOSE_BTN || !STADIUM_FRAME_MASK) return;
  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.height) return;
  const frameScale = clamp(frameRect.height / 1920, 0.5, 1.25);
  const hitSize = clamp(Math.round(52 * frameScale), 44, 56);
  const glyphSize = clamp(Math.round(20 * frameScale), 12, 22);
  const glyphBox = clamp(Math.round(34 * frameScale), 24, 36);
  // Keep close button anchored to one universal lower-left location.
  JUMBOTRON_CLOSE_BTN.style.setProperty('--close-hit-size', `${hitSize}px`);
  JUMBOTRON_CLOSE_BTN.style.setProperty('--close-glyph-size', `${glyphSize}px`);
  JUMBOTRON_CLOSE_BTN.style.setProperty('--close-glyph-box', `${glyphBox}px`);
  JUMBOTRON_CLOSE_BTN.style.removeProperty('top');
  JUMBOTRON_CLOSE_BTN.style.removeProperty('left');
}

function getElementPath(el) {
  if (!el || !(el instanceof Element)) return '(none)';
  const parts = [];
  let node = el;
  while (node && parts.length < 6) {
    const id = node.id ? `#${node.id}` : '';
    const cls = node.classList.length ? `.${Array.from(node.classList).slice(0, 2).join('.')}` : '';
    parts.unshift(`${node.tagName.toLowerCase()}${id}${cls}`);
    node = node.parentElement;
  }
  return parts.join(' > ');
}

function debugJumbotronSnapshot(tag) {
  if (!DEBUG_JUMBOTRON || !JUMBOTRON_OVERLAY) return;
  const panel = document.getElementById('jumbotronPanel');
  const overlayRect = JUMBOTRON_OVERLAY.getBoundingClientRect();
  const panelRect = panel?.getBoundingClientRect();
  const overlayStyle = getComputedStyle(JUMBOTRON_OVERLAY);
  const panelStyle = panel ? getComputedStyle(panel) : null;
  const parent = JUMBOTRON_OVERLAY.parentElement;
  const inMask = !!JUMBOTRON_OVERLAY.closest('.stadiumFrameMask');
  const sampleX = panelRect ? panelRect.left + panelRect.width * 0.5 : overlayRect.left + overlayRect.width * 0.5;
  const sampleY = panelRect ? panelRect.top + panelRect.height * 0.5 : overlayRect.top + overlayRect.height * 0.5;
  const stack = document.elementsFromPoint(sampleX, sampleY).slice(0, 6).map((n) => {
    if (!(n instanceof Element)) return String(n);
    return `${n.tagName.toLowerCase()}#${n.id || '-'}:${n.className || '-'}`;
  });

  console.log(`[jumbotron debug] ${tag}`, {
    handlerFired: true,
    bodyClasses: BODY?.className,
    overlayExists: !!JUMBOTRON_OVERLAY,
    panelExists: !!panel,
    parentPath: getElementPath(parent),
    overlayPath: getElementPath(JUMBOTRON_OVERLAY),
    insideFrameMask: inMask,
    overlayRect,
    panelRect,
    overlayStyle: {
      display: overlayStyle.display,
      visibility: overlayStyle.visibility,
      opacity: overlayStyle.opacity,
      transform: overlayStyle.transform,
      zIndex: overlayStyle.zIndex
    },
    panelStyle: panelStyle ? {
      display: panelStyle.display,
      visibility: panelStyle.visibility,
      opacity: panelStyle.opacity,
      transform: panelStyle.transform,
      zIndex: panelStyle.zIndex,
      width: panelStyle.width,
      height: panelStyle.height
    } : null,
    stackAtPanelCenter: stack
  });
}

function openJumbotronOverlay() {
  if (!BODY || isJumbotronOpen || isJumbotronAnimating) return;
  if (!JUMBOTRON_OVERLAY) return;
  resetSharehawkImpactState();
  if (DEBUG_JUMBOTRON) {
    console.log('[jumbotron debug] open handler fired', {
      overlayFound: !!JUMBOTRON_OVERLAY,
      panelFound: !!document.getElementById('jumbotronPanel')
    });
    BODY.classList.add('debug-jumbotron');
  }
  updateJumbotronAnchorVars();
  positionJumbotronCloseButton();
  refreshImpactPoint();
  isJumbotronAnimating = true;
  isJumbotronOpen = true;
  JUMBOTRON_OVERLAY.setAttribute('aria-hidden', 'false');
  BODY.classList.add('jumbotron-open');
  applyBrokenGlassIfNeeded();
  debugJumbotronSnapshot('after-open-class');
  setTimeout(() => {
    positionJumbotronCloseButton();
    applyBrokenGlassIfNeeded();
    refreshImpactPoint();
    debugJumbotronSnapshot('open+80ms');
  }, 80);
  setTimeout(() => {
    positionJumbotronCloseButton();
    applyBrokenGlassIfNeeded();
    refreshImpactPoint();
    debugJumbotronSnapshot('open+420ms');
  }, 420);
  setTimeout(() => {
    positionJumbotronCloseButton();
    applyBrokenGlassIfNeeded();
    refreshImpactPoint();
    debugJumbotronSnapshot('open+900ms');
  }, 900);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    BODY.classList.remove('jumbotron-opening', 'jumbotron-closing');
    isJumbotronAnimating = false;
    debugJumbotronSnapshot('reduced-motion-open');
    return;
  }

  BODY.classList.remove('jumbotron-closing');
  BODY.classList.add('jumbotron-opening');
  applyJumbotronHeadingFit();
  scheduleJumbotronFit();
  window.setTimeout(() => {
    BODY.classList.remove('jumbotron-opening');
    applyJumbotronHeadingFit();
    scheduleJumbotronFit();
    isJumbotronAnimating = false;
  }, 600);
}

function closeJumbotronOverlay() {
  if (!BODY || !isJumbotronOpen || isJumbotronAnimating) return;
  if (!JUMBOTRON_OVERLAY) return;
  closeReceiptPreview(false);
  debugJumbotronSnapshot('before-close');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isJumbotronOpen = false;
    isJumbotronAnimating = false;
    BODY.classList.remove('jumbotron-open', 'jumbotron-opening', 'jumbotron-closing');
    JUMBOTRON_OVERLAY.setAttribute('aria-hidden', 'true');
    resetSharehawkImpactState();
    if (DEBUG_JUMBOTRON) BODY.classList.remove('debug-jumbotron');
    return;
  }

  isJumbotronAnimating = true;
  BODY.classList.remove('jumbotron-quiet-closing');
  BODY.classList.remove('jumbotron-opening');
  BODY.classList.add('jumbotron-closing');
  positionJumbotronCloseButton();
  window.setTimeout(() => {
    isJumbotronOpen = false;
    isJumbotronAnimating = false;
    BODY.classList.remove('jumbotron-open', 'jumbotron-closing');
    JUMBOTRON_OVERLAY.setAttribute('aria-hidden', 'true');
    resetSharehawkImpactState();
    if (DEBUG_JUMBOTRON) BODY.classList.remove('debug-jumbotron');
  }, 460);
}

async function openJoinCollective() {
  if (!BODY || joinOpen || joinAnimating || proposalRunning) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    BODY.classList.add('join-open');
    joinOpen = true;
    initJoinSignaturePad();
    if (JOIN_INITIALS_INPUT) JOIN_INITIALS_INPUT.focus();
    return;
  }
  joinAnimating = true;
  if (JOIN_INLINE_ERROR) JOIN_INLINE_ERROR.textContent = '';
  BODY.classList.add('join-animating');
  await wait(520);
  BODY.classList.add('join-open');
  await wait(420);
  BODY.classList.remove('join-animating');
  joinAnimating = false;
  joinOpen = true;
  initJoinSignaturePad();
  if (JOIN_INITIALS_INPUT) JOIN_INITIALS_INPUT.focus();
}

async function submitJoinCollective() {
  if (!JOIN_INITIALS_INPUT) return;
  const initials = (JOIN_INITIALS_INPUT.value || '').trim();
  if (initials.length < 2 || initials.length > 4) {
    if (JOIN_INLINE_ERROR) JOIN_INLINE_ERROR.textContent = 'Enter 2-4 initials to join.';
    return;
  }
  if (JOIN_INLINE_ERROR) JOIN_INLINE_ERROR.textContent = '';
  try {
    const res = await fetch('/api/commitments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ county: '' })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error || 'Join failed.');
    if (data?.stats) {
      animateToStats(data.stats, 520);
    } else {
      const base = latestStats || { participantsCount: 0, equalShare: PURCHASE_PRICE };
      const nextCount = base.participantsCount + 1;
      animateToStats({
        participantsCount: nextCount,
        equalShare: PURCHASE_PRICE / Math.max(nextCount, 1)
      }, 520);
    }
  } catch {
    const base = latestStats || { participantsCount: 0, equalShare: PURCHASE_PRICE };
    const nextCount = base.participantsCount + 1;
    animateToStats({
      participantsCount: nextCount,
      equalShare: PURCHASE_PRICE / Math.max(nextCount, 1)
    }, 520);
  }
  if (JOIN_COMMIT_CHECKBOX) JOIN_COMMIT_CHECKBOX.checked = false;
  if (JOIN_EMAIL_INPUT) JOIN_EMAIL_INPUT.value = '';
  clearSignaturePad();
}

function updateKickoffCountdown() {
  if (!KICKOFF_COUNTDOWN_DAYS) return;
  const kickoffDate = new Date('2026-09-10T00:00:00-07:00');
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.ceil((kickoffDate.getTime() - now.getTime()) / msPerDay);
  KICKOFF_COUNTDOWN_DAYS.textContent = String(Math.max(0, diffDays));
}

function setProposalContentFrame(x, y, w, h) {
  if (!PROPOSAL_CONTENT) return;
  const insetX = Math.max(22, Math.round(w * 0.12));
  const insetTop = Math.max(18, Math.round(h * 0.16));
  const insetBottom = Math.max(20, Math.round(h * 0.12));
  const frameRect = STADIUM_FRAME_MASK?.getBoundingClientRect();
  if (!frameRect || !frameRect.width || !frameRect.height) return;
  const left = ((x + insetX) / frameRect.width) * 100;
  const top = ((y + insetTop) / frameRect.height) * 100;
  const right = ((frameRect.width - (x + w - insetX)) / frameRect.width) * 100;
  const bottom = ((frameRect.height - (y + h - insetBottom)) / frameRect.height) * 100;
  // Root cause: content area was pixel-locked on open (inline width/height) and never recomputed on resize.
  PROPOSAL_CONTENT.style.setProperty('--proposal-content-left', `${left}%`);
  PROPOSAL_CONTENT.style.setProperty('--proposal-content-top', `${top}%`);
  PROPOSAL_CONTENT.style.setProperty('--proposal-content-right', `${right}%`);
  PROPOSAL_CONTENT.style.setProperty('--proposal-content-bottom', `${bottom}%`);
}

function getProposalFinalRect(frameRect) {
  const finalTop = frameRect.height * 0.01;
  const finalBottom = frameRect.height * 0.01;
  const finalHeight = Math.max(0, frameRect.height - finalTop - finalBottom);
  const finalAspect = 0.56;
  const finalWidth = Math.min(frameRect.width * 0.98, finalHeight * finalAspect);
  const finalX = (frameRect.width - finalWidth) * 0.5;
  return { finalTop, finalHeight, finalWidth, finalX };
}

function syncProposalOpenLayout() {
  if (!proposalOpen || proposalRunning || !STADIUM_FRAME_MASK || !PROPOSAL_OPEN_SCROLL) return;
  const frame = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frame.width || !frame.height) return;
  const final = getProposalFinalRect(frame);
  setSpriteFramePos(PROPOSAL_OPEN_SCROLL, final.finalX, final.finalTop, final.finalWidth, final.finalHeight);
  setProposalContentFrame(final.finalX, final.finalTop, final.finalWidth, final.finalHeight);
}

async function ensureProposalAssets() {
  const [hawkSrc, hawkCarrySrc, closedSrc, openSrc] = await Promise.all([
    hawkSpriteSrc ? Promise.resolve(hawkSpriteSrc) : resolveSpriteSource(HAWK_SPRITE_CANDIDATES),
    hawkWithScrollSrc ? Promise.resolve(hawkWithScrollSrc) : resolveSpriteSource(HAWK_WITH_SCROLL_SPRITE_CANDIDATES),
    closedScrollSrc ? Promise.resolve(closedScrollSrc) : resolveSpriteSource(CLOSED_SCROLL_SPRITE_CANDIDATES),
    openScrollSrc ? Promise.resolve(openScrollSrc) : resolveSpriteSource(OPEN_SCROLL_SPRITE_CANDIDATES)
  ]);

  hawkSpriteSrc = hawkSrc || hawkSpriteSrc || PROPOSAL_HAWK?.src || '';
  hawkWithScrollSrc = hawkCarrySrc || hawkWithScrollSrc || PROPOSAL_HAWK?.src || '';
  closedScrollSrc = closedSrc || closedScrollSrc || PROPOSAL_CLOSED_SCROLL?.src || '';
  openScrollSrc = openSrc || openScrollSrc || PROPOSAL_OPEN_SCROLL?.src || '';

  if (PROPOSAL_HAWK && hawkWithScrollSrc) PROPOSAL_HAWK.src = hawkWithScrollSrc;
  if (PROPOSAL_CLOSED_SCROLL && closedScrollSrc) PROPOSAL_CLOSED_SCROLL.src = closedScrollSrc;
  if (PROPOSAL_OPEN_SCROLL && openScrollSrc) PROPOSAL_OPEN_SCROLL.src = openScrollSrc;
}

async function runProposalReveal() {
  if (!STADIUM_FRAME_MASK || !PROPOSAL_REVEAL_LAYER || !PROPOSAL_HAWK || !PROPOSAL_CLOSED_SCROLL || !PROPOSAL_OPEN_SCROLL) {
    return;
  }
  if (proposalRunning || proposalOpen) {
    return;
  }

  proposalRunning = true;

  try {
    await ensureProposalAssets();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frame = STADIUM_FRAME_MASK.getBoundingClientRect();
      const final = getProposalFinalRect(frame);

      PROPOSAL_OPEN_SCROLL.style.opacity = '1';
      setSpriteFramePos(PROPOSAL_OPEN_SCROLL, final.finalX, final.finalTop, final.finalWidth, final.finalHeight);
      setProposalContentFrame(final.finalX, final.finalTop, final.finalWidth, final.finalHeight);
      proposalOpen = true;
      BODY?.classList.add('proposal-open');
      hideProposalSprites();
      return;
    }

    const frame = STADIUM_FRAME_MASK.getBoundingClientRect();
    const w = frame.width;
    const h = frame.height;
    const leftToRight = true;

    const hawkW = w * 0.22;
    const hawkH = hawkW * 0.61;
    const xStart = -hawkW * 1.1;
    const xEnd = w + hawkW * 1.1;
    const yTop = h * 0.12;
    const yLow = h * 0.42;

    let releaseX = w * 0.5;
    let releaseY = yLow;
    let released = false;
    let dropPromise = null;

    PROPOSAL_HAWK.style.opacity = hawkWithScrollSrc ? '1' : '0';
    PROPOSAL_HAWK.style.transformOrigin = '50% 50%';
    PROPOSAL_HAWK.style.width = `${hawkW}px`;
    PROPOSAL_HAWK.style.height = `${hawkH}px`;
    if (hawkWithScrollSrc) {
      PROPOSAL_HAWK.src = hawkWithScrollSrc;
    }

    PROPOSAL_CLOSED_SCROLL.style.opacity = '0';
    PROPOSAL_OPEN_SCROLL.style.opacity = '0';

    const hawkFacing = leftToRight ? 1 : -1;

    await runRafAnimation(PROPOSAL_HAWK_FLIGHT_MS, (t) => {
      const x = xStart + (xEnd - xStart) * t;
      const y = yTop + (4 * (yLow - yTop) * t * (1 - t));
      PROPOSAL_HAWK.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${hawkFacing})`;

      if (!released && t >= 0.5) {
        released = true;
        releaseX = x + hawkW * 0.42;
        releaseY = y + hawkH * 0.7;
        if (hawkSpriteSrc) {
          PROPOSAL_HAWK.src = hawkSpriteSrc;
        }

        const closedW = w * 0.0525;
        const closedH = closedW * 2.65;
        const closedX = releaseX - closedW * 0.5;
        const driftX = Math.max(60, w * 0.024);
        const dropStartY = Math.max(0, releaseY - closedH * 0.45);
        const landY = h * 0.84;
        const restRotation = -90;

        if (closedScrollSrc) {
          PROPOSAL_CLOSED_SCROLL.style.opacity = '1';
          setSpriteFramePos(PROPOSAL_CLOSED_SCROLL, closedX, dropStartY, closedW, closedH, -30);
        }

        dropPromise = (async () => {
          await runRafAnimation(PROPOSAL_SCROLL_DROP_MS, (dt) => {
            if (!closedScrollSrc) return;
            const eased = easeInQuad(dt);
            const driftedX = closedX + driftX * eased;
            const dropY = dropStartY + (landY - dropStartY) * eased;
            setSpriteFramePos(PROPOSAL_CLOSED_SCROLL, driftedX, dropY, closedW, closedH, -30);
          });

          // Pronounced landing bounce with quick damping into a flat resting angle.
          await runRafAnimation(360, (bt) => {
            if (!closedScrollSrc) return;
            const settledX = closedX + driftX;
            const damp = 1 - bt;
            const bounceY = landY - (h * 0.042) * Math.sin(bt * Math.PI * 2.6) * damp;
            const rotation = -30 + (restRotation + 30) * easeOutCubic(bt);
            setSpriteFramePos(PROPOSAL_CLOSED_SCROLL, settledX, bounceY, closedW, closedH, rotation);
          });

          if (closedScrollSrc) {
            setSpriteFramePos(PROPOSAL_CLOSED_SCROLL, closedX + driftX, landY, closedW, closedH, restRotation);
          }
          await wait(120);
          return { closedW, closedH, closedX: closedX + driftX, landY, restRotation };
        })();
      }
    });

    PROPOSAL_HAWK.style.opacity = '0';
    const dropResult = dropPromise ? await dropPromise : null;
    const closedW = dropResult?.closedW ?? (w * 0.0525);
    const closedH = dropResult?.closedH ?? (closedW * 2.65);
    const closedX = dropResult?.closedX ?? (releaseX - closedW * 0.5);
    const landY = dropResult?.landY ?? (h * 0.84);

    const final = getProposalFinalRect({ width: w, height: h });

    // Start unfurl from the exact closed-scroll resting location.
    const openStartX = closedX;
    const openStartY = landY;

    PROPOSAL_OPEN_SCROLL.style.opacity = openScrollSrc ? '1' : '0';
    await runRafAnimation(PROPOSAL_SCROLL_OPEN_MS, (t) => {
      const eased = easeOutCubic(t);
      const x = openStartX + (final.finalX - openStartX) * eased;
      const y = openStartY + (final.finalTop - openStartY) * eased;
      const width = closedW + (final.finalWidth - closedW) * eased;
      const height = closedH + (final.finalHeight - closedH) * eased;
      setSpriteFramePos(PROPOSAL_OPEN_SCROLL, x, y, width, height);
      setProposalContentFrame(x, y, width, height);
    });

    PROPOSAL_CLOSED_SCROLL.style.opacity = '0';
    proposalOpen = true;
    BODY?.classList.add('proposal-open');
  } catch (error) {
    console.error(error);
    if (STADIUM_FRAME_MASK && PROPOSAL_OPEN_SCROLL) {
      const frame = STADIUM_FRAME_MASK.getBoundingClientRect();
      const final = getProposalFinalRect(frame);
      PROPOSAL_OPEN_SCROLL.style.opacity = '1';
      setSpriteFramePos(PROPOSAL_OPEN_SCROLL, final.finalX, final.finalTop, final.finalWidth, final.finalHeight);
      setProposalContentFrame(final.finalX, final.finalTop, final.finalWidth, final.finalHeight);
      proposalOpen = true;
      BODY?.classList.add('proposal-open');
    }
  } finally {
    proposalRunning = false;
  }
}

window.__triggerProposalReveal = runProposalReveal;

async function initHawkFlyovers() {
  if (hawkTimerId || activeHawkEl || !SCENE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hawkSpriteSrc = hawkSpriteSrc || await resolveHawkSpriteSource();
  if (!hawkSpriteSrc) {
    console.warn('Hawk sprite not found. Add /public/assets/hawk-sprite.png to enable flyovers.');
    return;
  }

  scheduleNextHawkFlyover();
}

async function initSeaplaneFlyovers() {
  if (seaplaneTimerId || activeSeaplaneEl || !SEAPLANE_OVERLAY) return;
  seaplaneSpriteSrc = seaplaneSpriteSrc || await resolveSpriteSource(SEAPLANE_SPRITE_CANDIDATES);
  if (!seaplaneSpriteSrc) {
    console.warn('Seaplane sprite not found. Add /public/assets/16bit seaplane.png to enable flyovers.');
    return;
  }
  // Guaranteed immediate first pass when splash completes.
  window.setTimeout(() => {
    if (!activeSeaplaneEl) launchSeaplaneFlyover();
  }, 120);
}

async function initBaldEagleFlyovers() {
  if (baldEagleTimerId || activeBaldEagleEl || !EAGLE_OVERLAY) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const [rightSrc, leftSrc, withSalmonSrc] = await Promise.all([
    resolveSpriteSource(BALD_EAGLE_RIGHT_SPRITE_CANDIDATES),
    resolveSpriteSource(BALD_EAGLE_LEFT_SPRITE_CANDIDATES),
    resolveSpriteSource(BALD_EAGLE_WITH_SALMON_SPRITE_CANDIDATES)
  ]);

  baldEagleRightSrc = rightSrc || baldEagleRightSrc;
  baldEagleLeftSrc = leftSrc || baldEagleLeftSrc;
  baldEagleWithSalmonSrc = withSalmonSrc || baldEagleWithSalmonSrc;

  if (!baldEagleRightSrc && !baldEagleLeftSrc && !baldEagleWithSalmonSrc) {
    console.warn('Bald eagle sprites not found. Add /public/assets/bald-eagle-rightfacing.png and leftfacing.');
    return;
  }

  scheduleNextBaldEagleFlyover();
}

async function initSalmonFlyovers() {
  if (salmonTimerId || salmonFirstTimerId || activeSalmonEl || !SCENE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const [rightSrc, leftSrc] = await Promise.all([
    salmonSpriteRightSrc ? Promise.resolve(salmonSpriteRightSrc) : resolveSpriteSource(SALMON_SPRITE_RIGHT_CANDIDATES),
    salmonSpriteLeftSrc ? Promise.resolve(salmonSpriteLeftSrc) : resolveSpriteSource(SALMON_SPRITE_LEFT_CANDIDATES)
  ]);

  salmonSpriteRightSrc = rightSrc || salmonSpriteRightSrc;
  salmonSpriteLeftSrc = leftSrc || salmonSpriteLeftSrc;

  if (!salmonSpriteRightSrc || !salmonSpriteLeftSrc) {
    const fallback = await resolveSpriteSource(SALMON_SPRITE_FALLBACK_CANDIDATES);
    if (fallback) {
      // Fallback keeps animation functional even if dedicated files are missing.
      salmonSpriteRightSrc = salmonSpriteRightSrc || fallback;
      salmonSpriteLeftSrc = salmonSpriteLeftSrc || fallback;
    }
  }

  if (!salmonSpriteRightSrc && !salmonSpriteLeftSrc) {
    console.warn('Salmon sprites not found. Add /public/assets/salmon facing right.png and /public/assets/salmon facing left.png.');
    return;
  }
  // Guaranteed first pass shortly after splash completion.
  salmonFirstTimerId = window.setTimeout(() => {
    salmonFirstTimerId = 0;
    if (!activeSalmonEl) launchSalmonFlyover();
  }, SALMON_FIRST_PASS_DELAY_MS);
}

function toStats(raw) {
  const participantsCount = Math.max(0, Number(raw?.participantsCount || 0));
  const equalShare = raw?.equalShare == null
    ? PURCHASE_PRICE / Math.max(participantsCount, 1)
    : Number(raw.equalShare);

  return { participantsCount, equalShare };
}

function renderStats(stats) {
  renderAllStatTargets(stats);
}

function animateNumber(from, to, duration, onFrame, done) {
  const start = performance.now();
  const delta = to - from;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = from + delta * eased;
    onFrame(current);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      done?.();
    }
  }

  requestAnimationFrame(tick);
}

function animateToStats(nextRaw, duration = 600, commitmentDuration = duration, onComplete) {
  const next = toStats(nextRaw);
  const prev = latestStats || next;
  latestStats = next;
  animationToken += 1;
  const currentToken = animationToken;
  let completed = 0;
  const maybeComplete = () => {
    completed += 1;
    if (completed < 2) return;
    onComplete?.(next);
  };

  animateNumber(
    prev.participantsCount,
    next.participantsCount,
    duration,
    (value) => {
      if (currentToken !== animationToken) return;
      const rounded = Math.round(value);
      const text = formatShareholders(rounded);
      if (PARTICIPANTS_COUNT_EL) PARTICIPANTS_COUNT_EL.textContent = text;
      if (JOIN_PARTICIPANTS_COUNT_EL) JOIN_PARTICIPANTS_COUNT_EL.textContent = text;
      setJumbotronShareholdersDisplay(formatSharehawksDisplay(rounded));
      scheduleJumbotronFit();
    },
    maybeComplete
  );

  animateNumber(
    prev.equalShare,
    next.equalShare,
    commitmentDuration,
    (value) => {
      if (currentToken !== animationToken) return;
      const rounded = Math.round(value);
      const text = formatCommitment(rounded);
      if (EQUAL_SHARE_EL) EQUAL_SHARE_EL.textContent = text;
      if (JOIN_EQUAL_SHARE_EL) JOIN_EQUAL_SHARE_EL.textContent = text;
      setJumbotronCommitmentDisplay(rounded);
      scheduleJumbotronFit();
    },
    maybeComplete
  );
}

async function loadStats() {
  const res = await fetch('/api/stats');
  if (!res.ok) throw new Error('Failed to load stats.');
  const stats = await res.json();
  animateToStats(stats, 250);
}

function loadCounties() {
  for (const county of COUNTIES) {
    const option = document.createElement('option');
    option.value = county;
    option.textContent = county;
    COUNTY_SELECT.appendChild(option);
  }
}

function initRealtime() {
  const supabaseUrl = document.body.dataset.supabaseUrl;
  const supabaseAnonKey = document.body.dataset.supabaseAnonKey;

  if (!supabaseUrl || !supabaseAnonKey || !window.supabase?.createClient) {
    return;
  }

  const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

  supabase
    .channel('public-stats')
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'stats',
        filter: 'id=eq.1'
      },
      (payload) => {
        const participantsCount = Number(payload?.new?.participants_count || 0);
        animateToStats({
          participantsCount,
          equalShare: PURCHASE_PRICE / Math.max(participantsCount, 1)
        });
      }
    )
    .subscribe();
}

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  FORM_MESSAGE.textContent = '';

  const payload = {
    county: COUNTY_SELECT.value || undefined
  };

  try {
    const res = await fetch('/api/commitments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Unable to record commitment.');
    }

    FORM.reset();
    FORM_MESSAGE.textContent = 'Anonymous commitment recorded.';
    if (data.stats) {
      animateToStats(data.stats);
    }
  } catch (err) {
    FORM_MESSAGE.textContent = err.message;
  }
});

if (JUMP_TO_SIGNUP && JOIN_SECTION && COUNTY_SELECT) {
  JUMP_TO_SIGNUP.addEventListener('click', () => {
    JOIN_SECTION.scrollIntoView({ behavior: 'smooth', block: 'start' });
    COUNTY_SELECT.focus();
  });
}

if (READ_PROPOSAL_BTN) {
  READ_PROPOSAL_BTN.onclick = (event) => {
    event.preventDefault();
    runProposalReveal();
  };
  READ_PROPOSAL_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    runProposalReveal();
  });
  READ_PROPOSAL_BTN.addEventListener('pointerup', (event) => {
    event.preventDefault();
    runProposalReveal();
  });
  READ_PROPOSAL_BTN.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    runProposalReveal();
  });
}

if (PROPOSAL_CLOSE_BTN) {
  PROPOSAL_CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    closeProposalReveal();
  });
}

if (SKIP_INTRO_BTN) {
  SKIP_INTRO_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    skipIntro();
  });
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const btn = target.closest('#readProposalBtn');
  if (!btn) return;
  event.preventDefault();
  runProposalReveal();
});

if (JOIN_COLLECTIVE_BTN) {
  JOIN_COLLECTIVE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    openJumbotronOverlay();
  });
}

if (SHARE_HAWK_BTN) {
  SHARE_HAWK_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    if (sharehawkJoined) return;
    runSharehawkImpact();
  });
}

if (SUBSCRIBE_BTN) {
  SUBSCRIBE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    triggerCelebrationFX({ independent: true, showWelcome: false });
    openSubscribeWindow();
  });
}

if (SHARE_BTN) {
  SHARE_BTN.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    triggerCelebrationFX({ independent: true, showWelcome: false });
    const shareData = {
      title: 'Community Proposal to Purchase the Seattle Seahawks',
      text: 'Join the community proposal to collectively purchase the Seattle Seahawks.',
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        showUiToast('Thanks for spreading the word.');
        return;
      }
    } catch (err) {
      console.log('Share canceled or failed', err);
      if (err && typeof err === 'object' && 'name' in err && err.name === 'AbortError') {
        return;
      }
      // continue to clipboard fallback for non-cancel failures
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      showUiToast('Link copied. Share it anywhere.');
    } catch {
      showUiToast('Share unavailable.');
    }
  });
}

if (CLAIM_SHARE_BTN) {
  CLAIM_SHARE_BTN.addEventListener('click', async (event) => {
    event.preventDefault();
    await openReceiptPreview(event.currentTarget instanceof HTMLElement ? event.currentTarget : CLAIM_SHARE_BTN);
  });
}

if (RECEIPT_PREVIEW_IMAGE) {
  RECEIPT_PREVIEW_IMAGE.addEventListener('click', (event) => {
    if (isMobileReceiptSaveMode()) return;
    event.preventDefault();
    if (!receiptPreviewPayload) return;
    downloadSharehawkReceiptPNG(receiptPreviewPayload);
  });
}

if (RECEIPT_PREVIEW_CLOSE_BTN) {
  RECEIPT_PREVIEW_CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    closeReceiptPreview(true);
  });
}

if (SUBSCRIBE_CLOSE_BTN) {
  SUBSCRIBE_CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    closeSubscribeWindow();
  });
}

if (JUMBOTRON_CLOSE_BTN) {
  JUMBOTRON_CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    closeJumbotronOverlay();
  });
}

if (JOIN_COLLECTIVE_CLOSE_BTN) {
  JOIN_COLLECTIVE_CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    closeJoinCollective();
  });
}

if (JOIN_SIGNATURE_CLEAR) {
  JOIN_SIGNATURE_CLEAR.addEventListener('click', (event) => {
    event.preventDefault();
    clearSignaturePad();
  });
}

if (JOIN_COMMIT_FORM) {
  JOIN_COMMIT_FORM.addEventListener('submit', async (event) => {
    event.preventDefault();
    await submitJoinCollective();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (isSubscribeOpen) {
    closeSubscribeWindow();
    return;
  }
  if (receiptPreviewOpen) {
    closeReceiptPreview(true);
    return;
  }
  if (isJumbotronOpen) {
    closeJumbotronOverlay();
    return;
  }
  if (proposalOpen) {
    closeProposalReveal();
    return;
  }
  if (joinOpen) {
    closeJoinCollective();
  }
});

window.addEventListener('resize', syncProposalOpenLayout);
window.addEventListener('orientationchange', syncProposalOpenLayout);
window.addEventListener('resize', updateUIScaleVar);
window.addEventListener('orientationchange', updateUIScaleVar);
window.addEventListener('resize', scheduleActionButtonLabelLayout);
window.addEventListener('orientationchange', scheduleActionButtonLabelLayout);
window.addEventListener('resize', scheduleJumbotronFit);
window.addEventListener('orientationchange', scheduleJumbotronFit);
window.addEventListener('resize', applyJumbotronHeadingFit);
window.addEventListener('orientationchange', applyJumbotronHeadingFit);
window.addEventListener('resize', updateJumbotronAnchorVars);
window.addEventListener('orientationchange', updateJumbotronAnchorVars);
window.addEventListener('resize', refreshImpactPoint);
window.addEventListener('orientationchange', refreshImpactPoint);
window.addEventListener('resize', positionJumbotronCloseButton);
window.addEventListener('orientationchange', positionJumbotronCloseButton);
window.addEventListener('resize', updateBrokenGlassLayout);
window.addEventListener('orientationchange', updateBrokenGlassLayout);
window.addEventListener('resize', syncFXCanvasSize);
window.addEventListener('orientationchange', syncFXCanvasSize);
if (window.ResizeObserver && STADIUM_FRAME_MASK) {
  const proposalOpenFrameObserver = new ResizeObserver(() => {
    updateUIScaleVar();
    scheduleActionButtonLabelLayout();
    syncProposalOpenLayout();
    syncFXCanvasSize();
    refreshImpactPoint();
    positionJumbotronCloseButton();
  });
  proposalOpenFrameObserver.observe(STADIUM_FRAME_MASK);
}

if (document.readyState === 'complete') {
  initSceneIntro();
} else {
  window.addEventListener('load', () => {
    initSceneIntro();
  }, { once: true });
}

async function init() {
  updateUIScaleVar();
  scheduleActionButtonLabelLayout();
  hydrateSharehawkJoinedState();
  hydrateSharehawkSessionState();
  hydrateJumbotronBrokenState();
  hydrateWelcomeHeadingState();
  hydrateTicketUnlockedState();
  fxCelebrationPlayed = isCelebrationPlayed();
  initCelebrationFX();
  updateKickoffCountdown();
  updateJumbotronAnchorVars();
  refreshImpactPoint();
  initJumbotronCountdownTicker();
  if (JUMBOTRON_SHAREHOLDERS_HEADING) JUMBOTRON_SHAREHOLDERS_HEADING.textContent = JUMBOTRON_LABEL_FULL_TOP;
  if (JUMBOTRON_COMMITMENT_HEADING) JUMBOTRON_COMMITMENT_HEADING.textContent = JUMBOTRON_LABEL_FULL_BOTTOM;
  applyJumbotronHeadingFit();
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      scheduleActionButtonLabelLayout();
      applyJumbotronHeadingFit();
      refreshImpactPoint();
      scheduleJumbotronFit();
    }).catch(() => {
      // no-op
    });
  }
  loadCounties();
  renderStats({ participantsCount: 0, equalShare: PURCHASE_PRICE });
  await loadStats();
  initRealtime();
}

init().catch((err) => {
  FORM_MESSAGE.textContent = err.message;
});
