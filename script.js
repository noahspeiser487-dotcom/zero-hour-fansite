const factionText = {
  USA: "High-Tech Power: Drohnen, Präzision, Air Superiority.",
  China: "Brutale Masse: Nukes, Overlords, Flammenwerfer-Chaos.",
  GLA: "Hit & Run: Tunnels, Ambushes, toxische Tricks."
};
const units = [
  "Aurora Bomber", "Comanche", "Tomahawk", "Paladin", "Overlord", "Gattling Tank",
  "Nuke Cannon", "ECM Tank", "Scorpion Tank", "Quad Cannon", "Battle Bus", "Jarmen Kell"
];
const quotes = [
  "Can I have some shoes?", "AK-47s for everyone!", "China will grow larger.",
  "Our base is under attack!", "Unit lost.", "Need a point-man?"
];

const factionSel = document.getElementById('faction');
const factionOut = document.getElementById('factionText');
const list = document.getElementById('unitList');
const search = document.getElementById('unitSearch');
const quote = document.getElementById('quote');

function renderUnits(filter=''){
  list.innerHTML='';
  units.filter(u=>u.toLowerCase().includes(filter.toLowerCase())).forEach(u=>{
    const li=document.createElement('li'); li.textContent=u; list.appendChild(li);
  });
}
function newQuote(){ quote.textContent = quotes[Math.floor(Math.random()*quotes.length)]; }

factionSel.onchange=()=> factionOut.textContent = factionText[factionSel.value];
search.oninput=()=> renderUnits(search.value);
document.getElementById('newQuote').onclick=newQuote;

const buildInput=document.getElementById('buildInput');
const addBuild=document.getElementById('addBuild');
const buildList=document.getElementById('buildList');
const clearBuild=document.getElementById('clearBuild');
let build = JSON.parse(localStorage.getItem('zh_build') || '[]');
function renderBuild(){
  buildList.innerHTML='';
  build.forEach((s,i)=>{const li=document.createElement('li');li.textContent=`${i+1}. ${s}`;buildList.appendChild(li)});
  localStorage.setItem('zh_build', JSON.stringify(build));
}
addBuild.onclick=()=>{ if(buildInput.value.trim()){ build.push(buildInput.value.trim()); buildInput.value=''; renderBuild(); }};
clearBuild.onclick=()=>{ build=[]; renderBuild(); };

// Theme toggle
const themeBtn=document.getElementById('themeBtn');
themeBtn.onclick=()=>document.body.classList.toggle('light');

// Background stars
const c=document.getElementById('bg'),ctx=c.getContext('2d');
let w,h,stars;
function resize(){w=c.width=innerWidth;h=c.height=innerHeight;stars=Array.from({length:120},()=>({x:Math.random()*w,y:Math.random()*h,s:Math.random()*2+0.2}));}
function draw(){ctx.clearRect(0,0,w,h);ctx.fillStyle='white';stars.forEach(st=>{ctx.globalAlpha=.2+st.s/3;ctx.fillRect(st.x,st.y,st.s,st.s);st.y+=st.s*.25;if(st.y>h)st.y=0;});requestAnimationFrame(draw)}
addEventListener('resize',resize);resize();draw();

// Easter egg: type "nuke"
let keyBuf='';
addEventListener('keydown',e=>{ keyBuf=(keyBuf+e.key.toLowerCase()).slice(-4); if(keyBuf==='nuke'){ document.body.style.filter='hue-rotate(120deg)'; setTimeout(()=>document.body.style.filter='',1200);} });

factionOut.textContent=factionText[factionSel.value];
renderUnits(); newQuote(); renderBuild();