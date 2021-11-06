/** casos.js created with Cypress
 *
 * Prueba tecnica Genially
 * @author Carlos López Morán
 * @version 1.0
 */


/**
 * let webInicio que se utiliza en varias ocasiones
 */ 
let webInicio = 'https://genial.ly/es/'

/**
 * Algo comun de todos los casos es que el navegador este en unas dimensiones y visite la web de Genially.
 */  
beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit(webInicio)
})

describe('Web Genially', () => {
    /**
     * Caso 1: En este caso se comprueba que los enlaces del nav sigue unas reglas de formato 
     * y de contiene los enlaces hacia a las zonas de la web deseados
     */  
    it('CASO 1: [INICIO] Se comprueba diseño del nav', () => {
        // Comprobar que existe los elementos y son clickeables
        cy.contains('Para quién').click()
        cy.contains('Empresas')
        cy.contains('Educación')
        cy.contains('Universidad')
        cy.contains('Diseño')
        cy.contains('Crear').click()
        cy.contains('Presentaciones')
        cy.contains('Infografías')
        cy.contains('Gamificación')
        cy.contains('Imagen interactiva')
        cy.contains('Vídeo presentación')
        cy.contains('Guía')
        cy.contains('Material formativo')
        cy.contains('Más')
        cy.contains('Primeros pasos')
        cy.contains('Tour de Genially')
        cy.contains('Crear').click()
        cy.contains('button', 'Acceder')
        cy.contains('button', 'Regístrate')
        cy.contains('ES')
    })

    /**
     * Caso 2: En este caso queremos comprobar que, al cambiar el idioma de la web, cambia el div 
     * que contiene la Política de Cookies.
     */ 
    it('CASO 2: [INICIO] Política de Cookies en distintos idiomas', () => {
        cy.contains('ES').click()
        cy.contains('English').click()
        cy.contains('Accept all cookies')
        cy.contains('EN').click()
        cy.contains('Français').click()
        cy.contains('Accepter tous les cookies')
        cy.contains('FR').click()
        cy.contains('Español').click()
        cy.contains('Aceptar todas las cookies')
    })

    /**
     * Caso 3: En este caso queremos comprobar que, al tener la web en distintos idiomas, el error 
     * 404 aparece correctamente.
     */ 
    it('CASO 3: [INICIO] Pagina 404 en distintos idiomas', () => {

        // Inicio Idioma Ingles
        cy.contains('ES').click()
        cy.contains('English').click()

        // Compruebo la url actual y con const le pongo el "valor" deseado y no se puede reasignar su valor.
        cy.url().then(url => {
            cy.log('URL actual : '+url)
            const modUrl = url + 'pruebaQA'
            cy.log('URL modificada : '+modUrl)
            cy.visit(modUrl)
        })

        // Compruebo que aparece el mensaje deseado.
        cy.contains('Whoops! This is not what you were looking for')
        // Comparo la url que ha visitado con la actual.
        cy.url().should('eq', 'https://genial.ly/404.html')
        // Fin Idioma Ingles

        // Cuando probamos en un idioma , volvemos a la pagina de inicio y probamos otro idioma.
        // Inicio Idioma Frances
        cy.visit(webInicio)
        cy.contains('ES').click()
        cy.contains('Français').click()

        cy.url().then(url => {
            cy.log('URL actual : '+url)
            const modUrl = url + '/pruebaQA'
            cy.log('URL modificada : '+modUrl)
            cy.visit(modUrl)
        })
        cy.contains('Oups ! Ce n’est pas ce que vous cherchiez')
        cy.url().should('eq', 'https://genial.ly/fr/404/')
        // Fin Idioma Frances

        // Inicio Idioma Español
        cy.visit(webInicio)
        cy.contains('ES').click()
        cy.contains('Español').click()
        cy.url().then(url => {
            cy.log('URL actual : '+url)
            const modUrl = url + '/pruebaQA'
            cy.log('URL modificada : '+modUrl)
            cy.visit(modUrl)
        })
        cy.contains('¡Oooops! Esto no es lo que buscabas')
        cy.url().should('eq', 'https://genial.ly/es/404/')
        // Fin Idioma Español
    })

    /**
     * Caso 4: En este caso queremos comprobar que al pulsar sobre los distintos botones del 
     * principio de la política de cookies se conserva diseños y hace la funcionalidad deseada.
     */ 
    it('CASO 4: [Política de Cookies] Botones de aceptar todas las cookies y ajustes para configurar o rechazar cookies.', () => {
      cy.contains('Ajustes para configurar o rechazar cookies').click()
      cy.contains('Centro de Preferencias de Privacidad (Por favor, comprueba las cookies permitidas)')
      // La X para quitar el desplegable tiene la id #close-pc-btn-handler
      cy.get('#close-pc-btn-handler').click()
      cy.contains('Aceptar todas las cookies').click()
      // Refrescamos la pagina , como si fuera un F5
      cy.reload()
      // Con el .not comprobamos que no existe ese div con esa ID en la web
      cy.get('div').not('[id="onetrust-policy"]')
    })

    /**
     * Caso 5: En este caso queremos comprobar que, al seleccionar un idioma, el enlace de 
     * políticas de cookies va a la página de cookies de su idioma.
     */ 
    it('CASO 5: [Política de Cookies] Enlaces en Política de cookies', () => {
        cy.contains('política de cookies').click()
        cy.contains('1. ¿Qué es una cookie?')
        cy.visit(webInicio)
        cy.contains('ES').click()
        cy.contains('English').click()
        cy.contains('política de cookies').click()
        cy.contains('1. What is a cookie?')
        cy.visit(webInicio)
        cy.contains('ES').click()
        cy.contains('Français').click()
        cy.contains('política de cookies').click()
        cy.contains('La présente politique d')
    })

})