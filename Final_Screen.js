class Final_Screen extends Phaser.Scene {
  constructor(){
    super("Final_Screen")
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
    text = this.add.text(150,540, "Merci d'avoir joué, votre score final : " + score, { fontFamily : 'Streamster', fontSize : '100px', fill: '#fff'}); // affichage chrono
    //
    timedEvent = this.time.addEvent({ delay: 2000, callback: show, callbackScope: this, repeat: 0 });
  } // accolader fin create

  update(){
    if (sceneswitch == 3) {
        this.scene.start('Zones');
        music.stop();
    }
    if (bestScore < score) {
        bestScore = score;
    }
      } // accolade fin update

}
