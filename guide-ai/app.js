/* ---------- tiny helpers ---------- */
const P={check:'<path d="M20 6 9 17l-5-5"/>',chev:'<path d="m6 9 6 6 6-6"/>',up:'<path d="m18 15-6-6-6 6"/>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
spark:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6"/>',edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',more:'<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
send:'<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',plus:'<path d="M12 5v14M5 12h14"/>',
trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="2"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',undo:'<path d="M3 7v6h6M21 17a9 9 0 0 0-15-6.7L3 13"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM17 21v-8H7v8M7 3v5h8"/>',help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>'};
const ic=(n,s=16)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const get=(o,p)=>p.split('.').reduce((a,k)=>a?.[k],o);
const set=(o,p,v)=>{const k=p.split('.');const l=k.pop();k.reduce((a,x)=>a[x],o)[l]=v};
const now=()=>new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
const announce=m=>{const a=document.getElementById('announce');if(a){a.textContent='';setTimeout(()=>a.textContent=m,50)}};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const fmt=n=>Number(n).toLocaleString('en-US');

/* ---------- content ---------- */
const SECTIONS=[
 {id:'comp',label:'Company',intro:"Let's set up your company. Upload your Memorandum of Association (MOA) and I'll fill in the details for you to check, or type them in."},
 {id:'acts',label:'Activities',intro:"Let's choose your business activities. Describe what the company will do and I'll match it to the official activity list."},
 {id:'cap',label:'Share capital',intro:"Let's set up your share capital: the authorised shares, currency, nominal value and share classes."},
 {id:'mem',label:'Members',intro:"Let's add your company members: directors, shareholders and any other roles. Upload a passport and I'll read the details."},
 {id:'alloc',label:'Allocation',intro:"Let's allocate shares among your shareholders: how many each person receives, and from which class."},
 {id:'fin',label:'Financial',intro:"The registry asks for your final 3-year financial forecast. Upload the document and I'll read the numbers for you to check."},
 {id:'off',label:'Office',intro:"Let's set up your office details."},
 {id:'nom',label:'UBO & nominees',intro:"Now the ultimate beneficial owners (UBOs): anyone who owns 25% or more of the company, or controls it in another way."},
 {id:'con',label:'Constitution',intro:"Finally, the constitution document."},
 {id:'rev',label:'Review & pay',intro:"Last step. Check everything, then pay the fees. Nothing is charged or sent until you confirm."}
];
const N=SECTIONS.length,REV=N-1;
const MILE={1:'Nice start. ',4:"You're halfway there. ",7:'Almost done. ',8:'Last section before review. '};
const CHIPS={
 0:['What makes a name acceptable?','Can I change it later?'],
 1:['What if my activity needs a licence?','What are activity restrictions?'],
 2:['What is authorised vs paid-up capital?','What are share classes?'],
 3:['What is a nominee director?','What is a beneficial owner?'],
 4:['How do I allocate shares?','Do all shares need to be allocated?'],
 5:['Do I need an accountant for this?','What if my numbers change?'],
 6:['What is a business centre?','Can I use my home address?'],
 7:['What is a UBO?','Why 25%?'],
 8:['What is a constitution?','Talk to a person'],
 9:['What happens after I submit?','Talk to a person']
};
const ANSWERS=[
 [/\bubo\b|ultimate|beneficial owner/i,"An ultimate beneficial owner (UBO) is a real person who owns 25% or more of the company, directly or through other companies, or controls it in another way. Registries record UBOs to keep ownership transparent.","Registry guidance · not legal advice"],
 [/25%|why 25/i,"25% is the common threshold used in anti-money-laundering rules. Below it, a person is usually not a beneficial owner unless they control the company in another way.","Registry guidance · not legal advice"],
 [/\bmoa\b|memorandum/i,"The Memorandum of Association sets out the company's name, its objects (what it will do), share capital and first shareholders. Upload it and I'll read those details for you to check.","Registry guidance"],
 [/foreign|100%|own all|ownership/i,"Many registries in the region allow 100% foreign ownership for these company types. The registry confirms it for your activities during review.","General guidance · not legal advice"],
 [/how long|timeline|take/i,"The registry usually reviews an application in 3–5 working days. If it's approved, you're invited to the licensing stage.","Registry guidance"],
 [/cost|fee|how much|price/i,"The application fee is USD 300, plus USD 50 for each business activity after the first, plus any business-centre lease. I show the exact total before you pay.","Registry fee schedule"],
 [/restriction|compliance/i,"Some activities carry restrictions on what the company may do, for example not selling hardware or not serving consumers directly. You read them and acknowledge them before continuing.","Registry guidance · not legal advice"],
 [/class/i,"Share classes let different owners hold different rights, for example voting or dividends. Most start-ups use one class.","Registry guidance · not legal advice"],
 [/allocat|all shares/i,"Allocation says who owns how many of the authorised shares. You don't have to allocate every share now, but you can't allocate more than you authorised.","Registry guidance · not legal advice"],
 [/why are you asking/i,"The registry must know who really owns and controls each company. Nominee arrangements need an extra declaration.","Registry guidance"],
 [/nominee/i,"A nominee director is someone appointed to act for the real owner. If you use one, you'll still need to declare who the real owner is.","Registry guidance · not legal advice"],
 [/beneficial/i,"A beneficial owner is anyone who ultimately owns or controls the company, even indirectly. The registry asks for them to keep ownership transparent.","Registry guidance · not legal advice"],
 [/authoris|paid/i,"Authorised capital is the maximum value of shares the company may issue. Paid-up capital is what shareholders have actually paid in. For a start-up they are often the same.","Registry guidance · not legal advice"],
 [/choose|should/i,"Many first-time founders start with 1,000 shares at 10 each. It's easy to split among co-founders and you can increase it later.","Common starting point · your call"],
 [/licen/i,"Some activities, such as financial services or education, need a licence before you can operate. I'll flag these when I suggest them, and you can still add them.","Registry guidance · not legal advice"],
 [/home|business centre|centre/i,"Home addresses are sometimes accepted, but a business centre keeps your personal address off the public record. It must be a physical address, not a P.O. box.","Registry guidance · not legal advice"],
 [/constitution/i,"It sets out how the company is run: who decides what, how shares move, how meetings work. The standard version suits most start-ups.","Registry guidance · not legal advice"],
 [/after|submit/i,"The registry reviews your application, usually in 3–5 working days. You'll be notified of any questions. Submitting locks the application, so edits then need a formal amendment.","Registry guidance"],
 [/\b(company )?name\b|change (it|the name)|change later/i,"Names must be unique, end with a company-type word like LLC or Ltd, and avoid restricted words. You can change it later through an amendment.","Registry guidance · not legal advice"],
 [/accountant/i,"Not required. Treat these as estimates. If your numbers change after incorporation, that's normal.","Registry guidance"],
 [/many/i,"There's no strict cap, but pick only activities you'll really carry out. Each one may affect licences and fees.","Registry guidance"]
];
const GROUPS={C12:'Computer Programming, IT Consultancy and Related Activities',C70:'Management Consultancy Activities',C46:'Wholesale Trade and Related Activities'};
const RESTR={
 it:["Unless otherwise permitted by the registry, a licensed firm that engages in IT consultancy may not:","(A) Sell or service any kind of hardware by way of business; or","(B) Provide business-to-consumer services."],
 fin:["Unless otherwise permitted by the registry, a licensed firm providing cybersecurity advice may not:","(A) Process or hold customer payment data; or","(B) Provide regulated financial services."],
 dr:["Unless otherwise permitted by the registry, a licensed firm providing disaster-recovery services may not host customer data outside approved locations."],
 lic:["This activity may need an additional licence before you can operate. The registry will tell you which one."],
 perm:["Importing or exporting regulated goods needs a separate permit."]
};
const SUGGEST={
 it:[{code:'6311-001',title:'Provision of infrastructure for hosting, data processing and related activities.',grp:'C12',match:61},
     {code:'6202-006',title:'Advising on IT networks.',grp:'C12',match:60},
     {code:'6202-001',title:'Planning and designing of computer systems (including hardware) and after-sale client services.',grp:'C12',match:59,restr:'it'},
     {code:'6202-007',title:'Providing non-financial technology (FinTech) related cybersecurity solutions and advising on cybersecurity.',grp:'C12',match:55,restr:'fin'},
     {code:'6209-001',title:'Computer disaster recovery.',grp:'C12',match:52,restr:'dr'},
     {code:'6202-002',title:'IT consultancy in relation to artificial intelligence, machine learning, foundation models and Internet of Things (IoT).',grp:'C12',match:50,restr:'it'}],
 con:[{code:'7020-001',title:'Management consulting services.',grp:'C70',match:62},
      {code:'7020-004',title:'Business and operations advisory.',grp:'C70',match:58},
      {code:'7020-009',title:'Training and coaching services.',grp:'C70',match:49,restr:'lic'}],
 trade:[{code:'4690-001',title:'General wholesale and trading.',grp:'C46',match:63},
        {code:'4790-002',title:'Online retail sales.',grp:'C46',match:54},
        {code:'5229-003',title:'Import and export support services.',grp:'C46',match:48,restr:'perm'}]
};
const ALLACTS=()=>{const m=new Map();Object.values(SUGGEST).flat().forEach(a=>m.set(a.code,a));return [...m.values()]};
function actResults(){const q=(S.q||'').toLowerCase().trim();const list=ALLACTS().filter(a=>!S.data.acts.some(x=>x.code===a.code)&&(!q||a.title.toLowerCase().includes(q)||a.code.includes(q)));return list.length?list.slice(0,6).map(a=>`<button type="button" class="choice" data-act="addCode" data-c="${a.code}"><span class="cbody"><b>${esc(a.title)}</b><small>${a.code} · ${esc(GROUPS[a.grp])}${a.restr?' · has restrictions':''}</small></span></button>`).join(''):'<div class="hint">No matching activities. Try another word.</div>'}
const wc=v=>String(v||'').trim()?String(v).trim().split(/\s+/).length:0;
const bizDesc=()=>{let d=S.data.desc.trim().replace(/[.\s]+$/,'');if(/^we\s+/i.test(d))d=d.replace(/^we\s+/i,'to ');else if(/^[A-Z][a-z]/.test(d))d=d[0].toLowerCase()+d.slice(1);return "The company's objective is "+d+". It is not allowed to engage in insurance or banking business."};
const actFee=()=>Math.max(0,S.data.acts.length-1)*50;
const needAck=()=>S.data.acts.some(a=>a.restr);
const CURRENCIES=[['USD','US dollar (USD)','$'],['EUR','Euro (EUR)','€'],['GBP','British pound (GBP)','£'],['AED','UAE dirham (AED)','']];
const classLabels=()=>Array.from({length:+S.data.sh.classes||1},(_,i)=>'Class '+'ABC'[i]);
const money=v=>(S.data.sh.cur||'USD')+' '+fmt(v||0);
const short=n=>{n=+n||0;return n>=1e6?(n/1e6).toFixed(n%1e6?1:0)+'M':n>=1e3?(n/1e3).toFixed(n%1e3?1:0)+'K':String(n)};
const yearVal=(base,g,y)=>Math.round((+base||0)*Math.pow(1+(+g||0)/100,y-1));
const bc=()=>S.data.off.type==='Business centre', sa=()=>S.data.off.type==='Standalone';
const RATE={'Hot desk':150,'Dedicated desk':450,'Private office':900};
const officePrice=()=>(RATE[S.data.off.space]||0)*(+S.data.off.size||0)*(+S.data.off.term||0);

/* ---------- state ---------- */
const fresh=()=>({started:false,gate:null,att:0,nudge:false,fb:null,cur:0,sub:0,editing:null,editSub:null,done:[],err:'',tmp:undefined,typing:false,askOpen:false,
 sug:null,pref:false,mode:'form',cqa:[],q:'',searchOpen:false,fu:null,prof:'ask',openR:null,compOpen:false,up:{},mp:'idle',pd:{},mi:0,ackErr:'',subm:null,pay:null,log:[],qa:[],locked:false,showSteps:false,
 data:{id:{name:'',email:'',phone:'',cc:'AE',code:'',verified:false},name:'',nameAr:'',desc:'',acts:[],sh:{count:'',cur:'',value:'',classes:''},fin:{has:'',self:'',fundOther:'',basis:'',fye:'',rev:'',cost:'',exp:'',emp:'',growth:'',table:null},mem:[],off:{type:'',provider:'',centre:'',space:'',size:'',term:'',loc:'',unit:''},con:'',nom:{ubo:'',uboName:'',uboWhy:'',real:'',for:''},moa:null,alloc:[],actAck:false,ack:false}});
const LS='guide.draft.v2';
let DRAFT=null;try{DRAFT=JSON.parse(localStorage.getItem(LS)||'null')}catch(e){}
let S=fresh();
let docMode='valid', payMode='approved', tok=0;
let render;
const log=(t)=>{S.log.unshift({t:now(),m:t})};

/* ---------- ONE QUESTION AT A TIME: flows ---------- */
const NAME_RULE=v=>{v=v.trim();if(!v)return 'Enter a company name to continue.';if(!/\b(LLC|Ltd|Limited)\.?$/i.test(v))return 'Names must end with LLC, Ltd or Limited. Try “'+v+' LLC”.';if(/northwind/i.test(v))return 'That name is already registered. Try “Northwind Labs LLC” or “Northwind Group LLC”.';return ''};
const REQ=m=>v=>String(v).trim()?'':m;
const NUM=m=>v=>(v!==''&&+v>=0)?'':m;
const NOTSURE=(v)=>['Not sure: use a typical estimate',v];
const remaining=k=>{const used=S.data.alloc.reduce((s,a,j)=>j===k?s:s+(+a.shares||0),0);return Math.max(0,(+S.data.sh.count||0)-used)};
function allocSteps(){
  const sh=S.data.mem.filter(m=>/hareholder/.test(m.role)),multi=(+S.data.sh.classes||1)>1,out=[];
  sh.forEach((m,k)=>{
    S.data.alloc[k]=S.data.alloc[k]||{shares:'',cls:''};S.data.alloc[k].name=m.name;if(!multi)S.data.alloc[k].cls='Class A';
    out.push({path:`alloc.${k}.shares`,type:'number',q:()=>`How many shares should ${m.name} receive? ${fmt(remaining(k))} of ${fmt(S.data.sh.count)} are still unallocated.`,label:`Shares for ${m.name}`,
      chips:()=>{const r=remaining(k);return [['All remaining ('+fmt(r)+')',String(r)],['Half of remaining',String(Math.floor(r/2))]].filter(c=>+c[1]>0)},
      validate:v=>!Number.isInteger(+v)||+v<1?'Enter a whole number of shares.':+v>remaining(k)?'Only '+fmt(remaining(k))+' shares are left to allocate.':'',fmt:v=>fmt(v)+' shares',row:m.name+': shares'});
    if(multi) out.push({path:`alloc.${k}.cls`,type:'choice',q:`Which share class are ${m.name}'s shares from?`,choices:()=>classLabels().map(c=>[c,c,'']),row:m.name+': class'});
  });
  return out;
}

/* ---------- company identity helpers (demo-level transliteration, always shown for checking) ---------- */
const AR_KNOWN={'meridian labs':'ميريديان لابز','meridian':'ميريديان'};
const AR_MAP={a:'ا',b:'ب',c:'ك',d:'د',e:'ي',f:'ف',g:'ج',h:'ه',i:'ي',j:'ج',k:'ك',l:'ل',m:'م',n:'ن',o:'و',p:'ب',q:'ق',r:'ر',s:'س',t:'ت',u:'و',v:'ف',w:'و',x:'كس',y:'ي',z:'ز'};
const entityOf=n=>/\bLLC\.?$/i.test(n.trim())?'LLC':/\b(Ltd|Limited)\.?$/i.test(n.trim())?'Limited':'';
const entityLong=e=>e==='LLC'?'Limited liability company (LLC)':e==='Limited'?'Private limited company':'';
function arabicName(n){const e=entityOf(n);let base=n.trim().replace(/\s*\b(LLC|Ltd|Limited)\.?$/i,'').trim();const k=base.toLowerCase();
  let ar=AR_KNOWN[k]||base.split(/\s+/).map(w=>[...w.toLowerCase()].map(c=>AR_MAP[c]||'').join('')).join(' ');
  return (ar+(e==='LLC'?' ذ.م.م':e==='Limited'?' المحدودة':'')).trim()}
const ROLES=[['Shareholder','Owns shares'],['Director','Runs the company'],['Secretary','Keeps the statutory records'],['Senior executive','Manages day-to-day operations'],['Agent','Files the application for someone else']];
const LOCS=[['Harbour Gate Tower','Harbour Gate Tower','Designated commercial building'],['Marina Business Park','Marina Business Park','Designated commercial building'],['Pearl Commercial Centre','Pearl Commercial Centre','Designated commercial building'],['West Bay Plaza','West Bay Plaza','Designated commercial building']];

function uboList(){const tot=+S.data.sh.count||0;const fromAlloc=S.data.alloc.filter(a=>tot&&(+a.shares/tot)>=.25).map(a=>({name:a.name,pct:Math.round(+a.shares/tot*100)}));
  if(fromAlloc.length) return fromAlloc;return (S.data.moa&&S.data.moa.holders)||[]}
const uboText=()=>{const u=uboList();return u.length?u.map(x=>`${x.name} (${x.pct}%)`).join(', '):'no one yet'};
const FLOW={
 comp:[
   {path:'name',type:'text',q:()=>S.prof==='read'?"I read this name from your MOA. Is it right?":"What would you like to call your company?",label:'Company name',ph:'e.g. Meridian Labs LLC',hint:'It must end with LLC, Ltd or Limited.',status:true,chars:100,validate:NAME_RULE,badge:()=>S.prof==='read'?'Read from your MOA':'',extra:()=>S.prof==='read'?'':'<button type="button" class="linkbtn" data-act="profUpload" style="align-self:flex-start;padding-left:0">Have your Memorandum of Association (MOA)? Upload it and I&rsquo;ll fill in the company details</button>',row:'Company name'},
   {path:'nameAr',type:'text',dir:'rtl',lang:'ar',q:()=>`Here's the Arabic name I'd register for “${S.data.name}”. Check it, or correct it.`,label:'Name in Arabic',prefill:()=>arabicName(S.data.name),badge:()=>'Translated by AI · please check',hint:()=>'The public register needs the name in Arabic too. Entity type: '+(entityLong(entityOf(S.data.name))||'not detected')+', detected from the name.',validate:v=>!v.trim()?'Enter the Arabic name.':!/[\u0600-\u06FF]/.test(v)?'Use Arabic letters for this name.':'',row:'Name in Arabic'}],
 acts:[{path:'desc',type:'textarea',q:()=>S.prof==='read'&&S.data.desc?"I also read the objects clause from your MOA. Edit it if it's not quite right.":"Describe what the company will do. A sentence or two is enough.",label:'Description of proposed activities',ph:'e.g. We build accounting software for small shops and sell it by subscription.',counter:2000,
   validate:v=>v.trim().length<12?'Tell me a little more. What do you sell, and to whom?':wc(v)>2000?'Please keep it under 2000 words.':'',badge:()=>S.prof==='read'?'Read from your MOA':'',row:'Business description'},{special:'sug'}],
 cap:[{special:'quick',key:'cap'},{path:'sh.count',type:'number',q:"How many shares will the company be authorised to issue?",label:'Authorised shares',chips:()=>[['100','100'],['1,000','1000'],['10,000','10000']],hint:'The maximum number of shares the company may ever issue.',validate:v=>(+v>=1&&Number.isInteger(+v))?'':'Enter a whole number of shares.',fmt:v=>fmt(v),row:'Authorised shares'},
      {path:'sh.cur',type:'choice',q:"Which currency should the share capital be in?",choices:CURRENCIES,row:'Currency'},
      {path:'sh.value',type:'number',q:()=>`What is the nominal value of each share, in ${S.data.sh.cur||'USD'}?`,label:'Nominal value per share',suffix:()=>S.data.sh.cur||'USD',chips:()=>[['1','1'],['10','10'],['100','100']],hint:'The face value of one share. 10 is a common starting point.',validate:v=>+v>0?'':'Enter a value greater than zero.',fmt:v=>(S.data.sh.cur||'USD')+' '+v,row:'Nominal value'},
      {path:'sh.classes',type:'choice',q:"How many share classes will there be?",choices:[['1','1 class','All shares carry the same rights',true],['2','2 classes','For example ordinary and preference shares'],['3','3 classes','Separate rights for each class']],fmt:v=>v+(v==='1'?' class':' classes'),row:'Share classes'}],
 mem:[{special:'mem'}],
 alloc:()=>[{special:'quick',key:'alloc'},...allocSteps()],
 fin:[{when:()=>S.data.fin.has!=='no',special:'finup'},
      {when:()=>S.data.fin.has==='no',special:'quick',key:'fin'},
      {path:'fin.fye',when:()=>S.data.fin.has==='no',type:'choice',q:"When does your financial year end?",choices:[['31 March','31 March',''],['30 June','30 June',''],['31 December','31 December','']],row:'Financial year end'},
      {when:()=>S.data.fin.has==='no',path:'fin.rev',type:'number',q:"A rough guess is fine. How much revenue do you expect in year 1?",label:'Year 1 revenue',suffix:()=>S.data.sh.cur||'USD',chips:()=>[['25,000','25000'],['100,000','100000'],['500,000','500000'],NOTSURE('50000')],validate:NUM('Enter your best estimate, even a rough one.'),fmt:v=>money(v),row:'Year 1 revenue'},
      {when:()=>S.data.fin.has==='no',path:'fin.cost',type:'number',q:"And your direct costs in year 1?",label:'Year 1 cost',suffix:()=>S.data.sh.cur||'USD',chips:()=>[['20,000','20000'],['80,000','80000'],['400,000','400000'],NOTSURE('30000')],validate:NUM('Enter your best estimate, even a rough one.'),fmt:v=>money(v),row:'Year 1 cost'},
      {when:()=>S.data.fin.has==='no',path:'fin.exp',type:'number',q:"And operating expenses, such as rent and salaries?",label:'Year 1 operating expenses',suffix:()=>S.data.sh.cur||'USD',chips:()=>[['10,000','10000'],['40,000','40000'],['200,000','200000'],NOTSURE('12000')],validate:NUM('Enter your best estimate, even a rough one.'),fmt:v=>money(v),row:'Year 1 expenses'},
      {when:()=>S.data.fin.has==='no',path:'fin.emp',type:'choice',q:"How many employees do you expect in year 1?",choices:[['1–5','1–5 employees',''],['6–10','6–10 employees',''],['More than 10','More than 10 employees','']],row:'Employees'},
      {when:()=>S.data.fin.has==='no',path:'fin.growth',type:'choice',q:"How fast do you expect to grow each year? I'll use this to fill in years 2 and 3.",choices:[['25','About 25% a year','Steady'],['50','About 50% a year','Ambitious'],['100','About 100% a year','Fast growth']],fmt:v=>'About '+v+'% a year',row:'Yearly growth'},
      {when:()=>S.data.fin.has==='no',path:'fin.basis',type:'textarea',q:"Briefly, what are these numbers based on? For example signed clients, pricing or market size.",label:'Assumptions behind your projection',ph:'e.g. 10 clients at USD 1,000 a month in year 1, growing through referrals.',validate:v=>v.trim().length<20?'Please add a little more detail (at least 20 characters).':'',row:'Assumptions'},
      {path:'fin.self',type:'choice',q:"How will you fund the company?",choices:[['Self-funded','Self-funded','The owners provide the funds'],['Funded by a third party','Funded by a third party','Investors, a parent company or a loan'],['Other','Other','Tell me how in the next question']],row:'Funding'},
      {when:()=>S.data.fin.self==='Other',path:'fin.fundOther',type:'text',q:"How will the company be funded?",label:'Funding source',validate:REQ('Tell me how the company will be funded.'),row:'Funding details'}],
 off:[{special:'quick',key:'off'},{path:'off.type',type:'choice',q:"Is the office in a business centre, or will it be a standalone office?",choices:[['Business centre','In a business centre','A shared address managed by a provider'],['Standalone','My own office','In one of the designated commercial buildings']],row:'Office type'},
      {when:bc,path:'off.provider',type:'choice',q:"Which provider will you use?",choices:[['Harbour Offices LLC','Harbour Offices LLC',''],['Northgate Workspaces','Northgate Workspaces','']],row:'Provider'},
      {when:bc,path:'off.centre',type:'choice',q:"Which business centre?",choices:[['Commercial Plaza','Commercial Plaza',''],['Bayview Tower','Bayview Tower','']],row:'Business centre'},
      {when:bc,path:'off.space',type:'choice',q:"What kind of office space?",choices:[['Dedicated desk','Dedicated desk','Your own desk, from USD 450 per seat a month'],['Private office','Private office','A lockable room, from USD 900 per seat a month'],['Hot desk','Hot desk','Shared, first come first served, USD 150 per seat a month']],row:'Office space'},
      {when:bc,path:'off.size',type:'choice',q:"How many seats do you need?",choices:[['1','1 seat',''],['2','2 seats',''],['4','4 seats','']],fmt:v=>v+(v==='1'?' seat':' seats'),row:'Office size'},
      {when:bc,path:'off.term',type:'choice',q:"How long is the lease term?",choices:[['1','One month',''],['3','Three months',''],['6','Six months',''],['12','Twelve months','']],hint:'',fmt:v=>v==='1'?'One month':v+' months',row:'Lease term'},
      {when:bc,path:'off.leaseOk',type:'choice',q:"The lease starts on the day the company is incorporated, and the business-centre fee is paid when you submit. Is that OK?",choices:[['yes','Yes, that works','']],fmt:()=>'Agreed',row:'Lease terms'},
      {when:sa,path:'off.loc',type:'choice',q:"Registered offices must be in a designated commercial building. Which one is yours in?",choices:LOCS,row:'Building'},
      {when:sa,path:'off.unit',type:'text',q:"Which unit or office number?",label:'Unit or office number',ph:'e.g. Office 1204',hint:"It must be a physical office, not a P.O. box.",validate:v=>!v.trim()?'Enter the unit or office number.':/p\.?\s?o\.?\s?box/i.test(v)?"P.O. boxes aren't accepted.":'',row:'Unit'}],
 nom:[{path:'nom.ubo',type:'choice',q:()=>{const u=uboList();return u.length?`From your share allocation, ${u.map(x=>`${x.name} owns ${x.pct}%`).join(' and ')}, so I've listed ${u.length===1?'them':'them'} as the ultimate beneficial owner${u.length===1?'':'s'}. Is that complete?`:'Who are the ultimate beneficial owners?'},choices:[['confirm',"Yes, that's complete",'No one else owns or controls the company'],['other','Someone else also owns or controls it','I will ask who']],fmt:v=>v==='confirm'?'Yes, complete':'Someone else as well',row:'UBOs confirmed'},
      {when:()=>S.data.nom.ubo==='other',path:'nom.uboName',type:'text',q:"Who else owns or controls the company, directly or indirectly?",label:'Full name',validate:REQ('Enter their full name.'),row:'Other UBO'},
      {when:()=>S.data.nom.ubo==='other',path:'nom.uboWhy',type:'choice',q:()=>`How does ${S.data.nom.uboName||'this person'} own or control it?`,choices:[['Owns 25% or more indirectly','Owns 25% or more indirectly','For example through another company'],['Controls the company','Controls the company','For example appoints the board or holds voting rights'],['Other','Another way','The registry may ask for details']],row:'How they control it'},
      {path:'nom.real',type:'choice',q:"Are all your shareholders and directors the actual individuals who own and control their roles?",choices:[['yes','Yes, they are','No nominee arrangements'],['no','No, there are nominees','Someone acts on behalf of another person']],fmt:v=>v==='yes'?'Yes, they are':'No, there are nominees',row:'Real owners'},
      {when:()=>S.data.nom.real==='no',path:'nom.for',type:'text',q:"Thanks for saying so. A nominee declaration will be needed later. Who is the nominee acting for?",label:'Name of the real owner',validate:REQ('Enter a name.'),row:'Nominee acts for'}],
 con:[{path:'con',type:'choice',q:"Will the company use standard articles of association?",choices:[['standard',"Yes, use the standard articles",'Ready to use. Suits most start-ups',true],['custom',"No, I'll upload my own",'Reviewed manually, so it takes longer']],fmt:v=>v==='standard'?'Yes, standard articles':"No, I'll upload my own",row:'Articles'}],
 rev:[{special:'rev'}]
};
const stepsOf=id=>{const f=FLOW[id];return (typeof f==='function'?f():f).filter(s=>!s.when||s.when())};
const chOf=st=>typeof st.choices==='function'?st.choices():st.choices;
const stepAns=(st,v)=>st.type==='choice'?(chOf(st).find(c=>c[0]===v)?.[1]||v):(st.fmt?st.fmt(v):v);
const secId=i=>SECTIONS[i].id;
const curStep=()=>{if(!S.started)return null;const i=S.editing??S.cur;const j=S.editing!=null?S.editSub:S.sub;return j==null?null:stepsOf(secId(i))[j]};

/* ---------- GATE: who is starting? one question at a time ---------- */
const maskEmail=e=>{const [u,d]=(e||'').split('@');return u?u[0]+'•••@'+d:''};
const firstName=()=>(S.data.id.name||'').trim().split(/\s+/)[0]||'there';
const COUNTRIES=[['AE','🇦🇪','971','United Arab Emirates'],['US','🇺🇸','1','United States'],['GB','🇬🇧','44','United Kingdom'],['IN','🇮🇳','91','India'],['PK','🇵🇰','92','Pakistan'],['BD','🇧🇩','880','Bangladesh'],['SA','🇸🇦','966','Saudi Arabia'],['QA','🇶🇦','974','Qatar'],['EG','🇪🇬','20','Egypt'],['SG','🇸🇬','65','Singapore'],['AU','🇦🇺','61','Australia'],['CA','🇨🇦','1','Canada'],['DE','🇩🇪','49','Germany'],['FR','🇫🇷','33','France']];
const country=()=>COUNTRIES.find(c=>c[0]===(S.data.id.cc||'AE'))||COUNTRIES[0];
const GATE=[
 {path:'id.name',type:'text',auto:'name',q:"Before we start, what's your name?",label:'Full name',hint:'So I know what to call you.',validate:v=>v.trim().length<2?'Please enter your name.':'',fmt:v=>v},
 {path:'id.email',type:'email',auto:'email',q:()=>`Nice to meet you, ${firstName()}. What's your email address?`,label:'Email address',hint:"I'll send a code to confirm it, and a link to finish later if you leave.",validate:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())?'':'That email doesn\'t look right. Try name@example.com.',fmt:v=>v},
 {path:'id.phone',type:'tel',auto:'tel-national',q:"And a phone number? The registry only calls about urgent problems with your application.",label:'Phone number',ph:'50 123 4567',hint:'Choose your country, then type the number.',validate:v=>{const d=v.replace(/\D/g,'');return d.length>=6&&d.length<=12?'':'Enter your number without the country code (6–12 digits).'},fmt:v=>country()[1]+' +'+country()[2]+' '+v},
 {path:'id.code',type:'text',auto:'one-time-code',q:()=>`I've sent a 6-digit code to ${maskEmail(S.data.id.email)}. Enter it to confirm it's you.`,label:'6-digit code',hint:'Prototype: the code is 123456.',extra:'<button type="button" class="linkbtn" data-act="resend">Send a new code</button>',
  validate:v=>{if(S.att>=3)return 'Too many attempts. Send a new code to try again.';if(v.trim()==='123456')return '';S.att++;return S.att>=3?'Too many attempts. Send a new code to try again.':"That code doesn't match. Check your email and try again."},fmt:()=>'••••••'},
 {path:'id.consent',type:'choice',q:"Last thing. I'll save your answers to this email and use your details only for this application.",choices:[['agree','I agree. Start my application','Privacy notice applies. You can delete your draft any time.']],fmt:()=>'I agree'}
];
function gateView(){
  let h=bubble("Hi, I'm Guide.ai. I'll save your progress as we go, so you can leave and come back any time.");
  for(let j=0;j<S.gate;j++){const st=GATE[j];h+=bubble(typeof st.q==='function'?st.q():st.q);if(st.path!=='id.consent')h+=userBubble(st.fmt(get(S.data,st.path)))}
  if(S.typing) h+=typingBubble();
  else{const st=GATE[S.gate];h+=bubble(typeof st.q==='function'?st.q():st.q)+tray(st,'Before we start · '+(S.gate+1)+' of '+GATE.length,false)}
  return `<div class="feed" id="feed" role="log" aria-label="Conversation" aria-live="off">${h}</div><div class="composer"><div class="fine">${ic('shield',11)} Your details are only used for this application.</div></div>`;
}
function gateAnswer(val){
  const st=GATE[S.gate];let v=val!==undefined?val:(S.tmp!==undefined?S.tmp:(get(S.data,st.path)||''));v=String(v);
  const e=st.validate?st.validate(v):'';
  if(e){S.err=e;S.tmp=undefined;render();return}
  S.err='';S.tmp=undefined;set(S.data,st.path,v);
  if(st.path==='id.code'){S.data.id.verified=true;S.att=0;log('Email verified')}
  S.gate++;
  if(S.gate>=GATE.length){beginApp();return}
  typingThen();
}
function beginApp(){S.gate=null;S.started=true;S.cur=0;S.sub=0;S.err='';log('Started application for '+S.data.id.name);render();announce('Verified. Question 1: What would you like to call your company?')}

