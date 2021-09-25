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
        //animaciones

        //personaje 1
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 8, end: 13 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'ataque1',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 49, end: 52 }),
            repeat: 0,
            frameRate: 10
        });

        //personaje 2
        this.anims.create({
            key: 'ataque2',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 49, end: 52 }),
            repeat: 0,
            frameRate: 10,
        });

        this.anims.create({
            key: 'muerte1',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 65, end: 68 }),
            repeat: 0,
            frameRate: 10,
        });

        this.anims.create({
            key: 'muerte2',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 65, end: 68 }),
            repeat: 0,
            frameRate: 10,
        });

        this.anims.create({
            key: 'escudo',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 33, end: 34 }),
            repeat: 0,
            frameRate: 10,
        });
    
        this.scene.start("menu")
    }
}