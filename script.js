const $ = s => document.querySelector(s);

const cards = [
  ["Monday Morning Lectures","Why does this class even exist?","I wish I could attend just one more lecture."],
  ["Attendance","Sir, please mark me present.","Nobody will ever ask where we were."],
  ["Assignments","Another assignment? Seriously?","Remember when our biggest problem was a PDF submission?"],
  ["University Canteen","Same food again?","That terrible tea somehow tasted amazing."],
  ["Friends","Bro, stop annoying me.","I would give anything to hear that nonsense again."],
  ["Teachers","Sir, deadline extend kar dein please.","Those reminders and lectures were actually priceless."]
];
$('#cards').innerHTML = cards.map(c => `
<div class="card rv" tabindex="0"><div class="card-in">
<div class="face front"><h3>${c[0]}</h3><small>Today</small><p>${c[1]}</p></div>
<div class="face back"><h3>${c[0]}</h3><small>Future</small><p>${c[2]}</p></div>
</div></div>`).join('');
document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('click', () => c.classList.toggle('flip'));
  c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.classList.toggle('flip'); } });
});

const stats = [
  [1000,"+","Promises to Start Studying Tomorrow"],
  [500,"+","Assignments Started at the Last Minute"],
  [200,"+","Times We Said “This Semester I'll Be Serious.”"],
  [75,"%","Attendance: Our Greatest Enemy"],
  [99,"%","Confidence Before Exams"],
  [1,"%","Actual Preparation"]
];
$('#stats').innerHTML = stats.map(s => `<div class="stat rv"><b data-n="${s[0]}" data-s="${s[1]}">0${s[1]}</b>${s[2]}</div>`).join('');

const mems = [
  "One day, we'll miss waiting outside the classroom because the previous lecture hasn't finished.",
  "One day, we'll miss asking our friends for the assignment that we never intended to complete ourselves.",
  "One day, we'll miss the teacher saying: “This topic is very important for your exam.”",
  "One day, we'll miss those random conversations that had absolutely nothing to do with our degrees.",
  "One day, we'll miss the group chat that had 400 messages and zero decisions.",
  "One day, we'll miss the panic of a 9 AM quiz we heard about at 8:55.",
  "One day, we'll miss the friend who always said “bas 5 minute, aa raha hoon” from his bed.",
  "One day, we'll miss complaining about the Wi-Fi together, in perfect harmony.",
  "One day, we'll miss the teacher who gave one more chance, and pretended it was the last."
];
let last = -1;
$('#memBtn').addEventListener('click', () => {
  let i; do { i = Math.floor(Math.random() * mems.length); } while (i === last);
  last = i;
  const p = $('#memText');
  p.classList.add('out');
  setTimeout(() => { p.textContent = mems[i]; p.classList.remove('out'); }, 450);
});

