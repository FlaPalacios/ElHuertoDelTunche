  
🌿

**EL HUERTO DEL TUNCHE**

Especificación Técnica del Sitio Web

Versión 2.0  |  Mayo 2026

Desarrollado por: Flavio (Ing. Sistemas, UAC)

Cliente: Guillermo — El Huerto del Tunche, Cusco, Perú

# **1\. Información General del Proyecto**

| Nombre del proyecto | El Huerto del Tunche — Sitio Web Oficial |
| :---- | :---- |
| **Cliente** | Guillermo (propietario), Cusco, Perú |
| **Desarrollador** | Flavio — Estudiante 4to año Ing. de Sistemas |
| **Tipo de sitio** | Sitio web de exhibición / vitrina digital (sin e-commerce) |
| **Versión del documento** | 2.0 |
| **Fecha de creación** | Mayo 2025 |
| **Última actualización** | Mayo 2026 |
| **Estado** | Planificación — pendiente de inicio de desarrollo |
| **Repositorio** | Por definir (GitHub recomendado — repositorio privado) |
| **URL de producción** | Por definir (dominio pendiente de adquisición) |
| **Plataforma de deploy** | Vercel (plan gratuito — Hobby) |

# **2\. Objetivo del Sitio**

**El Huerto del Tunche** es una pequeña empresa cusqueña productora artesanal de Cusco, Perú. Produce licores artesanales, mermeladas y chocolate elaborados a base de frutas tropicales y amazónicas. La línea de licores se denomina **El Tunche** — es una sub-marca/línea de producto de la empresa.

El sitio web tiene como objetivo principal servir como vitrina digital de la marca: presentar su identidad, filosofía, todas las líneas de producto y datos de contacto.

## **2.1 Identidad de marca**

| Término | Referencia |
| :---- | :---- |
| **El Huerto del Tunche** | Nombre de la empresa productora. Se usa al hablar de la empresa, el sitio web, la filosofía y la historia. |
| **El Tunche** | Sub-marca/línea de licores artesanales. Se usa exclusivamente al hablar de los productos de licor. |

## **2.2 Objetivos específicos**

* Comunicar la identidad de marca: artesanal, misterioso, arraigado en la naturaleza cusqueña.

* Exhibir el catálogo completo de productos (licores, mermeladas y chocolate) con descripción y características.

* Generar confianza en potenciales clientes y distribuidores locales.

* Proporcionar información de contacto y presencia en redes sociales.

* Cumplir con la restricción legal de verificación de mayoría de edad únicamente para la sección de licores.

## **2.3 Fuera de alcance (v1.0)**

* Venta online / carrito de compras (e-commerce).

* Panel de administración de contenidos (CMS).

* Backend propio o base de datos.

* Versión en idioma inglés.

* Blog o sección de noticias.

# **3\. Público Objetivo**

| Perfil principal | Adultos de 18 a 40 años, residentes o turistas en Cusco y Perú. |
| :---- | :---- |
| **Perfil secundario** | Distribuidores locales, bares, restaurantes y licoreras independientes. |
| **Idioma** | Español (única versión en v1.0). |
| **Dispositivos** | Mobile-first. El 70–80% del tráfico estimado proviene de móviles. |
| **Expectativa visual** | Sitio premium, oscuro y atmosférico. Similar a Casillero del Diablo o Jägermeister. |

# **4\. Arquitectura de Información**

El sitio es una Single Page Application (SPA) con scroll vertical. Las secciones equivalen a 'páginas' lógicas navegables desde el menú.

