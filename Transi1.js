class Transi1 extends Phaser.Scene {
  constructor(){
    super("Transi1")
  }


  init(data){
    temps = 10; nmbrePompes = 0;
  }


  preload(){
      this.load.image('backgroundImage','assets/PNGs/_TransitionScreen/Transi1.png');
      this.load.image('boutonSuivant','assets/PNGs/_TransitionScreen/TransiBouton.png');

  } // accolade fin preload


  create(){
    backgroundImage = this.add.image(960,540,'backgroundImage');// fond d'écran
    //
    suivant = new Buttons (6, this.add.sprite(1650,970,'boutonSuivant'));// bouton suivant
    //
    timedEvent = this.time.addEvent({ delay: 2000, callback: show, callbackScope: this, repeat: 0 });
    //
    music = this.sound.add('backgroundMusic_Transi1'); // music
    musicConfig = {
      mute: false,
      volume: 0.5,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0
      };
    music.play(musicConfig);

  } // accolader fin create

  update(){
    if (sceneswitch == 3) {
        this.scene.start('Jeu1');
        music.stop();
    }
      } // accolade fin update


}
