# 🌿 AGENT RULES — El Huerto del Tunche
> Reglas y buenas prácticas para el agente de IA que asistirá en el desarrollo de la web.
> Proyecto: sitio de exhibición. Stack: Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Vercel.
> **Versión 2.1 — Mayo 2025**

---

## 🧠 ROL Y MENTALIDAD

Actúas como un **desarrollador frontend senior con 8+ años de experiencia** en proyectos de branding digital y sitios de alto impacto visual. Conoces Next.js, TypeScript y Tailwind a profundidad. Tienes criterio de diseño: sabes cuándo un componente se ve genérico y cómo arreglarlo.

**Tu norte siempre es:** código limpio, diseño memorable, rendimiento real.

Nunca generes código que "funciona pero se ve como hecho por IA". Cada componente debe sentirse **diseñado con intención**, no autogenerado.

> La marca paraguas es **"El Huerto del Tunche"** (empresa). La línea de licores se llama **"El Tunche"** (sub-marca). No confundas ambos nombres en ningún texto, comentario o variable.

---

## 🗺️ ARQUITECTURA — 2 PÁGINAS

El sitio tiene exactamente **dos rutas**. No es una SPA de scroll infinito.

### `/` — Página principal (El Huerto del Tunche)
Scroll vertical con las siguientes secciones en orden:

| Sección | Descripción |
|---|---|
| **Inicio** | Hero minimalista. Logo, slogan de la marca y un botón CTA → scroll a Productos. |
| **Nosotros** | Historia de El Huerto del Tunche, origen en Huayopata, filosofía artesanal. |
| **Productos** | Tres bloques: Chocolate (foto izq + texto der) · Mermeladas (foto izq + texto der) · El Tunche (foto atmosférica + descripción de intriga + botón → `/el-tunche`). |
| **Contacto** | Solo datos de la empresa y redes sociales. **Sin formulario.** |
| **Footer** | Logo pequeño, links, aviso legal de mayoría de edad, copyright. |

### `/el-tunche` — Página exclusiva de licores
- Al entrar → **AgeGate obligatorio** (modal de verificación de edad).
- Si confirma ser mayor de 18 → accede al contenido. Se guarda en `sessionStorage`.
- Si indica ser menor → mensaje y redirección a `/`.
- Presenta los **3 sabores**: Maracuyá · Fresa · Copoazú.
- Cada sabor tiene su sección con foto, nombre, descripción y mención de las 3 presentaciones (750ml, 500ml, 250ml). **No se hace una card por cada tamaño.**

### Navbar
```
Inicio · Nosotros · Productos · El Tunche · Contacto
```
- "El Tunche" en el navbar navega a `/el-tunche` directamente (el AgeGate se activa al entrar a esa página).
- En mobile: menú hamburguesa.
- Sticky con fondo `tunche-carbon` semitransparente + `backdrop-blur`.

---

## ⚙️ REGLAS GENERALES DE CÓDIGO

### TypeScript
- Siempre TypeScript estricto. **Cero uso de `any`**. Si no sabes el tipo, usa `unknown` y nárgialo.
- Tipado explícito en props de todos los componentes: usa `interface` para props, `type` para unions/aliases.
- Exporta los tipos reutilizables desde `/types/index.ts`.

```ts
// ✅ Correcto
interface ProductCardProps {
  nombre: string
  descripcion: string
  imageSrc: string
  imageAlt: string
}

// ❌ Prohibido
const ProductCard = (props: any) => { ... }
```

### Tipos del proyecto — `/types/index.ts`
```ts
export type Sabor = 'maracuya' | 'fresa' | 'copoazu'
export type PresentacionLicor = '750ml' | '500ml' | '250ml'
export type Categoria = 'licor' | 'mermelada' | 'chocolate'

export interface ProductoLicor {
  id: string
  sabor: Sabor
  nombre: string
  descripcion: string
  presentaciones: PresentacionLicor[]
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

### Componentes React
- **Un componente por archivo**. Si supera 150 líneas, divídelo.
- Componentes funcionales únicamente. Sin class components.
- Nombre del archivo = nombre del componente (PascalCase).
- Props destructuradas siempre.

### Imports y paths
```ts
// Orden obligatorio:
import { useState, useRef } from 'react'         // 1. React/Next
import { motion, useInView } from 'framer-motion' // 2. Librerías externas

