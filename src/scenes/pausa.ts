import Phaser, { Scene } from 'phaser'

export default class pausa extends Phaser.Scene{

    public texto!: any
    constructor(scene: Scene){
        super("pausa");
    }


    create(){

        this.texto = this.add.text(1920/2, 1080/2, "PAUSA",{fontFamily: "Arial", fontSize: 128})
        .setInteractive()
        .on("pointerdown", () => this.scene.resume("game"))
        .on("pointerdown", ()=> this.scene.stop("pausa"))
    }
}

