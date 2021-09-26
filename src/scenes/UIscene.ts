import Phaser, { Scene } from 'phaser'
export default class UIscene extends Phaser.Scene
{
	public textopuntuacion1: any
	public numeropuntuacion1: any
	public textopuntuacion2: any
	public numeropuntuacion2: any

	constructor(scene: Scene)
	{
		super('ui')
	}

    create(){
		this.add.image(1850, 100, "tuerca")
		.setInteractive()
		.on('pointerdown', () =>{ this.scene.pause("game"); this.scene.run("pausa")});
		
		this.textopuntuacion1 = this.add.text(100, 100, "Puntacion P1: ", {fontFamily: "Arial", fontSize: 48})
		this.textopuntuacion2 = this.add.text(1200, 100, "Puntacion P2: ", {fontFamily: "Arial", fontSize: 48})
		this.numeropuntuacion2 = this.add.text(1700, 100, "0", {fontFamily: "Arial", fontSize: 48})
		this.numeropuntuacion2 = this.add.text(500, 100, "0", {fontFamily: "Arial", fontSize: 48})
	
		//this.registry.events.on("changedata", this.updatePuntos, this)

		this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'puntuacion1'){
                this.numeropuntuacion1.setText(data)
            }
            if (key === "puntuacion2"){
                this.numeropuntuacion2.setText(data)
            }
        });
    }

	updatePuntos(parent, key, data){

		this.numeropuntuacion1.setText("Puntuacion P1: " + data)
		this.numeropuntuacion2.setText("Puntuacion P2: " + data)
	}
}