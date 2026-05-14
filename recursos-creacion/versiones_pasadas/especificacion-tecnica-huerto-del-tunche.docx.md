  
🌿

**EL HUERTO DEL TUNCHE**

Especificación Técnica del Sitio Web

Versión 1.0  |  Mayo 2025

Desarrollado por: Flavio (Ing. Sistemas, UAC)

Cliente: Guillermo — El Huerto del Tunche, Cusco, Perú

# **1\. Información General del Proyecto**

| Nombre del proyecto | El Huerto del Tunche — Sitio Web Oficial |
| :---- | :---- |
| **Cliente** | Guillermo (propietario), Cusco, Perú |
| **Desarrollador** | Flavio — Estudiante 4to año Ing. de Sistemas |
| **Tipo de sitio** | Sitio web de exhibición / vitrina digital (sin e-commerce) |
| **Versión del documento** | 1.0 |
| **Fecha de creación** | Mayo 2025 |
| **Estado** | Planificación — pendiente de inicio de desarrollo |
| **Repositorio** | Por definir (GitHub recomendado — repositorio privado) |
| **URL de producción** | Por definir (dominio pendiente de adquisición) |
| **Plataforma de deploy** | Vercel (plan gratuito — Hobby) |

# **2\. Objetivo del Sitio**

El Huerto del Tunche es una pequeña empresa cusqueña productora de licores artesanales elaborados a base de frutas tropicales y amazónicas. El sitio web tiene como objetivo principal servir como vitrina digital de la marca: presentar su identidad, filosofía, productos y datos de contacto.

## **2.1 Objetivos específicos**

* Comunicar la identidad de marca: artesanal, misterioso, arraigado en la naturaleza cusqueña.

* Exhibir el catálogo de productos con descripción, ingredientes y características.

* Generar confianza en potenciales clientes y distribuidores locales.

* Proporcionar información de contacto y presencia en redes sociales.

* Cumplir con la restricción legal de verificación de mayoría de edad para webs de licores.

## **2.2 Fuera de alcance (v1.0)**

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

| Sección | Componente | Descripción |
| :---- | :---- | :---- |
| 1 | AgeGate | Pantalla de verificación de edad obligatoria antes de acceder al sitio. Modal con fondo oscuro y branding. Guarda preferencia en localStorage. |
| 2 | Navbar | Barra de navegación fija (sticky). Logo a la izquierda, links a la derecha: Inicio, Nosotros, Productos, Contacto. Hamburger en mobile. |
| 3 | Hero | Sección hero de impacto visual. Video de fondo o imagen atmosférica (bosque/penumbra). Tagline principal, nombre de la empresa y CTA hacia productos. |
| 4 | Nosotros | Historia de la empresa, origen del nombre 'Tunche', filosofía artesanal. Texto \+ imagen ambiental lateral. |
| 5 | Productos | Tarjetas individuales por licor: Copoazú, Fresa, Maracuyá. Cada tarjeta incluye: foto, nombre, descripción de sabor, ingredientes base y nota de degustación. |
| 6 | Contacto | Formulario básico (nombre, email, mensaje) integrado con Formspree. Datos de contacto directo: teléfono, email, dirección referencial en Cusco. |
| 7 | Footer | Logo reducido, links de navegación, íconos de RRSS (Instagram, Facebook, WhatsApp). Aviso legal de mayoría de edad. Copyright. |

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

| Nombre | HEX | Uso principal |
| :---- | :---- | :---- |
| Negro profundo | \#0D0D0D | Fondo principal, backgrounds de secciones oscuras. |
| Marrón bosque | \#3B1E0E | Fondos secundarios, tarjetas de producto, secciones intermedias. |
| Dorado antiguo | \#B8860B | Color de acento principal: bordes, íconos, subrayados, CTA. |
| Dorado claro | \#D4A943 | Hover states, highlights, textos decorativos en títulos. |
| Blanco humo | \#F5F0E8 | Texto principal sobre fondos oscuros. Legibilidad garantizada. |
| Gris cálido | \#A09080 | Texto descriptivo secundario, subtítulos, metadata. |

## **6.2 Tipografía**

