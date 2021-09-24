import Phaser from 'phaser'

import Game from './scenes/Game'
import mainmenu from './scenes/mainmenu'
import UI from './scenes/ui'
import tutorial from './scenes/tutorial'
import preloader from './scenes/preloader'

const config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: true,
		}
	},
	scene: [preloader,Game],
}
export default new Phaser.Game(config)
