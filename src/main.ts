import Phaser from 'phaser'
import preloader from './scenes/preloader'
import tutorial from './scenes/tutorial'
import mainmenu from './scenes/mainmenu'
import game from './scenes/game'
import UIscene from './scenes/UIscene'



const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
			, debug: true
		}
	},
	scene: [preloader,mainmenu, tutorial, game,UIscene]
}

export default new Phaser.Game(config)
