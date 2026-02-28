const guides=[
{f:'USA',map:'Tournament Desert',name:'Safe Dual Supply + Fast Vees',steps:['Dozer1: Power','Dozer2: Supply','Barracks + 2x Supply Center','War Factory','3 Humvees + MD load','Pressure Mitte']},
{f:'USA',map:'Fallen Empire',name:'Airfield Timing Push',steps:['Power','Dual Supply','Airfield','2 King Raptors','Deny Oils','Transition War Factory']},
{f:'China',map:'Tournament Desert',name:'Standard Nuke Pressure',steps:['Power','Dual Supply','War Factory','2 Battlemaster + 1 Gatt','Propaganda Center timing','Overlord transition']},
{f:'China',map:'Defcon 6',name:'Eco into Tech Spam',steps:['Dual Supply greed','War Factory','Tank Hunter bunker mid','Fast ECM support','Map control links/rechts']},
{f:'GLA',map:'Tournament Desert',name:'Tunnel Aggro + Tech RPG',steps:['Supply + Barracks','Arms Dealer','Forward Tunnel','Tech RPG harass','Spam Quads + Scorps']},
{f:'GLA',map:'Fallen Empire',name:'Oil Control GLA',steps:['Fast Workers zu Oils','Tunnel Network sichern','Capture Upgrade','Defensive Quads','Counterpush midgame']}];

const counters={
"overlord":"Counter: Aurora / Nuke Cannon / Jarmen Kell + Rocket Support",
"humvee":"Counter: Gattling + ECM / Quads + Technical surround",
"quad cannon":"Counter: MD-Humvee kite / Dragon Tank flame wall",
"battle bus":"Counter: EMP Patriot + focus fire / Migs splash",
"comanche":"Counter: Gattling Tank / Quad Cannon mass",
"scud launcher":"Counter: Aurora strike / Sneak tech flank"
};

const matchup={
"USA-GLA":"Early: deny tunnels. Mid: Vee control + scan. Late: avoid overextending into ambush.",
"USA-China":"Early: survive push. Mid: kite with Vees. Late: split army vs Nuke splash.",
"China-GLA":"Early: deny workers. Mid: Gatt+BM timing. Late: ECM + Overlord, watch Jarmen.",
"GLA-USA":"Early: tunnel spread. Mid: tech harassment. Late: map control + cash bounties.",
"GLA-China":"Early: worker map control. Mid: quad/scorp mix. Late: bus + sneak attacks.",
"China-USA":"Early: force fights. Mid: deny oils. Late: ECM wall + artillery pressure."
};

function renderGuides(){
  const f=document.getElementById('factionFilter').value;
  const m=document.getElementById('mapFilter').value;
  const box=document.getElementById('guideList'); box.innerHTML='';
  guides.filter(g=>(f==='all'||g.f===f)&&(m==='all'||g.map===m)).forEach(g=>{
    const d=document.createElement('div'); d.className='guide';
    d.innerHTML=`<h3>${g.name}</h3><small>${g.f} · ${g.map}</small><ol>${g.steps.map(s=>`<li>${s}</li>`).join('')}</ol>`;
    box.appendChild(d);
  });
  if(!box.innerHTML) box.innerHTML='<div class="guide">Keine Guides für diesen Filter.</div>';
}

document.getElementById('factionFilter').onchange=renderGuides;
document.getElementById('mapFilter').onchange=renderGuides;

document.getElementById('counterBtn').onclick=()=>{
  const q=document.getElementById('unitInput').value.trim().toLowerCase();
  document.getElementById('counterOut').textContent = counters[q] || 'Kein Eintrag. Versuch z.B. Overlord, Humvee, Battle Bus.';
};

document.getElementById('matchBtn').onclick=()=>{
  const a=document.getElementById('m1').value,b=document.getElementById('m2').value;
  const key=`${a}-${b}`;
  document.getElementById('matchOut').textContent = matchup[key] || 'Mirror-Match: Makro + saubere Micro entscheiden.';
};

const tasks=[['Dozer stoppen','S'],['Unit gruppieren','Ctrl+1'],['Attack Move','A'],['Stop','S'],['Waypoint setzen','Shift']];
let active=null,score=0;
document.getElementById('hotkeyStart').onclick=()=>{
  active=tasks[Math.floor(Math.random()*tasks.length)];
  document.getElementById('hotkeyTask').textContent=`Aufgabe: ${active[0]} → ${active[1]}`;
};
addEventListener('keydown',e=>{
  if(!active) return;
  const pressed=(e.ctrlKey?'Ctrl+':'') + (e.key.length===1?e.key.toUpperCase():e.key);
  if(pressed===active[1]){score++;document.getElementById('hotkeyScore').textContent=`Score: ${score}`;active=null;document.getElementById('hotkeyTask').textContent='Treffer ✅ Neues Starten';}
});

renderGuides();