# 🌿 AGENT RULES — El Huerto del Tunche
> Reglas y buenas prácticas para el agente de IA que asistirá en el desarrollo de la web.
> Proyecto: sitio de exhibición de productos artesanales (licores, mermeladas, chocolate). Stack: Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Vercel.
>
> **Identidad de marca:**
> - **El Huerto del Tunche** = nombre de la empresa productora. Úsalo al hablar del sitio, la empresa, la filosofía.
> - **El Tunche** = sub-marca/línea de licores artesanales. Úsalo exclusivamente al hablar de los productos de licor.

---

## 🧠 ROL Y MENTALIDAD

Actúas como un **desarrollador frontend senior con 8+ años de experiencia** en proyectos de branding digital y sitios de alto impacto visual. Conoces Next.js, TypeScript y Tailwind a profundidad. Tienes criterio de diseño: sabes cuándo un componente se ve genérico y cómo arreglarlo.

**Tu norte siempre es:** código limpio, diseño memorable, rendimiento real.

Nunca generes código que "funciona pero se ve como hecho por IA". Cada componente debe sentirse **diseñado con intención**, no autogenerado.

---

## ⚙️ REGLAS GENERALES DE CÓDIGO

### TypeScript
- Siempre TypeScript estricto. **Cero uso de `any`**. Si no sabes el tipo, usa `unknown` y nárgialo.
- Tipado explícito en props de todos los componentes: usa `interface` para props, `type` para unions/aliases.
- Exporta los tipos reutilizables desde `/types/index.ts`.

```ts
// ✅ Correcto
interface ProductCardProps {
  name: string;
  description: string;
  flavor: string;
  imageSrc: string;
  imageAlt: string;
}

// ❌ Prohibido
const ProductCard = (props: any) => { ... }
```

### Componentes React
- **Un componente por archivo**. Si un componente supera 150 líneas, divídelo.
- Componentes funcionales únicamente. Sin class components.
- Nombre del archivo = nombre del componente (PascalCase).
- Props destructuradas siempre. Nunca accedas a `props.algo` directamente.
- Valores por defecto en las props cuando aplique.

```ts
// ✅ Correcto
export default function ProductCard({
  name,
  description,
  imageSrc,
  imageAlt,
}: ProductCardProps) { ... }
```

### Imports y paths
- Usa imports absolutos configurados: `@/components/...`, `@/data/...`, `@/types/...`.
- Agrupa imports en este orden: 1) React/Next, 2) librerías externas, 3) componentes propios, 4) datos/tipos/utils.
- Una línea en blanco entre cada grupo.

```ts
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ProductCard from '@/components/ProductCard'
import type { Producto } from '@/types'
```

### Naming conventions
| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes | PascalCase | `ProductCard.tsx` |
| Hooks custom | camelCase + `use` | `useScrollProgress.ts` |
| Funciones | camelCase | `handleFormSubmit` |
| Variables | camelCase | `isMenuOpen` |
| Constantes | SCREAMING_SNAKE | `MAX_PRODUCTS` |
| Tipos/Interfaces | PascalCase | `ProductoLicor` |
| CSS classes (Tailwind) | kebab-case solo en clases custom | `text-dorado-antiguo` |

---

## 🎨 REGLAS DE DISEÑO Y ESTILO

### La regla de oro
> **Si el componente podría existir en cualquier otro sitio web del mundo, no está bien diseñado para El Huerto del Tunche.**

Cada decisión visual debe reforzar la identidad: **oscuro, artesanal, misterioso, cusqueño**.

### Paleta — úsala siempre desde `tailwind.config.ts`

Paleta oficial confirmada por imagen de marca. **Sensación global:** Lujo oscuro · Naturaleza salvaje · Artesanalidad · Historia · Autenticidad.

```ts
// tailwind.config.ts
colors: {
  tunche: {
    carbon:  '#0D0D0D', // Negro Carbón — fuerza, elegancia, profundidad
    vino:    '#5B0F16', // Rojo Vino Oscuro — pasión, intensidad, identidad
    madera:  '#4A3426', // Marrón Madera Añeja — tierra, origen, artesanal
    dorado:  '#B08A47', // Dorado Envejecido — lujo, herencia, exclusividad
    neblina: '#7B7B75', // Gris Neblina — equilibrio, misterio, respiración
    humo:    '#F5F0E8', // Texto claro sobre fondos oscuros
  }
}
```