const poems = [
  ["Assignments","Assignment ka bojh bhi kya khoob uthaya hai,<br>Har deadline pe naya bahana banaya hai.<br>Aaj jis PDF se jaan chhurate hain,<br>Kal kahenge, yaar woh waqt bhi kya suhana tha."],
  ["Attendance","Na lecture ka hosh tha, na attendance ka yaqeen,<br>Kabhi class mein mojood, kabhi khayalon mein kahin.<br>Aaj jo proxy ki dua maangte hain,<br>Kal inhi lamhon ko yaad kar ke muskurayenge."],
  ["Friends","Na jaane kal ye mehfil kahan sajegi,<br>Na jaane phir ye dosti kahan milegi.<br>Aaj jo dost roz dimagh khate hain,<br>Kal unki kami har khushi mein khalegi."],
  ["University Life","Kitne ajeeb hain ye university ke din,<br>Kabhi tension, kabhi hansi, kabhi exam ka din.<br>Aaj lagta hai bas jaldi khatam ho ye safar,<br>Kal shayad yahi ban jayega yaadon ka shehar."]
];
$('#poems').innerHTML = poems.map(p => `<div class="poem rv"><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join('');

const couplets = [
  "Exam se ek raat pehle jo ilm ka dariya beh nikla,<br>Subah paper dekha, to bas ek qatra bhi na nikla.",
  "Quiz ki khabar sunte hi dil ne ye sada di,<br>Kaash kal ki tarah aaj bhi class cancel ho jaye.",
  "Canteen ki chai mein na cheeni, na mohabbat thi,<br>Phir bhi dosto ke saath wohi sab se behtareen thi.",
  "Sir ne poocha sawal, to sab ne nazrein jhuka li,<br>Aisi ekjuti hamein group project mein bhi na mili.",
  "WhatsApp group mein sau messages aate hain roz,<br>Kaam ki baat sirf ek, baaqi sab maujood hain yoon hi.",
  "Teachers ki daant mein bhi chhupi thi ek dua,<br>Aaj samajh aya, woh humein sanwarna chahte the."
];
$('#couplets').innerHTML = couplets.map(c => `<p class="rv">${c}</p>`).join('');

const grid = [
  ["😂","Friends laughing during serious lectures","The silence made it ten times funnier."],
  ["⏰","The one friend who always arrives late","Somehow arrives just in time for the attendance."],
  ["💬","Group projects and WhatsApp discussions","Ek project, paanch hundred messages."],
  ["🍵","Random canteen conversations","Topic: everything. Conclusion: nothing."],
  ["🙋","Teachers asking when nobody is prepared","The collective art of avoiding eye contact."],
  ["📚","Last-minute exam preparation","Chapter 1 to 12 in one night, with 3 cups of chai."],
  ["⏳","Waiting for results","Refreshing the portal like it owes us money."],
  ["🎉","The excitement of cancelled classes","Best news since the invention of weekends."],
  ["❓","“Bhai, quiz hai aaj?”","The most asked question in university history."]
];
$('#grid').innerHTML = grid.map(g => `<div class="mem rv"><div class="e">${g[0]}</div><h3>${g[1]}</h3><p>${g[2]}</p></div>`).join('');

// Scroll reveal + counters + letter lines
const countUp = el => {
  const n = +el.dataset.n, s = el.dataset.s; let t0;
  const step = t => { t0 = t0 || t; const k = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(n * k) + s; if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
};
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  const b = e.target.querySelector('b[data-n]'); if (b) countUp(b);
  io.unobserve(e.target);
}), { threshold: .2 });
document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.12 + 's'; io.observe(el); });
document.querySelectorAll('.l').forEach((el, i) => { el.style.transitionDelay = '.2s'; io.observe(el); });

// Progress bar
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, { passive: true });

// Navigation
document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => $(b.dataset.go).scrollIntoView({ behavior: 'smooth' })));
$('#backBtn').addEventListener('click', () => { confetti(); $('#top').scrollIntoView({ behavior: 'smooth' }); });

// Presentation mode
addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.metaKey) document.body.classList.toggle('pmode');
});

// Confetti
const cv = $('#confetti'), cx = cv.getContext('2d'); let bits = [], run = false;
function size() { cv.width = innerWidth; cv.height = innerHeight; }
size(); addEventListener('resize', size);
function confetti() {
  const cols = ['#ff8a3d', '#e8b44c', '#f4ead5', '#4a5bd1'];
  for (let i = 0; i < 160; i++) bits.push({ x: innerWidth / 2, y: innerHeight / 2, vx: (Math.random() - .5) * 18, vy: Math.random() * -16 - 4, r: Math.random() * 8 + 4, c: cols[i % 4], a: Math.random() * 6 });
  if (!run) { run = true; loop(); }
}
function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  bits.forEach(b => { b.x += b.vx; b.y += b.vy; b.vy += .35; b.a += .2; cx.fillStyle = b.c; cx.save(); cx.translate(b.x, b.y); cx.rotate(b.a); cx.fillRect(-b.r / 2, -b.r / 4, b.r, b.r / 2); cx.restore(); });
  bits = bits.filter(b => b.y < cv.height + 20);
  if (bits.length) requestAnimationFrame(loop); else { run = false; cx.clearRect(0, 0, cv.width, cv.height); }
}
$('.hero-title').addEventListener('click', confetti);
$('#memBtn').addEventListener('dblclick', confetti);
