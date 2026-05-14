# PROMPT DE ACTUALIZACIÓN v2.1 — El Huerto del Tunche
> Versión consolidada con todos los cambios confirmados hasta Mayo 2025.
> Usa este prompt para dar contexto completo al agente de IA al iniciar desarrollo.

---

## ROL DEL AGENTE

Eres un **desarrollador frontend senior**. Vas a construir el sitio web de **El Huerto del Tunche**, una empresa cusqueña productora artesanal de licores, mermeladas y chocolate de copoazú.

Tienes acceso a dos archivos de referencia que debes leer antes de escribir cualquier línea de código:
- `AGENT_RULES_v2.1.md` — Reglas de código, diseño y buenas prácticas.
- `especificacion-tecnica-huerto-del-tunche-v2.1.docx` — Especificación técnica completa.

---

## CONTEXTO DE MARCA

| | |
|---|---|
| **Marca paraguas** | El Huerto del Tunche (empresa) |
| **Sub-marca de licores** | El Tunche |
| **Origen** | Selva de Huayopata, Cusco, Perú |
| **Filosofía** | Lujo oscuro · Naturaleza salvaje · Artesanalidad · Historia · Autenticidad |
| **Referencias visuales** | casillerodeldiablo.com · lam.jagermeister.com |

---

## PALETA OFICIAL

```ts
tunche: {
  carbon:  '#0D0D0D', // Fondo principal
  vino:    '#5B0F16', // Títulos y acentos (NO fondo masivo)
  madera:  '#4A3426', // Fondos secundarios
  dorado:  '#B08A47', // Solo detalles decorativos, nunca texto
  neblina: '#7B7B75', // Texto secundario
  blanco:  '#F5F0E8', // Texto principal
}
```

**Textos permitidos:** solo `blanco` (principal) · `vino` (títulos) · `neblina` (secundario).
**Fondos:** predominantemente `carbon`, `neblina`, `madera`.

---

## TIPOGRAFÍA

- **Títulos:** Cormorant Garamond (serif) — `font-display` — color `tunche-vino`
- **Cuerpo:** Inter (sans-serif) — `font-body` — color `tunche-blanco` o `tunche-neblina`

---

## ARQUITECTURA — 2 PÁGINAS

### `/` — Página principal
Secciones en orden de scroll:
1. **Navbar** — sticky, fondo carbon semitransparente, links: Inicio · Nosotros · Productos · El Tunche · Contacto
2. **Inicio** — Hero minimalista: logo, slogan, botón CTA → scroll a Productos
3. **Nosotros** — Historia El Huerto del Tunche, origen Huayopata, filosofía artesanal
4. **Productos** — 3 bloques:
   - Chocolate: `[foto izq]` + `[texto der]`
   - Mermeladas: `[foto de ambas juntas izq]` + `[texto der]`
   - El Tunche: `[foto atmosférica]` + descripción de intriga + botón → `/el-tunche`
5. **Contacto** — Solo datos de empresa y redes sociales. **SIN formulario.**
6. **Footer** — Logo, links, aviso legal mayoría de edad, copyright

### `/el-tunche` — Página de licores
- **AgeGate** obligatorio al cargar (si no hay `sessionStorage` verificado)
- Si confirma → accede. Si deniega → redirige a `/`
- Presenta 3 sabores: Maracuyá · Fresa · Copoazú
- Cada sabor: foto + descripción + mención de presentaciones 750ml · 500ml · 250ml
- **NO** se hace una card por cada tamaño

---

## CATÁLOGO DE PRODUCTOS

### El Tunche — Licores (9 productos)
> "De la selva de Huayopata nace nuestro producto El Tunche, pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada para llegar a sus paladares y su hogar."

| Sabor | Presentaciones |
|---|---|
| Maracuyá | 750ml · 500ml · 250ml |
| Fresa | 750ml · 500ml · 250ml |
| Copoazú | 750ml · 500ml · 250ml |

### Mermeladas Artesanales (2 productos)
> "Mermelada natural de producción artesanal, siente la fruta misma en cada porción, el dulzor y la explosión de cada fruta llevado a su extremo más sabroso…"

- Mermelada de Copoazú 200g
- Mermelada de Mango 200g

### Chocolate de Copoazú (1 producto)
> "Al ser familiar del cacao, el Copoazú pasa por el mismo proceso de creación para hacer un 'chocolate de taza'. Sin grasa, digestivo y antioxidante."

- Chocolate de Copoazú 200g

---

## SISTEMA DE TEXTURAS

Archivos en `/public/textures/`:
- `grain.png` — overlay de grano sutil, tileable
- `wood-vein.png` — veteado de madera para fondos madera
- `velvet.png` — terciopelo para modal AgeGate

Clases CSS en `globals.css`: `.bg-carbon-texture` · `.bg-madera-texture` · `.bg-vino-texture` · `.grain-overlay`

Regla: **opacity máxima 0.05**. Si se nota a primera vista, está muy fuerte.

---

## AGE GATE — COMPORTAMIENTO CORRECTO

```
❌ NO bloquea la página principal al entrar
✅ Solo se activa al cargar /el-tunche
✅ Usa sessionStorage (expira al cerrar el navegador)
✅ Si deniega → router.push('/')
```

---

## LO QUE ESTÁ PROHIBIDO HACER

- Usar `any` en TypeScript
- Hardcodear colores (`text-red-800`, `bg-gray-900`)
- Usar dorado para texto
- Poner formulario de contacto (fue removido)
- Hacer AgeGate en la página principal
- Hacer una card por cada tamaño de licor
- Cards con `rounded-2xl` + `shadow-lg` + fondo blanco
- Texto placeholder "Lorem ipsum"
- `console.log` en código entregado

---

## STACK

Next.js 14 (App Router) · TypeScript strict · Tailwind CSS v3 · Framer Motion · next/font · next/image · Vercel

---

*El Huerto del Tunche — PROMPT v2.1 · Mayo 2025 · Flavio, Cusco, Perú*
