import Phaser, { Game, Scene } from 'phaser'

export default class gameover    extends Phaser.Scene{


    public ganador1: any
    public volver!: any

    public texto!: any
    constructor(scene: Scene){
        super("gameover");
    }

    create(){
        this.ganador1 = this.add.image(0,0, "ganador1").setOrigin(0,0)
        this.volver = this.add.image(1920/2-600, 1080/2 +300, "atras")
        .setInteractive() 
        .on("pointerdown", () => {/*this.scene.start("menu");this.scene.stop("gameover")*/window.location.reload(); })
    
    }
}