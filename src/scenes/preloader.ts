import Phaser from 'phaser'

export default class preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
    {

    }

    create()
    {
        this.scene.start("game")
    }
}