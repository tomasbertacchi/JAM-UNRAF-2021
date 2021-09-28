import Phaser from 'phaser'

export default class tutorial extends Phaser.Scene{

    public textotutorial!: any
    public volver!: any
    private musicamenu!: Phaser.Sound.BaseSound
    constructor(){
        super("tutorial");
    }

    preload(){
        
    }
    
    create(){
        this.textotutorial = this.add.text(1920/2 -500, 1080/2 -100, "texto del tutorial",{fontFamily: "Arial", fontSize: 128})

        this.volver = this.add.image(1920/2-600, 1080/2 +300, "atras")
        .setInteractive() 
        .on("pointerdown", () => {this.scene.start("menu"); this.musicamenu.pause()})
    

        
        this.musicamenu = this.sound.add("musicamenu", {
            volume: 0.2,
            loop: true,
        })

        this.musicamenu.play()
    }
    
}