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
personajeBella.scr = "../images/enemigo-2.png"


const moy = new Moy(10, 40, ctx,personajeMoy)

const enemigos = []


function empezarJuego(){
    const buttonStart = document.getElementById("start")
    
    buttonStart.classList.add("noShow")
    /*buttonStart.style.display = "none"    ESTA ES OTRA OPCION*/
    canvas.classList.remove("noShow")

    actualizarEscenario()

    setInterval(() => {
        crearEnemigos()
    }, 3000)
}



function actualizarEscenario(){
    console.log("Actualiza");
    ctx.clearRect(0,0,800,800)


    crearEnemigos()


    moy.dibujarse()
    const enemigo = new Enemigo(300,300, ctx, personajeElvis)
    mostrarDatos(moy.vida, moy.x, moy.y)
    requestAnimationFrame(actualizarEscenario)
}

function mostrarDatos(vida){
    ctx.font = "30px Balsamiq Sans"
    ctx.fillText(vida, 600, 40)
}

function crearEnemigos(){
    const aleatorio = Math.floor(Math.random()*200)
    const numeros = [4, 40, 34, 56, 89]
    if(numeros.includes(aleatorio))
    console.log("Agrega un enemigo")

}





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
} 
})