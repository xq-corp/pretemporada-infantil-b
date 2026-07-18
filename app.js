/* ===== DATA ===== */

const RECOMENDACIONES = [
  { t: "Sol", d: "Evita la práctica deportiva entre las 12 y las 16 horas, cuando el sol pega más fuerte." },
  { t: "Hidratación", d: "Bebe agua o bebidas isotónicas de forma periódica, aunque no tengas sed. La sed ya es síntoma de deshidratación." },
  { t: "Alimentación", d: "Mantén 5 comidas al día con una dieta equilibrada." },
  { t: "Descanso", d: "El descanso y la alimentación son tan parte del entrenamiento como el ejercicio en sí." },
  { t: "Superficies y calzado", d: "Evita superficies duras como el asfalto y usa calzado que amortigüe bien el impacto." },
  { t: "Calzado de verano", d: "Sustituye sandalias y chanclas por calzado deportivo antes de empezar la pretemporada, para evitar rozaduras." }
];

const IMPORTANTE = "Informa de forma inmediata al cuerpo técnico si durante este periodo sufres alguna lesión o molestia que impida hacer actividad física, o que pueda llegar a hacerlo en el futuro si no se trata a tiempo.";

function yt(q) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q + " ejercicio tecnica");
}

const SESSIONS = {
  "2026-08-10": {
    num: 1, total: "55'-60'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Resistencia aeróbica",
    main: ["2 series de 6' de carrera continua, con 4' de recuperación entre series"],
    exercises: [
      { n: "Zancada frontal", s: "2 series · 1' recuperación", r: "5 (cada pierna)" },
      { n: "Puente de glúteos", s: "2 series · 1' recuperación", r: "8" },
      { n: "Aductores con pelota", s: "2 series · 1' recuperación", r: "1", note: "u otro elemento entre las rodillas" },
      { n: "Peso muerto a una pierna", s: "2 series · 1' recuperación", r: "6 (cada pierna)" },
      { n: "Plancha frontal con abducción de cadera", s: "2 series", r: "7 (cada pierna)" },
      { n: "Gemelos con barra o mancuernas", s: "2 series", r: "8", note: "sin peso" },
      { n: "Propiocepción a través de equilibrio", s: "2 series", r: "10 saltos" },
      { n: "Descenso bilateral de piernas", s: "2 series", r: "10" }
    ]
  },
  "2026-08-12": {
    num: 2, total: "60'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Resistencia aeróbica",
    main: ["2 series de 7' de carrera continua, con 3' de recuperación entre series"],
    exercises: [
      { n: "Sentadilla con activación de glúteo", s: "2 series · 1' recuperación", r: "8", note: "con banda elástica si hay disponible; si no, solo sentadilla" },
      { n: "Aductores de pie con superficie", s: "2 series · 1' recuperación", r: "6 (cada pierna)" },
      { n: "Hiperextensión sobre plataforma", s: "2 series", r: "8", note: "en banco si no hay fitball" },
      { n: "Plancha frontal con 3 apoyos", s: "2 series", r: "30''" },
      { n: "Sóleo en superficie estable", s: "2 series", r: "10" }
    ]
  },
  "2026-08-14": {
    num: 3, total: "60'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Resistencia aeróbica (natación)",
    main: ["3 series de 7' de natación, con el estilo que prefiráis"],
    exercises: [
      { n: "Cat-Camel", s: "3 series", r: "15", note: "bajar espalda y subir cuello / bajar cuello y subir cadera" },
      { n: "Plancha frontal", s: "3 series", r: "30''" },
      { n: "Plancha lateral", s: "3 series (cada lado)", r: "30'' por repetición" },
      { n: "Limpiaparabrisas", s: "3 series", r: "15" }
    ]
  },
  "2026-08-17": {
    num: 4, total: "70'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Resistencia aeróbica + fuerza",
    main: ["2 series de 10' de carrera continua", "10' de carrera continua al finalizar la fuerza"],
    exercises: [
      { n: "Cuádriceps excéntrico desde rodilla", s: "3 series · 1' recuperación", r: "8", note: "IMPORTANTE: sin peso" },
      { n: "Puente de glúteos", s: "3 series · 1' recuperación", r: "8" },
      { n: "Aductores con plato de inestabilidad", s: "3 series · 1' recuperación", r: "8" },
      { n: "Puente a una pierna", s: "3 series · 1' recuperación", r: "6 (cada pierna)" },
      { n: "Limpiaparabrisas con piernas flexionadas", s: "3 series", r: "12" },
      { n: "Cuádriceps isométrico contra pared", s: "3 series", r: "40''" },
      { n: "Descenso bilateral de piernas", s: "5 series", r: "10" }
    ]
  },
  "2026-08-19": {
    num: 5, total: "65'",
    warmMin: 15, warm: "5' movilidad articular y estiramientos + 10' carrera continua (trote)",
    mainTitle: "Interválico extensivo",
    main: ["15' de trabajo en 5 módulos de 3': 1' al 50% + 1' al 75% + 1' al 90%"],
    exercises: [
      { n: "Sentadilla búlgara con salto", s: "3 series · 1' recuperación", r: "8 (cada pierna)" },
      { n: "La pinza", s: "3 series · 1' recuperación", r: "12 (cada pierna)", note: "con resistencia externa si no hay banda elástica" },
      { n: "Aductores en superficie inestable", s: "3 series · 1' recuperación", r: "9 (cada pierna)" },
      { n: "Peso muerto", s: "3 series · 1' recuperación", r: "12", note: "IMPORTANTE: sin peso" },
      { n: "Extensión de cadera con peso externo", s: "3 series", r: "8" },
      { n: "Elevación de cadera en decúbito lateral", s: "3 series", r: "8" },
      { n: "Plancha frontal dinámica", s: "3 series", r: "30''" }
    ]
  },
  "2026-08-21": {
    num: 6, total: "65'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Resistencia aeróbica",
    main: [
      "1 serie de 15' al 50% (descanso 4')",
      "1 serie de 6' al 65% (descanso 4')",
      "2 series de 3' al 75% (descanso 3' entre series)"
    ],
    exercises: [
      { n: "Cat-Camel", s: "3 series", r: "12" },
      { n: "Plancha frontal", s: "3 series", r: "45''" },
      { n: "Plancha lateral", s: "3 series (cada lado)", r: "35'' por repetición" },
      { n: "Limpiaparabrisas", s: "3 series", r: "15" }
    ]
  },
  "2026-08-24": {
    num: 7, total: "75'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Carrera + fuerza",
    main: ["15' de carrera continua"],
    exercises: [
      { n: "Zancada frontal", s: "3 series · 1' recuperación", r: "7 (cada pierna)", note: "con mancuerna de 5 kg" },
      { n: "Puente de glúteos", s: "3 series · 1' recuperación", r: "12" },
      { n: "Aductores con pelota", s: "3 series · 1' recuperación", r: "15" },
      { n: "Peso muerto rumano a una pierna", s: "3 series · 1' recuperación", r: "8 (cada pierna)" },
      { n: "Plancha frontal con abducción de cadera", s: "3 series", r: "8 (cada pierna)" },
      { n: "Gemelos con barra o mancuernas", s: "3 series", r: "12", note: "peso no superior a 10-12 kg" },
      { n: "Sentadilla a una pierna sobre superficie elevada", s: "3 series", r: "5 (cada pierna)" },
      { n: "Descenso bilateral de piernas", s: "3 series", r: "15" },
      { n: "Sentadilla con activación de glúteo", s: "3 series · 1' recuperación", r: "12" },
      { n: "Aductores de pie con superficie", s: "3 series · 1' recuperación", r: "8 (cada pierna)" }
    ]
  },
  "2026-08-26": {
    num: 8, total: "60'",
    warmMin: 10, warm: "Movilidad articular y estiramientos",
    mainTitle: "Resistencia aeróbica piramidal",
    main: [
      "1 repetición de 1000 m al 80%",
      "2 repeticiones de 600 m al 85% (2' descanso)",
      "4 repeticiones de 300 m al 95% (2' descanso)",
      "¡¡IMPORTANTE!! Beber agua e hidratarse",
      "4 repeticiones de 300 m al 95% (2' descanso)",
      "2 repeticiones de 600 m al 85% (2' descanso)",
      "1 repetición de 1000 m al 80%"
    ],
    exercises: [
      { n: "Plancha lateral", s: "3 series (cada lado)", r: "40'' por repetición" },
      { n: "Plancha frontal extendida", s: "3 series", r: "15''" },
      { n: "Descenso alterno de piernas", s: "3 series", r: "40''" },
      { n: "Plancha frontal con 3 apoyos", s: "4 series", r: "40''" }
    ]
  },
  "2026-08-28": {
    num: 9, total: "60'",
    warmMin: 15, warm: "5' movilidad articular y estiramientos",
    mainTitle: "Carrera continua suave",
    main: ["40' de carrera continua al 60-70%"],
    exercises: [],
    special: "Hoy el objetivo es llegar al primer día de pretemporada con las piernas lo más frescas posible: un único ejercicio, de menor intensidad pero más largo."
  }
};

