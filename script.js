const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'},{passive:true});
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});reveals.forEach(el=>observer.observe(el));}else reveals.forEach(el=>el.classList.add('visible'));
const lines=[
'Your smile has been reported for stealing my attention.',
'If being gorgeous was a full-time job, you would still be working overtime.',
'You are my favorite notification, even when my phone is on silent.',
'Are you a magician? Because the rest of the room disappears when I look at you.',
'I was going to play it cool, but then you smiled. So much for that plan.',
'You + me + snacks + absolutely no plans = my perfect date.',
'If I could bottle one feeling, it would be the peace I feel next to you.',
'You are proof that my heart has excellent taste.',
'My favorite view is not a place. It is you, looking happy.',
'I like you a latte. But I love you way more than coffee. ☕'
];
let lineIndex=-1;
document.getElementById('flirtBtn').addEventListener('click',()=>{lineIndex=(lineIndex+1)%lines.length;const el=document.getElementById('compliment');el.classList.remove('show');setTimeout(()=>{el.textContent=lines[lineIndex];el.classList.add('show')},120);});
const toast=document.getElementById('toast');let toastTimer;
function hearts(count=9){for(let i=0;i<count;i++){const h=document.createElement('span');h.className='floating-heart';h.textContent=['♡','♥','ღ'][Math.floor(Math.random()*3)];h.style.left=(Math.random()*100)+'vw';h.style.fontSize=(15+Math.random()*24)+'px';h.style.setProperty('--drift',((Math.random()-.5)*180)+'px');h.style.animationDelay=(Math.random()*.45)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),3100)}}
document.getElementById('heartButton').addEventListener('click',()=>{hearts(12);toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)});
document.getElementById('loveBtn').addEventListener('click',()=>{document.getElementById('finalMessage').classList.add('show');hearts(22);});
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()})}));
