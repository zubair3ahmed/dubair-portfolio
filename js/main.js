/* ============================================================
   Syed Zubair Ahmed — Portfolio
   GSAP + ScrollTrigger motion system
   ============================================================ */

document.documentElement.classList.add("js");
gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============ Preloader ============ */
const loader = document.getElementById("loader");
const loaderCount = document.getElementById("loaderCount");
const loaderBar = document.getElementById("loaderBar");
const loaderLetters = document.querySelectorAll("#loaderName span:not(.loader__caret)");

if (loader) document.body.classList.add("is-loading");

function runIntro() {
  if (!loader) { ScrollTrigger.refresh(); return; }
  const tl = gsap.timeline({
    onComplete() {
      loader.remove();
      document.body.classList.remove("is-loading");
      ScrollTrigger.refresh();
    },
  });

  if (prefersReduced) {
    tl.set(loader, { autoAlpha: 0 });
    heroIn(0);
    return;
  }

  szSound.startAmbient();

  const progress = { v: 0 };

  tl.to(loaderLetters, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.045,
    ease: "power3.out",
  })
    .to(".loader__tag", { opacity: 1, duration: 0.5 }, "-=0.3")
    .to(".loader__quip", { opacity: 1, y: 0, duration: 0.5 }, "-=0.1")
    .to(
      progress,
      {
        v: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate() {
          loaderCount.textContent = Math.round(progress.v);
          loaderBar.style.width = progress.v + "%";
        },
      },
      0.2
    )
    .to(".loader__center, .loader__count", {
      yPercent: -30,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power2.in",
    })
    .add(() => szSound.stopAmbient())
    .to(loader, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
    }, "-=0.15")
    .add(() => { szSound.heroReveal(); heroIn(0); }, "-=0.85");
}

/* ============ Hero entrance ============ */
function heroIn(delay) {
  const tl = gsap.timeline({ delay });
  tl.to(".hero .line__inner", {
    y: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: "power4.out",
  })
    .to(
      ".hero [data-reveal]",
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" },
      "-=0.7"
    );
}

function startIntroOnce() {
  if (!loader) return;
  if (loader.dataset.ran) return;
  loader.dataset.ran = "1";
  runIntro();
}
window.addEventListener("load", startIntroOnce);
/* Fallback in case `load` hangs on slow font/CDN fetches */
setTimeout(startIntroOnce, 4000);

