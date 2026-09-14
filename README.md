# Evaluación Diagnóstica de Física - Plataforma de Admisión Universitaria

Este repositorio contiene el código fuente completo de una **Plataforma Web Profesional Kiosk** diseñada para administrar evaluaciones diagnósticas y simuladores de admisión universitaria en la asignatura de **Física**.

El proyecto está optimizado para ser alojado directamente en **GitHub Pages**.

---

## 📁 Estructura del Repositorio

El proyecto cumple estrictamente con la estructura modular de 4 archivos principal:

```text
.
├── index.html   # Estructura semántica, modales de inicio y reporte de resultados.
├── index.css    # Sistema de diseño con variables CSS, tipografía Inter, responsive grid y kiosk styling.
├── index.js     # Lógica del examen, autoguardado (localStorage), temporizador, modo seguro Kiosk y banco de 30 preguntas.
└── README.md    # Documentación técnica del proyecto e instrucciones de despliegue.
```

---

## 🎯 Temario Cubierto (30 Preguntas)

El examen incluye 30 preguntas de opción múltiple estructuradas en 10 bloques temáticos clave para el acceso a la educación superior:

1. **Unidades de medida en el SI y conversiones** (Preguntas 1 - 3)
2. **Movimiento y trayectoria** (Preguntas 4 - 6)
3. **Movimiento Rectilíneo Uniforme - MRU** (Preguntas 7 - 9)
4. **Movimiento Rectilíneo Uniformemente Variado - MRUV** (Preguntas 10 - 12)
5. **Movimiento Circular Uniforme - MCU** (Preguntas 13 - 15)
6. **Caída Libre** (Preguntas 16 - 18)
7. **Movimiento Parabólico** (Preguntas 19 - 21)
8. **Fuerzas y Dinámica** (Preguntas 22 - 24)
9. **Leyes de Newton** (Preguntas 25 - 27)
10. **Trabajo, Potencia y Energía** (Preguntas 28 - 30)

---

## 🔒 Características del Modo Seguro / Kiosk

- **Pantalla Completa Obligatoria:** La prueba solicita la activación del modo pantalla completa mediante la API `requestFullscreen()` al comenzar e impide salir durante la sesión.
- **Protección Anticopia y Anticaptura:** 
  - Bloqueo de selección de texto (`user-select: none`).
  - Deshabilitación del menú contextual de clic derecho (`contextmenu`).
  - Bloqueo de combinaciones de teclas de captura e inspección (`PrintScreen`, `F12`, `Ctrl+C`, `Ctrl+U`, `Ctrl+Shift+I`).
- **Autoguardado y Persistencia en `localStorage`:** Si el estudiante recarga la página accidentalmente o pierde conexión momentánea, la prueba reanuda exactamente en la misma pregunta con el tiempo restante correspondiente.
- **Retroalimentación Formativa Final:** Al terminar la prueba o vencer el temporizador global (45 minutos totales = 1 min 30 s por pregunta), el sistema muestra la nota final y la justificación pedagógica paso a paso de cada pregunta.

---

## 🚀 Despliegue en GitHub Pages

1. Crea un nuevo repositorio público en GitHub (ejemplo: `evaluacion-fisica-admision`).
2. Sube los 4 archivos (`index.html`, `index.css`, `index.js`, `README.md`) al repositorio.
3. Dirígete a **Settings > Pages** en GitHub.
4. En **Source**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save**. En un par de minutos, GitHub generará tu enlace oficial de acceso.
