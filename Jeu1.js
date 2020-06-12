class Jeu1 extends Phaser.Scene {
  constructor(){
    super("Jeu1")
  }


  init(data){
  }


  preload(){
      this.load.image('backgroundGym','assets/PNGs/_Scene1/Room.png');
      this.load.image('instructions','assets/PNGs/_Scene1/Instructiones.png');
      this.load.image('indications','assets/PNGs/_Scene1/Indicationes.png');
      this.load.image('chronoImage','assets/PNGs/_Scene1/Chrono.png');
      //
        this.load.spritesheet('fro_pompes','assets/Spritesheets/Fro_PompesCode.png',{frameWidth: 690, frameHeight: 551, spacing: 30});
      //
      this.load.animation('fro_pompes','Fro_pompes.json');

  } // accolade fin preload


  create(){
    // animations
    this.anims.create({
      key: 'pompes',
      frames: this.anims.generateFrameNumbers('fro_pompes', {start: 0, end: 19}),
      frameRate: 90,
      repeat: 0
    });
    //
    backgroundGym = this.add.image(960,540,'backgroundGym'); // fond d'écran
    //
    instructions = this.add.image(960,100,'instructions');
    indications = this.add.image(960,250,'indications');
    chronoImage = this.add.image(200,150,'chronoImage');
    //
    player = this.add.sprite(960,650,'fro_pompes'); // sprite
    //
    music = this.sound.add('backgroundMusic_Pompes'); // music
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
    this.input.on('pointerdown', function(){ // fonction gameplay (une pompe = anim & 1 point)
        instructions.setVisible(false);
        indications.setVisible(false);
        pompes();
        score++; nmbrePompes++;
    });
    //
    chrono = this.add.text(200,150, temps)

  } // accolader fin create

  update(){

      } // accolade fin update


}
