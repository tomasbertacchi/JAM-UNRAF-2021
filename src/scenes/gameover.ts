import Phaser, { Game, Scene } from 'phaser'

export default class gameover    extends Phaser.Scene{


    public textotutorial!: any
    public volver!: any

    public texto!: any
    constructor(scene: Scene){
        super("gameover");
    }

    create(){
        this.textotutorial = this.add.image(1920/2 -500, 1080/2 -100, "ganador1")

        this.volver = this.add.image(1920/2-600, 1080/2 +300, "atras")
        .setInteractive() 
        .on("pointerdown", () => {this.scene.start("menu");this.scene.stop("gameover")})
    
    }
}