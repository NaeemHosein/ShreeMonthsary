const START = new Date(2026, 7, 20, 20, 54, 0);
const STORE = "shreeya-pink-world-v4";
const OLD_STORE = "shreeya-pink-world-v3";

const flowers = [
  { id: "cr1", type: "china-rose", name: "China Rose - Blush Silk", meaning: "Like the warm flush on her cheeks when she smiles at you across a quiet room. Soft, radiant, and impossible to turn away from.", colors: ["#FFB7CE", "#FF6B9D", "#FFF"] },
  { id: "cr2", type: "china-rose", name: "China Rose - Sunset Glow", meaning: "That golden pink evening warmth when time stops and all you want is to wrap her in a big hug forever.", colors: ["#FFA6C1", "#FFD0E0", "#FFF7FB"] },
  { id: "cr3", type: "china-rose", name: "China Rose - Candy Hibiscus", meaning: "Playful sweetness with a little cute mischief. The exact energy that makes every hour with Shreeya unforgettable.", colors: ["#B83B6A", "#FF9EC0", "#FFE4EF"] },
  { id: "d1", type: "dahlia", name: "Dahlia - Pompon Velvet", meaning: "Unwavering commitment, elegance, and a heart that stays steadfast through every chapter.", colors: ["#FFB7CE", "#FFF", "#E86B9A"] },
  { id: "d2", type: "dahlia", name: "Dahlia - Firework Flame", meaning: "Bold, passionate strength wrapped in gorgeous petals. Glowing brightly even in the darkest night.", colors: ["#FF5D8F", "#FFD0E0", "#B83B6A"] },
  { id: "d3", type: "dahlia", name: "Dahlia - Waterlily Petal", meaning: "Pure grace and tranquil beauty. Like watching her sleep peacefully with a soft smile on her face.", colors: ["#FFC2D6", "#FF7AA8", "#FFF"] },
  { id: "c1", type: "chrysanthemum", name: "Chrysanthemum - Button Kiss", meaning: "Loyalty in tiny, sweet round petals. Reminding me of every secret forehead kiss we share.", colors: ["#FFB7CE", "#FFE0EE", "#D94B86"] },
  { id: "c2", type: "chrysanthemum", name: "Chrysanthemum - Starlight Silk", meaning: "Golden ribbons of light reaching out, like every late night talk where hours feel like seconds.", colors: ["#FFB6C9", "#FF6B9D", "#FFF7FB"] },
  { id: "c3", type: "chrysanthemum", name: "Chrysanthemum - Royal Bloom", meaning: "Full of life, grand and warm. A flower that refuses to be quiet about how deeply you are loved.", colors: ["#F48FB1", "#B83B6A", "#FFE4EF"] }
];

const songs = [
  {
    id: "sweater-weather",
    initials: "SW",
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    fav: true,
    src: "audio/music/sweater-weather.mp3",
    color: "#FFB7CE",
    synthNotes: [261.63, 329.63, 392.00, 523.25]
  },
  {
    id: "steal-my-girl",
    initials: "SMG",
    title: "Steal My Girl",
    artist: "One Direction",
    fav: false,
    src: "audio/music/steal-my-girl.mp3",
    color: "#E86B9A",
    synthNotes: [293.66, 369.99, 440.00, 587.33]
  },
  {
    id: "lovebomb",
    initials: "LB",
    title: "Lovebomb",
    artist: "The Neighbourhood",
    fav: false,
    src: "audio/music/lovebomb.mp3",
    color: "#FF8AA8",
    synthNotes: [329.63, 415.30, 493.88, 659.25]
  },
  {
    id: "drivers-license",
    initials: "DL",
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    fav: false,
    src: "audio/music/drivers-license.mp3",
    color: "#B83B6A",
    synthNotes: [349.23, 440.00, 523.25, 698.46]
  },
  {
    id: "siren-sounds",
    initials: "SS",
    title: "Siren Sounds",
    artist: "Siren Sounds",
    fav: false,
    src: "audio/music/siren-sounds.mp3",
    color: "#FFA6C1",
    synthNotes: [392.00, 493.88, 587.33, 783.99]
  }
];

const secretTrackInfo = {
  id: "first-kiss-secret",
  title: "First Kiss Soundtrack",
  artist: "Shreio Special",
  src: "audio/secret/first-kiss-secret.mp3",
  synthNotes: [261.63, 329.63, 392.00, 493.88, 523.25]
};

