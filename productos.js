// ============================================================
//  DATOS DE LA DISTRIBUIDORA — editá este archivo para cambiar
//  precios, combos o el número de WhatsApp.
// ============================================================

const NEGOCIO = {
  nombre: "Distribuidora Los Hijos D.P.",
  whatsapp: "5491131580752", // 11 3158 0752 (formato internacional, sin + ni espacios)
  whatsappVisible: "11 3158 0752",
  instagram: "distribuidoraloshijosd.p",
  direccion: "1° de Mayo 1321 - Loma Hermosa",
  horario: "Jueves a sábado de 9 a 19 hs",
  // No hacemos envíos: todos los pedidos se retiran en el local
  actualizado: "20/09/2026",
};

// Combos que se muestran destacados arriba de todo
const COMBOS = [
  { id: "c1", nombre: "Combo Fernet + 2 Cocas", detalle: "Fernet 750cc + 2 Coca Cola 1,75L", precio: 21900, tag: "El más pedido" },
  { id: "c2", nombre: "Combo Buhero + Absolut", detalle: "Fernet Buhero 700ml + Absolut 700ml", precio: 27300, tag: "Para la previa" },
  { id: "c3", nombre: "Combo Aperol + 2 Cepitas", detalle: "Aperol 750ml + 2 Cepitas botella", precio: 14500, tag: "Spritz" },
  { id: "c4", nombre: "Combo 2 Federico + 4 Speed", detalle: "2 Federico de Alvear 750ml + 4 Speed 250ml", precio: 14600, tag: "Brindis" },
  { id: "c5", nombre: "Combo Viñas + 2 Manaos", detalle: "Vino Viñas + 2 Manaos 2,25L", precio: 5300, tag: "Económico" },
];

// Productos destacados ("Lo que más sale")
const DESTACADOS = ["g1", "g6", "b12", "b6", "ap6", "ap7", "en3", "b8"];

