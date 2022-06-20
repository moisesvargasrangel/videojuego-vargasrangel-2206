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


const moy = new Moy(10, 300, ctx,personajeMoy)


const enemigos = []


function empezarJuego(){
    const buttonStart = document.getElementById("start")
    
    buttonStart.classList.add("noShow")
    /*buttonStart.style.display = "none"    ESTA ES OTRA OPCION*/
    canvas.classList.remove("noShow")

    actualizarEscenario()

    setInterval(() => {
        crearEnemigos()
    }, 500)
}



function actualizarEscenario(){
    console.log("Actualiza");
    ctx.clearRect(0,0,800,800)




    moy.dibujarse()
    
    crearEnemigos()



    enemigos.forEach((enemigo) =>{
        enemigo.x -= 2
        enemigo.dibujarse()
        if(enemigo.x === moy.x + 50) {
            alert("Perdiste nene")
        }
        
    })
    mostrarDatos(moy.vida, moy.x, moy.y)
    requestAnimationFrame(actualizarEscenario)
}

function mostrarDatos(vida){
    ctx.font = "30px Balsamiq Sans"
    ctx.fillText(vida, 600, 40)
}

function crearEnemigos(){
    const aleatorio = Math.floor(Math.random()*200)
    const numeros = [1, 32, 55, 5, 38, 60, 70]
    if(numeros.includes(aleatorio)) {
        console.log("Agrega un enemigo")
        let tipoEnemigo = personajeElvis
        if(aleatorio % 2 === 0){
            tipoEnemigo = personajeBella
        }
        const enemigo = new Enemigo(800,300, ctx, tipoEnemigo)
        enemigos.push(enemigo)
    }
    


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