const defaultState = {
  people: {
    her: {
      name: "Shreeya",
      nick: "Shree",
      photo: "",
      bio: "The girl who turns ordinary hours pink.",
      mood: "glowing",
      flower: "China Rose",
      song: "Sweater Weather",
      fact: "Laughs like sunshine",
      says: "stay",
      color: "#FFB7CE",
      hearts: 0
    },
    him: {
      name: "Naeem",
      nick: "Naio",
      photo: "",
      bio: "The boy who built her a pink internet garden.",
      mood: "devoted",
      flower: "Dahlia",
      song: "ours too",
      fact: "Hers, obviously",
      says: "always",
      color: "#B83B6A",
      hearts: 0
    }
  },
  her: [],
  him: [],
  kisses: 0,
  reasons: [],
  photos: [],
  kitchenMade: [],
  kingdom: { rooms: [], flagRaised: false, lanternsOn: false, gateOpen: false },
  tea: { her: 0, him: 0, treats: [], cheers: 0 },
  careActs: []
};

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE) || localStorage.getItem(OLD_STORE) || "null");
    if (!raw) return structuredClone(defaultState);
    return {
      ...defaultState,
      ...raw,
      people: {
        her: { ...defaultState.people.her, ...(raw.people?.her || {}) },
        him: { ...defaultState.people.him, ...(raw.people?.him || {}) }
      },
      reasons: Array.isArray(raw.reasons) ? raw.reasons : [],
      her: Array.isArray(raw.her) ? raw.her : [],
      him: Array.isArray(raw.him) ? raw.him : [],
      photos: Array.isArray(raw.photos) ? raw.photos : [],
      kitchenMade: Array.isArray(raw.kitchenMade) ? raw.kitchenMade : [],
      kingdom: { ...defaultState.kingdom, ...(raw.kingdom || {}) },
      tea: { ...defaultState.tea, ...(raw.tea || {}) },
      careActs: Array.isArray(raw.careActs) ? raw.careActs : []
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function save(state) {
  localStorage.setItem(STORE, JSON.stringify(state));
  if (window.firebase && firebase.database) {
    try {
      firebase.database().ref("shreio-state").set(state);
    } catch (e) {
      console.log("Firebase save error:", e);
    }
  }
}

let state = load();

// Live Firebase Realtime listener for seamless cloud sync
if (window.firebase && firebase.database) {
  try {
    const dbRef = firebase.database().ref("shreio-state");
    dbRef.on("value", (snapshot) => {
      const remoteData = snapshot.val();
      if (remoteData) {
        state = {
          ...defaultState,
          ...remoteData,
          people: {
            her: { ...defaultState.people.her, ...(remoteData.people?.her || {}) },
            him: { ...defaultState.people.him, ...(remoteData.people?.him || {}) }
          },
          reasons: Array.isArray(remoteData.reasons) ? remoteData.reasons : [],
          her: Array.isArray(remoteData.her) ? remoteData.her : [],
          him: Array.isArray(remoteData.him) ? remoteData.him : [],
          photos: Array.isArray(remoteData.photos) ? remoteData.photos : [],
          kitchenMade: Array.isArray(remoteData.kitchenMade) ? remoteData.kitchenMade : [],
          kingdom: { ...defaultState.kingdom, ...(remoteData.kingdom || {}) },
          tea: { ...defaultState.tea, ...(remoteData.tea || {}) },
          careActs: Array.isArray(remoteData.careActs) ? remoteData.careActs : []
        };
        localStorage.setItem(STORE, JSON.stringify(state));
        renderFlowers();
        renderQualities();
        renderReasons();
        renderPhotos();
        fillPeople();
        kissCount.textContent = state.kisses;
        updateKissMilestone(state.kisses);
        updateSpotlightReason();
        renderKitchenProgress();
        restoreKingdom();
        restoreTea();
        renderCareLog();
      }
    });
  } catch (e) {
    console.log("Firebase listener error:", e);
  }
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function pad(n) { return String(n).padStart(2, "0"); }

function elapsed(from, to) {
  if (to < from) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  let hours = to.getHours() - from.getHours();
  let minutes = to.getMinutes() - from.getMinutes();
  let seconds = to.getSeconds() - from.getSeconds();

  if (seconds < 0) { seconds += 60; minutes -= 1; }
  if (minutes < 0) { minutes += 60; hours -= 1; }
  if (hours < 0) { hours += 24; days -= 1; }
  if (days < 0) {
    const prev = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    days += prev;
    months -= 1;
  }
  if (months < 0) { months += 12; years -= 1; }
  return { years, months, days, hours, minutes, seconds };
}

function tick() {
  const t = elapsed(START, new Date());
  years.textContent = t.years;
  months.textContent = t.months;
  days.textContent = t.days;
  hours.textContent = pad(t.hours);
  minutes.textContent = pad(t.minutes);
  seconds.textContent = pad(t.seconds);
}

function flowerSvg(flower) {
  const [a, b, c] = flower.colors;
  if (flower.type === "dahlia") {
    const petals = Array.from({ length: 16 }, (_, i) => {
      const deg = i * 22.5;
      return `<ellipse cx="60" cy="28" rx="8" ry="26" fill="${i % 2 ? a : b}" transform="rotate(${deg} 60 62)" />`;
    }).join("");
    return `<svg viewBox="0 0 120 120">${petals}<circle cx="60" cy="62" r="12" fill="${c}" /><circle cx="60" cy="62" r="6" fill="${a}" /></svg>`;
  }
  if (flower.type === "chrysanthemum") {
    const petals = Array.from({ length: 24 }, (_, i) => {
      const deg = i * 15;
      return `<rect x="57" y="18" width="6" height="38" rx="3" fill="${i % 2 ? a : b}" transform="rotate(${deg} 60 62)" />`;
    }).join("");
    return `<svg viewBox="0 0 120 120">${petals}<circle cx="60" cy="62" r="11" fill="${c}" /></svg>`;
  }
  const petals = [0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) =>
    `<ellipse cx="60" cy="34" rx="16" ry="26" fill="${i % 2 ? a : b}" transform="rotate(${deg} 60 62)" opacity="0.95"/>`
  ).join("");
  return `<svg viewBox="0 0 120 120">${petals}<circle cx="60" cy="62" r="14" fill="${c}" /><circle cx="60" cy="62" r="7" fill="${a}" /></svg>`;
}

function renderFlowers(filter = "all") {
  flowerGrid.innerHTML = flowers
    .filter((f) => filter === "all" || f.type === filter)
    .map((f) => `
      <article class="flower-card" data-id="${f.id}" tabindex="0">
        <div class="bloom">${flowerSvg(f)}</div>
        <p class="card-kicker">${f.type.replace("-", " ")}</p>
        <h3>${f.name}</h3>
        <p class="meaning" hidden>${f.meaning}</p>
        <p class="hint-mini">Tap to reveal poetic meaning</p>
      </article>`).join("");
}

function renderQualities() {
  const paint = (person, el) => {
    el.innerHTML = state[person].map((q, i) => `
      <span class="tag">${esc(q)}<button type="button" data-person="${person}" data-i="${i}" aria-label="Remove">×</button></span>
    `).join("");
  };
  paint("her", herQualities);
  paint("him", himQualities);
}

function renderReasons() {
  if (!state.reasons.length) {
    reasonList.innerHTML = `<li class="empty-reasons">Your list is clean! Add your first reason why you adore her below ♥</li>`;
    return;
  }
  reasonList.innerHTML = state.reasons.map((r, i) => `
    <li>
      <span>${esc(r)}</span>
      <button class="icon-btn-delete" data-del-reason="${i}">×</button>
    </li>
  `).join("");
}

function updateSpotlightReason() {
  const el = document.getElementById("spotlightText");
  if (!el) return;
  if (!state.reasons.length) {
    el.textContent = `"Add your first reason why you love her below!"`;
    return;
  }
  const randomIndex = Math.floor(Math.random() * state.reasons.length);
  el.textContent = `"${state.reasons[randomIndex]}"`;
}

function renderPhotos() {
  const album = document.querySelector("[data-album].active")?.dataset.album || "all";
  const sort = photoSort.value;
  
  // Combine browser photos with auto-synced gallery photos
  const autoPhotos = typeof AUTO_GALLERY_PHOTOS !== "undefined" ? AUTO_GALLERY_PHOTOS : [];
  const existingIds = new Set(state.photos.map(p => p.id));
  const newAutoPhotos = autoPhotos.filter(p => !existingIds.has(p.id));
  
  let photos = [...state.photos, ...newAutoPhotos];
  if (album !== "all") photos = photos.filter((p) => p.who === album);
  photos.sort((a, b) => {
    if (sort === "oldest") return a.added - b.added;
    if (sort === "name") return a.title.localeCompare(b.title);
    if (sort === "favorites") return (b.fav ? 1 : 0) - (a.fav ? 1 : 0) || b.added - a.added;
    return b.added - a.added;
  });

  if (!photos.length) {
    photoGrid.innerHTML = `<p class="empty">No photos added to this album yet ♥</p>`;
    return;
  }
  photoGrid.innerHTML = photos.map((p) => `
    <figure class="photo-card-item">
      <img src="${p.src}" alt="${esc(p.title)}" loading="lazy" decoding="async" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'250\\' viewBox=\\'0 0 200 250\\'><rect width=\\'200\\' height=\\'250\\' fill=\\'%23FFB7CE\\'/><text x=\\'50%\\' y=\\'50%\\' font-family=\\'sans-serif\\' font-size=\\'14\\' fill=\\'%23B83B6A\\' text-anchor=\\'middle\\'>Shreio Moment</text></svg>'" />
    </figure>`).join("");
}

function spawnPetals() {
  const layer = document.querySelector(".petal-layer");
  for (let i = 0; i < 18; i += 1) {
    const p = document.createElement("i");
    p.className = "petal";
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${8 + Math.random() * 10}s`;
    p.style.animationDelay = `${-Math.random() * 12}s`;
    p.style.background = Math.random() > 0.5 ? "#FFB7CE" : "#FFD0E0";
    layer.appendChild(p);
  }
}

// Letter functionality
const envelope = document.getElementById("envelope");
const waxBtn = document.getElementById("waxBtn");
const stationery = document.getElementById("stationery");
const letterHint = document.getElementById("letterHint");
const resealBtn = document.getElementById("resealBtn");

function setEnvelope(next) {
  envelope.dataset.state = next;
  waxBtn.setAttribute("aria-expanded", String(next !== "sealed"));
  resealBtn.hidden = next !== "read";
  if (next === "sealed") letterHint.textContent = "Tap the wax seal first. Then tap the letter to pull it out.";
  if (next === "open") letterHint.textContent = "Tap the letter to pull it all the way out.";
  if (next === "read") letterHint.textContent = "Your letter, written in the heart of this page.";
}

waxBtn.addEventListener("click", () => setEnvelope("open"));

stationery.addEventListener("click", () => {
  if (envelope.dataset.state === "read") return;
  setEnvelope(envelope.dataset.state === "sealed" ? "open" : "read");
});

resealBtn.addEventListener("click", () => setEnvelope("sealed"));

// Monthsary letter functionality - New card design
const monthsaryCard = document.getElementById("monthsaryCard");
const monthsaryHeartBtn = document.getElementById("monthsaryHeartBtn");
const monthsaryCloseBtn = document.getElementById("monthsaryCloseBtn");

if (monthsaryHeartBtn) {
  monthsaryHeartBtn.addEventListener("click", () => {
    monthsaryCard.dataset.state = "open";
  });
}

if (monthsaryCloseBtn) {
  monthsaryCloseBtn.addEventListener("click", () => {
    monthsaryCard.dataset.state = "closed";
  });
}

function syncNames() {
  const { her, him } = state.people;
  document.querySelectorAll(".js-her-name").forEach((el) => { el.textContent = her.name; });
  document.querySelectorAll(".js-her-nick").forEach((el) => { el.textContent = her.nick; });
  document.querySelectorAll(".js-him-name").forEach((el) => { el.textContent = him.name; });
  document.querySelectorAll(".js-him-nick").forEach((el) => { el.textContent = him.nick; });
  document.title = `My Love, ${her.name} • Shreio`;
}

function fillCard(who) {
  const person = state.people[who];
  document.querySelectorAll(`[data-card="${who}"]`).forEach((el) => {
    const field = el.dataset.field;
    if (!field) return;
    el.value = person[field] ?? "";
  });
  const img = document.getElementById(`photo-${who}`);
  const portrait = img.closest(".portrait");
  
  // Auto-synced portrait from gallery folder takes priority over old localStorage photo
  const autoPortrait = (typeof AUTO_PORTRAITS !== "undefined" && AUTO_PORTRAITS) ? AUTO_PORTRAITS[who] : "";
  const finalPhoto = autoPortrait || person.photo;

  if (finalPhoto) {
    img.src = finalPhoto;
    portrait.classList.add("has-photo");
  } else {
    img.removeAttribute("src");
    portrait.classList.remove("has-photo");
  }
  document.querySelector(`[data-heart-count="${who}"]`).textContent = person.hearts || 0;
  document.getElementById(`card-${who}`).style.borderColor = person.color || "transparent";
}

function fillPeople() {
  fillCard("her");
  fillCard("him");
  syncNames();
}

function updateKissMilestone(count) {
  const milestone = document.getElementById("kissMilestone");
  if (!milestone) return;
  if (count === 0) milestone.textContent = "Tap to send your 1st kiss ♥";
  else if (count < 5) milestone.textContent = `${count} kisses: Soft cheek kisses ♥`;
  else if (count < 10) milestone.textContent = `${count} kisses: Forehead kisses warmth! ✨`;
  else if (count < 25) milestone.textContent = `${count} kisses: Butterfly hugs & sweet kisses! 🦋`;
  else milestone.textContent = `${count} kisses: Deeply, endlessly in love! 💖`;
}

// Advanced Jukebox / Music Player Logic with Song Initials
let currentSongIndex = 0;
let isPlaying = false;
let audioCtx = null;
let currentSynthInterval = null;
const mainAudio = new Audio();

function initPlaylistUI() {
  const playlistEl = document.getElementById("playlist");
  playlistEl.innerHTML = songs.map((s, idx) => `
    <li class="song-item ${idx === 0 ? "active fav-highlight" : ""} ${s.fav ? "is-fav" : ""}" data-song-idx="${idx}">
      <span class="song-initials-badge">${s.initials}</span>
      <div class="song-details">
        <span class="song-title">${esc(s.title)} ${s.fav ? "<span class='badge-fav'>FAVORITE</span>" : ""}</span>
        <span class="song-artist">${esc(s.artist)}</span>
      </div>
      <button class="song-status-btn">${idx === currentSongIndex && isPlaying ? "PAUSE" : "PLAY"}</button>
    </li>
  `).join("");
}

function loadSong(index) {
  // Stop everything cleanly before switching tracks
  mainAudio.pause();
  stopSynthFallback();

  currentSongIndex = index;
  const song = songs[index];
  document.getElementById("currentSongTitle").textContent = song.title;
  document.getElementById("currentSongArtist").textContent = song.artist;
  document.getElementById("artTrackInitials").textContent = song.initials;

  // Reset progress bar and time display
  const progressEl = document.getElementById("songProgress");
  progressEl.value = 0;
  updateSliderFill(progressEl);
  document.getElementById("currentTime").textContent = "0:00";
  document.getElementById("totalDuration").textContent = "0:00";

  const favTag = document.getElementById("favTag");
  if (song.fav) {
    favTag.style.display = "inline-block";
    favTag.textContent = "HER #1 FAVORITE SONG";
  } else {
    favTag.style.display = "none";
  }

  // Highlight active playlist item
  document.querySelectorAll(".song-item").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });

  mainAudio.src = song.src;
  mainAudio.load();
}

function togglePlay() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function playSong() {
  const song = songs[currentSongIndex];
  // Wait for the audio to be ready before playing to avoid race conditions
  const attemptPlay = () => {
    mainAudio.play().then(() => {
      isPlaying = true;
      updatePlayerUI();
    }).catch(() => {
      // Fallback if local MP3 file is not found yet: use Web Audio API synth
      isPlaying = true;
      playSynthFallback(song.synthNotes);
      updatePlayerUI();
    });
  };

  // If audio hasn't loaded its source yet, wait for canplay
  if (mainAudio.readyState < 3 && mainAudio.src && !mainAudio.src.endsWith("/")) {
    const onCanPlay = () => {
      mainAudio.removeEventListener("canplay", onCanPlay);
      attemptPlay();
    };
    mainAudio.addEventListener("canplay", onCanPlay);
  } else {
    attemptPlay();
  }
}

function pauseSong() {
  isPlaying = false;
  mainAudio.pause();
  stopSynthFallback();
  updatePlayerUI();
}

function updatePlayerUI() {
  const btn = document.getElementById("playPauseBtn");
  const art = document.getElementById("playerCover");
  const eq = document.getElementById("eqBars");
  
  if (isPlaying) {
    btn.textContent = "PAUSE";
    btn.classList.add("is-playing");
    art.classList.add("glowing");
    eq.classList.add("playing");
  } else {
    btn.textContent = "PLAY";
    btn.classList.remove("is-playing");
    art.classList.remove("glowing");
    eq.classList.remove("playing");
  }

  document.querySelectorAll(".song-item").forEach((el, i) => {
    const statusBtn = el.querySelector(".song-status-btn");
    if (statusBtn) {
      statusBtn.textContent = (i === currentSongIndex && isPlaying) ? "PAUSE" : "PLAY";
    }
  });
}

function playSynthFallback(notes) {
  stopSynthFallback();
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();

  let noteIndex = 0;
  currentSynthInterval = setInterval(() => {
    if (!isPlaying) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const freq = notes[noteIndex % notes.length];
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.65);
    
    noteIndex++;
  }, 500);
}

function stopSynthFallback() {
  if (currentSynthInterval) {
    clearInterval(currentSynthInterval);
    currentSynthInterval = null;
  }
}

// Update the visual fill gradient on a range slider
function updateSliderFill(el) {
  const min = Number(el.min) || 0;
  const max = Number(el.max) || 100;
  const pct = ((Number(el.value) - min) / (max - min)) * 100;
  el.style.setProperty(
    "--fill",
    `linear-gradient(to right, var(--deep) ${pct}%, #e8c3d0 ${pct}%)`
  );
  // Webkit: update the runnable-track background directly via inline style trick
  el.style.background = `linear-gradient(to right, var(--deep) ${pct}%, #e8c3d0 ${pct}%)`;
}

// Audio Event Listeners
mainAudio.addEventListener("timeupdate", () => {
  if (mainAudio.duration) {
    const pct = (mainAudio.currentTime / mainAudio.duration) * 100;
    const progressEl = document.getElementById("songProgress");
    progressEl.value = pct;
    updateSliderFill(progressEl);
    document.getElementById("currentTime").textContent = formatTime(mainAudio.currentTime);
    document.getElementById("totalDuration").textContent = formatTime(mainAudio.duration);
  }
});

mainAudio.addEventListener("ended", () => {
  nextSong();
});

document.getElementById("songProgress").addEventListener("input", (e) => {
  if (mainAudio.duration) {
    mainAudio.currentTime = (e.target.value / 100) * mainAudio.duration;
  }
  updateSliderFill(e.target);
});

// Init progress bar at 0
updateSliderFill(document.getElementById("songProgress"));

let isMuted = false;
document.getElementById("volumeSlider").addEventListener("input", (e) => {
  mainAudio.volume = e.target.value / 100;
  isMuted = mainAudio.volume === 0;
  updateSliderFill(e.target);
});

// Init volume slider fill to match its starting value of 80
updateSliderFill(document.getElementById("volumeSlider"));

document.getElementById("muteBtn").addEventListener("click", () => {
  isMuted = !isMuted;
  mainAudio.muted = isMuted;
  document.getElementById("muteBtn").textContent = isMuted ? "MUTED" : "VOLUME";
});

document.getElementById("playPauseBtn").addEventListener("click", togglePlay);

document.getElementById("prevTrackBtn").addEventListener("click", () => {
  const wasPlaying = isPlaying;
  isPlaying = false; // Temporarily mark as stopped so UI reflects loading state
  const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(newIndex);
  updatePlayerUI();
  if (wasPlaying) playSong();
});

document.getElementById("nextTrackBtn").addEventListener("click", nextSong);

function nextSong() {
  const wasPlaying = isPlaying;
  isPlaying = false;
  const newIndex = (currentSongIndex + 1) % songs.length;
  loadSong(newIndex);
  updatePlayerUI();
  if (wasPlaying) playSong();
}

document.getElementById("playlist").addEventListener("click", (e) => {
  const item = e.target.closest(".song-item");
  if (!item) return;
  const idx = Number(item.dataset.songIdx);
  if (idx === currentSongIndex) {
    togglePlay();
  } else {
    const wasPlaying = isPlaying;
    isPlaying = false;
    loadSong(idx);
    updatePlayerUI();
    if (wasPlaying) playSong();
  }
});

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${pad(s)}`;
}

// Secret Kiss Song Player Logic - REMOVED (keeping only text/visuals)
// const secretAudio = new Audio(secretTrackInfo.src);
// let isSecretPlaying = false;
// let secretSynthInterval = null;

// const secretPlayBtn = document.getElementById("secretPlayBtn");
// const secretProgress = document.getElementById("secretProgress");
// const secretCurrentTime = document.getElementById("secretCurrentTime");
// const secretDuration = document.getElementById("secretDuration");

const trackMp3Input = document.getElementById("trackMp3Input");
if (trackMp3Input) {
  trackMp3Input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    songs[currentSongIndex].src = url;
    mainAudio.src = url;
    playSong();
    showAlbumToast(`✓ Loaded MP3 for ${songs[currentSongIndex].title}!`);
    e.target.value = "";
  });
}

// Secret kiss audio functionality removed - keeping only text/visuals
// const secretMp3Input = document.getElementById("secretMp3Input");
// if (secretMp3Input) {
//   secretMp3Input.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const url = URL.createObjectURL(file);
//     secretAudio.src = url;
//     pauseSong();
//     secretAudio.play().then(() => {
//       isSecretPlaying = true;
//       secretPlayBtn.textContent = "PAUSE SECRET TRACK";
//       secretPlayBtn.classList.add("is-playing");
//     });
//     showAlbumToast(`✓ Loaded MP3 for First Kiss Track!`);
//     e.target.value = "";
//   });
// }

// secretPlayBtn.addEventListener("click", () => {
//   if (isSecretPlaying) {
//     secretAudio.pause();
//     stopSecretSynth();
//     isSecretPlaying = false;
//     secretPlayBtn.textContent = "PLAY SECRET TRACK";
//     secretPlayBtn.classList.remove("is-playing");
//   } else {
//     // Pause main player if playing
//     pauseSong();
//     secretAudio.play().then(() => {
//       isSecretPlaying = true;
//       secretPlayBtn.textContent = "PAUSE SECRET TRACK";
//       secretPlayBtn.classList.add("is-playing");
//     }).catch(() => {
//       // Fallback synthesizer sound for secret track
//       isSecretPlaying = true;
//       secretPlayBtn.textContent = "PAUSE SECRET TRACK";
//       secretPlayBtn.classList.add("is-playing");
//       playSecretSynth();
//     });
//     burstHearts(secretPlayBtn);
//   }
// });

// function playSecretSynth() {
//   stopSecretSynth();
//   if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//   if (audioCtx.state === "suspended") audioCtx.resume();

//   let idx = 0;
//   secretSynthInterval = setInterval(() => {
//     if (!isSecretPlaying) return;
//     const osc = audioCtx.createOscillator();
//     const gain = audioCtx.createGain();
//     const freq = secretTrackInfo.synthNotes[idx % secretTrackInfo.synthNotes.length];
    
//     osc.type = "triangle";
//     osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
//     gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
//     gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
    
//     osc.connect(gain);
//     gain.connect(audioCtx.destination);
    
//     osc.start();
//     osc.stop(audioCtx.currentTime + 0.85);
    
//     idx++;
//   }, 450);
// }

// function stopSecretSynth() {
//   if (secretSynthInterval) {
//     clearInterval(secretSynthInterval);
//     secretSynthInterval = null;
//   }
// }

// secretAudio.addEventListener("timeupdate", () => {
//   if (secretAudio.duration) {
//     secretProgress.value = (secretAudio.currentTime / secretAudio.duration) * 100;
//     secretCurrentTime.textContent = formatTime(secretAudio.currentTime);
//     secretDuration.textContent = formatTime(secretAudio.duration);
//   }
// });

// secretProgress.addEventListener("input", (e) => {
//   if (secretAudio.duration) {
//     secretAudio.currentTime = (e.target.value / 100) * secretAudio.duration;
//   }
// });

// Magic Wand / Cast Magic Button
const magicWandBtn = document.getElementById("magicWandBtn");
if (magicWandBtn) {
  magicWandBtn.addEventListener("click", () => {
    burstMagicParticles();
  });
}

function burstMagicParticles() {
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const p = document.createElement("div");
      p.className = "magic-sparkle";
      p.textContent = ["✨", "💖", "🌸", "♥", "⭐"][Math.floor(Math.random() * 5)];
      p.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        font-size: ${1.2 + Math.random() * 1.5}rem;
        pointer-events: none;
        z-index: 9999;
        transition: transform 1.2s ease-out, opacity 1.2s ease-out;
      `;
      document.body.appendChild(p);
      requestAnimationFrame(() => {
        p.style.transform = `translateY(-80px) scale(1.4) rotate(${Math.random() * 360}deg)`;
        p.style.opacity = "0";
      });
      setTimeout(() => p.remove(), 1300);
    }, i * 30);
  }
}