/* ---------- feed ---------- */
function bubble(t,src){return `<div class="msg"><div class="av">${ic('spark',14)}</div><div class="bubble">${t}${src?`<span class="src">${ic('info',11)} ${esc(src)}</span>`:''}</div></div>`}
const userBubble=t=>`<div class="msg user"><div class="bubble">${esc(t)}</div></div>`;
const typingBubble=()=>`<div class="msg"><div class="av">${ic('spark',14)}</div><div class="bubble" aria-label="Guide.ai is typing"><span class="typing"><i></i><i></i><i></i></span></div></div>`;
function feed(){
  let h='';const last=S.locked?REV:S.cur;
  for(let i=0;i<=last;i++){
    const done=S.done.includes(i),editing=S.editing===i;
    if(editing) h+=editBlock(i);
    else if(done) h+=summaryCard(i);
    else if(i===S.cur) h+=currentBlock(i);
    S.qa.filter(q=>q.sec===i&&(!done||editing)).forEach(q=>{h+=userBubble(q.q)+bubble(q.a,q.src)});
    if(i===REV&&S.locked) h+=bubble(`You're all set, ${esc(firstName())}. Your application is with the registry. I'll email you when it's reviewed.`)+outcome();
  }
  if(S.nudge&&!S.locked) h+=bubble("Still there? Everything you've answered is saved. Want a link to finish later?")+`<div class="chips" style="margin-left:32px"><button class="chip" data-act="nudgeMail">Email me a link</button><button class="chip" data-act="nudgeOk">I'm still here</button></div>`;
  return h;
}
function currentBlock(i){
  const id=secId(i),steps=stepsOf(id);let h=(S.sub===0||id==='mem')?bubble((MILE[i]||'')+SECTIONS[i].intro):'';
  if(id==='mem') return h+memBlock();
  if(id==='comp'&&S.prof==='reading') return h+profBlock();
  for(let j=0;j<S.sub;j++){const st=steps[j];if(!st||st.special)continue;h+=bubble(typeof st.q==='function'?st.q():st.q)+userBubble(stepAns(st,get(S.data,st.path)))}
  if(S.typing) return h+typingBubble();
  const st=steps[S.sub];
  if(!st){ if(!S.auto){S.auto=true;setTimeout(()=>{S.auto=false;completeSection(i)},0)} return h }
  if(st.special==='quick') return h+quickBlock(id);
  if(st.special==='finup') return h+finupBlock();
  if(st.special==='sug') return h+sugBlock();
  if(st.special==='rev') return h+(S.pay&&!S.locked&&!S.subm?'':bubble('Here is everything. Take a look before you pay and submit.'))+reviewCard();
  const qt=steps.filter(x=>!x.special).length,qn=steps.slice(0,S.sub+1).filter(x=>!x.special).length;
  return h+bubble(typeof st.q==='function'?st.q():st.q)+tray(st,qt>1?`Question ${qn} of ${qt}`:'',false);
}
/* Edit: pick ONE thing to change */
function editBlock(i){
  const id=secId(i),steps=stepsOf(id);
  if(id==='mem') return `<article class="card active" aria-label="Edit people">${hdr(i)}<span class="badge warn">Editing</span></header><div class="body">${personRows()}${memTrayHtml()}</div></article>`;
  if(S.editSub!=null){const st=steps[S.editSub];if(!st){S.editSub=null;return ''}if(st.special==='sug') return `<article class="card active">${hdr(i)}<span class="badge warn">Editing</span></header><div class="body">${sugBody()}</div></article>`;
    return bubble('Change '+esc(st.row||st.label||'this')+':')+tray(st,'',true)}
  const rows=steps.map((st,j)=>({st,j})).filter(({st})=>!st.special||st.special==='sug');
  return `<article class="card active" aria-label="Edit ${esc(SECTIONS[i].label)}">${hdr(i)}<span class="badge warn">Editing</span></header><div class="body"><div class="hint">Pick what you'd like to change.</div>
   ${rows.map(({st,j})=>st.special==='sug'?`<div class="person"><div class="m"><b>Activities</b><small>${S.data.acts.map(a=>esc(a.title)).join(', ')||'None yet'}</small></div><button class="btn sm" data-act="chg" data-j="${j}">Change</button></div>`:`<div class="person"><div class="m"><b>${esc(st.row||st.label)}</b><small>${esc(stepAns(st,get(S.data,st.path))||'Not provided')}</small></div><button class="btn sm" data-act="chg" data-j="${j}">Change</button></div>`).join('')}</div>
   <div class="foot"><button class="btn primary" data-act="doneEdit">Done</button></div></article>`;
}
/* The one-question tray */
function tray(st,count,editMode){
  const cur=S.tmp!==undefined?S.tmp:(st.path?(get(S.data,st.path)||(st.prefill?st.prefill():'')):'');
  const chips=st.chips?st.chips():null,hint=typeof st.hint==='function'?st.hint():st.hint,suf=typeof st.suffix==='function'?st.suffix():st.suffix,badge=st.badge?st.badge():'';
  const qtxt=typeof st.q==='function'?st.q():st.q;
  let ctl='';
  if(st.type==='choice') ctl=`<div class="choices" role="group" aria-label="${esc(qtxt)}">${chOf(st).map((c,ci)=>{const sug=S.pref&&st.path&&get(S.data,st.path)===c[0];const rec=c[3]===true;return `<button type="button" class="choice ${rec||sug?'rec':''}" data-act="pick" data-v="${esc(c[0])}"><span class="key" aria-hidden="true">${ci+1}</span><span class="cbody"><b>${esc(c[1])}${rec?' <span class="badge ai">Recommended</span>':sug?' <span class="badge ai">Suggested</span>':''}</b>${c[2]?`<small>${esc(c[2])}</small>`:''}</span></button>`}).join('')}</div>`;
  else{
    const inp=st.type==='textarea'?`<textarea id="ans" data-t aria-describedby="err-a hint-a" placeholder="${esc(st.ph||'')}" ${S.err?'aria-invalid="true"':''}>${esc(cur)}</textarea>`:`<input id="ans" data-t type="${st.type==='number'?'number':(st.type==='email'||st.type==='tel')?st.type:st.type==='tel2'?'tel':'text'}" ${st.type==='number'?'inputmode="decimal" min="0"':''} ${st.auto?`autocomplete="${st.auto}"`:'autocomplete="off"'} ${st.dir?`dir="${st.dir}"`:''} ${st.lang?`lang="${st.lang}"`:''} ${st.chars?`maxlength="${st.chars}"`:''} aria-describedby="err-a hint-a" value="${esc(cur)}" placeholder="${esc(st.ph||'')}" ${S.err?'aria-invalid="true"':''}>`;
    const pre=st.type==='tel'?`<select data-cc aria-label="Country code">${COUNTRIES.map(c=>`<option value="${c[0]}" ${c[0]===country()[0]?'selected':''}>${c[1]} +${c[2]}</option>`).join('')}</select>`:'';
    ctl=`${badge?`<span class="badge ai" style="align-self:flex-start">${ic('spark',11)} ${esc(badge)}</span>`:''}<div class="f ${S.err?'invalid':''}"><label class="fl" for="ans">${esc(st.label)}</label>${pre?`<div class="phone">${pre}${inp}</div>`:suf?`<span class="suffix">${inp}<span>${esc(suf)}</span></span>`:inp}</div>
     ${chips?`<div class="chips" role="group" aria-label="Quick answers">${chips.map(c=>`<button type="button" class="chip" data-act="pick" data-v="${esc(c[1])}">${esc(c[0])}</button>`).join('')}</div>`:''}
     ${st.status?`<div class="stat" id="nameStat" aria-live="polite"></div>`:''}${st.counter?`<div class="hint" id="wc">${wc(cur)} / ${fmt(st.counter)} words</div>`:''}${st.chars?`<div class="hint" id="cc">${String(cur).length} / ${st.chars} characters</div>`:''}${hint?`<div class="hint" id="hint-a">${esc(hint)}</div>`:''}${typeof st.extra==='function'?st.extra():(st.extra||'')}`}
  const err=`<div class="err" role="alert" id="err-a">${S.err?ic('alert',13)+'<span>'+esc(S.err)+'</span>':''}</div>`;
  return `<form class="tray card active" data-form="answer" aria-label="Your answer" novalidate>${count?`<div class="qcount">${count}</div>`:''}${ctl}${err}${st.type==='choice'?(editMode?`<div class="foot" style="padding:0;border:0"><button type="button" class="btn ghost" data-act="cancelChg">Cancel</button></div>`:''):`<div class="foot" style="padding:0;border:0;margin-top:2px">${editMode?'<button type="button" class="btn ghost" data-act="cancelChg">Cancel</button>':''}<button class="btn primary">${editMode?'Save':'Continue'} ${ic('send',14)}</button></div>`}</form>`;
}
/* Company profile upload (optional) */
function profBlock(){
  const p=S.prof||'ask';
  if(p==='reading') return bubble('Reading your Memorandum of Association…')+`<article class="card active"><div class="body"><div class="docrow"><span class="ico">${ic('file')}</span><div style="flex:1"><b>memorandum-of-association.pdf</b><ul class="plan" style="margin-top:6px" aria-live="polite">${['Uploaded','Reading the MOA','Extracting name, objects, capital and shareholders'].map((t,i)=>`<li class="${i<S.up.step?'done':i===S.up.step?'now':''}">${i<S.up.step?ic('check',14):i===S.up.step?'<span class="spin"></span>':'<span style="width:14px"></span>'}${t}</li>`).join('')}</ul></div><button class="btn sm" data-act="stopProf">${ic('stop',12)} Stop</button></div></div></article>`;
  return bubble('Do you have a company profile document? It is optional. If you upload one, I will fill in the company name and description for you to check.')+`<form class="tray card active" onsubmit="return false"><div class="choices" role="group" aria-label="Company profile"><button type="button" class="choice" data-act="pick" data-v="upload"><b>Upload a company profile</b><small>PDF, JPG or PNG, up to 10 MB</small></button><button type="button" class="choice" data-act="pick" data-v="type"><b>No, I'll type it in</b><small>It only takes a moment</small></button></div></form>`;
}
function hdr(i,ok){return `<header><span class="num ${ok?'ok':''}">${ok?ic('check',13):i+1}</span><h3>${esc(SECTIONS[i].label)}</h3>`}