| Fuente de títulos | Cormorant Garamond — Serif clásica, elegante, ligeramente antigua. Ideal para H1, H2 y taglines impactantes. |
| :---- | :---- |
| **Fuente de cuerpo** | Inter — Sans-serif moderna, altamente legible en pantalla. Para párrafos, listas y UI elements. |
| **Tamaño base** | 16px (1rem). Escala modular: 1rem / 1.25rem / 1.5rem / 2rem / 3rem / 4.5rem. |
| **Interlineado** | 1.6 para cuerpo de texto. 1.2 para títulos grandes. |
| **Peso tipográfico** | Títulos: 600–700 (SemiBold / Bold). Cuerpo: 400 (Regular). Énfasis: 500 (Medium). |

## **6.3 Estilo visual general**

* Fondo predominantemente oscuro (negro / marrón oscuro) con texto claro.

* Acentos dorados para jerarquía visual: separadores, bordes de tarjetas, íconos activos.

* Fotografías de producto con fondo oscuro y iluminación dramática (estilo still life).

* Espaciado generoso entre secciones (padding vertical mínimo 80px).

* Transiciones suaves: opacity fade-in al hacer scroll (Intersection Observer \+ Framer Motion).

* Sin elementos decorativos excesivos. Minimalismo atmosférico.

# **7\. Estructura del Proyecto**

Estructura basada en Next.js 14 con App Router y Tailwind CSS:

