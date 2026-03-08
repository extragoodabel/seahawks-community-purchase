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
const LED_OVERLAY = SCENE ? SCENE.querySelector('.ledOverlay--default') : null;
const LED_MESSAGE_OVERLAY = document.getElementById('ledOverlayMessage');
const LED_MESSAGE_CHARS = document.getElementById('ledOverlayMessageChars');
const LED_MESSAGE_SCORE = document.getElementById('ledOverlayMessageScore');
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
const RECEIPT_PREVIEW_HINT_DESKTOP = RECEIPT_PREVIEW_HINT?.querySelector('.receiptPreviewHint__desktop') || null;
const RECEIPT_PREVIEW_HINT_MOBILE = RECEIPT_PREVIEW_HINT?.querySelector('.receiptPreviewHint__mobile') || null;
const RECEIPT_PREVIEW_CLOSE_BTN = document.getElementById('receiptPreviewCloseBtn');
const SUBSCRIBE_OVERLAY = document.getElementById('subscribeOverlay');
const SUBSCRIBE_CLOSE_BTN = document.getElementById('subscribeCloseBtn');
const KIT_SUBSCRIBE_MOUNT = document.getElementById('kitSubscribeMount');
const ACTION_ROW_SECONDARY = document.getElementById('actionRowSecondary');
const SUBSCRIBE_BTN = document.getElementById('subscribeBtn');
const SHARE_BTN = document.getElementById('shareBtn');
const FIELD_GOAL_LAUNCHER = document.getElementById('fieldGoalLauncher');
const FIELD_GOAL_OVERLAY = document.getElementById('fieldGoalGameOverlay');
const FIELD_GOAL_BALL = document.getElementById('fieldGoalBall');
const FIELD_GOAL_BALL_SHADOW = document.getElementById('fieldGoalBallShadow');
const FIELD_GOAL_METER = document.getElementById('fieldGoalMeter');
const FIELD_GOAL_METER_INDICATOR = document.getElementById('fieldGoalMeterIndicator');
const FIELD_GOAL_INSTRUCTION = document.getElementById('fieldGoalInstruction');
const FIELD_GOAL_RESULT = document.getElementById('fieldGoalResult');
const FIELD_GOAL_CLOSE_BTN = document.getElementById('fieldGoalCloseBtn');
const FIELD_GOAL_SCOREBOARD_STATUS = document.getElementById('fieldGoalScoreboardStatus');
const FIELD_GOAL_COUNTER = document.getElementById('fieldGoalCounter');
const FIELD_GOAL_TWELVE_OVERLAY = document.getElementById('fieldGoalTwelveOverlay');
const FIELD_GOAL_SPAWN_SMOKE = document.getElementById('fieldGoalSpawnSmoke');
const WILLIAMS_UNLOCK_BTN = document.getElementById('williamsUnlockBtn');
const WILLIAMS_ENCOUNTER_TEXT = document.getElementById('williamsEncounterText');
const FIELD_GOAL_OVERRIDE_LAYER = document.getElementById('fieldGoalOverrideLayer');
const FIELD_GOAL_OVERRIDE_EAGLE = document.getElementById('fieldGoalOverrideEagle');
const FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE = document.getElementById('fieldGoalOverrideSurpriseEagle');
const FIELD_GOAL_OVERRIDE_SALMON = document.getElementById('fieldGoalOverrideSalmon');
const FIELD_GOAL_OVERRIDE_WHITEOUT = document.getElementById('fieldGoalOverrideWhiteout');
const UI_TOAST = document.getElementById('uiToast');
const BOOT_LOADER = document.getElementById('bootLoader');
const BOOT_LOADER_SPINNER = document.getElementById('bootLoaderSpinner');
const SPACE_NEEDLE_HOTSPOT = document.getElementById('spaceNeedleHotspot');
const BEAST_QUAKE_HEADING = document.getElementById('beastQuakeHeading');
const SPACE_NEEDLE_SHIMMER = document.getElementById('spaceNeedleShimmer');
const TURNSTILE_MOUNT = document.getElementById('turnstileMount');
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
const SUPABASE_PARTICIPANTS_TABLE = 'participants';
const SUPABASE_SHAREHAWK_FUNCTION = 'sharehawk';
const TURNSTILE_TOKEN_TIMEOUT_MS = 12000;
let latestStats = null;
let animationToken = 0;
let maxRenderedParticipantsCount = 0;
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
let jumbotronStatsPollTimerId = 0;
let jumbotronDebugChipEl = null;
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
let receiptPreviewVariant = 'receipt';
let isSubscribeOpen = false;
let actionLabelLayoutRaf = 0;
let isSharehawkSession = false;
let uiToastTimerId = 0;
let supabaseClient = null;
let supabaseMode = false;
let supabaseWarnedMissingConfig = false;
let supabaseInsertInFlight = false;
let turnstileWidgetId = null;
let turnstileTokenRequest = null;
let turnstileTokenResolve = null;
let turnstileTokenReject = null;
let turnstileTokenTimerId = 0;
let sharehawkTapHandledAt = 0;
let sharehawkAssetsWarmupStarted = false;
let perfDomReadyAt = 0;
let perfInitIdleAt = 0;
let perfSharehawkTapAt = 0;
let perfLongTaskObserver = null;
let bootLoaderHardCapTimerId = 0;
let bootLoaderShown = false;
let bootLoaderVisible = false;
let bootPreloadCompleted = false;
let bootPreloadStartedAt = 0;
let bootPreloadPromise = null;
let bootLoaderShownAt = 0;
let bootAssetsReadyAt = 0;
let bootLoaderDismissedAt = 0;
let bootGateReleased = false;
let bootSceneStartPending = false;
let bootSceneStartSource = '';
let bootSceneStarted = false;
let fieldGoalUnlocked = false;
let fieldGoalPlayed = false;
let fieldGoalGameActive = false;
let fieldGoalReadInteracted = false;
let fieldGoalNumbersInteracted = false;
let fieldGoalKickAnimating = false;
let fieldGoalKickRafId = 0;
let fieldGoalMeterValue = 0;
let fieldGoalGlobalCount = 0;
let fieldGoalLauncherVisible = false;
let fieldGoalLauncherShownYet = false;
let fieldGoalLauncherPopTimerId = 0;
let fieldGoalPointerId = null;
let fieldGoalDragStartPoint = null;
let fieldGoalDragCurrentPoint = null;
let fieldGoalDragStartAt = 0;
let fieldGoalBallBaseX = 0;
let fieldGoalBallBaseY = 0;
let fieldGoalBallBaseWidth = 0;
let fieldGoalBallCurrentX = 0;
let fieldGoalBallCurrentY = 0;
let fieldGoalInstructionTimerId = 0;
let fieldGoalInstructionIntervalId = 0;
let ledMessageTimerId = 0;
let fieldGoalHintSeen = false;
let fieldGoalUseMobileSwipeActive = false;
let fieldGoalWilliamsUnlocked = false;
let fieldGoalTwelveFlashPlayedThisSession = false;
let fieldGoalTwelveFlashTimerId = 0;
let fieldGoalWilliamsSmokeTimerId = 0;
let fieldGoalWilliamsTextTimerId = 0;
let fieldGoalAttemptCount = 0;
let fieldGoalEagleOverrideActive = false;
let fieldGoalOverrideRafId = 0;
let fieldGoalOverrideShakeTimerId = 0;
let beastQuakeUnlocked = false;
let beastQuakeAnimating = false;
let beastQuakeRumbleTimerId = 0;
let beastQuakeRevealTimerId = 0;
let spaceNeedleShimmerTimerId = 0;
let spaceNeedleShimmerAnimation = null;
let spaceNeedleShimmerObserver = null;

const fieldGoalMiniGameState = {
  unlocked: false,
  active: false,
  meterValue: 0.5,
  swipeAngle: Math.PI / 2,
  inFlight: false,
  hasSwiped: false,
  hasTapped: false
};

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
const DEBUG_STATS = (() => {
  const queryEnabled = window.location.search.includes('debugStats=1');
  if (queryEnabled) return true;
  try {
    return window.localStorage.getItem('debugStats') === '1';
  } catch {
    return false;
  }
})();
const DEBUG_PERF = (() => {
  const queryEnabled = window.location.search.includes('debugPerf=1');
  if (queryEnabled) return true;
  try {
    return window.localStorage.getItem('debugPerf') === '1';
  } catch {
    return false;
  }
})();
const JUMBOTRON_STATS_POLL_MS = 12000;
const JUMBOTRON_INVESTMENT_OPEN_DURATION_THRESHOLD_MS = 650;
const JUMBOTRON_INVESTMENT_OPEN_MIN_DURATION_MS = 900;
const JUMBOTRON_INVESTMENT_OPEN_MAX_DURATION_MS = 1400;
const JUMBOTRON_INVESTMENT_OPEN_DURATION_MULTIPLIER = 2.2;
const JUMBOTRON_INVESTMENT_UPDATE_MIN_DURATION_MS = 700;
const JUMBOTRON_INVESTMENT_UPDATE_MAX_DURATION_MS = 1100;
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
const FIELD_GOAL_PLAYED_SESSION_KEY = 'fgPlayed';
const FIELD_GOAL_READ_SESSION_KEY = 'fgRead';
const FIELD_GOAL_NUMBERS_SESSION_KEY = 'fgNumbers';
const FIELD_GOAL_LAUNCHER_SHOWN_SESSION_KEY = 'fgLauncherShown';
const FIELD_GOAL_HINT_SEEN_SESSION_KEY = 'fgDragHintSeen';
const FIELD_GOAL_WILLIAMS_UNLOCKED_SESSION_KEY = 'fgWilliamsUnlocked';
const BEAST_QUAKE_UNLOCKED_SESSION_KEY = 'beastQuakeUnlocked';
const FIELD_GOAL_ACTIVE_BALL_WIDTH_RATIO = 0.125;
const FIELD_GOAL_DRAG_RADIUS_RATIO = 0.08;
const FIELD_GOAL_POWER_DISTANCE_RATIO = 0.26;
const FIELD_GOAL_MIN_FLICK_DISTANCE = 18;
const FIELD_GOAL_WEAK_NUDGE_MIN_DISTANCE = 4;
const FIELD_GOAL_LED_MISS_DURATION_MS = 1000;
const FIELD_GOAL_LED_SUCCESS_DURATION_MS = 1500;
const FIELD_GOAL_INSTRUCTION_SEQUENCE_DESKTOP = ["GRAB BALL", "PULL BACK", "SWIPE UP"];
const FIELD_GOAL_INSTRUCTION_SEQUENCE_MOBILE = ["SWIPE TO KICK"];
const FIELD_GOAL_USE_MOBILE_SWIPE = (('ontouchstart' in window || navigator.maxTouchPoints > 0)
  && Boolean(window.matchMedia?.('(pointer: coarse)')?.matches));
const FIELD_GOAL_INSTRUCTION_STEP_MS = 1000;
const FIELD_GOAL_POWER_RED_MAX = 0.30;
const FIELD_GOAL_POWER_GREEN_MAX = 0.85;
const FIELD_GOAL_DESKTOP_EDGE_EASE = 0.025;
const FIELD_GOAL_DESKTOP_SHANK_MULTIPLIER = 0.9;
const FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_MIN = 0.84;
const FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_POWER_RANGE = 0.07;
const FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_MAX = 0.91;
const FIELD_GOAL_SHORT_BOUNCE_MIN_FLIGHT_MS = 520;
const FIELD_GOAL_SHORT_BOUNCE_DROP_MS = 110;
const FIELD_GOAL_SHORT_BOUNCE_MS = 340;
const FIELD_GOAL_SHORT_BOUNCE_MOBILE_POWER_MAX = 0.76;
const FIELD_GOAL_SHORT_BOUNCE_MOBILE_Y_OFFSET = 0.035;
const FIELD_GOAL_SHORT_BOUNCE_MOBILE_MIN_FLIGHT_MS = 700;
const FIELD_GOAL_UNLOCK_POINTS = 12;
const FIELD_GOAL_TWELVE_FLASH_MS = 1200;
const FIELD_GOAL_WILLIAMS_SMOKE_MS = 680;
const FIELD_GOAL_WILLIAMS_TEXT_MS = 4000;
const WILLIAMS_TRADING_CARD_SRC = '/assets/trading-card.png';
const FIELD_GOAL_OVERRIDE_EVERY_ATTEMPTS = 10;
const FIELD_GOAL_OVERRIDE_TOTAL_MS = 2800;
const FIELD_GOAL_OVERRIDE_COLLISION_MS = 820;
const FIELD_GOAL_OVERRIDE_IMPACT_MS = 2050;
const FIELD_GOAL_OVERRIDE_SHAKE_MS = 190;
const BEAST_QUAKE_RUMBLE_MS = 2000;
const BEAST_QUAKE_REVEAL_MS = 1900;
const SPACE_NEEDLE_SHIMMER_MIN_DELAY_MS = 6000;
const SPACE_NEEDLE_SHIMMER_MAX_DELAY_MS = 14000;
const SPACE_NEEDLE_SHIMMER_DURATION_MS = 1640;
const SPACE_NEEDLE_SHIMMER_DISABLED_RETRY_MS = 1000;
const BOOT_LOADER_MIN_HOLD_MS = 4500;
const BOOT_LOADER_HARD_CAP_MS = 8000;
const BOOT_PRELOAD_IMAGE_URLS = [
  '/stadium/01-mountains.png',
  '/stadium/02-skyline.png',
  '/stadium/03-stadium-left.png',
  '/stadium/04-stadium-right.png',
  '/stadium/05-flag.png',
  '/stadium/06-endzone-base.png',
  '/stadium/07-field.png',
  '/assets/little-screens.png',
  '/assets/little-screens-12.png',
  '/assets/football.png',
  '/assets/broken-glass.png',
  '/assets/ticket-template.png',
  '/assets/jumbotron-frame.png'
];

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

function statsDebugLog(message, context) {
  if (!DEBUG_STATS) return;
  if (typeof context === "undefined") {
    console.log("[stats] " + message);
    return;
  }
  console.log("[stats] " + message, context);
}

function perfLog(event, details) {
  if (!DEBUG_PERF) return;
  if (typeof details === 'undefined') {
    console.log('[perf] ' + event);
    return;
  }
  console.log('[perf] ' + event, details);
}

function initializePerfDomReadyMark() {
  if (!DEBUG_PERF) return;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      perfDomReadyAt = performance.now();
      perfLog('domContentLoaded', { atMs: Math.round(perfDomReadyAt) });
    }, { once: true });
    return;
  }
  perfDomReadyAt = performance.now();
  perfLog('domReady', { atMs: Math.round(perfDomReadyAt) });
}

function initPerfLongTaskObserver() {
  if (!DEBUG_PERF || perfLongTaskObserver || typeof PerformanceObserver === 'undefined') return;
  try {
    perfLongTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      for (const entry of entries) {
        const sample = {
          start: entry.startTime,
          duration: entry.duration
        };
        perfLongTasks.push(sample);
        if (perfLongTasks.length > 120) {
          perfLongTasks.splice(0, perfLongTasks.length - 120);
        }
        if (perfSharehawkTapAt > 0 && entry.startTime >= (perfSharehawkTapAt - 50) && entry.startTime <= (perfSharehawkTapAt + 3000)) {
          perfLog('longtask around sharehawk tap', {
            startMs: Math.round(entry.startTime),
            durationMs: Math.round(entry.duration)
          });
        }
      }
    });
    perfLongTaskObserver.observe({ entryTypes: ['longtask'] });
  } catch {
    // no-op
  }
}

function runWhenIdle(task, timeout = 2000) {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => task(), { timeout });
    return;
  }
  window.setTimeout(task, Math.min(900, timeout));
}

function markSharehawkTap(source = 'unknown') {
  if (!DEBUG_PERF) return;
  perfSharehawkTapAt = performance.now();
  perfLog('sharehawk tap', {
    source,
    atMs: Math.round(perfSharehawkTapAt)
  });
}

async function prewarmSharehawkAssets() {
  if (sharehawkAssetsWarmupStarted) return;
  sharehawkAssetsWarmupStarted = true;
  runWhenIdle(async () => {
    const start = performance.now();
    try {
      await ensureSharehawkAssets();
      const candidates = [footballSpriteSrc || FOOTBALL_SPRITE_CANDIDATES[0], brokenGlassSpriteSrc || BROKEN_GLASS_SPRITE_CANDIDATES[0]];
      await Promise.all(candidates.filter(Boolean).map((src) => {
        const img = new Image();
        img.src = src;
        if (typeof img.decode === 'function') {
          return img.decode().catch(() => undefined);
        }
        return Promise.resolve();
      }));
      perfLog('sharehawk assets prewarmed', {
        durationMs: Math.round(performance.now() - start),
        footballSrc: footballSpriteSrc || FOOTBALL_SPRITE_CANDIDATES[0],
        glassSrc: brokenGlassSpriteSrc || BROKEN_GLASS_SPRITE_CANDIDATES[0]
      });
    } catch (error) {
      perfLog('sharehawk assets prewarm failed', {
        durationMs: Math.round(performance.now() - start),
        error: String(error?.message || error)
      });
    }
  });
}

function setBootLoaderVisible(visible) {
  if (!BOOT_LOADER || bootLoaderVisible === visible) return;
  bootLoaderVisible = visible;
  BOOT_LOADER.classList.toggle('bootLoader--on', visible);
  BOOT_LOADER.setAttribute('aria-hidden', visible ? 'false' : 'true');
  if (BODY) {
    BODY.classList.toggle('boot-hold', visible);
  }
  if (visible) {
    bootLoaderShown = true;
    if (!bootLoaderShownAt) {
      bootLoaderShownAt = performance.now();
    }
  }
}