/* ---------- activities: AI recommended, one at a time, with compliance ---------- */
function sugBlock(){return bubble(S.sug==='loading'?"Let me match that to the official activity list…":S.sug&&S.sug.ask?"I need a little more to go on.":"Here is what I'd recommend, one at a time, best match first. Add the ones that fit.")+`<article class="card active" aria-label="Activity suggestions"><div class="body">${sugBody()}</div></article>`}
const restrList=k=>`<ul class="restr">${RESTR[k].map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`;
function selectedPanel(){
  const d=S.data,groups={};d.acts.forEach(a=>(groups[a.grp]=groups[a.grp]||[]).push(a));
  let h=`<div class="selhead"><b>Selected activities</b><span class="badge ok">${ic('check',11)} ${d.acts.length} selected</span></div>`;
  h+=Object.keys(groups).map(g=>`<div class="grp"><div class="grphead"><b>${esc(GROUPS[g])}</b><span class="code">${g}</span></div>${groups[g].map(a=>`<div class="selrow"><span>${esc(a.title)}</span>${a.restr?`<span class="warnic" title="Has restrictions" role="img" aria-label="Has restrictions">${ic('alert',14)}</span>`:''}<span class="code">${a.code}</span><button type="button" class="iconbtn" data-act="rmAct" data-c="${a.code}" aria-label="Remove ${esc(a.title)}">${ic('x',14)}</button></div>`).join('')}</div>`).join('');
  h+=`<div class="fee"><span class="hint">1st activity free · USD 50 each additional</span><div class="feebox">Activity fee <b>USD ${actFee()}</b></div></div>`;
  h+=`<div class="bizdesc"><div class="fl">Business description</div><p>${esc(bizDesc())}</p></div>`;
  if(needAck()){
    const ack=d.actAck;
    h+=`<div class="callout bad compl">${ic('alert')}<div><b>Compliance review is required.</b> ${ack?`<span class="badge ok">${ic('check',11)} Acknowledged</span>`:''}<div style="margin-top:2px">${ack?'You have acknowledged the compliance requirements.':'Some of your activities come with restrictions. Read them, then acknowledge.'}</div>
      <button type="button" class="linkbtn" data-act="toggleC" aria-expanded="${!!S.compOpen}">${S.compOpen?'Hide':'View'} requirements</button>
      ${S.compOpen?d.acts.filter(a=>a.restr).map(a=>`<div class="compitem"><b>${esc(a.title)}</b>${restrList(a.restr)}</div>`).join(''):''}
      <label class="checkrow" style="margin-top:10px"><input type="checkbox" data-act="ack" ${ack?'checked':''}><span>I confirm the company will not carry out any designated non-financial business or profession (DNFBP) activities under the registry's anti-money-laundering rules, and I've read the restrictions above.</span></label></div></div>`;
  }
  return h;
}
function sugBody(){
  const sg=S.sug,d=S.data;let h='';
  if(sg==='loading') return `<ul class="plan" aria-live="polite"><li class="done">${ic('check',14)} Read your description</li><li class="now"><span class="spin"></span> Matching against the official activity list</li><li>Ranking by relevance</li></ul><div class="skeleton"></div><button class="btn sm" data-act="stopSug" style="align-self:flex-start">${ic('stop',12)} Stop</button>`;
  if(sg&&sg.ask) return `<div class="callout warn">${ic('info')}<div>${esc(sg.ask)}</div></div><div class="chips"><button class="chip" data-act="fillDesc" data-t="We build software and sell subscriptions to small businesses">Software subscriptions</button><button class="chip" data-act="fillDesc" data-t="We provide consulting and advisory to companies">Consulting</button><button class="chip" data-act="fillDesc" data-t="We import and trade goods wholesale">Trading goods</button></div><button class="btn sm ghost" data-act="rewrite" style="align-self:flex-start">Rewrite my description</button>`;
  if(sg&&sg.items){
    const s=sg.items[sg.i];
    h+=`<div class="aihead"><span class="badge ai">${ic('spark',11)} AI recommended</span><span class="hint">Based on your business description</span></div>`;
    if(s){h+=`<div class="sug"><div class="t"><div class="qcount">Suggestion ${sg.i+1} of ${sg.items.length}</div><button type="button" class="iconbtn" data-act="skipAct" aria-label="Not relevant, skip">${ic('x',14)}</button></div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="badge ok">${s.match}% match</span><span class="code">${s.code}</span></div>
      <b>${esc(s.title)}</b><div class="why">${esc(GROUPS[s.grp])}</div>
      ${s.restr?`<div><button type="button" class="linkbtn" data-act="toggleR" aria-expanded="${S.openR===s.code}" style="padding-left:0">${ic('alert',13)} View restrictions ${ic(S.openR===s.code?'up':'chev',12)}</button>${S.openR===s.code?restrList(s.restr):''}</div>`:''}
      <div class="acts"><button type="button" class="btn sm primary" data-act="addAct">${ic('plus',12)} Add</button>${sg.items.length-sg.i>=2?`<button type="button" class="btn sm" data-act="addTop">Add top ${Math.min(3,sg.items.length-sg.i)}</button>`:''}<button type="button" class="btn sm" data-act="skipAct">Not relevant</button></div></div>`}
    else h+=d.acts.length?`<div class="callout ok">${ic('check')}<div><b>That's all I have.</b> You've added ${d.acts.length}.</div></div>`:`<div class="callout warn">${ic('info')}<div>You haven't added any activity yet. At least one is needed.</div></div><div class="chips"><button class="btn sm" data-act="rewrite">Describe it differently</button><button class="btn sm ghost" data-act="suggest">Show suggestions again</button></div>`;
  }
  h+=`<div><button type="button" class="linkbtn" data-act="searchActs" aria-expanded="${S.searchOpen}" style="padding-left:0">${ic('plus',13)} ${S.searchOpen?'Hide search':'Search all activities'}</button>${S.searchOpen?`<div class="f" style="margin-top:6px"><label class="sr" for="actq">Search activities</label><input type="text" id="actq" data-s placeholder="Search by name or code" value="${esc(S.q)}" autocomplete="off"></div><div class="choices" id="actResults" style="margin-top:8px">${actResults()}</div>`:''}</div>`;
  if(d.acts.length) h+=selectedPanel();
  else if(sg&&sg.items) h+=`<div class="hint">No activities selected yet. Add a suggestion or search the full list.</div>`;
  if(S.err) h+=`<div class="err" role="alert">${ic('alert',13)}<span>${esc(S.err)}</span></div>`;
  if(d.acts.length) h+=`<div class="foot" style="padding:0;border:0">${sg&&sg.items&&sg.items[sg.i]?`<button type="button" class="btn ghost" data-act="stopAdding">That's enough</button>`:`<button type="button" class="btn ghost" data-act="suggest">Suggest again</button>`}<button type="button" class="btn primary" data-act="sugDone">${S.editing!=null?'Done':'Continue'} ${ic('send',14)}</button></div>`;
  return h;
}

