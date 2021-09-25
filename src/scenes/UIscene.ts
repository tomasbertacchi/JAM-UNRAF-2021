import Phaser, { Scene } from 'phaser'
export default class UIscene extends Phaser.Scene
{
	constructor(scene: Scene)
	{
		super('ui')
	}

    create(){
		this.add.image(1850, 100, "tuerca")
		.setInteractive()
		.on('pointerdown', () =>{ this.scene.pause("game"); this.scene.run("pausa")});
		
    }

}