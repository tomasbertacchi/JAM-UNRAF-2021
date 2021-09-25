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
    private timer!: number

	constructor()
	{
		super('game')
	}

    create(){
        this.scene.run("ui")
        this.estaAtacando = false
        this.debeMoverse = true
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
        this.personaje.play("idle");

        //personaje 2
        this.anims.create({
            key: 'ataque2',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 49, end: 52 }),
            repeat: 0,
            frameRate: 10,
        });
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
        else {
            this.personaje.setVelocityX(0)
            this.personaje.play("idle",true)
        }
        //ATAQUE
        if(Phaser.Input.Keyboard.JustDown(this.cursores.space) && this.estaAtacando == false){
            this.debeMoverse = false
            this.estaAtacando = true
            if(this. estaAtacando == true){
                this.personaje.play("ataque1")
                this.personaje.setSize(30,35)
                .on('animationcomplete', () => {this.personaje.play("idle",true); this.debeMoverse = true; this.estaAtacando = false; this.personaje.setSize(15,35)})
            } 
            
        }
        
        //CONTROLES PERSONAJE 2
        //RIGHT
       if (this.cursores.right.isDown && this.debeMoverse == true){
            this.personaje2.setVelocityX(300)
            this.personaje2.setSize(15,35)
       }//LEFT
       else if (this.cursores.left.isDown && this.debeMoverse == true){
           this.personaje2.setVelocityX(-300)
           this.personaje2.setSize(15,35)
           this.personaje2.play("run", true)
       } //IDLE
       else {
           this.personaje2.setVelocityX(0)
           this.personaje2.play("idle",true)
       }
        // ATAQUE
       if(this.cursor_CTRL.isDown && this.estaAtacando == false){
            this.debeMoverse = false
            this.estaAtacando = true
            if(this.estaAtacando == true){
                this.personaje2.play("ataque2")
                this.personaje2.setSize(30,35)
                .on('animationcomplete', () => {this.personaje2.play("idle",true); this.debeMoverse = true; this.estaAtacando = false; this.personaje2.setSize(15,35)})
            } 
       }
    }   
}