/* ============ Sound effects (synthesized, no assets) ============ */
const szSound = (function sound() {
  const btn = document.getElementById("soundToggle");
  let enabled = localStorage.getItem("sz-sound") !== "off";
  let ctx = null;
  btn.setAttribute("aria-pressed", String(enabled));

  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    if (ctx && ctx.state === "suspended") ctx.resume();
  }
  window.addEventListener("pointerdown", ensureCtx, { once: true });
  window.addEventListener("keydown", ensureCtx, { once: true });

  function blip(freq, dur, type, gain, delay) {
    if (!enabled || !ctx || ctx.state !== "running") return;
    const t = ctx.currentTime + (delay || 0);
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain || 0.04, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  /* — Noise generator for textured ambient sounds — */
  function createNoise(duration, volume, filterFreq) {
    if (!enabled || !ctx || ctx.state !== "running") return null;
    const len = ctx.sampleRate * duration;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = filterFreq || 200;
    filter.Q.value = 1;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(filter).connect(g).connect(ctx.destination);
    return { src, gain: g, filter };
  }

  /* — Preloader ambient: layered drone + filtered noise — */
  let ambientNodes = null;
  function startAmbient() {
    if (!enabled || !ctx || ctx.state !== "running") return;
    const t = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 55;
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 82.5;
    const osc3 = ctx.createOscillator();
    osc3.type = "sine";
    osc3.frequency.value = 110;
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.15;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 3;
    lfo.connect(lfoGain).connect(osc1.frequency);
    const g1 = ctx.createGain();
    g1.gain.setValueAtTime(0, t);
    g1.gain.linearRampToValueAtTime(0.035, t + 1.5);
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0, t);
    g2.gain.linearRampToValueAtTime(0.02, t + 2);
    const g3 = ctx.createGain();
    g3.gain.setValueAtTime(0, t);
    g3.gain.linearRampToValueAtTime(0.012, t + 2.5);
    const master = ctx.createGain();
    master.gain.value = 1;
    osc1.connect(g1).connect(master);
    osc2.connect(g2).connect(master);
    osc3.connect(g3).connect(master);
    master.connect(ctx.destination);
    const noise = createNoise(2, 0, 120);
    if (noise) {
      noise.gain.gain.setValueAtTime(0, t);
      noise.gain.gain.linearRampToValueAtTime(0.012, t + 2);
      noise.src.start(t);
    }
    osc1.start(t);
    osc2.start(t);
    osc3.start(t);
    lfo.start(t);
    ambientNodes = { oscs: [osc1, osc2, osc3, lfo], gains: [g1, g2, g3], master, noise };
  }

  function stopAmbient() {
    if (!ambientNodes || !ctx) return;
    const t = ctx.currentTime;
    const { oscs, gains, master, noise } = ambientNodes;
    gains.forEach((g) => {
      g.gain.cancelScheduledValues(t);
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
    });
    if (noise) {
      noise.gain.gain.cancelScheduledValues(t);
      noise.gain.gain.setValueAtTime(Math.max(noise.gain.gain.value, 0.0001), t);
      noise.gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
      setTimeout(() => noise.src.stop(), 1500);
    }
    setTimeout(() => oscs.forEach((o) => { try { o.stop(); } catch {} }), 1500);
    ambientNodes = null;
  }

  /* — Scroll whoosh: filtered noise burst for section reveals — */
  function whoosh(pitch) {
    if (!enabled || !ctx || ctx.state !== "running") return;
    const t = ctx.currentTime;
    const len = ctx.sampleRate * 0.6;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.setValueAtTime(pitch || 800, t);
    bp.frequency.exponentialRampToValueAtTime((pitch || 800) * 2.5, t + 0.15);
    bp.frequency.exponentialRampToValueAtTime(200, t + 0.5);
    bp.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.025, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(t);
    src.stop(t + 0.6);
  }

  /* — Counter tick: rapid soft clicks for counting animations — */
  let tickInterval = null;
  function startTick() {
    if (!enabled || !ctx || ctx.state !== "running" || tickInterval) return;
    tickInterval = setInterval(() => {
      blip(3200 + Math.random() * 800, 0.02, "square", 0.008);
    }, 50);
  }
  function stopTick() {
    if (tickInterval) { clearInterval(tickInterval); tickInterval = null; }
    if (ctx && ctx.state === "running" && enabled) {
      blip(1200, 0.08, "sine", 0.03);
    }
  }

  /* — Card reveal: low cinematic thud — */
  function cardReveal() {
    if (!enabled || !ctx || ctx.state !== "running") return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(80, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.3);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.055, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    osc.connect(g).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 0.4);
    blip(2400, 0.06, "sine", 0.012, 0.02);
  }

  /* — Section title fill: resonant chord swell — */
  function sectionSwell() {
    if (!enabled || !ctx || ctx.state !== "running") return;
    [220, 330, 440].forEach((f, i) => {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.018, t + 0.3 + i * 0.1);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
      osc.connect(g).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 1.3);
    });
  }

  /* — Hero entrance: cinematic rising tone — */
  function heroReveal() {
    if (!enabled || !ctx || ctx.state !== "running") return;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.8);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.035, t + 0.2);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1);
    osc.connect(g).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + 1.1);
    whoosh(600);
    blip(880, 0.3, "sine", 0.02, 0.4);
    blip(1320, 0.25, "sine", 0.015, 0.55);
  }

  const api = {
    hover: () => blip(1700, 0.07, "sine", 0.02),
    click: () => blip(900, 0.1, "triangle", 0.05),
    open: () => { blip(620, 0.1, "triangle", 0.045); blip(930, 0.14, "sine", 0.04, 0.06); },
    unlock: () => { blip(740, 0.14, "sine", 0.055); blip(1110, 0.2, "sine", 0.055, 0.09); blip(1480, 0.26, "sine", 0.045, 0.18); },
    error: () => { blip(190, 0.18, "sawtooth", 0.04); blip(150, 0.22, "sawtooth", 0.04, 0.09); },
    startAmbient,
    stopAmbient,
    whoosh,
    cardReveal,
    sectionSwell,
    heroReveal,
    startTick,
    stopTick,
  };

  btn.addEventListener("click", () => {
    ensureCtx();
    enabled = !enabled;
    localStorage.setItem("sz-sound", enabled ? "on" : "off");
    btn.setAttribute("aria-pressed", String(enabled));
    if (enabled) api.unlock();
  });

  /* subtle ticks across all interactive elements */
  document.querySelectorAll("a, button").forEach((el) => {
    if (el === btn) return;
    el.addEventListener("pointerenter", api.hover);
    el.addEventListener("click", api.click);
  });

  return api;
})();

