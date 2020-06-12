class Transi3 extends Phaser.Scene {
  constructor(){
    super("Transi3")
  }


  init(data){
  }


  preload(){
      this.load.image('backgroundImage3','assets/PNGs/_TransitionScreen/Transi3.png');
      this.load.image('boutonSuivant','assets/PNGs/_TransitionScreen/TransiBouton.png');

  } // accolade fin preload


  create(){
    backgroundImage = this.add.image(960,540,'backgroundImage3');// fond d'écran
    //
    suivant = new Buttons (6, this.add.sprite(1650,970,'boutonSuivant'));// bouton suivant
    //
    timedEvent = this.time.addEvent({ delay: 2000, callback: show, callbackScope: this, repeat: 0 });
    //
    music = this.sound.add('backgroundMusic_TransiFinal'); // music
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
        this.scene.start('Jeu3');
        music.stop();
    }
      } // accolade fin update


}
