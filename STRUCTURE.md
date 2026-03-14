# Flowform® Eco-Tech — Estructura del Proyecto

> Aplicación web construida con **Angular 20** y estilizada con **Tailwind CSS** (vía CDN).
> Desplegada en **Firebase Hosting**.

---

## Árbol de Directorios

```
flow-form/
├── public/                          # Assets estáticos servidos directamente
│   ├── favicon.ico
│   ├── images/                      # Imágenes de productos Flowform
│   │   ├── Korimako.png
│   │   ├── ashdown.png
│   │   ├── bellbird.png
│   │   ├── cloverleaf.png
│   │   ├── emerson.png
│   │   ├── helix.png
│   │   ├── logo.png
│   │   ├── lotus.png
│   │   ├── manawa.png
│   │   ├── matatiki.png
│   │   ├── meander.png
│   │   ├── morena.png
│   │   ├── multiple-plastic.png
│   │   ├── multiple-steel.png
│   │   ├── ruskin.png
│   │   ├── sevenfold.png
│   │   ├── vortex.png
│   │   ├── whirlpool.png
│   │   └── whirlpool-petg.png
│   └── studies/                     # PDFs de estudios científicos
│       ├── Farming/
│       ├── flow form studies/
│       ├── human aplications/
│       └── wine/
│
├── src/                             # Código fuente Angular
│   ├── index.html                   # HTML raíz (carga Tailwind CDN + Google Fonts)
│   ├── main.ts                      # Bootstrap de Angular
│   ├── styles.css                   # Estilos globales
│   │
│   └── app/
│       ├── app.ts                   # Componente raíz
│       ├── app.html                 # Template raíz (header + router-outlet + footer)
│       ├── app.css                  # Estilos del componente raíz
│       ├── app.routes.ts            # Definición de rutas
│       ├── app.config.ts            # Configuración de providers
│       ├── app.component.ts         # Componente alternativo
│       ├── app.spec.ts              # Tests del componente raíz
│       │
│       ├── models/
│       │   └── flowform.model.ts    # Interfaces: FlowformModel, CaseStudy, ScalabilityData
│       │
│       ├── services/
│       │   ├── language.service.ts  # Servicio de internacionalización (EN/ES) con Angular signals
│       │   └── data.service.ts      # Datos de productos, estudios, métricas y aplicaciones
│       │
│       ├── components/              # Componentes reutilizables
│       │   ├── header/              # Navbar flotante con navegación y toggle de idioma
│       │   ├── footer/              # Pie de página
│       │   ├── animated-pulse-pill/ # Badge animado con pulso (etiquetas de sección)
│       │   ├── core-technology-section/ # Sección explicativa de la tecnología
│       │   ├── metric-card/         # Tarjeta de métrica científica con enlace a estudio
│       │   ├── navbar/              # Navbar alternativa
│       │   └── technical-evaluation-cta/ # CTA de evaluación técnica
│       │
│       └── pages/                   # Páginas de la aplicación
│           ├── landing/             # Página de inicio (video, features, how-it-works)
│           ├── products/            # Catálogo de productos con filtros
│           ├── model-details/       # Detalle individual de producto
│           ├── biochemistry/        # Ciencia y estudios bioquímicos
│           ├── winery/              # Sector vitícola (Wine)
│           ├── meat-industry/       # Sector ganadero (Animal Agriculture)
│           ├── mining/              # Sector minero (Mining & Remediation)
│           ├── municipalities/      # Sector municipal (Municipalities & Public Spaces)
│           └── contact/             # Formulario de contacto
│
├── angular.json                     # Configuración de Angular CLI
├── tsconfig.json                    # Configuración base de TypeScript
├── tsconfig.app.json                # Config TS para la app
├── tsconfig.spec.json               # Config TS para tests
├── package.json                     # Dependencias y scripts npm
├── firebase.json                    # Configuración de Firebase Hosting
├── .firebaserc                      # Proyecto Firebase asociado
├── .editorconfig                    # Configuración del editor
├── .gitignore                       # Archivos ignorados por Git
├── STRUCTURE.md                     # Este archivo
└── README.md                        # Documentación básica (Angular CLI default)
```

---

## Rutas de la Aplicación

| Ruta                        | Componente              | Descripción                         |
|-----------------------------|-------------------------|-------------------------------------|
| `/`                         | `LandingComponent`      | Página de inicio con video y CTA    |
| `/products`                 | `HomeComponent`         | Catálogo de productos con filtros   |
| `/category/:category`       | `HomeComponent`         | Productos filtrados por categoría   |
| `/model/:category/:id`      | `ModelDetailsComponent` | Detalle técnico de un producto      |
| `/biochemistry/:category`   | `BiochemistryComponent` | Ciencia y estudios por categoría    |
| `/winery`                   | `WineryComponent`       | Página del sector vitícola          |
| `/meat-industry`            | `MeatIndustryComponent` | Página del sector ganadero          |
| `/mining`                   | `MiningComponent`       | Página del sector minero            |
| `/municipalities`           | `MunicipalitiesComponent`| Página del sector municipal        |
| `/contact`                  | `ContactComponent`      | Formulario de contacto              |
| `**`                        | Redirect → `/`          | Fallback para rutas no encontradas  |

---

## Nomenclatura de Páginas

| Carpeta | Ruta URL | Nav Header (EN/ES) | Título Página (EN/ES) |
|---------|----------|--------------------|-----------------------|
| `landing/` | `/` | Home / Inicio | FLOWFORM® |
| `products/` | `/products` | Products / Productos | Our Products / Nuestros Productos |
| `winery/` | `/winery` | Wine / Vinos | Wine / Vinos |
| `meat-industry/` | `/meat-industry` | Animal Agriculture / Agricultura Animal | Animal Agriculture / Agricultura Animal |
| `mining/` | `/mining` | Mining / Minería | Mining & Remediation / Minería y Remediación |
| `municipalities/` | `/municipalities` | Municipalities / Municipalidades | Municipalities & Public Spaces / Municipalidades y Espacios Públicos |
| `contact/` | `/contact` | Contact / Contacto | — |

---

## Servicios Principales

### `LanguageService` (`language.service.ts`)
- Maneja la internacionalización (EN/ES) usando **Angular Signals**.
- Método `t(key)` para traducciones dinámicas.
- Todas las traducciones están centralizadas en un diccionario inline.

### `DataService` (`data.service.ts`)
- Contiene todos los datos de productos, especificaciones técnicas, estudios científicos y métricas de rendimiento.
- Sirve como fuente única de datos (no hay backend externo).

---

## Comandos Principales

| Comando         | Descripción                               |
|-----------------|-------------------------------------------|
| `npm start`     | Inicia el servidor de desarrollo (`:4200`) |
| `npm run build` | Compila para producción en `dist/`        |
| `npm test`      | Ejecuta tests unitarios con Karma         |

---

## Despliegue

La aplicación se despliega en **Firebase Hosting** usando:
```bash
firebase deploy
```
La configuración de `firebase.json` redirige todas las rutas a `index.html` para soportar el enrutamiento SPA de Angular.