// General Initialization
kissCount.textContent = state.kisses;
updateKissMilestone(state.kisses);
fillPeople();

document.querySelectorAll("[data-card][data-field]").forEach((el) => {
  el.addEventListener("input", () => {
    const { card, field } = el.dataset;
    state.people[card][field] = el.value;
    save(state);
    if (field === "name" || field === "nick") syncNames();
    if (field === "color") document.getElementById(`card-${card}`).style.borderColor = el.value;
  });
});

document.querySelectorAll("[data-portrait]").forEach((input) => {
  input.addEventListener("change", async (e) => {
    const who = input.dataset.portrait;
    const file = e.target.files[0];
    if (!file) return;
    state.people[who].photo = await compress(file, 800);
    save(state);
    fillCard(who);
    input.value = "";
  });
});

document.getElementById("us").addEventListener("click", (e) => {
  const heart = e.target.closest("[data-send-heart]");
  if (heart) {
    const who = heart.dataset.sendHeart;
    state.people[who].hearts = (state.people[who].hearts || 0) + 1;
    save(state);
    fillCard(who);
    burstHearts(heart);
  }
});

document.querySelectorAll(".add-quality").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const person = form.dataset.person;
    const input = form.querySelector("input");
    const value = input.value.trim();
    if (!value) return;
    state[person].push(value);
    input.value = "";
    save(state);
    renderQualities();
  });
});

