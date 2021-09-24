var barco; var texto_puntuacion;
import Phaser from 'phaser'
export default class nivel1 extends Phaser.Scene{
    constructor(){ 
        super("nivel1");
    }
    preload(){
        this.load.image("bote", "/images/bote.png");
        this.load.tilemapTiledJSON("nivel1", "/assets/nivel1.json");
        this.load.image("tileset", "/assets/tileset.png");
    }

    create(){
        
        var rio = this.make.tilemap({ key: "nivel1"})
        var tileset = rio.addTilesetImage("tileset", "tileset")
        var layer = rio.createLayer("terreno", tileset , 0,0)

        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //var tierra = rio.createStaticLayer("terreno", tileset, 0,0)
        layer.setCollisionByProperty({borde: true})
        console.log("carga background")
        
        //barco
        barco = this.physics.add.sprite(200, 500,"bote").setAngle(90);

        this.physics.add.collider(barco, layer);

        const tuerca = this.add.image(1850, 50, "tuerca").setScale(0.15)
        .setInteractive()
        .on('pointerdown', () => this.scene.run("menu_ingame"), this.physics.pause())
        

        //texto_tiempo = this.add.text(1300,30, "Tiempo restante: ",{fontFamily: "Courier_New",fontSize: 48})
        //tiempo = this.add.text(1650,30, "0",{fontFamily: "Courier_New",fontSize: 48})

        texto_puntuacion = this.add.text(800,30, "Puntuacion: ",{fontFamily: "Courier_New", fontSize: 48})
        const puntuacion = this.add.text(1050,30, "0",{fontFamily: "Courier_New", fontSize: 48})

        //texto_tiempo = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        const timeText = this.add.text(1300, 30, 'Tiempo restante: ', { fontFamily: 'Courier_New',fontSize: 48});
    }
    
    // onSecond(){
    //     //timeText.setText('Tiempo restante: ' + initialTime);
    //     this.initialTime = this.initialTime - 1;
    //     if (this.initialTime === -1){
    //         this.scene.start('Gameover');
    //     }
    // }

    update(){
        if (this.D.isDown){
            barco.setVelocityX(500);
            console.log("se mueve")
        }
    }
}