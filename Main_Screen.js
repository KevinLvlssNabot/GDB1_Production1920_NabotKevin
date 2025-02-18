class Main_Screen extends Phaser.Scene {
  constructor(){
    super("main_screen")
  }


init(data){
}

preload(){
  this.load.image('backgroundTitle','assets/PNGs/_MainScreen/BackgroundTitle.png'); // fond d'écran
  // boutons
  this.load.image('startButton','assets/PNGs/_MainScreen/Start.png');
  this.load.image('instructionsButton','assets/PNGs/_MainScreen/Instructions.png');
  this.load.image('explications','assets/PNGs/_MainScreen/Explications.png');
  this.load.image('retour','assets/PNGs/_MainScreen/Retour.png');

  this.load.json('howto', 'assets/PNGs/_MainScreen/HowTo.json');
  this.load.atlas('sheet', 'assets/PNGs/_MainScreen/sheet.png', 'assets/PNGs/_MainScreen/sheet.json');

  this.load.audio('backgroundMusic2','music2.mp3'); // musique de fond
  this.load.audio('backgroundMusic','music.mp3');
  this.load.audio('backgroundMusic_Pompes','music_pompes.mp3');
  this.load.audio('backgroundMusic_Transi1','music_transi1_2.mp3');
  this.load.audio('backgroundMusic_Posters','music_posters.mp3');
  this.load.audio('cutting','cutting.mp3');
  this.load.audio('backgroundMusic_TransiFinal','music_transi_boss.mp3');
  this.load.audio('backgroundMusic_Battle','music_battle.mp3');
  this.load.spritesheet('jaz_dance','assets/Spritesheets/Jaz_Dance2.png', {frameWidth: 667, frameHeight: 711});
  this.load.spritesheet('fro_dance1','assets/Spritesheets/Fro_Dance.png', {frameWidth: 409, frameHeight: 670, spacing: 20});
  this.load.spritesheet('fro_dance2','assets/Spritesheets/Fro_Dance2.png', {frameWidth: 578, frameHeight: 673, padding: 1});
}

create(){
    shapes = this.cache.json.get('howto');

    backgroundTitle = this.add.image(960,540,'backgroundTitle'); // implémentation asset
//
    startButton = new Buttons (1, this.matter.add.sprite(650,480,'sheet', 'Start.png', {shape: shapes.start}));
    instructionsButton = new Buttons (2, this.matter.add.sprite(665,670,'sheet', 'Instructions.png', {shape: shapes.instructions}));
    explications = new Buttons (3, this.add.image(960,540,'explications').setActive(false).setVisible(false));
    retour = new Buttons (4, this.add.image(1690,990,'retour').setActive(false).setVisible(false));

  //

  music = this.sound.add('backgroundMusic2'); // music
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
    cat1 = this.matter.world.nextCategory();
    //
}

update(){
        if (sceneswitch == 1) {
            this.scene.start("Zones");
            music.stop();
        }
    }


}
