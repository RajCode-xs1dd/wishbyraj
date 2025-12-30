const HOME=location.origin+location.pathname;
const userLang=navigator.language.toLowerCase();
const modeSelect=document.getElementById("modeSelect");
const themeSelect=document.getElementById("themeSelect");
const bgm=document.getElementById("bgm");
bgm.volume = 0.2;
let musicStarted = false;
document.body.addEventListener("click", ()=>{
  if(!musicStarted){
    bgm.play().catch(()=>{});
    musicStarted = true;
  }
});


/* WISH BANK */
const POETIC_WISH = {

 newyear:{
  bn:[
`এই নতুন বছরটি যেন তোমার জীবনে আসে এক শান্ত আলো নিয়ে।
যেন ক্লান্ত দিনগুলো একটু বিশ্রাম পায়,
নীরব দুঃখগুলো শক্তিতে রূপ নেয়,
আর হৃদয়ে লুকিয়ে রাখা স্বপ্নগুলো
ধীরে ধীরে সত্যি হওয়ার পথ খুঁজে পায়।
এই বছরটি তোমার হোক — নীরব, সুন্দর ও আশীর্বাদে ভরা।

✨ শুভ নববর্ষ ✨`,

`তোমার জীবনের পথে যে সব প্রশ্ন এখনও উত্তর পায়নি,
এই বছর সেগুলো যেন শান্তি খুঁজে পায়।
যেন তোমার প্রতিটি নিঃশ্বাসে থাকে কৃতজ্ঞতা,
প্রতিটি দিনে থাকে ছোট ছোট সুখ,
আর প্রতিটি রাত বয়ে আনে নিশ্চিন্ত ঘুম।
এই বছর তোমাকে মৃদু ভাবে আপন করে নিক।

✨ শুভ নববর্ষ ✨`
  ],
  hi:[
`यह नया साल आपके जीवन में एक शांत रोशनी लेकर आए।
थके हुए दिनों को थोड़ा आराम मिले,
अधूरे सपनों को नई उम्मीद मिले,
और दिल में छुपी इच्छाएँ
धीरे-धीरे अपने सच होने का रास्ता ढूँढ लें।
यह साल आपका हो — शांत, सुंदर और आशीर्वाद से भरा हुआ।

✨ नववर्ष की शुभकामनाएँ ✨`,

`जो बातें अभी अनकही रह गई हैं,
जो सपने अभी अधूरे हैं,
यह साल उन्हें पूरा होने की एक नरम शुरुआत दे।
आपके हर दिन में थोड़ी सी शांति,
थोड़ी सी मुस्कान,
और ढेर सारी उम्मीद भर जाए।

✨ नववर्ष की शुभकामनाएँ ✨`
  ],
  en:[
`May this year arrive in your life like a gentle light.
May your tired days find rest,
your silent worries turn into quiet strength,
and the dreams you hide inside your heart
slowly find their way into reality.
Let this year belong to you — calm, kind, and beautifully blessed.

✨ Happy New Year ✨`,

`May the questions that still live in your heart
find peaceful answers this year.
May every breath carry gratitude,
every day bring small joys,
and every night gift you deep, gentle sleep.
Let this year hold you softly.

✨ Happy New Year ✨`
  ]
 },

 birthday:{
  bn:[
`আজকের দিনটি কেবল একটি তারিখ নয় —
এটি তোমার জীবনের নতুন একটি অধ্যায়ের নীরব সূচনা।
যেন এই নতুন বছরে তোমার পথ হয়ে ওঠে একটু সহজ,
স্বপ্নগুলো হয় একটু কাছে,
আর হাসিগুলো আরও বেশি সত্যি।
শুভ জন্মদিন। 🤍

🎂 শুভ জন্মদিন 🎂`,

`তোমার প্রতিটি জন্মদিন তোমাকে আরও কোমল করে তোলে,
আর আরও সাহসী করে তোলে।
এই বছরে তোমার হৃদয় খুঁজে পাক শান্তি,
আর তোমার পথ হোক আলোয় ভরা।
শুভ জন্মদিন। ✨

🎂 শুভ জন্মদিন 🎂`
  ],
  hi:[
`आज का दिन केवल एक तारीख नहीं —
यह आपके जीवन के एक नए अध्याय की शुरुआत है।
यह साल आपके लिए थोड़ी शांति,
थोड़ी मुस्कान और ढेर सारी उम्मीद लेकर आए।
जन्मदिन की शुभकामनाएँ। 🤍

🎂 जन्मदिन की शुभकामनाएँ 🎂`,

`आपका हर जन्मदिन आपको और मजबूत बनाता है।
यह साल आपके सपनों को थोड़ा और करीब लाए।
जन्मदिन की ढेर सारी शुभकामनाएँ। ✨

🎂 जन्मदिन की शुभकामनाएँ 🎂`
  ],
  en:[
`Today is not just a date —
it is the quiet beginning of a new chapter in your life.
May this year bring gentler days,
closer dreams,
and more honest smiles.
Happy Birthday. 🤍

🎂 Happy Birthday 🎂`,

`Every birthday makes you softer, and stronger at the same time.
May this year hold peace for your heart
and light for your path.
Happy Birthday. ✨

🎂 Happy Birthday 🎂`
  ]
 },

 love:{
  bn:[
`ভালোবাসা সবসময় শব্দে ধরা যায় না —
কিন্তু আজকের এই নীরব শুভেচ্ছাটি
তোমার হৃদয় ছুঁয়ে যাক।
তুমি যেমন আছো, ঠিক তেমনই মূল্যবান।
ভালোবাসা তোমাকে খুঁজে পাক। 🤍

💖 ভালোবাসা রইল 💖`,

`তোমার হাসি যেন কারও শান্তি হয়ে ওঠে,
আর তোমার উপস্থিতি কারও বাড়ি হয়ে ওঠে।
তুমি ভালোবাসার যোগ্য — নিঃশব্দে, গভীরভাবে। 💖

💖 ভালোবাসা রইল 💖`
  ],
  hi:[
`प्यार हमेशा शब्दों में नहीं बंधता —
लेकिन यह छोटी सी शुभकामना
आपके दिल तक पहुँचे।
आप जैसे हैं, वैसे ही बेहद खास हैं। 🤍

💖 प्यार के साथ 💖`,

`आपकी मुस्कान किसी का सुकून बने,
और आपकी मौजूदगी किसी का घर।
आप प्यार के काबिल हैं — गहराई से। 💖

💖 प्यार के साथ 💖`
  ],
  en:[
`Love does not always live in words —
but may this quiet wish reach your heart.
You are worthy, just as you are.
May love find you softly. 🤍

💖 With Love 💖`,

`May your smile become someone’s comfort,
and your presence someone’s home.
You are deeply worthy of love. 💖

💖 With Love 💖`
  ]
 },

 motivation:{
  bn:[
`তুমি যতটা ভাবো তার থেকেও তুমি অনেক শক্তিশালী।
তোমার প্রতিটি চেষ্টা একটি গল্প তৈরি করছে।
ধীরে চললেও থেমে যেও না।
তোমার সময় আসছে। 🔥

🔥 দৃঢ় থাকো 🔥`,

`তোমার পথে হয়তো কাঁটা আছে,
কিন্তু তোমার ভেতরে আছে আলো।
আজ নয়, কাল —
তোমার দিন আসবেই। ✨

🔥 দৃঢ় থাকো 🔥`
  ],
  hi:[
`आप जितना सोचते हैं उससे कहीं ज़्यादा मजबूत हैं।
हर छोटी कोशिश आपकी कहानी लिख रही है।
धीरे चलो, लेकिन रुकना मत।
आपका समय आ रहा है। 🔥

🔥 मजबूत रहो 🔥`,

`आपके रास्ते में मुश्किलें हो सकती हैं,
लेकिन आपके अंदर रोशनी है।
आज नहीं तो कल — आपकी जीत तय है। ✨

🔥 मजबूत रहो 🔥`
  ],
  en:[
`You are stronger than you think.
Every small effort is writing your story.
Walk slowly if you must, but never stop.
Your time is coming. 🔥

🔥 Stay Strong 🔥`,

`There may be storms on your road,
but there is light within you.
Not today, maybe tomorrow —
your day will come. ✨

🔥 Stay Strong 🔥`
  ]
 }
};

