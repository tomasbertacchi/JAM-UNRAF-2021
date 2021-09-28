import Phaser from 'phaser'

export default class preloader extends Phaser.Scene
{
    private randomNumber!: number

	constructor()
	{
		super('preloader')
	}

	preload()
    {
        this.load.image("plataforma", "assets/escenario/plataforma.png")
        this.load.image("boton_creditos", "assets/escenario/Creditos.png")
        this.load.image("ganador1", "assets/escenario/Ganador1.png")
        this.load.image("ganador2", "assets/escenario/Ganador2.png")
        this.load.image("jugar", "assets/escenario/Jugar.png")
        this.load.image("menu", "assets/escenario/Menu.png")
        this.load.image("boton_tutorial", "assets/escenario/Tutorial.png")
        this.load.image("atras", "assets/escenario/Atras.png")
        this.load.audio("musicamenu", "assets/sfx/musicamenu.mp3")
        this.load.audio("musicagameplay", "assets/sfx/musicagameplay.mp3")
        this.load.audio("impacto", "assets/sfx/impacto.mp3")
        this.load.image("tutorial", "images/tutorial.png")
        this.load.image("creditos", "images/creditos.png")
        
        //Robot
        this.load.spritesheet("personajeparado1", "assets/personaje/Fitz_parado.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajecamina1", "assets/personaje/Fitz_camina.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajeataca1", "assets/personaje/Fitz_ataca.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajedefiende1", "assets/personaje/Fitz_Defensa.png", { frameWidth: 381, frameHeight: 587, endFrame:3 })
        this.load.spritesheet("personajemuere1", "assets/personaje/Fitz_Muere.png", { frameWidth: 381, frameHeight: 587, /*endFrame:3*/ })
       //Baba
        this.load.spritesheet("personajeparado2", "assets/personaje/Bobparado.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajecamina2", "assets/personaje/Bobcamina.png",{ frameWidth: 381, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajeataca2", "assets/personaje/Bobataca.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajedefiende2", "assets/personaje/Bobdefensa.png", { frameWidth: 381, frameHeight: 587, endFrame:3 })
        this.load.spritesheet("personajemuere2", "assets/personaje/BobMuere.png", { frameWidth: 381, frameHeight: 587, /*endFrame:3*/ })
        
        //Esuqleto Rosa
        this.load.spritesheet("personajeparado3", "assets/personaje/esqueleto_2_parado.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajecamina3", "assets/personaje/esqueleto_2_camina.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajeataca3", "assets/personaje/esqueleto_2_ataca.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajedefiende3", "assets/personaje/esqueleto_2_dash.png", { frameWidth: 762, frameHeight: 587, endFrame:3 })
        this.load.spritesheet("personajemuere3", "assets/personaje/esqueleto_2_muere.png", { frameWidth: 762, frameHeight: 587, endFrame:3 })

        //Esuqleto Negro
        this.load.spritesheet("personajeparado4", "assets/personaje/esqueleto_1_parado.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajecamina4", "assets/personaje/esqueleto_1_camina.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajeataca4", "assets/personaje/esqueleto_1_ataque.png",{ frameWidth: 762, frameHeight: 587, endFrame:3  })
        this.load.spritesheet("personajedefiende4", "assets/personaje/esqueleto_1_defensa.png", { frameWidth: 762, frameHeight: 587, endFrame:3 })
        this.load.spritesheet("personajemuere4", "assets/personaje/esqueleto_1_muere.png", { frameWidth: 762, frameHeight: 587, endFrame:3 })


        this.load.image("tuerca", "images/tuerca.png")
        this.load.image("bg1", "assets/escenario/BG1.png")
        this.load.image("bg2", "assets/escenario/BG2.png")
    }

    create()
    {
        //animaciones
        

        //Robot
        this.anims.create({
            key: 'idle1',
            frames: this.anims.generateFrameNumbers('personajeparado1', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'run1',
            frames: this.anims.generateFrameNumbers('personajecamina1', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'ataque1',
            frames: this.anims.generateFrameNumbers('personajeataca1', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10
        });

        this.anims.create({
            key: 'muerte1',
            frames: this.anims.generateFrameNumbers('personajemuere1', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 5,
        });

        this.anims.create({
            key: 'escudo1',
            frames: this.anims.generateFrameNumbers('personajedefiende1', { start: 2, end: 2 }),
            repeat: -1,
            frameRate: 10,
        });

        //Baba
        this.anims.create({
            key: 'idle2',
            frames: this.anims.generateFrameNumbers('personajeparado2', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'run2',
            frames: this.anims.generateFrameNumbers('personajecamina2', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'ataque2',
            frames: this.anims.generateFrameNumbers('personajeataca2', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10
        });

        this.anims.create({
            key: 'muerte2',
            frames: this.anims.generateFrameNumbers('personajemuere2', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 5,
        });

        this.anims.create({
            key: 'escudo2',
            frames: this.anims.generateFrameNumbers('personajedefiende2', { start: 2, end: 2 }),
            repeat: -1,
            frameRate: 10,
        });
    
        //Esuqueleto Rosa
        this.anims.create({
            key: 'idle3',
            frames: this.anims.generateFrameNumbers('personajeparado3', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'run3',
            frames: this.anims.generateFrameNumbers('personajecamina3', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'ataque3',
            frames: this.anims.generateFrameNumbers('personajeataca3', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10
        });

        this.anims.create({
            key: 'muerte3',
            frames: this.anims.generateFrameNumbers('personajemuere3', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 5,
        });

        this.anims.create({
            key: 'escudo3',
            frames: this.anims.generateFrameNumbers('personajedefiende3', { start: 2, end: 2 }),
            repeat: -1,
            frameRate: 10,
        });
        
        //Esuqueleto Negro
        this.anims.create({
            key: 'idle4',
            frames: this.anims.generateFrameNumbers('personajeparado4', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'run4',
            frames: this.anims.generateFrameNumbers('personajecamina4', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        this.anims.create({
            key: 'ataque4',
            frames: this.anims.generateFrameNumbers('personajeataca4', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 10
        });

        this.anims.create({
            key: 'muerte4',
            frames: this.anims.generateFrameNumbers('personajemuere4', { start: 0, end: 3 }),
            repeat: 0,
            frameRate: 5,
        });

        this.anims.create({
            key: 'escudo4',
            frames: this.anims.generateFrameNumbers('personajedefiende4', { start: 2, end: 2 }),
            repeat: -1,
            frameRate: 10,
        });

        this.scene.start("menu")
    }
}