/* ---------- people: one prompt at a time ---------- */
const MK=[['name','Full name',"What's their full name, as shown on the passport?"],['nat','Nationality','And their nationality?'],['dob','Date of birth','Date of birth?'],['pn','Passport number',"What's the passport number?"],['exp','Passport expiry date','When does the passport expire?']];
function personRows(){const m=S.data.mem;return m.length?`<div style="display:flex;flex-direction:column;gap:8px">${m.map((p,i)=>`<div class="person"><div class="avatar">${esc(p.name[0]||'?')}</div><div class="m"><b>${esc(p.name)}</b><small>${esc(p.role)}${p.res?' · '+esc(p.res):''}${p.behalf?' · for a '+esc(p.behalf.toLowerCase()):''}</small></div><button class="iconbtn" data-act="rmMem" data-i="${i}" aria-label="Remove ${esc(p.name)}">${ic('trash')}</button></div>`).join('')}</div>`:''}
function memBlock(){const rows=personRows();return (rows?`<article class="card summary" aria-label="People added"><div class="body" style="padding-top:var(--s3)">${rows}</div></article>`:'')+memPrompt()}
function memPrompt(){
  if(S.typing) return typingBubble();
  const p=S.mp,pd=S.pd;let q='',t='';
  if(p==='idle') q=(!S.data.mem.length&&S.data.moa)?`Your MOA lists <b>${esc(S.data.moa.holders.map(h=>h.name+' ('+h.pct+'% of shares)').join(', '))}</b>. Upload their passport and I'll add the details.`:S.data.mem.length?"Who's next? Upload their passport and I'll read it.":"Let's start with one person. Upload their passport and I'll read the details for you.";
  else if(p==='reading') q='Reading the passport…';
  else if(p==='rejected') q="I couldn't use that passport.";
  else if(p==='pn') q=`I read: <b>${esc(pd.name)}</b>, ${esc(pd.nat)}, born ${esc(pd.dob)}, passport valid to ${esc(pd.exp)}.<br>One check: the passport number was blurry. I read it as <b>${esc(pd.pn)}</b>. If it's right, pick their role to add them.`;
  else if(p==='pnFix') q='No problem. What should the passport number be?';
  else if(p==='roles') q=`Which roles will ${esc((pd.name||'this person').split(' ')[0])} hold? Pick all that apply.`;
  else if(p==='email') q=`What's ${esc((pd.name||'their').split(' ')[0])}'s email address? The registry uses it for official notices.`;
  else if(p==='phone') q='And a phone number, with the country code?';
  else if(p==='res') q=`Does ${esc((pd.name||'this person').split(' ')[0])} live in the country where the company will be registered?`;
  else if(p==='behalf') q='As an agent, on whose behalf are you completing this application?';
  else if(p==='proof') q='Agents need proof of appointment. Upload a board resolution or an authorisation letter.';
  else if(p==='role') q=`What is ${esc(pd.name.split(' ')[0]||'this person')}'s role in the company?`;
  else if(p==='more') q=S.editing!=null?'Add anyone else?':`${esc(S.data.mem.at(-1)?.name||'They')} is added. Anyone else?`;
  else if(p.startsWith('m_')) q=MK[+p.slice(2)][2];
  return bubble(q)+memTrayHtml();
}
function memTrayHtml(){const h=memTrayInner();return h+(['pn','pnFix','role','roles','email','phone','res','behalf','proof'].includes(S.mp)||String(S.mp).startsWith('m_')?`<button class="linkbtn" data-act="cancelUp" style="margin-left:32px">Cancel this person</button>`:'')}
function memTrayInner(){
  const p=S.mp,pd=S.pd;const fakeSt={type:'text',label:'',validate:null};
  const form=(st,count)=>tray(st,count||'',false);
  const err=S.err?`<div class="err" role="alert">${ic('alert',13)}<span>${esc(S.err)}</span></div>`:'';
  if(p==='idle'||!p) return `<article class="card active"><div class="body">${S.data.mem.length?'':`<div class="callout warn">${ic('info')}<span>Every company needs at least one shareholder and one director. One person can hold both roles.</span></div>`}<div class="drop"><div>${ic('upload',24)}</div><b>Upload a passport</b><span class="hint">PDF or photo · up to 10 MB</span><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:6px"><button class="btn primary sm" data-act="upload">Choose file</button><button class="btn sm ghost" data-act="manual">Type details instead</button></div></div>${S.data.mem.length&&S.editing==null?`<button class="btn sm" data-act="memDone" style="align-self:flex-start">That's everyone, continue</button>`:''}${S.editing!=null?`<button class="btn sm primary" data-act="doneEdit" style="align-self:flex-start">Done</button>`:''}${err}</div></article>`;
  if(p==='reading') return `<article class="card active"><div class="body"><div class="docrow"><span class="ico">${ic('file')}</span><div style="flex:1"><b>passport-scan.pdf</b><ul class="plan" style="margin-top:6px" aria-live="polite">${['Uploaded','Reading document','Matching fields'].map((t,i)=>`<li class="${i<S.up.step?'done':i===S.up.step?'now':''}">${i<S.up.step?ic('check',14):i===S.up.step?'<span class="spin"></span>':'<span style="width:14px"></span>'}${t}</li>`).join('')}</ul></div><button class="btn sm" data-act="stopUp">${ic('stop',12)} Stop</button></div></div></article>`;
  if(p==='rejected') return `<article class="card active"><div class="body"><div class="callout bad">${ic('alert')}<div><b>It expired on 12 Mar 2024.</b><br>Registries need a passport valid for at least 6 more months.<ul><li>Nothing from this file was saved.</li><li>Your other answers are untouched.</li></ul></div></div><div class="chips"><button class="btn sm primary" data-act="upload">Upload a different one</button><button class="btn sm" data-act="manual">Type details instead</button><button class="btn sm ghost" data-act="human">Talk to a person</button></div></div></article>`;
  if(p==='pn') return form({type:'choice',q:'Is that right?',choices:[['yes:Director & Shareholder','Yes, director and shareholder','Most founders are both',S.data.mem.length===0],['yes:Director','Yes, director only','Runs the company'],['yes:Shareholder','Yes, shareholder only','Owns shares'],['yes:other','Yes, with other roles','Secretary, senior executive or agent'],['no','No, let me fix the number','Then I will ask about their role']]});
  if(p==='roles') return `<form class="tray card active" data-form="roles" novalidate aria-label="Roles"><div class="qcount">Pick all that apply</div><div class="choices" role="group" aria-label="Roles">${ROLES.map(r=>`<label class="choice"><input type="checkbox" name="role" value="${r[0]}" style="width:18px;height:18px;accent-color:var(--brand)"><span class="cbody"><b>${r[0]}</b><small>${r[1]}</small></span></label>`).join('')}</div>${err}<div class="foot" style="padding:0;border:0"><button class="btn primary">Continue ${ic('send',14)}</button></div></form>`;
  const me=pd.name&&S.data.id.name&&pd.name.toLowerCase().includes(S.data.id.name.toLowerCase().split(' ')[0]);
  if(p==='email') return form({type:'email',q:'',label:'Email address',auto:'off',ph:'name@example.com',chips:me?()=>[['Use my email ('+maskEmail(S.data.id.email)+')',S.data.id.email]]:null,validate:null});
  if(p==='phone') return form({type:'tel2',q:'',label:'Phone number, with country code',ph:'+971 50 123 4567',chips:me?()=>[['Use my number',(('+'+country()[2])+' '+S.data.id.phone)]]:null,validate:null});
  if(p==='res') return form({type:'choice',q:'Resident?',choices:[['Resident','Yes, they live there',''],['Non-resident','No, they live abroad','']]});
  if(p==='behalf') return form({type:'choice',q:'On whose behalf?',choices:[['Proposed shareholder','A proposed shareholder',''],['Proposed director','A proposed director',''],['Proposed secretary','A proposed secretary','']]});
  if(p==='proof') return `<article class="card active"><div class="body"><div class="drop"><div>${ic('upload',24)}</div><b>Upload appointment proof</b><span class="hint">A board resolution or authorisation letter · PDF, JPG or PNG</span><div style="margin-top:6px"><button class="btn primary sm" data-act="proofUp">Choose file</button></div></div>${err}</div></article>`;
  if(p==='pnFix') return form({type:'text',q:'',label:'Passport number',validate:null});
  if(p==='role') return form({type:'choice',q:'Role',choices:[['Director','Director','Runs the company'],['Shareholder','Shareholder','Owns shares'],['Director & shareholder','Both','Runs it and owns shares']]});
  if(p==='more') return form({type:'choice',q:'More people?',choices:[['more','Add another person','Upload or type another'],['done',S.editing!=null?'Done':"That's everyone",S.editing!=null?'Back to summary':'Continue to the next step']]});
  if(p.startsWith('m_')){const k=+p.slice(2);return form({type:'text',q:'',label:MK[k][1],ph:k===2||k===4?'e.g. 14 Aug 1991':'',validate:null},`Detail ${k+1} of 5`)}
  return '';
}

/* ---------- payment: the agent prepares the invoice, you confirm, nothing is charged until the cancel window passes ---------- */
const REG_FEE=300;
function invoice(){const L=[['Application fee',REG_FEE,'Fixed registry fee']];
  if(S.data.acts.length) L.push([`Business activities (${S.data.acts.length})`,actFee(),'1st activity free, USD 50 each additional']);
  if(bc()&&officePrice()) L.push(['Business-centre lease',officePrice(),`${S.data.off.space} · ${S.data.off.size} seat(s) · ${S.data.off.term==='1'?'1 month':S.data.off.term+' months'}`]);
  return {lines:L,total:L.reduce((a,b)=>a+b[1],0)}}
const usd=n=>'USD '+fmt(n);
function invoiceHtml(){const v=invoice();return `<dl class="rows inv" style="padding:0">${v.lines.map(l=>`<dt>${esc(l[0])}<small>${esc(l[2])}</small></dt><dd>${usd(l[1])}</dd>`).join('')}<dt class="tot">Total due</dt><dd class="tot">${usd(v.total)}</dd></dl>`}
function payCard(){
  const p=S.pay,v=invoice(),err=p.err?`<div class="err" role="alert">${ic('alert',13)}<span>${esc(p.err)}</span></div>`:'';
  const head=`<div class="aihead"><span class="badge ai">${ic('spark',11)} Invoice prepared by Guide.ai</span><span class="hint">From your activities and office choice</span></div>`;
  if(p.st==='methods') return bubble(`I've added up your fees: <b>${usd(v.total)}</b>. Each line says where it comes from. How would you like to pay?`)+`<article class="card active" aria-label="Payment"><div class="body">${head}${invoiceHtml()}
    <div class="choices" role="group" aria-label="Payment method">
      <button type="button" class="choice rec" data-act="payM" data-v="card"><span class="key">1</span><span class="cbody"><b>Pay by card <span class="badge ai">Fastest</span></b><small>Secure checkout. Your card is held, then charged when the application is sent</small></span></button>
      <button type="button" class="choice" data-act="payM" data-v="bank"><span class="key">2</span><span class="cbody"><b>Bank transfer</b><small>Takes 1–2 working days. The review starts once the money arrives</small></span></button>
      <button type="button" class="choice" data-act="payM" data-v="later"><span class="key">3</span><span class="cbody"><b>Pay later in the portal</b><small>Everything stays saved. It can't be submitted until it's paid</small></span></button></div>
    <button type="button" class="linkbtn" data-act="payBack" style="align-self:flex-start;padding-left:0">${ic('undo',13)} Back to review</button></div></article>`;
  if(p.st==='card') return bubble('Here is the secure checkout. I never see or store your card details.')+`<article class="card active pay" aria-label="Secure checkout"><div class="body">
    <div class="paytop">${ic('lock',14)}<b>Secure checkout</b><span class="hint">Provided by the payment partner</span></div>
    <div class="callout warn" style="padding:8px 10px">${ic('info')}<span>Prototype test mode. No real money moves.</span></div>
    <label class="choice" style="cursor:default"><input type="radio" checked style="width:18px;height:18px;accent-color:var(--brand)"><span class="cbody"><b>Visa •••• 4242</b><small>Test card saved with the payment partner · expires 12/29</small></span></label>
    <dl class="rows" style="padding:0"><dt>Paying</dt><dd>Business registry (test)</dd><dt>Amount</dt><dd><b>${usd(v.total)}</b></dd><dt>Charged</dt><dd>Only after the 5-second cancel window</dd></dl>${err}
    <div class="foot" style="padding:0;border:0"><button type="button" class="btn ghost" data-act="payM" data-v="methods">Back</button><button type="button" class="btn primary" data-act="payCard">${ic('lock',13)} Pay ${usd(v.total)}</button></div></div></article>`;
  if(p.st==='verify') return bubble('Your bank wants to confirm it is you. It sent a code to your phone ending 4567.')+`<form class="tray card active" data-form="payotp" novalidate aria-label="Bank verification"><div class="paytop">${ic('shield',14)}<b>Bank verification</b><span class="hint">3-D Secure</span></div><div class="f ${p.err?'invalid':''}"><label class="fl" for="payotp">6-digit code from your bank</label><input id="payotp" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" ${p.err?'aria-invalid="true"':''}></div><div class="hint">Prototype: the code is 123456.</div>${err}<div class="foot" style="padding:0;border:0"><button type="button" class="btn ghost" data-act="payM" data-v="card">Back</button><button class="btn primary">Confirm payment</button></div></form>`;
  if(p.st==='processing') return bubble('Authorising your payment…')+`<article class="card active"><div class="body"><ul class="plan" aria-live="polite"><li class="done">${ic('check',14)} Code confirmed</li><li class="now"><span class="spin"></span> Authorising ${usd(v.total)} with your bank</li><li>Holding the funds until submission</li></ul></div></article>`;
  if(p.st==='declined') return bubble("Your bank declined the payment.")+`<article class="card active"><div class="body"><div class="callout bad">${ic('alert')}<div><b>Payment declined by your bank.</b><br>Reason given: insufficient funds or a card limit.<ul><li>Nothing was charged.</li><li>Your application is saved and unchanged.</li></ul></div></div>
    <div class="chips"><button class="btn sm primary" data-act="payM" data-v="card">Try the card again</button><button class="btn sm" data-act="payM" data-v="bank">Pay by bank transfer</button><button class="btn sm ghost" data-act="human">Talk to a person</button></div></div></article>`;
  if(p.st==='bank') return bubble('Use these details for the transfer. Include the reference so the registry can match it.')+`<article class="card active" aria-label="Bank transfer"><div class="body"><div class="paytop">${ic('file',14)}<b>Bank transfer details</b><span class="hint">Test details</span></div>
    <dl class="rows" style="padding:0"><dt>Beneficiary</dt><dd>Business Registry Payments (test)</dd><dt>IBAN</dt><dd style="font-variant-numeric:tabular-nums">XX00 TEST 0000 0000 0000 000</dd><dt>Reference</dt><dd><b>INC-2026-48217</b></dd><dt>Amount</dt><dd><b>${usd(v.total)}</b></dd></dl>
    <div class="callout warn" style="padding:8px 10px">${ic('clock')}<span>I'll send your application now, marked as awaiting payment. The registry starts its review once the transfer arrives, usually in 1–2 working days.</span></div>
    <div class="foot" style="padding:0;border:0"><button type="button" class="btn ghost" data-act="payM" data-v="methods">Back</button><button type="button" class="btn primary" data-act="payBank">I've made the transfer</button></div></div></article>`;
  if(p.st==='later') return bubble("No problem. Everything is saved.")+`<article class="card active"><div class="body"><div class="callout warn">${ic('info')}<span><b>Fees are due on submission.</b> Your application can't be sent until ${usd(v.total)} is paid. Pay any time from the portal, or come back here.</span></div>
    <div class="chips"><button class="btn sm primary" data-act="payM" data-v="methods">Back to payment options</button><button class="btn sm" data-act="save">Save &amp; exit</button></div></div></article>`;
  return '';
}
function startSubmit(){
  const card=S.pay&&S.pay.method==='card';
  S.subm={left:5};log(card?'Payment held · submission started (5s cancel window)':'Submission started (5s cancel window)');render();announce('Submitting in 5 seconds. Activate Cancel to stop.');
  const t=setInterval(()=>{if(!S.subm){clearInterval(t);return}S.subm.left--;if(S.subm.left<=0){clearInterval(t);S.subm=null;S.locked=true;S.done.push(REV);S.cur=REV;
    if(card){S.pay.paid=true;S.pay.receipt='RCPT-2026-07731';log('Charged '+usd(invoice().total)+' · receipt RCPT-2026-07731')}
    log('Application submitted · INC-2026-48217');render();announce('Application submitted. Reference INC-2026-48217.')}else render()},1000);
}