function clearBootLoaderTimers() {
  if (bootLoaderHardCapTimerId) {
    window.clearTimeout(bootLoaderHardCapTimerId);
    bootLoaderHardCapTimerId = 0;
  }
}

function releaseBootLoaderGate(reason = 'ready') {
  if (bootGateReleased) return;
  bootGateReleased = true;
  bootLoaderDismissedAt = performance.now();
  clearBootLoaderTimers();
  setBootLoaderVisible(false);
  if (DEBUG_PERF) {
    perfLog('boot loader dismissed', {
      reason,
      shownAtMs: bootLoaderShownAt ? Math.round(bootLoaderShownAt) : null,
      assetsReadyAtMs: bootAssetsReadyAt ? Math.round(bootAssetsReadyAt) : null,
      dismissedAtMs: Math.round(bootLoaderDismissedAt)
    });
  }
  if (bootSceneStartPending) {
    window.setTimeout(() => {
      requestSceneIntroStart(bootSceneStartSource || 'boot-gate-release');
    }, 100);
  }
}

function getBootPreloadImageUrls() {
  const spinnerSrc = BOOT_LOADER_SPINNER?.getAttribute('src') || '';
  return Array.from(new Set([
    ...BOOT_PRELOAD_IMAGE_URLS,
    spinnerSrc,
    FOOTBALL_SPRITE_CANDIDATES[0],
    BROKEN_GLASS_SPRITE_CANDIDATES[0]
  ].filter(Boolean)));
}

function decodeBootImage(url) {
  return new Promise((resolve) => {
    if (!url) {
      resolve({ url, ok: false });
      return;
    }

    const img = new Image();
    img.decoding = 'async';
    let settled = false;

    const finish = (ok) => {
      if (settled) return;
      settled = true;
      resolve({ url, ok });
    };

    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = url;

    if (typeof img.decode === 'function') {
      img.decode().then(() => finish(true)).catch(() => {
        // Keep onload/onerror fallback.
      });
    }
  });
}

function requestSceneIntroStart(source = 'load') {
  if (bootSceneStarted) return;
  if (!bootGateReleased) {
    bootSceneStartPending = true;
    bootSceneStartSource = source;
    return;
  }
  bootSceneStartPending = false;
  bootSceneStartSource = source;
  bootSceneStarted = true;
  if (DEBUG_PERF) {
    perfLog('splash start', { atMs: Math.round(performance.now()), source });
  }
  initSceneIntro();
}

function startBootPreload() {
  if (bootPreloadPromise) return bootPreloadPromise;

  const urls = getBootPreloadImageUrls();
  bootPreloadStartedAt = performance.now();
  setBootLoaderVisible(true);

  if (DEBUG_PERF) {
    perfLog('boot loader shown', { atMs: Math.round(bootLoaderShownAt || bootPreloadStartedAt) });
    perfLog('boot preload start', {
      assetCount: urls.length,
      assets: urls
    });
  }

  let minHoldComplete = false;
  let criticalAssetsReady = false;

  const maybeReleaseFromReadyState = () => {
    if (!minHoldComplete || !criticalAssetsReady) return;
    releaseBootLoaderGate('assets-ready+min-hold');
  };

  const minHoldPromise = wait(BOOT_LOADER_MIN_HOLD_MS).then(() => {
    minHoldComplete = true;
    maybeReleaseFromReadyState();
  });

  const assetsPromise = Promise.all(urls.map((url) => decodeBootImage(url)))
    .then((results) => {
      bootPreloadCompleted = true;
      bootAssetsReadyAt = performance.now();
      const failedUrls = results.filter((item) => !item.ok).map((item) => item.url);
      const durationMs = Math.round(bootAssetsReadyAt - bootPreloadStartedAt);
      criticalAssetsReady = failedUrls.length === 0;
      perfLog('boot assets ready', {
        durationMs,
        failedCount: failedUrls.length,
        allCriticalReady: criticalAssetsReady
      });
      if (failedUrls.length) {
        perfLog('boot preload failed assets', { urls: failedUrls });
      }
      maybeReleaseFromReadyState();
      return results;
    })
    .catch((error) => {
      bootPreloadCompleted = true;
      bootAssetsReadyAt = performance.now();
      criticalAssetsReady = false;
      perfLog('boot preload failed', {
        durationMs: Math.round(bootAssetsReadyAt - bootPreloadStartedAt),
        error: String(error?.message || error)
      });
      return [];
    });

  const hardCapPromise = new Promise((resolve) => {
    bootLoaderHardCapTimerId = window.setTimeout(() => {
      releaseBootLoaderGate('hard-cap');
      resolve([]);
    }, BOOT_LOADER_HARD_CAP_MS);
  });

  bootPreloadPromise = Promise.race([
    Promise.all([assetsPromise, minHoldPromise]).then(([results]) => results),
    hardCapPromise
  ]);

  return bootPreloadPromise;
}

function parseParticipantsCountValue(value) {
  if (value == null) return null;

  if (typeof value === 'number') {
    return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : null;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const numeric = Number(trimmed);
    return Number.isFinite(numeric) ? Math.max(0, Math.floor(numeric)) : null;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const parsed = parseParticipantsCountValue(item);
      if (parsed != null) return parsed;
    }
    return null;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value);
    const countEntry = entries.find(([key]) => /count/i.test(String(key)));
    if (countEntry) {
      const parsed = parseParticipantsCountValue(countEntry[1]);
      if (parsed != null) return parsed;
    }
    for (const [, nested] of entries) {
      const parsed = parseParticipantsCountValue(nested);
      if (parsed != null) return parsed;
    }
  }

  return null;
}

function ensureJumbotronDebugChip() {
  if (!DEBUG_STATS || !JUMBOTRON_SCREEN) return null;
  if (jumbotronDebugChipEl && jumbotronDebugChipEl.isConnected) return jumbotronDebugChipEl;

  const chip = document.createElement('div');
  chip.id = 'jumbotronDebugChip';
  chip.setAttribute('aria-hidden', 'true');
  Object.assign(chip.style, {
    position: 'absolute',
    left: '8px',
    bottom: '8px',
    zIndex: '7',
    pointerEvents: 'none',
    color: '#c7ffd7',
    background: 'rgba(0, 0, 0, 0.74)',
    border: '1px solid rgba(105, 190, 40, 0.45)',
    padding: '2px 6px',
    borderRadius: '2px',
    fontFamily: 'Space Mono, IBM Plex Mono, monospace',
    fontSize: '10px',
    lineHeight: '1.2',
    whiteSpace: 'nowrap'
  });
  JUMBOTRON_SCREEN.appendChild(chip);
  jumbotronDebugChipEl = chip;
  return jumbotronDebugChipEl;
}

