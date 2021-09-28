import Phaser, { Scene } from 'phaser'
export default class UIscene extends Phaser.Scene
{
	public textopuntuacion1!: Phaser.GameObjects.Text
	public numeropuntuacion1!: Phaser.GameObjects.Text
	public textopuntuacion2!: Phaser.GameObjects.Text
	public numeropuntuacion2!: Phaser.GameObjects.Text
	private tuerca!: Phaser.GameObjects.Image
	private player1!: Phaser.GameObjects.Text
	private player2!: Phaser.GameObjects.Text
	private escenaJuego!: Phaser.Scene
	private score1!: any
	private score2!: any
	private randomNumber!: number
    private bg!: Phaser.GameObjects.Image
	private timedEvent!: any
	private timedEvent2!: any
	private musicagameplay!: Phaser.Sound.BaseSound

	

	constructor(scene: Scene)
	{
		super('ui')
	}

    create(){
		this.musicagameplay = this.sound.add("musicagameplay", {
            volume: 0.2,
            loop: true,
        })
        this.musicagameplay.play()

		this.timedEvent = this.time.addEvent({ delay: 500, callback: this.onSecond, callbackScope: this, loop: false });
		this.timedEvent2 = this.time.addEvent({ delay: 500, callback: this.onSecond2, callbackScope: this, loop: false });
		this.timedEvent.paused = true;
		this.timedEvent2.paused = true;

		//Random BG
        this.randomNumber = Phaser.Math.RoundTo(Phaser.Math.FloatBetween(1,2));
        this.bg = this.add.image(0,0, "bg"+this.randomNumber).setOrigin(0,0)

		if(this.score1 == undefined ){
			this.score1 = 0
		}
		if(this.score2 == undefined){
			this.score2 = 0
		}
		if (this.score1 != undefined || this.score2 != undefined){
			this.score1 = this.score1
			this.score2 = this.score2
		}
	
		this.tuerca = this.add.image(1850, 100, "tuerca")
		.setInteractive()
		.on('pointerdown', () =>{ this.scene.pause("game"); this.scene.run("pausa")});
	
		var escenaJuego = this.scene.get('game');
		this.textopuntuacion1 = this.add.text(100, 100, "Puntacion P1: ", {fontFamily: "Arial", fontSize: 48})
		this.textopuntuacion2 = this.add.text(1200, 100, "Puntacion P2: ", {fontFamily: "Arial", fontSize: 48})
		this.numeropuntuacion1 = this.add.text(500, 100, ""+this.score1, {fontFamily: "Arial", fontSize: 48})
		this.numeropuntuacion2 = this.add.text(1700, 100,""+this.score2, {fontFamily: "Arial", fontSize: 48})
		
		//this.registry.events.on("changedata", this.updatePuntos, this)
		
		this.registry.events.on('changedata', (parent, key, data) => {
			if (key == 'puntuacion1'){
				this.score1 = this.score1+data
				console.log(data)
				this.numeropuntuacion1.setText(this.score1)
				if (this.score1 == 5){
					this.timedEvent.paused = false;
					//this.scene.start("gameover");this.scene.stop("ui");this.scene.stop("game")
					this.score1=0
					this.score2=0
					data=0
				}
            }
            if (key == "puntuacion2"){
				this.score2 = this.score2+data
				console.log(data)
				this.numeropuntuacion2.setText(this.score2)
				if (this.score2 == 5){
					this.timedEvent2.paused = false;
					//this.scene.start("gameover");this.scene.stop("ui");this.scene.stop("game")
					this.score1=0
					this.score2=0
					data=0
				}
            }
        });
		
		this.registry.events.on('changedata', (parent, key, data) => { 
			if (key == 'vidas1'){
				this.tuerca.setVisible(false)
				this.player1 = this.add.text(60, 250, "                 ", {fontSize: 750})
				.setInteractive()
				.on("pointerdown", ()=> {
					escenaJuego.scene.start()
					this.tuerca.setVisible(true)
					this.player1.setX(2000)
					
				});
			}
			if (key == "vidas2"){
				this.tuerca.setVisible(false)
				this.player2 = this.add.text(60, 250, "                 ", {fontSize: 750})
				.setInteractive()
				.on("pointerdown", ()=> {
					escenaJuego.scene.start(); 
					this.tuerca.setVisible(true)
					this.player2.setX(2000)
					
				});
				this.add.rectangle(1920/2-200, 1080/2 -100, 400, 400).setAlpha(0)
				.setInteractive()
				.on("pointerdown", ()=> this.player2.setVisible(false))
			}
		});

		
    }

	onSecond(){
        this.scene.start("gameover");this.scene.stop("ui");this.scene.stop("game"); this.musicagameplay.stop()
    }

	onSecond2(){
        this.scene.start("gameover2");this.scene.stop("ui");this.scene.stop("game"); this.musicagameplay.stop()
    }
}