const b=document.querySelector('.menu'),n=document.querySelector('.nav');
if(b)b.addEventListener('click',()=>{n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));

const reason=document.querySelector('#contactReason'),resumeField=document.querySelector('#resumeField');
function syncResume(){if(!reason||!resumeField)return;resumeField.classList.toggle('show',reason.value==='Career opportunities')}
if(reason){reason.addEventListener('change',syncResume);syncResume()}

const alertForm=document.querySelector('#jobAlertForm');
if(alertForm){
  const email=document.querySelector('#alertEmail'),status=document.querySelector('#alertStatus');
  const saved=localStorage.getItem('woodWestJobAlertEmail');
  if(saved){email.value=saved;status.textContent=`Demo alert active for ${saved}. New-job emails would be sent here in production.`}
  alertForm.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem('woodWestJobAlertEmail',email.value);status.textContent=`Demo alert created for ${email.value}. Client preview: when a new job is published, the production system would automatically email this subscriber.`})
}

document.querySelectorAll('form:not(#jobAlertForm)').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Client demo: this submission is ready to connect to Wood West’s approved inbox/workflow in production.');}));