function setJumbotronDebugChip(stats, source = 'unknown') {
  if (!DEBUG_STATS) return;
  const chip = ensureJumbotronDebugChip();
  if (!chip) return;
  const safe = toStats(stats);
  chip.textContent = 'fetchedCount=' + safe.participantsCount + ' investment=' + formatCurrency(safe.equalShare) + ' source=' + source;
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

function shouldSplitJumbotronCommitmentValue(value) {
  if (!JUMBOTRON_COMMITMENT_VALUE) return false;
  const splitValue = splitCommitmentForJumbotron(value);
  if (!splitValue.split) return false;
  if (JUMBOTRON_COMMITMENT_VALUE.clientWidth <= 1) return false;
  return JUMBOTRON_COMMITMENT_VALUE.scrollWidth > (JUMBOTRON_COMMITMENT_VALUE.clientWidth + 1);
}

function setJumbotronCommitmentDisplay(value) {
  if (!JUMBOTRON_COMMITMENT_VALUE) return;
  renderJumbotronCommitmentValue(value, false);
  fitTextToContainer(JUMBOTRON_COMMITMENT_VALUE);

  if (shouldSplitJumbotronCommitmentValue(value)) {
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

function updateJumbotronDisplay({ count, investment, animate = true, duration = 600, commitmentDuration = duration, onComplete } = {}) {
  if (!JUMBOTRON_SHAREHOLDERS_VALUE || !JUMBOTRON_COMMITMENT_VALUE) {
    statsDebugLog('jumbotron value nodes missing', {
      hasSharehawksNode: !!JUMBOTRON_SHAREHOLDERS_VALUE,
      hasCommitmentNode: !!JUMBOTRON_COMMITMENT_VALUE
    });
    return false;
  }

  const stats = applyMonotonicStatsGuard({ participantsCount: count, equalShare: investment });
  markRenderedParticipantsCount(stats.participantsCount);
  const applyFinal = () => {
    setJumbotronShareholdersDisplay(formatSharehawksDisplay(stats.participantsCount));
    setJumbotronCommitmentDisplay(stats.equalShare);
    if (JUMBOTRON_SHAREHOLDERS_VALUE) fitTextToContainer(JUMBOTRON_SHAREHOLDERS_VALUE);
    if (JUMBOTRON_COMMITMENT_VALUE) fitTextToContainer(JUMBOTRON_COMMITMENT_VALUE);
    scheduleJumbotronFit();
  };

  if (!animate) {
    latestStats = stats;
    renderAllStatTargets(stats);
    applyFinal();
    onComplete?.(stats);
    return true;
  }

  try {
    animateToStats(stats, duration, commitmentDuration, (finalStats) => {
      applyFinal();
      onComplete?.(finalStats || stats);
    });
    return true;
  } catch (error) {
    statsDebugLog('animateToStats failed; applying final jumbotron values', error);
    latestStats = stats;
    renderAllStatTargets(stats);
    applyFinal();
    onComplete?.(stats);
    return false;
  }
}

function initJumbotronCountdownTicker() {
  if (jumbotronCountdownTimerId) return;
}

function renderAllStatTargets(stats) {
  const safeStats = applyMonotonicStatsGuard(stats);
  markRenderedParticipantsCount(safeStats.participantsCount);
  if (PARTICIPANTS_COUNT_EL) {
    PARTICIPANTS_COUNT_EL.textContent = formatShareholders(safeStats.participantsCount);
  }
  if (EQUAL_SHARE_EL) {
    EQUAL_SHARE_EL.textContent = formatCommitment(safeStats.equalShare);
  }
  if (JOIN_PARTICIPANTS_COUNT_EL) {
    JOIN_PARTICIPANTS_COUNT_EL.textContent = formatShareholders(safeStats.participantsCount);
  }
  if (JOIN_EQUAL_SHARE_EL) {
    JOIN_EQUAL_SHARE_EL.textContent = formatCommitment(safeStats.equalShare);
  }
  renderJumbotronStats(safeStats);
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
    case 'giant-trophies':
      return 0.28;
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

function setButtonInteractiveState(buttonEl, active) {
  if (!buttonEl) return;
  const enabled = !!active;
  buttonEl.disabled = !enabled;
  buttonEl.setAttribute('aria-disabled', enabled ? 'false' : 'true');
  buttonEl.style.pointerEvents = enabled ? 'auto' : 'none';
}

function syncContextualButtonInteractivity() {
  const homeSecondaryVisible = isSharehawkSession
    && isHomeScreenVisibleForFieldGoal()
    && ACTION_ROW_SECONDARY?.getAttribute('aria-hidden') !== 'true';

  setButtonInteractiveState(SHARE_BTN, homeSecondaryVisible);
  setButtonInteractiveState(SUBSCRIBE_BTN, homeSecondaryVisible);

  const williamsVisible = WILLIAMS_UNLOCK_BTN?.getAttribute('aria-hidden') !== 'true';
  const williamsActive = fieldGoalGameActive && fieldGoalWilliamsUnlocked && williamsVisible;
  setButtonInteractiveState(WILLIAMS_UNLOCK_BTN, williamsActive);
}

function setSharehawkSessionState(active) {
  isSharehawkSession = !!active;
  if (BODY) {
    BODY.classList.toggle('is-sharehawk', isSharehawkSession);
  }
  if (ACTION_ROW_SECONDARY) {
    ACTION_ROW_SECONDARY.setAttribute('aria-hidden', isSharehawkSession ? 'false' : 'true');
  }
  syncContextualButtonInteractivity();
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


function formatFieldGoalCount(value) {
  const safe = Math.max(0, Math.floor(Number(value) || 0));
  return formatSharehawksDisplay(safe);
}

function setFieldGoalCounterDisplay(value) {
  fieldGoalGlobalCount = Math.max(0, Math.floor(Number(value) || 0));
  if (FIELD_GOAL_COUNTER) {
    FIELD_GOAL_COUNTER.textContent = formatFieldGoalCount(fieldGoalGlobalCount);
  }
  if (LED_MESSAGE_SCORE) {
    LED_MESSAGE_SCORE.textContent = String(fieldGoalGlobalCount).padStart(2, '0');
  }
}

function resetFieldGoalOverrideVisuals() {
  if (FIELD_GOAL_OVERRIDE_EAGLE) {
    FIELD_GOAL_OVERRIDE_EAGLE.style.opacity = '0';
    FIELD_GOAL_OVERRIDE_EAGLE.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE) {
    FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.style.opacity = '0';
    FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (FIELD_GOAL_OVERRIDE_SALMON) {
    FIELD_GOAL_OVERRIDE_SALMON.style.opacity = '0';
    FIELD_GOAL_OVERRIDE_SALMON.style.transform = 'translate3d(-9999px, -9999px, 0)';
  }
  if (FIELD_GOAL_OVERRIDE_WHITEOUT) {
    FIELD_GOAL_OVERRIDE_WHITEOUT.style.opacity = '0';
  }
}

function setFieldGoalOverrideLayerVisible(active) {
  if (BODY) {
    BODY.classList.toggle('fg-override-active', !!active);
    if (!active) {
      BODY.classList.remove('fg-override-impact');
    }
  }
  if (FIELD_GOAL_OVERRIDE_LAYER) {
    FIELD_GOAL_OVERRIDE_LAYER.setAttribute('aria-hidden', active ? 'false' : 'true');
  }
}

function clearFieldGoalOverrideAnimation() {
  if (fieldGoalOverrideRafId) {
    cancelAnimationFrame(fieldGoalOverrideRafId);
    fieldGoalOverrideRafId = 0;
  }
  if (fieldGoalOverrideShakeTimerId) {
    clearTimeout(fieldGoalOverrideShakeTimerId);
    fieldGoalOverrideShakeTimerId = 0;
  }
}

function stopFieldGoalCinematicOverride() {
  clearFieldGoalOverrideAnimation();
  fieldGoalEagleOverrideActive = false;
  setFieldGoalOverrideLayerVisible(false);
  resetFieldGoalOverrideVisuals();
}

function maybeRunFieldGoalCinematicOverride(swipeAngle, power) {
  if (!fieldGoalGameActive || fieldGoalEagleOverrideActive || fieldGoalKickAnimating) return false;
  fieldGoalAttemptCount += 1;
  if (fieldGoalAttemptCount % FIELD_GOAL_OVERRIDE_EVERY_ATTEMPTS !== 0) {
    return false;
  }
  runFieldGoalEagleSalmonOverride(swipeAngle, power);
  return true;
}

function clearFieldGoalUnlockTimers() {
  if (fieldGoalTwelveFlashTimerId) {
    clearTimeout(fieldGoalTwelveFlashTimerId);
    fieldGoalTwelveFlashTimerId = 0;
  }
  if (fieldGoalWilliamsSmokeTimerId) {
    clearTimeout(fieldGoalWilliamsSmokeTimerId);
    fieldGoalWilliamsSmokeTimerId = 0;
  }
  if (fieldGoalWilliamsTextTimerId) {
    clearTimeout(fieldGoalWilliamsTextTimerId);
    fieldGoalWilliamsTextTimerId = 0;
  }
  if (BODY) {
    BODY.classList.remove('fg-williams-first-unlock-flash');
  }
}

function setFieldGoalTwelveFlashVisible(active) {
  if (BODY) {
    BODY.classList.toggle('fg-twelve-flash', !!active);
  }
  if (FIELD_GOAL_TWELVE_OVERLAY) {
    FIELD_GOAL_TWELVE_OVERLAY.setAttribute('aria-hidden', active ? 'false' : 'true');
  }
}

function setFieldGoalWilliamsSmokeVisible(active) {
  if (BODY) {
    BODY.classList.toggle('fg-williams-smoke', !!active);
  }
  if (FIELD_GOAL_SPAWN_SMOKE) {
    FIELD_GOAL_SPAWN_SMOKE.setAttribute('aria-hidden', active ? 'false' : 'true');
  }
}

function setFieldGoalWilliamsTextVisible(active) {
  if (BODY) {
    BODY.classList.toggle('fg-williams-text-visible', !!active);
  }
  if (WILLIAMS_ENCOUNTER_TEXT) {
    WILLIAMS_ENCOUNTER_TEXT.setAttribute('aria-hidden', active ? 'false' : 'true');
  }
}

function setFieldGoalWilliamsUnlocked(active, persist = true) {
  fieldGoalWilliamsUnlocked = !!active;
  if (BODY) {
    BODY.classList.toggle('fg-williams-unlocked', fieldGoalWilliamsUnlocked);
  }
  if (WILLIAMS_UNLOCK_BTN) {
    WILLIAMS_UNLOCK_BTN.setAttribute('aria-hidden', fieldGoalWilliamsUnlocked ? 'false' : 'true');
  }
  if (!fieldGoalWilliamsUnlocked) {
    setFieldGoalWilliamsTextVisible(false);
  }

  syncContextualButtonInteractivity();

  if (persist) {
    try {
      if (fieldGoalWilliamsUnlocked) {
        sessionStorage.setItem(FIELD_GOAL_WILLIAMS_UNLOCKED_SESSION_KEY, '1');
      } else {
        sessionStorage.removeItem(FIELD_GOAL_WILLIAMS_UNLOCKED_SESSION_KEY);
      }
    } catch {
      // no-op
    }
  }
}

function triggerFieldGoalWilliamsUnlockSequence(options = {}) {
  const showWilliamsEncounter = options.showWilliamsEncounter !== false;
  clearFieldGoalUnlockTimers();
  setFieldGoalTwelveFlashVisible(true);
  setFieldGoalWilliamsSmokeVisible(false);
  setFieldGoalWilliamsTextVisible(false);
  if (BODY) {
    BODY.classList.remove('fg-williams-spawn');
    BODY.classList.toggle('fg-williams-first-unlock-flash', !!showWilliamsEncounter);
  }

  fieldGoalTwelveFlashTimerId = window.setTimeout(() => {
    fieldGoalTwelveFlashTimerId = 0;
    setFieldGoalTwelveFlashVisible(false);
    BODY?.classList.remove('fg-williams-first-unlock-flash');
    if (!showWilliamsEncounter) return;

    setFieldGoalWilliamsSmokeVisible(true);
    setFieldGoalWilliamsTextVisible(true);
    if (BODY) {
      BODY.classList.add('fg-williams-spawn');
    }

    fieldGoalWilliamsSmokeTimerId = window.setTimeout(() => {
      fieldGoalWilliamsSmokeTimerId = 0;
      setFieldGoalWilliamsSmokeVisible(false);
      if (BODY) {
        BODY.classList.remove('fg-williams-spawn');
      }
    }, FIELD_GOAL_WILLIAMS_SMOKE_MS);

    fieldGoalWilliamsTextTimerId = window.setTimeout(() => {
      fieldGoalWilliamsTextTimerId = 0;
      setFieldGoalWilliamsTextVisible(false);
    }, FIELD_GOAL_WILLIAMS_TEXT_MS);
  }, FIELD_GOAL_TWELVE_FLASH_MS);
}

function maybeTriggerFieldGoalWilliamsUnlock(points) {
  if ((Number(points) || 0) < FIELD_GOAL_UNLOCK_POINTS) return;
  if (fieldGoalTwelveFlashPlayedThisSession) return;
  fieldGoalTwelveFlashPlayedThisSession = true;

  const isFirstUnlock = !fieldGoalWilliamsUnlocked;
  if (isFirstUnlock) {
    setFieldGoalWilliamsUnlocked(true, true);
  }

  triggerFieldGoalWilliamsUnlockSequence({ showWilliamsEncounter: isFirstUnlock });
}

function clearLedMessageTimer() {
  if (!ledMessageTimerId) return;
  clearTimeout(ledMessageTimerId);
  ledMessageTimerId = 0;
}

function setLedOverlayVisibility(showDefault, showMessage) {
  if (LED_OVERLAY) {
    LED_OVERLAY.classList.toggle('ledOverlay--on', !!showDefault);
    LED_OVERLAY.classList.toggle('ledOverlay--off', !showDefault);
    LED_OVERLAY.setAttribute('aria-hidden', showDefault ? 'false' : 'true');
  }
  if (LED_MESSAGE_OVERLAY) {
    LED_MESSAGE_OVERLAY.classList.toggle('ledOverlay--on', !!showMessage);
    LED_MESSAGE_OVERLAY.classList.toggle('ledOverlay--off', !showMessage);
    LED_MESSAGE_OVERLAY.setAttribute('aria-hidden', showMessage ? 'false' : 'true');
  }
}

function renderLedMessageChars(message = '') {
  if (!LED_MESSAGE_CHARS) return;
  const chars = String(message || '').toUpperCase().replace(/\s+/g, ' ').slice(0, 16);
  LED_MESSAGE_CHARS.textContent = '';
  for (let i = 0; i < chars.length; i += 1) {
    const span = document.createElement('span');
    span.className = 'ledChar';
    span.style.setProperty('--led-char-delay', `${i * 40}ms`);
    const char = chars[i];
    span.textContent = char === ' ' ? '\u00A0' : char;
    LED_MESSAGE_CHARS.appendChild(span);
  }
}

function setLedMessage(message = '', autoClearMs = 0) {
  renderLedMessageChars(message);
  clearLedMessageTimer();
  if (autoClearMs > 0) {
    ledMessageTimerId = window.setTimeout(() => {
      ledMessageTimerId = 0;
      renderLedMessageChars('');
    }, autoClearMs);
  }
}

function setFieldGoalLedGameMode(active) {
  if (active) {
    setLedOverlayVisibility(false, true);
    setLedMessage('');
  } else {
    clearLedMessageTimer();
    setLedMessage('');
    setLedOverlayVisibility(true, false);
  }
}

function isHomeScreenVisibleForFieldGoal() {
  if (!BODY || !splashFinished) return false;
  return !proposalOpen
    && !isJumbotronOpen
    && !isSubscribeOpen
    && !receiptPreviewOpen
    && !fieldGoalGameActive;
}

function setFieldGoalLauncherVisible(active) {
  const nextVisible = !!active;
  const wasVisible = fieldGoalLauncherVisible;
  fieldGoalLauncherVisible = nextVisible;
  if (!BODY) return;
  BODY.classList.toggle('fg-launcher-visible', nextVisible);

  if (!nextVisible) {
    BODY.classList.remove('fg-launcher-pop');
    if (fieldGoalLauncherPopTimerId) {
      clearTimeout(fieldGoalLauncherPopTimerId);
      fieldGoalLauncherPopTimerId = 0;
    }
    return;
  }

  if (!wasVisible) {
    runFieldGoalLauncherPop();
  }
}

function runFieldGoalLauncherPop() {
  if (!BODY) return;
  BODY.classList.add('fg-launcher-pop');
  if (fieldGoalLauncherPopTimerId) {
    clearTimeout(fieldGoalLauncherPopTimerId);
  }
  fieldGoalLauncherPopTimerId = window.setTimeout(() => {
    fieldGoalLauncherPopTimerId = 0;
    BODY.classList.remove('fg-launcher-pop');
  }, 1360);
}

function maybeShowFootball() {
  const canShow = fieldGoalUnlocked
    && isHomeScreenVisibleForFieldGoal();
  setFieldGoalLauncherVisible(canShow);
}

function setFieldGoalUnlocked(active) {
  fieldGoalUnlocked = !!active;
  fieldGoalMiniGameState.unlocked = fieldGoalUnlocked;
  if (BODY) {
    BODY.classList.toggle('fg-unlocked', fieldGoalUnlocked);
  }
}

function setFieldGoalPlayed(active, persist = true) {
  fieldGoalPlayed = !!active;
  if (BODY) {
    BODY.classList.toggle('fg-played', fieldGoalPlayed);
  }
  if (persist) {
    try {
      if (fieldGoalPlayed) {
        sessionStorage.setItem(FIELD_GOAL_PLAYED_SESSION_KEY, '1');
      } else {
        sessionStorage.removeItem(FIELD_GOAL_PLAYED_SESSION_KEY);
      }
    } catch {
      // no-op
    }
  }
}

function markFieldGoalInteraction(type) {
  if (type === 'proposal') {
    fieldGoalReadInteracted = true;
    try { sessionStorage.setItem(FIELD_GOAL_READ_SESSION_KEY, '1'); } catch {}
  } else if (type === 'numbers') {
    fieldGoalNumbersInteracted = true;
    try { sessionStorage.setItem(FIELD_GOAL_NUMBERS_SESSION_KEY, '1'); } catch {}
  }
  if (fieldGoalReadInteracted && fieldGoalNumbersInteracted) {
    setFieldGoalUnlocked(true);
  }
}

function hydrateFieldGoalProgressState() {
  try {
    fieldGoalReadInteracted = sessionStorage.getItem(FIELD_GOAL_READ_SESSION_KEY) === '1';
    fieldGoalNumbersInteracted = sessionStorage.getItem(FIELD_GOAL_NUMBERS_SESSION_KEY) === '1';
    fieldGoalLauncherShownYet = sessionStorage.getItem(FIELD_GOAL_LAUNCHER_SHOWN_SESSION_KEY) === '1';
    fieldGoalHintSeen = sessionStorage.getItem(FIELD_GOAL_HINT_SEEN_SESSION_KEY) === '1';
    setFieldGoalPlayed(sessionStorage.getItem(FIELD_GOAL_PLAYED_SESSION_KEY) === '1', false);
    setFieldGoalWilliamsUnlocked(sessionStorage.getItem(FIELD_GOAL_WILLIAMS_UNLOCKED_SESSION_KEY) === '1', false);
  } catch {
    fieldGoalReadInteracted = false;
    fieldGoalNumbersInteracted = false;
    fieldGoalLauncherShownYet = false;
    fieldGoalHintSeen = false;
    setFieldGoalPlayed(false, false);
    setFieldGoalWilliamsUnlocked(false, false);
  }

  setFieldGoalCounterDisplay(0);
  setFieldGoalUnlocked(fieldGoalReadInteracted && fieldGoalNumbersInteracted);
  setFieldGoalLauncherVisible(false);
  setFieldGoalLedGameMode(false);
  setFieldGoalTwelveFlashVisible(false);
  setFieldGoalWilliamsSmokeVisible(false);
  setFieldGoalWilliamsTextVisible(false);
  clearFieldGoalUnlockTimers();
  if (BODY) {
    BODY.classList.remove('fg-williams-spawn');
  }
}

function clearBeastQuakeTimers() {
  if (beastQuakeRumbleTimerId) {
    clearTimeout(beastQuakeRumbleTimerId);
    beastQuakeRumbleTimerId = 0;
  }
  if (beastQuakeRevealTimerId) {
    clearTimeout(beastQuakeRevealTimerId);
    beastQuakeRevealTimerId = 0;
  }
}

function setBeastQuakeUnlocked(active, persist = true) {
  beastQuakeUnlocked = !!active;
  if (BODY) {
    BODY.classList.toggle('beast-quake-unlocked', beastQuakeUnlocked);
  }
  if (SPACE_NEEDLE_HOTSPOT) {
    SPACE_NEEDLE_HOTSPOT.setAttribute('aria-hidden', beastQuakeUnlocked ? 'true' : 'false');
  }
  if (persist) {
    try {
      if (beastQuakeUnlocked) {
        sessionStorage.setItem(BEAST_QUAKE_UNLOCKED_SESSION_KEY, '1');
      } else {
        sessionStorage.removeItem(BEAST_QUAKE_UNLOCKED_SESSION_KEY);
      }
    } catch {
      // no-op
    }
  }
}

function hydrateBeastQuakeState() {
  try {
    setBeastQuakeUnlocked(sessionStorage.getItem(BEAST_QUAKE_UNLOCKED_SESSION_KEY) === '1', false);
  } catch {
    setBeastQuakeUnlocked(false, false);
  }
}

function canTriggerBeastQuake() {
  if (!BODY || !splashFinished || beastQuakeAnimating || beastQuakeUnlocked) return false;
  if (proposalOpen || isJumbotronOpen) return false;
  if (BODY.classList.contains('proposal-open') || BODY.classList.contains('jumbotron-open')) return false;
  return true;
}

function runBeastQuakeReveal() {
  if (!canTriggerBeastQuake()) return;

  beastQuakeAnimating = true;
  clearBeastQuakeTimers();

  BODY.classList.add('beast-quake-active', 'beast-quake-rumbling');
  if (BEAST_QUAKE_HEADING) {
    BEAST_QUAKE_HEADING.setAttribute('aria-hidden', 'false');
  }

  beastQuakeRumbleTimerId = window.setTimeout(() => {
    beastQuakeRumbleTimerId = 0;
    if (!BODY) return;
    BODY.classList.add('beast-quake-revealing');
  }, BEAST_QUAKE_RUMBLE_MS);

  beastQuakeRevealTimerId = window.setTimeout(() => {
    beastQuakeRevealTimerId = 0;
    beastQuakeAnimating = false;
    setBeastQuakeUnlocked(true);
    if (!BODY) return;
    BODY.classList.remove('beast-quake-rumbling', 'beast-quake-revealing', 'beast-quake-active');
    if (BEAST_QUAKE_HEADING) {
      BEAST_QUAKE_HEADING.setAttribute('aria-hidden', 'true');
    }
  }, BEAST_QUAKE_RUMBLE_MS + BEAST_QUAKE_REVEAL_MS);
}

function clearSpaceNeedleShimmerTimers() {
  if (spaceNeedleShimmerTimerId) {
    clearTimeout(spaceNeedleShimmerTimerId);
    spaceNeedleShimmerTimerId = 0;
  }
}

function getSpaceNeedleShimmerDelayMs() {
  return Math.floor(Math.random() * (SPACE_NEEDLE_SHIMMER_MAX_DELAY_MS - SPACE_NEEDLE_SHIMMER_MIN_DELAY_MS + 1))
    + SPACE_NEEDLE_SHIMMER_MIN_DELAY_MS;
}

function shouldRunSpaceNeedleShimmer() {
  if (!SPACE_NEEDLE_SHIMMER || !BODY) return false;
  if (!splashFinished || beastQuakeUnlocked || beastQuakeAnimating) return false;
  if (BODY.classList.contains('boot-hold') || BODY.classList.contains('splash-active')) return false;
  if (proposalOpen || isJumbotronOpen) return false;
  if (BODY.classList.contains('proposal-open') || BODY.classList.contains('jumbotron-open')) return false;
  return true;
}

function stopSpaceNeedleShimmer() {
  clearSpaceNeedleShimmerTimers();
  if (spaceNeedleShimmerAnimation) {
    spaceNeedleShimmerAnimation.cancel();
    spaceNeedleShimmerAnimation = null;
  }
  if (SPACE_NEEDLE_SHIMMER) {
    SPACE_NEEDLE_SHIMMER.style.opacity = '0';
    SPACE_NEEDLE_SHIMMER.style.transform = 'translate(-50%, -50%) scale(0.92)';
  }
}

function scheduleSpaceNeedleShimmer(delayMs = getSpaceNeedleShimmerDelayMs()) {
  clearSpaceNeedleShimmerTimers();
  spaceNeedleShimmerTimerId = window.setTimeout(() => {
    spaceNeedleShimmerTimerId = 0;
    if (!shouldRunSpaceNeedleShimmer()) {
      scheduleSpaceNeedleShimmer(SPACE_NEEDLE_SHIMMER_DISABLED_RETRY_MS);
      return;
    }
    playSpaceNeedleShimmer();
  }, Math.max(120, delayMs));
}

function playSpaceNeedleShimmer() {
  if (!SPACE_NEEDLE_SHIMMER) return;
  if (!shouldRunSpaceNeedleShimmer()) {
    scheduleSpaceNeedleShimmer(SPACE_NEEDLE_SHIMMER_DISABLED_RETRY_MS);
    return;
  }

  if (spaceNeedleShimmerAnimation) {
    spaceNeedleShimmerAnimation.cancel();
    spaceNeedleShimmerAnimation = null;
  }

  spaceNeedleShimmerAnimation = SPACE_NEEDLE_SHIMMER.animate([
    { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)', offset: 0 },
    { opacity: 0.56, transform: 'translate(-50%, -50%) scale(0.95)', offset: 0.1 },
    { opacity: 0.14, transform: 'translate(-50%, -50%) scale(0.97)', offset: 0.22 },
    { opacity: 0.7, transform: 'translate(-50%, -50%) scale(0.99)', offset: 0.38 },
    { opacity: 0.2, transform: 'translate(-50%, -50%) scale(1.01)', offset: 0.55 },
    { opacity: 0.82, transform: 'translate(-50%, -50%) scale(1.02)', offset: 0.72 },
    { opacity: 0.28, transform: 'translate(-50%, -50%) scale(1.03)', offset: 0.88 },
    { opacity: 0, transform: 'translate(-50%, -50%) scale(1.04)', offset: 1 }
  ], {
    duration: SPACE_NEEDLE_SHIMMER_DURATION_MS,
    easing: 'cubic-bezier(0.2, 0.75, 0.3, 1)',
    fill: 'forwards'
  });

  spaceNeedleShimmerAnimation.onfinish = () => {
    spaceNeedleShimmerAnimation = null;
    if (SPACE_NEEDLE_SHIMMER) {
      SPACE_NEEDLE_SHIMMER.style.opacity = '0';
      SPACE_NEEDLE_SHIMMER.style.transform = 'translate(-50%, -50%) scale(0.92)';
    }
    scheduleSpaceNeedleShimmer();
  };
}

function updateSpaceNeedleShimmerState() {
  if (!shouldRunSpaceNeedleShimmer()) {
    stopSpaceNeedleShimmer();
    scheduleSpaceNeedleShimmer(SPACE_NEEDLE_SHIMMER_DISABLED_RETRY_MS);
    return;
  }
  if (!spaceNeedleShimmerTimerId && !spaceNeedleShimmerAnimation) {
    scheduleSpaceNeedleShimmer();
  }
}

function initSpaceNeedleShimmerLoop() {
  if (!SPACE_NEEDLE_SHIMMER || !BODY) return;

  if (window.MutationObserver && !spaceNeedleShimmerObserver) {
    spaceNeedleShimmerObserver = new MutationObserver(() => {
      updateSpaceNeedleShimmerState();
    });
    spaceNeedleShimmerObserver.observe(BODY, { attributes: true, attributeFilter: ['class'] });
  }

  updateSpaceNeedleShimmerState();
}

function getFieldGoalZone(frameRect, desktopAssist = false) {
  const edgeEase = desktopAssist ? FIELD_GOAL_DESKTOP_EDGE_EASE : 0;
  return {
    left: frameRect.width * (0.456 - edgeEase),
    right: frameRect.width * (0.544 + edgeEase),
    top: frameRect.height * 0.545,
    bottom: frameRect.height * 0.705
  };
}

function resetFieldGoalBallVisual() {
  if (!FIELD_GOAL_BALL) return;
  FIELD_GOAL_BALL.style.width = '';
  FIELD_GOAL_BALL.style.transform = 'translate3d(-9999px, -9999px, 0)';
  FIELD_GOAL_BALL.style.opacity = '0';
  FIELD_GOAL_BALL.style.removeProperty('--fg-ball-x');
  FIELD_GOAL_BALL.style.removeProperty('--fg-ball-y');
  if (FIELD_GOAL_BALL_SHADOW) {
    FIELD_GOAL_BALL_SHADOW.style.removeProperty('--fg-ball-shadow-x');
    FIELD_GOAL_BALL_SHADOW.style.removeProperty('--fg-ball-shadow-y');
    FIELD_GOAL_BALL_SHADOW.style.removeProperty('--fg-ball-shadow-w');
    FIELD_GOAL_BALL_SHADOW.style.removeProperty('--fg-ball-shadow-h');
  }
}

function setFieldGoalInstructionVisible(active) {
  if (!BODY) return;
  BODY.classList.toggle('fg-instruction', !!active);
}

function setFieldGoalResult(text = '') {
  if (!FIELD_GOAL_RESULT || !BODY) return;
  FIELD_GOAL_RESULT.textContent = text;
  const show = Boolean(text);
  BODY.classList.toggle('fg-result-show', show);
}

function setFieldGoalGameActive(active) {
  fieldGoalGameActive = !!active;
  fieldGoalMiniGameState.active = fieldGoalGameActive;
  if (!BODY || !FIELD_GOAL_OVERLAY) return;
  BODY.classList.toggle('fg-game-active', fieldGoalGameActive);
  FIELD_GOAL_OVERLAY.setAttribute('aria-hidden', fieldGoalGameActive ? 'false' : 'true');
  syncContextualButtonInteractivity();
}

function setFieldGoalMeterValue(value) {
  fieldGoalMeterValue = clamp(Number(value) || 0, 0, 1);
  fieldGoalMiniGameState.meterValue = fieldGoalMeterValue;
  if (FIELD_GOAL_METER) {
    FIELD_GOAL_METER.style.setProperty('--fg-meter-value', fieldGoalMeterValue.toFixed(4));
    FIELD_GOAL_METER.classList.remove('is-red', 'is-green', 'is-yellow');
    if (fieldGoalMeterValue <= FIELD_GOAL_POWER_RED_MAX) {
      FIELD_GOAL_METER.classList.add('is-red');
    } else if (fieldGoalMeterValue <= FIELD_GOAL_POWER_GREEN_MAX) {
      FIELD_GOAL_METER.classList.add('is-green');
    } else {
      FIELD_GOAL_METER.classList.add('is-yellow');
    }
  }
  if (FIELD_GOAL_METER_INDICATOR) {
    FIELD_GOAL_METER_INDICATOR.style.left = (fieldGoalMeterValue * 100).toFixed(2) + '%';
  }
}

function setFieldGoalMeterActive(active) {
  if (!BODY) return;
  BODY.classList.toggle('fg-meter-active', !!active);
}

function setFieldGoalBallReady(active) {
  if (!BODY) return;
  BODY.classList.toggle('fg-ball-ready', !!active);
}

function setFieldGoalBallHeld(active) {
  if (!BODY) return;
  BODY.classList.toggle('fg-ball-held', !!active);
}

function clearFieldGoalInstructionTimer() {
  if (fieldGoalInstructionTimerId) {
    clearTimeout(fieldGoalInstructionTimerId);
    fieldGoalInstructionTimerId = 0;
  }
  if (fieldGoalInstructionIntervalId) {
    clearInterval(fieldGoalInstructionIntervalId);
    fieldGoalInstructionIntervalId = 0;
  }
}

function getFieldGoalInstructionSequence() {
  return FIELD_GOAL_USE_MOBILE_SWIPE
    ? FIELD_GOAL_INSTRUCTION_SEQUENCE_MOBILE
    : FIELD_GOAL_INSTRUCTION_SEQUENCE_DESKTOP;
}

function showFieldGoalInstructionEveryOpen() {
  setFieldGoalInstructionVisible(false);
  clearFieldGoalInstructionTimer();

  if (FIELD_GOAL_INSTRUCTION) {
    FIELD_GOAL_INSTRUCTION.textContent = FIELD_GOAL_USE_MOBILE_SWIPE ? "SWIPE TO KICK" : "DRAG AND FLICK TO KICK";
  }

  const steps = getFieldGoalInstructionSequence();
  if (!Array.isArray(steps) || !steps.length) return;

  let stepIndex = 0;
  setLedMessage(steps[0], 0);

  fieldGoalInstructionIntervalId = window.setInterval(() => {
    stepIndex = (stepIndex + 1) % steps.length;
    setLedMessage(steps[stepIndex], 0);
  }, FIELD_GOAL_INSTRUCTION_STEP_MS);
}


function stopFieldGoalKickAnimation() {
  if (!fieldGoalKickRafId) return;
  cancelAnimationFrame(fieldGoalKickRafId);
  fieldGoalKickRafId = 0;
}

function setFieldGoalBallPosition(centerX, centerY, widthPx, rotationDeg = 0) {
  if (!FIELD_GOAL_BALL) return;
  const w = Math.max(1, Number(widthPx) || 1);
  const h = w * 0.62;
  const x = centerX - w * 0.5;
  const y = centerY - h * 0.5;
  fieldGoalBallCurrentX = centerX;
  fieldGoalBallCurrentY = centerY;
  FIELD_GOAL_BALL.style.opacity = '1';
  FIELD_GOAL_BALL.style.width = w.toFixed(2) + 'px';
  FIELD_GOAL_BALL.style.setProperty('--fg-ball-x', x.toFixed(2) + 'px');
  FIELD_GOAL_BALL.style.setProperty('--fg-ball-y', y.toFixed(2) + 'px');
  FIELD_GOAL_BALL.style.transform = 'translate3d(' + x.toFixed(2) + 'px, ' + y.toFixed(2) + 'px, 0) rotate(' + Number(rotationDeg || 0).toFixed(2) + 'deg)';

  if (FIELD_GOAL_BALL_SHADOW) {
    const shadowW = Math.max(10, w * 0.592);
    const shadowH = Math.max(4, shadowW * 0.18);
    const shadowX = centerX - shadowW * 0.5;
    const shadowY = centerY + h * 0.42 - shadowH * 0.5;
    FIELD_GOAL_BALL_SHADOW.style.setProperty('--fg-ball-shadow-x', shadowX.toFixed(2) + 'px');
    FIELD_GOAL_BALL_SHADOW.style.setProperty('--fg-ball-shadow-y', shadowY.toFixed(2) + 'px');
    FIELD_GOAL_BALL_SHADOW.style.setProperty('--fg-ball-shadow-w', shadowW.toFixed(2) + 'px');
    FIELD_GOAL_BALL_SHADOW.style.setProperty('--fg-ball-shadow-h', shadowH.toFixed(2) + 'px');
  }
}

function getFieldGoalDragOffset(point, frameRect) {
  if (!fieldGoalDragStartPoint || !point || !frameRect) {
    return { offsetX: 0, offsetY: 0, rawDistance: 0, normalizedPower: 0, dx: 0, dy: 0 };
  }
  const dx = point.x - fieldGoalDragStartPoint.x;
  const dy = point.y - fieldGoalDragStartPoint.y;
  const rawDistance = Math.hypot(dx, dy);
  const maxRadius = clamp(frameRect.width * FIELD_GOAL_DRAG_RADIUS_RATIO, 54, 96);
  const factor = rawDistance > maxRadius && rawDistance > 0 ? (maxRadius / rawDistance) : 1;
  const offsetX = dx * factor;
  const offsetY = dy * factor;
  const normalizedPower = clamp(rawDistance / Math.max(1, frameRect.width * FIELD_GOAL_POWER_DISTANCE_RATIO), 0, 1);
  return { offsetX, offsetY, rawDistance, normalizedPower, dx, dy };
}

function prepareFieldGoalBallForKick() {
  if (!STADIUM_FRAME_MASK || !FIELD_GOAL_BALL) return;
  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  fieldGoalBallBaseWidth = frameRect.width * FIELD_GOAL_ACTIVE_BALL_WIDTH_RATIO;
  fieldGoalBallBaseX = frameRect.width * 0.5;
  fieldGoalBallBaseY = frameRect.height * 0.905;

  setFieldGoalBallPosition(fieldGoalBallBaseX, fieldGoalBallBaseY, fieldGoalBallBaseWidth, 0);

  fieldGoalPointerId = null;
  fieldGoalDragStartPoint = null;
  fieldGoalDragCurrentPoint = null;
  fieldGoalDragStartAt = 0;
  fieldGoalMiniGameState.hasSwiped = false;
  fieldGoalMiniGameState.hasTapped = false;
  fieldGoalMiniGameState.swipeAngle = Math.PI / 2;
  fieldGoalUseMobileSwipeActive = false;
  setFieldGoalMeterValue(0);
  setFieldGoalMeterActive(false);
  setFieldGoalBallHeld(false);
  setFieldGoalBallReady(true);
}

function closeFieldGoalGame() {
  stopFieldGoalKickAnimation();
  stopFieldGoalCinematicOverride();
  clearFieldGoalInstructionTimer();
  fieldGoalKickAnimating = false;
  fieldGoalPointerId = null;
  fieldGoalDragStartPoint = null;
  fieldGoalDragCurrentPoint = null;
  fieldGoalMiniGameState.inFlight = false;
  fieldGoalMiniGameState.hasSwiped = false;
  fieldGoalMiniGameState.hasTapped = false;
  setFieldGoalMeterActive(false);
  setFieldGoalBallReady(false);
  setFieldGoalBallHeld(false);
  setFieldGoalInstructionVisible(false);
  setFieldGoalResult('');
  setFieldGoalGameActive(false);
  setFieldGoalLedGameMode(false);
  clearFieldGoalUnlockTimers();
  setFieldGoalTwelveFlashVisible(false);
  setFieldGoalWilliamsSmokeVisible(false);
  setFieldGoalWilliamsTextVisible(false);
  if (BODY) {
    BODY.classList.remove('field-goal-success');
    BODY.classList.remove('fg-williams-spawn');
  }
  resetFieldGoalBallVisual();
  maybeShowFootball();
}

function getPointFromEvent(event) {
  if (!STADIUM_FRAME_MASK) return null;
  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  if (!frameRect.width || !frameRect.height) return null;
  const point = {
    x: event.clientX - frameRect.left,
    y: event.clientY - frameRect.top
  };
  point.x = clamp(point.x, 0, frameRect.width);
  point.y = clamp(point.y, 0, frameRect.height);
  return point;
}

function startFieldGoalGame() {
  if (!fieldGoalUnlocked || fieldGoalGameActive) return;
  if (!STADIUM_FRAME_MASK || !FIELD_GOAL_BALL) return;

  if (proposalOpen) closeProposalReveal();
  if (isJumbotronOpen) closeJumbotronOverlay();
  if (receiptPreviewOpen) closeReceiptPreview(false);
  if (isSubscribeOpen) closeSubscribeWindow();
  setFieldGoalGameActive(true);
  setFieldGoalLauncherVisible(false);
  fieldGoalTwelveFlashPlayedThisSession = false;
  setFieldGoalCounterDisplay(0);
  setFieldGoalResult('');
  if (BODY) {
    BODY.classList.remove('field-goal-success');
  }
  setFieldGoalLedGameMode(true);
  stopFieldGoalCinematicOverride();
  clearFieldGoalUnlockTimers();
  setFieldGoalTwelveFlashVisible(false);
  setFieldGoalWilliamsSmokeVisible(false);
  setFieldGoalWilliamsTextVisible(false);
  if (BODY) {
    BODY.classList.remove('fg-williams-spawn');
  }

  prepareFieldGoalBallForKick();
  showFieldGoalInstructionEveryOpen();
}

function syncFieldGoalGameLayout() {
  if (!fieldGoalGameActive || fieldGoalKickAnimating || fieldGoalPointerId !== null) return;
  prepareFieldGoalBallForKick();
}

function queueNextFieldGoalKick(delayMs = 850) {
  window.setTimeout(() => {
    if (!fieldGoalGameActive) return;
    if (BODY) {
      BODY.classList.remove('field-goal-success');
    }
    setFieldGoalResult('');
    setLedMessage('');
    prepareFieldGoalBallForKick();
    showFieldGoalInstructionEveryOpen();
  }, delayMs);
}

function handleFieldGoalSuccess() {
  clearFieldGoalInstructionTimer();
  if (BODY) {
    BODY.classList.add('field-goal-success');
  }
  triggerCelebrationFX({ independent: true, showWelcome: false });

  const nextCount = fieldGoalGlobalCount + 3;
  setFieldGoalCounterDisplay(nextCount);
  maybeTriggerFieldGoalWilliamsUnlock(nextCount);
  setFieldGoalResult('');
  setLedMessage("IT'S GOOD", FIELD_GOAL_LED_SUCCESS_DURATION_MS);

  queueNextFieldGoalKick(1600);
}

function handleFieldGoalMiss(message) {
  clearFieldGoalInstructionTimer();
  if (BODY) {
    BODY.classList.remove('field-goal-success');
  }
  setFieldGoalResult('');
  setLedMessage(message, FIELD_GOAL_LED_MISS_DURATION_MS);
  queueNextFieldGoalKick(1200);
}

function runFieldGoalShortBounceAndMiss(x, y, width, rotation, frameRect, shortBounceY) {
  const landingY = clamp(y, shortBounceY, frameRect.height * 0.92);
  const landingWidth = clamp(width * 1.04, Math.max(16, fieldGoalBallBaseWidth * 0.72), Math.max(width, fieldGoalBallBaseWidth * 1.12));
  const dropStartAt = performance.now();

  const dropTick = (now) => {
    if (!fieldGoalGameActive) {
      fieldGoalKickRafId = 0;
      return;
    }

    const t = clamp((now - dropStartAt) / FIELD_GOAL_SHORT_BOUNCE_DROP_MS, 0, 1);
    const eased = easeInQuad(t);
    const cy = y + (landingY - y) * eased;
    const cw = width + (landingWidth - width) * eased;
    setFieldGoalBallPosition(x, cy, cw, rotation + t * 80);

    if (t < 1) {
      fieldGoalKickRafId = requestAnimationFrame(dropTick);
      return;
    }

    const bounceStartAt = performance.now();
    const bounceTick = (bounceNow) => {
      if (!fieldGoalGameActive) {
        fieldGoalKickRafId = 0;
        return;
      }

      const bt = clamp((bounceNow - bounceStartAt) / FIELD_GOAL_SHORT_BOUNCE_MS, 0, 1);
      const damp = 1 - bt;
      const bounceHeight = frameRect.height * 0.024 * damp;
      const hop = Math.max(0, Math.sin(bt * Math.PI * 2.2) * bounceHeight);
      const cy2 = landingY - hop;
      const squash = 1 - (Math.sin(bt * Math.PI) * 0.09 * damp);
      const cw2 = landingWidth * squash;
      setFieldGoalBallPosition(x, cy2, cw2, rotation + 80 + bt * 180);

      if (bt < 1) {
        fieldGoalKickRafId = requestAnimationFrame(bounceTick);
        return;
      }

      fieldGoalKickRafId = 0;
      fieldGoalKickAnimating = false;
      fieldGoalMiniGameState.inFlight = false;
      FIELD_GOAL_BALL.style.opacity = '0';
      handleFieldGoalMiss('NO GOOD');
    };

    fieldGoalKickRafId = requestAnimationFrame(bounceTick);
  };

  fieldGoalKickRafId = requestAnimationFrame(dropTick);
}


function runFieldGoalEagleSalmonOverride(swipeAngle, power) {
  if (!STADIUM_FRAME_MASK || !FIELD_GOAL_BALL || !FIELD_GOAL_OVERRIDE_LAYER) return;
  if (!fieldGoalGameActive || fieldGoalEagleOverrideActive) return;

  stopFieldGoalKickAnimation();
  clearFieldGoalInstructionTimer();
  setFieldGoalInstructionVisible(false);
  setFieldGoalResult('');
  setLedMessage('');
  setFieldGoalBallHeld(false);
  setFieldGoalBallReady(false);
  setFieldGoalMeterActive(false);

  fieldGoalEagleOverrideActive = true;
  fieldGoalKickAnimating = true;
  fieldGoalMiniGameState.inFlight = true;

  clearFieldGoalOverrideAnimation();
  setFieldGoalOverrideLayerVisible(true);
  resetFieldGoalOverrideVisuals();

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const baseWidth = Math.max(16, fieldGoalBallBaseWidth || (frameRect.width * FIELD_GOAL_ACTIVE_BALL_WIDTH_RATIO));
  const startX = fieldGoalBallCurrentX || fieldGoalBallBaseX || (frameRect.width * 0.5);
  const startY = fieldGoalBallCurrentY || fieldGoalBallBaseY || (frameRect.height * 0.905);
  const launchPower = clamp(Number(power) || 0.52, 0.2, 1);

  const steering = Math.cos(swipeAngle || (Math.PI / 2));
  const collisionX = clamp(
    frameRect.width * (0.33 + steering * 0.02),
    frameRect.width * 0.24,
    frameRect.width * 0.43
  );
  const collisionY = clamp(
    frameRect.height * (0.18 - Math.sin(swipeAngle || (Math.PI / 2)) * 0.01),
    frameRect.height * 0.11,
    frameRect.height * 0.25
  );

  const eagleWidth = frameRect.width * 0.28;
  const eagleHeight = eagleWidth * 0.66;
  const eagleStartX = -eagleWidth * 1.2;
  const eagleStartY = frameRect.height * 0.105;
  const eagleCollisionX = collisionX - eagleWidth * 0.48;
  const eagleCollisionY = collisionY - eagleHeight * 0.34;
  const surpriseBaseX = collisionX - eagleWidth * 0.5;
  const surpriseBaseY = collisionY - eagleHeight * 0.36;
  const eagleExitX = frameRect.width + eagleWidth * 1.08;
  const eagleExitStartMs = FIELD_GOAL_OVERRIDE_IMPACT_MS + 90;
  const surpriseSpriteSrc = '/assets/surprise-eagle.png';
  const normalEagleSpriteSrc = baldEagleRightSrc || '/assets/bald-eagle-rightfacing.png';

  if (FIELD_GOAL_OVERRIDE_EAGLE) {
    FIELD_GOAL_OVERRIDE_EAGLE.src = baldEagleWithSalmonSrc || '/assets/bald-eagle-with-salmon.png';
    FIELD_GOAL_OVERRIDE_EAGLE.style.opacity = '1';
    FIELD_GOAL_OVERRIDE_EAGLE.style.transform = 'translate3d(' + eagleStartX.toFixed(2) + 'px, ' + eagleStartY.toFixed(2) + 'px, 0)';
  }
  if (FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE) {
    FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.src = surpriseSpriteSrc;
  }
  FIELD_GOAL_BALL.style.opacity = '1';

  const startedAt = performance.now();
  let impactTriggered = false;
  let eagleExitStarted = false;

  const tick = (now) => {
    if (!fieldGoalGameActive) {
      stopFieldGoalCinematicOverride();
      return;
    }

    const elapsed = now - startedAt;

    if (elapsed <= FIELD_GOAL_OVERRIDE_COLLISION_MS) {
      const t = clamp(elapsed / FIELD_GOAL_OVERRIDE_COLLISION_MS, 0, 1);
      const ascentT = Math.pow(t, 1.14);
      const arcLeftBias = -frameRect.width * 0.08;
      const apexX = startX + (collisionX - startX) * 0.66 + arcLeftBias * clamp(launchPower - 0.35, 0, 0.6);
      const apexY = clamp(
        collisionY - frameRect.height * (0.1 + launchPower * 0.04),
        frameRect.height * 0.04,
        frameRect.height * 0.16
      );
      const omt = 1 - ascentT;
      const ballX = omt * omt * startX + 2 * omt * ascentT * apexX + ascentT * ascentT * collisionX;
      const ballY = omt * omt * startY + 2 * omt * ascentT * apexY + ascentT * ascentT * collisionY;
      const ballW = baseWidth * (1 - ascentT * 0.28);
      setFieldGoalBallPosition(ballX, ballY, ballW, ascentT * 460);

      if (FIELD_GOAL_OVERRIDE_EAGLE) {
        const et = t * t * (3 - (2 * t));
        const ex = eagleStartX + (eagleCollisionX - eagleStartX) * et;
        const ey = eagleStartY + (eagleCollisionY - eagleStartY) * et;
        FIELD_GOAL_OVERRIDE_EAGLE.style.transform = 'translate3d(' + ex.toFixed(2) + 'px, ' + ey.toFixed(2) + 'px, 0)';
      }
    } else {
      const postDuration = Math.max(1, FIELD_GOAL_OVERRIDE_TOTAL_MS - FIELD_GOAL_OVERRIDE_COLLISION_MS);
      const postT = clamp((elapsed - FIELD_GOAL_OVERRIDE_COLLISION_MS) / postDuration, 0, 1);
      const postElapsed = elapsed - FIELD_GOAL_OVERRIDE_COLLISION_MS;

      if (FIELD_GOAL_OVERRIDE_EAGLE) {
        FIELD_GOAL_OVERRIDE_EAGLE.style.opacity = '0';
      }

      if (FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE) {
        FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.style.opacity = '1';

        if (elapsed >= eagleExitStartMs) {
          if (!eagleExitStarted) {
            eagleExitStarted = true;
            FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.src = normalEagleSpriteSrc;
          }
          const exitT = clamp(
            (elapsed - eagleExitStartMs) / Math.max(1, FIELD_GOAL_OVERRIDE_TOTAL_MS - eagleExitStartMs),
            0,
            1
          );
          const ex = surpriseBaseX + (eagleExitX - surpriseBaseX) * easeOutCubic(exitT);
          const ey = surpriseBaseY + frameRect.height * 0.02 * exitT + Math.sin(postElapsed / 180) * frameRect.height * 0.003;
          FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.style.transform = 'translate3d(' + ex.toFixed(2) + 'px, ' + ey.toFixed(2) + 'px, 0)';
        } else {
          const hover = Math.sin(postElapsed / 140) * (frameRect.height * 0.0055);
          FIELD_GOAL_OVERRIDE_SURPRISE_EAGLE.style.transform = 'translate3d(' + surpriseBaseX.toFixed(2) + 'px, ' + (surpriseBaseY + hover).toFixed(2) + 'px, 0)';
        }
      }

      const ricochetX = collisionX + frameRect.width * (0.24 * postT);
      const ricochetY = collisionY - frameRect.height * (0.22 * postT + 0.06 * postT * postT);
      const ricochetW = Math.max(2, baseWidth * (0.72 - postT * 0.68));
      setFieldGoalBallPosition(ricochetX, ricochetY, ricochetW, 460 + postT * 620);
      FIELD_GOAL_BALL.style.opacity = String(clamp(1 - postT * 0.9, 0.1, 1));

      if (FIELD_GOAL_OVERRIDE_SALMON) {
        const salmonFallDenom = Math.max(1, FIELD_GOAL_OVERRIDE_IMPACT_MS - FIELD_GOAL_OVERRIDE_COLLISION_MS);
        const fallT = clamp((elapsed - FIELD_GOAL_OVERRIDE_COLLISION_MS) / salmonFallDenom, 0, 1);
        const salmonX = collisionX + (frameRect.width * 0.5 - collisionX) * (fallT * 0.52) + Math.sin(fallT * Math.PI * 2.4) * frameRect.width * 0.02;
        const salmonY = collisionY + (frameRect.height * 0.68 - collisionY) * fallT;
        const salmonScale = 0.38 + fallT * 6.2;
        const salmonRotate = fallT * 560;
        FIELD_GOAL_OVERRIDE_SALMON.style.opacity = '1';
        FIELD_GOAL_OVERRIDE_SALMON.style.transform = 'translate3d(' + salmonX.toFixed(2) + 'px, ' + salmonY.toFixed(2) + 'px, 0) translate(-50%, -50%) rotate(' + salmonRotate.toFixed(2) + 'deg) scale(' + salmonScale.toFixed(3) + ')';
      }

      if (!impactTriggered && elapsed >= FIELD_GOAL_OVERRIDE_IMPACT_MS) {
        impactTriggered = true;
        if (BODY) {
          BODY.classList.add('fg-override-impact');
        }
        fieldGoalOverrideShakeTimerId = window.setTimeout(() => {
          fieldGoalOverrideShakeTimerId = 0;
          BODY?.classList.remove('fg-override-impact');
        }, FIELD_GOAL_OVERRIDE_SHAKE_MS);
      }

      if (FIELD_GOAL_OVERRIDE_WHITEOUT) {
        let white = 0;
        if (elapsed >= FIELD_GOAL_OVERRIDE_IMPACT_MS) {
          const flashInMs = 110;
          const flashOutStart = FIELD_GOAL_OVERRIDE_IMPACT_MS + flashInMs;
          if (elapsed <= flashOutStart) {
            white = clamp((elapsed - FIELD_GOAL_OVERRIDE_IMPACT_MS) / flashInMs, 0, 1);
          } else {
            white = 1 - clamp((elapsed - flashOutStart) / Math.max(1, FIELD_GOAL_OVERRIDE_TOTAL_MS - flashOutStart), 0, 1);
          }
        }
        FIELD_GOAL_OVERRIDE_WHITEOUT.style.opacity = white.toFixed(3);
      }
    }

    if (elapsed >= FIELD_GOAL_OVERRIDE_TOTAL_MS) {
      fieldGoalOverrideRafId = 0;
      fieldGoalKickAnimating = false;
      fieldGoalMiniGameState.inFlight = false;
      fieldGoalEagleOverrideActive = false;
      FIELD_GOAL_BALL.style.opacity = '0';
      stopFieldGoalCinematicOverride();
      queueNextFieldGoalKick(220);
      return;
    }

    fieldGoalOverrideRafId = requestAnimationFrame(tick);
  };

  fieldGoalOverrideRafId = requestAnimationFrame(tick);
}


function runFieldGoalWeakNudgeMiss() {
  if (!STADIUM_FRAME_MASK || !FIELD_GOAL_BALL) return;
  if (fieldGoalKickAnimating) return;

  fieldGoalKickAnimating = true;
  fieldGoalMiniGameState.inFlight = true;
  setFieldGoalBallHeld(false);
  setFieldGoalBallReady(false);
  setFieldGoalMeterActive(false);

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const startX = fieldGoalBallCurrentX || fieldGoalBallBaseX || (frameRect.width * 0.5);
  const startY = fieldGoalBallCurrentY || fieldGoalBallBaseY || (frameRect.height * 0.905);
  const baseWidth = Math.max(16, fieldGoalBallBaseWidth || (frameRect.width * FIELD_GOAL_ACTIVE_BALL_WIDTH_RATIO));
  const nudgeTravelX = frameRect.width * 0.12;
  const hopHeight = frameRect.height * 0.016;
  const durationMs = 560;
  const startedAt = performance.now();

  FIELD_GOAL_BALL.style.opacity = '1';

  const tick = (now) => {
    const progress = clamp((now - startedAt) / durationMs, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    const x = startX + nudgeTravelX * eased;
    const hop = Math.sin(progress * Math.PI) * hopHeight;
    const y = startY - Math.max(0, hop);
    const roll = progress * 220;
    const width = baseWidth * (1 - progress * 0.04);

    setFieldGoalBallPosition(x, y, width, roll);

    if (progress < 1) {
      fieldGoalKickRafId = requestAnimationFrame(tick);
      return;
    }

    fieldGoalKickRafId = 0;
    fieldGoalKickAnimating = false;
    fieldGoalMiniGameState.inFlight = false;
    FIELD_GOAL_BALL.style.opacity = '0';
    handleFieldGoalMiss('NO GOOD');
  };

  fieldGoalKickRafId = requestAnimationFrame(tick);
}

function runFieldGoalKickWithFlick(swipeAngle, power) {
  if (!STADIUM_FRAME_MASK || !FIELD_GOAL_BALL) return;
  if (fieldGoalKickAnimating) return;

  fieldGoalKickAnimating = true;
  fieldGoalMiniGameState.inFlight = true;
  setFieldGoalBallHeld(false);
  setFieldGoalBallReady(false);
  setFieldGoalMeterActive(false);

  const overpowered = clamp((power - FIELD_GOAL_POWER_GREEN_MAX) / (1 - FIELD_GOAL_POWER_GREEN_MAX), 0, 1);
  const desktopAssist = !fieldGoalUseMobileSwipeActive;
  const shankBase = desktopAssist ? (8.1 * FIELD_GOAL_DESKTOP_SHANK_MULTIPLIER) : 8.1;
  const driftDeg = (Math.random() * 2 - 1) * (shankBase * overpowered);
  const finalAngle = swipeAngle + (driftDeg * (Math.PI / 180));

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const zone = getFieldGoalZone(frameRect, desktopAssist);
  const speed = 520 + (power * 760);
  const vx = Math.cos(finalAngle) * speed;
  const liftAssist = power >= FIELD_GOAL_POWER_RED_MAX && power <= FIELD_GOAL_POWER_GREEN_MAX ? 1.08 : 1;
  const vy = Math.sin(finalAngle) * speed * liftAssist;
  const gravity = 980;
  const startX = fieldGoalBallCurrentX || (frameRect.width * 0.5);
  const startY = fieldGoalBallCurrentY || (frameRect.height * 0.905);
  const baseWidth = frameRect.width * FIELD_GOAL_ACTIVE_BALL_WIDTH_RATIO;
  const maxFlightMs = 2200;
  const startedAt = performance.now();
  let previousY = startY;

  const tick = (now) => {
    const elapsedMs = now - startedAt;
    const t = elapsedMs / 1000;
    const x = startX + (vx * t);
    const y = startY - (vy * t - 0.5 * gravity * t * t);
    const scale = clamp(1 - t * 0.36, 0.35, 1);
    const w = baseWidth * scale;
    const rotation = t * (780 + (power * 260));

    setFieldGoalBallPosition(x, y, w, rotation);

    const descending = y > previousY;
    const inGoalLane = x >= zone.left && x <= zone.right;
    const clearedCrossbarInLane = inGoalLane && y <= zone.bottom;
    const shortBounceRatio = clamp(
      FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_MIN + (power * FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_POWER_RANGE),
      FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_MIN,
      FIELD_GOAL_SHORT_BOUNCE_Y_RATIO_MAX
    );
    const shortBounceBaseY = frameRect.height * shortBounceRatio;
    const shortBounceY = fieldGoalUseMobileSwipeActive
      ? Math.min(frameRect.height * 0.95, shortBounceBaseY + (frameRect.height * FIELD_GOAL_SHORT_BOUNCE_MOBILE_Y_OFFSET))
      : shortBounceBaseY;
    const shortBounceMinFlightMs = fieldGoalUseMobileSwipeActive
      ? Math.max(FIELD_GOAL_SHORT_BOUNCE_MIN_FLIGHT_MS, FIELD_GOAL_SHORT_BOUNCE_MOBILE_MIN_FLIGHT_MS)
      : FIELD_GOAL_SHORT_BOUNCE_MIN_FLIGHT_MS;
    const shortBounceAllowed = !fieldGoalUseMobileSwipeActive || power <= FIELD_GOAL_SHORT_BOUNCE_MOBILE_POWER_MAX;
    previousY = y;

    if (descending && clearedCrossbarInLane) {
      fieldGoalKickRafId = 0;
      fieldGoalKickAnimating = false;
      fieldGoalMiniGameState.inFlight = false;
      FIELD_GOAL_BALL.style.opacity = '0';
      handleFieldGoalSuccess();
      return;
    }

    if (shortBounceAllowed && descending && inGoalLane && elapsedMs >= shortBounceMinFlightMs && y >= shortBounceY) {
      fieldGoalKickRafId = 0;
      runFieldGoalShortBounceAndMiss(x, y, w, rotation, frameRect, shortBounceY);
      return;
    }

    if (elapsedMs >= maxFlightMs || x < -80 || x > frameRect.width + 80 || y > frameRect.height + 120) {
      fieldGoalKickRafId = 0;
      fieldGoalKickAnimating = false;
      fieldGoalMiniGameState.inFlight = false;
      FIELD_GOAL_BALL.style.opacity = '0';
      const missText = x < zone.left ? 'WIDE LEFT' : x > zone.right ? 'WIDE RIGHT' : 'NO GOOD';
      handleFieldGoalMiss(missText);
      return;
    }

    fieldGoalKickRafId = requestAnimationFrame(tick);
  };

  fieldGoalKickRafId = requestAnimationFrame(tick);
}

function handleFieldGoalPointerDown(event) {
  if (!fieldGoalGameActive || fieldGoalKickAnimating || !FIELD_GOAL_BALL || !STADIUM_FRAME_MASK) return;
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  const point = getPointFromEvent(event);
  if (!point) return;

  event.preventDefault();
  fieldGoalPointerId = event.pointerId;
  fieldGoalDragStartPoint = point;
  fieldGoalDragCurrentPoint = point;
  fieldGoalDragStartAt = performance.now();

  fieldGoalMiniGameState.hasSwiped = false;
  fieldGoalMiniGameState.hasTapped = false;
  fieldGoalUseMobileSwipeActive = FIELD_GOAL_USE_MOBILE_SWIPE && event.pointerType !== 'mouse';

  setFieldGoalBallHeld(true);
  setFieldGoalMeterActive(true);
  setFieldGoalMeterValue(0);

  try {
    FIELD_GOAL_BALL.setPointerCapture(event.pointerId);
  } catch {
    // no-op
  }
}

function handleFieldGoalPointerMove(event) {
  if (!fieldGoalGameActive || fieldGoalKickAnimating || !STADIUM_FRAME_MASK) return;
  if (fieldGoalPointerId === null || event.pointerId !== fieldGoalPointerId || !fieldGoalDragStartPoint) return;
  const point = getPointFromEvent(event);
  if (!point) return;

  event.preventDefault();
  fieldGoalDragCurrentPoint = point;

  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();

  if (fieldGoalUseMobileSwipeActive) {
    const dx = point.x - fieldGoalDragStartPoint.x;
    const dy = point.y - fieldGoalDragStartPoint.y;
    const rawDistance = Math.hypot(dx, dy);
    const normalizedPower = clamp(rawDistance / Math.max(1, frameRect.width * FIELD_GOAL_POWER_DISTANCE_RATIO), 0, 1);
    setFieldGoalMeterValue(normalizedPower);

    const swipeDy = fieldGoalDragStartPoint.y - point.y;
    if (swipeDy > 6) {
      fieldGoalMiniGameState.hasSwiped = true;
      fieldGoalMiniGameState.swipeAngle = Math.atan2(swipeDy, dx || 0);
    }
    return;
  }

  const drag = getFieldGoalDragOffset(point, frameRect);
  const heldWidth = fieldGoalBallBaseWidth * 1.12;
  setFieldGoalBallPosition(fieldGoalBallBaseX + drag.offsetX, fieldGoalBallBaseY + drag.offsetY, heldWidth, 0);
  setFieldGoalMeterValue(drag.normalizedPower);

  const swipeDy = fieldGoalDragStartPoint.y - point.y;
  if (swipeDy > 6) {
    fieldGoalMiniGameState.hasSwiped = true;
    fieldGoalMiniGameState.swipeAngle = Math.atan2(swipeDy, drag.dx);
  }
}

function handleFieldGoalPointerUp(event) {
  if (!fieldGoalGameActive || fieldGoalKickAnimating) return;
  if (fieldGoalPointerId === null || !fieldGoalDragStartPoint || !STADIUM_FRAME_MASK) return;
  if (event?.pointerId != null && event.pointerId !== fieldGoalPointerId) return;

  event.preventDefault();
  const startPoint = fieldGoalDragStartPoint;
  const endPoint = fieldGoalDragCurrentPoint || getPointFromEvent(event) || startPoint;
  const frameRect = STADIUM_FRAME_MASK.getBoundingClientRect();
  const elapsedMs = Math.max(16, performance.now() - fieldGoalDragStartAt);
  const activePointerId = fieldGoalPointerId;
  fieldGoalPointerId = null;

  try {
    if (activePointerId !== null && FIELD_GOAL_BALL?.hasPointerCapture(activePointerId)) {
      FIELD_GOAL_BALL.releasePointerCapture(activePointerId);
    }
  } catch {
    // no-op
  }
  fieldGoalDragStartPoint = null;
  fieldGoalDragCurrentPoint = null;
  fieldGoalDragStartAt = 0;

  setFieldGoalBallHeld(false);
  setFieldGoalMeterActive(false);
  clearFieldGoalInstructionTimer();
  setLedMessage();

  let rawDistance = 0;
  let swipeDy = 0;
  let swipeAngle = Math.PI / 2;
  let combinedPower = 0;

  if (fieldGoalUseMobileSwipeActive) {
    const dx = endPoint.x - startPoint.x;
    swipeDy = startPoint.y - endPoint.y;
    rawDistance = Math.hypot(dx, swipeDy);
    swipeAngle = Math.atan2(swipeDy, dx || 0);

    if (swipeDy < 25 || rawDistance < FIELD_GOAL_MIN_FLICK_DISTANCE) {
      if (rawDistance >= FIELD_GOAL_WEAK_NUDGE_MIN_DISTANCE && swipeDy > 0) {
        const weakPower = clamp(rawDistance / Math.max(1, frameRect.width * FIELD_GOAL_POWER_DISTANCE_RATIO), 0.05, 0.22);
        if (maybeRunFieldGoalCinematicOverride(swipeAngle, weakPower)) {
          return;
        }
        runFieldGoalWeakNudgeMiss();
      } else {
        prepareFieldGoalBallForKick();
        showFieldGoalInstructionEveryOpen();
      }
      return;
    }

    const distancePower = clamp(rawDistance / Math.max(1, frameRect.width * FIELD_GOAL_POWER_DISTANCE_RATIO), 0, 1);
    const velocityNorm = clamp((rawDistance / elapsedMs) / 1.15, 0, 1);
    combinedPower = clamp(distancePower * 0.75 + velocityNorm * 0.25, 0.08, 1);
  } else {
    const drag = getFieldGoalDragOffset(endPoint, frameRect);
    const hasSwipeSignal = fieldGoalMiniGameState.hasSwiped && Number.isFinite(fieldGoalMiniGameState.swipeAngle);
    swipeDy = startPoint.y - endPoint.y;
    swipeAngle = hasSwipeSignal ? fieldGoalMiniGameState.swipeAngle : Math.atan2(swipeDy, drag.dx || 0);
    rawDistance = drag.rawDistance;
    const desktopWeakNudge = swipeDy > 0
      && rawDistance >= FIELD_GOAL_WEAK_NUDGE_MIN_DISTANCE
      && rawDistance <= (FIELD_GOAL_MIN_FLICK_DISTANCE * 0.72);

    if ((swipeDy < 12 || rawDistance < FIELD_GOAL_MIN_FLICK_DISTANCE) && (!hasSwipeSignal || desktopWeakNudge)) {
      if (desktopWeakNudge) {
        const weakPower = clamp(rawDistance / Math.max(1, frameRect.width * FIELD_GOAL_POWER_DISTANCE_RATIO), 0.05, 0.22);
        if (maybeRunFieldGoalCinematicOverride(swipeAngle, weakPower)) {
          return;
        }
        runFieldGoalWeakNudgeMiss();
      } else {
        prepareFieldGoalBallForKick();
        showFieldGoalInstructionEveryOpen();
      }
      return;
    }

    if (rawDistance < FIELD_GOAL_MIN_FLICK_DISTANCE && hasSwipeSignal) {
      rawDistance = FIELD_GOAL_MIN_FLICK_DISTANCE;
    }

    const distancePower = clamp(rawDistance / Math.max(1, frameRect.width * FIELD_GOAL_POWER_DISTANCE_RATIO), 0, 1);
    const velocityNorm = clamp((rawDistance / elapsedMs) / 1.15, 0, 1);
    combinedPower = clamp(distancePower * 0.75 + velocityNorm * 0.25, 0.08, 1);
    if (hasSwipeSignal) {
      combinedPower = Math.max(combinedPower, clamp(fieldGoalMeterValue, 0.08, 1));
    }
  }

  const desktopWeakForwardTap = !fieldGoalUseMobileSwipeActive
    && swipeDy > 0
    && rawDistance <= (FIELD_GOAL_MIN_FLICK_DISTANCE * 1.1)
    && combinedPower <= 0.2;
  if (desktopWeakForwardTap) {
    if (maybeRunFieldGoalCinematicOverride(swipeAngle, combinedPower)) {
      return;
    }
    runFieldGoalWeakNudgeMiss();
    return;
  }

  fieldGoalMiniGameState.hasSwiped = true;
  fieldGoalMiniGameState.hasTapped = true;
  fieldGoalMiniGameState.swipeAngle = swipeAngle;
  setFieldGoalMeterValue(combinedPower);

  if (maybeRunFieldGoalCinematicOverride(swipeAngle, combinedPower)) {
    return;
  }

  runFieldGoalKickWithFlick(swipeAngle, combinedPower);
}

function handleFieldGoalPointerCancel() {
  if (fieldGoalPointerId === null) return;
  fieldGoalPointerId = null;
  fieldGoalDragStartPoint = null;
  fieldGoalDragCurrentPoint = null;
  fieldGoalDragStartAt = 0;
  fieldGoalUseMobileSwipeActive = false;
  setFieldGoalBallHeld(false);
  setFieldGoalMeterActive(false);
  clearFieldGoalInstructionTimer();
  setLedMessage('');
  if (fieldGoalGameActive && !fieldGoalKickAnimating) {
    prepareFieldGoalBallForKick();
    showFieldGoalInstructionEveryOpen();
  }
}

function handleFieldGoalLostPointerCapture(event) {
  if (fieldGoalPointerId === null || !fieldGoalDragStartPoint || !fieldGoalGameActive || fieldGoalKickAnimating) {
    handleFieldGoalPointerCancel();
    return;
  }

  const frameRect = STADIUM_FRAME_MASK?.getBoundingClientRect();
  const fallbackPoint = fieldGoalDragCurrentPoint || fieldGoalDragStartPoint;
  const clientX = Number.isFinite(event?.clientX)
    ? event.clientX
    : (frameRect ? frameRect.left + fallbackPoint.x : fallbackPoint.x);
  const clientY = Number.isFinite(event?.clientY)
    ? event.clientY
    : (frameRect ? frameRect.top + fallbackPoint.y : fallbackPoint.y);

  handleFieldGoalPointerUp({
    pointerId: fieldGoalPointerId,
    clientX,
    clientY,
    preventDefault() {}
  });
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
  syncContextualButtonInteractivity();
}

function closeReceiptPreview(exitJumbotron = true) {
  receiptPreviewOpening = false;
  setReceiptPreviewVisible(false);
  BODY?.classList.remove('receipt-preview-opening', 'receipt-preview-trading-card');
  RECEIPT_PREVIEW_CARD?.classList.remove('receiptPreviewCard--trading');
  receiptPreviewVariant = 'receipt';
  if (RECEIPT_PREVIEW_IMAGE) {
    RECEIPT_PREVIEW_IMAGE.alt = 'Share-hawk receipt preview';
  }
  if (exitJumbotron && isJumbotronOpen && !isJumbotronAnimating) {
    closeJumbotronOverlay();
    return;
  }
  maybeShowFootball();
}

function setSubscribeOverlayVisible(active) {
  isSubscribeOpen = !!active;
  if (!BODY || !SUBSCRIBE_OVERLAY) return;
  BODY.classList.toggle('subscribe-open', isSubscribeOpen);
  SUBSCRIBE_OVERLAY.setAttribute('aria-hidden', isSubscribeOpen ? 'false' : 'true');
  syncContextualButtonInteractivity();
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
  maybeShowFootball();
}

function updateReceiptPreviewHint() {
  if (!RECEIPT_PREVIEW_HINT) return;
  const isTradingCardPreview = receiptPreviewVariant === 'trading-card';
  const desktopHint = isTradingCardPreview ? 'Click card to download' : 'Click to download';
  const mobileHint = isTradingCardPreview ? 'Tap and hold card to save' : 'Tap and hold ticket to save';

  if (RECEIPT_PREVIEW_HINT_DESKTOP) {
    RECEIPT_PREVIEW_HINT_DESKTOP.textContent = desktopHint;
  }
  if (RECEIPT_PREVIEW_HINT_MOBILE) {
    RECEIPT_PREVIEW_HINT_MOBILE.textContent = mobileHint;
  }

  RECEIPT_PREVIEW_HINT.setAttribute('aria-label', isMobileReceiptSaveMode() ? mobileHint : desktopHint);
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
  stopJumbotronStatsPolling();
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

async function openReceiptPreview(triggerEl, options = {}) {
  if (!RECEIPT_PREVIEW_OVERLAY || !RECEIPT_PREVIEW_CARD || !RECEIPT_PREVIEW_IMAGE) return;
  if (receiptPreviewGenerating || receiptPreviewOpen || receiptPreviewOpening) return;

  const isTradingCardPreview = options.variant === 'trading-card';
  const stats = latestStats || { participantsCount: 0, equalShare: PURCHASE_PRICE };
  const sharehawkCount = Math.max(0, Math.floor(Number(stats.participantsCount) || 0));

  receiptPreviewGenerating = true;
  receiptPreviewVariant = isTradingCardPreview ? 'trading-card' : 'receipt';
  BODY?.classList.toggle('receipt-preview-trading-card', isTradingCardPreview);
  RECEIPT_PREVIEW_CARD.classList.toggle('receiptPreviewCard--trading', isTradingCardPreview);

  if (!isTradingCardPreview && CLAIM_SHARE_BTN) {
    CLAIM_SHARE_BTN.disabled = true;
  }

  try {
    let payload = null;
    if (isTradingCardPreview) {
      payload = {
        href: options.imageSrc || WILLIAMS_TRADING_CARD_SRC,
        downloadName: options.downloadName || 'williams-trading-card.png'
      };
      RECEIPT_PREVIEW_IMAGE.alt = options.imageAlt || 'Leonard Williams trading card preview';
    } else {
      payload = await buildSharehawkReceiptPNGData({ sharehawkNumber: sharehawkCount });
      RECEIPT_PREVIEW_IMAGE.alt = 'Share-hawk receipt preview';
    }

    receiptPreviewPayload = payload;
    RECEIPT_PREVIEW_IMAGE.src = payload.href;
    updateReceiptPreviewHint();
    setReceiptPreviewVisible(true);
    BODY?.classList.add('receipt-preview-opening');
    receiptPreviewOpening = true;

    if (isTradingCardPreview) {
      RECEIPT_PREVIEW_CARD.style.setProperty('--receipt-from-dx', '0px');
      RECEIPT_PREVIEW_CARD.style.setProperty('--receipt-from-dy', '0px');
    } else {
      // Measure once visible so the card can animate out of the button center.
      setReceiptPreviewAnimationOrigin(triggerEl || CLAIM_SHARE_BTN);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      BODY?.classList.remove('receipt-preview-opening');
      receiptPreviewOpening = false;
      closeJumbotronQuietlyForTicketPreview();
    } else {
      const openAnimMs = isTradingCardPreview ? 300 : 480;
      window.setTimeout(() => {
        BODY?.classList.remove('receipt-preview-opening');
        receiptPreviewOpening = false;
        closeJumbotronQuietlyForTicketPreview();
      }, openAnimMs);
    }
  } catch {
    closeReceiptPreview(false);
  } finally {
    receiptPreviewGenerating = false;
    if (!isTradingCardPreview && CLAIM_SHARE_BTN) {
      CLAIM_SHARE_BTN.disabled = false;
    }
  }
}

async function openWilliamsTradingCardPreview(triggerEl) {
  if (!fieldGoalGameActive || !fieldGoalWilliamsUnlocked || WILLIAMS_UNLOCK_BTN?.disabled) return;
  await openReceiptPreview(triggerEl || WILLIAMS_UNLOCK_BTN, {
    variant: 'trading-card',
    imageSrc: WILLIAMS_TRADING_CARD_SRC,
    downloadName: 'leonard-williams-trading-card.png',
    imageAlt: 'Leonard Williams trading card preview'
  });
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
  const perShareValue = PURCHASE_PRICE / Math.max(safeNumber, 1);
  const perShareDisplay = formatCurrency(perShareValue);
  const now = new Date();
  const dateDisplay = now.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
  const timeDisplay = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });

  const templateImg = await loadImageForTicket('/assets/ticket-template.png');

  const W = canvas.width;
  const H = canvas.height;
  const MAIN_BLOCK = { x: 166, y: 1150, w: 548, h: 400 };
  const STUB_BLOCK = { x: 166, y: 1623, w: 279, h: 179 };

  const COLOR_WHITE = '#ffffff';
  const COLOR_GREEN = '#01843e';
  const COLOR_GREY = '#b2b4b1';
  const FONT_STACK = '"Space Mono", "IBM Plex Mono", "Courier New", monospace';

  function drawWrapped(text, x, y, maxWidth, lineHeight, maxLines = 4) {
    const words = String(text).split(/\s+/).filter(Boolean);
    const lines = [];
    let current = '';

    for (let i = 0; i < words.length; i += 1) {
      const candidate = current ? current + ' ' + words[i] : words[i];
      if (ctx.measureText(candidate).width <= maxWidth || !current) {
        current = candidate;
      } else {
        lines.push(current);
        current = words[i];
        if (lines.length >= maxLines - 1) {
          break;
        }
      }
    }

    if (current) lines.push(current);

    for (let i = 0; i < Math.min(lines.length, maxLines); i += 1) {
      ctx.fillText(lines[i], x, y + i * lineHeight);
    }

    return y + Math.min(lines.length, maxLines) * lineHeight;
  }

  ctx.clearRect(0, 0, W, H);
  if (templateImg) {
    ctx.drawImage(templateImg, 0, 0, W, H);
  } else {
    ctx.fillStyle = '#0f2c8f';
    ctx.fillRect(0, 0, W, H);
  }

  // Main information block
  ctx.save();
  ctx.beginPath();
  ctx.rect(MAIN_BLOCK.x, MAIN_BLOCK.y, MAIN_BLOCK.w, MAIN_BLOCK.h);
  ctx.clip();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  let cursorY = MAIN_BLOCK.y + 30;
  const leftX = MAIN_BLOCK.x + 24;
  const contentW = MAIN_BLOCK.w - 48;

  ctx.fillStyle = COLOR_GREY;
  ctx.font = '700 36px ' + FONT_STACK;
  ctx.fillText('Share-Hawk No.', leftX, cursorY);

  cursorY += 52;
  ctx.fillStyle = COLOR_WHITE;
  ctx.font = '700 72px ' + FONT_STACK;
  ctx.fillText(displayNumber, leftX, cursorY);

  cursorY += 110;
  ctx.fillStyle = COLOR_GREY;
  ctx.font = '700 28px ' + FONT_STACK;
  cursorY = drawWrapped("You're on the hook for", leftX, cursorY, contentW, 34, 2) + 6;

  ctx.fillStyle = COLOR_GREEN;
  ctx.font = '700 58px ' + FONT_STACK;
  ctx.fillText(perShareDisplay, leftX, cursorY);

  cursorY += 92;
  ctx.fillStyle = COLOR_WHITE;
  ctx.font = '700 24px ' + FONT_STACK;
  ctx.fillText('Date: ' + dateDisplay, leftX, cursorY);
  cursorY += 34;
  ctx.fillText('Time: ' + timeDisplay, leftX, cursorY);
  ctx.restore();

  // Stub clerical block
  ctx.save();
  ctx.beginPath();
  ctx.rect(STUB_BLOCK.x, STUB_BLOCK.y, STUB_BLOCK.w, STUB_BLOCK.h);
  ctx.clip();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  let stubY = STUB_BLOCK.y + 18;
  const stubX = STUB_BLOCK.x + 14;
  const stubW = STUB_BLOCK.w - 24;

  ctx.fillStyle = COLOR_GREY;
  ctx.font = '700 14px ' + FONT_STACK;
  ctx.fillText('SHARE-HAWK NO.', stubX, stubY);
  stubY += 18;

  ctx.fillStyle = COLOR_WHITE;
  ctx.font = '700 24px ' + FONT_STACK;
  ctx.fillText(displayNumber, stubX, stubY);
  stubY += 30;

  ctx.fillStyle = COLOR_GREY;
  ctx.font = '700 13px ' + FONT_STACK;
  stubY = drawWrapped("YOU'RE ON THE HOOK FOR", stubX, stubY, stubW, 16, 2);

  ctx.fillStyle = COLOR_GREEN;
  ctx.font = '700 20px ' + FONT_STACK;
  ctx.fillText(perShareDisplay, stubX, stubY + 2);

  ctx.fillStyle = COLOR_WHITE;
  ctx.font = '700 12px ' + FONT_STACK;
  ctx.fillText('DATE ' + dateDisplay, stubX, STUB_BLOCK.y + STUB_BLOCK.h - 34);
  ctx.fillText('TIME ' + timeDisplay, stubX, STUB_BLOCK.y + STUB_BLOCK.h - 18);
  ctx.restore();

  const href = canvas.toDataURL('image/png');
  return { href, displayNumber };
}

function downloadSharehawkReceiptPNG(payload) {
  if (!payload?.href) return;
  const a = document.createElement('a');
  a.href = payload.href;
  const fallbackName = payload?.displayNumber
    ? `sharehawk-receipt-${payload.displayNumber}.png`
    : 'sharehawk-receipt.png';
  a.download = payload?.downloadName || fallbackName;
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
  syncContextualButtonInteractivity();
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
  maybeShowFootball();
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
  const perfStart = performance.now();
  const maybeUnlockTicket = () => {
    if (!pendingTicketUnlock) return;
    ticketCountersComplete = true;
    maybeFinalizeTicketUnlock();
  };
  try {
    const supabaseStats = await insertGlobalParticipant();
    if (supabaseStats) {
      statsDebugLog('sharehawk update resolved', { source: 'supabase', stats: supabaseStats });
      const sharehawkAnimDurationMs = 760;
      const sharehawkInvestmentAnimDurationMs = 1120;
      animateToStats(supabaseStats, sharehawkAnimDurationMs, sharehawkInvestmentAnimDurationMs, maybeUnlockTicket);
      // Safety fallback: if another stats refresh interrupts animation callbacks,
      // still finalize ticket unlock after the intended number-roll delay.
      if (pendingTicketUnlock) {
        const unlockSafetyDelayMs = Math.max(sharehawkAnimDurationMs, sharehawkInvestmentAnimDurationMs) + 140;
        window.setTimeout(() => {
          maybeUnlockTicket();
        }, unlockSafetyDelayMs);
      }
      perfLog('sharehawk counter update', { source: 'supabase', durationMs: Math.round(performance.now() - perfStart) });
      return true;
    }
  } catch (error) {
    statsDebugLog('sharehawk update supabase failed', error);
  }

  // Keep stats truthful: on sync failure, re-fetch remote values instead of
  // faking a local increment that can later "rewind".
  try {
    const refreshed = await refreshStatsNow(420, 'sharehawk-insert-recover', true);
    if (refreshed?.ok) {
      maybeUnlockTicket();
      statsDebugLog('sharehawk update resolved', { source: 'supabase-recover', stats: refreshed.stats });
      perfLog('sharehawk counter update', { source: 'supabase-recover', durationMs: Math.round(performance.now() - perfStart) });
      return true;
    }
  } catch (error) {
    statsDebugLog('sharehawk update recover failed', error);
  }

  perfLog('sharehawk counter update', { source: 'failed', durationMs: Math.round(performance.now() - perfStart) });
  return false;
}

async function runSharehawkImpact(source = 'unknown') {
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

  // Do not block launch on asset resolution; prewarm runs in background.
  ensureSharehawkAssets().catch((error) => {
    perfLog('sharehawk assets ensure failed', { error: String(error?.message || error) });
  });

  const footballSrc = footballSpriteSrc || FOOTBALL_SPRITE_CANDIDATES[0] || '';
  const glassSrc = brokenGlassSpriteSrc || BROKEN_GLASS_SPRITE_CANDIDATES[0] || '';
  if (!footballSrc || !glassSrc) {
    sharehawkAnimating = false;
    pendingTicketUnlock = false;
    if (SHARE_HAWK_BTN) SHARE_HAWK_BTN.disabled = false;
    return;
  }
  footballSpriteSrc = footballSrc;
  brokenGlassSpriteSrc = glassSrc;

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

  JUMBOTRON_IMPACT_SPRITE.src = footballSrc;
  JUMBOTRON_IMPACT_SPRITE.style.opacity = '1';
  JUMBOTRON_IMPACT_SPRITE.style.width = `${footballStartW.toFixed(2)}px`;
  JUMBOTRON_GLASS_SPRITE.style.opacity = '0';

  if (DEBUG_PERF) {
    const launchAt = performance.now();
    const tapToLaunchMs = perfSharehawkTapAt > 0 ? Math.round(launchAt - perfSharehawkTapAt) : null;
    const longTasksNearTap = perfLongTasks
      .filter((task) => perfSharehawkTapAt > 0 && task.start >= (perfSharehawkTapAt - 60) && task.start <= (launchAt + 400))
      .map((task) => ({ startMs: Math.round(task.start), durationMs: Math.round(task.duration) }));
    console.groupCollapsed(`[perf] sharehawk launch (${source})`);
    console.log('tapToLaunchMs', tapToLaunchMs);
    console.log('longTasksNearTap', longTasksNearTap);
    console.groupEnd();
  }

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
    JUMBOTRON_GLASS_SPRITE.src = glassSrc;
    updateBrokenGlassLayout();
    triggerCelebrationFX();
    JUMBOTRON_IMPACT_SPRITE.style.opacity = '0';
    JUMBOTRON_PANEL.classList.add('jumbotronFlicker');
    window.setTimeout(async () => {
      JUMBOTRON_PANEL.classList.remove('jumbotronFlicker');
      const updated = await triggerSharehawkCounterUpdate();
      if (!updated) {
        statsDebugLog('sharehawk update failed; continuing ticket flow');
        ticketCountersComplete = true;
        maybeFinalizeTicketUnlock();
      }
      sharehawkImpacted = true;
      sharehawkAnimating = false;
    }, 360);
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
    JUMBOTRON_GLASS_SPRITE.src = glassSrc;
    updateBrokenGlassLayout();
    triggerCelebrationFX();
    JUMBOTRON_IMPACT_SPRITE.style.opacity = '0';
    JUMBOTRON_IMPACT_SPRITE.style.width = '0';
    JUMBOTRON_IMPACT_SPRITE.style.transform = 'translate3d(-9999px, -9999px, 0)';
    JUMBOTRON_PANEL.classList.remove('jumbotronOff');
    JUMBOTRON_PANEL.classList.add('jumbotronFlicker');

    window.setTimeout(async () => {
      if (!JUMBOTRON_PANEL) return;
      JUMBOTRON_PANEL.classList.remove('jumbotronFlicker');
      const updated = await triggerSharehawkCounterUpdate();
      if (!updated) {
        statsDebugLog('sharehawk update failed; continuing ticket flow');
        ticketCountersComplete = true;
        maybeFinalizeTicketUnlock();
      }
      sharehawkImpacted = true;
      sharehawkAnimating = false;
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
  syncContextualButtonInteractivity();
  statsDebugLog("jumbotron opened", { isJumbotronOpen, isJumbotronAnimating });
  applyBrokenGlassIfNeeded();
  refreshStatsAndRenderJumbotron("open");
  startJumbotronStatsPolling();
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
  stopJumbotronStatsPolling();
  if (!JUMBOTRON_OVERLAY) return;
  closeReceiptPreview(false);
  debugJumbotronSnapshot('before-close');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isJumbotronOpen = false;
    isJumbotronAnimating = false;
    BODY.classList.remove('jumbotron-open', 'jumbotron-opening', 'jumbotron-closing');
    syncContextualButtonInteractivity();
    JUMBOTRON_OVERLAY.setAttribute('aria-hidden', 'true');
    resetSharehawkImpactState();
    if (DEBUG_JUMBOTRON) BODY.classList.remove('debug-jumbotron');
    maybeShowFootball();
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
    syncContextualButtonInteractivity();
    JUMBOTRON_OVERLAY.setAttribute('aria-hidden', 'true');
    resetSharehawkImpactState();
    if (DEBUG_JUMBOTRON) BODY.classList.remove('debug-jumbotron');
    maybeShowFootball();
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
    const supabaseStats = await insertGlobalParticipant();
    if (supabaseStats) {
      animateToStats(supabaseStats, 520);
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
  markFieldGoalInteraction('proposal');
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
      syncContextualButtonInteractivity();
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
    syncContextualButtonInteractivity();
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
      syncContextualButtonInteractivity();
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
  // Keep investment/share-hawk strictly derived from the global participant count.
  const equalShare = PURCHASE_PRICE / Math.max(participantsCount, 1);

  return { participantsCount, equalShare };
}

function markRenderedParticipantsCount(count) {
  const safeCount = Math.max(0, Math.round(Number(count) || 0));
  if (safeCount > maxRenderedParticipantsCount) {
    maxRenderedParticipantsCount = safeCount;
  }
}

function applyMonotonicStatsGuard(rawStats) {
  const stats = toStats(rawStats);
  const safeCount = Math.max(stats.participantsCount, maxRenderedParticipantsCount);
  if (safeCount === stats.participantsCount) {
    return stats;
  }
  return {
    participantsCount: safeCount,
    equalShare: PURCHASE_PRICE / Math.max(safeCount, 1)
  };
}

function getSupabaseCredentials() {
  const runtimeUrl = (window.__SUPABASE_URL || '').trim();
  const runtimeKey = (window.__SUPABASE_KEY || window.__SUPABASE_ANON_KEY || '').trim();
  const bodyUrl = (document.body?.dataset?.supabaseUrl || '').trim();
  const bodyKey = (document.body?.dataset?.supabaseAnonKey || '').trim();

  return {
    url: runtimeUrl || bodyUrl,
    key: runtimeKey || bodyKey
  };
}

function getTurnstileSiteKey() {
  const runtimeSiteKey = (window.__TURNSTILE_SITE_KEY || '').trim();
  const bodySiteKey = (document.body?.dataset?.turnstileSiteKey || '').trim();
  return runtimeSiteKey || bodySiteKey;
}

function getSharehawkFunctionUrl() {
  const { url } = getSupabaseCredentials();
  if (!url) return '';
  return `${url}/functions/v1/${SUPABASE_SHAREHAWK_FUNCTION}`;
}

function clearTurnstileTokenPromise() {
  if (turnstileTokenTimerId) {
    clearTimeout(turnstileTokenTimerId);
    turnstileTokenTimerId = 0;
  }
  turnstileTokenRequest = null;
  turnstileTokenResolve = null;
  turnstileTokenReject = null;
}

function resolveTurnstileToken(token) {
  if (!turnstileTokenResolve) return;
  const resolve = turnstileTokenResolve;
  clearTurnstileTokenPromise();
  resolve(token);
}

function rejectTurnstileToken(error) {
  if (!turnstileTokenReject) return;
  const reject = turnstileTokenReject;
  clearTurnstileTokenPromise();
  reject(error instanceof Error ? error : new Error(String(error || 'Turnstile verification failed.')));
}

function ensureTurnstileWidget() {
  if (turnstileWidgetId !== null) {
    return turnstileWidgetId;
  }

  const siteKey = getTurnstileSiteKey();
  if (!siteKey || !TURNSTILE_MOUNT || !window.turnstile?.render) {
    return null;
  }

  turnstileWidgetId = window.turnstile.render(TURNSTILE_MOUNT, {
    sitekey: siteKey,
    size: 'invisible',
    appearance: 'interaction-only',
    action: 'sharehawk_insert',
    callback: (token) => {
      statsDebugLog('turnstile token received');
      resolveTurnstileToken(token);
    },
    'error-callback': () => {
      statsDebugLog('turnstile token error');
      rejectTurnstileToken(new Error('Turnstile verification failed.'));
    },
    'expired-callback': () => {
      statsDebugLog('turnstile token expired');
      rejectTurnstileToken(new Error('Turnstile token expired.'));
    },
    'timeout-callback': () => {
      statsDebugLog('turnstile token timeout');
      rejectTurnstileToken(new Error('Turnstile timed out.'));
    }
  });

  return turnstileWidgetId;
}

async function waitForTurnstileApi(maxWaitMs = 8000) {
  if (window.turnstile?.render) return;

  const start = performance.now();
  while ((performance.now() - start) < maxWaitMs) {
    await wait(100);
    if (window.turnstile?.render) {
      return;
    }
  }

  throw new Error('Turnstile unavailable.');
}

async function getTurnstileToken() {
  const siteKey = getTurnstileSiteKey();
  if (!siteKey) {
    throw new Error('Turnstile site key missing.');
  }

  await waitForTurnstileApi();
  const widgetId = ensureTurnstileWidget();
  if (widgetId === null || widgetId === undefined) {
    throw new Error('Turnstile unavailable.');
  }

  if (turnstileTokenRequest) {
    return turnstileTokenRequest;
  }

  turnstileTokenRequest = new Promise((resolve, reject) => {
    turnstileTokenResolve = resolve;
    turnstileTokenReject = reject;
    turnstileTokenTimerId = window.setTimeout(() => {
      rejectTurnstileToken(new Error('Turnstile verification timed out.'));
    }, TURNSTILE_TOKEN_TIMEOUT_MS);

    try {
      window.turnstile.reset(widgetId);
      window.turnstile.execute(widgetId);
    } catch (error) {
      rejectTurnstileToken(error);
    }
  });

  return turnstileTokenRequest;
}

function initSupabaseClient() {
  const { url, key } = getSupabaseCredentials();
  const createClient = window.supabase?.createClient;
  if (!url || !key || !createClient) {
    supabaseMode = false;
    supabaseClient = null;
    if (!supabaseWarnedMissingConfig) {
      console.warn('[stats] Supabase config missing. Running in local fallback mode.');
      supabaseWarnedMissingConfig = true;
    }
    statsDebugLog("supabase init unavailable", { hasUrl: !!url, hasKey: !!key, hasCreateClient: !!createClient });
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(url, key);
    statsDebugLog("supabase client created", { url });
  }
  supabaseMode = true;
  return supabaseClient;
}

function statsFromParticipantCount(count) {
  const participantsCount = Math.max(0, Number(count) || 0);
  return {
    participantsCount,
    equalShare: PURCHASE_PRICE / Math.max(participantsCount, 1)
  };
}

async function fetchGlobalParticipantsCount() {
  const client = initSupabaseClient();
  if (!client) return null;

  const fetchStart = performance.now();
  statsDebugLog("fetch count start", { source: "supabase" });
  const rpcStart = performance.now();
  const rpcRes = await client.rpc('get_participant_count');
  perfLog('stats rpc:get_participant_count', {
    durationMs: Math.round(performance.now() - rpcStart),
    ok: !rpcRes.error
  });
  if (!rpcRes.error && rpcRes.data != null) {
    const rpcCount = parseParticipantsCountValue(rpcRes.data);
    if (rpcCount != null) {
      statsDebugLog("fetch count via rpc", { count: rpcCount });
      perfLog('stats fetch total', { durationMs: Math.round(performance.now() - fetchStart), source: 'rpc' });
      return rpcCount;
    }
    statsDebugLog("fetch count rpc parse failed", { data: rpcRes.data });
  }
  if (rpcRes.error) {
    statsDebugLog("fetch count rpc failed", rpcRes.error);
  }

  const tableStart = performance.now();
  const { count, error } = await client
    .from(SUPABASE_PARTICIPANTS_TABLE)
    .select('id', { count: 'exact', head: true });
  perfLog('stats table count fallback', {
    durationMs: Math.round(performance.now() - tableStart),
    ok: !error
  });

  if (error) throw error;
  const tableCount = Number(count || 0);
  statsDebugLog("fetch count via table", { count: tableCount });
  perfLog('stats fetch total', { durationMs: Math.round(performance.now() - fetchStart), source: 'table' });
  return tableCount;
}

async function loadGlobalStatsFromSupabase(duration = 250, reason = 'manual') {
  const count = await fetchGlobalParticipantsCount();
  if (count == null) return null;
  const stats = statsFromParticipantCount(count);
  updateJumbotronDisplay({
    count: stats.participantsCount,
    investment: stats.equalShare,
    animate: true,
    duration,
    commitmentDuration: duration
  });
  setJumbotronDebugChip(stats, 'supabase:' + reason);
  return stats;
}


async function insertParticipantDirect(client, reason = 'direct') {
  const directStart = performance.now();
  const { error } = await client
    .from(SUPABASE_PARTICIPANTS_TABLE)
    .insert([{}]);

  perfLog('sharehawk direct insert', {
    reason,
    durationMs: Math.round(performance.now() - directStart),
    ok: !error
  });

  if (error) throw error;

  const refreshedCount = await fetchGlobalParticipantsCount();
  return statsFromParticipantCount(refreshedCount);
}
async function insertGlobalParticipant() {
  const client = initSupabaseClient();
  if (!client) return null;

  if (supabaseInsertInFlight) {
    statsDebugLog("insert skipped; in flight");
    return null;
  }

  const { key } = getSupabaseCredentials();
  const functionUrl = getSharehawkFunctionUrl();
  const siteKey = getTurnstileSiteKey();
  const canUseProtectedInsert = Boolean(siteKey && key && functionUrl);

  supabaseInsertInFlight = true;
  const insertStart = performance.now();
  statsDebugLog("insert participant start", { protected: canUseProtectedInsert });
  try {
    if (!canUseProtectedInsert) {
      const directStats = await insertParticipantDirect(client, 'no-protected-config');
      statsDebugLog("insert participant success", { source: "direct", updatedCount: directStats.participantsCount });
      perfLog('insert participant total', { durationMs: Math.round(performance.now() - insertStart), ok: true, source: 'direct' });
      return directStats;
    }

    try {
      const tokenStart = performance.now();
      const token = await getTurnstileToken();
      perfLog('turnstile token ready', { durationMs: Math.round(performance.now() - tokenStart) });

      const requestStart = performance.now();
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: key,
          Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({ token })
      });

      const payload = await response.json().catch(() => ({}));
      perfLog('sharehawk edge insert', {
        durationMs: Math.round(performance.now() - requestStart),
        ok: response.ok
      });
      if (!response.ok) {
        throw new Error(payload?.error || 'Unable to record share-hawk.');
      }

      let updatedCount = parseParticipantsCountValue(payload?.count);
      if (updatedCount == null) {
        updatedCount = await fetchGlobalParticipantsCount();
      }

      const stats = statsFromParticipantCount(updatedCount);
      statsDebugLog("insert participant success", { source: "edge", updatedCount });
      perfLog('insert participant total', { durationMs: Math.round(performance.now() - insertStart), ok: true, source: 'edge' });
      return stats;
    } catch (protectedError) {
      statsDebugLog('protected insert failed; falling back to direct insert', protectedError);
      const directStats = await insertParticipantDirect(client, 'protected-fallback');
      statsDebugLog("insert participant success", { source: "direct-fallback", updatedCount: directStats.participantsCount });
      perfLog('insert participant total', { durationMs: Math.round(performance.now() - insertStart), ok: true, source: 'direct-fallback' });
      return directStats;
    }
  } catch (error) {
    statsDebugLog("insert participant failed", error);
    perfLog('insert participant total', { durationMs: Math.round(performance.now() - insertStart), ok: false, error: String(error?.message || error) });
    throw error;
  } finally {
    supabaseInsertInFlight = false;
    clearTurnstileTokenPromise();
  }
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

function getInvestmentAnimationDuration(duration, commitmentDuration) {
  const requested = Math.max(
    1,
    Math.round(Number.isFinite(commitmentDuration) ? commitmentDuration : duration)
  );

  if (requested <= JUMBOTRON_INVESTMENT_OPEN_DURATION_THRESHOLD_MS) {
    return clamp(
      Math.round(requested * JUMBOTRON_INVESTMENT_OPEN_DURATION_MULTIPLIER),
      JUMBOTRON_INVESTMENT_OPEN_MIN_DURATION_MS,
      JUMBOTRON_INVESTMENT_OPEN_MAX_DURATION_MS
    );
  }

  return clamp(
    requested,
    JUMBOTRON_INVESTMENT_UPDATE_MIN_DURATION_MS,
    JUMBOTRON_INVESTMENT_UPDATE_MAX_DURATION_MS
  );
}

function getInvestmentQuantizeStep(remainingDelta) {
  const absDelta = Math.abs(Number(remainingDelta) || 0);
  if (absDelta >= 50_000_000) return 1_000_000;
  if (absDelta >= 5_000_000) return 100_000;
  if (absDelta >= 500_000) return 10_000;
  if (absDelta >= 50_000) return 1_000;
  if (absDelta >= 5_000) return 100;
  return 1;
}

function quantizeInvestmentFrameValue(value, from, to) {
  const direction = to >= from ? 1 : -1;
  const remaining = Math.abs(to - value);
  const step = getInvestmentQuantizeStep(remaining);
  if (step <= 1) {
    return Math.round(value);
  }

  let snapped;
  if (direction > 0) {
    snapped = Math.floor(value / step) * step;
    snapped = Math.max(from, snapped);
    snapped = Math.min(to, snapped);
  } else {
    snapped = Math.ceil(value / step) * step;
    snapped = Math.min(from, snapped);
    snapped = Math.max(to, snapped);
  }

  return Math.round(snapped);
}

function animateToStats(nextRaw, duration = 600, commitmentDuration = duration, onComplete) {
  const next = applyMonotonicStatsGuard(nextRaw);
  const prev = applyMonotonicStatsGuard(latestStats || next);
  markRenderedParticipantsCount(prev.participantsCount);
  latestStats = next;
  animationToken += 1;
  const currentToken = animationToken;

  const previousParticipants = Math.round(prev.participantsCount);
  const nextParticipants = Math.round(next.participantsCount);
  const previousInvestment = Math.round(prev.equalShare);
  const nextInvestment = Math.round(next.equalShare);
  const pacedCommitmentDuration = getInvestmentAnimationDuration(duration, commitmentDuration);

  statsDebugLog("animateToStats start", {
    from: prev,
    to: next,
    duration,
    commitmentDuration,
    pacedCommitmentDuration
  });

  let completed = 0;
  const maybeComplete = () => {
    completed += 1;
    if (completed < 2) return;
    markRenderedParticipantsCount(next.participantsCount);
    statsDebugLog("animateToStats complete", next);
    statsDebugLog("jumbotron values updated", { sharehawks: formatSharehawksDisplay(next.participantsCount), commitment: formatCurrency(next.equalShare) });
    onComplete?.(next);
  };

  animateNumber(
    previousParticipants,
    nextParticipants,
    duration,
    (value) => {
      if (currentToken !== animationToken) return;
      const rounded = Math.round(value);
      const monotonicRounded = Math.max(maxRenderedParticipantsCount, rounded);
      markRenderedParticipantsCount(monotonicRounded);
      const text = formatShareholders(monotonicRounded);
      if (PARTICIPANTS_COUNT_EL) PARTICIPANTS_COUNT_EL.textContent = text;
      if (JOIN_PARTICIPANTS_COUNT_EL) JOIN_PARTICIPANTS_COUNT_EL.textContent = text;
      setJumbotronShareholdersDisplay(formatSharehawksDisplay(monotonicRounded));
      scheduleJumbotronFit();
    },
    maybeComplete
  );

  animateNumber(
    previousInvestment,
    nextInvestment,
    pacedCommitmentDuration,
    (value) => {
      if (currentToken !== animationToken) return;
      const quantized = quantizeInvestmentFrameValue(value, previousInvestment, nextInvestment);
      const text = formatCommitment(quantized);
      if (EQUAL_SHARE_EL) EQUAL_SHARE_EL.textContent = text;
      if (JOIN_EQUAL_SHARE_EL) JOIN_EQUAL_SHARE_EL.textContent = text;
      setJumbotronCommitmentDisplay(quantized);
      scheduleJumbotronFit();
    },
    () => {
      if (currentToken !== animationToken) return;
      const finalValue = Math.round(next.equalShare);
      const finalText = formatCommitment(finalValue);
      if (EQUAL_SHARE_EL) EQUAL_SHARE_EL.textContent = finalText;
      if (JOIN_EQUAL_SHARE_EL) JOIN_EQUAL_SHARE_EL.textContent = finalText;
      setJumbotronCommitmentDisplay(finalValue);
      scheduleJumbotronFit();
      maybeComplete();
    }
  );
}

async function refreshStatsNow(duration = 250, reason = "manual", toastOnFailure = false) {
  statsDebugLog("refresh stats start", { reason, duration });

  try {
    const supabaseStats = await loadGlobalStatsFromSupabase(duration, reason);
    if (supabaseStats) {
      statsDebugLog("refresh stats resolved", { reason, source: "supabase", stats: supabaseStats });
      return { ok: true, source: "supabase", stats: supabaseStats, fallback: false };
    }
  } catch (error) {
    statsDebugLog("supabase stats failed", error);
  }

  if (toastOnFailure) {
    showUiToast("Stats offline");
  }
  statsDebugLog("refresh stats failed", { reason });
  return { ok: false, source: "none", stats: null, fallback: false };
}

async function runStatsHealthCheck() {
  if (!DEBUG_STATS) return;
  try {
    const count = await fetchGlobalParticipantsCount();
    const stats = statsFromParticipantCount(count);
    setJumbotronDebugChip(stats, 'health-check');
    statsDebugLog("health check ok", { participantsCount: count });
  } catch (error) {
    statsDebugLog("health check failed", error);
    showUiToast("Stats offline");
  }
}

async function refreshStatsAndRenderJumbotron(reason = "jumbotron") {
  if (!isJumbotronOpen) return { ok: false, source: 'closed', stats: null, fallback: false };
  const toastOnFailure = reason === 'open';
  return refreshStatsNow(420, reason, toastOnFailure);
}

async function refreshJumbotronStatsNow(reason = "jumbotron") {
  return refreshStatsAndRenderJumbotron(reason);
}

function stopJumbotronStatsPolling() {
  if (!jumbotronStatsPollTimerId) return;
  clearInterval(jumbotronStatsPollTimerId);
  jumbotronStatsPollTimerId = 0;
  statsDebugLog("jumbotron poll stopped");
}

function startJumbotronStatsPolling() {
  if (jumbotronStatsPollTimerId) return;
  jumbotronStatsPollTimerId = window.setInterval(() => {
    if (!isJumbotronOpen || isJumbotronAnimating) return;
    refreshStatsAndRenderJumbotron("jumbotron-poll");
  }, JUMBOTRON_STATS_POLL_MS);
  statsDebugLog("jumbotron poll started", { intervalMs: JUMBOTRON_STATS_POLL_MS });
}

async function loadStats() {
  const result = await refreshStatsNow(250, "init", false);
  if (result?.ok) return;
  // Static deploy fallback keeps UI functional without server endpoints.
  const fallback = statsFromParticipantCount(latestStats?.participantsCount || 0);
  updateJumbotronDisplay({
    count: fallback.participantsCount,
    investment: fallback.equalShare,
    animate: false
  });
}

function loadCounties() {
  if (!COUNTY_SELECT) return;
  for (const county of COUNTIES) {
    const option = document.createElement('option');
    option.value = county;
    option.textContent = county;
    COUNTY_SELECT.appendChild(option);
  }
}

function initRealtime() {
  const client = initSupabaseClient();
  if (!client) {
    return;
  }

  client
    .channel('public-participants')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: SUPABASE_PARTICIPANTS_TABLE
      },
      async () => {
        if (!isJumbotronOpen) return;
        try {
          await refreshStatsNow(260, "realtime", false);
        } catch {
          // Keep UI stable if realtime refresh fails intermittently.
        }
      }
    )
    .subscribe();
}

if (FORM) {
  FORM.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (FORM_MESSAGE) FORM_MESSAGE.textContent = '';

    try {
      const supabaseStats = await insertGlobalParticipant();
      if (supabaseStats) {
        animateToStats(supabaseStats);
        FORM.reset();
        if (FORM_MESSAGE) FORM_MESSAGE.textContent = 'Anonymous commitment recorded.';
        return;
      }

      const fallbackCount = Math.max(1, Math.round((latestStats?.participantsCount || 0) + 1));
      const fallbackStats = statsFromParticipantCount(fallbackCount);
      animateToStats(fallbackStats);
      FORM.reset();
      if (FORM_MESSAGE) FORM_MESSAGE.textContent = 'Anonymous commitment recorded.';
    } catch (err) {
      if (FORM_MESSAGE) FORM_MESSAGE.textContent = err.message;
    }
  });
}

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

function handleRunNumbersActivation(source = 'click') {
  statsDebugLog('run the numbers activated', {
    source,
    jumbotronOpen: isJumbotronOpen,
    jumbotronAnimating: isJumbotronAnimating
  });
  markFieldGoalInteraction('numbers');
  openJumbotronOverlay();
}

if (JOIN_COLLECTIVE_BTN) {
  JOIN_COLLECTIVE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    handleRunNumbersActivation('click');
  });
  JOIN_COLLECTIVE_BTN.addEventListener('pointerup', (event) => {
    event.preventDefault();
    handleRunNumbersActivation('pointerup');
  });
  JOIN_COLLECTIVE_BTN.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    handleRunNumbersActivation('keydown');
  });
}