/* ============ Custom cursor (Figma multiplayer style) ============ */
(function cursor() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches || prefersReduced) return;
  document.body.classList.add("has-cursor");

  const cur = document.getElementById("figCursor");
  const tag = document.getElementById("cursorTag");
  const IDLE_LABEL = "You";

  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const smooth = { x: pos.x, y: pos.y };

  window.addEventListener("pointermove", (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
  });

  /* slight lerp lag, like a multiplayer cursor catching up */
  gsap.ticker.add(() => {
    smooth.x += (pos.x - smooth.x) * 0.35;
    smooth.y += (pos.y - smooth.y) * 0.35;
    cur.style.transform = `translate(${smooth.x}px, ${smooth.y}px)`;
  });

  window.addEventListener("pointerdown", () => cur.classList.add("is-down"));
  window.addEventListener("pointerup", () => cur.classList.remove("is-down"));

  document.querySelectorAll("[data-cursor]").forEach((el) => {
    el.addEventListener("pointerenter", () => {
      if (el.dataset.cursor === "open") {
        cur.classList.add("is-open");
        tag.textContent = "Open ↗";
      } else {
        cur.classList.add("is-hover");
      }
    });
    el.addEventListener("pointerleave", () => {
      cur.classList.remove("is-open", "is-hover");
      tag.textContent = IDLE_LABEL;
    });
  });
})();

/* ============ Hero canvas dot grid ============ */
(function heroGrid() {
  const canvas = document.getElementById("heroGrid");
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext("2d");
  const GAP = 36;
  let dots = [];
  const mouse = { x: -9999, y: -9999 };

  function build() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    dots = [];
    for (let x = GAP / 2; x < rect.width; x += GAP) {
      for (let y = GAP / 2; y < rect.height; y += GAP) {
        dots.push({ x, y });
      }
    }
  }

  canvas.parentElement.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener("pointerleave", () => {
    mouse.x = mouse.y = -9999;
  });

  function draw() {
    const w = canvas.width / devicePixelRatio;
    const h = canvas.height / devicePixelRatio;
    ctx.clearRect(0, 0, w, h);
    const R = 160;
    for (const d of dots) {
      const dx = d.x - mouse.x;
      const dy = d.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      const t = Math.max(0, 1 - dist / R);
      const size = 1 + t * 2.2;
      ctx.beginPath();
      ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
      ctx.fillStyle =
        t > 0
          ? `rgba(228, 254, 154, ${0.08 + t * 0.55})`
          : "rgba(240, 240, 240, 0.07)";
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  build();
  window.addEventListener("resize", build);
  draw();
})();

/* ============ Header: clock + hide on scroll ============ */
(function header() {
  const clock = document.getElementById("clock");
  function tick() {
    clock.textContent = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Dubai",
    }).format(new Date());
  }
  tick();
  setInterval(tick, 30000);

  const hdr = document.getElementById("hdr");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    hdr.classList.toggle("is-scrolled", y > 40);
    hdr.classList.toggle("is-hidden", y > 400 && y > lastY);
    lastY = y;
  }, { passive: true });
})();

/* ============ Mobile menu ============ */
(function mobileMenu() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mmenu");
  function close() {
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
  }
  burger.addEventListener("click", () => {
    const open = !menu.classList.contains("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", !open);
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
})();

/* ============ Scroll reveals ============ */
if (!prefersReduced) {
  /* generic fade-up reveals (outside hero — hero handled in intro) */
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (el.closest(".hero")) return;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        onEnter: () => szSound.whoosh(1200),
        once: true,
      },
    });
  });

  /* contact title line masks */
  gsap.to(".contact .line__inner", {
    y: 0,
    duration: 1.2,
    stagger: 0.12,
    ease: "power4.out",
    scrollTrigger: { trigger: ".contact__title", start: "top 85%" },
  });

  /* giant section titles: outline -> filled, scrubbed */
  gsap.utils.toArray("[data-fill]").forEach((el) => {
    let swelled = false;
    gsap.to(el, {
      backgroundSize: "100% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
        onEnter: () => { if (!swelled) { swelled = true; szSound.sectionSwell(); } },
      },
    });
  });

  /* cards: staggered rise */
  gsap.utils.toArray("[data-card]").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 80,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        onEnter: () => szSound.cardReveal(),
        once: true,
      },
    });
  });

  /* card covers: slow drift inside the frame while scrolling */
  gsap.utils.toArray(".card__cover img").forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: 0 },
      {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: img.closest(".card"),
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  /* stats group */
  gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
    gsap.from(group.children, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: group, start: "top 85%" },
    });
  });

  /* counters */
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%" },
      onUpdate() {
        el.textContent = Math.round(obj.v);
      },
    });
  });

  /* hero subtle parallax out */
  gsap.to(".hero__inner", {
    yPercent: -8,
    opacity: 0.4,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "bottom 90%",
      end: "bottom 30%",
      scrub: true,
    },
  });
} else {
  /* reduced motion: just show counters at final value */
  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = el.dataset.count;
  });
}