function reviewCard(){
  const rows=Array.from({length:REV},(_,i)=>i),ready=rows.every(i=>S.done.includes(i));
  if(S.subm){const s=S.subm;return `<article class="card active"><div class="body"><div class="callout warn">${ic('clock')}<div><b>${S.pay&&S.pay.method==='card'?'Submitting and charging':'Submitting'} in ${s.left}s</b><br>You can still cancel. ${S.pay&&S.pay.method==='card'?'Your card is only held, not charged.':'Nothing has been sent.'}</div></div><ul class="plan" aria-live="polite"><li class="done">${ic('check',14)} Checked every section</li><li class="${s.left>0?'now':'done'}">${s.left>0?'<span class="spin"></span>':ic('check',14)} Waiting out the cancel window</li><li>${S.pay&&S.pay.method==='card'?'Charging '+usd(invoice().total)+' and sending to the registry':'Locking application and sending to the registry'}</li></ul><button class="btn" data-act="cancelSub">${ic('x',14)} Cancel ${S.pay&&S.pay.method==='card'?'payment and submission':'submission'}</button></div></article>`}
  if(S.pay&&!S.locked) return payCard();
  const fee=actFee()+(bc()?officePrice():0);
  return `<article class="card active" aria-label="Review and submit"><div class="body"><div class="callout ${ready?'ok':'warn'}">${ic(ready?'check':'alert')}<span>${ready?`All ${REV} sections are complete.`:`${rows.filter(i=>!S.done.includes(i)).length} section${rows.filter(i=>!S.done.includes(i)).length===1?' is':'s are'} still incomplete. Finish them before submitting.`}</span></div>
   <dl class="rows" style="padding:0">${rows.map(i=>`<dt>${esc(SECTIONS[i].label)}</dt><dd>${S.done.includes(i)?ic('check',13)+' '+shortSum(i)+' <button class="linkbtn" data-act="edit" data-i="${i}">Edit</button>':`<span style="color:var(--text-3)">Incomplete</span> <button class="linkbtn" data-act="fin" data-i="${i}">Finish</button>`}</dd>`).join('')}</dl>
   <div class="callout warn">${ic('info')}<span><b>Fees due on submission: ${usd(invoice().total)}.</b> I'll show each line before you pay.</span></div>
   <div class="callout warn">${ic('shield')}<span><b>This sends your application to the registry.</b> It then locks. Later changes need a formal amendment.</span></div>
   <label class="checkrow"><input type="checkbox" data-k="ack" ${S.data.ack?'checked':''} aria-describedby="err-ack"><span>I confirm the details are true and I'm authorised to submit them.</span></label><div class="err" role="alert" id="err-ack">${S.ackErr?ic('alert',13)+'<span>'+esc(S.ackErr)+'</span>':''}</div></div>
   <div class="foot"><button class="btn primary" data-act="submit" ${ready?'':'disabled'}>Continue to payment ${ic('send',14)}</button></div></article>`;
}
const reviewBody=()=>'';


/* ---------- shell ---------- */
function renderTop(){
  const total=SECTIONS.length, n=S.done.length, pct=Math.round(n/total*100);
  const mins=Math.max(1,Math.round((total-n)*0.6));
  $('#top').innerHTML=`
   <div class="top-row">
     <div class="logo">${ic('spark',16)}</div>
     <div class="title">Guide<span class="dotai">.ai</span><small>${S.started?(S.locked?'Application submitted':'Saved automatically · '+now()):'Incorporation assistant'}</small></div>
     <button class="iconbtn" data-act="menu" aria-label="More options" aria-haspopup="menu">${ic('more')}</button><button class="iconbtn" data-act="closeModal" aria-label="Close assistant">${ic('x')}</button>
   </div>
   <div class="mtabs" role="tablist" aria-label="Assistant mode"><button role="tab" aria-selected="${S.mode!=='consult'}" data-act="mode" data-v="form">${ic('list',14)} Form assistant</button><button role="tab" aria-selected="${S.mode==='consult'}" data-act="mode" data-v="consult">${ic('help',14)} Consulting</button></div>
   ${S.mode==='consult'?'':S.started?`<button class="meter" data-act="steps" aria-expanded="${S.showSteps}" aria-controls="stepper">
      <span class="txt"><b>${S.locked?'Complete':'Step '+(Math.min(S.cur,total-1)+1)+' of '+total}</b> · ${esc(SECTIONS[Math.min(S.cur,total-1)].label)}${S.locked?'':' · about '+mins+' min left'}</span><span class="chev">${ic(S.showSteps?'up':'chev')}</span></button>
     <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Application progress"><i style="width:${S.locked?100:pct}%"></i></div>
     <ol class="stepper ${S.showSteps?'open':''}" id="stepper">${SECTIONS.map((s,i)=>{
       const d=S.done.includes(i), c=i===S.cur&&!S.locked, reach=d||i<=S.cur;
       return `<li><button data-act="goto" data-i="${i}" ${c?'aria-current="step"':''} ${reach&&!S.locked?'':'disabled'}><span class="dot ${d?'done':c?'now':''}">${d?ic('check',12):i+1}</span>${esc(s.label)}<span class="state">${d?(S.locked?'Locked':'Done · Edit'):c?'In progress':'Upcoming'}</span></button></li>`}).join('')}</ol>`:S.gate!=null?`<div class="meter" style="margin-top:var(--s3)"><span class="txt"><b>Before we start</b> · question ${S.gate+1} of ${GATE.length}</span></div><div class="bar" role="progressbar" aria-valuenow="${S.gate}" aria-valuemin="0" aria-valuemax="${GATE.length}" aria-label="Setup progress"><i style="width:${Math.round(S.gate/GATE.length*100)}%"></i></div>`:''}`;
}

function welcome(){
  if(DRAFT&&!DRAFT.locked){const n=DRAFT.done.length,c=SECTIONS[Math.min(DRAFT.cur,REV)].label,f=(DRAFT.data.id.name||'').split(' ')[0]||'back';
   return `<div class="welcome"><div><span class="badge ok">${ic('save',12)} Draft saved</span></div><h2>Welcome back, ${esc(f)}.</h2>
   <p style="color:var(--text-2)">You've finished ${n} of ${N} steps. You're on <b>${esc(c)}</b>. About ${Math.max(1,Math.round((N-n)*0.6))} minutes left.</p>
   <div class="bar" aria-hidden="true"><i style="width:${Math.round(n/N*100)}%"></i></div>
   <button class="btn primary" data-act="resume" style="min-height:44px">Continue where I left off</button>
   <button class="btn ghost" data-act="startNew">Start a new application instead</button></div>`}
  return `<div class="welcome">
  <div><span class="badge ai">${ic('spark',12)} AI assistant</span></div>
  <h2>Let's set up your company, one question at a time.</h2>
  <p style="color:var(--text-2)">I'll ask one question at a time. About 5 minutes. Your progress saves automatically, and you can leave and come back.</p>
  <div class="box"><h4>I can</h4><div class="cap">
    <div>${ic('upload')}<span>Read your passport or papers and fill in the details for you to check</span></div>
    <div>${ic('spark')}<span>Suggest the right business activities from a plain description</span></div>
    <div>${ic('help')}<span>Explain legal terms in plain language</span></div></div></div>
  <div class="box"><h4>I can't</h4><div class="cap">
    <div>${ic('shield')}<span>Give legal advice, or submit anything without your confirmation</span></div>
    <div>${ic('user')}<span>Approve the application. A registry officer does that</span></div></div></div>
  <p style="color:var(--text-2);font-size:var(--fs-sm)">Once the registry approves it, you'll be invited to the next stage by email.</p>
  <button class="btn primary" data-act="start" style="min-height:44px">${ic('spark',14)} Continue with AI help</button>
  <button class="btn" data-act="manualForm" style="min-height:44px">I'll fill in the form myself</button>
  <p class="fine">AI can make mistakes, so check anything important before you confirm. Your documents are used only for this application.</p>
</div>`}

const row=(k,v)=>`<dt>${esc(k)}</dt><dd>${v||'<span style="color:var(--text-3)">Not provided</span>'}</dd>`;
function summaryCard(i){
  const id=SECTIONS[i].id;
  return `<article class="card summary" aria-label="${esc(SECTIONS[i].label)} summary">${hdr(i,true)}${S.locked?`<span class="badge">${ic('lock',11)} Locked</span>`:`<button class="linkbtn" data-act="edit" data-i="${i}" aria-label="Edit ${esc(SECTIONS[i].label)}">${ic('edit',13)} Edit</button>`}</header>
   <dl class="rows">${SUMMARY[id]()}</dl></article>`;
}

const SUMMARY={
 comp:()=>row('Company name',esc(S.data.name)+(/LLC|Ltd|Limited/i.test(S.data.name)?' <span class="badge">'+esc((S.data.name.match(/LLC|Ltd|Limited/i)||[''])[0].toUpperCase())+'</span>':''))+row('Name in Arabic','<span dir="rtl" lang="ar">'+esc(S.data.nameAr)+'</span>')+row('Entity type',esc(entityLong(entityOf(S.data.name)))),
 acts:()=>{const g={};S.data.acts.forEach(a=>(g[a.grp]=g[a.grp]||[]).push(a));return row('Activities',Object.keys(g).map(k=>'<b>'+esc(GROUPS[k])+'</b><br>'+g[k].map(a=>esc(a.title)+' <span style="color:var(--text-3)">('+a.code+')</span>'+(a.restr?' ⚠':'')).join('<br>')).join('<br><br>'))+row('Business description',esc(bizDesc()))+row('Activity fee','USD '+actFee())+(needAck()?row('Compliance',S.data.actAck?'Acknowledged':'Not acknowledged'):'')},
 cap:()=>{const d=S.data.sh;return row('Authorised shares',fmt(d.count))+row('Currency',esc(d.cur))+row('Nominal value',esc(d.cur+' '+d.value))+row('Share classes',esc(d.classes))+row('Total capital',esc(d.cur+' '+fmt(d.count*d.value)))},
 mem:()=>S.data.mem.map(m=>row(m.role,esc(m.name)+(m.res?' · '+esc(m.res):'')+(m.email?'<br><small style="color:var(--text-3)">'+esc(m.email)+' · '+esc(m.phone)+'</small>':'')+(m.proof?'<br><small style="color:var(--text-3)">Appointment proof on file</small>':''))).join(''),
 alloc:()=>S.data.alloc.map(a=>row(a.name,fmt(a.shares)+' shares · '+esc(a.cls))).join(''),
 fin:()=>{const f=S.data.fin;return row('Funding',esc(f.self)+(f.fundOther?' · '+esc(f.fundOther):''))+row('Financial year end',esc(f.fye))+(f.table?f.table.map(t=>row('Year '+t.y,'Rev '+short(t.rev)+' · Cost '+short(t.cost)+' · Exp '+short(t.exp)+' · '+t.emp+' staff')).join('')+row('Forecast document','financial-forecast.xlsx · uploaded'):[1,2,3].map(y=>row('Year '+y,'Rev '+short(yearVal(f.rev,f.growth,y))+' · Cost '+short(yearVal(f.cost,f.growth,y))+' · Exp '+short(yearVal(f.exp,f.growth,y)))).join('')+row('Employees, year 1',esc(f.emp))+(f.basis?row('Assumptions',esc(f.basis)):'')+row('Forecast document','Drafted by Guide.ai from your answers'))},
 off:()=>{const o=S.data.off;return o.type==='Business centre'?row('Office type','Business centre')+row('Provider',esc(o.provider))+row('Business centre',esc(o.centre))+row('Office space',esc(o.space))+row('Size',esc(o.size)+' seat(s)')+row('Lease term',esc(o.term==='1'?'One month':o.term+' months')+'<br><small style="color:var(--text-3)">Starts on the incorporation date</small>')+row('Price','USD '+fmt(officePrice())+'<br><small style="color:var(--text-3)">The business-centre fee is paid when you submit.</small>'):row('Office type','My own office')+row('Building',esc(o.loc))+row('Unit',esc(o.unit))},
 nom:()=>row('UBOs',esc(uboText())+(S.data.nom.uboName?'<br>'+esc(S.data.nom.uboName)+' · '+esc(S.data.nom.uboWhy):''))+row('Real owners',S.data.nom.real==='yes'?'All are the real owners':'There are nominees')+(S.data.nom.for?row('Acts for',esc(S.data.nom.for)):''),
 con:()=>row('Articles',S.data.con==='standard'?'Standard articles':'My own (upload later)'),
 rev:()=>row('Status','Submitted')
};
const shortSum=i=>({0:()=>esc(S.data.name),1:()=>S.data.acts.length+' activit'+(S.data.acts.length===1?'y':'ies'),2:()=>esc(S.data.sh.cur)+' '+fmt(S.data.sh.count*S.data.sh.value),3:()=>S.data.mem.length+' '+(S.data.mem.length===1?'person':'people'),4:()=>S.data.alloc.length+' allocation'+(S.data.alloc.length===1?'':'s'),5:()=>'Year 1 rev '+short(S.data.fin.rev),6:()=>esc(S.data.off.type),7:()=>(uboList().length+(S.data.nom.uboName?1:0))+' UBO'+((uboList().length+(S.data.nom.uboName?1:0))===1?'':'s')+(S.data.nom.real==='yes'?' · no nominees':' · nominees declared'),8:()=>S.data.con==='standard'?'Standard':'Custom'}[i]());

function outcome(){return `<section class="outcome" aria-label="Submission outcome"><h3>${ic('check',20)} Application submitted</h3>
  <dl><dt>Reference</dt><dd><b>INC-2026-48217</b></dd><dt>Company</dt><dd>${esc(S.data.name)}</dd><dt>Status</dt><dd>${S.pay&&S.pay.pending?'Submitted, awaiting payment':'Under review'}</dd><dt>Confirmation</dt><dd>Sent to ${esc(maskEmail(S.data.id.email))}</dd><dt>Payment</dt><dd>${S.pay&&S.pay.paid?'Paid '+usd(invoice().total)+' · Visa •••• 4242 · '+S.pay.receipt:S.pay&&S.pay.pending?'Awaiting your bank transfer of '+usd(invoice().total):usd(invoice().total)}</dd></dl>
  <div><div class="fl" style="margin-bottom:8px">What happens next</div><ol class="next">
   <li class="done"><b>Today</b> Application received and locked</li><li><b>Days 1–3</b> The registry reviews your application</li><li><b>If approved</b> You're invited to the next stage by email</li></ol></div>
  <div class="chips"><button class="btn sm" data-act="toast" data-m="Opening your application PDF…">${ic('file',12)} View application</button>${S.pay&&S.pay.paid?`<button class="btn sm" data-act="toast" data-m="Downloading receipt RCPT-2026-07731…">${ic('file',12)} Receipt</button>`:''}<button class="btn sm" data-act="log">${ic('list',12)} Activity log</button><button class="btn sm ghost" data-act="human">Contact support</button></div>
  <div role="group" aria-label="How was it?" class="fb">${S.fb?`<span class="hint">${ic('check',12)} Thanks for the feedback.</span>`:`<span class="hint">How was it?</span><button class="chip" data-act="fb" data-v="easy">Easy</button><button class="chip" data-act="fb" data-v="ok">Okay</button><button class="chip" data-act="fb" data-v="hard">Hard</button>`}</div></section>`}


/* ---------- composer: quiet by default ---------- */
function composer(){
  if(S.locked) return `<div class="composer"><div class="closebar"><button class="btn primary" data-act="forceClose">Close</button><button class="btn" data-act="startNew">Start a new application</button></div></div>`;
  const ch=(CHIPS[Math.min(S.cur,REV)]||[]).slice(0,2).map(c=>`<button class="chip" data-act="ask" data-q="${esc(c)}">${esc(c)}</button>`).join('');
  return `<div class="composer"><div class="helprow"><span class="hint">Need help?</span><div class="chips">${ch}</div></div>
   ${S.askOpen?`<form class="cin" data-form="ask"><label class="sr" for="q">Ask Guide.ai a question</label><input id="q" type="text" placeholder="Ask about this step…" autocomplete="off"><button aria-label="Send">${ic('send',16)}</button></form>`:`<button class="linkbtn" data-act="askOpen" style="align-self:flex-start">${ic('help',14)} Ask something else</button>`}</div>`;
}
function renderMain(){
  if(S.mode==='consult'){ $('#main').innerHTML=consultView(); const f=$('#feed'); if(f) f.scrollTop=f.scrollHeight; return }
  if(!S.started){ if(S.gate!=null){const pv=$('#feed')?.scrollTop;$('#main').innerHTML=gateView();const f=$('#feed');if(f)f.scrollTop=1e6;const a=$('#ans');if(a&&!S.typing&&$('#overlay').classList.contains('open'))a.focus({preventScroll:true})}else $('#main').innerHTML=welcome(); return }
  const prev=$('#feed')?.scrollTop||0, kept=$('#q')?.value||'';
  $('#main').innerHTML=`<div class="feed" id="feed" role="log" aria-label="Conversation" aria-live="off">${feed()}</div>${composer()}`;
  const f=$('#feed'); if(f) f.scrollTop=S._scroll!==false?f.scrollHeight:prev;
  if(kept&&$('#q')) $('#q').value=kept;
  const a=$('#ans'); if(a&&!S.typing&&$('#overlay').classList.contains('open')) a.focus({preventScroll:true});
  else if(!S.typing&&$('#overlay').classList.contains('open')){const r=$('.quick .btn.primary')||$('.tray .choice.rec');if(r)r.focus({preventScroll:true})}
  if(S.nameCheck&&$('#nameStat')) checkName();
}
render=function(){ renderTop(); renderMain(); saveDraft() };
function saveDraft(){if(!S.started)return;try{DRAFT={data:S.data,done:S.done,cur:S.cur,sub:S.sub,locked:S.locked,log:S.log.slice(0,60)};localStorage.setItem(LS,JSON.stringify(DRAFT))}catch(e){}}
const announceLast=()=>{const b=[...document.querySelectorAll('#feed .msg:not(.user) .bubble')].pop();if(b)announce(b.textContent)};