window.__triggerRunNumbers = () => {
  handleRunNumbersActivation('window');
  return false;
};

function handleSharehawkActivation(event, source = 'click') {
  if (event) event.preventDefault();
  if (sharehawkJoined || sharehawkAnimating || !SHARE_HAWK_BTN) return;
  const now = performance.now();
  if ((now - sharehawkTapHandledAt) < 220) return;
  sharehawkTapHandledAt = now;
  markSharehawkTap(source);
  SHARE_HAWK_BTN.classList.add('is-pressed');
  window.setTimeout(() => {
    SHARE_HAWK_BTN?.classList.remove('is-pressed');
  }, 140);
  runSharehawkImpact(source);
}

if (SHARE_HAWK_BTN) {
  SHARE_HAWK_BTN.addEventListener('pointerup', (event) => {
    handleSharehawkActivation(event, 'pointerup');
  });
  SHARE_HAWK_BTN.addEventListener('click', (event) => {
    handleSharehawkActivation(event, 'click');
  });
}

if (FIELD_GOAL_LAUNCHER) {
  FIELD_GOAL_LAUNCHER.addEventListener('click', (event) => {
    event.preventDefault();
    startFieldGoalGame();
  });
}

if (SPACE_NEEDLE_HOTSPOT) {
  SPACE_NEEDLE_HOTSPOT.addEventListener('click', (event) => {
    event.preventDefault();
    runBeastQuakeReveal();
  });
}