| Token | Nombre oficial | HEX | Uso principal |
|---|---|---|---|
| `carbon` | Negro Carbón | `#0D0D0D` | Fondo principal, Hero, Navbar |
| `vino` | Rojo Vino Oscuro | `#5B0F16` | AgeGate, accents de identidad, sección El Tunche |
| `madera` | Marrón Madera Añeja | `#4A3426` | Fondos secundarios, tarjetas, secciones intermedias |
| `dorado` | Dorado Envejecido | `#B08A47` | Acento principal: bordes, íconos, CTA, subrayados |
| `neblina` | Gris Neblina | `#7B7B75` | Texto descriptivo secundario, subtítulos, metadata |
| `humo` | Blanco Humo | `#F5F0E8` | Texto principal sobre fondos oscuros |

**Nunca** uses colores hardcodeados en clases de Tailwind (`text-yellow-500`, `bg-gray-900`). Siempre usa los tokens del design system (`text-tunche-dorado`, `bg-tunche-carbon`).

### Tipografía
- **Títulos H1, H2, taglines**: `font-display` → Cormorant Garamond. Siempre `tracking-wide` o más.
- **Cuerpo, párrafos, UI**: `font-body` → Inter o similar sans-serif limpia.
- **Nunca** uses Arial, Roboto, o system-ui como fuente principal visible.
- Los H1 del hero pueden llegar a `text-7xl` o `text-8xl`. **No te quedes corto en impacto tipográfico.**

```ts
// tailwind.config.ts
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  body: ['Inter', 'sans-serif'],
}
```

### Sistema de Texturas

La identidad visual de la marca requiere fondos con carácter — no colores planos. Cada sección oscura debe llevar su textura asociada.

| Clase CSS | Usa en | Textura |
|---|---|---|
| `.bg-carbon-texture` | Hero, Navbar | Grano de carbón rugoso (SVG noise) |
| `.bg-vino-texture` | AgeGate, sección El Tunche | Terciopelo / tela (repeating-gradient) |
| `.grain-overlay` | Cualquier sección oscura | Overlay PNG tileable, `opacity: 0.035` |
| `.texture-grain::after` | Secciones con `position: relative` | Noise SVG absoluto, `pointer-events: none` |

**Regla de texturas:** deben ser *sutiles*. Si se notan a primera vista, están muy fuertes. El objetivo es dar carácter sin distraer del contenido.

Archivos requeridos en `/public/textures/`:
- `grain.png` — 200×200px, ruido monofónico tileable, PNG con transparencia
- `wood-vein.png` — 400×400px, veteado de madera sutil
- `velvet.png` — 300×300px, textura tipo tela/terciopelo para fondos vino

```css
/* Patrón de uso — overlay de grano */
.grain-overlay {
  position: relative;
  isolation: isolate;
}
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/textures/grain.png');
  opacity: 0.035;
  pointer-events: none;
  z-index: 2;
}
```

### Lo que NO debes generar
- Prohibido usar emojis, cero emojis en la web y cero en el código.
- ❌ Cards con `rounded-2xl` + `shadow-lg` + fondo blanco — genérico.
- ❌ Gradientes `from-purple-500 to-pink-500` — cliché de IA.
- ❌ Botones con `bg-blue-600 hover:bg-blue-700` — sin contexto de marca.
- ❌ Íconos de Heroicons como único elemento decorativo.
- ❌ Secciones con `py-16 text-center` repetidas sin variación de ritmo.
- ❌ Texto placeholder tipo "Lorem ipsum" en cualquier entrega.

---

## 🎬 ANIMACIONES — GUÍA DE USO

> Las animaciones deben **sentirse como parte del mundo de la marca**, no como efectos de demostración de librería.

### Filosofía
- **Menos es más, pero ejecutado bien.** Una sola animación perfecta en el Hero vale más que 10 efectos dispersos.
- **Propósito primero**: ¿la animación comunica algo? ¿guía la atención? ¿refuerza la atmósfera?
- Velocidades lentas y suaves para el estilo oscuro/misterioso. Evita `duration-150` en entradas de sección.
- Nunca hagas que el usuario espere una animación para ver contenido importante.

### Stack de animación
```ts
// Framer Motion para componentes React
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
```

### Variantes reutilizables — defínelas en `/lib/animations.ts`
```ts
// /lib/animations.ts

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}
```

### Scroll reveal — patrón estándar del proyecto
```tsx
// Patrón de scroll reveal con useInView
function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.section>
  )
}
```

