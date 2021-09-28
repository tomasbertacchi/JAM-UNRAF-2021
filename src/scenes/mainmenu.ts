import Phaser from 'phaser'

export default class mainmenu extends Phaser.Scene{
    
    public jugar!: any
    public tutorial!: any
    constructor(){
        super("menu");
    }


    create(){
        this.add.image(0,0,"menu").setOrigin(0,0)

        this.jugar = this.add.image(1920/2, 1080/2 , "jugar")
        .setInteractive() 
        .on("pointerdown", () => {this.scene.run("ui");this.scene.start("game"); })
        Phaser.Display.Align.CENTER

        this.tutorial = this.add.image(1920/2, 1080/2 +200, "tutorial")
        .setInteractive() 
        .on("pointerdown", () => this.scene.start("tutorial"))
        Phaser.Display.Align.CENTER
        
    }
    

}