const {chromium}=require('playwright');
const SEM='file:///home/user/Meus-projetos/beleza-app/cadastro/index.html';
const COM='file://'+process.cwd()+'/com-numero.html';
let pass=0,fail=0;const fails=[];
function ok(c,name){if(c){pass++}else{fail++;fails.push(name)}}
(async()=>{
const b=await chromium.launch();
async function page(url,opts={}){const ctx=await b.newContext({viewport:opts.vp||{width:390,height:844},colorScheme:opts.dark?'dark':'light'});const p=await ctx.newPage();p._errs=[];p.on('pageerror',e=>p._errs.push(e.message));p.on('console',m=>{if(m.type()==='error')p._errs.push(m.text())});await p.goto(url);if(opts.clear!==false)await p.evaluate(()=>{try{localStorage.clear()}catch(e){}});await p.reload();return p;}
const chip=(p,box,t)=>p.click(`#${box} .chip:text-is("${t}")`);
async function fillPro(p){await p.fill('#nome','Ana Luíza');await p.fill('#whats','(11) 98888-7777');await p.fill('#bairro','Pinheiros');await chip(p,'servicos','Unhas');await chip(p,'onde','Na casa da cliente');await p.check('#ok');}
const summary=p=>p.textContent('#summary');

// T1 layout em várias larguras e temas
for(const w of [320,375,390,414,768,1280]) for(const dark of [false,true]){
  const p=await page(SEM,{vp:{width:w,height:800},dark});
  const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
  ok(sw<=w,`sem rolagem lateral em ${w}px ${dark?'escuro':'claro'} (scrollWidth ${sw})`);
  ok(p._errs.length===0,`sem erros ao carregar ${w}px: ${p._errs}`);
  if(w===320&&dark)await p.screenshot({path:'dark320.png',fullPage:true});
  await p.context().close();
}
// T2 envio vazio
{const p=await page(SEM);await p.click('button[type=submit]');const e=await p.textContent('#err');
 ok(e.includes('seu nome')&&e.includes('WhatsApp')&&e.includes('bairro')&&e.includes('serviço')&&e.includes('onde você atende')&&e.includes('autorização'),'vazio lista todos os campos: '+e);
 ok(await p.evaluate(()=>document.activeElement.id)==='nome','foco vai para o primeiro campo faltando');
 ok(await p.getAttribute('#nome','aria-invalid')==='true','campo faltando fica marcado');
 await p.fill('#nome','X');ok(await p.getAttribute('#nome','aria-invalid')===null,'marcação some ao digitar');
 ok(!(await p.isVisible('#review')),'não avança com erro');await p.context().close();}
// T3 telefones
for(const [tel,valid] of [['11988887777',1],['(11) 98888-7777',1],['+55 11 98888-7777',1],['5511988887777',1],['11 3333-4444',1],['98888-7777',0],['123',0],['abc',0],['01988887777',0],['11888887777',0],['21 2555-1234',1],['(11) 1234-5678',0],['',0],['+1 (415) 555-0000 ramal 22',0]]){
  const p=await page(SEM);await fillPro(p);await p.fill('#whats',tel);await p.click('button[type=submit]');
  const v=await p.isVisible('#review');ok(v===!!valid,`telefone "${tel}" ${valid?'aceito':'recusado'}`);await p.context().close();}
// T4 profissional completo
{const p=await page(COM);await fillPro(p);await chip(p,'servicos','Massagem');await chip(p,'quando','Noite');await p.selectOption('#academy','Sim, Nanoblading');await p.fill('#insta','@ana');await p.click('button[type=submit]');
 const m=await summary(p);
 ok(m.startsWith('Quero ser profissional fundadora da Belê'),'título profissional');
 ok(m.includes('Serviços: Unhas, Massagem')||m.includes('Serviços: Massagem, Unhas'),'serviços na mensagem');
 ok(m.includes('Onde atende: Na casa da cliente')&&m.includes('Quando: Noite')&&m.includes('F.Tolledo Academy: Sim, Nanoblading')&&m.includes('Instagram: @ana')&&m.includes('Bairro: Pinheiros'),'campos do profissional');
 ok(!m.includes('Empresa')&&!m.includes('Estúdio/salão')&&!m.includes('Parceria')&&!m.includes('Licença'),'sem campos de outros tipos');
 const href=await p.getAttribute('#wa','href');ok(href.startsWith('https://wa.me/5511999990000?text='),'link do WhatsApp com número');
 ok(decodeURIComponent(href.split('?text=')[1])===m,'texto do link igual à mensagem');
 ok(await p.isVisible('#wa'),'botão WhatsApp visível com número');
 ok(await p.getAttribute('#wa','target')==='_blank','abre em nova aba');
 ok(p._errs.length===0,'sem erros no fluxo profissional '+p._errs);await p.context().close();}
// T5 estúdio
{const p=await page(COM);await p.click('#kind button[data-k=studio]');await p.fill('#nome','Rebeca');await p.fill('#whats','11977776666');await p.check('#ok');await p.click('button[type=submit]');
 let e=await p.textContent('#err');ok(e.includes('estúdio ou salão')&&e.includes('bairro')&&e.includes('serviço')&&!e.includes('onde você atende'),'estúdio exige nome do estúdio, bairro e serviço: '+e);
 await p.fill('#empresa','Studio Lírio');await p.fill('#bairro','Pinheiros');await chip(p,'servicos','Sobrancelha');await chip(p,'oferta','Alugar maca por hora');await p.fill('#macas','2');await p.selectOption('#licenca','Sim, em dia');await p.click('button[type=submit]');
 const m=await summary(p);ok(m.startsWith('Quero cadastrar meu estúdio ou salão na Belê')&&m.includes('Estúdio/salão: Studio Lírio')&&m.includes('Quer oferecer: Alugar maca por hora')&&m.includes('Macas/cadeiras livres: 2')&&m.includes('Licença sanitária: Sim, em dia'),'mensagem do estúdio');
 ok(!m.includes('Onde atende')&&!m.includes('Academy'),'estúdio sem campos de profissional');await p.context().close();}
// T6 marca
{const p=await page(COM);await p.click('#kind button[data-k=brand]');await p.fill('#nome','Carla');await p.fill('#whats','11966665555');await p.check('#ok');await p.click('button[type=submit]');
 let e=await p.textContent('#err');ok(e.includes('marca, loja ou escola')&&!e.includes('bairro')&&!e.includes('serviço'),'marca exige só nome da empresa: '+e);
 await p.fill('#empresa','Casa do Pigmento');await chip(p,'parceria','Anúncio no app');await p.fill('#proposta','10% de desconto para profissionais Belê');await p.click('button[type=submit]');
 const m=await summary(p);ok(m.startsWith('Quero ser parceira da Belê')&&m.includes('Empresa: Casa do Pigmento')&&m.includes('Parceria: Anúncio no app')&&m.includes('Proposta: 10% de desconto'),'mensagem da marca');
 ok(!m.includes('Bairro')&&!m.includes('Serviços')&&!m.includes('Cidade'),'marca sem bairro/serviços');await p.context().close();}
// T7 troca de tipo no meio
{const p=await page(COM);await fillPro(p);await p.click('#kind button[data-k=brand]');await p.fill('#empresa','Marca X');await p.click('button[type=submit]');
 const m=await summary(p);ok(m.startsWith('Quero ser parceira')&&!m.includes('Serviços')&&!m.includes('Onde atende'),'trocar para marca não vaza dados de profissional');
 await p.waitForTimeout(800);await p.click('#edit');await p.click('#kind button[data-k=pro]');ok(await p.inputValue('#bairro')==='Pinheiros','voltar para profissional mantém dados');
 await p.click('button[type=submit]');ok((await summary(p)).startsWith('Quero ser profissional'),'reenvio como profissional');await p.context().close();}
// T8 caracteres especiais
{const p=await page(COM);await fillPro(p);await p.fill('#nome',`Ana D'Ávila & <b>Cia</b> 💅 "Fé"`);await p.click('button[type=submit]');
 const m=await summary(p);ok(m.includes(`Nome: Ana D'Ávila & <b>Cia</b> 💅 "Fé"`),'nome especial aparece literal');
 ok(await p.evaluate(()=>!document.querySelector('#summary b')),'nenhum HTML injetado');
 const href=await p.getAttribute('#wa','href');ok(decodeURIComponent(href.split('?text=')[1])===m,'emoji e acentos codificados certo no link');await p.context().close();}
// T9 tamanho máximo
{const p=await page(COM);await p.click('#kind button[data-k=brand]');await p.fill('#nome','A'.repeat(200));await p.fill('#whats','11966665555');await p.fill('#empresa','B'.repeat(200));await p.fill('#proposta','C'.repeat(900));await p.fill('#insta','D'.repeat(90));await p.check('#ok');
 for(const t of ['Desconto para profissionais','Anúncio no app','Patrocínio de kit','Curso com desconto'])await chip(p,'parceria',t);
 ok((await p.inputValue('#nome')).length===80&&(await p.inputValue('#proposta')).length===500,'limites de tamanho respeitados');
 await p.click('button[type=submit]');const href=await p.getAttribute('#wa','href');ok(href.length<4000,'link do WhatsApp com tamanho seguro: '+href.length);
 const ov=await p.evaluate(()=>{const s=document.getElementById('summary');return s.scrollWidth<=s.clientWidth+1});ok(ov,'texto longo quebra dentro do quadro');await p.context().close();}
// T10 sem número
{const p=await page(SEM);await fillPro(p);await p.click('button[type=submit]');ok(!(await p.isVisible('#wa')),'sem número esconde botão WhatsApp');ok(await p.isVisible('#copy'),'botão copiar aparece');
 await p.waitForTimeout(800);await p.click('#copy');await p.waitForTimeout(300);const t=await p.textContent('#copy');ok(t==='Mensagem copiada'||t.startsWith('Texto selecionado'),'copiar responde: '+t);ok(p._errs.length===0,'copiar sem erro '+p._errs);await p.context().close();}
// T11 corrigir dados
{const p=await page(COM);await fillPro(p);await p.click('button[type=submit]');await p.waitForTimeout(800);await p.click('#edit');ok(await p.isVisible('#form')&&!(await p.isVisible('#review')),'corrigir volta ao formulário');
 ok(await p.inputValue('#nome')==='Ana Luíza','dados mantidos ao corrigir');await p.fill('#nome','Ana Maria');await p.click('button[type=submit]');ok((await summary(p)).includes('Nome: Ana Maria'),'mensagem atualizada após corrigir');await p.context().close();}
// T12 rascunho após recarregar
{const p=await page(COM);await p.click('#kind button[data-k=studio]');await p.fill('#nome','Rebeca');await p.fill('#empresa','Studio Lírio');await chip(p,'servicos','Cílios');await p.check('#ok');await p.waitForTimeout(50);await p.reload();
 ok(await p.inputValue('#nome')==='Rebeca'&&await p.inputValue('#empresa')==='Studio Lírio','rascunho volta após recarregar');
 ok(await p.getAttribute('#kind button[data-k=studio]','aria-selected')==='true','tipo do cadastro volta');
 ok(await p.getAttribute('#servicos .chip:text-is("Cílios")','aria-pressed')==='true','serviços marcados voltam');ok(await p.isChecked('#ok'),'autorização volta');await p.context().close();}
// T13 armazenamento bloqueado
{const ctx=await b.newContext({viewport:{width:390,height:844}});await ctx.addInitScript(()=>{const t=()=>{throw new Error('blocked')};Storage.prototype.setItem=t;Storage.prototype.getItem=t;});const p=await ctx.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));await p.goto(COM);
 await fillPro(p);await p.click('button[type=submit]');ok(await p.isVisible('#review')&&errs.length===0,'funciona com armazenamento bloqueado '+errs);await ctx.close();}
// T14 teclado
{const p=await page(COM);await p.focus('#servicos .chip >> nth=0');await p.keyboard.press('Enter');ok(await p.getAttribute('#servicos .chip >> nth=0','aria-pressed')==='true','chip ativa com Enter');await p.keyboard.press('Space');ok(await p.getAttribute('#servicos .chip >> nth=0','aria-pressed')==='false','chip desativa com Espaço');
 await p.click('.consent span');ok(await p.isChecked('#ok'),'tocar no texto marca a autorização');await p.context().close();}
// T15 duplo clique
{const p=await page(COM);await fillPro(p);await p.dblclick('button[type=submit]');ok(await p.isVisible('#review')&&p._errs.length===0,'duplo clique sem erro');await p.context().close();}
// T16 chips desmarcar
{const p=await page(COM);await fillPro(p);await chip(p,'servicos','Unhas');await p.click('button[type=submit]');ok((await p.textContent('#err')).includes('serviço'),'desmarcar único serviço volta a exigir');await p.context().close();}

console.log(`\nPASSOU: ${pass}  FALHOU: ${fail}`);fails.forEach(f=>console.log(' x '+f));await b.close();})();
