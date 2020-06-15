class Jeu3 extends Phaser.Scene {
  constructor(){
    super("Jeu3")
  }


  init(data){
  }


  preload(){
      this.load.image('backgroundBattle','assets/PNGs/_Scene3/Room.png');
      this.load.image('instructions3','assets/PNGs/_Scene3/Instructions.png'); // A EXPORTER
      this.load.image('chronoImage3','assets/PNGs/_Scene3/Chrono.png');
      this.load.image('coneJaz','assets/PNGs/_Scene3/ConeJaz.png');
      this.load.image('baseJaz','assets/PNGs/_Scene3/BaseConeJaz.png');
      this.load.image('coneFroVert','assets/PNGs/_Scene3/ConeScoreVert.png');
      this.load.image('baseFroVert','assets/PNGs/_Scene3/BaseConeVert.png');
      this.load.image('coneFroRouge','assets/PNGs/_Scene3/ConeScoreRouge.png');
      this.load.image('baseFroRouge','assets/PNGs/_Scene3/BaseConeRouge.png');
      this.load.image('arrowDown','assets/PNGs/_Scene3/ArrowDown.png');
      this.load.image('arrowUp','assets/PNGs/_Scene3/ArrowUp.png');
      this.load.image('arrowLeft','assets/PNGs/_Scene3/ArrowLeft.png');
      this.load.image('arrowRight','assets/PNGs/_Scene3/ArrowRight.png');

      //
    //  this.load.animation('fro_pompes','Fro_pompes.json');

  } // accolade fin preload


  create(){
    //
    backgroundRoom = this.add.image(960,540,'backgroundBattle'); // fond d'écran
    //
  //  instructions = this.add.image(960,200,'instructions3');
    chronoImage = this.add.image(150,150,'chronoImage3');
    baseJaz = this.add.image(550,675,'baseJaz');
    coneJaz = this.add.image(550,110,'coneJaz');
    //
    baseFro = new Base (this.add.image(1375,675,'baseJaz'));

    coneFro = new Cones (this.add.image(1375,105,'coneJaz'));
    //
    music = this.sound.add('backgroundMusic_Battle'); // music
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

    this.input.on('pointerdown', function (pointer){ // ensemble composant la mécanique de swipe
      	swipe = true;
        downX = pointer.x;
        downY = pointer.y;
        swippingBarrier = 0;
    });

    this.input.on('pointerup', function (pointer) {
    	  swipe = false;
    });

    this.input.on('pointermove', function (pointer){ // mécanique de swipe directionnel
      upX = pointer.x;
      upY = pointer.y;
    if (swippingBarrier == 0) {
        if (swipe && upX < downX - threshold) {
            inputDirection = 2;
            miss(); // fonction de comparaison fleche/input
            console.log('swipeleft');
        } else if (swipe && upY > downY + threshold) {
          inputDirection = 1;
          miss(); // fonction de comparaison fleche/input
            console.log('swipeDown');
        } else if (swipe && upY < downY - threshold) {
          inputDirection = 0;
          miss(); // fonction de comparaison fleche/input
          console.log('swipeUp');
        } else if (swipe && upX > downX + threshold) {
          inputDirection = 3;
          miss(); // fonction de comparaison fleche/input
          console.log('swipeRight');
        }
      }
    });

    //
    // var posterTest = new Posters (0, this.matter.add.sprite(500, 500, 'sheetPosters', 'Poster1.png', {shape: postersShape.Poster1}));
    //
    chrono = this.add.text(-100,-100, temps3, { fontFamily : 'Streamster', fontSize : '150px', fill: '#fff', padding: chronoImage}); // affichage chrono
    //
    timedEvent = this.time.addEvent({ delay: 1000, callback: decompte3, callbackScope: this, repeat: 9 }); // décompte et arrêt du chrono
    //

  } // accolader fin create

  update(){
    if (isComplete == 1 || isMissed == 1) { // creation de fleches aléatoire
        arrowCreation.call(this);
        isComplete = 0; isMissed = 0;
    };
    //
    if (swippingBarrier == 0) {
          scoringPoints(); // fonction de comparaison fleche/input joueur
    }

    if (sceneswitch == 5) { // changement de scene à la fin du décompte
        this.scene.start('Final_Screen');
        music.stop();
    }
    //

      } // accolade fin update


}
