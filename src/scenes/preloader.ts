import Phaser from 'phaser'

export default class preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
    {
        this.load.image("plataforma", "assets/escenario/plataforma.png")
        this.load.spritesheet("personaje", "assets/personaje/personaje.png",{ frameWidth: 50, frameHeight: 37})
        this.load.spritesheet("personaje2", "assets/personaje/personaje.png",{ frameWidth: 50, frameHeight: 37, endFrame:71  })
        this.load.spritesheet("personaje3", "assets/personaje/personaje3.png", { frameWidth: 50, frameHeight: 37, endFrame:71 })
        this.load.image("tuerca", "images/tuerca.png")
    }

    create()
    {
        this.scene.start("game")
    }
}