import Phaser from 'phaser'

export default class mainmenu extends Phaser.Scene{
    
    public jugar!: any
    public tutorial!: any
    private musicamenu!: Phaser.Sound.BaseSound
    constructor(){
        super("menu");
    }


    create(){
        this.add.image(0,0,"menu").setOrigin(0,0)

        this.jugar = this.add.image(1920/2, 1080/2 , "jugar")
        .setInteractive() 
        .on("pointerdown", () => {this.scene.run("ui");this.scene.start("game");this.musicamenu.pause() })
        Phaser.Display.Align.CENTER

        this.tutorial = this.add.image(1920/2, 1080/2 +200, "tutorial")
        .setInteractive() 
        .on("pointerdown", () => {this.scene.start("tutorial"); this.musicamenu.pause()})
        Phaser.Display.Align.CENTER

        
        this.musicamenu = this.sound.add("musicamenu", {
            volume: 0.2,
            loop: true,
        })
        this.musicamenu.play()
    }
    

}