| # | Sección | Componente | Descripción | AgeGate |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Navbar | `Navbar.tsx` | Logo + navegación sticky. Links: Inicio, Nosotros, Productos, El Tunche, Contacto. Hamburger en mobile. | No |
| 2 | Hero | `Hero.tsx` | Identidad de marca. Fondo texturizado carbón/vino. Tagline. Logo grande. Video o imagen atmosférica (bosque/penumbra). CTA hacia productos. | No |
| 3 | Nosotros | `Nosotros.tsx` | Historia de El Huerto del Tunche, origen en Huayopata, filosofía artesanal. Texto + imagen ambiental lateral. | No |
| 4 | Productos | `Productos.tsx` | Grid separado por 3 categorías: Licores / Mermeladas / Chocolate. | No |
| 5 | El Tunche | `ElTunche.tsx` | Sección destacada de la línea de licores El Tunche. Al hacer click en cualquier producto o CTA → activa AgeGate si el usuario no ha verificado su edad en la sesión actual. | **Sí** |
| 6 | Contacto | `Contacto.tsx` | Formulario Formspree + datos de contacto (teléfono, email, dirección referencial en Cusco). | No |
| 7 | Footer | `Footer.tsx` | Logo, RRSS (Instagram, Facebook, WhatsApp), aviso legal de mayoría de edad, copyright. | No |

> **Nota sobre el AgeGate:** El sitio carga normalmente sin restricción. El modal de verificación de edad se activa únicamente cuando el usuario interactúa con la sección El Tunche (licores). Ver sección 11 para detalle legal y comportamiento.

# **5\. Stack Tecnológico**

| Capa | Tecnología | Justificación |
| :---- | :---- | :---- |
| Framework | Next.js 14 (App Router) | SSG \+ SSR, óptimo para SEO, file-based routing, soporte nativo de imágenes y fuentes. |
| Lenguaje | TypeScript | Tipado estático, detección temprana de errores, mejor mantenibilidad a largo plazo. |
| Estilos | Tailwind CSS v3 | Utility-first, purga automática de CSS no usado, fácil consistencia visual en toda la app. |
| Fuentes | Google Fonts (next/font) | Cormorant Garamond (títulos serif elegantes), Inter (cuerpo legible y limpio). |
| Imágenes | next/image | Optimización automática: WebP, lazy loading, responsive srcSet, mejora Core Web Vitals. |
| Formulario | Formspree | Sin backend propio. Envío de formulario a email via servicio externo gratuito. |
| Animaciones | Framer Motion | Animaciones suaves de entrada (fade-in, parallax leve) para reforzar la atmósfera oscura. |
| Linting | ESLint \+ Prettier | Consistencia de código y formato automático. Integrado con hooks de Git. |
| Deploy | Vercel (Hobby) | CI/CD automático desde GitHub. Preview deployments por rama. Dominio personalizado gratis. |
| Control de versiones | Git \+ GitHub | Repositorio privado. Flujo trunk-based: rama main (producción) \+ feature branches. |

# **6\. Diseño y Guía de Estilos**

## **6.1 Paleta de colores**

La paleta oficial de El Huerto del Tunche, confirmada por imagen de marca:

| Token | Nombre oficial | HEX | Sensación |
| :---- | :---- | :---- | :---- |
| `carbon` | Negro Carbón | `#0D0D0D` | Fuerza, elegancia, profundidad |
| `vino` | Rojo Vino Oscuro | `#5B0F16` | Pasión, intensidad, poder, identidad |
| `madera` | Marrón Madera Añeja | `#4A3426` | Tierra, origen, artesanal, auténtico |
| `dorado` | Dorado Envejecido | `#B08A47` | Lujo, herencia, exclusividad |
| `neblina` | Gris Neblina | `#7B7B75` | Equilibrio, niebla, misterio, respiración |
| `humo` | Blanco Humo | `#F5F0E8` | Texto claro sobre fondos oscuros |

**Sensación global de la paleta:** Lujo oscuro · Naturaleza salvaje · Artesanalidad · Masculinidad · Historia · Tiempo · Autenticidad

Configuración en `tailwind.config.ts`:

```ts
colors: {
  tunche: {
    carbon:  '#0D0D0D',
    vino:    '#5B0F16',
    madera:  '#4A3426',
    dorado:  '#B08A47',
    neblina: '#7B7B75',
    humo:    '#F5F0E8',
  }
}
```

## **6.2 Sistema de Texturas**

La identidad visual de El Huerto del Tunche requiere fondos con carácter. No se usan colores planos — cada sección importante lleva una textura asociada a su color base.

### **Estrategia de texturas para web**