/* ============ Magnetic buttons ============ */
(function magnetic() {
  if (window.matchMedia("(hover: none)").matches || prefersReduced) return;
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 0.35;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: "power3.out" });
    });
    el.addEventListener("pointerleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    });
  });
})();

/* ============ Password vault for protected work ============ */
(function vault() {
  const modal = document.getElementById("vault");
  const form = document.getElementById("vaultForm");
  const input = document.getElementById("vaultInput");
  const errorEl = document.getElementById("vaultError");
  const lockedLinks = Array.from(document.querySelectorAll("[data-locked]"));
  const encLinks = Array.from(document.querySelectorAll("[data-enc]"));
  const SESSION_KEY = "sz-vault-pw";
  let pendingLink = null;
  let lastFocus = null;

  function b64(s) {
    return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  }

  /* OpenSSL enc format: "Salted__" + 8-byte salt + AES-256-CBC ciphertext,
     key+iv from PBKDF2-SHA256 (100k iterations, 48 bytes). Wrong passwords
     fail padding or the SZOK sentinel check. */
  async function decryptOne(encStr, pw) {
    const data = b64(encStr);
    const salt = data.slice(8, 16);
    const ct = data.slice(16);
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveBits"]);
    const bits = new Uint8Array(
      await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" }, base, 384)
    );
    const key = await crypto.subtle.importKey("raw", bits.slice(0, 32), "AES-CBC", false, ["decrypt"]);
    const pt = new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-CBC", iv: bits.slice(32, 48) }, key, ct));
    if (!pt.startsWith("SZOK::")) throw new Error("bad password");
    return pt.slice(6);
  }

  async function decryptAll(pw) {
    const results = await Promise.all(encLinks.map((el) => decryptOne(el.dataset.enc, pw)));
    return results;
  }

  function applyUnlock(urls) {
    document.body.classList.add("is-unlocked");
    lockedLinks.forEach((a) => {
      a.removeAttribute("data-locked");
      const label = a.getAttribute("aria-label");
      if (label) a.setAttribute("aria-label", label.replace(" (password protected)", ""));
    });
    encLinks.forEach((el, i) => {
      if (urls[i]) {
        el.href = urls[i];
        el.target = "_blank";
        el.rel = "noopener";
      }
    });
  }

  /* restore unlock within the same browser session */
  const saved = sessionStorage.getItem(SESSION_KEY);
  if (saved && crypto.subtle) {
    decryptAll(saved).then(applyUnlock).catch(() => sessionStorage.removeItem(SESSION_KEY));
  }

  function focusables() {
    return modal.querySelectorAll("a[href], button, input");
  }

  function onKeydown(e) {
    if (e.key === "Escape") return close();
    if (e.key !== "Tab") return;
    const items = focusables();
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open(link) {
    pendingLink = link;
    lastFocus = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
      input.focus();
    });
    document.addEventListener("keydown", onKeydown);
    szSound.open();
  }

  function close() {
    modal.classList.remove("is-open", "is-error");
    modal.hidden = true;
    errorEl.hidden = true;
    input.value = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-locked]");
    if (!link) return;
    e.preventDefault();
    open(link);
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-vault-close]")) close();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pw = input.value.trim();
    if (!pw) return;
    try {
      const urls = await decryptAll(pw);
      sessionStorage.setItem(SESSION_KEY, pw);
      applyUnlock(urls);
      szSound.unlock();
      const encIdx = encLinks.indexOf(pendingLink);
      const pendingUrl = encIdx !== -1 ? urls[encIdx] : null;
      close();
      if (pendingUrl) window.open(pendingUrl, "_blank", "noopener");
      else if (pendingLink) {
        const dest = pendingLink.getAttribute("href");
        if (dest && dest !== "#contact") window.location.href = dest;
      }
    } catch {
      szSound.error();
      errorEl.hidden = false;
      modal.classList.remove("is-error");
      void modal.offsetWidth;
      modal.classList.add("is-error");
      input.select();
    }
  });
})();

/* ============ Card hover glow follows pointer ============ */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });
});

/* ============ Card cover & title clickable ============ */
document.querySelectorAll(".card").forEach((card) => {
  const link = card.querySelector(".card__open");
  if (!link) return;
  [".card__cover", ".card__title"].forEach((sel) => {
    const el = card.querySelector(sel);
    if (el) el.addEventListener("click", () => link.click());
  });
});
