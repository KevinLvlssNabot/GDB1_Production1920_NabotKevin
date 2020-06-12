class Jeu2 extends Phaser.Scene {
  constructor(){
    super("Jeu2")
  }


  init(data){
  }


  preload(){
      this.load.image('backgroundPosters','assets/PNGs/_Scene2/Room.png');
      this.load.image('instructions2','assets/PNGs/_Scene2/Instructions.png');
      this.load.image('chronoImage2','assets/PNGs/_Scene2/Chrono.png');
      this.load.json('postersShape', 'assets/PNGs/_Scene2/Posters.json');
      this.load.atlas('sheetPosters', 'assets/PNGs/_Scene2/sheetPosters.png', 'assets/PNGs/_Scene2/sheetPosters.json');
      this.load.image('cutted1','assets/PNGs/_Scene2/Cutted.png');
      this.load.image('cutted2','assets/PNGs/_Scene2/Cutted2.png');
      //
    //  this.load.animation('fro_pompes','Fro_pompes.json');

  } // accolade fin preload


  create(){
    postersShape = this.cache.json.get('postersShape');
    //
    backgroundPosters = this.add.image(960,540,'backgroundPosters'); // fond d'écran
    //
    instructions = this.add.image(960,200,'instructions2');
    chronoImage = this.add.image(200,200,'chronoImage2');
    //
    music = this.sound.add('backgroundMusic_Posters'); // music
    musicConfig = {
      mute: false,
      volume: 0.5,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0
      };
    music.play(musicConfig);
    //
    cutting = this.sound.add('cutting');
    cuttingConfig = {
      mute: false,
      volume: 0.5,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
      };
    //

    this.input.on('pointerdown', function (pointer){ // ensemble composant la mécanique de swipe
      	swipe = true;
    });

    this.input.on('pointerup', function () {
    	  swipe = false;
    });

    this.input.on('pointermove', function (pointer){
        if (swipe) {
            instructions.setVisible(false);
        }
    });
    //
    // var posterTest = new Posters (0, this.matter.add.sprite(500, 500, 'sheetPosters', 'Poster1.png', {shape: postersShape.Poster1}));
    //
    chrono = this.add.text(-115,-125, temps2, { fontFamily : 'Streamster', fontSize : '180px', fill: '#000', padding: chronoImage}); // affichage chrono
    //
    creationEvent = this.time.addEvent({ delay: 200, callback: creation, callbackScope: this, repeat: -1 });//  creation infinie de posters
    timedEvent = this.time.addEvent({ delay: 1000, callback: decompte2, callbackScope: this, repeat: 9 }); // décompte et arrêt du chrono
    //

  } // accolader fin create

  update(){
    if (sceneswitch == 4) { // changement de scene à la fin du décompte
        this.scene.start('Transi3');
        music.stop();
    }
    //

      } // accolade fin update


}
