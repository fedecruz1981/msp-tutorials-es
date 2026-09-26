# MSP Tutorials ES

Traducción completa al español de los [tutoriales de MSP](https://docs.cycling74.com/learn/series/msp-tutorials/) de Cycling '74, construida como un sitio web estático con [Astro](https://astro.build).

MSP (Max Signal Processing) es el motor de procesamiento de audio en tiempo real de Max/MSP. Este proyecto recoge los 63 tutoriales oficiales organizados en 14 secciones, manteniendo el rigor técnico del original. Los nombres de objetos y la sintaxis de Max (`cycle~`, `dac~`, `buffer~`, etc.) se conservan sin traducir, tal y como requieren estos tutoriales.

## Contenido

- 63 capítulos traducidos al español
- 14 secciones temáticas (introducción, síntesis, muestreo, filtros, MIDI, compresión, etc.)
- Navegación lateral, búsqueda de texto completo y modo claro/oscuro
- Enlaces a los patchers y recursos originales

## Estructura

```text
/
├── public/
│   ├── images/                 # Imágenes de los tutoriales
│   └── patchers/               # Patchers .maxpat descargables
├── src/
│   ├── components/
│   ├── content/
│   │   └── tutoriales/         # 63 archivos .mdx (contenido)
│   ├── layouts/
│   └── pages/
│       ├── index.astro         # Portada
│       ├── buscar.astro        # Página de búsqueda
│       ├── 404.astro
│       └── tutoriales/         # Rutas dinámicas de cada capítulo
├── astro.config.mjs
└── package.json
```

## Comandos

| Comando               | Acción                                        |
| :-------------------- | :-------------------------------------------- |
| `npm install`         | Instala las dependencias                       |
| `npm run dev`         | Servidor de desarrollo en `localhost:4321`     |
| `npm run build`       | Genera el sitio de producción en `./dist/`     |
| `npm run preview`     | Previsualiza el build local antes de desplegar |

## Tecnologías

- [Astro](https://astro.build) — framework de sitios estáticos
- MDX — contenido con componentes incrustados
- Astro Content Collections — gestión tipada del contenido

## Licencia

Los tutoriales son propiedad de [Cycling '74](https://cycling74.com) y se utilizan con fines educativos. Los derechos sobre el contenido original pertenecen a sus autores.