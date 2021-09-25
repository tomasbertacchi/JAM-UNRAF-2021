import Phaser from 'phaser'

export default class game extends Phaser.Scene
{
    private plataformas!: Phaser.Physics.Arcade.StaticGroup
    private personaje!: Phaser.Physics.Arcade.Sprite
    private personaje2!: Phaser.Physics.Arcade.Sprite
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private cursor_A!: Phaser.Input.Keyboard.Key
    private cursor_D!: Phaser.Input.Keyboard.Key
    private cursor_S!: Phaser.Input.Keyboard.Key
    private cursor_CTRL!: Phaser.Input.Keyboard.Key
    private debeMoverse!: Boolean
    private estaAtacando!: Boolean
    private seDefiende!: Boolean
    private seDefiende2!: Boolean
    private debeMoverse2!: Boolean
    private estaAtacando2!: Boolean
    private timer!: number
    private vidas!: number
    private vidas2!: number

	constructor()
	{
		super('game')
	}

    create(){
        this.scene.run("ui")
        this.estaAtacando = false
        this.debeMoverse = true
        this.seDefiende = false
        this.estaAtacando2 = false
        this.debeMoverse2 = true
        this.seDefiende2 = false
        this.vidas= 1
        this.vidas2= 1
        this.cursores = this.input.keyboard.createCursorKeys()
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_CTRL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
        //plataformas
        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.create(960, 1060, 'plataforma') 


        //personajes
        this.personaje = this.physics.add.sprite(200, 950, "personaje3", 0).setScale(5);
        this.personaje2 = this.physics.add.sprite(1700, 950, "personaje3", 0).setScale(5)
        this.personaje2.flipX = true;
        this.personaje.setSize(15,35)
        this.personaje2.setSize(15,35)
        this.physics.add.collider(this.personaje, this.plataformas);
        this.physics.add.collider(this.personaje2, this.plataformas);
        this.physics.add.collider(this.personaje, this.personaje2, ()=>{this.ataque()})
        this.physics.add.collider(this.personaje, this.personaje2, ()=>{this.defensa()})
        
        
        this.personaje.play("idle");

        this.personaje2.play("idle");
    }

    update(){
        //CONTROLES PERSONAJE 1
        //RIGHT
        if (this.cursor_D.isDown && this.debeMoverse == true){
            this.personaje.setVelocityX(300)
            this.personaje.setSize(15,35)
            this.personaje.play("run", true)
        } //LEFT
        else if (this.cursor_A.isDown && this.debeMoverse == true){
            this.personaje.setVelocityX(-300)
            this.personaje.setSize(15,35)
        } //IDLE
        else if(this.debeMoverse == true){
            this.personaje.setVelocityX(0)
            this.personaje.play("idle",true)
        }
        
        //ATAQUE
        if(Phaser.Input.Keyboard.JustDown(this.cursores.space) && this.estaAtacando == false && this.seDefiende == false){
            this.debeMoverse = false
            this.estaAtacando = true
            this.personaje.setVelocityX(0)
            if(this. estaAtacando == true){
                this.personaje.setSize(43,35)
                this.personaje.play("ataque1")
                .on("animationcomplete", () => {this.personaje.play("idle",true); this.debeMoverse = true; this.estaAtacando = false; this.personaje.setSize(15,35)})
                
            } 
            
        }

        if(this.cursor_S.isDown && this.seDefiende == false && this.estaAtacando == false){
            this.debeMoverse = false
            this.seDefiende = true
            this.personaje.setVelocityX(0)
            if(this. seDefiende == true){
                this.personaje.play("escudo")
                .on("animationcomplete", () => {this.personaje.play("idle",true); this.debeMoverse = true; this.seDefiende = false; this.personaje.setSize(15,35)})   
            } 

        }
        
        //CONTROLES PERSONAJE 2
        //RIGHT
       if (this.cursores.right.isDown && this.debeMoverse2 == true){
            this.personaje2.setVelocityX(300)
            this.personaje2.setSize(15,35)
       }//LEFT
       else if (this.cursores.left.isDown && this.debeMoverse2 == true){
           this.personaje2.setVelocityX(-300)
           this.personaje2.setSize(15,35)
           this.personaje2.play("run", true)
       } //IDLE
       else if(this.debeMoverse2 == true){
        this.personaje2.setVelocityX(0)
        this.personaje2.play("idle",true)
    }
        // ATAQUE
       if(Phaser.Input.Keyboard.JustDown(this.cursor_CTRL) && this.estaAtacando2 == false){
            this.debeMoverse2 = false
            this.estaAtacando2 = true
            this.personaje2.setVelocityX(0)
            if(this.estaAtacando2 == true){
                this.personaje2.setSize(43,35)
                this.personaje2.play("ataque2")
                .on("animationcomplete", () => {this.personaje2.play("idle",true); this.debeMoverse2 = true; this.estaAtacando2 = false; this.personaje2.setSize(15,35)})
            } 
       }

       if(this.cursores.down.isDown && this.seDefiende2 == false && this.estaAtacando2 == false){
        this.debeMoverse2 = false
        this.seDefiende2 = true
        this.personaje2.setVelocityX(0)
        if(this. seDefiende2 == true){
            this.personaje2.play("escudo")
            .on("animationcomplete", () => {this.personaje2.play("idle",true); this.debeMoverse2 = true; this.seDefiende2 = false; this.personaje2.setSize(15,35)})   
        }
    } 


        //Vida2
            if(this.vidas2 === 0){
                this.debeMoverse2 = false
                this.personaje2.setVelocityX(0)
                this.personaje2.play("muerte2",true)
                .on("animationcomplete", () => {this.scene.pause("game")})
        }
        //Vida
            if(this.vidas === 0){
                this.debeMoverse = false
                this.personaje.setVelocityX(0)
                this.personaje.play("muerte1",true)
                .on("animationcomplete", () => {this.scene.pause("game")})
        }
    }   

    ataque(){


        if(this.estaAtacando === true && this.seDefiende2 === false){
            this.vidas2 = this.vidas2 - 1
            console.log("atacando")
            console.log(this.vidas2)
        }

        if(this.estaAtacando2 === true && this.seDefiende === false){
            this.vidas = this.vidas - 1
            console.log("atacando2")
            console.log(this.vidas)
        }

    }

    defensa(){

        if(this.estaAtacando === true && this.seDefiende2 === true){
            this.vidas2 = this.vidas2 + 1
            console.log("atacando")
            console.log(this.vidas2)
        }

        if(this.estaAtacando2 === true && this.seDefiende === true){
            this.vidas = this.vidas + 1
            console.log("atacando2")
            console.log(this.vidas)
        }
    }

}
