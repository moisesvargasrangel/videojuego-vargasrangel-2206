const canvas = document.getElementById("escenario")
const ctx = canvas.getContext("2d")

//PERSONAJE PRINCIPAL "MOY"
let personajeMoy = new Image()
personajeMoy.src = "../images/personaje.png"

//VIILLANO 1 "PERRO 1"
let personajeElvis = new Image()
personajeElvis.src = "../images/enemigo-1.png";

//VILLANO 2 "PERRO 2"
let personajeBella = new Image()
personajeBella.scr = "../images/enemigo-2.png";

//CHORRITO DE AGUA
const aguaImagen = new Image()
aguaImagen.src = "../images/agua.png"



const moy = new Moy(10, 300, ctx,personajeMoy)


const enemigos = []
const agua = []


let idFrame;

function empezarJuego(){
    const buttonStart = document.getElementById("start")
    
    buttonStart.classList.add("noShow")
    /*buttonStart.style.display = "none"    ESTA ES OTRA OPCION*/
    canvas.classList.remove("noShow")

    configurarAmbiente()

    actualizarEscenario()

    setInterval(() => {
        crearEnemigos()
    }, 3000)
}



function actualizarEscenario(){
    console.log("Actualiza");
    ctx.clearRect(0,0,800,800)
    moy.dibujarse()
    
    crearEnemigos()



    enemigos.forEach((enemigo, index) => { 
        enemigo.x -= 2
        enemigo.dibujarse()
        if(enemigo.x === moy.x + 50) {
            moy.recibirDano(50)
            enemigos.splice(index, 1)
        }
        
    })

    agua.forEach((agua) => {
        agua.dibujarse()

    })

    mostrarDatos(moy.vida, moy.x, moy.y)
    idFrame = requestAnimationFrame(actualizarEscenario)

    if(!moy.estaVivo()){
        cancelAnimationFrame(idFrame)

    }


}

function mostrarDatos(vida){
    ctx.font = "30px Balsamiq Sans"
    ctx.fillText(vida, 600, 40)
}

function crearEnemigos(){
    const aleatorio = Math.floor(Math.random()* 200)
    const numeros = [1, 32, 5, 38, 29]
    if(numeros.includes(aleatorio)) {
        console.log("Agrega un enemigo")
        let tipoEnemigo = personajeElvis
        if (aleatorio % 2 === 0) {
            tipoEnemigo = personajeBella
        }
        const enemigo = new Enemigo(800, 300, ctx, tipoEnemigo)
        enemigos.push(enemigo)
    }
}

function configurarAmbiente() {
document.addEventListener("keydown", (event) => {
    switch(event.key){
    case "ArrowLeft":
        console.log("Mover a la izquiera")
        moy.moverAtras()
        break;
    case "ArrowRight":
        console.log("Mover a la derecha")
        moy.moverAlFrente()
        break;

    case " ":
        const nuevaAgua = moy.disparar(moy.x+70, moy.y+20, aguaImagen)
        agua.push(nuevaAgua)
        break;
    }
}) 
}