import { Router } from "./router.js"

const router = new Router() 

router.add('/',"/pages/index.html")
router.add('/exploration',"/pages/exploration.html")
router.add('/universe',"/pages/universe.html")

router.handle()

//ativo a função responsavel pela troca das paginas nas setas tb'
window.onpopstate = () => router.handle ()
window.route() = () => router.route()


