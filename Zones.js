class Zones extends Phaser.Scene {
  constructor(){
    super("Zones")
  }


  init(data){
  }


  preload(){
      this.load.image('backgroundCity','assets/PNGs/_Zones/VilleTexteZones.png'); // fond d'écran
      this.load.image('gym','assets/PNGs/_Zones/Gym.png'); // ajout de la zone jouable

  } // accolade fin preload


  create(){
      backgroundCity = this.add.image(960,540,'backgroundCity');
      //
      gym = new Buttons (5, this.add.sprite(300,900,'gym'));
      //
      music = this.sound.add('backgroundMusic'); // music
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
  } // accolader fin create

  update(){
    if (sceneswitch == 2) {
        this.scene.start('Transi1');
        music.stop();
    }
      } // accolade fin update


}