if (FIELD_GOAL_CLOSE_BTN) {
  FIELD_GOAL_CLOSE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    closeFieldGoalGame();
  });
}

if (WILLIAMS_UNLOCK_BTN) {
  WILLIAMS_UNLOCK_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!fieldGoalGameActive || !fieldGoalWilliamsUnlocked || WILLIAMS_UNLOCK_BTN.disabled) {
      return;
    }
    openWilliamsTradingCardPreview(event.currentTarget instanceof HTMLElement ? event.currentTarget : WILLIAMS_UNLOCK_BTN);
  });
}

if (FIELD_GOAL_BALL) {
  FIELD_GOAL_BALL.draggable = false;
  FIELD_GOAL_BALL.addEventListener('pointerdown', (event) => {
    handleFieldGoalPointerDown(event);
  });
  FIELD_GOAL_BALL.addEventListener('pointermove', (event) => {
    handleFieldGoalPointerMove(event);
  });
  FIELD_GOAL_BALL.addEventListener('pointerup', (event) => {
    handleFieldGoalPointerUp(event);
  });
  FIELD_GOAL_BALL.addEventListener('pointercancel', () => {
    handleFieldGoalPointerCancel();
  });
  FIELD_GOAL_BALL.addEventListener('lostpointercapture', (event) => {
    handleFieldGoalLostPointerCapture(event);
  });
}