/* ---------- flow engine ---------- */
function firstUndone(from){for(let k=from;k<REV;k++)if(!S.done.includes(k))return k;return REV}
function advance(i){
  if(!S.done.includes(i)) S.done.push(i);
  log('Confirmed '+SECTIONS[i].label);S.showSteps=false;S.err='';S.tmp=undefined;
  if(S.editing===i){S.editing=null;S.editSub=null;toast('Saved changes to '+SECTIONS[i].label)}
  else if(S.cur===i){S.cur=firstUndone(i+1);S.sub=0}
  S.mp='idle';S.pd={};S.openR=null;S.pref=false;
  announce(SECTIONS[i].label+' saved. '+(!S.locked&&S.cur!==i?'Next: '+SECTIONS[S.cur].label+'.':''));
}
function completeSection(i){advance(i);S.sug=null;render()}
function typingThen(fn){S.typing=true;render();setTimeout(()=>{S.typing=false;fn&&fn();render();announceLast()},180)}
function invalidateAlloc(){const k=SECTIONS.findIndex(s=>s.id==='alloc');S.data.alloc=[];if(S.done.includes(k)){S.done=S.done.filter(x=>x!==k);if(S.cur>k&&S.editing==null)toast('Members changed, so shares need to be allocated again.')}}
function submitAnswer(val){
  const i=S.editing??S.cur,id=secId(i),steps=stepsOf(id),j=S.editing!=null?S.editSub:S.sub,st=steps[j];
  let v=val!==undefined?val:(S.tmp!==undefined?S.tmp:(st.path?(get(S.data,st.path)||(st.prefill?st.prefill():'')):''));v=String(v);
  const e=st.validate?st.validate(v):'';
  if(e){S.err=e;render();return}
  S.err='';set(S.data,st.path,v);S.tmp=undefined;S.nameCheck=false;log((st.row||st.label)+': '+stepAns(st,v));
  if(id==='cap'&&S.done.includes(SECTIONS.findIndex(s=>s.id==='alloc'))&&S.data.alloc.reduce((a,b)=>a+(+b.shares||0),0)>+S.data.sh.count)invalidateAlloc();
  const ns=stepsOf(id);
  if(S.editing!=null){const nx=ns.findIndex(s=>s.path&&get(S.data,s.path)===''||s.path&&get(S.data,s.path)===undefined);S.editSub=nx>=0?nx:null;if(nx<0)toast('Updated');render();return}
  S.sub++;
  if(S.sub>=ns.length) return completeSection(i);
  if(ns[S.sub].special==='sug'){startSug();return}
  typingThen();
}

/* ---------- AI proposals: accept a whole section in one click ---------- */
function finKind(){const c=S.data.acts.map(a=>a.code).join(' ');return /(^|\s)(62|63)/.test(c)?'it':/(^|\s)70/.test(c)?'con':'trade'}
const FINP={it:{rev:120000,cost:40000,exp:36000,label:'software and IT services'},con:{rev:90000,cost:20000,exp:30000,label:'consulting'},trade:{rev:200000,cost:140000,exp:30000,label:'trading'}};
const QUICK={
 cap:{why:()=>S.data.moa?"I read your share capital from the MOA. Confirm it in one click, or change anything.":"Most start-ups begin with this share setup, so I've filled it in. Accept it in one click, or change anything.",
  rows:()=>[['Authorised shares','1,000'],['Currency','USD'],['Nominal value','USD 10'],['Share classes','1'],['Total capital','USD 10,000']],
  set:()=>{if(!S.data.moa)S.data.sh={count:'1000',cur:'USD',value:'10',classes:'1'}}},
 alloc:{why:()=>{const n=S.data.mem.filter(m=>/hareholder/.test(m.role)).length;return n===1?`${S.data.mem.find(m=>/hareholder/.test(m.role)).name} is your only shareholder, so I've allocated all the shares to them.`:`You have ${n} shareholders. I've split the shares equally. Accept it, or set your own split.`},
  rows:()=>{const sh=S.data.mem.filter(m=>/hareholder/.test(m.role)),c=+S.data.sh.count||0,n=sh.length||1;return sh.map((m,k)=>[m.name,fmt(Math.floor(c/n)+(k===0?c-Math.floor(c/n)*n:0))+' shares · Class A'])},
  set:()=>{const sh=S.data.mem.filter(m=>/hareholder/.test(m.role)),c=+S.data.sh.count||0,n=sh.length||1;S.data.alloc=sh.map((m,k)=>({name:m.name,shares:String(Math.floor(c/n)+(k===0?c-Math.floor(c/n)*n:0)),cls:'Class A'}))}},
 fin:{why:()=>`Based on your activities (${FINP[finKind()].label}) here is a typical 3-year forecast. Accept it or adjust the numbers, and I'll turn it into the forecast document the registry needs.`,
  rows:()=>{const p=FINP[finKind()];return [['Financial year end','31 December'],['Employees, year 1','1–5']].concat([1,2,3].map(y=>['Year '+y,'Rev '+short(yearVal(p.rev,50,y))+' · Cost '+short(yearVal(p.cost,50,y))+' · Exp '+short(yearVal(p.exp,50,y))]))},
  set:()=>{const p=FINP[finKind()];Object.assign(S.data.fin,{fye:'31 December',rev:String(p.rev),cost:String(p.cost),exp:String(p.exp),emp:'1–5',growth:'50'})}},
 off:{why:"Most new companies start with a dedicated desk in a business centre. Here is a popular setup you can accept in one click.",
  rows:()=>[['Office type','Business centre'],['Provider','Harbour Offices LLC'],['Business centre','Commercial Plaza'],['Office space','Dedicated desk'],['Size','2 seats'],['Lease term','One month'],['Price','USD '+fmt(450*2*1)]],
  set:()=>{Object.assign(S.data.off,{type:'Business centre',provider:'Harbour Offices LLC',centre:'Commercial Plaza',space:'Dedicated desk',size:'2',term:'1',leaseOk:''})}}
};
function quickBlock(id){
  const q=QUICK[id],why=typeof q.why==='function'?q.why():q.why;
  return bubble(why)+`<article class="card active quick" aria-label="Suggested answers"><div class="body"><div class="aihead"><span class="badge ai">${ic('spark',11)} ${id==='cap'&&S.data.moa?'Read from your MOA':'Suggested for you'}</span><span class="hint">${id==='cap'&&S.data.moa?'memorandum-of-association.pdf':'Based on your earlier answers'}</span></div>
   <dl class="rows" style="padding:0">${q.rows().map(r=>`<dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd>`).join('')}</dl>${S.err?`<div class="err" role="alert">${ic('alert',13)}<span>${esc(S.err)}</span></div>`:''}
   <div class="foot" style="padding:0;border:0"><button type="button" class="btn ghost" data-act="quickEdit">I'll change it</button><button type="button" class="btn primary" data-act="quickUse">${ic('check',14)} Use this</button></div></div></article>`;
}
function quickUse(){
  const i=S.cur,id=secId(i);QUICK[id].set();
  const bad=stepsOf(id).filter(x=>x.path&&x.validate&&String(get(S.data,x.path)??'').trim()).map(x=>x.validate(String(get(S.data,x.path)??''))).find(Boolean);
  if(bad){S.err=bad;S.pref=true;S.sub++;return typingThen()}
  log('Accepted suggested '+SECTIONS[i].label.toLowerCase());S.err='';
  const ns=stepsOf(id),nx=ns.findIndex(x=>x.path&&!String(get(S.data,x.path)??'').trim());
  if(nx>=0){S.sub=nx;return typingThen()}
  completeSection(i);
}
function quickEdit(){const id=secId(S.cur);QUICK[id].set();S.pref=true;S.err='';S.sub++;typingThen()}


/* ---------- uploaded financial projection: AI reads it, you confirm ---------- */
const FIN_TABLE=[{y:1,rev:300000,cost:200000,exp:150000,emp:5},{y:2,rev:500000,cost:300000,exp:250000,emp:8},{y:3,rev:800000,cost:450000,exp:400000,emp:12}];
function finupBlock(){
  const f=S.fu;
  if(f==='reading') return bubble('Reading your financial forecast…')+`<article class="card active"><div class="body"><div class="docrow"><span class="ico">${ic('file')}</span><div style="flex:1"><b>financial-forecast.xlsx</b><ul class="plan" style="margin-top:6px" aria-live="polite"><li class="done">${ic('check',14)} Uploaded</li><li class="now"><span class="spin"></span> Extracting revenue, costs and headcount</li><li>Checking the totals</li></ul></div><button class="btn sm" data-act="finStop">${ic('stop',12)} Stop</button></div></div></article>`;
  if(f==='read') return bubble("Here's what I read from your forecast. Check the numbers before I attach it.")+`<article class="card active quick" aria-label="Extracted projection"><div class="body"><div class="aihead"><span class="badge ai">${ic('spark',11)} Read from your file</span><span class="hint">financial-forecast.xlsx</span></div>
    <div style="overflow-x:auto"><table class="ftable"><thead><tr><th>Year</th><th>Revenue</th><th>Cost</th><th>Expenses</th><th>Staff</th></tr></thead><tbody>${FIN_TABLE.map(t=>`<tr><td>${t.y}</td><td>${short(t.rev)}</td><td>${short(t.cost)}</td><td>${short(t.exp)}</td><td>${t.emp}</td></tr>`).join('')}</tbody></table></div>
    <dl class="rows" style="padding:0"><dt>Financial year end</dt><dd>31 December 2026</dd></dl>
    <div class="foot" style="padding:0;border:0"><button type="button" class="btn ghost" data-act="finUp">Upload a different file</button><button type="button" class="btn primary" data-act="finUse">${ic('check',14)} Looks right, attach it</button></div></div></article>`;
  return `<article class="card active"><div class="body"><div class="drop"><div>${ic('upload',24)}</div><b>Upload your final financial forecast</b><span class="hint">3 years of revenue, costs, expenses and staff · PDF, XLSX or CSV · up to 5 MB</span><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:6px"><button class="btn primary sm" data-act="finUp">Choose file</button><button class="btn sm ghost" data-act="finTpl">${ic('file',13)} Get the template</button></div></div>
    <p class="hint" style="margin:10px 0 0;text-align:center">No forecast yet? <button class="linkbtn" data-act="finNo">Answer a few questions and I'll draft it for you</button></p></div></article>`;
}

/* ---------- company profile ---------- */
function profPick(v){
  if(v==='type'){S.prof='typed';S.sub++;return typingThen()}
  const my=++tok;S.prof='reading';S.up={step:0};render();log('Uploaded Memorandum of Association');
  (async()=>{await wait(800);if(my!==tok)return;S.up.step=1;render();await wait(1300);if(my!==tok)return;S.up.step=2;render();await wait(800);if(my!==tok)return;
    S.data.name='Meridian Labs LLC';S.data.desc='We build software and IT services for small businesses';S.data.sh={count:'1000',cur:'USD',value:'10',classes:'1'};S.data.moa={holders:[{name:'Amira Rahman',pct:100}]};S.tmp=undefined;S.prof='read';log('Read name, objects, share capital and shareholders from the MOA');render();announce('MOA read. Please check the company name.')})();
}
/* ---------- activities ---------- */
function startSug(){
  const d=S.data.desc.trim();
  const key=/software|app\b|saas|tech|data|\bit\b|\bai\b|platform|cyber|network/i.test(d)?'it':/consult|advis|coach|train/i.test(d)?'con':/trade|import|export|sell|retail|goods|shop/i.test(d)?'trade':null;
  if(!key){S.sug={ask:"I couldn't tell the main activity from that. What is the main thing customers pay you for?"};render();return}
  const my=++tok;S.sug='loading';S.err='';render();log('Searching activity list');
  wait(1600).then(()=>{if(my!==tok)return;S.sug={items:SUGGEST[key].filter(s=>!S.data.acts.some(a=>a.code===s.code)).sort((a,b)=>b.match-a.match),i:0};log('Suggested activities');render();announce('Activity suggestions ready. Best match: '+(S.sug.items[0]?.title||'none'))})
}
/* ---------- people ---------- */
const PN=/^[A-Za-z0-9 ]{6,12}$/;
function memAnswer(v){
  const p=S.mp,pd=S.pd;S.err='';
  const val=v!==undefined?String(v):(S.tmp!==undefined?S.tmp:'');
  if(p==='pn'){S.tmp=undefined;if(val==='yes:other'){S.mp='roles';return typingThen()}if(val.startsWith('yes:')){pd.role=val.slice(4);S.mp='email';return typingThen()}S.mp='pnFix';return typingThen()}
  if(p==='roles'){const sel=[...document.querySelectorAll('[name=role]:checked')].map(x=>x.value);if(!sel.length){S.err='Pick at least one role.';return render()}pd.role=sel.join(' & ');S.mp='email';return typingThen()}
  if(p==='email'){if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim())){S.err="That email doesn't look right. Try name@example.com.";return render()}pd.email=val.trim();S.tmp=undefined;S.mp='phone';return typingThen()}
  if(p==='phone'){const dg=val.replace(/\D/g,'');if(dg.length<8||dg.length>15){S.err='Enter the number with its country code, 8–15 digits.';return render()}pd.phone=val.trim();S.tmp=undefined;S.mp='res';return typingThen()}
  if(p==='res'){pd.res=val;S.tmp=undefined;if(/Agent/.test(pd.role)){S.mp='behalf';return typingThen()}return finishPerson()}
  if(p==='behalf'){pd.behalf=val;S.mp='proof';return typingThen()}
  if(p==='pnFix'){if(!PN.test(val.trim())){S.err='Passport numbers have 6–12 letters and digits.';return render()}pd.pn=val.trim();S.tmp=undefined;S.mp='roles';return typingThen()}
  if(p.startsWith('m_')){const k=+p.slice(2),key=MK[k][0];if(!val.trim()){S.err='Required.';return render()}if(key==='pn'&&!PN.test(val.trim())){S.err='Passport numbers have 6–12 letters and digits.';return render()}pd[key]=val.trim();S.tmp=undefined;S.mp=k<4?'m_'+(k+1):'roles';return typingThen()}
  if(p==='role'){pd.role=val;S.tmp=undefined;return finishPerson()}
  if(p==='more'){if(val==='more'){S.mp='idle';return render()}return memFinish()}
}
function memFinish(){
  if(S.editing!=null){S.editing=null;S.mp='idle';return render()}
  if(!(S.data.mem.some(m=>/Director/.test(m.role))&&S.data.mem.some(m=>/hareholder/.test(m.role)))){S.err='A company needs at least one director and one shareholder. Add them to continue.';S.mp='idle';return render()}
  completeSection(S.cur);
}
function finishPerson(){const pd=S.pd;S.data.mem.push({name:pd.name,role:pd.role,email:pd.email||'',phone:pd.phone||'',res:pd.res||'',behalf:pd.behalf||'',proof:pd.proof||'',src:pd.src||'doc'});invalidateAlloc();log('Added '+pd.name+' as '+pd.role);S.pd={};S.mp='more';S.err='';announce(pd.name+' added.');render()}
const secIs=id=>secId(S.editing??S.cur)===id;

