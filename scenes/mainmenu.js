import Phaser from 'phaser'

export default class mainmenu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    preload(){
        this.load.image("boton_jugar", "images/boton_jugar.png");
        this.load.image("main_menu", "images/main_menu.png")
        this.load.image("boton_creditos", "images/boton_creditos.png");
        this.load.image("boton_informacion", "images/boton_informacion.png");
        this.load.image("boton_tutorial", "images/boton_tutorial.png");
        


    }
    
    create(){
        //background
        this.add.image(0,0, "main_menu").setOrigin(0,0)

        //botones
        const boton_jugar = this.add.image(1920 / 2, 400, "boton_jugar")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("nivel1"))

        const boton_tutorial = this.add.image(1920 / 2, 550, "boton_tutorial")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("tutorial"))

        const boton_informacion = this.add.image(1920 / 2, 700, "boton_informacion")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("informacion"))

        const boton_creditos = this.add.image(1920 / 2, 850, "boton_creditos")
        .setInteractive()
        .on('pointerdown', () => this.scene.start("creditos"))


    }
    
    update(){



    }

}