document.getElementById("us").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-person][data-i]");
  if (!btn) return;
  state[btn.dataset.person].splice(Number(btn.dataset.i), 1);
  save(state);
  renderQualities();
});

flowerFilters.addEventListener("click", (e) => {
  const chip = e.target.closest("[data-filter]");
  if (!chip) return;
  flowerFilters.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === chip));
  renderFlowers(chip.dataset.filter);
});

flowerGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".flower-card");
  if (!card) return;
  card.classList.toggle("open");
  const meaning = card.querySelector(".meaning");
  const hint = card.querySelector(".hint-mini");
  meaning.hidden = !card.classList.contains("open");
  if (hint) hint.hidden = card.classList.contains("open");
});

flowerGrid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".flower-card");
  if (!card) return;
  e.preventDefault();
  card.click();
});

document.querySelector(".album-bar .filters").addEventListener("click", (e) => {
  const chip = e.target.closest("[data-album]");
  if (!chip) return;
  document.querySelectorAll("[data-album]").forEach((c) => c.classList.toggle("active", c === chip));
  renderPhotos();
});

photoSort.addEventListener("change", renderPhotos);

let pendingUploadFiles = [];

const galleryPickerModal = document.getElementById("galleryPickerModal");
const closeGalleryPickerModal = document.getElementById("closeGalleryPickerModal");
const albumToast = document.getElementById("albumToast");