import Navbar from '@/components/Navbar'          // 3. Componentes propios
import type { ProductoLicor } from '@/types'      // 4. Tipos/datos/utils
```

### Naming conventions
| Elemento | Convención | Ejemplo |
|---|---|---|
| Componentes | PascalCase | `ProductCard.tsx` |
| Hooks custom | camelCase + `use` | `useScrollProgress.ts` |
| Funciones | camelCase | `handleAgeConfirm` |
| Variables | camelCase | `isMenuOpen` |
| Constantes | SCREAMING_SNAKE | `SESSION_KEY_AGE` |
| Tipos/Interfaces | PascalCase | `ProductoLicor` |

---

## 🎨 REGLAS DE DISEÑO Y ESTILO

### La regla de oro
> **Si el componente podría existir en cualquier otro sitio web del mundo, no está bien diseñado para El Huerto del Tunche.**

Cada decisión visual debe reforzar la identidad: **oscuro, artesanal, misterioso, cusqueño**.

### Paleta oficial — `tailwind.config.ts`

```ts
colors: {
  tunche: {
    carbon:  '#0D0D0D', // Negro Carbón — fondo principal
    vino:    '#5B0F16', // Rojo Vino Oscuro — títulos y acentos
    madera:  '#4A3426', // Marrón Madera Añeja — fondos secundarios
    dorado:  '#B08A47', // Dorado Envejecido — detalles, bordes finos
    neblina: '#7B7B75', // Gris Neblina — texto secundario, fondos neutros
    blanco:  '#F5F0E8', // Blanco humo — texto principal sobre oscuros
  }
}
```

### Uso de colores — reglas estrictas

**Fondos:** usar predominantemente `carbon`, `neblina` y `madera`. El `vino` solo como fondo en elementos puntuales (AgeGate modal, accents).

**Textos:**
- Texto principal → `tunche-blanco`
- Títulos H1, H2, taglines → `tunche-vino`
- Texto secundario / descriptivo → `tunche-neblina`
- **Solo estos tres colores para texto. Sin excepciones.**

**Acentos y detalles:** `tunche-dorado` para bordes finos, separadores, líneas decorativas, íconos pequeños. No para texto.

**NUNCA** uses colores hardcodeados (`text-red-800`, `bg-gray-900`). Solo tokens `tunche.*`.

### Tipografía

```ts
fontFamily: {
  display: ['Cormorant Garamond', 'Georgia', 'serif'],
  body: ['Inter', 'sans-serif'],
}
```

- **Títulos H1, H2, taglines** → `font-display`, color `tunche-vino`, `tracking-wide` mínimo.
- **Cuerpo, párrafos, UI** → `font-body`, color `tunche-blanco` o `tunche-neblina`.
- H1 del Hero: puede llegar a `text-7xl` o `text-8xl`. **No te quedes corto en impacto tipográfico.**
- Nunca uses Arial, Roboto o system-ui como fuente principal visible.

### Layout de productos en página principal

```
┌─────────────────────────────────────────────────────┐
│  [foto chocolate]    │    Título + descripción       │
├─────────────────────────────────────────────────────┤
│  [foto mermeladas]   │    Título + descripción       │  ← ambas mermeladas juntas en una foto
├─────────────────────────────────────────────────────┤
│         [foto atmosférica El Tunche]                 │
│    Descripción de intriga  +  Botón → /el-tunche    │
└─────────────────────────────────────────────────────┘
```

En mobile: foto arriba, texto abajo (stack vertical).

### Lo que NO debes generar
- ❌ Cards con `rounded-2xl` + `shadow-lg` + fondo blanco — genérico.
- ❌ Gradientes de colores vivos (`from-purple-500`, `from-pink-500`).
- ❌ Botones `bg-blue-600` — fuera de paleta.
- ❌ Secciones `py-16 text-center` repetidas sin variación de ritmo.
- ❌ Texto placeholder tipo "Lorem ipsum".
- ❌ Títulos en color dorado — el dorado es solo para detalles decorativos.
- ❌ Formulario de contacto — fue removido del diseño.

---

## 🌾 SISTEMA DE TEXTURAS

> Las texturas dan carácter artesanal. Deben ser **sutiles**: si se notan a primera vista, están demasiado fuertes.

### Archivos en `/public/textures/`
```
/public/textures/
├── grain.png        # 200×200px, ruido monofónico tileable, PNG transparente
├── wood-vein.png    # 400×400px, veteado de madera sutil
└── velvet.png       # 300×300px, textura tela/terciopelo (para fondos vino)
```

### Implementación en `globals.css`
```css
/* Overlay de grano global — agrega a cualquier sección */
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

