const {chromium}=require('playwright');
const CAD='file:///home/user/Meus-projetos/beleza-app/cadastro/index.html';
const PAINEL='file:///home/user/Meus-projetos/beleza-app/painel/index.html';
let pass=0,fail=0;const fails=[];
const ok=(c,n)=>{if(c)pass++;else{fail++;fails.push(n);}};
(async()=>{
  const b=await chromium.launch();
  // gera mensagens reais pela página de cadastro
  async function gerar(fn){const p=await b.newPage({viewport:{width:390,height:844}});await p.goto(CAD);await p.evaluate(()=>localStorage.clear());await p.reload();await fn(p);await p.click('button[type=submit]');const m=await p.textContent('#summary');await p.close();return m;}
  const chip=(p,box,t)=>p.click(`#${box} .chip:text-is("${t}")`);
  const mPro=await gerar(async p=>{await p.fill('#nome',`Ana D'Ávila <b>&</b> 💅`);await p.fill('#whats','(11) 98888-7777');await p.fill('#bairro','pinheiros, vila madalena');await chip(p,'servicos','Unhas');await chip(p,'onde','Na casa da cliente');await p.selectOption('#academy','Sim, Nanoblading');await p.check('#ok');});
  const mStudio=await gerar(async p=>{await p.click('#kind button[data-k=studio]');await p.fill('#nome','Rebeca');await p.fill('#whats','+55 11 97777-6666');await p.fill('#empresa','Studio Lírio');await p.fill('#bairro','Pinheiros');await chip(p,'servicos','Cílios');await p.check('#ok');});
  const mBrand=await gerar(async p=>{await p.click('#kind button[data-k=brand]');await p.fill('#nome','Carla');await p.fill('#whats','11966665555');await p.fill('#empresa','Casa do Pigmento');await p.fill('#proposta','10% para Belê: inclui frete');await p.check('#ok');});

  const p=await b.newPage({viewport:{width:390,height:844}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.goto(PAINEL);await p.waitForTimeout(300);
  const parse=t=>p.evaluate(x=>window.__parseCadastro(x),t);
  let r=await parse(mPro);
  ok(r&&r.tipo==='pro'&&r.nome===`Ana D'Ávila <b>&</b> 💅`&&r.digits==='11988887777'&&r.academy==='Sim, Nanoblading'&&r.bairro==='pinheiros, vila madalena'&&r.servicos==='Unhas','lê profissional: '+JSON.stringify(r));
  ok(!r.quando,'ignora "não informado"');
  r=await parse(mStudio);ok(r&&r.tipo==='studio'&&r.empresa==='Studio Lírio'&&r.digits==='11977776666','lê estúdio: '+JSON.stringify(r));
  r=await parse(mBrand);ok(r&&r.tipo==='brand'&&r.empresa==='Casa do Pigmento'&&r.proposta==='10% para Belê: inclui frete','lê marca (com dois-pontos na proposta): '+JSON.stringify(r));
  // formato copiado do WhatsApp com data e nome no início
  const copiado='[26/11/2026, 19:02] Ana: '+mPro;
  r=await parse(copiado);ok(r&&r.tipo==='pro'&&r.nome.startsWith('Ana D'),'lê mensagem copiada com prefixo do WhatsApp');
  // texto colado com quebras de linha do Windows
  r=await parse(mStudio.replace(/\n/g,'\r\n'));ok(r&&r.empresa==='Studio Lírio','aceita quebras de linha do Windows');
  // lixo
  for(const t of ['','oi tudo bem?','Nome: Ana\nWhatsApp: 11988887777','Quero ser profissional fundadora da Belê\nNome: Ana\nWhatsApp: 123']){r=await parse(t);ok(r===null,'recusa texto inválido: '+JSON.stringify(t).slice(0,40));}
  // interface sem Claude (arquivo local): aviso e prévia funcionando
  ok(await p.isVisible('#gate'),'mostra aviso quando aberto fora do Claude');
  ok((await p.textContent('#list')).includes('Nenhum cadastro ainda'),'estado vazio explica o que fazer');
  await p.fill('#paste',mPro);await p.click('#parse');
  ok(await p.isVisible('#preview'),'prévia aparece');
  ok(await p.evaluate(()=>!document.querySelector('#pv b')),'nome com HTML não injeta nada na prévia');
  ok((await p.textContent('#pv')).includes(`Ana D'Ávila <b>&</b> 💅`),'nome aparece literal na prévia');
  await p.fill('#paste','qualquer coisa');await p.click('#parse');
  ok(await p.isVisible('#pmsg')&&!(await p.isVisible('#preview')),'mensagem de erro para texto não reconhecido');
  for(const w of [320,390,1280]){await p.setViewportSize({width:w,height:800});const sw=await p.evaluate(()=>document.documentElement.scrollWidth);ok(sw<=w,'sem rolagem lateral em '+w+'px');}
  ok(errs.length===0,'sem erros de script: '+errs);
  await p.screenshot({path:'painel.png',fullPage:true});
  console.log(`PASSOU: ${pass}  FALHOU: ${fail}`);fails.forEach(f=>console.log(' x '+f));
  await b.close();
})();
