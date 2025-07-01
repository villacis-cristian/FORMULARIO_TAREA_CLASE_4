PROYECTO FORMULARIO ANGULAR
============================

REQUISITOS:
- Node.js v18+
- Angular CLI v17+
- npm v9+

INSTALACIÓN:
1. Clonar el repositorio:
   git clone [URL_DEL_REPOSITORIO]
   cd nombre-del-proyecto

2. Instalar dependencias:
   npm install

EJECUCIÓN:
1. Iniciar servidor de desarrollo:
   ng serve

2. Abrir en navegador:
   http://localhost:4200/formulario

ESTRUCTURA PRINCIPAL:
/src/app/components/formulario/
  - formulario.component.ts (lógica del formulario)
  - formulario.component.html (vista)
  - formulario.component.css (estilos)

CONFIGURACIÓN IMPORTANTE:
- Las rutas están configuradas en /src/app/app.routes.ts
- El componente principal es standalone (no usa NgModule)

COMANDOS ÚTILES:
- ng build: Compilar para producción
- ng test: Ejecutar pruebas
- ng serve --port 4201: Usar puerto alternativo

NOTAS:
- El formulario incluye validación de campos
- Diseño responsive con Bootstrap
- Usa Reactive Forms para manejo de datos

PROBLEMAS COMUNES:
- Si falla, ejecutar:
  npm install
  ng serve --force

CONTACTO:
[Tu Nombre] - [tu@email.com] - [Fecha]