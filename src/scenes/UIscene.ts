import Phaser, { Scene } from 'phaser'
export default class UIscene extends Phaser.Scene
{
	public textopuntuacion1!: Phaser.GameObjects.Text
	public numeropuntuacion1!: Phaser.GameObjects.Text
	public textopuntuacion2!: Phaser.GameObjects.Text
	public numeropuntuacion2!: Phaser.GameObjects.Text
	private tuerca!: Phaser.GameObjects.Image
	private player1!: Phaser.GameObjects.Text
	private escenaJuego!: Phaser.Scene

	constructor(scene: Scene)
	{
		super('ui')
	}

    create(){
		this.tuerca = this.add.image(1850, 100, "tuerca")
		.setInteractive()
		.on('pointerdown', () =>{ this.scene.pause("game"); this.scene.run("pausa")});
	
		var escenaJuego = this.scene.get('game');
		this.textopuntuacion1 = this.add.text(100, 100, "Puntacion P1: ", {fontFamily: "Arial", fontSize: 48})
		this.textopuntuacion2 = this.add.text(1200, 100, "Puntacion P2: ", {fontFamily: "Arial", fontSize: 48})
		this.numeropuntuacion1 = this.add.text(500, 100, "0", {fontFamily: "Arial", fontSize: 48})
		this.numeropuntuacion2 = this.add.text(1700, 100, "0", {fontFamily: "Arial", fontSize: 48})
		
		//this.registry.events.on("changedata", this.updatePuntos, this)
		
		this.registry.events.on('changedata', (parent, key, data) => { 
			if (key == 'puntuacion1'){
				this.numeropuntuacion1.setText(data)
            }
            if (key == "puntuacion2"){
				this.numeropuntuacion2.setText(data)
            }
        });
		
		this.registry.events.on('changedata', (parent, key, data) => { 
			if (key == 'vidas1'){
				this.tuerca.destroy()
				this.player1 = this.add.text(1920/2-200, 1080/2 -100, "GANO PLAYER 2")
				.setInteractive()
				.on("pointerdown", ()=> escenaJuego.scene.restart());
			}
			if (key == "vidas2"){
				this.tuerca.destroy()
				this.add.text(1920/2-200, 1080/2 -100, "GANO PLAYER 1")
				.setInteractive()
				.on("pointerdown", ()=> escenaJuego.scene.restart());
			}
		});
    }

	updatePuntos(parent, key, data){

		this.numeropuntuacion1.setText("Puntuacion P1: " + data)
		this.numeropuntuacion2.setText("Puntuacion P2: " + data)
	}
}