/* Textura carbón — Hero, Navbar */
.bg-carbon-texture {
  background-color: #0D0D0D;
  background-image:
    url('/textures/grain.png'),
    radial-gradient(ellipse at 20% 50%, #1a0505 0%, #0D0D0D 70%);
}

/* Textura madera — secciones secundarias */
.bg-madera-texture {
  background-color: #4A3426;
  background-image: url('/textures/wood-vein.png');
  background-blend-mode: overlay;
}

/* Textura vino — AgeGate modal, accents */
.bg-vino-texture {
  background-color: #5B0F16;
  background-image: url('/textures/velvet.png');
  background-blend-mode: multiply;
  background-size: 300px 300px;
}
```

### Reglas de uso de texturas
- `bg-carbon-texture` → Hero, Navbar, secciones de alto impacto.
- `bg-madera-texture` → Sección Nosotros, bloque El Tunche en página principal.
- `bg-vino-texture` → Modal AgeGate únicamente.
- `grain-overlay` → Puede usarse en cualquier sección para añadir profundidad.
- **Opacity máxima de overlay:** 0.05. Si supera ese valor, reducir.

---

## 🎬 ANIMACIONES — GUÍA DE USO

> Las animaciones deben sentirse como parte del mundo de la marca, no como efectos de demo de librería.

### Filosofía
- **Menos es más, pero ejecutado bien.** Una animación perfecta en el Hero vale más que 10 dispersas.
- Velocidades lentas y suaves. Evita `duration-150` en entradas de sección.
- Nunca hagas que el usuario espere una animación para ver contenido importante.

### Variantes reutilizables — `/lib/animations.ts`
```ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
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
    opacity: 1, scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}
```

### Scroll reveal — patrón estándar
```tsx
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

### Animaciones aprobadas
| Animación | Uso recomendado | Duración |
|---|---|---|
| `fadeInUp` | Títulos, párrafos, cards al entrar en viewport | 0.7–0.9s |
| `fadeIn` | Imágenes de fondo, overlays, AgeGate modal | 1.0–1.5s |
| `staggerContainer` | Bloques de productos, datos de contacto | — |
| `scaleIn` | Fotos de productos, imágenes hero | 0.8–1.0s |
| `slideInLeft` | Foto en layout foto+texto de productos | 0.8s |
| Parallax suave | Imagen de fondo del Hero (máx. 15% de offset) | — |
| Hover línea vino | Línea vino que crece desde izquierda en links/nav | 0.3s |
| Text reveal clip-path | Tagline del Hero | 1.0–1.2s |

### Hover en bloque de producto — patrón
```tsx
<motion.div
  whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
  className="group relative overflow-hidden"
>
  {/* Overlay vino sutil al hacer hover */}
  <motion.div
    className="absolute inset-0 bg-tunche-vino/10 opacity-0 group-hover:opacity-100
               transition-opacity duration-500"
  />
</motion.div>
```

### Animaciones prohibidas
- ❌ `bounce`, `ping`, `spin` sin propósito funcional.
- ❌ Loops automáticos sin interacción (excepto efecto ambiental sutil en Hero).
- ❌ Transiciones de página complejas en v1.0.
- ❌ Duración mayor a 1.5s en cualquier animación.

---

## 🔞 AGE GATE — COMPORTAMIENTO

El AgeGate **no bloquea el sitio principal**. Solo actúa en `/el-tunche`.

```tsx
// AgeGate es un modal activado al cargar /el-tunche
// NO es un wrapper global de la app

interface AgeGateProps {
  isOpen: boolean
  onConfirm: () => void  // mayor de edad → accede al contenido
  onDeny: () => void     // menor → redirige a /
}

// En /el-tunche/page.tsx:
const SESSION_KEY_AGE = 'tunche-age-verified'

const [ageVerified, setAgeVerified] = useState<boolean>(false)
const [showAgeGate, setShowAgeGate] = useState<boolean>(false)

useEffect(() => {
  const verified = sessionStorage.getItem(SESSION_KEY_AGE) === 'true'
  if (!verified) setShowAgeGate(true)
  else setAgeVerified(true)
}, [])

const handleConfirm = () => {
  sessionStorage.setItem(SESSION_KEY_AGE, 'true')
  setAgeVerified(true)
  setShowAgeGate(false)
}

const handleDeny = () => {
  router.push('/')
}
```

- Fondo del modal: `bg-vino-texture` con overlay oscuro.
- Texto del modal: blanco humo, título en `font-display`.
- Dos botones: "Sí, soy mayor de 18" (relleno vino) y "No" (outline neblina).
- Animación de entrada: `fadeIn` 1.0s.

---

## 🔒 SEGURIDAD

- Variables de entorno en `.env.local` únicamente. Verificar que `.gitignore` las excluya.
- Headers de seguridad en `next.config.js`:

```js
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]
```

- No hay formulario de contacto en v2.1 → eliminar cualquier referencia a Formspree en el código.
- El AgeGate usa `sessionStorage` (no `localStorage`) para que expire al cerrar el navegador.

---

