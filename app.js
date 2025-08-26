const services = [
  {id:'ktp', title:'Perekaman KTP', desc:'Layanan perekaman KTP-el.'},
  {id:'kk', title:'Perubahan KK', desc:'Layanan perubahan data KK.'},
  {id:'domisili', title:'Surat Domisili', desc:'Keterangan domisili warga.'}
];

const newsData = [
  {title:'Pelayanan KTP Kolektif', date:'2025-08-15'},
  {title:'Penyaluran BLT Tahap III', date:'2025-08-10'}
];

const staffData = [
  {name:'Sutaryo', role:'Kepala Desa'},
  {name:'Rina Marlina', role:'Sekretaris Desa'}
];

const budgetData = [
  {program:'Infrastruktur', anggaran:350000000, realisasi:210000000},
  {program:'Pemberdayaan', anggaran:150000000, realisasi:80000000}
];

const eventsData = [
  {title:'Musyawarah Desa', date:'2025-09-10'},
  {title:'Posyandu Bulanan', date:'2025-09-15'}
];

function renderServices(){
  const wrap=document.getElementById('services');
  services.forEach(s=>{
    const div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<strong>${s.title}</strong><p>${s.desc}</p>`;
    wrap.appendChild(div);
  });
}

function renderNews(){
  const wrap=document.getElementById('news');
  newsData.forEach(n=>{
    const div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<strong>${n.title}</strong><br><small>${n.date}</small>`;
    wrap.appendChild(div);
  });
}

function renderStaff(){
  const wrap=document.getElementById('staff');
  staffData.forEach(s=>{
    const div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<strong>${s.name}</strong><br><small>${s.role}</small>`;
    wrap.appendChild(div);
  });
}

function renderBudget(){
  const wrap=document.getElementById('budget');
  wrap.innerHTML='<tr><th>Program</th><th>Anggaran</th><th>Realisasi</th></tr>';
  budgetData.forEach(b=>{
    wrap.innerHTML+=`<tr><td>${b.program}</td><td>${b.anggaran}</td><td>${b.realisasi}</td></tr>`;
  });
}

function renderEvents(){
  const wrap=document.getElementById('events');
  eventsData.forEach(e=>{
    const div=document.createElement('div');
    div.className='card';
    div.innerHTML=`<strong>${e.title}</strong><br><small>${e.date}</small>`;
    wrap.appendChild(div);
  });
}

renderServices();
renderNews();
renderStaff();
renderBudget();
renderEvents();
document.getElementById('year').textContent=new Date().getFullYear();