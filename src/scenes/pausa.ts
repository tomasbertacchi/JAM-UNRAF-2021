import Phaser, { Game, Scene } from 'phaser'

export default class pausa extends Phaser.Scene{

    public texto!: any
    constructor(scene: Scene){
        super("pausa");
    }


    create(){

        this.texto = this.add.text(1920/2-200, 1080/2 -100, "PAUSA",{fontFamily: "Arial", fontSize: 128})
        .setInteractive()
        .on("pointerdown", () => this.scene.resume("game"))
        .on("pointerdown", ()=> this.scene.stop("pausa"))
        Phaser.Display.Align.CENTER
    }
}