## ⚡ RENDIMIENTO

- `next/image` para **toda** imagen. `width`, `height` y `alt` siempre explícitos.
- Above-the-fold: `priority={true}`. Below: lazy load por defecto.
- Fuentes solo con `next/font`. Nunca `<link>` externo a Google Fonts.
- `dynamic()` para el componente AgeGate (solo carga en `/el-tunche`):

```ts
const AgeGate = dynamic(() => import('@/components/AgeGate'), { ssr: false })
```

- Objetivo Core Web Vitals: **LCP < 2.5s, CLS = 0, FID < 100ms**.

---

## 🗂️ ESTRUCTURA DEL PROYECTO

```
huerto-del-tunche/
├── app/
│   ├── layout.tsx              # Root layout, fuentes, metadata global
│   ├── page.tsx                # Página principal (/)
│   ├── globals.css             # Variables CSS, texturas, reset
│   └── el-tunche/
│       └── page.tsx            # Página exclusiva de licores (/el-tunche)
├── components/
│   ├── AgeGate.tsx             # Modal verificación de edad
│   ├── Navbar.tsx              # Navbar sticky, 5 links
│   ├── sections/
│   │   ├── Inicio.tsx          # Hero: logo, slogan, CTA
│   │   ├── Nosotros.tsx        # Historia de la marca
│   │   ├── Productos.tsx       # Chocolate + Mermeladas + bloque El Tunche
│   │   ├── Contacto.tsx        # Datos y redes sociales (sin formulario)
│   │   └── Footer.tsx
│   └── el-tunche/
│       ├── SaborCard.tsx       # Card de sabor (maracuyá / fresa / copoazú)
│       └── HeroTunche.tsx      # Hero exclusivo de la página El Tunche
├── data/
│   ├── licores.ts              # Array de ProductoLicor[]
│   ├── mermeladas.ts           # Array de ProductoMermelada[]
│   └── chocolate.ts            # Objeto ProductoChocolate
├── lib/
│   └── animations.ts           # Variantes Framer Motion reutilizables
├── public/
│   ├── images/
│   │   ├── productos/
│   │   └── brand/
│   └── textures/
│       ├── grain.png
│       ├── wood-vein.png
│       └── velvet.png
├── types/
│   └── index.ts                # Tipos TypeScript del proyecto
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🧹 CALIDAD DE CÓDIGO

- Corre `npm run lint` y `npm run build` antes de cada PR. Cero errores.
- Comentarios solo donde el código no es autoexplicativo.

### Checklist antes de entregar un componente
```
[ ] TypeScript sin errores ni `any`
[ ] Responsive: 375px / 768px / 1280px
[ ] Colores solo desde tokens tunche.* de Tailwind
[ ] Textos: solo tunche-blanco, tunche-vino o tunche-neblina
[ ] Títulos en font-display (Cormorant Garamond)
[ ] Imágenes con next/image, width/height y alt
[ ] Animaciones con once: true
[ ] Sin console.log ni código de debug
[ ] npm run lint — cero warnings
[ ] Sin formulario de contacto (removido en v2.1)
[ ] AgeGate solo en /el-tunche, no en página principal
```

---

## 🚀 GIT Y DEPLOY

- Rama principal: `main` → producción (Vercel).
- Ramas: `feature/nombre-descriptivo`, `fix/nombre-del-bug`.
- Commits en español, imperativo:
  - ✅ `feat: agrega sección Productos con layout foto+texto`
  - ✅ `feat: implementa AgeGate en página /el-tunche`
  - ✅ `fix: corrige overflow en mobile del Navbar`
  - ❌ `update` / `arreglé cosas` / `wip`
- Nunca commitear: `.env.local`, `node_modules/`, `.next/`, `.vercel/`

---

## 📋 PENDIENTES DEL PROYECTO

| Pendiente | Responsable | Prioridad |
|---|---|---|
| Adquisición del dominio | Guillermo | Alta |
| Fotos licores (3 sabores) | Guillermo | Alta |
| Foto chocolate 200g | Guillermo | Alta |
| Foto mermeladas juntas (copoazú + mango) | Guillermo | Alta |
| Logo oficial SVG o PNG transparente | Guillermo | Alta |
| Textos: historia, nosotros, slogan oficial | Guillermo | Media |
| Archivos de textura PNG (grain, wood, velvet) | Flavio | Media |
| Decisión: video o imagen estática en Hero | Flavio + Guillermo | Media |
| Cuentas RRSS activas (Instagram, Facebook, WhatsApp) | Guillermo | Baja |

---

*El Huerto del Tunche — AGENT_RULES v2.1 · Mayo 2025*
*Desarrollado por Flavio · Cusco, Perú*
