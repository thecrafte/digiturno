# Digiturno · Demo

Prototipo del sistema de turnos de la Clínica Boyacá. Es un solo `index.html` que funciona sin servidor ni base de datos:

- **Tótem**: el paciente elige el servicio y si es general o preferencial, y recibe su ticket (se puede imprimir en 80 mm).
- **Recepción**: cada ventanilla llama al siguiente turno (los preferenciales primero), lo vuelve a llamar, inicia y finaliza la atención, lo transfiere a otra ventanilla o lo marca como no presentado.
- **Pantalla TV**: muestra el turno llamado y la ventanilla, con campana y voz ("Turno U R G, 0 0 5…"). Se puede filtrar por área y poner en pantalla completa.
- **Todo junto**: las tres vistas lado a lado, para presentar.

Los datos se guardan en el `localStorage` del navegador y se sincronizan entre pestañas. Por ejemplo, la Pantalla TV en un monitor y la Recepción en otro. Cada día la numeración arranca de cero.

## Publicar

**GitHub Pages**
1. Sube `index.html`, `styles.css`, `app.js` y `logo.png` a la raíz de un repositorio.
2. Ve a *Settings → Pages → Source: Deploy from a branch → main / (root)*.
3. La URL queda como `https://<usuario>.github.io/<repo>/`.

**Vercel**
1. *Add New → Project* e importa el repositorio.
2. Framework preset: **Other**. No necesita comando de build.
3. Deploy.

> Esta demo no se conecta al sistema real (PHP + MySQL). Es solo para mostrar el flujo.