function getGalleryLabel(who) {
  if (who === "her") return `${state.people.her.name}'s (${state.people.her.nick})`;
  if (who === "him") return `${state.people.him.name}'s (${state.people.him.nick})`;
  return "Together";
}

function showAlbumToast(msg) {
  if (!albumToast) return;
  albumToast.textContent = msg;
  albumToast.hidden = false;
  setTimeout(() => {
    albumToast.hidden = true;
  }, 3800);
}

function openGalleryPickerModal(files) {
  pendingUploadFiles = files;
  if (galleryPickerModal) {
    galleryPickerModal.hidden = false;
    galleryPickerModal.setAttribute("aria-hidden", "false");
  }
}

function closeGalleryModal() {
  pendingUploadFiles = [];
  if (galleryPickerModal) {
    galleryPickerModal.hidden = true;
    galleryPickerModal.setAttribute("aria-hidden", "true");
  }
}

if (closeGalleryPickerModal) {
  closeGalleryPickerModal.addEventListener("click", closeGalleryModal);
}
if (galleryPickerModal) {
  galleryPickerModal.addEventListener("click", (e) => {
    if (e.target === galleryPickerModal) closeGalleryModal();
  });
}

document.querySelectorAll("[data-pick-gallery]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const chosen = btn.dataset.pickGallery;
    const files = [...pendingUploadFiles];
    closeGalleryModal();
    if (files.length) {
      await processAndSavePhotos(files, chosen);
    }
  });
});

