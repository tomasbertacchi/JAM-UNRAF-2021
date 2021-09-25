import Phaser from 'phaser'

export default class tutorial extends Phaser.Scene{

    public textotutorial!: any
    public volver!: any
    constructor(){
        super("tutorial");
    }

    preload(){
        
    }
    
    create(){
        this.textotutorial = this.add.text(1920/2 -500, 1080/2 -100, "texto del tutorial",{fontFamily: "Arial", fontSize: 128})

        this.volver = this.add.text(1920/2-600, 1080/2 +300, "Volver",{fontFamily: "Arial", fontSize: 128})
        .setInteractive() 
        .on("pointerdown", () => this.scene.start("menu"))
    
    }
    
}