function guardUnsaved(cont){
  if(S.editing==null||S.editSub==null||S.tmp===undefined)return false;
  const sec=SECTIONS[S.editing].label;
  confirmSheet({title:'Unsaved changes',body:`You have unsaved changes in ${sec}. Discard them and switch, or stay to keep editing?`,ok:'Discard changes',danger:true},()=>{S.tmp=undefined;S.editSub=null;S.editing=null;S.err='';cont()});
  const keep=document.querySelector('#sheet [data-act=closeSheet]');if(keep)keep.textContent='Stay';
  return true;
}
/* ---------- actions ---------- */
const A={
 start(){if(S.data.id.verified)beginApp();else{S.gate=0;S.tmp=undefined;S.err='';render()}},
 resume(){const d=DRAFT;S=fresh();Object.assign(S,{data:d.data,done:d.done,cur:d.cur,sub:d.sub,log:d.log||[],locked:!!d.locked,started:true});const st=stepsOf(secId(Math.min(S.cur,REV)))[S.sub];if(!st||st.special)S.sub=0;S.cur===REV&&(S.sub=0);log('Resumed application');render();announce('Welcome back. '+(S.locked?'Your application is submitted.':''));setTimeout(announceLast,200)},
 manualForm(){log('Chose to fill the form manually');closeModal();toast("No problem, fill in the form on the page.")},
 mode(el){S.mode=el.dataset.v;log(S.mode==='consult'?'Opened Consulting':'Back to the form assistant');render();if(S.mode==='consult')setTimeout(()=>$('#cq')?.focus(),30)},
 cask(el){cask(el.dataset.q)},
 resend(){S.att=0;S.err='';toast('New code sent to '+maskEmail(S.data.id.email));render()},
 nudgeMail(){S.nudge=false;toast('Link sent to '+maskEmail(S.data.id.email));log('Resume link emailed');render()},
 nudgeOk(){S.nudge=false;render()},
 fb(el){S.fb=el.dataset.v;log('Feedback: '+S.fb);render();announce('Thanks for the feedback.')},
 forceClose(){closeModal()},
 leaveEmail(){closeSheet();log('Resume link emailed');closeModal();toast('Saved. Link sent to '+maskEmail(S.data.id.email))},
 startNew(){confirmSheet({title:'Start a new application?',body:S.locked?'Your submitted application stays on record. This opens a blank one using your verified contact details.':'Your saved draft will be replaced by a blank application.',ok:'Start new application',danger:false},()=>{const id=S.data.id;S=fresh();DRAFT=null;try{localStorage.removeItem(LS)}catch(e){}if(id.verified){S.data.id=id;S.started=true;log('Started a new application');render();announce('New application. Question 1: What would you like to call your company?')}else{render()}})},
 menu(){const m=$('#menu');m.innerHTML=`<button data-act="log">${ic('list',15)} Activity log</button><button data-act="human">${ic('user',15)} Talk to a person</button><button data-act="save">${ic('save',15)} Save & exit</button>`;m.classList.toggle('open')},
 steps(){S.showSteps=!S.showSteps;renderTop()},
 goto(el){const i=+el.dataset.i;if(guardUnsaved(()=>A.goto(el)))return;S.showSteps=false;if(S.done.includes(i)&&!S.locked)A.edit({dataset:{i}});else if(!S.locked&&i<S.cur)A.fin({dataset:{i}});else render()},
 fin(el){const i=+el.dataset.i;S.editing=null;S.cur=i;S.sub=0;S.err='';S.tmp=undefined;S.sug=null;S.mp='idle';render()},
 edit(el){const i=+el.dataset.i;if(S.editing!==i&&guardUnsaved(()=>A.edit(el)))return;S.editing=i;S.editSub=null;S.err='';S.tmp=undefined;S.mp='idle';S.showSteps=false;render()},
 chg(el){const j=+el.dataset.j;S.editSub=j;S.tmp=undefined;S.err='';if(stepsOf(secId(S.editing))[j].special==='sug'&&!S.sug)startSug();else render()},
 cancelChg(){S.editSub=null;S.err='';S.tmp=undefined;render()},
 doneEdit(){S.editing=null;S.editSub=null;S.mp='idle';S.err='';render()},
 pick(el){S.err='';if(!S.started&&S.gate!=null)return gateAnswer(el.dataset.v);const cs=curStep();if(cs&&cs.special==='prof')return profPick(el.dataset.v);secIs('mem')?memAnswer(el.dataset.v):submitAnswer(el.dataset.v)},
 quickUse(){quickUse()},
 finUp(){const my=++tok;S.fu='reading';render();log('Uploaded financial forecast');wait(1800).then(()=>{if(my!==tok)return;S.fu='read';log('Read 3 years of figures from the forecast');render();announce('Forecast read. Please check the numbers.')})},
 finStop(){tok++;S.fu=null;render();toast('Stopped. Nothing was saved.')},
 finTpl(){log('Downloaded the forecast template');toast('Template downloaded: financial-forecast-template.xlsx')},
 finNo(){S.data.fin.has='no';S.fu=null;const ns=stepsOf('fin');S.sub=ns.findIndex(x=>x.special==='quick');render()},
 finUse(){const t=FIN_TABLE;Object.assign(S.data.fin,{has:'yes',table:t,rev:String(t[0].rev),cost:String(t[0].cost),exp:String(t[0].exp),emp:t[0].emp+' employees',fye:'31 December',growth:''});log('Attached the uploaded forecast');S.fu=null;S.sub++;typingThen()},
 proofUp(){const pd=S.pd;S.err='';pd.proof='authorisation-letter.pdf';log('Uploaded appointment proof for '+pd.name);toast('Appointment proof uploaded');finishPerson()},
 quickEdit(){quickEdit()},
 profUpload(){profPick('upload')},
 addTop(){const sg=S.sug,take=sg.items.slice(sg.i,sg.i+3),idx=sg.i;take.forEach(t=>{S.data.acts.push({code:t.code,title:t.title,grp:t.grp,restr:t.restr||''});if(t.restr)S.data.actAck=false});sg.i+=take.length;S.openR=null;S.err='';log('Added '+take.length+' activities');render();announce('Added '+take.length+' activities');toast('Added '+take.length+' activities',()=>{S.data.acts=S.data.acts.filter(a=>!take.some(t=>t.code===a.code));sg.i=idx;render()})},
 stopProf(){tok++;S.prof='ask';render();toast('Stopped. Nothing was saved.')},
 toggleR(el){S.openR=S.openR===S.sug.items[S.sug.i].code?null:S.sug.items[S.sug.i].code;render()},
 toggleC(){S.compOpen=!S.compOpen;render()},
 ack(){S.data.actAck=!S.data.actAck;S.err='';log(S.data.actAck?'Confirmed the compliance declaration':'Withdrew the compliance declaration');render();announce(S.data.actAck?'Declaration confirmed.':'Declaration withdrawn.')},
 searchActs(){S.searchOpen=!S.searchOpen;S.q='';render();setTimeout(()=>$('#actq')?.focus(),30)},
 addCode(el){const it=ALLACTS().find(a=>a.code===el.dataset.c);if(!it||S.data.acts.some(a=>a.code===it.code))return;S.data.acts.push({code:it.code,title:it.title,grp:it.grp,restr:it.restr||''});if(it.restr)S.data.actAck=false;S.err='';log('Added activity '+it.code+' from search');render();announce('Added '+it.title)},
 stopAdding(){S.sug.i=S.sug.items.length;S.openR=null;render()},
 ask(el){ask(el.dataset.q)},
 askOpen(){S.askOpen=true;render();$('#q')?.focus()},
 suggest(){S.sug=null;startSug()},
 stopSug(){tok++;S.sug=null;if(S.editing!=null)S.editSub=null;else S.sub=0;S.tmp=S.data.desc;render()},
 rewrite(){S.sug=null;tok++;if(S.editing!=null)S.editSub=0;else S.sub=0;S.tmp=S.data.desc;S.err='';render()},
 fillDesc(el){S.data.desc=el.dataset.t;startSug()},
 addAct(){const sg=S.sug,s=sg.items[sg.i],idx=sg.i;S.data.acts.push({code:s.code,title:s.title,grp:s.grp,restr:s.restr||''});if(s.restr)S.data.actAck=false;sg.i++;S.openR=null;S.err='';log('Added activity '+s.code);render();announce('Added '+s.title);toast('Added “'+s.title.slice(0,50)+'”',()=>{S.data.acts=S.data.acts.filter(a=>a.code!==s.code);if(S.sug&&S.sug.items)S.sug.i=idx;render()})},
 skipAct(){S.sug.i++;S.openR=null;render()},
 rmAct(el){const a=S.data.acts.find(x=>x.code===el.dataset.c);S.data.acts=S.data.acts.filter(x=>x.code!==a.code);render();toast('Removed “'+a.title.slice(0,50)+'”',()=>{S.data.acts.push(a);render()})},
 sugDone(){if(!S.data.acts.length){S.err='Add at least one activity to continue.';render();return}if(needAck()&&!S.data.actAck){S.err='Please read and acknowledge the compliance requirements to continue.';S.compOpen=true;render();return}S.err='';if(S.editing!=null){S.editSub=null;render()}else completeSection(S.cur)},
 upload(){const my=++tok;S.mp='reading';S.up={step:0};S.err='';render();log('Uploaded passport');
   (async()=>{await wait(800);if(my!==tok)return;S.up.step=1;render();await wait(1300);if(my!==tok)return;S.up.step=2;render();await wait(800);if(my!==tok)return;
     if(docMode==='expired'){S.mp='rejected';log('Passport rejected: expired');announce('Passport could not be used: it has expired.')}
     else{S.pd={name:'Amira Rahman',nat:'Bangladeshi',dob:'14 Aug 1991',pn:'P4821 7893',exp:'02 Nov 2031',src:'doc'};S.mp='pn';log('Read 5 fields from passport');announce('Passport read. One field needs checking.')}
     render()})()},
 stopUp(){tok++;S.mp='idle';render();toast('Stopped. Nothing was saved.')},
 manual(){S.pd={src:'manual'};S.mp='m_0';S.tmp=undefined;S.err='';render()},
 cancelUp(){S.mp=S.data.mem.length?'more':'idle';S.pd={};S.tmp=undefined;S.err='';render()},
 memDone(){memFinish()},
 rmMem(el){const i=+el.dataset.i,m=S.data.mem[i];
   confirmSheet({title:'Remove '+m.name+'?',body:'They will be removed from the application. Their uploaded passport is deleted from this application too.',ok:'Remove person',danger:true},()=>{S.data.mem.splice(i,1);log('Removed '+m.name);render();toast('Removed '+m.name,()=>{S.data.mem.splice(i,0,m);render()})})},
 submit(){if(!S.data.ack){S.ackErr='Please tick the confirmation to submit.';render();return}
   S.pay={st:'methods'};log('Prepared invoice: '+usd(invoice().total));render();announce('Invoice ready. Total '+usd(invoice().total))},
 payBack(){S.pay=null;render()},
 payM(el){const v=el.dataset.v;S.pay.err='';S.pay.st=v;if(v==='card'||v==='bank')S.pay.method=v;log(v==='card'?'Chose card payment':v==='bank'?'Chose bank transfer':v==='later'?'Chose to pay later in the portal':'Back to payment options');render()},
 payCard(){S.pay.st='verify';S.pay.err='';render();setTimeout(()=>$('#payotp')?.focus(),30)},
 payBank(){S.pay.method='bank';S.pay.pending=true;log('Bank transfer reported by applicant');startSubmit()},
 cancelSub(){const card=S.pay&&S.pay.method==='card';S.subm=null;if(S.pay)S.pay={st:'methods'};log(card?'Payment and submission cancelled · hold released':'Submission cancelled');render();toast(card?'Cancelled. The hold on your card was released. Nothing was charged.':'Submission cancelled. Nothing was sent.')},
 log(){closeMenu();sheet(`<h3>Activity log</h3><p class="hint">Everything Guide.ai read or changed, newest first.</p><ul class="log">${S.log.length?S.log.map(l=>`<li><time>${l.t}</time><span>${esc(l.m)}</span></li>`).join(''):'<li>Nothing yet.</li>'}</ul><div class="foot2"><button class="btn" data-act="closeSheet">Close</button></div>`)},
 human(){closeMenu();sheet(`<h3>Talk to a person</h3><p style="color:var(--text-2)">I'll pass your progress so you don't have to repeat yourself.</p><div class="box" style="margin-top:12px"><h4>What they'll see</h4><span style="font-size:13px">${S.done.length} of ${N} steps complete · current step: ${esc(SECTIONS[Math.min(S.cur,REV)].label)} · activity log</span></div><p class="hint" style="margin-top:8px">Typical reply: within 1 working day. Your application stays saved.</p><div class="foot2"><button class="btn ghost" data-act="closeSheet">Not now</button><button class="btn primary" data-act="humanOk">Send to support</button></div>`)},
 humanOk(){closeSheet();log('Handed off to support');toast('Sent to support. We’ll email you.')},
 save(){closeMenu();log('Saved & exited');const m=maskEmail(S.data.id.email);closeModal();toast('Saved. '+(m?'Link sent to '+m:'You can resume any time.'))},
 toast(el){toast(el.dataset.m)},
 closeSheet(){closeSheet()},
 reset(){tok++;S=fresh();DRAFT=null;try{localStorage.removeItem(LS)}catch(e){}closeSheet();render()}
};

