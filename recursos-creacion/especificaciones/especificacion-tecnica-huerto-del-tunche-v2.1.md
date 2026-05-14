  
🌿

**EL HUERTO DEL TUNCHE**

Especificación Técnica del Sitio Web

Versión 2.1

Mayo 2025  |  Flavio (Ing. Sistemas, UNSAAC)

Cliente: Guillermo — El Huerto del Tunche · Cusco, Perú

# **1\. Información General del Proyecto**

| Nombre del proyecto | El Huerto del Tunche — Sitio Web Oficial |
| :---- | :---- |
| **Sub-marca de licores** | El Tunche (línea de licores artesanales) |
| **Cliente** | Guillermo (propietario) · Cusco, Perú |
| **Desarrollador** | Flavio — Ing. de Sistemas, 4to año |
| **Versión del documento** | 2.1 — Mayo 2025 |
| **Tipo de sitio** | Vitrina digital de exhibición. 2 páginas. Sin e-commerce ni CMS. |
| **Repositorio** | GitHub — repositorio privado (por crear) |
| **Deploy** | Vercel (Hobby) — CI/CD automático desde GitHub |
| **Dominio** | Pendiente de adquisición por el cliente |

# **2\. Identidad de Marca**

La identidad del proyecto se divide en dos niveles que no deben confundirse:

| Marca paraguas | El Huerto del Tunche — empresa productora artesanal de Cusco, Perú. Produce licores, mermeladas y chocolate de copoazú. |
| :---- | :---- |
| **Sub-marca de licores** | El Tunche — línea exclusiva de licores artesanales macerados en pisco quebranta. Tiene su propia página dentro del sitio. |
| **Origen** | Selva de Huayopata, Cusco. Productos elaborados con fruta de la región amazónica. |
| **Filosofía** | Lujo oscuro · Naturaleza salvaje · Artesanalidad · Historia · Tiempo · Autenticidad. |
| **Referencias visuales** | Casillero del Diablo (casillerodeldiablo.com) · Jägermeister (lam.jagermeister.com) |

# **3\. Paleta de Colores Oficial**

Paleta confirmada desde imagen de marca entregada por el cliente:

| Nombre | HEX | Uso en web | Sensación |
| :---- | :---- | :---- | :---- |
| Negro Carbón | \#0D0D0D | Fondo principal | Fuerza · Elegancia · Profundidad |
| Rojo Vino Oscuro | \#5B0F16 | Títulos · Acentos · AgeGate modal | Pasión · Intensidad · Poder · Identidad |
| Marrón Madera Añeja | \#4A3426 | Fondos secundarios · sección Nosotros | Tierra · Origen · Artesanal · Auténtico |
| Dorado Envejecido | \#B08A47 | Bordes finos · separadores · íconos | Lujo · Herencia · Exclusividad |
| Gris Neblina | \#7B7B75 | Texto secundario · fondos neutros | Equilibrio · Niebla · Misterio |
| Blanco Humo | \#F5F0E8 | Texto principal sobre fondos oscuros | Claridad · Legibilidad |

## **3.1 Reglas de uso de color**

* Fondos: predominantemente Negro Carbón, Gris Neblina y Marrón Madera. El Rojo Vino solo en elementos puntuales (AgeGate, acentos).

* Textos: SOLO tres colores permitidos → Blanco Humo (principal) · Rojo Vino (títulos) · Gris Neblina (secundario).

* Dorado Envejecido: solo para detalles decorativos (bordes, separadores, líneas). NUNCA para texto.

* Nunca usar colores hardcodeados en Tailwind (text-red-800, bg-gray-900). Solo tokens tunche.\*.

# **4\. Sistema de Texturas**

La identidad visual requiere fondos con carácter artesanal. Se implementan texturas CSS para reforzar la paleta sin perder rendimiento.

## **4.1 Archivos de textura — /public/textures/**