async function addPhotoFiles(files) {
  if (!files || !files.length) return;

  const targetSelect = document.getElementById("photoTargetGallery");
  let chosen = targetSelect ? targetSelect.value : "auto";

  if (chosen === "auto") {
    const activeChip = document.querySelector(".album-bar [data-album].active")?.dataset.album || "all";
    if (activeChip !== "all") {
      chosen = activeChip;
    }
  }

  // If category is still ambiguous ("auto" or "all"), open the picker modal
  if (chosen === "auto" || chosen === "all") {
    openGalleryPickerModal(files);
    return;
  }

  await processAndSavePhotos(files, chosen);
}

async function processAndSavePhotos(files, who) {
  let count = 0;
  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;
    const src = await compress(file);
    state.photos.push({
      id: uid(),
      src,
      title: file.name.replace(/\.[^.]+$/, ""),
      who,
      fav: false,
      added: Date.now()
    });
    count++;
  }
  if (count > 0) {
    save(state);

    // Switch active filter tab to the chosen category
    const filterBtn = document.querySelector(`.album-bar [data-album="${who}"]`);
    if (filterBtn) {
      document.querySelectorAll("[data-album]").forEach((c) => c.classList.remove("active"));
      filterBtn.classList.add("active");
    }

    renderPhotos();
    showAlbumToast(`✓ Added ${count} photo${count > 1 ? "s" : ""} to ${getGalleryLabel(who)} gallery!`);
  }
}

photoInput.addEventListener("change", async (e) => {
  await addPhotoFiles([...e.target.files]);
  e.target.value = "";
});

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  photoGrid.addEventListener(eventName, (e) => {
    e.preventDefault();
    photoGrid.classList.toggle("drop-ready", eventName !== "dragleave" && eventName !== "drop");
  });
});
photoGrid.addEventListener("drop", (e) => {
  addPhotoFiles([...e.dataTransfer.files]);
});

kissBtn.addEventListener("click", () => {
  state.kisses += 1;
  kissCount.textContent = state.kisses;
  updateKissMilestone(state.kisses);
  save(state);
  burstHearts(kissBtn);
});

reasonForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = reasonInput.value.trim();
  if (!value) return;
  state.reasons.unshift(value);
  reasonInput.value = "";
  save(state);
  renderReasons();
  updateSpotlightReason();
});

document.addEventListener("click", (e) => {
  const delBtn = e.target.closest("[data-del-reason]");
  if (delBtn) {
    const idx = Number(delBtn.dataset.delReason);
    state.reasons.splice(idx, 1);
    save(state);
    renderReasons();
    updateSpotlightReason();
  }
});

const newSpotlightBtn = document.getElementById("newSpotlightBtn");
if (newSpotlightBtn) {
  newSpotlightBtn.addEventListener("click", () => {
    updateSpotlightReason();
  });
}

function burstHearts(el) {
  const rect = el.getBoundingClientRect();
  for (let i = 0; i < 10; i += 1) {
    const h = document.createElement("div");
    h.textContent = "♥";
    h.style.cssText = `position:fixed;left:${rect.left + rect.width / 2}px;top:${rect.top}px;color:#FFB7CE;pointer-events:none;z-index:99;transition:transform 800ms ease, opacity 800ms ease;font-size:1.4rem;`;
    document.body.appendChild(h);
    requestAnimationFrame(() => {
      h.style.transform = `translate(${(Math.random() - 0.5) * 160}px, -110px) scale(1.3)`;
      h.style.opacity = "0";
    });
    setTimeout(() => h.remove(), 850);
  }
}

function compress(file, max = 900) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.src = url;
  });
}

function initMobileNav() {
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("siteMenu");
  if (!nav || !toggle || !menu) return;
  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1280) close();
  });
}

const recipes = {
  sushi: {
    name: "Vege Sushi",
    emoji: "🍣",
    blurb: "Nori, rice, cucumber, avocado - rolled just how she likes it.",
    story: "Vegetarian sushi for my girl. Fresh, pretty, and made with both hands full of love.",
    ingredients: ["Nori", "Sushi rice", "Cucumber", "Avocado", "Sesame"],
    plated: "Her veggie sushi roll, pink-night special."
  },
  tacos: {
    name: "Vege Tacos",
    emoji: "🌮",
    blurb: "Warm tortillas, beans, salsa, lime - her kind of feast.",
    story: "Soft veggie tacos, extra lime, extra devotion. Sit with me and we’ll eat them slowly.",
    ingredients: ["Tortillas", "Black beans", "Salsa", "Guacamole", "Lime"],
    plated: "A plate of her favourite veggie tacos."
  },
  biscuit: {
    name: "Domino’s Chocolate Biscuit",
    emoji: "🍪",
    blurb: "The cookie she orders when pizza night turns sweet.",
    story: "Chocolate biscuit from Domino’s energy: warm, gooey, shared, and absolutely hers.",
    ingredients: ["Chocolate dough", "Biscuit base", "Melted chocolate", "Warm oven love"],
    plated: "A molten chocolate biscuit, still warm for Shree."
  },
  oreos: {
    name: "Oreos",
    emoji: "🖤",
    blurb: "Twist, dunk, or steal the cream - her classic.",
    story: "A stack of Oreos. I’ll twist one for her, dunk one for her, and save the last one for her too.",
    ingredients: ["Oreos", "Cold milk", "Extra cream", "Shared bites"],
    plated: "Oreos, plated like treasure."
  },
  juice: {
    name: "Cranberry Juice",
    emoji: "🍒",
    blurb: "Her glass, always filled, always waiting.",
    story: "Cranberry juice, cold and ruby. I’ll keep pouring it for you for the rest of our lives.",
    ingredients: ["Cranberries", "Ice", "A pretty glass", "A kiss on the rim"],
    plated: "Her cranberry juice, topped up."
  }
};

let activeRecipe = null;
let pickedIngredients = new Set();