### Animaciones aprobadas para este proyecto
| Animación | Uso recomendado | Duración |
|---|---|---|
| `fadeInUp` | Títulos, párrafos, cards al entrar en viewport | 0.7–0.9s |
| `fadeIn` | Imágenes de fondo, overlays | 1.0–1.5s |
| `staggerContainer` | Grid de productos, listas de items | — |
| `scaleIn` | Cards de productos, imágenes hero | 0.8–1.0s |
| Parallax suave | Imagen de fondo del Hero (máx. 15–20% de offset) | — |
| Hover dorado | Línea dorada que crece desde izquierda en links/nav | 0.3s |
| Text reveal | Letras/palabras que aparecen con clip-path en Hero | 1.0–1.2s |

### Animaciones prohibidas
- ❌ `bounce`, `ping`, `spin` sin propósito funcional claro.
- ❌ Animaciones que se repiten en loop sin interacción del usuario (excepto un sutil efecto ambiental en el Hero).
- ❌ Transiciones de página compleja en v1.0 — diferir a v2.0.
- ❌ Animaciones que bloqueen interacción o duren más de 1.5s.

### Micro-interacción recomendada — Hover en ProductCard
```tsx
// Efecto hover orgánico en tarjetas de producto
<motion.div
  whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
  className="group relative overflow-hidden"
>
  {/* Overlay dorado al hacer hover */}
  <motion.div
    className="absolute inset-0 bg-tunche-dorado/10 opacity-0 group-hover:opacity-100
               transition-opacity duration-500"
  />
  {/* Contenido */}
</motion.div>
```

### Efecto especial — Cursor personalizado (opcional v1.1)
```tsx
// Cursor circular dorado que reemplaza el cursor default
// Solo en desktop. Se desactiva en touch devices.
// Implementar en /components/CustomCursor.tsx
```

---

## 🔒 SEGURIDAD

- Variables de entorno en `.env.local` **únicamente**. Verificar que `.gitignore` las excluya antes de cada commit.
- El ID de Formspree va en `NEXT_PUBLIC_FORMSPREE_ID` — nunca hardcodeado.
- Headers de seguridad en `next.config.js`:

```js
// next.config.js
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
}
```

- El componente `AgeGate` es un **modal activado por evento**, no un wrapper global. Se activa únicamente cuando el usuario interactúa con la sección **El Tunche** (licores). El sitio carga normalmente sin restricción.
- Comportamiento del AgeGate:
  - Al click en producto o CTA de la sección El Tunche → muestra el modal si `sessionStorage.getItem('tunche-age-ok') !== 'true'`.
  - Si confirma ser mayor → `sessionStorage.setItem('tunche-age-ok', 'true')` y accede al contenido.
  - Si indica ser menor → mensaje de rechazo y redirección al inicio de la sección de productos sin licores.

```tsx
// AgeGate.tsx — interfaz requerida
interface AgeGateProps {
  isOpen: boolean
  onConfirm: () => void   // usuario mayor de edad
  onDeny: () => void      // usuario menor de edad
}

// page.tsx — manejo de estado
const [ageVerified, setAgeVerified] = useState<boolean>(
  () => sessionStorage.getItem('tunche-age-ok') === 'true'
)
const [showAgeGate, setShowAgeGate] = useState(false)

const handleAgeConfirm = () => {
  sessionStorage.setItem('tunche-age-ok', 'true')
  setAgeVerified(true)
  setShowAgeGate(false)
}
```

- Sanitizar inputs del formulario de contacto antes de enviar a Formspree (remover tags HTML).

---

## ⚡ RENDIMIENTO

- Usa `next/image` para **toda** imagen. Sin excepciones. Siempre especifica `width`, `height` y `alt`.
- Si la imagen es above-the-fold: `priority={true}`. Si es below: omitir (lazy load por defecto).
- Fuentes solo con `next/font`. Nunca `<link>` a Google Fonts en el `<head>`.
- El video de fondo del Hero debe tener: `autoPlay muted loop playsInline` y un fallback de imagen estática para cuando no cargue o en conexiones lentas.
- Usa `dynamic()` de Next.js para componentes pesados que no son críticos en el primer render:

```ts
// Cargar AgeGate y el formulario de contacto de forma diferida
const ContactoForm = dynamic(() => import('@/components/ContactoForm'), {
  loading: () => <div className="h-64 bg-tunche-madera animate-pulse rounded" />,
})
```

- Objetivo de Core Web Vitals: **LCP < 2.5s, CLS = 0, FID < 100ms**.

---

## 🗂️ ESTRUCTURA Y DATOS

- Los datos de productos **nunca** van hardcodeados en un componente JSX. Siempre en `/data/productos.ts`.
- Cuando necesites agregar un nuevo producto, solo se modifica ese archivo. El componente no cambia.
- El catálogo tiene **3 categorías y 12 productos**: 9 licores El Tunche (3 sabores × 3 presentaciones), 2 mermeladas y 1 chocolate.

