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
        this.load.spritesheet("personajeparado", "assets/personaje/Fitz_parado.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajecamina", "assets/personaje/Fitz_camina.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajeataca", "assets/personaje/Fitz_ataca.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajedefiende", "assets/personaje/Fitz_Defensa.png", { frameWidth: 381, frameHeight: 587, endFrame:3 })
        this.load.spritesheet("personajemuere", "assets/personaje/Fitz_Muere.png", { frameWidth: 381, frameHeight: 587, /*endFrame:3*/ })
        this.load.image("tuerca", "images/tuerca.png")
    }

    create()
    {
        //animaciones

        //personaje 1
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('personajeparado', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('personajecamina', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'ataque1',
            frames: this.anims.generateFrameNumbers('personajeataca', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10
        });

        //personaje 2
        this.anims.create({
            key: 'ataque2',
            frames: this.anims.generateFrameNumbers('personajeataca', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10,
        });

        this.anims.create({
            key: 'muerte',
            frames: this.anims.generateFrameNumbers('personajemuere', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 5,
        });

        this.anims.create({
            key: 'escudo',
            frames: this.anims.generateFrameNumbers('personajedefiende', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10,
        });
    
        this.scene.start("menu")
    }
}