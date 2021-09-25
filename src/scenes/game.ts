import Phaser from 'phaser'

export default class game extends Phaser.Scene
{
    private plataformas!: Phaser.Physics.Arcade.StaticGroup
    private personaje!: Phaser.Physics.Arcade.Sprite
    private personaje2!: Phaser.Physics.Arcade.Sprite
    private cursores!: Phaser.Types.Input.Keyboard.CursorKeys
    private cursor_A!: Phaser.Input.Keyboard.Key
    private cursor_D!: Phaser.Input.Keyboard.Key
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
        //plataformas
        this.plataformas = this.physics.add.staticGroup();
        this.plataformas.create(960, 1060, 'plataforma') 


        //personajes
        this.personaje = this.physics.add.sprite(200, 600, "personaje3", 0).setScale(5);
        this.personaje2 = this.physics.add.sprite(500, 600, "personaje2", 0).setScale(5)
        this.personaje.setSize(15,35)
        this.physics.add.collider(this.personaje, this.plataformas);
        this.physics.add.collider(this.personaje2, this.plataformas);
        
        

        //animaciones
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });
        
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('personaje2', { start: 0, end: 3 }),
            repeat: -1,
            frameRate: 5
        });

        this.anims.create({
            key: 'ataque1',
            frames: this.anims.generateFrameNumbers('personaje3', { start: 49, end: 52 }),
            repeat: 0,
            frameRate: 5
        });

        this.personaje.play("idle");
    }

    update(){
       if (this.cursores.right.isDown && this.debeMoverse == true){
            this.personaje.setVelocityX(200)
            this.personaje.setSize(15,35)
       }
       else if (this.cursores.left.isDown && this.debeMoverse == true){
           this.personaje.setVelocityX(-200)
           this.personaje.setSize(15,35)
       }
       else {
           this.personaje.setVelocityX(0)
       }

       if(this.cursores.space.isDown && this.estaAtacando == false){
            this.debeMoverse = false
            this.estaAtacando = true
            if(this. estaAtacando == true){
                this.personaje.play("ataque1")
                this.personaje.setSize(30,35)
                .on('animationcomplete', () => {this.personaje.play("idle"); this.debeMoverse = true; this.estaAtacando = false; this.personaje.setSize(15,35)})
            } 

       }

       if (this.cursor_D.isDown){
        this.personaje2.setVelocityX(200)
            }
        else if (this.cursor_A.isDown){
            this.personaje2.setVelocityX(-200)
        }
        else {
            this.personaje2.setVelocityX(0)
        }

        
       
    }   
}