// Desktop safety net: if pointer capture is interrupted while dragging,
// still finalize the kick when pointer is released anywhere on screen.
window.addEventListener('pointermove', (event) => {
  handleFieldGoalPointerMove(event);
}, true);

window.addEventListener('pointerup', (event) => {
  handleFieldGoalPointerUp(event);
}, true);

window.addEventListener('pointercancel', () => {
  handleFieldGoalPointerCancel();
}, true);

window.addEventListener('blur', () => {
  handleFieldGoalPointerCancel();
});

function moveFieldGoalFromCoords(clientX, clientY) {
  if (fieldGoalPointerId === null || !fieldGoalDragStartPoint || !fieldGoalGameActive || fieldGoalKickAnimating) return;
  handleFieldGoalPointerMove({
    pointerId: fieldGoalPointerId,
    clientX,
    clientY,
    preventDefault() {}
  });
}

function releaseFieldGoalFromCoords(clientX, clientY) {
  if (fieldGoalPointerId === null || !fieldGoalDragStartPoint || !fieldGoalGameActive || fieldGoalKickAnimating) return;
  handleFieldGoalPointerUp({
    pointerId: fieldGoalPointerId,
    clientX,
    clientY,
    preventDefault() {}
  });
}

window.addEventListener('mousemove', (event) => {
  moveFieldGoalFromCoords(event.clientX, event.clientY);
}, true);

