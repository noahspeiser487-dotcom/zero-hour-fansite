const sections = [
  {
    group: 'Core',
    id: 'core-fundamentals',
    title: 'Core Fundamentals (für alle Fraktionen)',
    body: `
      <p><span class="tag">Macro</span><span class="tag">Micro</span><span class="tag">Map Control</span></p>
      <h3>Die 7 Win-Prinzipien</h3>
      <ul>
        <li><strong>Idle Cash vermeiden:</strong> Geld sofort in Units/Tech/Map-Control investieren.</li>
        <li><strong>Production uptime:</strong> War Factory/Barracks/Airfield nie lange idle lassen.</li>
        <li><strong>Scouting first:</strong> früh sehen, was der Gegner plant (Dozer, Worker, Tech).</li>
        <li><strong>Timing windows:</strong> Angreifen wenn dein Spike da ist (z.B. first Vees, first Overlord).</li>
        <li><strong>Map Control > reines Turtle:</strong> Oils, Flanken, Mitte = langfristiger Vorteil.</li>
        <li><strong>Trades rechnen:</strong> schlechte Trades sofort stoppen, Position resetten.</li>
        <li><strong>APM mit Sinn:</strong> lieber saubere Prioritäten als hektische Klicks ohne Value.</li>
      </ul>
      <h3>Training-Checklist (daily 20 min)</h3>
      <ul>
        <li>5 Min: Opening gegen KI ohne Fehler (Build Order blind).</li>
        <li>5 Min: Unit control drills (kite, split, focus fire).</li>
        <li>5 Min: Flank awareness (alle 4–5 Sek. Minimap check).</li>
        <li>5 Min: 1v1 Replay-Review mit 3 konkreten Fixes.</li>
      </ul>
    `
  },
  {
    group: 'Fraktionen',
    id: 'usa-guide',
    title: 'USA Guide (vanilla)',
    body: `
      <p class="note">Playstyle: präzise, mobil, high-tech. Fehler werden hart bestraft, aber Ceiling ist brutal hoch.</p>
      <h3>Stärken</h3>
      <ul><li>Humvee/MD-Control</li><li>Air-Pressure (Raptors)</li><li>Gute defensive Tools (Patriot/Scan)</li></ul>
      <h3>Schwächen</h3>
      <ul><li>Teure Units, schlechte Trades tun weh</li><li>Mikro-abhängig</li></ul>
      <h3>Standard Build Order (TD safe)</h3>
      <ul>
        <li>Dozer1: Power → Supply</li>
        <li>Dozer2: Barracks → Supply</li>
        <li>Frühe MDs + Ranger scouten</li>
        <li>War Factory → 2–3 Vees</li>
        <li>Druck auf Mitte/Oils, dann Tech choice (Airfield oder 2nd WF)</li>
      </ul>
      <h3>Key Tips</h3>
      <ul>
        <li>Vees nie blind über Flanken fahren (Tunnel-/Gatt-Falle).</li>
        <li>Focus fire: zuerst Anti-Air/Anti-Vee löschen.</li>
        <li>Splitten gegen Splash (Nuke, Scud, Demo-Trucks).</li>
      </ul>
    `
  },
  {
    group: 'Fraktionen',
    id: 'china-guide',
    title: 'China Guide (vanilla)',
    body: `
      <p class="note">Playstyle: Druck, Masse, Tech-Skalierung. Stark über Timing + Frontline-Stabilität.</p>
      <h3>Stärken</h3>
      <ul><li>Frühe Bodenpräsenz (BM/Gatt)</li><li>Skaliert in starke Late-Armeen (ECM + Overlord)</li><li>Solide Base-Defense</li></ul>
      <h3>Schwächen</h3>
      <ul><li>Kann gekitet werden</li><li>Flanken anfällig ohne gutes Positioning</li></ul>
      <h3>Standard Build Order</h3>
      <ul>
        <li>Power → Dual Supply</li>
        <li>War Factory schnell</li>
        <li>BM+Gatt mix für frühe Mapkontrolle</li>
        <li>Tech zu Propaganda Center</li>
        <li>ECM + Overlord als Kern</li>
      </ul>
      <h3>Key Tips</h3>
      <ul>
        <li>Gattlings nie alleine reinwerfen — immer mit BM/ECM Layer.</li>
        <li>Minimap-Check auf Technical flanks/Tunnel pops.</li>
        <li>Artillery Powers für Räume öffnen, nicht random.</li>
      </ul>
    `
  },
  {
    group: 'Fraktionen',
    id: 'gla-guide',
    title: 'GLA Guide (vanilla)',
    body: `
      <p class="note">Playstyle: asymmetrisch, aggressiv, map-wide pressure. Bestraft starre Gegner brutal.</p>
      <h3>Stärken</h3>
      <ul><li>Worker/Tunnel map control</li><li>Gute Trades über Ambush/Harass</li><li>Starke Flexibilität</li></ul>
      <h3>Schwächen</h3>
      <ul><li>Vulnerabel wenn early eco behind</li><li>Fehler bei Tunnel-Netzwerk sind teuer</li></ul>
      <h3>Standard Build Order</h3>
      <ul>
        <li>Supply + Barracks</li>
        <li>Arms Dealer</li>
        <li>Forward Worker + Tunnel</li>
        <li>Technical + RPG harass</li>
        <li>Quad/Scorp mix je nach Gegner</li>
      </ul>
      <h3>Key Tips</h3>
      <ul>
        <li>Tunnel nicht nur offensiv: auch defensive Rückwege planen.</li>
        <li>Harass mit Ziel: Eco line, Dozer, isolated production.</li>
        <li>Nicht übercommitten in Base-Trades ohne map control.</li>
      </ul>
    `
  },
  {
    group: 'Generäle',
    id: 'usa-generals',
    title: 'USA Generäle: Airforce / Laser / Superweapon',
    body: `
      <h3>Airforce</h3>
      <ul><li>Spike: frühe Air dominance, starke Raptors/Comanche.</li><li>Win con: präzise snipes + map deny.</li></ul>
      <h3>Laser</h3>
      <ul><li>Starkes Ground-Mikro, Laser Units effizient.</li><li>Win con: konstante Vee-pressure + cleaner trades.</li></ul>
      <h3>Superweapon</h3>
      <ul><li>Defensiv stark, skalierend.</li><li>Win con: survive early, map sichern, späte Kontrolle.</li></ul>
    `
  },
  {
    group: 'Generäle',
    id: 'china-generals',
    title: 'China Generäle: Nuke / Tank / Infantry',
    body: `
      <h3>Nuke</h3><ul><li>Explosive timings, hohe mobile Feuerkraft.</li><li>Achte auf eigenes Splash-Management.</li></ul>
      <h3>Tank</h3><ul><li>Massiver Bodenpush, frühe Dominanz.</li><li>Gewinnt über Tempo und Produktionsdruck.</li></ul>
      <h3>Infantry</h3><ul><li>Inf-Spam + Support Powers, starke Präsenz.</li><li>Vulnerabel gegen gutes Splash/air punish.</li></ul>
    `
  },
  {
    group: 'Generäle',
    id: 'gla-generals',
    title: 'GLA Generäle: Toxin / Stealth / Demo',
    body: `
      <h3>Toxin</h3><ul><li>Extremer Area-Druck, starke direkte Fights.</li><li>Win con: map control + unfaire Engages.</li></ul>
      <h3>Stealth</h3><ul><li>Mindgames, Ambush, Info-Vorteil.</li><li>Win con: Positioning + pickoffs statt frontale Kämpfe.</li></ul>
      <h3>Demo</h3><ul><li>High risk/high reward Burst.</li><li>Win con: explosive timings, Chaos erzeugen.</li></ul>
    `
  },
  {
    group: 'Build Orders',
    id: 'bo-library',
    title: 'Build Order Library (kurz & praktisch)',
    body: `
      <h3>USA vs GLA (TD): Safe Vee Open</h3>
      <ul><li>Dual Supply → WF → 3 Vees</li><li>MD load + oil deny</li><li>Scan flank, keine blind dives</li></ul>
      <h3>China Nuke vs USA: Fast Pressure</h3>
      <ul><li>Dual Supply → WF</li><li>BM+Gatt push before full vee count</li><li>Prop timing für Midgame Stabilität</li></ul>
      <h3>GLA Toxin vs China: Map Choke</h3>
      <ul><li>Fast tunnel web</li><li>Tech harass auf Supplies</li><li>Quad/scorp um Timing-Fenster auszunutzen</li></ul>
      <p class="note">Ziel: 1 BO pro Matchup wirklich mastern statt 20 halb lernen.</p>
    `
  },
  {
    group: 'Matchups',
    id: 'matchup-plans',
    title: 'Matchup-Pläne (Gameplan in 3 Phasen)',
    body: `
      <h3>Early (0:00–3:00)</h3>
      <ul><li>Scout + identify opening</li><li>Keine unnötigen unit losses</li><li>Oils/Flanken contesten</li></ul>
      <h3>Mid (3:00–8:00)</h3>
      <ul><li>Timing push oder eco expand</li><li>Tech-switch lesen (air, prop, palace etc.)</li><li>Map control priorisieren</li></ul>
      <h3>Late (8:00+)</h3>
      <ul><li>Army composition stabilisieren</li><li>Trades nur mit Vorteil</li><li>Power usage koordiniert</li></ul>
    `
  },
  {
    group: 'Counter',
    id: 'counter-cheatsheet',
    title: 'Counter Cheat Sheet',
    body: `
      <ul>
        <li><strong>Overlord</strong> → Aurora / Jarmen + Rockets / Nuke Cannon zone</li>
        <li><strong>Humvee blob</strong> → Gatt+ECM / Quad surround / mines & choke</li>
        <li><strong>Battle Bus</strong> → EMP + focus fire / Mig splash / trap pathing</li>
        <li><strong>Comanche</strong> → Gatt mass / Quads spread / static AA layering</li>
        <li><strong>Scud launcher</strong> → Air snipe / flank raid / deny vision</li>
      </ul>
    `
  },
  {
    group: 'Lernen',
    id: 'replay-review',
    title: 'Replay Review Framework',
    body: `
      <h3>Nach jedem Match notieren</h3>
      <ul>
        <li>1 Macro-Fehler (z.B. idle cash > 2k)</li>
        <li>1 Micro-Fehler (z.B. bad engage ohne scout)</li>
        <li>1 Decision-Fehler (falscher tech path/timing)</li>
      </ul>
      <h3>Fix-Loop</h3>
      <ul>
        <li>Nur 1 Problem pro Session fixen</li>
        <li>Im nächsten Spiel bewusst auf genau das achten</li>
        <li>Nach 5 Spielen Recheck</li>
      </ul>
    `
  },
  {
    group: 'Tools',
    id: 'tools-links',
    title: 'Tools & Community Links',
    body: `
      <ul>
        <li><a href="https://www.gentool.net/" target="_blank">GenTool</a> — Pflicht für ZH online.</li>
        <li><a href="https://cnc-online.net/en/" target="_blank">C&C Online</a> — Multiplayer Infrastruktur.</li>
        <li><a href="https://www.gamereplays.org/cnczerohour/" target="_blank">GameReplays Zero Hour</a> — Replays, Strategien, Guides.</li>
      </ul>
    `
  }
];

const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

function buildUI() {
  const groups = [...new Set(sections.map(s => s.group))];
  groups.forEach(g => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-group';
    wrap.innerHTML = `<h3>${g}</h3>`;

    sections.filter(s => s.group === g).forEach(s => {
      const a = document.createElement('a');
      a.className = 'nav-link';
      a.href = `#${s.id}`;
      a.textContent = s.title;
      wrap.appendChild(a);

      const sec = document.createElement('section');
      sec.className = 'card';
      sec.id = s.id;
      sec.dataset.search = `${s.group} ${s.title} ${sec.textContent}`.toLowerCase();
      sec.innerHTML = `<h2>${s.title}</h2>${s.body}`;
      content.appendChild(sec);
    });

    sidebar.appendChild(wrap);
  });
}

function applySearch(q) {
  const needle = q.trim().toLowerCase();
  document.querySelectorAll('#content .card').forEach(card => {
    if (card.id === 'start') return;
    const txt = card.textContent.toLowerCase();
    card.classList.toggle('hidden', needle && !txt.includes(needle));
  });
}

buildUI();
document.getElementById('search').addEventListener('input', e => applySearch(e.target.value));
