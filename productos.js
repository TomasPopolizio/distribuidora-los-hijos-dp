// ============================================================
//  DATOS DE LA DISTRIBUIDORA — editá este archivo para cambiar
//  precios, combos o el número de WhatsApp.
// ============================================================

const NEGOCIO = {
  nombre: "Distribuidora Los Hijos D.P.",
  whatsapp: "5491131580752", // 11 3158 0752 (formato internacional, sin + ni espacios)
  whatsappVisible: "11 3158 0752",
  instagram: "distribuidoraloshijosd.p",
  email: "distribuidora.loshijosdp@gmail.com",
  // Link de la tienda en Tiendanube (ej: "https://loshijosdp.mitiendanube.com").
  // Si queda vacío, no se muestran los botones de "Comprar online".
  tienda: "",
  direccion: "1° de Mayo 1321 - Loma Hermosa",
  horario: "Jueves a sábado de 9 a 19 hs",
  // No hacemos envíos: todos los pedidos se retiran en el local
  actualizado: "13/10/2026",
};

// Combos destacados (foto: imagen de la tarjeta)
const COMBOS = [
  // Con flyer (foto real)
  { id: "c6", foto: "assets/combos/skyy-speed.webp", nombre: "Combo Skyy + 3 Speed", detalle: "Skyy Vodka 700ml + 3 Speed 250ml", precio: 12500, tag: "El más pedido" },
  { id: "c7", foto: "assets/combos/gancia-sprite.webp", nombre: "Promo Gancia + 2 Sprite", detalle: "Gancia Americano + 2 Sprite 2,25L", precio: 15500, tag: "Promo" },
  { id: "c3", foto: "assets/combos/aperol-cepitas.webp", nombre: "Combo Aperol + 2 Cepitas", detalle: "Aperol 750ml + 2 Cepitas botella", precio: 14500, tag: "El aperitivo perfecto" },
  { id: "c4", foto: "assets/combos/federico-speed.webp", nombre: "Combo 2 Federico + 4 Speed", detalle: "2 Federico de Alvear 750ml + 4 Speed 250ml", precio: 14600, tag: "Burbujas" },
  { id: "c5", foto: "assets/combos/vinas-manaos.webp", nombre: "Combo Viñas + 2 Manaos", detalle: "Vino Viñas de Balbo + 2 Manaos 2,25L", precio: 5300, tag: "Clásico" },
  // Sin flyer todavía (usan la foto de la categoría)
  { id: "c1", foto: "assets/fotos/aperitivos.jpg", nombre: "Combo Branca + 2 Cocas", detalle: "Fernet Branca 750cc + 2 Coca Cola 1,75L", precio: 21900, tag: "Para la previa" },
  { id: "c8", foto: "assets/fotos/destilados.jpg", nombre: "Combo JW Red Label + 3 Speed", detalle: "Whisky Johnnie Walker Red Label + 3 Speed 473ml", precio: 39000, tag: "Nuevo" },
  { id: "c2", foto: "assets/fotos/destilados.jpg", nombre: "Combo Buhero + Absolut", detalle: "Fernet Buhero 700ml + Absolut 700ml", precio: 27300, tag: "Fuerte" },
];

// Fotos reales de cada producto (opcional). Subí la foto a assets/productos/
// y agregá una línea con el id del producto. Si no tiene, usa la foto de la categoría.
const FOTOS_PRODUCTOS = {
  d2: "assets/productos/skyy.jpg",
  en5: "assets/productos/speed.jpg",
  ap10: "assets/productos/gancia.jpg",
  g25: "assets/productos/sprite.jpg",
  g12: "assets/productos/manaos.jpg",
  v11: "assets/productos/vinas.jpg",
  ap1: "assets/productos/aperol.jpg",
  j1: "assets/productos/cepita.jpg",
  e3: "assets/productos/federico.jpg",
};

// Productos destacados ("Lo que más sale")
const DESTACADOS = ["ap1", "d2", "ap10", "e3", "en5", "g25", "v11", "j1"];

