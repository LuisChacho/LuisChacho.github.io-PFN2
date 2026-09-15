# Evaluación Diagnóstica - Razonamiento Numérico (Cariamanga)

Plataforma de evaluación interactiva, estandarizada y segura diseñada para Bachillerato General Unificado (BGU) y nivel preuniversitario.

## 🚀 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube estos 4 archivos a la rama principal (`main` o `master`):
   - `index.html`
   - `index.css`
   - `index.js`
   - `README.md`
3. Ve a **Settings > Pages** en tu repositorio de GitHub.
4. En **Source**, selecciona la rama donde subiste los archivos y guarda.
5. GitHub Pages te entregará la URL pública del examen.

## 📋 Características Principales

- **40 Reactivos Estandarizados**: Cobertura de 11 temas de razonamiento numérico.
- **Renderizado Matemático KaTeX**: Expresiones formateadas dinámicamente con `$ ... $` y `$$ ... $$`.
- **Modo Kiosko y Anti-Fraude**:
  - Exige pantalla completa obligatoria.
  - Bloqueo de menú contextual (clic derecho) y combinaciones de teclas de copia/inspección (`F12`, `Ctrl+C`, `Ctrl+V`, `PrintScreen`, etc.).
  - Detección automática de fuga de foco (`blur` / `visibilitychange`) con contador de infracciones.
- **Persistencia en LocalStorage**: Mantiene temporizador, avance, respuestas y contador de infracciones ante recargas o cierres accidentales.
- **Reporte Final Detallado**: Desglose de aciertos, porcentaje, infracciones y revisión reactivo por reactivo.