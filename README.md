# Plataforma de Evaluación Controlada - Física General

Esta plataforma web es un sistema profesional de evaluación interactiva diseñado para ser ejecutado directamente en **GitHub Pages**.

## 🚀 Características Principales

- **Modo Kiosko y Pantalla Completa:** Forzado de interfaz segura mediante la API de Fullscreen al iniciar la prueba.
- **Monitoreo de Seguridad:** Control de pérdida de foco, cambio de pestañas/ventanas y desactivación del clic derecho e inspección de código.
- **Banco de 30 Preguntas:** Cobertura de temas de cinemática, dinámica, energía, termodinámica, fluidos y electricidad.
- **Persistencia de Datos (`localStorage`):** Guardado automático del estado de las respuestas y el tiempo restante ante cualquier cierre accidental del navegador.
- **Mapa Interactivo de Preguntas:** Visualización inmediata del estado de cada reactivo (Respondida, Pendiente, Actual).
- **Reporte Posterior al Envío:** Calificación automatizada, porcentaje de aciertos, registro de violaciones de seguridad y retroalimentación interactiva por reactivo.

## 📁 Estructura del Repositorio

```text
├── index.html   # Estructura semántica principal de la interfaz
├── index.css    # Definición de variables CSS, diseño adaptativo y estilos
├── index.js     # Lógica del examen, temporizador, mapa y reglas de seguridad
└── README.md    # Documentación técnica de la plataforma