| grain.png | 200×200px · Ruido monofónico tileable · PNG transparente · Para overlay de grano sobre cualquier sección. |
| :---- | :---- |
| **wood-vein.png** | 400×400px · Veteado de madera sutil · Para fondos Marrón Madera. |
| **velvet.png** | 300×300px · Textura tela/terciopelo · Para fondo del modal AgeGate (Rojo Vino). |

## **4.2 Reglas de texturas**

* Las texturas son SUTILES. Si se notan a primera vista, están demasiado fuertes.

* Opacity máxima de overlay: 0.05. Si supera ese valor, reducir.

* bg-carbon-texture → Hero, Navbar, secciones de alto impacto.

* bg-madera-texture → Sección Nosotros, bloque El Tunche en página principal.

* bg-vino-texture → Modal AgeGate únicamente.

* grain-overlay → clase utilitaria, aplica en cualquier sección para añadir profundidad.

# **5\. Arquitectura del Sitio — 2 Páginas**

El sitio NO es una SPA de scroll infinito. Tiene exactamente dos rutas independientes.

## **5.1 Página principal  /  (El Huerto del Tunche)**

Scroll vertical. Secciones en orden:

| \# | Sección | Descripción |
| :---- | :---- | :---- |
| 1 | Navbar | Logo \+ navegación sticky. Links: Inicio · Nosotros · Productos · El Tunche · Contacto. Hamburger en mobile. Fondo carbon semitransparente \+ backdrop-blur. |
| 2 | Inicio (Hero) | Minimalista. Logo grande, slogan de la marca y un botón CTA que hace scroll a la sección Productos. Fondo con textura de carbón. |
| 3 | Nosotros | Historia de El Huerto del Tunche, origen en Huayopata, filosofía artesanal. Texto e imagen ambiental. Fondo madera texturizado. |
| 4 | Productos | Tres bloques en la misma sección:• Chocolate: foto izquierda \+ texto derecha.• Mermeladas: foto de ambas juntas izquierda \+ texto derecha.• El Tunche: foto atmosférica \+ descripción de intriga \+ botón → /el-tunche. |
| 5 | Contacto | Solo datos de la empresa y redes sociales. SIN formulario. Teléfono, email, dirección referencial Cusco, íconos RRSS. |
| 6 | Footer | Logo reducido, links de navegación, aviso legal de mayoría de edad, copyright El Huerto del Tunche. |

## **5.2 Página exclusiva  /el-tunche  (El Tunche — Licores)**

Accesible desde: botón en sección Productos de la página principal · link 'El Tunche' en el Navbar.

| \# | Elemento | Descripción |
| :---- | :---- | :---- |
| 1 | AgeGate Modal | Se activa al cargar la página si no hay verificación en sessionStorage. Modal con fondo vino texturizado. Dos opciones: confirmar mayoría de edad o ser redirigido a /. |
| 2 | Hero El Tunche | Identidad propia de la sub-marca. Fondo atmosférico, nombre 'El Tunche' en tipografía de display, tagline de origen. |
| 3 | Sabor: Maracuyá | Foto del producto, nombre, descripción de sabor/notas, mención de presentaciones: 750ml · 500ml · 250ml. |
| 4 | Sabor: Fresa | Misma estructura que Maracuyá. |
| 5 | Sabor: Copoazú | Misma estructura que Maracuyá. |
| 6 | Descripción de origen | "De la selva de Huayopata nace nuestro producto El Tunche, pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada para llegar a sus paladares y su hogar." |

# **6\. Catálogo de Productos**

## **6.1 El Tunche — Licores Artesanales (9 productos)**

Descripción de origen: "De la selva de Huayopata nace nuestro producto El Tunche, pulpa seleccionada de fruta macerada en pisco quebranta, filtrada y embotellada para llegar a sus paladares y su hogar."

| Sabor | Descripción | Presentaciones |
| :---- | :---- | :---- |
| Maracuyá | Fruta tropical de la selva peruana, acidez vibrante. | 750ml · 500ml · 250ml |
| Fresa | Dulzor intenso de fresa seleccionada, fresca y frutal. | 750ml · 500ml · 250ml |
| Copoazú | Fruta amazónica prima del cacao, exótica y cremosa. | 750ml · 500ml · 250ml |

