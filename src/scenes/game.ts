import Phaser from 'phaser'

export default class game extends Phaser.Scene
{
    private plataformas!: Phaser.Physics.Arcade.StaticGroup
    private personaje!: Phaser.Physics.Arcade.Sprite
    private personaje2!: Phaser.Physics.Arcade.Sprite
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private cursor_A!: Phaser.Input.Keyboard.Key
    private cursor_D!: Phaser.Input.Keyboard.Key
    private cursor_CTRL!: Phaser.Input.Keyboard.Key
    private debeMoverse!: Boolean
    private estaAtacando!: Boolean
    private debeMoverse2!: Boolean
    private estaAtacando2!: Boolean
    private timer!: number

	constructor()
	{
		super('game')
	}

    create(){
        this.scene.run("ui")
        this.estaAtacando = false
        this.debeMoverse = true
        this.estaAtacando2 = false
        this.debeMoverse2 = true
        this.cursores = this.input.keyboard.createCursorKeys()
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
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
        this.physics.add.collider(this.personaje, this.personaje2)
        
        
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
        if(Phaser.Input.Keyboard.JustDown(this.cursores.space) && this.estaAtacando == false){
            this.debeMoverse = false
            this.estaAtacando = true
            this.personaje.setVelocityX(0)
            if(this. estaAtacando == true){
                this.personaje.setSize(30,35)
                this.personaje.play("ataque1")
                .on("animationcomplete", () => {this.personaje.play("idle",true); this.debeMoverse = true; this.estaAtacando = false; this.personaje.setSize(15,35)})
                
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
       if(this.cursor_CTRL.isDown && this.estaAtacando2 == false){
            this.debeMoverse2 = false
            this.estaAtacando2 = true
            this.personaje2.setVelocityX(0)
            if(this.estaAtacando2 == true){
                this.personaje2.setSize(30,35)
                this.personaje2.play("ataque2")
                .on("animationcomplete", () => {this.personaje2.play("idle",true); this.debeMoverse2 = true; this.estaAtacando2 = false; this.personaje2.setSize(15,35)})
            } 
       }
    }   
}
