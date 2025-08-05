# Supabase Keep Alive

Este proyecto ejecuta un GitHub Action que hace `ping` a URLs públicas de Supabase Storage cada 48 horas, evitando que los proyectos se pausen por inactividad.

## 🔧 ¿Cómo funciona?

Utiliza GitHub Actions para enviar un GET a una imagen pública de cada proyecto Supabase configurado.

## ⚙️ Configuración

1. Forkeá este repo o creá uno nuevo con la misma estructura.
2. Agregá los secretos en GitHub:

-   `SUPABASE_IMAGE_URL_1` → URL completa de una imagen en el bucket público del Proyecto 1
-   `SUPABASE_IMAGE_URL_2` → URL completa del Proyecto 2

3. ¡Listo! El workflow se ejecutará automáticamente cada 48 horas.

---