**huerto-del-tunche/**  
├── app/  
│   ├── layout.tsx          \# Root layout, fuentes, metadata global  
│   ├── page.tsx            \# Página principal (SPA scroll)  
│   └── globals.css         \# Variables CSS, reset, clases base  
├── components/  
│   ├── AgeGate.tsx         \# Modal de verificación de edad  
│   ├── Navbar.tsx          \# Barra de navegación sticky  
│   ├── Hero.tsx            \# Sección hero con video/imagen  
│   ├── Nosotros.tsx        \# Historia y filosofía  
│   ├── Productos.tsx       \# Grid de tarjetas de productos  
│   ├── ProductCard.tsx     \# Tarjeta individual reutilizable  
│   ├── Contacto.tsx        \# Formulario \+ datos de contacto  
│   └── Footer.tsx          \# Footer con RRSS y legal  
├── data/  
│   └── productos.ts        \# Array de datos de productos (tipado)  
├── public/  
│   ├── images/             \# Fotos de productos, fondos  
│   └── logo.svg            \# Logo oficial de la marca  
├── types/  
│   └── index.ts            \# Tipos TypeScript: Producto, etc.  
├── .env.local              \# Variables de entorno (Formspree ID)  
├── tailwind.config.ts      \# Paleta personalizada, fuentes  
├── tsconfig.json  
└── next.config.js

# **8\. Buenas Prácticas y Estándares**

## **8.1 Código y arquitectura**

* TypeScript estricto (strict: true en tsconfig). Sin uso de 'any'.

* Componentes funcionales únicamente. Sin class components.

* Separación de datos y presentación: los datos de productos viven en /data/productos.ts, no hardcodeados en componentes.

* Naming conventions: PascalCase para componentes, camelCase para funciones y variables, SCREAMING\_SNAKE para constantes.

* Imports absolutos configurados: '@/components/...', '@/data/...'.

* Un componente por archivo. Máximo 150 líneas por componente; si supera, dividir.

## **8.2 Seguridad**

* Variables sensibles en .env.local únicamente. Nunca commitear al repositorio.

* .gitignore configurado para excluir: .env.local, node\_modules, .next, .vercel.

* Formulario con honeypot field para prevenir spam bots (complemento a Formspree).

* Headers de seguridad en next.config.js: X-Content-Type-Options, X-Frame-Options, Referrer-Policy.

* Sin dependencias innecesarias. Auditar con 'npm audit' antes de cada deploy.

* AgeGate obligatorio: no se puede acceder al contenido sin confirmar mayoría de edad.

## **8.3 Rendimiento (Core Web Vitals)**

* Imágenes en formato WebP/AVIF usando next/image con width/height explícitos.

* Fuentes cargadas con next/font para eliminar layout shift (CLS \= 0).

* Lazy loading de secciones fuera del viewport con dynamic imports o Intersection Observer.

* Video de Hero como fallback: si no carga, mostrar imagen estática (no bloquear LCP).

* Meta target: LCP \< 2.5s, FID \< 100ms, CLS \< 0.1.

## **8.4 SEO**

* Metadata completa via next/metadata en layout.tsx: title, description, og:image, og:title, twitter:card.

* Estructura semántica HTML5: \<header\>, \<main\>, \<section\>, \<article\>, \<footer\>.

* Un solo H1 por página. Jerarquía de headings respetada (H1 \> H2 \> H3).

* Sitemap.xml generado automáticamente por Next.js (next-sitemap o App Router nativo).

* robots.txt configurado para permitir indexación.

* Alt text descriptivo en todas las imágenes.

# **9\. Escalabilidad y Roadmap**

El proyecto está diseñado para crecer sin reescritura. Las siguientes funcionalidades pueden incorporarse en versiones futuras:

| v | Feature | Notas técnicas |
| :---- | :---- | :---- |
| 1.1 | Más productos | Solo agregar objetos al array en /data/productos.ts. Zero code changes. |
| 1.2 | Google Analytics 4 | Agregar script via next/script. Sin cambios de arquitectura. |
| 2.0 | CMS Headless (Sanity/Contentful) | Reemplazar /data/ con fetch a CMS API. Componentes ya desacoplados de los datos. |
| 2.0 | Tienda online | Integrar Mercado Pago o Stripe. Requiere backend (API Routes de Next.js o servicio externo). |
| 2.1 | Versión en inglés | Implementar i18n con next-intl. Estructura de rutas: /es/... y /en/... |
| 3.0 | Blog / Noticias | Sección dinámica con MDX o CMS. Añadir ruta /blog/\[slug\]. |

# **10\. Entorno de Desarrollo y Deploy**

## **10.1 Requisitos del entorno local**

* Node.js \>= 18.17.0 (LTS recomendado).

* npm \>= 9 o pnpm \>= 8 (pnpm recomendado por velocidad).

* Git \>= 2.40.

* Editor recomendado: VS Code con extensiones: ESLint, Prettier, Tailwind CSS IntelliSense, TypeScript.

## **10.2 Comandos principales**

| npm run dev | Servidor de desarrollo local en http://localhost:3000 |
| :---- | :---- |
| **npm run build** | Compilación de producción (verifica errores de TypeScript) |
| **npm run start** | Servidor de producción local (requiere build previo) |
| **npm run lint** | Análisis estático con ESLint |
| **npm run format** | Formateo automático con Prettier |

## **10.3 Flujo de deploy**

1. Desarrollar en feature branch: git checkout \-b feature/nombre-feature

2. Hacer PR a rama main en GitHub.

3. Vercel genera un Preview Deployment automático para revisión visual.

4. Al hacer merge a main, Vercel despliega automáticamente a producción.

# **11\. Aspectos Legales y Cumplimiento**

| Verificación de edad | Modal obligatorio al primer acceso. El usuario debe confirmar ser mayor de 18 años. Sin confirmación, no accede al contenido. Preferencia guardada en localStorage con expiración de sesión. |
| :---- | :---- |
| **Aviso en footer** | Texto legal: 'Este sitio es exclusivo para mayores de 18 años. El consumo excesivo de alcohol es dañino para la salud.' (según normativa peruana). |
| **Política de privacidad** | Requerida si el formulario de contacto recopila datos personales (nombre, email). Agregar página /privacidad en v1.1. |
| **Derechos de autor** | Todas las imágenes de productos deben ser propiedad del cliente o con licencia de uso comercial. No usar stock sin verificar licencia. |
| **Cookies** | Si se implementa Analytics, se requiere banner de cookies para cumplir con normativa de privacidad. Diferir para v1.2. |

# **12\. Pendientes y Decisiones Abiertas**

| Pendiente | Responsable | Prioridad |
| :---- | :---- | :---- |
| Adquisición del dominio (ej: huertodeltunche.com) | Guillermo | Alta — bloquea deploy en producción |
| Fotografías definitivas de los 3 productos | Guillermo | Alta — necesarias para Sección Productos |
| Historia y textos de la empresa / About | Guillermo | Media — puede usarse placeholder inicial |
| Decisión sobre video de fondo en Hero | Flavio / Guillermo | Media — alternativa: imagen estática parallax |
| Cuenta de Formspree creada y endpoint configurado | Flavio | Media — necesaria para formulario funcional |
| Cuentas de RRSS de la empresa (Instagram, etc.) | Guillermo | Baja — se pueden dejar como placeholder |
| Cuenta de Google Analytics (si se implementa) | Guillermo | Baja — diferir a v1.2 |

**El Huerto del Tunche — Especificación Técnica v1.0**

Documento generado en Mayo 2025\. Cusco, Perú.