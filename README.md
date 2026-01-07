
# Alemty.eth v1.2

Correcciones:
- **Banner y Avatar**: Integrados localmente (`assets/og/banner.jpg`, `assets/og/avatar.png`) para evitar bloqueos por hotlink/CORS. Reemplaza esos archivos con tus imágenes originales si lo deseas.
- **POAPs**: Restaurados desde tus datos y visibles de nuevo en la barra inferior.
- **Acreditaciones**: Nueva pestaña **Nube** (Cloud/Azure/Endpoints). Heurística mejorada y nuevo ícono de nubecita.
- **Analítica visible**: Botón 📊 en la topbar abre panel con conteo y últimos eventos (localStorage). Mini mapa transparente listo para datos.

## Endpoint de analítica (opcional)
Define `window.ANALYTICS_ENDPOINT` en `index.html` para enviar eventos (clics en tarjetas/POAPs/acreditaciones) a tu backend. El mini mapa consume `assets/data/analytics.json` con agregados `{lat, lon, count}`.

## Ejecución
- Local: `python -m http.server 8000` → `http://localhost:8000`
- Deploy: Vercel/Netlify/Cloudflare Pages/GitHub Pages.