| Color base | Textura | Técnica CSS |
| :---- | :---- | :---- |
| Negro Carbón `#0D0D0D` | Grano de carbón rugoso | SVG noise filter + `background-blend-mode: multiply` |
| Rojo Vino `#5B0F16` | Terciopelo / tela | PNG semitransparente encima del color, `mix-blend-mode: overlay` |
| Marrón Madera `#4A3426` | Veteado de madera | SVG con líneas orgánicas sutiles, `opacity: 0.15` |
| Dorado `#B08A47` | Metal envejecido / foil | CSS radial-gradient multicapa + noise |
| Gris Neblina `#7B7B75` | Piedra / niebla | Gaussian blur suave en capa superior semitransparente |

### **Implementación en `globals.css`**

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

### **Archivos de textura requeridos en `/public/textures/`**

* `grain.png` — 200×200px, ruido monofónico tileable, PNG con transparencia.
* `wood-vein.png` — 400×400px, veteado de madera sutil, opacity overlay.
* `velvet.png` — 300×300px, textura tipo tela/terciopelo para fondos vino.

> **Regla de texturas:** Las texturas deben ser *sutiles*. Si se notan a primera vista, están muy fuertes. El objetivo es que den carácter sin distraer del contenido.

## **6.3 Tipografía**

| Fuente de títulos | Cormorant Garamond — Serif clásica, elegante, ligeramente antigua. Ideal para H1, H2 y taglines impactantes. |
| :---- | :---- |
| **Fuente de cuerpo** | Inter — Sans-serif moderna, altamente legible en pantalla. Para párrafos, listas y UI elements. |
| **Tamaño base** | 16px (1rem). Escala modular: 1rem / 1.25rem / 1.5rem / 2rem / 3rem / 4.5rem. |
| **Interlineado** | 1.6 para cuerpo de texto. 1.2 para títulos grandes. |
| **Peso tipográfico** | Títulos: 600–700 (SemiBold / Bold). Cuerpo: 400 (Regular). Énfasis: 500 (Medium). |

## **6.4 Estilo visual general**

* Fondo predominantemente oscuro (carbón / madera) con texto claro (humo).

* Acentos dorados para jerarquía visual: separadores, bordes de tarjetas, íconos activos.

* Fondos con textura sutil para dar carácter artesanal — no colores planos.

* Fotografías de producto con fondo oscuro y iluminación dramática (estilo still life).

* Espaciado generoso entre secciones (padding vertical mínimo 80px).

* Transiciones suaves: opacity fade-in al hacer scroll (Intersection Observer \+ Framer Motion).

* Sin elementos decorativos excesivos. Minimalismo atmosférico.

# **7\. Catálogo de Productos**

El catálogo tiene **3 categorías** y **12 productos en total**.

## **7.1 El Tunche — Licores Artesanales**

Sub-marca de licores artesanales de El Huerto del Tunche. Requiere verificación de edad al acceder a esta sección.

> "De la selva de Huayopata nace nuestro producto El Tunche, pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada para llegar a sus paladares y su hogar."

**9 productos** — 3 sabores × 3 presentaciones:

| Sabor | 750ml | 500ml | 250ml |
| :---- | :---- | :---- | :---- |
| Maracuyá | ✓ | ✓ | ✓ |
| Fresa | ✓ | ✓ | ✓ |
| Copoazú | ✓ | ✓ | ✓ |

## **7.2 Mermeladas Artesanales**

**2 productos** — 200g cada uno.

> "Mermelada natural de producción artesanal, siente la fruta misma en cada porción, el dulzor y la explosión de cada fruta llevado a su extremo más sabroso…"

* Mermelada de Copoazú 200g
* Mermelada de Mango 200g

## **7.3 Chocolate de Copoazú**

**1 producto** — 200g.

> "Al ser familiar del cacao, el Copoazú pasa por el mismo proceso de creación para hacer un 'chocolate de taza'. Gracias a los beneficios del copoazú, este no tiene grasa, es digestivo y antioxidante."

* Chocolate de Copoazú 200g

# **8\. Estructura del Proyecto**

