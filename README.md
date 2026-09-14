# Plataforma de Evaluación de Máxima Seguridad - Física

Plataforma de evaluación continua de Física alojada en **GitHub Pages**, configurada con protocolos estrictos de prevención de fraude académico.

## 🛡️ Protocolos de Seguridad Implementados

1. **Bloqueo de Tecla ESC y Salida de Pantalla Completa:** Intercepción activa de la tecla `Escape` y reactivación obligatoria del modo kiosko.
2. **Protección Anti-Capturas y Copiado:**
   - Desactivación de `PrintScreen` con borrado del portapapeles.
   - Activación de pantalla de bloqueo negra (`blackout-screen`) ante intentos de captura o combinaciones como `Win + Shift + S` / `Ctrl + Shift + S`.
   - Reglas `@media print` para invalidar intentos de guardado como PDF o impresión.
3. **Anulación del Botón Atrás del Navegador:** Control del historial de navegación mediante `history.pushState` para impedir que el estudiante retroceda o abandone la sesión activa.
4. **Desactivación de Cls y Selección:** `user-select: none` aplicado a toda la interfaz y anulación completa del menú contextual (clic derecho).

## 📊 Contenido Pedagógico
- Incluye 30 reactivos con énfasis en cinematica vectorial, incorporando ejercicios de MRU y MRUV con componentes en coordenadas $(\vec{i}, \vec{j})$.