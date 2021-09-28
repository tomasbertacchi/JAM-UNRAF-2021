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
    private cursor_SHIFT!: Phaser.Input.Keyboard.Key
    private debeMoverse!: Boolean
    private estaAtacando!: Boolean
    private seDefiende!: Boolean
    private seDefiende2!: Boolean
    private debeMoverse2!: Boolean
    private estaAtacando2!: Boolean
    private estaMuerto!: Boolean
    private estaMuerto2!: Boolean
    private timer!: number
    private vidas!: number
    private vidas2!: number
    private timedEvent!: any
    private initialTime!: number
    private puntuacion1!: number
    private puntuacion2!: number
    private sumapunto!: boolean
    private revive!: boolean
    private revive2!: boolean
    private randomNumber1!: number
    private randomNumber2!: number

	constructor()
	{
		super('game')
	}

    create(){
       // console.log("crea escena juego")
        //this.scene.run("ui")
        this.estaAtacando = false
        this.debeMoverse = true
        this.seDefiende = false
        this.estaAtacando2 = false
        this.debeMoverse2 = true
        this.seDefiende2 = false
        this.estaMuerto = false
        this.estaMuerto2 = false
        this.sumapunto = true
        this.revive = false
        this.revive2 = false
        this.vidas= 1
        this.vidas2= 1
        this.puntuacion1 = 0
        this.puntuacion2 = 0
        this.registry.set("puntuacion2", this.puntuacion2)
        this.registry.set("puntuacion1", this.puntuacion1)
        this.cursores = this.input.keyboard.createCursorKeys()
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_SHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);

        this.randomNumber1 = Phaser.Math.RoundTo(Phaser.Math.FloatBetween(1,4));
        this.randomNumber2 = Phaser.Math.RoundTo(Phaser.Math.FloatBetween(1,4));

        

        //Timer
        this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onSecond, callbackScope: this, loop: false });
        this.timedEvent.paused = true;
        //plataformas
        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.create(960, 1060, 'plataforma').setAlpha(0) 


        //personajes
        this.personaje = this.physics.add.sprite(200, 750, "personajeparado"+this.randomNumber1, 0);
        this.personaje2 = this.physics.add.sprite(1700, 750, "personajeparado"+this.randomNumber2, 0);
        this.personaje2.flipX = true;
        if(this.randomNumber1 == 1){
        this.personaje.setSize(320,587)
        }else if(this.randomNumber1 == 2){
            this.personaje.setSize(300,587)
        }else if(this.randomNumber1 == 3){
            this.personaje.setSize(400,587)
            this.personaje.setOffset(0,0)
        }else if(this.randomNumber1 == 4){
            this.personaje.setSize(400,587)
            this.personaje.setOffset(0,0)
        }
        if(this.randomNumber2 == 1){
            this.personaje2.setSize(320,587)
        }else if(this.randomNumber2 == 2){
            this.personaje2.setSize(300,587)
        }else if(this.randomNumber2 == 3){
            this.personaje2.setSize(400,587)
            this.personaje2.setOffset(300,0)
        }else if(this.randomNumber2 == 4){
            this.personaje2.setSize(400,587)
            this.personaje2.setOffset(300,0)
        }
        this.physics.add.collider(this.personaje, this.plataformas);
        this.physics.add.collider(this.personaje2, this.plataformas);
        this.physics.add.collider(this.personaje, this.personaje2, ()=>{this.ataque()})
        this.physics.add.collider(this.personaje, this.personaje2, ()=>{this.defensa()})
        this.physics.add.overlap(this.personaje, this.personaje2, ()=> {this.force()})
        
        
        this.personaje.play("idle"+this.randomNumber1);
        this.personaje2.play("idle"+this.randomNumber2);
        this.personaje.setCollideWorldBounds(true)
        this.personaje2.setCollideWorldBounds(true)
    }

    update(){
        //CONTROLES PERSONAJE 1
        //RIGHT
        if (this.cursor_D.isDown && this.debeMoverse == true ){
            this.personaje.setVelocityX(300)
            if(this.randomNumber1 == 1){
                this.personaje.setSize(320,587)
            }else if(this.randomNumber1 == 2){
                this.personaje.setSize(270,587)
            }else if(this.randomNumber1 == 3){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(-15,0)
            }else if(this.randomNumber1 == 4){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(-15,0)
            }
            this.personaje.play("run"+this.randomNumber1, true)
        } //LEFT
        else if (this.cursor_A.isDown && this.debeMoverse == true){
            this.personaje.setVelocityX(-300)
            if(this.randomNumber1 == 1){
                this.personaje.setSize(320,587)
            }else if(this.randomNumber1 == 2){
                this.personaje.setSize(270,587)
            }else if(this.randomNumber1 == 3){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(-15,0)
            }else if(this.randomNumber1 == 4){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(-15,0)
            }
        } //IDLE
        else if(this.debeMoverse == true){
            this.personaje.setVelocityX(0)
            if(this.randomNumber1 == 1){
                this.personaje.setSize(320,587)
            }else if(this.randomNumber1 == 2){
                this.personaje.setSize(270,587)
            }else if(this.randomNumber1 == 3){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(0,0)
            }else if(this.randomNumber1 == 4){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(0,0)
            }
            this.personaje.play("idle"+this.randomNumber1,true)
        }
        
        //ATAQUE
        if(Phaser.Input.Keyboard.JustDown(this.cursores.space) && this.estaAtacando == false && this.seDefiende == false){
            this.debeMoverse = false
            this.estaAtacando = true
            this.personaje.setVelocityX(0)
            if(this. estaAtacando == true){
                if(this.randomNumber1 == 1){
                    this.personaje.setSize(380,587)
                }else if(this.randomNumber1 == 2){
                    this.personaje.setSize(400,587)
                    this.personaje.setOffset(170,0)
                }else if(this.randomNumber1 == 3){
                    this.personaje.setSize(500,587)
                    this.personaje.setOffset(31,0)
                }else if(this.randomNumber1 == 4){
                    this.personaje.setSize(500,587)
                    this.personaje.setOffset(31,0)
                }
                this.personaje.play("ataque"+this.randomNumber1)
                .on("animationcomplete", () => {this.personaje.play("idle"+this.randomNumber1,true); this.debeMoverse = true; this.estaAtacando = false; if(this.randomNumber1==1){this.personaje.setSize(320,587)}else if(this.randomNumber1 ==2){this.personaje.setSize(270,587)}else if(this.randomNumber1 ==3){this.personaje.setSize(400,587);this.personaje.setOffset(0,0)}else if(this.randomNumber1 ==4){this.personaje.setSize(400,587);this.personaje.setOffset(0,0)}})
                
            } 
            
        }

        if(this.cursor_S.isDown && this.seDefiende == false && this.estaAtacando == false){
            this.debeMoverse = false
            this.seDefiende = true
            this.personaje.setVelocityX(0)
            if(this.randomNumber1 == 1){
                this.personaje.setSize(380,587)
            }else if(this.randomNumber1 == 2){
                this.personaje.setSize(330,587)
            }else if(this.randomNumber1 == 4){
                this.personaje.setSize(400,587)
                this.personaje.setOffset(31,0)
            }
            if(this. seDefiende == true){
                this.personaje.play("escudo"+this.randomNumber1)
                   
            } 

        }
        if(Phaser.Input.Keyboard.JustUp(this.cursor_S)){
            this.personaje.play("idle"+this.randomNumber1,true);
            this.debeMoverse = true; this.seDefiende = false;
            if(this.randomNumber1==1){
                this.personaje.setSize(320,587)
            }else if(this.randomNumber1 ==2){
                this.personaje.setSize(270,587)
            }else if(this.randomNumber1 ==3){
                this.personaje.setSize(400,587);
                this.personaje.setOffset(0,0)
            }else if(this.randomNumber1 == 4){
                this.personaje.setSize(500,587)
                this.personaje.setOffset(31,0)
            }
        }
        
        //CONTROLES PERSONAJE 2
        //RIGHT
       if (this.cursores.right.isDown && this.debeMoverse2 == true){
            this.personaje2.setVelocityX(300)
            if(this.randomNumber2 == 1){
                this.personaje2.setSize(320,587)
            }else if(this.randomNumber2 == 2){
                this.personaje.setSize(270,587)
            }else if(this.randomNumber2 == 3){
                this.personaje2.setSize(400,587)
                this.personaje2.setOffset(330,0)
            }else if(this.randomNumber2 == 4){
                this.personaje2.setSize(400,587)
                this.personaje2.setOffset(380,0)
            }
           
       }//LEFT
       else if (this.cursores.left.isDown && this.debeMoverse2 == true){
           this.personaje2.setVelocityX(-300)
           if(this.randomNumber2 == 1){
                this.personaje2.setSize(320,587)
            }else if(this.randomNumber2 == 2){
                this.personaje2.setSize(270,587)
            }else if(this.randomNumber2 == 3){
                this.personaje2.setSize(400,587)
                this.personaje2.setOffset(330,0)
            }else if(this.randomNumber2 == 4){
                this.personaje2.setSize(400,587)
                this.personaje2.setOffset(380,0)
            }
           this.personaje2.play("run"+this.randomNumber2, true)
       } //IDLE
       else if(this.debeMoverse2 == true){
        this.personaje2.setVelocityX(0)
        if(this.randomNumber2 == 1){
            this.personaje2.setSize(320,587)
        }else if(this.randomNumber2 == 2){
            this.personaje2.setSize(270,587)
        }else if(this.randomNumber2 == 3){
            this.personaje2.setSize(400,587)
            this.personaje2.setOffset(330,0)
        }else if(this.randomNumber2 == 4){
            this.personaje2.setSize(400,587)
            this.personaje2.setOffset(330,0)
        }
        this.personaje2.play("idle"+this.randomNumber2,true)
    }
        // ATAQUE
       if(Phaser.Input.Keyboard.JustDown(this.cursor_SHIFT) && this.estaAtacando2 == false && this.seDefiende2 == false){
            this.debeMoverse2 = false
            this.estaAtacando2 = true
            this.personaje2.setVelocityX(0)
            if(this.estaAtacando2 == true){
                if(this.randomNumber2 == 1){
                    this.personaje2.setSize(380,587)
                }else if(this.randomNumber2 == 2){
                    this.personaje2.setSize(400,587)
                    this.personaje2.setOffset(170,0)
                }else if(this.randomNumber2 == 3){
                    this.personaje2.setSize(500,587)
                    this.personaje2.setOffset(235,0)
                }else if(this.randomNumber2 == 4){
                    this.personaje2.setSize(500,587)
                    this.personaje2.setOffset(235,0)
                }
                this.personaje2.play("ataque"+this.randomNumber2)
                .on("animationcomplete", () => {this.personaje2.play("idle"+this.randomNumber2,true); this.debeMoverse2 = true; this.estaAtacando2 = false; if(this.randomNumber2==1){this.personaje2.setSize(320,587)}else if(this.randomNumber2 ==2){this.personaje2.setSize(270,587)}else if(this.randomNumber2 ==3){this.personaje2.setSize(400,587);this.personaje2.setOffset(330,0)}else if(this.randomNumber2 ==4){this.personaje2.setSize(400,587);this.personaje2.setOffset(330,0)}})
            } 
       }

       if(this.cursores.down.isDown && this.seDefiende2 == false && this.estaAtacando2 == false){
        this.debeMoverse2 = false
        this.seDefiende2 = true
        this.personaje2.setVelocityX(0)
        if(this.randomNumber2 == 1){
            this.personaje2.setSize(380,587)
        }else if(this.randomNumber2 == 2){
            this.personaje2.setSize(330,587)
        }else if(this.randomNumber2 == 3){
            this.personaje2.setSize(330,0)
            this.personaje2.setOffset(380,0)

        }else if(this.randomNumber2 == 4){
            this.personaje2.setSize(530,0)
            this.personaje2.setOffset(340,0)

        }
        if(this. seDefiende2 == true){
            this.personaje2.play("escudo"+this.randomNumber2)
            
        }
        } 
        if(Phaser.Input.Keyboard.JustUp(this.cursores.down)){
            this.personaje2.play("idle"+this.randomNumber2,true); 
            this.debeMoverse2 = true; 
            this.seDefiende2 = false; 
            if(this.randomNumber2==1){
                this.personaje2.setSize(320,587)
            }else if(this.randomNumber2 ==2){
                this.personaje2.setSize(270,587)
            }else if(this.randomNumber2 ==3){
                this.personaje2.setSize(400,587);
                this.personaje2.setOffset(330,0)
            }else if(this.randomNumber2 ==4){
                this.personaje2.setSize(400,587);
                this.personaje2.setOffset(330,0)
            }
        }


        //Vida2
            if(this.vidas2 <= 0){
                this.debeMoverse2 = false
                this.personaje2.setVelocityX(0)
                this.personaje2.play("muerte"+this.randomNumber2,true)
                this.timedEvent.paused = false;
                
            }
        //Vida
            if(this.vidas <= 0){
                this.debeMoverse = false
                this.personaje.setVelocityX(0)
                this.personaje.play("muerte"+this.randomNumber1,true)
                this.timedEvent.paused = false;
                
            }

    }   

    ataque(){


        if(this.estaAtacando === true && this.seDefiende2 === false){
            this.estaMuerto2 = true
            this.vidas2 = this.vidas2 - 1
            this.registry.set("vidas2", this.vidas2)
            
           
            // console.log("atacando")
            // console.log(this.vidas2)
            if (this.debeMoverse2 == true){
                this.estaMuerto2 = true
                this.vidas2 = this.vidas2 - 1
                this.registry.set("vidas2", this.vidas2)
                // console.log("atacando")
                // console.log(this.vidas2)
            }
        }

        if(this.estaAtacando2 === true && this.seDefiende === false){
            this.estaMuerto = true
            this.vidas = this.vidas - 1
            this.registry.set("vidas1", this.vidas)
            
            
            // console.log("atacando2")
            // console.log(this.vidas)
            if (this.debeMoverse == true){
                this.estaMuerto = true
                this.vidas = this.vidas - 1
                this.registry.set("vidas1", this.vidas)
                
                
                // console.log("atacando2")
                // console.log(this.vidas)
            }
        }

        if(this.estaMuerto && this.sumapunto){
            this.puntuacion2 = 1
            this.registry.set("puntuacion2", this.puntuacion2)
            this.sumapunto = false       
            // console.log("Sumapuntos2" + this.puntuacion2)
            if (this.debeMoverse2 == true){
                this.puntuacion2 = 1
                this.registry.set("puntuacion2", this.puntuacion2)
                this.sumapunto = false       
                // console.log("Sumapuntos2" + this.puntuacion2)
            }
        }
        if(this.estaMuerto2 && this.sumapunto){
            this.puntuacion1 = 1
            this.registry.set("puntuacion1", this.puntuacion1)
            this.sumapunto = false 
            // console.log("Sumapuntos" + this.puntuacion1)   
            if (this.debeMoverse == true){
                this.puntuacion1 = 1
                this.registry.set("puntuacion1", this.puntuacion1)
                    this.sumapunto = false 
            }        
        }

    }

    defensa(){

        if(this.estaAtacando === true && this.seDefiende2 === true){
            // console.log("atacando")
            // console.log(this.vidas2)
        }

        if(this.estaAtacando2 === true && this.seDefiende === true){
            // console.log("atacando2")
            // console.log(this.vidas)
        }
    }
    force(){
        if(this.vidas === 1 && this.vidas2 === 1){
            this.personaje.body.position.set(this.personaje.body.position.x-15,this.personaje.body.position.y)
            this.personaje2.body.position.set(this.personaje2.body.position.x+15,this.personaje2.body.position.y)
        }
    }
    onSecond(){
        this.scene.pause("game")
    }
}
