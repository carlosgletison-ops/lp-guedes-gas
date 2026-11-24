/* eslint-disable @typescript-eslint/no-require-imports -- script Node (CommonJS) fora do app */
// Gera data/mapa-ceara.ts a partir dos arquivos do IBGE.
// Uso: baixe estado.json (malhas/estados/23?formato=application/vnd.geo+json) e centroides.txt
// (uma linha JSON por municipio: malhas/municipios/{id}/metadados) numa pasta e rode:
//   node scripts/gerar-mapa.cjs <pasta> data/mapa-ceara.ts
const fs=require("fs"); const dir=process.argv[2]; const out=process.argv[3];
const geo=JSON.parse(fs.readFileSync(dir+"/estado.json","utf8"));
const cents=fs.readFileSync(dir+"/centroides.txt","utf8").trim().split("\n").map(l=>JSON.parse(l)[0]);
const g=geo.features[0].geometry; const polys=g.type==="Polygon"?[g.coordinates]:g.coordinates;
let pts=polys.flat(2); let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
for(const [lo,la] of pts){minX=Math.min(minX,lo);maxX=Math.max(maxX,lo);minY=Math.min(minY,la);maxY=Math.max(maxY,la);}
const k=Math.cos(((minY+maxY)/2)*Math.PI/180); const W=400; const s=W/((maxX-minX)*k); const H=Math.round((maxY-minY)*s);
const P=([lo,la])=>[+((lo-minX)*k*s).toFixed(1), +((maxY-la)*s).toFixed(1)];
const path=polys.map(poly=>poly.map(ring=>{let last=null;const seg=[];for(const c of ring){const p=P(c);if(last&&Math.hypot(p[0]-last[0],p[1]-last[1])<1.2)continue;seg.push(p);last=p;}return "M"+seg.map(p=>p.join(" ")).join("L")+"Z";}).join("")).join("");
const nomes={"2304202":"crato","2304400":"fortaleza","2305407":"ico","2305506":"iguatu","2306900":"jaguaribe","2314003":"varzea-alegre"};
const pontos={}; for(const c of cents){pontos[nomes[c.id]]={x:P([c.centroide.longitude,c.centroide.latitude])[0],y:P([c.centroide.longitude,c.centroide.latitude])[1],lat:c.centroide.latitude,lng:c.centroide.longitude};}
const ts=`/**
 * Mapa do Ceará — GERADO a partir de dados oficiais do IBGE (não editar à mão).
 * Contorno: API de malhas v3, estado 23 (qualidade intermediária).
 * Pontos: centróide oficial de cada município (API de malhas v3, metadados).
 * Projeção: equiretangular com correção pelo cosseno da latitude média.
 */
export const mapaCeara = {
  viewBox: "0 0 ${W} ${H}",
  largura: ${W},
  altura: ${H},
  contorno: "${path}",
  pontos: ${JSON.stringify(pontos,null,2).replace(/\n/g,"\n  ")},
} as const;
`;
fs.writeFileSync(out,ts); console.log(W,H,path.length,JSON.stringify(pontos));