function pickWish(){
 let lang="en";
 if(userLang.startsWith("bn")) lang="bn";
 else if(userLang.startsWith("hi")) lang="hi";

 const bank = POETIC_WISH[modeSelect.value][lang];
 return bank[Math.floor(Math.random()*bank.length)];
}

/* THEME */
function applyTheme(){
 document.body.classList.remove("theme-neon","theme-royal","theme-sunset","theme-forest");
 document.body.classList.add("theme-"+themeSelect.value);
 localStorage.setItem("wishTheme",themeSelect.value);
}
themeSelect.onchange = applyTheme;

/* restore saved theme */
const savedTheme = localStorage.getItem("wishTheme");
if(savedTheme){
 document.body.classList.add("theme-"+savedTheme);
 themeSelect.value = savedTheme;
}else{
 document.body.classList.add("theme-neon");
}

/* CREATE */
function generateWish(){
 const name=document.getElementById("nameInput").value.trim();
 if(!name)return alert("Enter your name");
 document.getElementById("card1").style.display="none";
 document.getElementById("card2").classList.remove("hidden");
 showWish(name);
}

/* SHOW */
function showWish(name){
 document.getElementById("wishName").innerText="Dear "+name+",";
 typeText(document.getElementById("wishText"),pickWish());
 document.getElementById("waShare").href="https://wa.me/?text="+encodeURIComponent(HOME);
}

