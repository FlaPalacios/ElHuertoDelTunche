# PROMPT DE ACTUALIZACIÓN — El Huerto del Tunche
> Usa este prompt completo con el agente de IA para actualizar los archivos
> `especificacion-tecnica-huerto-del-tunche.docx` y `AGENT_RULES.md`

---

## INSTRUCCIÓN PRINCIPAL

Eres un desarrollador frontend senior. Tienes dos documentos del proyecto **El Huerto del Tunche** que necesitan actualizarse con nueva información del cliente. Actualiza ambos documentos aplicando todos los cambios descritos abajo. Sé preciso: no pierdas información existente, solo corrige, amplía o reemplaza lo indicado.

---

## CAMBIOS A APLICAR

### 1. IDENTIDAD DE MARCA — CORRECCIÓN CRÍTICA

La marca paraguas es **"El Huerto del Tunche"** — empresa productora artesanal de Cusco, Perú.

La línea de licores se llama **"El Tunche"** — es una sub-marca/línea de producto, no el nombre de la empresa.

Corrige en todos los documentos cualquier referencia que confunda ambos nombres:
- Cuando se hable de la empresa → "El Huerto del Tunche"
- Cuando se hable de los licores → "El Tunche"
- El sitio web es de "El Huerto del Tunche" y exhibe todas las líneas de producto

---

### 2. PALETA DE COLORES — REEMPLAZAR COMPLETAMENTE

Elimina la paleta anterior. La paleta oficial confirmada por imagen de marca es:

| Token | Nombre oficial | HEX | Sensación |
|---|---|---|---|
| `carbon` | Negro Carbón | `#0D0D0D` | Fuerza, elegancia, profundidad |
| `vino` | Rojo Vino Oscuro | `#5B0F16` | Pasión, intensidad, poder, identidad |
| `madera` | Marrón Madera Añeja | `#4A3426` | Tierra, origen, artesanal, auténtico |
| `dorado` | Dorado Envejecido | `#B08A47` | Lujo, herencia, exclusividad |
| `neblina` | Gris Neblina | `#7B7B75` | Equilibrio, niebla, misterio, respiración |

**Sensación global de la paleta:** Lujo oscuro · Naturaleza salvaje · Artesanalidad · Masculinidad · Historia · Tiempo · Autenticidad

Actualiza en `tailwind.config.ts` la sección de colores así:
```ts
colors: {
  tunche: {
    carbon:  '#0D0D0D',
    vino:    '#5B0F16',
    madera:  '#4A3426',
    dorado:  '#B08A47',
    neblina: '#7B7B75',
    humo:    '#F5F0E8', // texto claro sobre fondos oscuros
  }
}
```

---

### 3. TEXTURAS — NUEVA SECCIÓN EN AMBOS DOCUMENTOS

Agregar una sección completa de **Sistema de Texturas** porque la identidad visual de la marca requiere fondos con carácter, no colores planos.

#### Estrategia de texturas para web

Cada color de la paleta tiene una textura asociada que se implementa en CSS:

| Color base | Textura | Técnica CSS |
|---|---|---|
| Negro Carbón `#0D0D0D` | Grano de carbón rugoso | SVG noise filter + `background-blend-mode: multiply` |
| Rojo Vino `#5B0F16` | Terciopelo / tela | PNG semitransparente encima del color, `mix-blend-mode: overlay` |
| Marrón Madera `#4A3426` | Veteado de madera | SVG con líneas orgánicas sutiles, `opacity: 0.15` |
| Dorado `#B08A47` | Metal envejecido / foil | CSS radial-gradient multicapa + noise |
| Gris Neblina `#7B7B75` | Piedra / niebla | Gaussian blur suave en capa superior semitransparente |

#### Implementación en `globals.css`

```css
/* Textura de grano — aplica sobre cualquier sección oscura */
.texture-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

/* Textura de carbón — sección Hero y Navbar */
.bg-carbon-texture {
  background-color: #0D0D0D;
  background-image:
    url("data:image/svg+xml,..."), /* noise SVG */
    radial-gradient(ellipse at 20% 50%, #1a0a0a 0%, #0D0D0D 70%);
}

/* Textura de vino — sección AgeGate y accents */
.bg-vino-texture {
  background-color: #5B0F16;
  background-image:
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
}

/* Overlay de grano global — clase utilitaria */
.grain-overlay {
  position: relative;
  isolation: isolate;
}
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/textures/grain.png'); /* PNG 200x200, tileable */
  opacity: 0.035;
  pointer-events: none;
  z-index: 2;
}
```

#### Archivos de textura requeridos en `/public/textures/`
- `grain.png` — 200×200px, ruido monofónico tileable, PNG con transparencia
- `wood-vein.png` — 400×400px, veteado de madera sutil, opacity overlay
- `velvet.png` — 300×300px, textura tipo tela/terciopelo para fondos vino

> **Regla:** Las texturas deben ser *sutiles*. Si se notan a primera vista, están muy fuertes. El objetivo es que den carácter sin distraer del contenido.

---

### 4. CATÁLOGO DE PRODUCTOS — REEMPLAZAR COMPLETAMENTE

El catálogo tiene **3 categorías** y **12 productos en total**. Actualizar `/data/productos.ts` y la arquitectura de secciones.

#### Categoría 1 — El Tunche (Licores)
Sub-marca de licores artesanales. **Requiere verificación de edad al acceder a esta sección.**

Origen: "De la selva de Huayopata nace nuestro producto El Tunche, pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada para llegar a sus paladares y su hogar."

**9 productos** — 3 sabores × 3 presentaciones:

| Sabor | 750ml | 500ml | 250ml |
|---|---|---|---|
| Maracuyá | ✓ | ✓ | ✓ |
| Fresa | ✓ | ✓ | ✓ |
| Copoazú | ✓ | ✓ | ✓ |

#### Categoría 2 — Mermeladas Artesanales
**2 productos** — 200g cada uno.

"Mermelada natural de producción artesanal, siente la fruta misma en cada porción, el dulzor y la explosión de cada fruta llevado a su extremo más sabroso…"

- Mermelada de Copoazú 200g
- Mermelada de Mango 200g

#### Categoría 3 — Chocolate de Copoazú
**1 producto** — 200g.

"Al ser familiar del cacao, el Copoazú pasa por el mismo proceso de creación para hacer un 'chocolate de taza'. Gracias a los beneficios del copoazú, este no tiene grasa, es digestivo y antioxidante."

- Chocolate de Copoazú 200g

---

### 5. AGE GATE — CAMBIO DE COMPORTAMIENTO

**Comportamiento anterior (eliminar):** El AgeGate bloqueaba el acceso a toda la página al entrar.

**Comportamiento nuevo (implementar):**
- El sitio carga normalmente sin restricción.
- El AgeGate se activa **únicamente** cuando el usuario interactúa con la sección **"El Tunche"** (licores).
- Al hacer click en cualquier producto o CTA de la sección de licores → se muestra el modal de verificación de edad.
- Si el usuario confirma ser mayor de 18 → accede al detalle/catálogo de licores. La preferencia se guarda en `sessionStorage` para no volver a preguntar en la misma sesión.
- Si el usuario indica ser menor → se muestra mensaje y se redirige de vuelta al inicio de la sección de productos sin licores.

Actualizar el componente `AgeGate.tsx`:
```tsx
// AgeGate ya no es un wrapper global
// Es un modal que se activa por evento desde la sección El Tunche
// Props requeridas:
interface AgeGateProps {
  isOpen: boolean
  onConfirm: () => void   // usuario es mayor de edad
  onDeny: () => void      // usuario es menor
}
```

Actualizar `page.tsx` para manejar el estado:
```tsx
const [ageVerified, setAgeVerified] = useState<boolean>(
  () => sessionStorage.getItem('tunche-age-ok') === 'true'
)
const [showAgeGate, setShowAgeGate] = useState(false)

// Al confirmar, guardar en sessionStorage
const handleAgeConfirm = () => {
  sessionStorage.setItem('tunche-age-ok', 'true')
  setAgeVerified(true)
  setShowAgeGate(false)
}
```

---

### 6. ARQUITECTURA DE SECCIONES — ACTUALIZAR

Reemplazar la arquitectura anterior con esta nueva estructura de secciones:

| # | Sección | Descripción | AgeGate |
|---|---|---|---|
| 1 | Navbar | Logo + navegación sticky. Links: Inicio, Nosotros, Productos, El Tunche, Contacto | No |
| 2 | Hero | Identidad de marca. Fondo texturizado carbón/vino. Tagline. Logo grande. | No |
| 3 | Nosotros | Historia de El Huerto del Tunche, origen en Huayopata, filosofía artesanal. | No |
| 4 | Productos | Grid separado por 3 categorías: Licores / Mermeladas / Chocolate. | No |
| 5 | El Tunche | Sección destacada de la línea de licores. Al hacer click en producto → activa AgeGate si no verificado. | **Sí** |
| 6 | Contacto | Formulario Formspree + datos de contacto. | No |
| 7 | Footer | Logo, RRSS, aviso legal de mayoría de edad, copyright. | No |

---

### 7. ESTRUCTURA DE DATOS — ACTUALIZAR `/data/productos.ts`

```ts
// /types/index.ts — agregar estos tipos
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

---

### 8. PENDIENTES — ACTUALIZAR TABLA

Reemplazar la tabla de pendientes con esta versión actualizada:

| Pendiente | Responsable | Prioridad |
|---|---|---|
| Adquisición del dominio | Guillermo | Alta |
| Fotos definitivas: licores (9 productos × 3 presentaciones) | Guillermo | Alta |
| Fotos definitivas: mermeladas (2) y chocolate (1) | Guillermo | Alta |
| Logo oficial de la marca en SVG o PNG transparente | Guillermo | Alta |
| Textos completos: historia, nosotros, filosofía | Guillermo | Media |
| Archivos de textura PNG: grain.png, wood-vein.png, velvet.png | Flavio | Media |
| Cuenta Formspree configurada | Flavio | Media |
| Decisión: video o imagen estática en Hero | Flavio + Guillermo | Media |
| Cuentas de RRSS activas (Instagram, Facebook, WhatsApp) | Guillermo | Baja |

---

## INSTRUCCIONES FINALES PARA EL AGENTE

1. Aplica **todos** los cambios anteriores al documento `especificacion-tecnica-huerto-del-tunche.docx`. Genera la versión actualizada como `especificacion-tecnica-huerto-del-tunche-v2.docx`.

2. Aplica los cambios relevantes a `AGENT_RULES.md`:
   - Actualizar la paleta de colores con los nuevos tokens (`carbon`, `vino`, `madera`, `dorado`, `neblina`)
   - Agregar sección de **Sistema de Texturas** con las reglas de uso
   - Corregir todas las referencias de nombre de marca
   - Actualizar el comportamiento del AgeGate (solo en sección licores)
   - Agregar los nuevos tipos TypeScript a las convenciones

3. No elimines ninguna sección existente que no esté explícitamente indicada para reemplazar.

4. Mantén el mismo estilo, tono y formato profesional de los documentos originales.

---

*Prompt generado por Flavio — El Huerto del Tunche · Mayo 2025*
