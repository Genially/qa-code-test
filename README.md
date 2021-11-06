## QA Code test. 
## Requisitos minimos

- NodeJs: https://nodejs.org/es/download/ (Versión LTS para el sistema operativo deseado)
- Visual Studio Code: https://code.visualstudio.com/ (Versión Stable)

## Instalación

### NodeJS

Siguiente, siguiente y en el cmd comprobar que se ha instalado poniendo "node" o "node -v".
- Con node ya se instala npm para instalar cypress.

### Visual Studio Code

Todo siguiente en el instalador.

### Cypress

- En la carpeta del proyecto en el cmd ponemos este comando: **npm install cypress --save-dev**
- Se instala cypress y para ejecutar el entorno: **.\node_modules\.bin\cypress open**

- Los test se guardan en {C:\}{NOMBRE_CARPETA}\cypress\integration
- Para crear nuestro primer script se crea un fichero NOMBRE.js y empezamos con el codigo.

#### Configuración package.json

{
  "browser": "chrome", 
  "devDependencies": {
    "cypress": "^8.7.0"
  },
  "scripts": {
    "cypress:open": "cypress open"
  }
}