function initKitchen() {
  const picker = document.getElementById("foodPicker");
  if (!picker) return;
  picker.innerHTML = Object.entries(recipes).map(([id, r]) => `
    <button class="food-card" type="button" data-recipe="${id}">
      <span class="food-emoji">${r.emoji}</span>
      <strong>${esc(r.name)}</strong>
      <span>${esc(r.blurb)}</span>
    </button>
  `).join("");
  picker.addEventListener("click", (e) => {
    const card = e.target.closest("[data-recipe]");
    if (!card) return;
    selectRecipe(card.dataset.recipe);
  });
  document.getElementById("plateDishBtn").addEventListener("click", plateDish);
  document.getElementById("resetDishBtn").addEventListener("click", () => {
    if (activeRecipe) selectRecipe(activeRecipe);
    else resetKitchenBench();
  });
  document.getElementById("ingredientTray").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-ing]");
    if (!chip || !activeRecipe) return;
    const name = chip.dataset.ing;
    if (pickedIngredients.has(name)) pickedIngredients.delete(name);
    else pickedIngredients.add(name);
    chip.classList.toggle("in");
    const recipe = recipes[activeRecipe];
    document.getElementById("plateDishBtn").disabled = pickedIngredients.size !== recipe.ingredients.length;
  });
  renderKitchenProgress();
}

function selectRecipe(id) {
  activeRecipe = id;
  pickedIngredients = new Set();
  const recipe = recipes[id];
  document.querySelectorAll(".food-card").forEach((c) => c.classList.toggle("active", c.dataset.recipe === id));
  document.getElementById("recipeKicker").textContent = "now cooking";
  document.getElementById("recipeTitle").textContent = recipe.name;
  document.getElementById("recipeStory").textContent = recipe.story;
  document.getElementById("ingredientTray").innerHTML = recipe.ingredients.map((ing) =>
    `<button class="ing-chip" type="button" data-ing="${esc(ing)}">${esc(ing)}</button>`
  ).join("");
  document.getElementById("plateInner").innerHTML = `<span class="plate-empty">Tap every ingredient, then plate it</span>`;
  document.getElementById("plateDishBtn").disabled = true;
}

function resetKitchenBench() {
  activeRecipe = null;
  pickedIngredients = new Set();
  document.querySelectorAll(".food-card").forEach((c) => c.classList.remove("active"));
  document.getElementById("recipeKicker").textContent = "pick a recipe";
  document.getElementById("recipeTitle").textContent = "What shall we make, princess?";
  document.getElementById("recipeStory").textContent = "Choose a favourite from above. Then tap every ingredient in any order and press Plate it.";
  document.getElementById("ingredientTray").innerHTML = "";
  document.getElementById("plateInner").innerHTML = `<span class="plate-empty">Waiting for her order ♥</span>`;
  document.getElementById("plateDishBtn").disabled = true;
}

function plateDish() {
  if (!activeRecipe) return;
  const recipe = recipes[activeRecipe];
  if (pickedIngredients.size !== recipe.ingredients.length) return;
  document.getElementById("plateInner").innerHTML = `
    <span class="plated-dish">${recipe.emoji}</span>
    ${esc(recipe.plated)}
  `;
  burstHearts(document.getElementById("foodPlate"));
  if (!state.kitchenMade.includes(recipe.name)) state.kitchenMade.push(recipe.name);
  save(state);
  renderKitchenProgress();
}

function renderKitchenProgress() {
  const el = document.getElementById("kitchenProgress");
  if (!el) return;
  const n = state.kitchenMade.length;
  el.textContent = n ? `${n} favourite${n === 1 ? "" : "s"} plated for Shree` : "0 dishes made for Shree";
}

const castleRooms = {
  courtyard: {
    kicker: "the gates",
    title: "Our courtyard",
    story: "The doors open only for us. Come in, my Queen - this whole kingdom kneels for you."
  },
  throne: {
    kicker: "the keep",
    title: "Throne room of Shreio",
    story: "Two thrones, one heart. We rule this pink kingdom together, and I will always choose you as my Queen."
  },
  west: {
    kicker: "west tower",
    title: "Lookout of our future",
    story: "From this tower we watch every year we will get. Marriage, children with your beauty, and a life that never runs out of us."
  },
  east: {
    kicker: "east tower",
    title: "The bedroom tower",
    story: "Soft sheets, quiet nights, and me right here if you ache. Rest, princess. The castle keeps you safe."
  },
  hall: {
    kicker: "great hall",
    title: "Feasts and laughter",
    story: "Sushi, tacos, chocolate biscuit, Oreos, cranberry juice - the hall is always set for her appetite and her joy."
  }
};

function initKingdom() {
  const stage = document.getElementById("castleStage");
  if (!stage) return;
  stage.addEventListener("click", (e) => {
    const roomBtn = e.target.closest("[data-room]");
    if (!roomBtn) return;
    enterRoom(roomBtn.dataset.room);
    if (roomBtn.id === "castleGate") toggleGate(true);
  });
  document.getElementById("raiseFlagBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    state.kingdom.flagRaised = !state.kingdom.flagRaised;
    save(state);
    restoreKingdom();
    burstHearts(e.currentTarget);
  });
  document.getElementById("lightLanternsBtn").addEventListener("click", () => {
    state.kingdom.lanternsOn = !state.kingdom.lanternsOn;
    save(state);
    restoreKingdom();
  });
  document.getElementById("openGateBtn").addEventListener("click", () => toggleGate());
  restoreKingdom();
}

function toggleGate(forceOpen) {
  state.kingdom.gateOpen = forceOpen ? true : !state.kingdom.gateOpen;
  save(state);
  restoreKingdom();
}

function enterRoom(id) {
  const room = castleRooms[id];
  if (!room) return;
  document.getElementById("roomKicker").textContent = room.kicker;
  document.getElementById("roomTitle").textContent = room.title;
  document.getElementById("roomStory").textContent = room.story;
  if (!state.kingdom.rooms.includes(id)) {
    state.kingdom.rooms.push(id);
    save(state);
  }
  renderKingdomLog();
}

function restoreKingdom() {
  if (!state.kingdom) state.kingdom = { rooms: [], flagRaised: false, lanternsOn: false, gateOpen: false };
  if (!Array.isArray(state.kingdom.rooms)) state.kingdom.rooms = [];
  const flag = document.getElementById("raiseFlagBtn");
  const gate = document.getElementById("castleGate");
  const stage = document.getElementById("castleStage");
  if (!flag || !gate || !stage) return;
  flag.classList.toggle("raised", !!state.kingdom.flagRaised);
  flag.setAttribute("aria-pressed", String(!!state.kingdom.flagRaised));
  gate.classList.toggle("open", !!state.kingdom.gateOpen);
  gate.setAttribute("aria-pressed", String(!!state.kingdom.gateOpen));
  stage.classList.toggle("lanterns-on", !!state.kingdom.lanternsOn);
  document.getElementById("lightLanternsBtn").textContent = state.kingdom.lanternsOn ? "Dim lanterns" : "Light lanterns";
  document.getElementById("openGateBtn").textContent = state.kingdom.gateOpen ? "Close the gates" : "Open the gates";
  renderKingdomLog();
}