const PRETEMP = {
  "2026-08-31": { type: "entreno", label: "Entreno", detail: "Pendiente de hora y lugar" },
  "2026-09-01": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-02": { type: "fiesta", label: "Descanso" },
  "2026-09-03": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-04": { type: "fiesta", label: "Descanso" },
  "2026-09-05": { type: "partido", label: "Triangular", detail: "vs S13C y S13D" },
  "2026-09-06": { type: "fiesta", label: "Descanso" },
  "2026-09-07": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo o fuera" },
  "2026-09-08": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-09": { type: "fiesta", label: "Descanso" },
  "2026-09-10": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-11": { type: "fiesta", label: "Descanso" },
  "2026-09-12": { type: "partido", label: "E.F. Base Montcada", detail: "Fuera" },
  "2026-09-13": { type: "partido", label: "C.E. Mercantil", detail: "Fuera" },
  "2026-09-14": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo o fuera" },
  "2026-09-15": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-16": { type: "fiesta", label: "Descanso" },
  "2026-09-17": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-18": { type: "fiesta", label: "Descanso" },
  "2026-09-19": { type: "partido", label: "U.E. Castelldefels", detail: "Fuera" },
  "2026-09-20": { type: "partido", label: "C.E. Premià de Dalt", detail: "Fuera" },
  "2026-09-21": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo o fuera" },
  "2026-09-22": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-23": { type: "fiesta", label: "Descanso" },
  "2026-09-24": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-25": { type: "fiesta", label: "Descanso" },
  "2026-09-26": { type: "liga", label: "Liga · 1ª jornada" },
  "2026-09-27": { type: "fiesta", label: "Descanso" },
  "2026-09-28": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo o fuera" },
  "2026-09-29": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-09-30": { type: "fiesta", label: "Descanso" },
  "2026-10-01": { type: "entreno", label: "Entreno · 19:15h", detail: "Campo" },
  "2026-10-02": { type: "fiesta", label: "Descanso" },
  "2026-10-03": { type: "liga", label: "Liga · 2ª jornada" },
  "2026-10-04": { type: "fiesta", label: "Descanso" }
};