## **6.2 Mermeladas Artesanales (2 productos)**

Descripción: "Mermelada natural de producción artesanal, siente la fruta misma en cada porción, el dulzor y la explosión de cada fruta llevado a su extremo más sabroso…"

| Mermelada de Copoazú | 200g · Fruta amazónica en su versión más dulce y concentrada. |
| :---- | :---- |
| **Mermelada de Mango** | 200g · Mango peruano de temporada, artesanal y sin conservantes. |

## **6.3 Chocolate de Copoazú (1 producto)**

"Al ser familiar del cacao, el Copoazú pasa por el mismo proceso de creación para hacer un 'chocolate de taza'. Gracias a los beneficios del copoazú, este no tiene grasa, es digestivo y antioxidante."

| Producto | Chocolate de Copoazú — 200g |
| :---- | :---- |
| **Proceso** | Mismo proceso que el cacao tradicional, adaptado al copoazú amazónico. |
| **Beneficios** | Sin grasa · Digestivo · Antioxidante |

# **7\. Stack Tecnológico**

| Capa | Tecnología | Justificación |
| :---- | :---- | :---- |
| Framework | Next.js 14 (App Router) | SSG, routing de 2 páginas, next/image, next/font, SEO nativo. |
| Lenguaje | TypeScript (strict) | Tipado estático, detección de errores, mantenibilidad. |
| Estilos | Tailwind CSS v3 | Utility-first, design tokens personalizados, purga automática. |
| Fuentes | next/font — Cormorant Garamond \+ Inter | Display serif para títulos, sans-serif limpia para cuerpo. CLS \= 0\. |
| Animaciones | Framer Motion | fadeInUp, staggerContainer, parallax sutil. Atmósfera oscura. |
| Imágenes | next/image | WebP automático, lazy loading, responsive srcSet. |
| Contacto | Solo datos estáticos | Sin formulario en v2.1. Teléfono, email, RRSS directos. |
| Linting | ESLint \+ Prettier | Calidad y formato consistente en todo el código. |
| Deploy | Vercel (Hobby) | CI/CD desde GitHub. Preview por rama. Dominio personalizado. |
| Control de versiones | Git \+ GitHub | Repositorio privado. main \= producción. Feature branches. |

# **8\. Diseño y Guía de Estilos**

## **8.1 Layout sección Productos**

Los bloques de productos en la página principal siguen este layout fijo:

┌──────────────────────────────────────────────────────┐  
│  \[foto chocolate 200g\]  │  Título \+ descripción       │  
├──────────────────────────────────────────────────────┤  
│  \[foto mermeladas x2\]   │  Título \+ descripción       │  
├──────────────────────────────────────────────────────┤  
│         \[foto atmosférica El Tunche\]                  │  
│    Descripción de intriga  \+  Botón → /el-tunche     │  
└──────────────────────────────────────────────────────┘

En mobile: foto arriba, texto abajo (stack vertical).

## **8.2 Tipografía**

| Fuente de títulos | Cormorant Garamond (serif). H1, H2, taglines. tracking-wide mínimo. Color: Rojo Vino \#5B0F16. |
| :---- | :---- |
| **Fuente de cuerpo** | Inter (sans-serif). Párrafos, UI, labels. Color: Blanco Humo \#F5F0E8 o Gris Neblina \#7B7B75. |
| **Jerarquía de color** | Títulos: Rojo Vino · Texto principal: Blanco Humo · Texto secundario: Gris Neblina. SOLO estos tres. |
| **Tamaño Hero** | H1 puede llegar a text-7xl / text-8xl. No escatimar en impacto tipográfico. |

# **9\. Buenas Prácticas y Estándares**

## **9.1 Código**

* TypeScript estricto. Cero 'any'. Tipos en /types/index.ts.

* Un componente por archivo. Máximo 150 líneas. Si supera, dividir.

* Datos de productos en /data/, nunca hardcodeados en JSX.

* Imports absolutos: @/components, @/data, @/types, @/lib.

* Commits en español, imperativo, descriptivos. Nunca 'update' o 'wip'.

