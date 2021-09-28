import Phaser, { Game, Scene } from 'phaser'

export default class gameover    extends Phaser.Scene{


    public textotutorial!: any
    public volver!: any

    public texto!: any
    constructor(scene: Scene){
        super("gameover");
    }

    create(){
        this.textotutorial = this.add.text(1920/2 -500, 1080/2 -100, "GAME OVER",{fontFamily: "Arial", fontSize: 128})

        this.volver = this.add.text(1920/2-600, 1080/2 +300, "Volver",{fontFamily: "Arial", fontSize: 128})
        .setInteractive() 
        .on("pointerdown", () => {this.scene.start("menu");this.scene.stop("gameover")})
    
    }
}