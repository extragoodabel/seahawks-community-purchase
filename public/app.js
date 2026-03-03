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
const SPARKLE_REGIONS = SCENE ? Array.from(SCENE.querySelectorAll('.sparkleRegion')) : [];
const CITY_SHIMMER_CANVAS = document.getElementById('cityShimmerCanvas');
const SKYLINE_IMAGE = SCENE ? SCENE.querySelector('.layerWrap--skyline .layerAsset') : null;
const READ_PROPOSAL_BTN = document.getElementById('readProposalBtn');
const JOIN_COLLECTIVE_BTN = document.getElementById('joinCollectiveBtn');
const POST_SPLASH_UI = document.getElementById('postSplashUi');
const SEAPLANE_OVERLAY = document.getElementById('seaplaneOverlay');
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
const BODY = document.body;

const PURCHASE_PRICE = 12_000_000_000;
const BACKGROUND_SETTLE_MS = 1680;
const SPLASH_TOTAL_MS = 8650;
const PARALLAX_BASE_MAX = 14;
const PARALLAX_LERP = 0.1;
const DRAG_SENSITIVITY = 0.45;
const HAWK_INTERVAL_MIN_MS = 10_000;
const HAWK_INTERVAL_MAX_MS = 20_000;
const HAWK_BOB_AMPLITUDE_MIN = 1;
const HAWK_BOB_AMPLITUDE_MAX = 3;
const HAWK_FACES_RIGHT = true;
const SEAPLANE_INTERVAL_MIN_MS = 20_000;
const SEAPLANE_INTERVAL_MAX_MS = 35_000;
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
  '/assets/hawk.png',
  '/assets/eagle.png'
];
const HAWK_WITH_SCROLL_SPRITE_CANDIDATES = [
  '/assets/hawk-with-scroll.png',
  '/assets/hawk%20with%20scroll.png',
  '/assets/hawk with scroll.png'
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
let salmonSpriteRightSrc = '';
let salmonSpriteLeftSrc = '';
let hawkWithScrollSrc = '';
let closedScrollSrc = '';
let openScrollSrc = '';
let proposalRunning = false;
let proposalOpen = false;
let joinOpen = false;
let joinAnimating = false;
let signaturePadReady = false;
let signatureDrawing = false;
let signatureLastX = 0;
let signatureLastY = 0;
let seaplaneTimerId = 0;
let seaplaneRafId = 0;
let activeSeaplaneEl = null;
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

// Hawk spawn slots are defined as "between layers" by mounting the sprite
// inside the lower layer host. This keeps it visually between layer stacks.
// Size is halved for every layer farther back.
const HAWK_DEPTH_LAYERS = [
  {
    key: 'between-endzone-field',
    selector: '.layerWrap--endzone .layerInner',
    scaleFactor: 1.0,
    yMinPct: 0.24,
    yMaxPct: 0.58,
    speedPxPerSec: 220
  },
  {
    key: 'between-arches-endzone',
    selector: '.layerWrap--right .layerInner',
    scaleFactor: 0.5,
    yMinPct: 0.18,
    yMaxPct: 0.50,
    speedPxPerSec: 180
  },
  {
    key: 'between-skyline-arches',
    selector: '.layerWrap--skyline .layerInner',
    scaleFactor: 0.25,
    yMinPct: 0.12,
    yMaxPct: 0.42,
    speedPxPerSec: 140
  },
  {
    key: 'between-mountains-skyline',
    selector: '.layerWrap--mountains .layerInner',
    scaleFactor: 0.125,
    yMinPct: 0.08,
    yMaxPct: 0.34,
    speedPxPerSec: 100
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
  if (!BODY) return;
  STAGE?.classList.add('splash--done');
  BODY.classList.remove('splash-active');
  BODY.classList.add('splash-complete');
  initHawkFlyovers();
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
    window.setTimeout(completeSplash, 700);
    return;
  }

  window.setTimeout(() => {
    STAGE.classList.add('splash--play');
  }, BACKGROUND_SETTLE_MS);

  window.setTimeout(completeSplash, BACKGROUND_SETTLE_MS + SPLASH_TOTAL_MS);
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

  const preloadPromise = Promise.all(SCENE_IMAGES.map(waitForImage));
  const fallbackPromise = new Promise((resolve) => window.setTimeout(resolve, 1400));

  Promise.race([preloadPromise, fallbackPromise]).finally(() => {
    requestAnimationFrame(() => {
      STAGE.classList.remove('stage--entering');
      STAGE.classList.add('stage--settled');
      initParallax();
      initCrowdSparkles();
      initCityShimmer();
      startSplashSequence(false);
    });
  });
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function getRandomIntBetween(min, max) {
  return Math.floor(randomBetween(min, max + 1));
}

function chooseHawkDepthLayer() {
  if (!SCENE || !HAWK_DEPTH_LAYERS.length) return null;
  const shuffled = [...HAWK_DEPTH_LAYERS].sort(() => Math.random() - 0.5);
  for (const profile of shuffled) {
    const host = SCENE.querySelector(profile.selector);
    if (host) {
      return { ...profile, host };
    }
  }
  return null;
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

  const hawkWidth = frameRect.width * 0.18 * profile.scaleFactor;
  const hawkHeight = hawkWidth * 0.5;

  const yMin = frameRect.height * profile.yMinPct;
  const yMax = frameRect.height * profile.yMaxPct;
  const y = randomBetween(yMin, Math.max(yMin, yMax - hawkHeight));

  const leftToRight = Math.random() > 0.5;
  const startX = leftToRight ? -hawkWidth * 1.2 : frameRect.width + hawkWidth * 1.2;
  const endX = leftToRight ? frameRect.width + hawkWidth * 1.2 : -hawkWidth * 1.2;
  const distance = Math.abs(endX - startX);
  const speed = profile.speedPxPerSec;
  const durationMs = (distance / speed) * 1000;
  const bobAmplitude = randomBetween(HAWK_BOB_AMPLITUDE_MIN, HAWK_BOB_AMPLITUDE_MAX);
  const bobPhase = randomBetween(0, Math.PI * 2);
  const bobFrequency = randomBetween(0.9, 1.3);

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
    const bobOffset = Math.sin((elapsed / 1000) * bobFrequency * Math.PI * 2 + bobPhase) * bobAmplitude;
    activeHawkEl.style.transform = `translate3d(${x.toFixed(2)}px, ${(y + bobOffset).toFixed(2)}px, 0) scaleX(${facing})`;

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
  const y = randomBetween(frameRect.height * 0.02, frameRect.height * 0.22);
  // Random depth pass relative to heading copy: sometimes behind, sometimes above.
  const inFrontOfHeading = Math.random() > 0.5;
  SEAPLANE_OVERLAY.style.zIndex = inFrontOfHeading ? '56' : '54';
  const leftToRight = Math.random() > 0.5;
  const facing = leftToRight ? 1 : -1;
  const startX = leftToRight ? -planeWidth * 1.3 : frameRect.width + planeWidth * 1.3;
  const endX = leftToRight ? frameRect.width + planeWidth * 1.3 : -planeWidth * 1.3;
  const distance = Math.abs(endX - startX);
  const speed = randomBetween(180, 240);
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
    const bob = Math.sin(progress * Math.PI * 2.1) * 1.9;
    activeSeaplaneEl.style.transform = `translate3d(${x.toFixed(2)}px, ${(y + bob).toFixed(2)}px, 0) scaleX(${facing})`;

    if (progress < 1) {
      seaplaneRafId = requestAnimationFrame(tick);
      return;
    }
    cleanupActiveSeaplane();
    scheduleNextSeaplaneFlyover();
  }
  seaplaneRafId = requestAnimationFrame(tick);
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

function animateToStats(nextRaw, duration = 600) {
  const next = toStats(nextRaw);
  const prev = latestStats || next;
  latestStats = next;
  animationToken += 1;
  const currentToken = animationToken;

  animateNumber(
    prev.participantsCount,
    next.participantsCount,
    duration,
    (value) => {
      if (currentToken !== animationToken) return;
      const text = formatShareholders(Math.round(value));
      if (PARTICIPANTS_COUNT_EL) PARTICIPANTS_COUNT_EL.textContent = text;
      if (JOIN_PARTICIPANTS_COUNT_EL) JOIN_PARTICIPANTS_COUNT_EL.textContent = text;
    }
  );

  animateNumber(
    prev.equalShare,
    next.equalShare,
    duration,
    (value) => {
      if (currentToken !== animationToken) return;
      const text = formatCommitment(Math.round(value));
      if (EQUAL_SHARE_EL) EQUAL_SHARE_EL.textContent = text;
      if (JOIN_EQUAL_SHARE_EL) JOIN_EQUAL_SHARE_EL.textContent = text;
    }
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
    console.log('join flow paused');
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
if (window.ResizeObserver && STADIUM_FRAME_MASK) {
  const proposalOpenFrameObserver = new ResizeObserver(() => {
    syncProposalOpenLayout();
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
  updateKickoffCountdown();
  loadCounties();
  renderStats({ participantsCount: 0, equalShare: PURCHASE_PRICE });
  await loadStats();
  initRealtime();
}

init().catch((err) => {
  FORM_MESSAGE.textContent = err.message;
});