// Lista completa de precios
const CATEGORIAS = [
  {
    nombre: "Gaseosas",
    foto: "assets/fotos/gaseosas.jpg",
    items: [
      ["g1", "Coca Cola Regular 1.75L x8", 27600],
      ["g2", "Coca Cola Regular 2.25L x8", 36600],
      ["g3", "Coca Cola Regular botella 600cc x6", 9000],
      ["g5", "Coca Cola Regular lata 354cc x6", 8000],
      ["g6", "Coca Cola Zero 2.25L x8", 36600],
      ["g4", "Coca Cola Zero botella 600cc x6", 9000],
      ["g7", "Coca Zero lata 354cc x6", 8000],
      ["g8", "Cunnington 2,25L Cola x6", 11000],
      ["g9", "Cunnington 2,25L Pomelo Light x6", 11000],
      ["g10", "Fanta Naranja 2.25L x8", 36600],
      ["g11", "Fanta Naranja lata 354cc x6", 8000],
      ["g27", "Schweppes Tónica 1,5L", 28000],
      ["g12", "Manaos 2,25L x6 (varios sabores)", 8300],
      ["g16", "Manaos Cola 600ml x12", 8900],
      ["g17", "Paso de los Toros Pomelo 1,5L", 21300],
      ["g18", "Paso de los Toros Tónica 1,5L", 21300],
      ["g19", "Pepsi Black 2,25L x8", 24900],
      ["g20", "Pepsi lata 354cc x6", 8500],
      ["g21", "Pepsi Original 2L x8", 25000],
      ["g22", "Pepsi PET 500cc x6", 9300],
      ["g23", "Seven Up 2L x8", 21100],
      ["g24", "Seven Up Free 2,25L x8", 22700],
      ["g25", "Sprite Regular 2.25L x8", 36600],
      ["g26", "Sprite Regular lata 354cc x6", 8000],
    ],
  },
  {
    nombre: "Cervezas",
    foto: "assets/fotos/cervezas.jpg",
    items: [
      ["b1", "Amstel 473ml x6 lata", 9300],
      ["b2", "Andes Origen Rubia 473cc x6 lata", 15600],
      ["b3", "Andes Roja 473cc x6 lata", 19100],
      ["b4", "Brahma 473ml x6 lata", 11900],
      ["b5", "Brahma 710ml x4 lata", 12600],
      ["b20", "Brul cerveza 1L lata x6", 22600],
      ["b6", "Budweiser 330ml x6 porrón", 8500],
      ["b7", "Budweiser 473ml x6 lata", 11900],
      ["b8", "Corona 330ml x6 porrón", 20200],
      ["b9", "Corona 710ml x6", 32700],
      ["b10", "Heineken 473ml x6 lata", 15600],
      ["b11", "Heineken 710ml x6 lata", 23600],
      ["b12", "Imperial Golden 473ml x6 lata", 10300],
      ["b13", "Imperial Stout 473ml x6 lata", 13500],
      ["b14", "Miller 473ml x6 lata", 12800],
      ["b15", "Quilmes Clásica 473ml x6 lata", 13600],
      ["b16", "Schneider 473ml x6 lata", 10900],
      ["b17", "Schneider 710ml x6 lata", 16900],
      ["b18", "Stella Artois 473ml x6 lata", 20300],
      ["b19", "Warsteiner 473ml x6 lata", 10000],
      ["b21", "Cajón cerveza Iguana x12", 30000],
      ["b22", "Cajón cerveza Palermo x12", 30000],
    ],
  },
  {
    nombre: "Aperitivos",
    foto: "assets/fotos/aperitivos.jpg",
    items: [
      ["ap1", "Aperol 750ml", 10100],
      ["ap2", "Campari 750ml", 10000],
      ["ap3", "Cinzano Rosso 750ml", 7700],
      ["ap4", "Dr Lemon Vodka 1L", 3600],
      ["ap6", "Fernet 1000ml", 23600],
      ["ap8", "Fernet 1882 750ml", 7500],
      ["ap7", "Fernet 750ml", 16500],
      ["ap9", "Fernet Buhero 750ml", 8500],
      ["ap10", "Gancia Americano 980ml", 6700],
    ],
  },
  {
    nombre: "Destilados",
    foto: "assets/fotos/destilados.jpg",
    items: [
      ["d1", "Gin Gordon's 700ml", 13600],
      ["d2", "Skyy Vodka 700ml", 8300],
      ["d3", "Skyy Raspberry 750ml", 9900],
      ["d4", "Smirnoff 700ml", 8600],
      ["d5", "Smirnoff Ice Green Apple 473ml x6", 21000],
      ["d6", "Smirnoff Red Berries 473ml x6", 21000],
      ["d7", "Whisky Blenders 750ml", 11100],
      ["d8", "Whisky JW Red Label 750ml", 32000],
      ["d9", "Jägermeister 700ml", 28000],
    ],
  },
  {
    nombre: "Licores",
    foto: "assets/fotos/licores.jpg",
    items: [["l1", "Baileys Original 750ml", 33900]],
  },
  {
    nombre: "Espumantes y Sidras",
    foto: "assets/fotos/espumantes.jpg",
    items: [
      ["e1", "Chandon Extra Brut 750ml", 17500],
      ["e2", "Dada Extra Brut 750ml", 6700],
      ["e3", "Federico de Alvear 750ml Extra Brut Dulce x1", 4600],
      ["e4", "Sidra 1888 750ml x6", 49000],
    ],
  },
  {
    nombre: "Vinos",
    foto: "assets/fotos/vinos.jpg",
    items: [
      ["v1", "Alma Mora Blend Blanco 750ml", 5600],
      ["v2", "Alma Mora Chardonnay 750ml", 5600],
      ["v12", "Colón Selecto Durazno 700ml", 8000],
      ["v13", "Norton Cosecha Tardía", 5000],
      ["v3", "Dada N°1 Tinto 750ml", 5400],
      ["v4", "Dada N°6 Honey 750ml", 5400],
      ["v18", "Dada N°9 Tinto Caramel", 5400],
      ["v17", "Finca Las Moras Blanco Dulce", 3500],
      ["v5", "Frizze Evo Blue 1L x6", 17000],
      ["v6", "Hormiga Negra 750ml", 3300],
      ["v14", "La Mascota Cabernet Sauvignon 750ml", 8500],
      ["v16", "Las Moras Malbec 750ml", 3500],
      ["v7", "Latitud 33 Malbec 750ml", 6600],
      ["v8", "Suter Cosecha Tardía 750ml", 3100],
      ["v9", "Termidor Blanco 1L x12", 21400],
      ["v10", "Termidor Tinto 1L x12", 21400],
      ["v15", "Trapiche Reserva Malbec 750ml", 7500],
      ["v11", "Viñas de Balbo Tinto botellón 1,125L", 2500],
    ],
  },
  {
    nombre: "Energizantes",
    foto: "assets/fotos/energizantes.jpg",
    items: [
      ["en1", "Monster Energy Mango 473ml x6", 16000],
      ["en2", "Monster Energy Ultra 473ml x6", 16000],
      ["en3", "Monster Green Negro 473ml x6", 16000],
      ["en4", "Monster Pipeline Punch 473ml x6", 16000],
      ["en5", "Speed Original 250ml x6", 9000],
      ["en6", "Speed XL 473ml x6", 15600],
    ],
  },
  {
    nombre: "Jugos",
    foto: "assets/fotos/jugos.jpg",
    items: [
      ["j4", "Baggio Fresh Naranja 600ml x6", 5700],
      ["j1", "Cepita Naranja botella 995ml x6", 14300],
      ["j3", "Cepita Naranja Tetra 1L x8", 16500],
      ["j5", "Jugo Baggio Manzana 1L x8", 15000],
      ["j6", "Jugo Baggio Naranja 1L x8", 15000],
      ["j7", "Jugo Baggio Naranja 200ml x18", 11000],
      ["j2", "Cepita Naranja Tentación 300ml x6", 7500],
    ],
  },
  {
    nombre: "Aguas",
    foto: "assets/fotos/aguas.jpg",
    items: [
      ["a1", "Agua Manaos 2L botella x6", 5500],
      ["a2", "Agua Manaos 6L bidón", 2500],
      ["a4", "Agua Smartwater sin gas 591ml x6", 7500],
      ["a3", "Agua Villavicencio sin gas 2L x6", 13000],
      ["a18", "Agua Villavicencio sin gas 1,5L x6", 11500],
      ["a5", "Agua Villavicencio con gas 1.5L x6", 11600],
      ["a6", "Soda Manaos 2L x6", 9700],
      ["a7", "Soda Toraso 2L x6", 7900],
      ["a8", "Agua Placer 1,5L x6 (varios sabores)", 6500],
      ["a19", "Agua Placer 600ml x12 (varios sabores)", 7900],
      ["a10", "Aquarius Pera sin gas 600ml x6", 8200],
      ["a11", "Aquarius Pomelo sin gas 600ml x6", 8200],
      ["a12", "Brio x6 (varios sabores)", 6000],
      ["a16", "Levité 2.25L x6 (varios sabores)", 16900],
    ],
  },
  {
    nombre: "Isotónicas",
    foto: "assets/fotos/isotonicas.jpg",
    items: [
      ["i2", "Powerade Frutos Rojos 600ml x6", 8300],
      ["i3", "Powerade Frutos Rojos 995ml x6", 10500],
      ["i1", "Powerade Mountain Blue 500ml x6", 8300],
      ["i4", "Powerade Mountain Blue 995ml x6", 10500],
    ],
  },
];