function renderKingdomLog() {
  const log = document.getElementById("kingdomLog");
  if (!log) return;
  const labels = {
    courtyard: "Gates welcomed the Queen",
    throne: "Thrones claimed together",
    west: "Future watched from the west tower",
    east: "Bedroom tower promised rest",
    hall: "Great hall set for her"
  };
  const extras = [];
  if (state.kingdom.flagRaised) extras.push("Shreio flag flying");
  if (state.kingdom.lanternsOn) extras.push("Lanterns glowing for her");
  if (state.kingdom.gateOpen) extras.push("Castle gates open");
  const items = [...state.kingdom.rooms.map((id) => labels[id]), ...extras].filter(Boolean);
  log.innerHTML = items.length ? items.map((t) => `<li>${esc(t)}</li>`).join("") : "";
}

function initTeaParty() {
  const teapot = document.getElementById("teapotBtn");
  if (!teapot) return;
  teapot.addEventListener("click", pourTea);
  document.getElementById("teaTreats").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-treat]");
    if (!btn) return;
    const treat = btn.dataset.treat;
    const on = !state.tea.treats.includes(treat);
    state.tea.treats = on ? [...state.tea.treats, treat] : state.tea.treats.filter((t) => t !== treat);
    save(state);
    restoreTea();
    const names = { oreo: "Oreos on the saucer", biscuit: "chocolate biscuit beside the cups", juice: "cranberry juice for her" };
    document.getElementById("teaStory").textContent = on
      ? `I set ${names[treat]} on our table.`
      : "The table is still ours. Put the treats back whenever you like.";
  });
  document.getElementById("cheersBtn").addEventListener("click", () => {
    if (state.tea.her < 3 || state.tea.him < 3) return;
    state.tea.cheers += 1;
    save(state);
    const set = document.querySelector(".tea-set");
    set.classList.remove("cheers");
    void set.offsetWidth;
    set.classList.add("cheers");
    document.getElementById("teaLine").textContent = "To us, my love.";
    document.getElementById("teaStory").textContent = "Cups touch. The whole kingdom goes quiet for a second, because this is our ritual.";
    burstHearts(document.getElementById("cheersBtn"));
    restoreTea();
  });
  restoreTea();
}

function pourTea() {
  const teapot = document.getElementById("teapotBtn");
  teapot.classList.add("pouring");
  setTimeout(() => teapot.classList.remove("pouring"), 700);
  if (state.tea.her < 3) state.tea.her += 1;
  else if (state.tea.him < 3) state.tea.him += 1;
  else {
    document.getElementById("teaStory").textContent = "Both cups are full. Time to cheers, princess.";
    restoreTea();
    return;
  }
  document.getElementById("teaLine").textContent = state.tea.her < 3 || (state.tea.her === 3 && state.tea.him === 0)
    ? "Tea for Shree."
    : "Tea for Naio.";
  document.getElementById("teaStory").textContent = state.tea.her < 3
    ? "Hers first. Always hers first."
    : state.tea.him < 3
      ? "Now a little for me, so I can sit with her."
      : "Both cups are warm. Let’s toast.";
  save(state);
  restoreTea();
}

function restoreTea() {
  const her = document.getElementById("cupHer");
  const him = document.getElementById("cupHim");
  if (!her || !him) return;
  if (!state.tea) state.tea = { her: 0, him: 0, treats: [], cheers: 0 };
  if (!Array.isArray(state.tea.treats)) state.tea.treats = [];
  her.dataset.filled = String(state.tea.her || 0);
  him.dataset.filled = String(state.tea.him || 0);
  document.querySelectorAll("[data-treat]").forEach((btn) => {
    btn.classList.toggle("on", state.tea.treats.includes(btn.dataset.treat));
  });
  const ready = (state.tea.her || 0) >= 3 && (state.tea.him || 0) >= 3;
  document.getElementById("cheersBtn").disabled = !ready;
  const n = state.tea.cheers || 0;
  document.getElementById("cheersCount").textContent = `${n} tea toast${n === 1 ? "" : "s"} together`;
}

const careNotes = {
  bedside: {
    caption: "He sits down and does not get up.",
    vow: "I will stay by your bedside. Not for a minute - for as long as you need, and then longer, because I want to be near you."
  },
  tummy: {
    caption: "Gentle hands, quiet voice, nowhere else to be.",
    vow: "When you hurt, I will soothe your tummy, fetch what you need, and hold the ache with you. (I'll kiss your sweet mimmi better, too). You never have to be in pain alone."
  },
  blanket: {
    caption: "The blanket is tucked. He checks it twice.",
    vow: "I tuck you in like you are the most precious person in every world. Warm, safe, adored."
  },
  tea: {
    caption: "Warm sips, placed within reach.",
    vow: "I will bring you warm sips, medicine if you need it, and patience. Caring for you is not a task. It is my life."
  },
  juice: {
    caption: "Her cranberry juice, waiting on the nightstand.",
    vow: "Cranberry juice on the table, straw if you want it, and me asking if you need anything else. Again. And again."
  },
  "rub-bum": {
    caption: "Gentle, loving rubs to make you feel better.",
    vow: "I will rub your bum bum whenever you need it, with all my love and care. Making you feel comfortable and loved is what I live for."
  },
  "poured-tea": {
    caption: "A fresh cup of tea, poured just for you.",
    vow: "I will pour you tea whenever you want, exactly how you like it. Steaming, warm, or cooled - whatever makes you feel better."
  },
  vow: {
    caption: "A whole life, promised out loud.",
    vow: "I will live devoted to caring for you and loving you unconditionally - in sickness, in health, in every ordinary hour. My life is yours to rest in."
  }
};

function initCare() {
  const actions = document.getElementById("careActions");
  if (!actions) return;
  actions.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-care]");
    if (!btn) return;
    const id = btn.dataset.care;
    const note = careNotes[id];
    document.getElementById("careVow").textContent = note.vow;
    if (!state.careActs.includes(id)) state.careActs.push(id);
    save(state);
    renderCareLog();
    burstHearts(btn);
  });
  renderCareLog();
}

function renderCareLog() {
  const log = document.getElementById("careLog");
  if (!log) return;
  if (!Array.isArray(state.careActs)) state.careActs = [];
  const labels = {
    bedside: "Stayed by her bedside",
    tummy: "Soothed her tummy",
    blanket: "Tucked her in",
    tea: "Brought warm sips",
    juice: "Poured cranberry juice",
    vow: "Promised forever care"
  };
  log.innerHTML = state.careActs.map((id) => `<li>${esc(labels[id] || id)}</li>`).join("");
}

renderFlowers();
renderQualities();
renderReasons();
renderPhotos();
spawnPetals();
initPlaylistUI();
loadSong(0);
updateSpotlightReason();
initKitchen();
initKingdom();
initTeaParty();
initCare();
initMobileNav();
tick();
setInterval(tick, 1000);