window.addEventListener('mouseup', (event) => {
  releaseFieldGoalFromCoords(event.clientX, event.clientY);
}, true);

window.addEventListener('touchend', (event) => {
  const touch = event.changedTouches && event.changedTouches[0];
  if (!touch) return;
  releaseFieldGoalFromCoords(touch.clientX, touch.clientY);
}, { capture: true, passive: false });

if (SUBSCRIBE_BTN) {
  SUBSCRIBE_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isSharehawkSession || !isHomeScreenVisibleForFieldGoal() || SUBSCRIBE_BTN.disabled) {
      return;
    }
    triggerCelebrationFX({ independent: true, showWelcome: false });
    openSubscribeWindow();
  });
}

if (SHARE_BTN) {
  SHARE_BTN.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isSharehawkSession || !isHomeScreenVisibleForFieldGoal() || SHARE_BTN.disabled) {
      return;
    }
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
  if (fieldGoalGameActive) {
    closeFieldGoalGame();
    return;
  }
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
window.addEventListener('resize', syncFieldGoalGameLayout);
window.addEventListener('orientationchange', syncFieldGoalGameLayout);
if (window.ResizeObserver && STADIUM_FRAME_MASK) {
  const proposalOpenFrameObserver = new ResizeObserver(() => {
    updateUIScaleVar();
    scheduleActionButtonLabelLayout();
    syncProposalOpenLayout();
    syncFXCanvasSize();
    refreshImpactPoint();
    positionJumbotronCloseButton();
    syncFieldGoalGameLayout();
  });
  proposalOpenFrameObserver.observe(STADIUM_FRAME_MASK);
}

requestSceneIntroStart('startup');
window.addEventListener('load', () => {
  requestSceneIntroStart('window-load');
}, { once: true });

async function init() {
  updateUIScaleVar();
  scheduleActionButtonLabelLayout();
  initPerfLongTaskObserver();
  hydrateSharehawkJoinedState();
  hydrateSharehawkSessionState();
  hydrateJumbotronBrokenState();
  hydrateWelcomeHeadingState();
  hydrateTicketUnlockedState();
  hydrateFieldGoalProgressState();
  hydrateBeastQuakeState();
  initSpaceNeedleShimmerLoop();
  syncContextualButtonInteractivity();
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
  runStatsHealthCheck();
  initRealtime();
  prewarmSharehawkAssets();
  requestAnimationFrame(() => {
    perfInitIdleAt = performance.now();
    if (perfDomReadyAt > 0) {
      perfLog('dom->firstIdleFrame', { durationMs: Math.round(perfInitIdleAt - perfDomReadyAt) });
    }
  });
  maybeShowFootball();
}

initializePerfDomReadyMark();
startBootPreload();

init()
  .catch((err) => {
    console.error('[init] failed', err);
    if (FORM_MESSAGE) {
      FORM_MESSAGE.textContent = err.message;
    }
  });
