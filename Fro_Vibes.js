var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	input: {
		gamepad: true
	},
physics: {
        default: 'matter',
        matter: {
					enableSleeping: true,
					debug: false,
					gravity: {
            y: 0
        },
				}
    },

scene: [Main_Screen, Zones, Transi1, Jeu1, Transi2, Jeu2, Transi3, Jeu3, Final_Screen] //Zones, Transi1, Jeu1, Transi2,

};

this.game = new Phaser.Game(config);
