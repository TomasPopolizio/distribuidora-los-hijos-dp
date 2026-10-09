# Distribuidora Los Hijos D.P. — Página web

Página simple (HTML + CSS + JS, sin dependencias) para mostrar combos, la lista de precios y tomar pedidos por WhatsApp.

## Qué tiene
- Logo y colores de la marca (negro + naranja).
- **Combos** destacados con botón "Agregar" y "Pedir ya" (abre WhatsApp con el combo escrito).
- **Lo que más sale**: productos destacados.
- **Lista de precios completa** con buscador y filtro por categoría.
- **Mi pedido**: el cliente suma productos con +/−, pone nombre, qué día retira (jueves a sábado de 9 a 19 hs, sin envíos) y forma de pago, y se manda todo armado por WhatsApp al 11 3158 0752.
- Botón flotante de WhatsApp, dirección (Google Maps) e Instagram.

## Cómo actualizar precios
Todo está en **`productos.js`**:
- `NEGOCIO` → WhatsApp, Instagram, dirección, horario de retiro y fecha de actualización.
- `COMBOS` → los combos de arriba.
- `DESTACADOS` → ids de los productos de "Lo que más sale".
- `CATEGORIAS` → la lista completa: `["id", "Nombre", precio]`.

## Publicarla gratis (GitHub Pages)
1. En el repo: **Settings → Pages**.
2. En "Source" elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guardá.
3. En un minuto queda en `https://<tu-usuario>.github.io/distribuidora-los-hijos-dp/`.

Para probarla en la compu, abrí `index.html` con el navegador.
