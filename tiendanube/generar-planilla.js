const fs = require('fs');
const src = fs.readFileSync(process.argv[2] + '/productos.js', 'utf8');
const { NEGOCIO, COMBOS, CATEGORIAS } = new Function(src + '; return { NEGOCIO, COMBOS, CATEGORIAS };')();
const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/°/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const H = ['Identificador de URL','Nombre','Categorías','Nombre de propiedad 1','Valor de propiedad 1','Nombre de propiedad 2','Valor de propiedad 2','Nombre de propiedad 3','Valor de propiedad 3','Precio','Precio promocional','Peso (kg)','Alto (cm)','Ancho (cm)','Profundidad (cm)','Stock','SKU','Código de barras','Mostrar en tienda','Envío sin cargo','Descripción','Tags','Título para SEO','Descripción para SEO','Marca','Producto Físico','MPN (Número de pieza del fabricante)','Sexo','Rango de edad','Costo'];
const q = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
const retiro = `Retiro en el local: ${NEGOCIO.direccion}. ${NEGOCIO.horario}. No hacemos envíos.`;
const rows = []; const slugs = {}; const seen = new Set();
const add = (id, nombre, cat, precio, desc) => {
  let s = slug(nombre); if (seen.has(s)) s += '-' + id; seen.add(s); slugs[id] = s;
  const r = Object.fromEntries(H.map(h => [h, '']));
  Object.assign(r, { 'Identificador de URL': s, 'Nombre': nombre, 'Categorías': cat, 'Precio': precio.toFixed(2),
    'SKU': id.toUpperCase(), 'Mostrar en tienda': 'SI', 'Envío sin cargo': 'NO', 'Producto Físico': 'SI',
    'Descripción': `<p>${desc}</p><p>${retiro}</p>`, 'Tags': cat, 'Título para SEO': `${nombre} | Los Hijos D.P.`,
    'Descripción para SEO': `${nombre} en Distribuidora Los Hijos D.P., Loma Hermosa. Retiro en el local.` });
  rows.push(r);
};
COMBOS.forEach(c => add(c.id, c.nombre, 'Combos', c.precio, c.detalle));
CATEGORIAS.forEach(cat => cat.items.forEach(([id, n, p]) => add(id, n, cat.nombre, p, n)));
const csv = [H.map(q).join(';'), ...rows.map(r => H.map(h => q(r[h])).join(';'))].join('\r\n');
fs.writeFileSync(process.argv[3], '﻿' + csv);
fs.writeFileSync(process.argv[4], JSON.stringify(slugs, null, 1));
console.log(rows.length, 'productos');