// Lista completa de precios
const CATEGORIAS = [
  {
    nombre: "Gaseosas",
    items: [
      ["g1", "Coca Cola Regular 1.75L x8", 27600],
      ["g2", "Coca Cola Regular 2.25L x8", 36600],
      ["g3", "Coca Cola Regular botella 600cc x6", 9000],
      ["g4", "Coca Cola Zero botella 600cc x6", 9000],
      ["g5", "Coca Cola Regular lata 354cc x6", 8000],
      ["g6", "Coca Cola Zero 2.25L x8", 36600],
      ["g7", "Coca Zero lata 354cc x6", 8000],
      ["g8", "Cunnington 2,25L Cola x6", 11000],
      ["g9", "Cunnington 2,25L Pomelo Light x6", 11000],
      ["g10", "Fanta Naranja 2.25L x8", 36600],
      ["g11", "Fanta Naranja lata 354cc x6", 8000],
      ["g12", "Manaos 2,25L x6 Cola", 8900],
      ["g13", "Manaos 2,25L x6 Lima", 8900],
      ["g14", "Manaos 2,25L x6 Naranja", 8900],
      ["g15", "Manaos 2,25L x6 Pomelo", 8900],
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
      ["g27", "Schweppes Tónica 1,5L x8", 28000],
    ],
  },
  {
    nombre: "Cervezas",
    items: [
      ["b1", "Amstel 473ml x6 lata", 10700],
      ["b2", "Andes Origen Rubia 473cc x6 lata", 15600],
      ["b3", "Andes Roja 473cc x6 lata", 19100],
      ["b4", "Brahma 473ml x6 lata", 11900],
      ["b5", "Brahma 710ml x4 lata", 13600],
      ["b6", "Budweiser 330ml x6 porrón", 8500],
      ["b7", "Budweiser 473ml x6 lata", 11900],
      ["b8", "Corona 330ml x6 porrón", 20200],
      ["b9", "Corona 710ml x6", 32700],
      ["b10", "Heineken 473ml x6 lata", 15600],
      ["b11", "Heineken 710ml x6 lata", 23600],
      ["b12", "Imperial Golden 473ml x6 lata", 10300],
      ["b13", "Imperial Stout 473 lata x6", 13500],
      ["b14", "Miller lata 473ml x6", 12800],
      ["b15", "Quilmes Clásica 473ml x6", 13600],
      ["b16", "Schneider 473ml x6 lata", 10900],
      ["b17", "Schneider 710ml x6 lata", 16900],
      ["b18", "Stella Artois 473ml x6 lata", 20300],
      ["b19", "Warsteiner 473ml x6 lata", 10000],
    ],
  },
  {
    nombre: "Aperitivos",
    items: [
      ["ap1", "Aperol 750ml", 10100],
      ["ap2", "Campari 750ml", 10000],
      ["ap3", "Cinzano Rosso 750ml", 7700],
      ["ap4", "Dr Lemon Vodka 1L", 3600],
      ["ap5", "Dr Lemon Limón 473ml lata x6", 11400],
      ["ap6", "Fernet 1000ml", 23600],
      ["ap7", "Fernet 750ml", 16500],
      ["ap8", "Fernet 1882 750ml", 7500],
      ["ap9", "Fernet Buhero 700ml", 8500],
      ["ap10", "Gancia Americano 980ml", 6700],
    ],
  },
  {
    nombre: "Destilados",
    items: [
      ["d1", "Gin Gordon's 700ml", 13600],
      ["d2", "Sky Común 700ml", 8300],
      ["d3", "Sky Raspberry 750ml", 9900],
      ["d4", "Smirnoff", 8600],
      ["d5", "Smirnoff Ice Green Apple lata x6", 21000],
      ["d6", "Smirnoff Red Berries 473ml x6", 21000],
      ["d7", "Whisky Blenders 750ml", 11100],
      ["d8", "Whisky JW Red Label", 32000],
    ],
  },
  {
    nombre: "Licores",
    items: [["l1", "Baileys Original 750ml", 33900]],
  },
  {
    nombre: "Espumantes y Sidras",
    items: [
      ["e1", "Chandon Extra Brut 750ml", 17500],
      ["e2", "Dada Extra Brut 750ml", 6700],
      ["e3", "Federico de Alvear 750ml Extra Brut Dulce x1", 4600],
      ["e4", "Sidra 1888 750ml", 49000],
    ],
  },
  {
    nombre: "Vinos",
    items: [
      ["v1", "Alma Mora Blend Blanco 750ml", 5600],
      ["v2", "Alma Mora Chardonnay 750ml", 5800],
      ["v3", "Dada N°1 750ml", 5400],
      ["v4", "Dada N°6 Honey 750ml", 5400],
      ["v5", "Frizze Evo Blue 1L x6", 17000],
      ["v6", "Hormiga Negra 750ml", 3300],
      ["v7", "Latitud 33 Malbec 750ml", 6600],
      ["v8", "Suter Cosecha Tardía 750ml", 3100],
      ["v9", "Termidor Blanco 1L x12", 21400],
      ["v10", "Termidor Tinto 1L x12", 21400],
      ["v11", "Viñas Balbo Tinto botellón 1,125L", 2500],
      ["v12", "Vino Colón Selecto 750ml", 10000],
      ["v13", "Norton Cosecha Tardía Blanco Dulce 750ml", 5000],
      ["v14", "La Mascota Malbec 750ml", 8500],
      ["v15", "Trapiche Reserva Malbec 750ml", 7500],
      ["v16", "Finca Las Moras Malbec 750ml", 3500],
      ["v17", "Finca Las Moras Blanco Dulce 750ml", 3500],
      ["v18", "Dada Caramel N°9 Tinto 750ml", 4800],
    ],
  },
  {
    nombre: "Energizantes",
    items: [
      ["en1", "Monster Energy lata 473ml x6 Mango", 16000],
      ["en2", "Monster Energy Ultra Blanco x6", 16000],
      ["en3", "Monster Green Negro 473 x6", 16000],
      ["en4", "Monster Pipeline Punch", 8000],
      ["en5", "Speed Original 250ml x6", 9000],
      ["en6", "Speed XL 473ml x6", 15600],
    ],
  },
  {
    nombre: "Jugos",
    items: [
      ["j1", "Cepita Naranja botella 995ml x6", 14300],
      ["j2", "Cepita Naranja botella 300ml x6", 7500],
      ["j3", "Cepita Naranja Tetra 1L x8", 16500],
      ["j4", "Baggio Fresh Naranja 600ml x6", 5700],
      ["j5", "Jugo Baggio Manzana 1L x8", 15000],
      ["j6", "Jugo Baggio Naranja 1L x8", 15000],
      ["j7", "Jugo Baggio Naranja 200ml x18", 11000],
    ],
  },
  {
    nombre: "Aguas",
    items: [
      ["a1", "Agua Manaos 2L x6", 5500],
      ["a2", "Agua Manaos 6L bidón", 2500],
      ["a3", "Agua Villavicencio sin gas 2L x6", 10400],
      ["a4", "Smartwater sin gas 591ml x6", 7500],
      ["a5", "Agua Villavicencio con gas 1.5L x6", 11600],
      ["a6", "Soda Manaos 2L x6", 9700],
      ["a7", "Soda Toraso 2L x6", 7900],
      ["a8", "Agua Placer Manzana 1,5L x6", 6500],
      ["a9", "Agua Placer Naranja 1,5L x6", 6500],
      ["a10", "Aquarius Pera 600 x6", 8200],
      ["a11", "Aquarius Pomelo Rosado 600 x6", 8200],
      ["a12", "Brio Manzana x6", 6000],
      ["a13", "Brio Multifruta x6", 6000],
      ["a14", "Brio Naranja x6", 6000],
      ["a15", "Brio Pomelo x6", 6000],
      ["a16", "Levité Naranja 2.25L x6", 16900],
      ["a17", "Levité Pomelo 2.25L x6", 9700],
    ],
  },
  {
    nombre: "Isotónicas",
    items: [
      ["i1", "Powerade Mountain Blue 500ml x6", 8300],
      ["i2", "Powerade Frutos Rojos 500ml x6", 8300],
      ["i3", "Powerade Frutos Rojos 995ml x6", 10500],
      ["i4", "Powerade Mountain Blue 995ml x6", 10500],
    ],
  },
];