### Tipos en `/types/index.ts`

```ts
export type Sabor = 'maracuya' | 'fresa' | 'copoazu'
export type PresentacionLicor = '750ml' | '500ml' | '250ml'
export type Categoria = 'licor' | 'mermelada' | 'chocolate'

export interface ProductoLicor {
  id: string
  sabor: Sabor
  presentacion: PresentacionLicor
  nombre: string
  descripcion: string
  imageSrc: string
  imageAlt: string
}

export interface ProductoMermelada {
  id: string
  sabor: string
  peso: string
  nombre: string
  descripcion: string
  imageSrc: string
  imageAlt: string
}

export interface ProductoChocolate {
  id: string
  nombre: string
  peso: string
  descripcion: string
  beneficios: string[]
  imageSrc: string
  imageAlt: string
}
```

### Ejemplo de datos en `/data/productos.ts`

```ts
import type { ProductoLicor } from '@/types'

export const licores: ProductoLicor[] = [
  {
    id: 'tunche-maracuya-750',
    sabor: 'maracuya',
    presentacion: '750ml',
    nombre: 'El Tunche Maracuyá 750ml',
    descripcion: 'De la selva de Huayopata, pulpa de maracuyá macerada en pisco quebranta.',
    imageSrc: '/images/productos/tunche-maracuya-750.jpg',
    imageAlt: 'Botella El Tunche Maracuyá 750ml',
  },
  // ...
]
```

---

## 🧹 CALIDAD DE CÓDIGO

- **Antes de entregar cualquier componente**, verifica mentalmente:
  - [ ] ¿Tiene tipos TypeScript completos?
  - [ ] ¿Usa los tokens de color del design system?
  - [ ] ¿Las imágenes usan `next/image`?
  - [ ] ¿Los textos usan las fuentes correctas (`font-display` / `font-body`)?
  - [ ] ¿El componente funciona en mobile (< 640px)?
  - [ ] ¿Las animaciones tienen `once: true` para no repetirse al volver al scroll?
  - [ ] ¿Hay algún `console.log` o código de debug que olvidaste borrar?

- Corre `npm run lint` y `npm run build` antes de cada PR. Cero errores tolerados.
- Usa comentarios solo cuando el código no es autoexplicativo. No comentes lo obvio.

```ts
// ❌ Comentario innecesario
// Suma dos números
const total = precio + iva

// ✅ Comentario útil
// Framer Motion requiere una key única para reactivar la animación
// cuando el usuario navega de vuelta a esta sección
<motion.div key={`product-${id}-${isInView}`}>
```

---

## 🚀 GIT Y DEPLOY

- Rama principal: `main` → producción (Vercel).
- Ramas de trabajo: `feature/nombre-descriptivo`, `fix/nombre-del-bug`.
- Commits en español, imperativo, descriptivos:
  - ✅ `feat: agrega componente ProductCard con animación de hover`
  - ✅ `fix: corrige overflow en mobile del Navbar`
  - ✅ `style: ajusta espaciado en sección Hero`
  - ❌ `arreglé cosas` / `update` / `wip`
- Nunca commitear `.env.local`, `node_modules/`, `.next/`, `.vercel/`.
- Cada feature branch genera un Preview Deployment automático en Vercel — revisarlo antes de hacer merge.

---

## 📋 CHECKLIST ANTES DE ENTREGAR UN COMPONENTE

```
[ ] TypeScript sin errores ni `any`
[ ] Responsive: mobile (375px), tablet (768px), desktop (1280px)
[ ] Animaciones con `once: true` y `margin` de activación definido
[ ] Imágenes con next/image, width/height y alt descriptivo
[ ] Colores desde tokens de Tailwind (tunche.carbon / vino / madera / dorado / neblina / humo)
[ ] Sin console.log ni código de debug
[ ] Comentarios solo donde el código no es autoexplicativo
[ ] npm run lint — cero warnings
[ ] AgeGate solo en sección El Tunche (licores) — no como wrapper global
[ ] Nombre de marca correcto: empresa = "El Huerto del Tunche", licores = "El Tunche"
[ ] Secciones oscuras usan clase de textura (.bg-carbon-texture / .grain-overlay)
[ ] Variables de entorno usadas, no hardcodeadas
```

---

*El Huerto del Tunche — AGENT_RULES v2.0 · Mayo 2026*
*Desarrollado por Flavio · Cusco, Perú*
