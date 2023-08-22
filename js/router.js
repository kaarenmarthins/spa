//modulando usando a orientação a objetos no js
export class Router {


  //modelando os obejtos do projeto.
  //adiciono tudo dentro do add, passando os parametros que serao utilizados.
  //dentro eu referencio usando o this, onde a routes vai usar a propriedade que é routesName e vai ter o valor que é a page.

  add(routeName, link){
    this.routes[routeName] = page
  }

  //usando a classe não preciso colocar a palavra function
  route(event){
    event = event || window.event
    event.preventDefault()
  
  
    window.history.pushState({}, "", event.target.href)
    
    //dentro da classe, todas as vezes que eu for usar uma função ou propriedade, preciso usar a palavra this na frente. é a referente que deve ser procurada.
    this.handle ()
  }

  handle () {

    //desestruturação. dentro do location ja existe um pathname, então ja que ja vou usar, posso desestruturar que ele entende para colocar no final e usar como variavel tb.
    const { pathname } = window.location 
    const route = this.routes [pathname] || this.routes[404]
  
  
    //para pegar uma pagina e jogar dentro da variavel
    //busca a rota, e quando concluir, executa a função
  
    //busca a rota
    fetch(route) 

    //depois encontrou a data
    .then(data =>data.text()) 

    //depois apresentou a pagina
    .then(html =>{
      document.querySelector('#app').innerHTML = html
    } ) 
  
  }

}