/* TYPING */
function typeText(el, text){
 el.innerHTML="";
 const parts = text.split("\n\n");
 const para = parts[0];
 const tag  = parts[1] || "";

 let i=0;
 const chars = Array.from(para);

 const t=setInterval(()=>{
   el.innerHTML += chars[i]==="\n" ? "<br>" : chars[i];
   i++;
   if(i>=chars.length){
     clearInterval(t);
     // Insert tagline as REAL DOM element
     if(tag){
       const d=document.createElement("div");
       d.className="wishtag";
       d.innerText=tag;
       el.appendChild(d);
     }
   }
 },28);
}

/* COPY */
function copyLink(){
 navigator.clipboard.writeText(HOME);
 alert("WishByRaj link copied ✨");
}

/* LIVE COUNTER */
const counter=document.getElementById("liveCounter");
let c=Math.floor(Math.random()*20)+5;
setInterval(()=>{c+=Math.floor(Math.random()*3)-1;if(c<3)c=3;
 counter.innerText="🔴 "+c+" people creating wishes right now";},2500);

/* FALLING SPARKLES */
setInterval(()=>{
 const l=document.createElement("div");
 l.className="light";
 l.style.left=Math.random()*100+"%";
 l.style.animationDuration=5+Math.random()*5+"s";
 document.body.appendChild(l);
 setTimeout(()=>l.remove(),10000);
},400);

/* TOUCH GLOW */
document.addEventListener("touchstart",glow);
document.addEventListener("mousemove",glow);
function glow(e){
 const g=document.createElement("div");
 g.className="touchGlow";
 const x=e.touches?e.touches[0].clientX:e.clientX;
 const y=e.touches?e.touches[0].clientY:e.clientY;
 g.style.left=x+"px";g.style.top=y+"px";
 document.body.appendChild(g);
 setTimeout(()=>g.remove(),600);
}

/* FIREWORKS */
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;}
resize();addEventListener("resize",resize);
function rand(a,b){return Math.random()*(b-a)+a;}
let sparks=[];
(function loop(){
 ctx.fillStyle="rgba(0,0,0,.2)";
 ctx.fillRect(0,0,canvas.width,canvas.height);
 if(Math.random()<.05)sparks.push({x:rand(0,canvas.width),y:canvas.height,vy:rand(-8,-12),r:rand(2,4)});
 sparks.forEach((s,i)=>{
  s.y+=s.vy;
  ctx.fillStyle="hsl("+rand(0,360)+",100%,70%)";
  ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
  if(s.y<0)sparks.splice(i,1);
 });
 requestAnimationFrame(loop);
})();
