import Phaser from 'phaser'

export default class mainmenu extends Phaser.Scene{
    
    public jugar!: any
    public tutorial!: any
    constructor(){
        super("menu");
    }


    create(){
        this.jugar = this.add.text(1920/2-100, 1080/2 -100, "Play",{fontFamily: "Arial", fontSize: 128})
        .setInteractive() 
        .on("pointerdown", () => {this.scene.start("game"); this.scene.run("ui")})
        Phaser.Display.Align.CENTER

        this.tutorial = this.add.text(1920/2-200, 1080/2 +200, "Tutorial",{fontFamily: "Arial", fontSize: 128})
        .setInteractive() 
        .on("pointerdown", () => this.scene.start("tutorial"))
        Phaser.Display.Align.CENTER
    }
    

}