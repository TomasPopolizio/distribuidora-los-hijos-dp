(() => {
  const $ = (s) => document.querySelector(s);
  const pesos = (n) => "$ " + n.toLocaleString("es-AR");
  const wspLink = (texto) =>
    `https://wa.me/${NEGOCIO.whatsapp}` + (texto ? `?text=${encodeURIComponent(texto)}` : "");

  // Índice de todos los productos (combos + lista) por id
  const productos = {};
  COMBOS.forEach((c) => (productos[c.id] = { id: c.id, nombre: c.nombre, precio: c.precio }));
  CATEGORIAS.forEach((cat) =>
    cat.items.forEach(([id, nombre, precio]) => (productos[id] = { id, nombre, precio, cat: cat.nombre }))
  );

  // ---------- Carrito ----------
  const CLAVE = "lhdp-pedido";
  let carrito = {};
  try { carrito = JSON.parse(localStorage.getItem(CLAVE)) || {}; } catch (e) { carrito = {}; }
  Object.keys(carrito).forEach((id) => { if (!productos[id]) delete carrito[id]; });

  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(carrito)); } catch (e) {} };
  const cantidadTotal = () => Object.values(carrito).reduce((a, b) => a + b, 0);
  const total = () => Object.entries(carrito).reduce((s, [id, q]) => s + productos[id].precio * q, 0);

  function cambiar(id, delta) {
    const q = (carrito[id] || 0) + delta;
    if (q <= 0) delete carrito[id]; else carrito[id] = q;
    if (delta > 0 && q === 1) aviso(`Agregado: ${productos[id].nombre}`);
    guardar();
    refrescar();
  }

  // Control "+" o "− n +" según la cantidad
  function control(id) {
    const q = carrito[id] || 0;
    if (!q) return `<button class="add" data-add="${id}" aria-label="Agregar">+</button>`;
    return `<div class="qty"><button data-sub="${id}" aria-label="Quitar uno">−</button><span>${q}</span><button data-add="${id}" aria-label="Agregar uno">+</button></div>`;
  }

  // ---------- Render ----------
  function renderCombos() {
    $("#listaCombos").innerHTML = COMBOS.map((c) => `
      <article class="combo">
        <span class="tag">${c.tag}</span>
        <h3>${c.nombre}</h3>
        <p>${c.detalle}</p>
        <div class="price">${pesos(c.precio)}</div>
        <div class="actions" data-slot="${c.id}">
          ${carrito[c.id]
            ? control(c.id)
            : `<button class="btn btn-orange" data-add="${c.id}">Agregar</button>`}
          <a class="btn btn-wsp" target="_blank" rel="noopener"
             href="${wspLink(`Hola! Quiero pedir el ${c.nombre} (${c.detalle}) - ${pesos(c.precio)}`)}">Pedir ya</a>
        </div>
      </article>`).join("");
  }

  function renderDestacados() {
    $("#listaDestacados").innerHTML = DESTACADOS.filter((id) => productos[id]).map((id) => {
      const p = productos[id];
      return `<div class="card"><div class="name">${p.nombre}</div>
        <div class="row"><span class="price">${pesos(p.precio)}</span>${control(id)}</div></div>`;
    }).join("");
  }

  let filtroCat = "Todas";
  let filtroTexto = "";
  const normal = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  function renderChips() {
    const nombres = ["Todas", ...CATEGORIAS.map((c) => c.nombre)];
    $("#chips").innerHTML = nombres.map((n) =>
      `<button class="chip${n === filtroCat ? " active" : ""}" data-cat="${n}">${n}</button>`).join("");
  }

  function renderCatalogo() {
    const t = normal(filtroTexto.trim());
    let hay = false;
    $("#catalogo").innerHTML = CATEGORIAS
      .filter((c) => filtroCat === "Todas" || c.nombre === filtroCat)
      .map((c) => {
        const items = c.items.filter(([, nombre]) => !t || normal(nombre).includes(t));
        if (!items.length) return "";
        hay = true;
        return `<div class="cat"><h3>${c.nombre}</h3><ul class="items">${items.map(([id, nombre, precio]) =>
          `<li class="item"><span class="name">${nombre}</span><span class="price">${pesos(precio)}</span>${control(id)}</li>`
        ).join("")}</ul></div>`;
      }).join("");
    $("#sinResultados").hidden = hay;
  }

  function renderCarrito() {
    const ids = Object.keys(carrito);
    $("#itemsCarrito").innerHTML = ids.map((id) => {
      const p = productos[id];
      return `<li><span class="name">${p.nombre}<span class="sub">${pesos(p.precio * carrito[id])}</span></span>${control(id)}</li>`;
    }).join("");
    $("#carritoVacio").hidden = ids.length > 0;
    $("#totalCarrito").textContent = pesos(total());
    $("#totalBarra").textContent = pesos(total());
    $("#contador").textContent = cantidadTotal();
    $("#barraPedido").hidden = ids.length === 0;
    document.body.classList.toggle("has-cart", ids.length > 0);
  }

  function refrescar() {
    renderCombos();
    renderDestacados();
    renderCatalogo();
    renderCarrito();
  }

  // ---------- Panel ----------
  const drawer = $("#carrito");
  function abrir() { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); $("#overlay").hidden = false; }
  function cerrar() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); $("#overlay").hidden = true; }

  let timer;
  function aviso(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => t.classList.remove("show"), 1600);
  }

  // ---------- Eventos ----------
  document.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    const sub = e.target.closest("[data-sub]");
    const chip = e.target.closest("[data-cat]");
    if (add) cambiar(add.dataset.add, 1);
    else if (sub) cambiar(sub.dataset.sub, -1);
    else if (chip) { filtroCat = chip.dataset.cat; renderChips(); renderCatalogo(); }
  });

  $("#buscar").addEventListener("input", (e) => {
    filtroTexto = e.target.value;
    if (filtroTexto && filtroCat !== "Todas") { filtroCat = "Todas"; renderChips(); }
    renderCatalogo();
  });

  $("#abrirCarrito").addEventListener("click", abrir);
  $("#verPedido").addEventListener("click", abrir);
  $("#cerrarCarrito").addEventListener("click", cerrar);
  $("#overlay").addEventListener("click", cerrar);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });

  const form = $("#formPedido");

  $("#vaciar").addEventListener("click", () => {
    if (!cantidadTotal() || confirm("¿Vaciar todo el pedido?")) { carrito = {}; guardar(); refrescar(); }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cantidadTotal()) { aviso("Agregá al menos un producto"); return; }
    const d = new FormData(form);
    const lineas = Object.entries(carrito).map(([id, q]) =>
      `• ${q} x ${productos[id].nombre} — ${pesos(productos[id].precio * q)}`);
    const msg = [
      `Hola! Quiero hacer un pedido 🛒`,
      ``,
      ...lineas,
      ``,
      `*Total estimado: ${pesos(total())}*`,
      ``,
      `Nombre: ${d.get("nombre")}`,
      `Retiro en el local: ${d.get("dia")}`,
      `Pago: ${d.get("pago")}`,
      d.get("notas") ? `Comentarios: ${d.get("notas")}` : null,
    ].filter((l) => l !== null).join("\n");
    window.open(wspLink(msg), "_blank");
  });

  // ---------- Datos fijos ----------
  const saludo = wspLink("Hola! Quiero hacer un pedido");
  $("#wspHero").href = saludo;
  $("#fab").href = saludo;
  $("#wspInfo").href = saludo;
  $("#wspInfo").textContent = "WhatsApp " + NEGOCIO.whatsappVisible;
  $("#insta").href = `https://instagram.com/${NEGOCIO.instagram}`;
  $("#insta").textContent = "@" + NEGOCIO.instagram;
  $("#mapa").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(NEGOCIO.direccion + ", Buenos Aires")}`;
  $("#mapa").textContent = NEGOCIO.direccion;
  $("#horarioHero").textContent = `🏪 Retiro en el local · Jue a Sáb de 9 a 19 hs`;
  $("#horarioInfo").textContent = NEGOCIO.horario;
  $("#retiroInfo").textContent = `${NEGOCIO.direccion} · ${NEGOCIO.horario}. No hacemos envíos.`;
  $("#actualizado").textContent = `Precios actualizados al ${NEGOCIO.actualizado}. Sujetos a modificación.`;

  renderChips();
  refrescar();
})();