## **9.2 Seguridad**

* Variables de entorno en .env.local. Nunca commitear.

* Headers de seguridad en next.config.js: X-Content-Type-Options, X-Frame-Options, Referrer-Policy.

* AgeGate usa sessionStorage (expira al cerrar navegador). No localStorage.

* Sin formulario de contacto en v2.1 → no hay superficie de ataque por inputs.

## **9.3 Rendimiento**

* next/image para toda imagen. width, height y alt siempre explícitos.

* next/font para fuentes. Nunca \<link\> externo a Google Fonts.

* dynamic() para AgeGate: solo carga en /el-tunche, no en página principal.

* Objetivo Core Web Vitals: LCP \< 2.5s · CLS \= 0 · FID \< 100ms.

## **9.4 SEO**

* Metadata completa en layout.tsx: title, description, og:image, og:title.

* Estructura semántica: \<header\>, \<main\>, \<section\>, \<footer\>.

* Un solo H1 por página. Jerarquía de headings respetada.

* Alt text descriptivo en todas las imágenes.

# **10\. Estructura del Proyecto**

**huerto-del-tunche/**  
├── app/  
│   ├── layout.tsx              \# Root layout, fuentes, metadata  
│   ├── page.tsx                \# Página principal (/)  
│   ├── globals.css             \# Variables CSS, texturas, reset  
│   └── el-tunche/  
│       └── page.tsx            \# Página exclusiva (/el-tunche)  
├── components/  
│   ├── AgeGate.tsx             \# Modal verificación de edad  
│   ├── Navbar.tsx              \# Sticky, 5 links, hamburger mobile  
│   ├── sections/  
│   │   ├── Inicio.tsx          \# Hero: logo, slogan, CTA scroll  
│   │   ├── Nosotros.tsx        \# Historia de la marca  
│   │   ├── Productos.tsx       \# Chocolate \+ Mermeladas \+ El Tunche CTA  
│   │   ├── Contacto.tsx        \# Solo datos y RRSS. Sin formulario.  
│   │   └── Footer.tsx  
│   └── el-tunche/  
│       ├── HeroTunche.tsx      \# Hero exclusivo El Tunche  
│       └── SaborCard.tsx       \# Card de sabor (maracuyá/fresa/copoazú)  
├── data/  
│   ├── licores.ts              \# ProductoLicor\[\]  
│   ├── mermeladas.ts           \# ProductoMermelada\[\]  
│   └── chocolate.ts            \# ProductoChocolate  
├── lib/  
│   └── animations.ts           \# Variantes Framer Motion  
├── public/  
│   ├── images/productos/  
│   ├── images/brand/  
│   └── textures/               \# grain.png · wood-vein.png · velvet.png  
├── types/  
│   └── index.ts                \# Tipos TypeScript  
├── .env.local  
├── tailwind.config.ts  
├── tsconfig.json  
└── next.config.js

# **11\. Pendientes y Decisiones Abiertas**

| Pendiente | Responsable | Prioridad |
| :---- | :---- | :---- |
| Adquisición del dominio | Guillermo | Alta — bloquea producción |
| Logo oficial SVG o PNG transparente | Guillermo | Alta — necesario para Hero y Navbar |
| Foto de cada sabor de licor (maracuyá, fresa, copoazú) | Guillermo | Alta — /el-tunche |
| Foto del chocolate de copoazú 200g | Guillermo | Alta — sección Productos |
| Foto de las dos mermeladas juntas | Guillermo | Alta — sección Productos |
| Textos: historia, nosotros, slogan oficial | Guillermo | Media — puede usarse placeholder |
| Archivos textura PNG (grain, wood-vein, velvet) | Flavio | Media — sistema de texturas |
| Decisión: video o imagen estática en Hero | Flavio \+ Guillermo | Media |
| Cuentas RRSS activas (Instagram, Facebook, WhatsApp) | Guillermo | Baja |

**El Huerto del Tunche — Especificación Técnica v2.1**

Flavio · Cusco, Perú · Mayo 2025