const PREVENCION = [
  { n: "Plancha abdominal", r: "30''" },
  { n: "Plancha abdominal lateral", r: "2×15''" },
  { n: "Nadador cruzado", r: "20 repeticiones" },
  { n: "Puente invertido", r: "30''" },
  { n: "Plancha lateral con elevación de pierna", r: "2×10 repeticiones" },
  { n: "Superman", r: "20 repeticiones" },
  { n: "Plancha con elevación de pierna", r: "2×10 repeticiones" },
  { n: "Sentadilla unilateral", r: "2×30''" },
  { n: "Frenadas excéntricas", r: "6 repeticiones por lado" }
];

const FUERZA_GENERAL = [
  { n: "Sentadilla isométrica", r: "30'' + 15 repeticiones" },
  { n: "Flexiones agarre amplio", r: "15 repeticiones" },
  { n: "Lunge frontal", r: "8 repeticiones por pierna" },
  { n: "Abdominales + isométrico aductor", r: "20 repeticiones" },
  { n: "Lunge lateral", r: "8 repeticiones por pierna" },
  { n: "Flexiones agarre estrecho", r: "12 repeticiones" },
  { n: "Gemelos isométricos", r: "30'' + 15 repeticiones" },
  { n: "Abdominales oblicuos", r: "20 repeticiones" }
];

