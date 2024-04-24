export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }


  //! Função que desativa o default da página e executa a função que troca o html
  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  //! Função que troca as rotas
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] 

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}