Estructura basada en Next.js 14 con App Router y Tailwind CSS:

**huerto-del-tunche/**  
├── app/  
│   ├── layout.tsx          \# Root layout, fuentes, metadata global  
│   ├── page.tsx            \# Página principal (SPA scroll), maneja estado AgeGate  
│   └── globals.css         \# Variables CSS, reset, clases base, clases de textura  
├── components/  
│   ├── AgeGate.tsx         \# Modal de verificación de edad (activado por sección El Tunche)  
│   ├── Navbar.tsx          \# Barra de navegación sticky  
│   ├── Hero.tsx            \# Sección hero con video/imagen, fondo texturizado  
│   ├── Nosotros.tsx        \# Historia y filosofía de El Huerto del Tunche  
│   ├── Productos.tsx       \# Grid de las 3 categorías de productos  
│   ├── ElTunche.tsx        \# Sección destacada de licores El Tunche  
│   ├── ProductCard.tsx     \# Tarjeta individual reutilizable  
│   ├── Contacto.tsx        \# Formulario \+ datos de contacto  
│   └── Footer.tsx          \# Footer con RRSS y legal  
├── data/  
│   └── productos.ts        \# Arrays de datos por categoría (tipados)  
├── lib/  
│   └── animations.ts       \# Variantes de Framer Motion reutilizables  
├── public/  
│   ├── images/             \# Fotos de productos, fondos  
│   ├── textures/           \# grain.png, wood-vein.png, velvet.png  
│   └── logo.svg            \# Logo oficial de la marca  
├── types/  
│   └── index.ts            \# Tipos TypeScript: Sabor, Categoria, ProductoLicor, etc.  
├── .env.local              \# Variables de entorno (Formspree ID)  
├── tailwind.config.ts      \# Paleta personalizada, fuentes  
├── tsconfig.json  
└── next.config.js

# **9\. Estructura de Datos y Tipos TypeScript**

## **9.1 Tipos en `/types/index.ts`**

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

## **9.2 Datos en `/data/productos.ts`**

Los datos de productos **nunca** van hardcodeados en componentes JSX. Siempre en `/data/productos.ts`. El archivo exporta un array tipado por cada categoría. Al agregar un producto nuevo, solo se modifica este archivo — el componente no cambia.

# **10\. Buenas Prácticas y Estándares**

## **10.1 Código y arquitectura**

* TypeScript estricto (strict: true en tsconfig). Sin uso de 'any'.

* Componentes funcionales únicamente. Sin class components.

* Separación de datos y presentación: los datos de productos viven en /data/productos.ts, no hardcodeados en componentes.

* Naming conventions: PascalCase para componentes, camelCase para funciones y variables, SCREAMING\_SNAKE para constantes.

* Imports absolutos configurados: '@/components/...', '@/data/...'.

* Un componente por archivo. Máximo 150 líneas por componente; si supera, dividir.

## **10.2 Seguridad**

* Variables sensibles en .env.local únicamente. Nunca commitear al repositorio.

* .gitignore configurado para excluir: .env.local, node\_modules, .next, .vercel.

* Formulario con honeypot field para prevenir spam bots (complemento a Formspree).

* Headers de seguridad en next.config.js: X-Content-Type-Options, X-Frame-Options, Referrer-Policy.

* Sin dependencias innecesarias. Auditar con 'npm audit' antes de cada deploy.

* El AgeGate protege únicamente la sección de licores El Tunche — no bloquea el acceso al sitio completo.

## **10.3 Rendimiento (Core Web Vitals)**

* Imágenes en formato WebP/AVIF usando next/image con width/height explícitos.

* Fuentes cargadas con next/font para eliminar layout shift (CLS \= 0).

* Lazy loading de secciones fuera del viewport con dynamic imports o Intersection Observer.

* Video de Hero como fallback: si no carga, mostrar imagen estática (no bloquear LCP).

* Meta target: LCP \< 2.5s, FID \< 100ms, CLS \< 0.1.

## **10.4 SEO**

* Metadata completa via next/metadata en layout.tsx: title, description, og:image, og:title, twitter:card.

* Estructura semántica HTML5: \<header\>, \<main\>, \<section\>, \<article\>, \<footer\>.

* Un solo H1 por página. Jerarquía de headings respetada (H1 \> H2 \> H3).

* Sitemap.xml generado automáticamente por Next.js (next-sitemap o App Router nativo).

* robots.txt configurado para permitir indexación.

* Alt text descriptivo en todas las imágenes.

# **11\. Aspectos Legales y Cumplimiento**

| Verificación de edad | Modal activado únicamente al interactuar con la sección El Tunche (licores). El usuario debe confirmar ser mayor de 18 años para acceder al catálogo de licores. Si confirma, la preferencia se guarda en `sessionStorage` con clave `tunche-age-ok`. Si indica ser menor, se muestra mensaje y se redirige al inicio de la sección de productos sin licores. |
| :---- | :---- |
| **AgeGate como modal** | El componente `AgeGate.tsx` es un modal, no un wrapper global. Se activa por evento desde la sección El Tunche. Props: `isOpen`, `onConfirm`, `onDeny`. |
| **Aviso en footer** | Texto legal: 'Este sitio es exclusivo para mayores de 18 años. El consumo excesivo de alcohol es dañino para la salud.' (según normativa peruana). |
| **Política de privacidad** | Requerida si el formulario de contacto recopila datos personales (nombre, email). Agregar página /privacidad en v1.1. |
| **Derechos de autor** | Todas las imágenes de productos deben ser propiedad del cliente o con licencia de uso comercial. No usar stock sin verificar licencia. |
| **Cookies** | Si se implementa Analytics, se requiere banner de cookies para cumplir con normativa de privacidad. Diferir para v1.2. |

# **12\. Escalabilidad y Roadmap**

El proyecto está diseñado para crecer sin reescritura. Las siguientes funcionalidades pueden incorporarse en versiones futuras:

| v | Feature | Notas técnicas |
| :---- | :---- | :---- |
| 1.1 | Más productos | Solo agregar objetos al array en /data/productos.ts. Zero code changes. |
| 1.2 | Google Analytics 4 | Agregar script via next/script. Sin cambios de arquitectura. |
| 2.0 | CMS Headless (Sanity/Contentful) | Reemplazar /data/ con fetch a CMS API. Componentes ya desacoplados de los datos. |
| 2.0 | Tienda online | Integrar Mercado Pago o Stripe. Requiere backend (API Routes de Next.js o servicio externo). |
| 2.1 | Versión en inglés | Implementar i18n con next-intl. Estructura de rutas: /es/... y /en/... |
| 3.0 | Blog / Noticias | Sección dinámica con MDX o CMS. Añadir ruta /blog/\[slug\]. |

# **13\. Entorno de Desarrollo y Deploy**

## **13.1 Requisitos del entorno local**

* Node.js \>= 18.17.0 (LTS recomendado).

* npm \>= 9 o pnpm \>= 8 (pnpm recomendado por velocidad).

* Git \>= 2.40.

* Editor recomendado: VS Code con extensiones: ESLint, Prettier, Tailwind CSS IntelliSense, TypeScript.

## **13.2 Comandos principales**

| npm run dev | Servidor de desarrollo local en http://localhost:3000 |
| :---- | :---- |
| **npm run build** | Compilación de producción (verifica errores de TypeScript) |
| **npm run start** | Servidor de producción local (requiere build previo) |
| **npm run lint** | Análisis estático con ESLint |
| **npm run format** | Formateo automático con Prettier |

## **13.3 Flujo de deploy**

1. Desarrollar en feature branch: git checkout \-b feature/nombre-feature

2. Hacer PR a rama main en GitHub.

3. Vercel genera un Preview Deployment automático para revisión visual.

4. Al hacer merge a main, Vercel despliega automáticamente a producción.

# **14\. Pendientes y Decisiones Abiertas**

| Pendiente | Responsable | Prioridad |
| :---- | :---- | :---- |
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

**El Huerto del Tunche — Especificación Técnica v2.0**

Documento creado en Mayo 2025. Actualizado Mayo 2026. Cusco, Perú.
