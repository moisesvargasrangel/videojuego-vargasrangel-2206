
class Personaje{
    constructor(x,y,ctx, img){
        this.x = x
        this.y = y
        this.vida = 100
        this.velocidad = 1
        this.ctx = ctx
        this.img = img;
        this.dibujarse()

    }

    recibirDano(dano){
        this.vida -= dano
    }



/*----------MOVIMIENTOS */ 
    moverAlFrente(){
        this.x += 4 
    }

    moverAtras(){
        this.x -= 4 
    }

    moverArriba(){
        this.y -= 45 
    }


    moverAbajo(){
        this.y += 45 
    }

    disparar(x,y,img){
        const agua = new chorroAgua(x,y,img,ctx)
        return agua
    }

    estaVivo(){
        if(this.vida > 0){
            return true
        }
        return false
    }

    dibujarse(){
        this.ctx.drawImage(this.img, this.x, this.y, 90, 90)
    }
}