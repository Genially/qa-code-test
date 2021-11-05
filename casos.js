// casos.js created with Cypress
//
// Prueba tecnica Genially
// Carlos López Morán
//

beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://genial.ly/es')
})

describe('Web Genially', () => {
    it('CASO 1: [INICIO] Se comprueba diseño del nav', () => {
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

    it('CASO 3: [INICIO] Pagina 404 en distintos idiomas', () => {
        let webInicio = 'https://genial.ly/es/'

        cy.contains('ES').click()
        cy.contains('English').click()

        cy.url().then(url => {
            cy.log('URL actual : '+url)
            const modUrl = url + 'pruebaQA'
            cy.log('URL modificada : '+modUrl)
            cy.visit(modUrl)
        })

        cy.contains('Whoops! This is not what you were looking for')
        cy.url().should('eq', 'https://genial.ly/404.html')

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
    })

    it('CASO 4: [Política de Cookies] Botones de aceptar todas las cookies y ajustes para configurar o rechazar cookies.', () => {
      cy.contains('Ajustes para configurar o rechazar cookies').click()
      cy.contains('Centro de Preferencias de Privacidad (Por favor, comprueba las cookies permitidas)')
      cy.get('#close-pc-btn-handler').click()
      cy.contains('Aceptar todas las cookies').click()
      cy.reload()
      cy.get('div').not('[id="onetrust-policy"]')
    })

    it('CASO 5: [Política de Cookies] Enlaces en Política de cookies', () => {
        cy.contains('política de cookies').click()
        cy.contains('1. ¿Qué es una cookie?')
        cy.visit('https://genial.ly/es')
        cy.contains('ES').click()
        cy.contains('English').click()
        cy.contains('política de cookies').click()
        cy.contains('1. What is a cookie?')
        cy.visit('https://genial.ly/es')
        cy.contains('ES').click()
        cy.contains('Français').click()
        cy.contains('política de cookies').click()
        cy.contains('La présente politique d')
    })

})