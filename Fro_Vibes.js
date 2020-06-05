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
					debug: true,
					gravity: {
            y: 0
        },
				}
    },

scene: [Main_Screen]

};

this.game = new Phaser.Game(config);
