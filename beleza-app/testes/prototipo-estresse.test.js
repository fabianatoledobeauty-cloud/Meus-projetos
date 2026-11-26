const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();
  for(const vp of [{width:390,height:844},{width:1280,height:900}]){
    const p=await b.newPage({viewport:vp});
    const errs=[];
    p.on('pageerror',e=>errs.push(e.message));
    await p.goto('file:///home/user/Meus-projetos/beleza-app/prototipo/index.html');
    const views=new Set();
    let seed=7;
    const rnd=n=>{seed=(seed*16807)%2147483647;return seed%n;};
    for(let i=0;i<300;i++){
      const els=await p.$$('#phone [data-a]');
      const vis=[];
      for(const e of els){if(await e.isVisible())vis.push(e);}
      if(!vis.length)break;
      const e=vis[rnd(vis.length)];
      try{await e.click({timeout:1500});}catch(x){}
      if(i%10===0)await p.waitForTimeout(150);
      const v=await p.evaluate(()=>{const h=document.querySelector('#screen h2');return h?h.textContent:'';});
      views.add(v.slice(0,25));
      const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
      if(sw>vp.width)errs.push('overflow '+sw+' em '+v);
    }
    console.log(vp.width,'erros:',[...new Set(errs)].slice(0,8),'telas visitadas:',views.size);
    await p.close();
  }
  await b.close();
})();
