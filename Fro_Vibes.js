var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	input: {
		gamepad: true
	},
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },

scene: [Scene1]

};

this.game = new Phaser.Game(config);
