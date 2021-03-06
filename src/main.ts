import Phaser from 'phaser'
import preloader from './scenes/preloader'
import tutorial from './scenes/tutorial'
import mainmenu from './scenes/mainmenu'
import game from './scenes/game'
import UIscene from './scenes/UIscene'
import pausa from './scenes/pausa'
import gameover from './scenes/gameover'
import creditos from './scenes/creditos'
import gameover2 from './scenes/gameover2'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	//backgroundColor: '#4488aa',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
			, debug: false
		}
	},
	scene: [preloader,mainmenu,tutorial, creditos,UIscene, game, pausa, gameover,gameover2]
}

export default new Phaser.Game(config)