const ESTIRAMIENTOS = [
  { n: "Estiramiento de aductores", r: "2×30''" },
  { n: "Estiramiento de cuádriceps", r: "2×30''" },
  { n: "Estiramiento de glúteos", r: "2×30''" },
  { n: "Estiramiento de isquiotibiales", r: "2×30''" },
  { n: "Estiramiento de psoas", r: "2×30''" },
  { n: "Estiramiento de gemelos", r: "2×30''" },
  { n: "Estiramiento de tríceps", r: "2×30''" },
  { n: "Estiramiento de pectoral", r: "2×30''" },
  { n: "Estiramiento de dorsales", r: "30'' cada lado" }
];

/* ===== HELPERS ===== */

const DOW = ["L", "M", "X", "J", "V", "S", "D"];
const MONTH_NAMES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const DAY_NAMES = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

function iso(d) {
  return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
}

function buildWeeks(startIso, numWeeks) {
  const start = new Date(startIso + "T00:00:00");
  const weeks = [];
  let cur = new Date(start);
  for (let w = 0; w < numWeeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

const AUGUST_WEEKS = buildWeeks("2026-08-10", 3);
const PRETEMP_WEEKS = buildWeeks("2026-08-31", 5);
const TODAY_ISO = iso(new Date());

function fmtLong(d) {
  return DAY_NAMES[d.getDay()] + " " + d.getDate() + " de " + MONTH_NAMES[d.getMonth()];
}

/* ===== RENDER: CALENDAR TAB ===== */

function renderWeekHeader() {
  return DOW.map(function (d) { return `<div class="dow">${d}</div>`; }).join("");
}

function sessionTileHTML(d) {
  const key = iso(d);
  const s = SESSIONS[key];
  const isToday = key === TODAY_ISO;
  if (s) {
    return `<button type="button" class="day-cell session${isToday ? " today" : ""}" data-date="${key}" data-kind="session">
      <span class="daynum">${d.getDate()}</span>
      <span class="tile-num">${s.num}</span>
      <span class="tile-time">${s.total}</span>
    </button>`;
  }
  return `<button type="button" class="day-cell rest${isToday ? " today" : ""}" data-date="${key}" data-kind="rest">
    <span class="daynum">${d.getDate()}</span>
    <span class="tile-rest">Descanso</span>
  </button>`;
}

function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  let html = renderWeekHeader();
  AUGUST_WEEKS.forEach(function (week) {
    week.forEach(function (d) { html += sessionTileHTML(d); });
  });
  grid.innerHTML = html;
}

/* ===== RENDER: PRETEMPORADA TAB ===== */

function pretempTileHTML(d) {
  const key = iso(d);
  const ev = PRETEMP[key];
  const isToday = key === TODAY_ISO;
  if (!ev) {
    return `<div class="day-cell blank"><span class="daynum">${d.getDate()}</span></div>`;
  }
  return `<button type="button" class="day-cell ${ev.type}${isToday ? " today" : ""}" data-date="${key}" data-kind="pretemp">
    <span class="daynum">${d.getDate()}</span>
    <span class="tile-rest">${ev.label}</span>
  </button>`;
}

function renderPretemporada() {
  const grid = document.getElementById("pretemp-grid");
  let html = renderWeekHeader();
  PRETEMP_WEEKS.forEach(function (week) {
    week.forEach(function (d) { html += pretempTileHTML(d); });
  });
  grid.innerHTML = html;
}

/* ===== MODAL ===== */

function exerciseRowHTML(ex, idx) {
  const noteHTML = ex.note ? `<div class="ex-note">${ex.note}</div>` : "";
  const seriesPill = ex.s ? `<span class="pill">${ex.s}</span>` : "";
  return `<li class="ex-row">
    <span class="ex-idx">${String(idx + 1).padStart(2, "0")}</span>
    <div class="ex-body">
      <div class="ex-name">${ex.n}</div>
      ${noteHTML}
      <div class="ex-meta">${seriesPill}<span class="pill pill-r">${ex.r}</span></div>
    </div>
    <a class="ex-video" href="${yt(ex.n)}" target="_blank" rel="noopener">▶<span>Vídeo</span></a>
  </li>`;
}

function protocolBlockHTML(id, title, items) {
  const rows = items.map(function (ex, idx) {
    return exerciseRowHTML({ n: ex.n, r: ex.r }, idx);
  }).join("");
  return `<div class="block protocol-block">
    <button type="button" class="protocol-toggle" onclick="toggleProtocol('${id}')">
      <span class="block-h">${title} <span class="protocol-count">(${items.length})</span></span>
      <span class="protocol-chevron" id="chev-${id}">Ver ▾</span>
    </button>
    <div class="protocol-body" id="body-${id}" hidden>
      <ul class="ex-list">${rows}</ul>
    </div>
  </div>`;
}

function toggleProtocol(id) {
  const body = document.getElementById("body-" + id);
  const chev = document.getElementById("chev-" + id);
  if (!body) return;
  const willShow = body.hidden;
  body.hidden = !willShow;
  if (chev) chev.textContent = willShow ? "Ocultar ▴" : "Ver ▾";
}

function openSessionModal(key) {
  const s = SESSIONS[key];
  const d = new Date(key + "T00:00:00");
  const mainHTML = s.main.map(function (line) {
    const isAlert = line.indexOf("IMPORTANTE") !== -1;
    return `<div class="${isAlert ? "alert-line" : "main-line"}">${line}</div>`;
  }).join("");
  const exHTML = s.exercises.length
    ? `<ul class="ex-list">${s.exercises.map(exerciseRowHTML).join("")}</ul>`
    : "";
  const specialHTML = s.special ? `<div class="special-note">${s.special}</div>` : "";
  const exBlock = exHTML ? `<div class="block"><div class="block-h">Fuerza y compensatorio</div>${exHTML}</div>` : "";
  const protocolsHTML =
    protocolBlockHTML("prevencion-" + s.num, "Protocolo de prevención", PREVENCION) +
    protocolBlockHTML("fuerza-" + s.num, "Protocolo de fuerza general", FUERZA_GENERAL) +
    protocolBlockHTML("estiramientos-" + s.num, "Estiramientos", ESTIRAMIENTOS);
  const html = `<div class="ticket">
    <div class="ticket-top">
      <div class="ticket-num">${s.num}</div>
      <div class="ticket-meta"><div class="ticket-label">Sesión</div><div class="ticket-date">${fmtLong(d)}</div></div>
      <div class="ticket-time">${s.total}</div>
    </div>
    <div class="ticket-perf"></div>
    <div class="ticket-body">
      <div class="block"><div class="block-h">Calentamiento · ${s.warmMin}'</div><div class="block-d">${s.warm}</div></div>
      <div class="block"><div class="block-h">${s.mainTitle}</div>${mainHTML}</div>
      ${specialHTML}
      ${exBlock}
      ${protocolsHTML}
    </div>
  </div>`;
  showModal(html);
}

function openRestModal(key) {
  const d = new Date(key + "T00:00:00");
  const tip = RECOMENDACIONES[Math.floor(Math.random() * RECOMENDACIONES.length)];
  const html = `<div class="ticket">
    <div class="ticket-top">
      <div class="ticket-num rest">–</div>
      <div class="ticket-meta"><div class="ticket-label">Descanso</div><div class="ticket-date">${fmtLong(d)}</div></div>
    </div>
    <div class="ticket-perf"></div>
    <div class="ticket-body">
      <p class="rest-copy">Hoy toca recuperar. El descanso es parte del entrenamiento: evita cargas extra para llegar fresco al primer día de pretemporada.</p>
      <div class="block"><div class="block-h">${tip.t}</div><div class="block-d">${tip.d}</div></div>
    </div>
  </div>`;
  showModal(html);
}

function openPretempModal(key) {
  const ev = PRETEMP[key];
  const d = new Date(key + "T00:00:00");
  const badge = (ev.type === "partido" || ev.type === "liga") ? "P" : (ev.type === "fiesta" ? "–" : "E");
  const detailHTML = ev.detail ? `<div class="block"><div class="block-d">${ev.detail}</div></div>` : "";
  const html = `<div class="ticket">
    <div class="ticket-top">
      <div class="ticket-num ${ev.type}">${badge}</div>
      <div class="ticket-meta"><div class="ticket-label">${ev.label}</div><div class="ticket-date">${fmtLong(d)}</div></div>
    </div>
    <div class="ticket-perf"></div>
    <div class="ticket-body">
      ${detailHTML}
      <p class="rest-copy">La pretemporada y los partidos son orientativos y pueden sufrir cambios. Se confirman por el grupo de WhatsApp.</p>
    </div>
  </div>`;
  showModal(html);
}

function showModal(html) {
  document.getElementById("modal-content").innerHTML = html;
  document.getElementById("modal-overlay").hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal-overlay").hidden = true;
  document.body.classList.remove("modal-open");
}

/* ===== LIBRARY TAB ===== */

const SESSION_EXERCISES = (function () {
  const seen = {};
  const list = [];
  Object.keys(SESSIONS).forEach(function (key) {
    SESSIONS[key].exercises.forEach(function (ex) {
      if (!seen[ex.n]) { seen[ex.n] = true; list.push({ n: ex.n }); }
    });
  });
  return list;
})();

function libraryItemHTML(ex) {
  return `<a class="lib-item" href="${yt(ex.n)}" target="_blank" rel="noopener">
    <span class="lib-name">${ex.n}</span>
    ${ex.r ? `<span class="lib-r">${ex.r}</span>` : ""}
    <span class="lib-play">▶</span>
  </a>`;
}

function renderLibraryGroup(containerId, items) {
  document.getElementById(containerId).innerHTML = items.map(libraryItemHTML).join("");
}

function renderLibrary() {
  renderLibraryGroup("lib-sesiones", SESSION_EXERCISES);
  renderLibraryGroup("lib-prevencion", PREVENCION);
  renderLibraryGroup("lib-fuerza", FUERZA_GENERAL);
  renderLibraryGroup("lib-estiramientos", ESTIRAMIENTOS);
}

function filterLibrary(q) {
  const query = q.trim().toLowerCase();
  document.querySelectorAll(".lib-item").forEach(function (el) {
    const name = el.querySelector(".lib-name").textContent.toLowerCase();
    el.classList.toggle("lib-hidden", name.indexOf(query) === -1);
  });
  document.querySelectorAll(".lib-group").forEach(function (group) {
    const anyVisible = group.querySelectorAll(".lib-item:not(.lib-hidden)").length > 0;
    group.classList.toggle("lib-hidden", !anyVisible);
  });
}

/* ===== RECOMENDACIONES TAB ===== */

function renderRecomendaciones() {
  const el = document.getElementById("recs-list");
  el.innerHTML = RECOMENDACIONES.map(function (r) {
    return `<div class="rec-card"><div class="rec-t">${r.t}</div><div class="rec-d">${r.d}</div></div>`;
  }).join("");
  document.getElementById("importante-text").textContent = IMPORTANTE;
}

/* ===== TABS ===== */

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
      document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
      window.scrollTo(0, 0);
    });
  });
}

/* ===== INIT ===== */

document.addEventListener("DOMContentLoaded", function () {
  renderCalendar();
  renderPretemporada();
  renderLibrary();
  renderRecomendaciones();
  setupTabs();

  document.getElementById("calendar-grid").addEventListener("click", function (e) {
    const cell = e.target.closest(".day-cell");
    if (!cell || !cell.dataset.date) return;
    if (cell.dataset.kind === "session") openSessionModal(cell.dataset.date);
    else openRestModal(cell.dataset.date);
  });

  document.getElementById("pretemp-grid").addEventListener("click", function (e) {
    const cell = e.target.closest(".day-cell");
    if (!cell || !cell.dataset.date) return;
    openPretempModal(cell.dataset.date);
  });

  document.getElementById("modal-overlay").addEventListener("click", function (e) {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);

  document.getElementById("lib-search").addEventListener("input", function (e) {
    filterLibrary(e.target.value);
  });
});