/* ---------- Consulting AI: open questions, separate from the form ---------- */
const CSTART=['What is a UBO?','What is an MOA?','Can a foreigner own 100%?','Which licence do I need?','How long does registration take?','How much does it cost?'];
function consultView(){
  let h=bubble("Hi, I'm the Guide.ai consultant. Ask me anything about setting up a company here: structures, licences, UBOs, fees or timelines. I give general guidance, not legal advice.");
  if(!S.cqa.length) h+=`<div class="cstart" role="group" aria-label="Suggested questions">${CSTART.map(q=>`<button class="chip" data-act="cask" data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>`;
  S.cqa.forEach(q=>{h+=userBubble(q.q)+bubble(q.a,q.src)});
  return `<div class="feed" id="feed" role="log" aria-label="Consulting conversation" aria-live="polite">${h}</div><div class="composer"><form class="cin" data-form="cask"><label class="sr" for="cq">Ask the consultant</label><input id="cq" type="text" placeholder="Ask about company set-up…" autocomplete="off"><button aria-label="Send">${ic('send',16)}</button></form><button class="linkbtn" data-act="mode" data-v="form" style="align-self:flex-start">${ic('undo',13)} ${S.started?'Back to my application':'Start my application'}</button></div>`;
}
function cask(q){q=q.trim();if(!q)return;const a=ANSWERS.find(x=>x[0].test(q));
  S.cqa.push({q,a:a?esc(a[1]):"I'm not sure about that one, and I don't want to guess on a legal question. I can pass it to a person.",src:a?a[2]:'No source found'});
  if(!a) S.cqa.at(-1).a+=`<div class="chips" style="margin-top:8px"><button class="chip" data-act="human">Talk to a person</button></div>`;
  log('Consulting: '+q);render();setTimeout(()=>{$('#cq')?.focus();const f=$('#feed');if(f)f.scrollTop=1e6},20)}

function ask(q){q=q.trim();if(!q)return;
  const a=ANSWERS.find(x=>x[0].test(q));
  if(/person|human|agent/i.test(q)) return A.human();
  S.qa.push({sec:Math.min(S.cur,REV),q,a:a?esc(a[1]):"I'm not sure about that one, and I don't want to guess in a legal process. I can pass it to a person.",src:a?a[2]:'No source found'});
  if(!a) S.qa.at(-1).a+=`<div class="chips" style="margin-top:8px"><button class="chip" data-act="human">Talk to a person</button></div>`;
  log('Answered: '+q);S.askOpen=false;render()}


/* ---------- overlays ---------- */
let confirmCb=null,undoCb=null,tt;
function sheet(h){$('#sheet').innerHTML=h;$('#scrim').classList.add('open');$('#sheet button')?.focus()}
function closeSheet(){$('#scrim').classList.remove('open')}
function closeMenu(){$('#menu').classList.remove('open')}
function confirmSheet(o,cb){confirmCb=cb;sheet(`<h3>${esc(o.title)}</h3><p style="color:var(--text-2)">${esc(o.body)}</p><div class="foot2"><button class="btn ghost" data-act="closeSheet">Keep</button><button class="btn ${o.danger?'danger':'primary'}" data-act="confirmOk">${esc(o.ok)}</button></div>`)}
A.confirmOk=()=>{closeSheet();confirmCb&&confirmCb();confirmCb=null};
function toast(m,undo){clearTimeout(tt);$('#toastMsg').textContent=m;undoCb=undo||null;$('#toastUndo').style.display=undo?'':'none';$('#toast').classList.add('open');startToast()}
function startToast(){clearTimeout(tt);tt=setTimeout(()=>$('#toast').classList.remove('open'),undoCb?4000:2000)}
$('#toast').addEventListener('mouseenter',()=>clearTimeout(tt));$('#toast').addEventListener('focusin',()=>clearTimeout(tt));$('#toast').addEventListener('mouseleave',startToast);$('#toast').addEventListener('focusout',startToast)
$('#toastUndo').onclick=()=>{undoCb&&undoCb();undoCb=null;$('#toast').classList.remove('open')};

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');
  if(!el){ if(!e.target.closest('#menu')) closeMenu(); if(e.target.id==='scrim') closeSheet(); return }
  const f=A[el.dataset.act]; if(f){ if(el.dataset.act!=='menu') closeMenu(); S._scroll=!['steps','edit','goto','chg','cancelChg','fillDesc'].includes(el.dataset.act); f(el); S._scroll=true }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();closeMenu()}
  if(e.key==='Enter'&&!e.shiftKey&&e.target.tagName==='TEXTAREA'&&e.target.id==='ans'){e.preventDefault();e.target.form?.requestSubmit()}});
document.addEventListener('submit',e=>{const f=e.target.closest('[data-form]');if(!f)return;e.preventDefault();
  if(f.dataset.form==='cask'){const i=f.querySelector('input');cask(i.value);i.value='';return}
  if(f.dataset.form==='ask'){const i=f.querySelector('input');ask(i.value);i.value='';return}
  if(f.dataset.form==='payotp'){const v=($('#payotp')?.value||'').trim();if(v!=='123456'){S.pay.err="That code doesn't match. Check the message from your bank.";render();return}
    S.pay.st='processing';S.pay.err='';log('Bank verification passed');render();const my=++tok;wait(1600).then(()=>{if(my!==tok)return;if(payMode==='declined'){S.pay.st='declined';log('Payment declined by bank');render();announce('Payment declined. Nothing was charged.')}else{log('Payment authorised and held: '+usd(invoice().total));startSubmit()}});return}
  if(!S.started&&S.gate!=null)return gateAnswer();
  secIs('mem')?memAnswer():submitAnswer()});
document.addEventListener('change',e=>{if(e.target.matches('[data-cc]')){S.data.id.cc=e.target.value;$('#ans')?.focus()}});
document.addEventListener('keydown',e=>{if(!overlay.classList.contains('open')||e.metaKey||e.ctrlKey||e.altKey)return;const t=e.target;if(/INPUT|TEXTAREA|SELECT/.test(t.tagName))return;if(/^[1-9]$/.test(e.key)){const b=document.querySelectorAll('.tray .choice')[+e.key-1];if(b){e.preventDefault();b.click()}}});
let nameT;
document.addEventListener('input',e=>{const t=e.target;
  if(t.hasAttribute('data-t')){S.tmp=t.value;{const w=$('#wc');if(w)w.textContent=wc(S.tmp)+' / 2,000 words';const c=$('#cc');if(c)c.textContent=String(S.tmp).length+' / 100 characters'}if(S.err){S.err='';const n=$('#err-a');if(n)n.innerHTML='';t.closest('.f')?.classList.remove('invalid');t.removeAttribute('aria-invalid')}if(S.started&&curStep()?.status)checkName();if(!S.started&&S.gate!=null&&GATE[S.gate].path==='id.code'&&/^\d{6}$/.test(S.tmp||'')){const g=S.gate;setTimeout(()=>{if(S.gate===g&&!S.started)gateAnswer()},150)}}
  if(t.hasAttribute('data-s')){S.q=t.value;const r=$('#actResults');if(r)r.innerHTML=actResults()}
  if(t.dataset.k==='ack'){S.data.ack=t.checked;S.ackErr='';const n=$('#err-ack');if(n)n.innerHTML=''}
});
function checkName(){clearTimeout(nameT);const st=$('#nameStat'),v=(S.tmp||'').trim();if(!st)return;
  if(v.length<3){st.className='stat';st.innerHTML='';return}
  st.className='stat';st.innerHTML='<span class="spin"></span> Checking availability…';
  nameT=setTimeout(()=>{let c='',h='';
    if(/northwind/i.test(v)){c='bad';h=ic('alert',13)+' Already registered. Try “Northwind Labs LLC” or “Northwind Group LLC”.'}
    else if(!/\b(LLC|Ltd|Limited)\.?$/i.test(v)){h=ic('info',13)+' Add LLC, Ltd or Limited at the end.'}
    else{c='ok';h=ic('check',13)+' “'+esc(v)+'” is available.'}
    st.className='stat '+c;st.innerHTML=h},600)}
document.querySelectorAll('input[name=doc]').forEach(r=>r.onchange=()=>docMode=r.value);
document.querySelectorAll('input[name=pay]').forEach(r=>r.onchange=()=>payMode=r.value);


const overlay=$('#overlay'); let lastFocus=null;
function updateCTAs(){document.querySelectorAll('[data-open]').forEach(b=>{const t=b.querySelector('.lbl');if(!t)return;t.textContent=S.locked?'View application':(S.started||(DRAFT&&!DRAFT.locked))?'Resume application':(b.dataset.label||'Start application')})}
const bg=()=>document.querySelectorAll('body>header,body>main,body>footer,body>.fab,body>.skip');
function openModal(){lastFocus=document.activeElement;overlay.classList.add('open');bg().forEach(e=>e.inert=true);document.body.style.overflow='hidden';render();setTimeout(()=>($('.welcome .btn.primary')||$('#q')||$('.iconbtn')).focus(),30)}
function closeModal(){closeSheet();closeMenu();overlay.classList.remove('open');bg().forEach(e=>e.inert=false);document.body.style.overflow='';updateCTAs();lastFocus?.focus()}
function requestClose(){
  if(!S.started||S.locked||S.subm||(S.done.length===0&&S.sub===0)){closeModal();return}
  const n=S.done.length;
  sheet(`<h3>Save and finish later?</h3><p style="color:var(--text-2)">You've done <b>${n} of ${N}</b> steps, with about ${Math.max(1,Math.round((N-n)*0.6))} minutes left. Everything is saved${S.data.id.email?`, and I can email a link to <b>${esc(maskEmail(S.data.id.email))}</b>`:''}.</p><div class="bar" aria-hidden="true" style="margin-top:12px"><i style="width:${Math.round(n/N*100)}%"></i></div>
   <div class="foot2" style="flex-wrap:wrap"><button class="btn ghost" data-act="forceClose2">Just close</button><button class="btn" data-act="leaveEmail">Email me a link</button><button class="btn primary" data-act="closeSheet">Keep going</button></div>`);
}
A.closeModal=requestClose;A.forceClose2=()=>{closeSheet();closeModal()};
document.addEventListener('click',e=>{const o=e.target.closest('[data-open]');if(o){e.preventDefault();openModal()} if(e.target===overlay)requestClose()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open')&&!$('#scrim').classList.contains('open')&&!$('#menu').classList.contains('open'))requestClose();
  if(e.key==='Tab'&&overlay.classList.contains('open')){const f=[...$('#panel').querySelectorAll('button:not(:disabled),input,select,textarea,[href]')].filter(x=>x.offsetParent);if(!f.length)return;const a=f[0],z=f.at(-1);if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
const _render=render; render=function(){_render();renderRail();updateCTAs()};
function renderRail(){const r=$('#rail');if(!r)return;const total=SECTIONS.length;
 r.innerHTML=`<div class="brand"><div class="logo">${ic('spark',16)}</div><span>Guide<span class="dotai">.ai</span></span></div><div><h4>Your application</h4><ol style="margin-top:8px">${SECTIONS.map((s,i)=>{const d=S.done.includes(i),c=i===S.cur&&!S.locked,reach=S.started&&(d||i<=S.cur);
  return `<li><button data-act="goto" data-i="${i}" ${reach&&!S.locked?'':'disabled'} ${c?'aria-current="step"':''}><span class="dot ${d?'done':c?'now':''}">${d?ic('check',12):i+1}</span>${esc(s.label)}${S.locked&&d?`<span class="state" style="margin-left:auto">${ic('lock',12)}</span>`:''}</button></li>`}).join('')}</ol></div>
 <div class="rfoot"><div class="saved">${S.started?(S.locked?'Submitted · read-only':'Saved automatically'):'Nothing saved yet'}</div><button data-act="log">${ic('list',15)} Activity log</button><button data-act="human">${ic('user',15)} Talk to a person</button></div>`}
render();

/* ---------- gentle idle nudge (drop-off guard) ---------- */
let idleT;const bump=()=>{clearTimeout(idleT);if(overlay.classList.contains('open')&&S.started&&!S.locked)idleT=setTimeout(()=>{if(!S.nudge&&!S.typing&&!S.subm&&!$('#scrim').classList.contains('open')){S.nudge=true;render();announceLast()}},75000)};
['click','keydown','input'].forEach(ev=>overlay.addEventListener(ev,bump,true));
if(DRAFT&&DRAFT.locked){S=fresh();Object.assign(S,{data:DRAFT.data,done:DRAFT.done,cur:REV,locked:true,started:true,log:DRAFT.log||[]});}
render();

/* ---------- embed hooks (case-study page) ---------- */
addEventListener('message',e=>{const d=e.data||{};if(d.type==='guide-pay'&&(d.mode==='approved'||d.mode==='declined')){payMode=d.mode;const r=document.querySelector(`input[name=pay][value=${d.mode}]`);if(r)r.checked=true}if(d.type==='guide-doc'&&(d.mode==='valid'||d.mode==='expired')){docMode=d.mode;const r=document.querySelector(`input[name=doc][value=${d.mode}]`);if(r)r.checked=true}
  if(d.type==='guide-reset'){A.reset();openModal()}
  if(d.type==='guide-open')openModal()});
if(/[?&]open=1/.test(location.search))setTimeout(openModal,50);

/* ---------- screenshot mode (?shot=name): sets the assistant into a known state for documentation images ---------- */
const SHOT=(location.search.match(/[?&]shot=([\w-]+)/)||[])[1];
if(SHOT)(async()=>{
  const st=document.createElement('style');
  st.textContent='body>header,body>main,body>footer,body>.fab,body>.skip{display:none!important}.overlay{background:linear-gradient(135deg,#dcd8fa,#eef0fb)!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important}.modal{animation:none!important;box-shadow:0 30px 80px -30px rgba(67,56,202,.45)!important}.toast{display:none!important}*{animation-duration:0s!important;animation-delay:0s!important;transition:none!important}';
  document.head.appendChild(st);
  const id={name:'Amira Rahman',email:'amira@example.com',phone:'50 123 4567',cc:'AE',code:'123456',verified:true,consent:'agree'};
  const base=()=>{S=fresh();S.data.id={...id};S.started=true;S.cur=0;S.sub=0};
  const fill=()=>{Object.assign(S.data,{name:'Meridian Labs LLC',nameAr:'ميريديان لابز ذ.م.م',desc:'We build software and IT services for small businesses'});S.data.acts=[{code:'6311-001',title:'Provision of infrastructure for hosting, data processing and related activities.',grp:'C12',restr:''},{code:'6202-006',title:'Advising on IT networks.',grp:'C12',restr:''},{code:'6202-001',title:'Planning and designing of computer systems (including hardware) and after-sale client services.',grp:'C12',restr:'it'}];S.data.actAck=true;
    S.data.sh={count:'1000',cur:'USD',value:'10',classes:'1'};S.data.mem=[{name:'Amira Rahman',role:'Director & Shareholder',email:'amira@example.com',phone:'+971 50 123 4567',res:'Resident',src:'doc'}];S.data.alloc=[{name:'Amira Rahman',shares:'1000',cls:'Class A'}];
    S.data.fin={has:'no',self:'Self-funded',fundOther:'',basis:'Ten retainer clients at USD 1,000 a month, growing by referral',fye:'31 December',rev:'120000',cost:'40000',exp:'36000',emp:'1–5',growth:'50',table:null};S.data.off={type:'Business centre',provider:'Harbour Offices LLC',centre:'Commercial Plaza',space:'Dedicated desk',size:'2',term:'1',leaseOk:'yes',loc:'',unit:''};S.data.nom={ubo:'confirm',uboName:'',uboWhy:'',real:'yes',for:''};S.data.con='standard';S.data.moa={holders:[{name:'Amira Rahman',pct:100}]}};
  const bottom=()=>{const f=$('#feed');if(f)f.scrollTop=1e6};
  const into=sel=>{const e=$(sel),f=$('#feed');if(e&&f)f.scrollTop=e.offsetTop-f.offsetTop-24};
  openModal();await wait(100);
  if(SHOT==='gate'){S=fresh();S.data.id={...id,code:'',verified:false};S.gate=3;render();$('#ans').value='123456'}
  if(SHOT==='name'){base();render();const a=$('#ans');a.value='Meridian Labs LLC';a.dispatchEvent(new Event('input',{bubbles:true}));await wait(900)}
  if(SHOT==='activities'||SHOT==='compliance'){base();S.data.name='Meridian Labs LLC';S.data.desc='We build software and IT services for small businesses';S.done=[0];S.cur=1;S.sub=1;startSug();await wait(1900);
    if(SHOT==='activities'){A.addAct();A.addAct();A.toggleR({});render();into('.aihead')}
    else{A.addTop();A.toggleC();render();into('.compl')}}
  if(SHOT==='moa'){base();S.prof='reading';S.up={step:2};render();bottom()}
  if(SHOT==='ubo'){base();fill();S.done=[0,1,2,3,4,5,6];S.cur=7;S.sub=0;render();bottom()}
  if(SHOT==='consult'){base();fill();S.done=[0,1,2];S.cur=3;S.mode='consult';S.cqa=[{q:'What is a UBO?',a:esc(ANSWERS.find(x=>x[0].test('ubo'))[1]),src:'Registry guidance · not legal advice'},{q:'Can I register a crypto exchange?',a:"I'm not sure about that one, and I don't want to guess on a legal question. I can pass it to a person.<div class=\"chips\" style=\"margin-top:8px\"><button class=\"chip\">Talk to a person</button></div>",src:'No source found'}];render();bottom()}
  if(SHOT==='arabic'){base();S.data.name='Meridian Labs LLC';S.sub=1;render();bottom()}
  if(SHOT==='roles'){base();fill();S.data.mem=[];S.data.alloc=[];S.done=[0,1,2];S.cur=3;S.mp='roles';S.pd={name:'Amira Rahman',src:'doc'};render();document.querySelectorAll('[name=role]').forEach(c=>{if(['Shareholder','Director'].includes(c.value))c.checked=true});bottom()}
  if(SHOT==='projection'){base();fill();S.data.fin={has:'yes',self:'',fundOther:'',basis:'',fye:'',rev:'',cost:'',exp:'',emp:'',growth:'',table:null};S.done=[0,1,2,3,4];S.cur=5;S.sub=0;S.fu='read';render();bottom()}
  if(SHOT==='forecast'){base();fill();S.data.fin={has:'',self:'',fundOther:'',basis:'',fye:'',rev:'',cost:'',exp:'',emp:'',growth:'',table:null};S.done=[0,1,2,3,4];S.cur=5;S.sub=0;S.fu=null;render();bottom()}
  if(SHOT==='quick'){base();fill();S.done=[0,1];S.cur=2;S.sub=0;render();bottom()}
  if(SHOT==='passport'){base();fill();S.data.mem=[];S.data.alloc=[];S.done=[0,1,2];S.cur=3;S.mp='pn';S.pd={name:'Amira Rahman',nat:'Bangladeshi',dob:'14 Aug 1991',pn:'P4821 7893',exp:'02 Nov 2031',src:'doc'};render();bottom()}
  if(SHOT==='invoice'||SHOT==='checkout'){base();fill();S.done=[0,1,2,3,4,5,6,7,8];S.cur=9;S.data.ack=true;S.pay={st:SHOT==='invoice'?'methods':'card',method:SHOT==='checkout'?'card':undefined};render();bottom()}
  if(SHOT==='submit'||SHOT==='review'||SHOT==='outcome'){base();fill();S.done=[0,1,2,3,4,5,6,7,8];S.cur=9;S.data.ack=true;
    if(SHOT==='submit'){S.pay={st:'card',method:'card'};S.subm={left:3}}if(SHOT==='outcome'){S.pay={st:'card',method:'card',paid:true,receipt:'RCPT-2026-07731'};S.done.push(9);S.locked=true;S.fb='easy'}render();bottom()}
  if(/[?&]rects=1/.test(location.search)){await wait(300);const sel={name:'.tray',arabic:'.tray',gate:'.tray',quick:'.card.quick',compliance:'.compl',passport:'.tray',submit:'.card.active .callout.warn',outcome:'.outcome',checkout:'.card.pay',ubo:'.tray',consult:'#feed',moa:'.docrow',roles:'.tray',projection:'.card.quick',invoice:'.card.active',activities:'.sug'}[SHOT];const el=sel&&[...document.querySelectorAll(sel)].pop();const m=document.querySelector('.modal').getBoundingClientRect();if(el){const r=el.getBoundingClientRect();document.body.setAttribute('data-rect',JSON.stringify({x:Math.round(r.left*2),y:Math.round(r.top*2),w:Math.round(r.width*2),h:Math.round(r.height*2)}))}}
  document.title='shot-ready';
})();
