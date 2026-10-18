# MSP Tutoriales ES

> Tutoriales de MSP de [Cycling '74](https://cycling74.com) traducidos al español y organizados como una experiencia web moderna de aprendizaje.

**Sitio publicado:** [https://fedecruz1981.github.io/msp-tutorials-es/](https://fedecruz1981.github.io/msp-tutorials-es/)

![MSP Tutoriales ES](./public/images/screenshot.png)

MSP (Max Signal Processing) es el motor de procesamiento de audio en tiempo real de Max/MSP. Este proyecto reúne los **63 tutoriales oficiales** en una aplicación web estática construida con [Astro](https://astro.build), manteniendo el rigor técnico del original: los nombres de objetos y la sintaxis de Max (`cycle~`, `dac~`, `buffer~`, `tapin~`, etc.) se conservan sin traducir, tal como exige la terminología de Max/MSP.

## Características

- 📚 **63 capítulos** traducidos al español
- 🗂️ **14 secciones** temáticas (introducción, síntesis, muestreo, filtros, MIDI, compresión, etc.)
- 🧭 Navegación lateral con todas las secciones y capítulos
- 🔍 Búsqueda de texto completo sobre el contenido
- 🌙/☀️ Modo claro y oscuro
- 💾 Acceso a los patchers `.maxpat` de cada capítulo

## Decisiones técnicas

### ¿Por qué Astro?

El proyecto es contenido intensivo: 63 documentos largos que deben cargar rápido. Astro genera HTML estático por defecto, lo que da una puntuación excelente en rendimiento sin JavaScript en el hilo principal. Además, su *content layer* integra nativamente los archivos Markdown/MDX como primera clase.

### ¿Por qué MDX?

Los tutoriales alternan párrafos, tablas, bloques de código de Max y notas. MDX permite incrustar componentes de Astro dentro del contenido cuando sea necesario, sin perder la simplicidad de escribir en Markdown.

### Content Collections

Todo el contenido está tipado y validado con **Astro Content Collections** (`src/content.config.ts`): cada archivo debe declarar `title`, `description`, `section`, `order`, `slug` y `originalUrl` antes de poder construirse. Esto detecta errores de estructura en el build y habilita autocompletado en el editor.

### Búsqueda

La página de búsqueda busca sobre un índice generado en el build. Se diseñó como una ruta estática (`/buscar`) que consulta el contenido completo para no cargar JS pesado en cada visita.

### Patchers

Cada capítulo referencia su patcher de ejemplo original (`patcherUrl`), enlazando al recurso oficial de Cycling '74 en lugar de redistribuir archivos de terceros.

### Traducción y criterios editoriales

Los objetos y la sintaxis de Max/MSP **no se traducen** (son un lenguaje de programación). Sí se traducen las explicaciones, gráficos conceptuales y términos de audio cuando tienen un equivalente natural en español. El objetivo es que un lector hispanohablante entienda los conceptos y pueda abrir los patchers originales sin fricción.

## Desarrollo asistido por IA

Este proyecto se desarrolló con agentes de código (OpenCode) siguiendo instrucciones específicas (AGENTS.md y CLAUDE.md) que mantienen consistencia en la estructura de contenido, las decisiones técnicas y las convenciones de escritura. Se trata de una manera de documentar y acelerar la construcción del sitio manteniendo el control humano de las decisiones del proyecto.

## Cómo ejecutarlo localmente

```bash
npm install
npm run dev        # Servidor de desarrollo en localhost:4321
```

Para generar el sitio de producción:

```bash
npm run build      # Genera ./dist/
npm run preview    # Previsualiza el build
```

## Estructura del proyecto

```text
/
├── public/
│   └── images/                  # 63 figuras de los tutoriales (CC BY 4.0)
├── src/
│   ├── components/              # Sidebar y componentes de UI
│   ├── content/
│   │   └── tutoriales/          # 63 archivos .mdx (el contenido)
│   ├── layouts/                 # Layout principal
│   └── pages/
│       ├── index.astro          # Portada
│       ├── buscar.astro         # Página de búsqueda
│       ├── aviso-legal.astro    # Atribución, licencia CC BY 4.0 y privacidad
│       ├── 404.astro
│       └── tutoriales/          # Secciones y rutas de cada capítulo
├── AVISO-LEGAL.md               # Aviso legal completo (atribución y contacto)
├── src/content.config.ts        # Tipado y validación del contenido
├── astro.config.mjs
└── package.json
```

## Estado del proyecto

- ✅ Traducción completa de los 63 capítulos
- ✅ Sitio estático construido y verificado (80 páginas)
- ✅ Publicado en producción en GitHub Pages
- 🚧 Patchers `.maxpat` pendientes (hoy se enlaza el recurso oficial de cada capítulo)
- 🚧 La búsqueda (índice de `search-index.json`) aún no genera resultados en el sitio publicado

## Roadmap

El roadmap se gestiona como [Issues del repositorio](https://github.com/fedecruz1981/msp-tutorials-es/issues). Actualmente:

- [x] Publicar el sitio en línea
- [ ] Revisar terminología de síntesis
- [ ] Mejorar la búsqueda
- [ ] Revisar accesibilidad y navegación móvil
- [ ] Descargar los patchers `.maxpat` de cada capítulo
- [ ] Incorporar la comprobación del build a CI (pendiente de permisos para subir workflows)

## Créditos, atribución y licencia

Los 63 tutoriales originales son de **Cycling '74** y están publicados bajo licencia
**[Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)**
(ver el [aviso de licencia de su documentación](https://docs.cycling74.com/learn/license/)):

- **Obra original:** [MSP Tutorials](https://docs.cycling74.com/learn/series/msp-tutorials/) — **© 2024 Cycling '74**
- **Este repositorio:** traducción al español (material adaptado) de esos artículos, publicada bajo **la misma licencia CC BY 4.0**
- **Modificación:** se traduce el texto; los nombres de objetos y la sintaxis de Max se mantienen sin traducir, y cada capítulo enlaza su artículo original (`originalUrl`)
- **Figuras:** las imágenes de `public/images/` provienen de los tutoriales originales (también CC BY 4.0)
- **Patchers `.maxpat`:** no se redistribuyen; cada capítulo enlaza al recurso oficial de Cycling '74
- **Sin garantías:** el material se ofrece «tal cual» (CC BY 4.0, §5)

CC BY 4.0 **permite el uso comercial**: este proyecto no agrega restricciones, solo la obligación de
mantener la atribución. Max, MSP y Max/MSP son marcas de Cycling '74 y **no** están cubiertas por la
licencia.

El aviso completo (atribución, privacidad, marcas, correcciones y retiro de contenido) está en
[`AVISO-LEGAL.md`](./AVISO-LEGAL.md) y publicado en el sitio:
<https://fedecruz1981.github.io/msp-tutorials-es/aviso-legal/>.

## Sitio publicado

- **Producción:** https://fedecruz1981.github.io/msp-tutorials-es/
- **Rama servida:** `gh-pages` (se construye desde `dist/` con `npm run build` —que encadena `astro build` y `scripts/rebase-dist.mjs`— y se publica copiando `dist/` en esa rama).
- `main` contiene el sitio fuente; `npm run build` compila y ejecuta `scripts/rebase-dist.mjs`, que antepone el base path a las rutas relativas en el HTML generado.
