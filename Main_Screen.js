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
  this.load.atlas('sheet', 'assets/PNGs/_MainScreen/sheet.png', 'assets/PNGs/_MainScreen/sheet.json')

}

create(){
    shapes = this.cache.json.get('howto');

    backgroundTitle = this.add.image(960,540,'backgroundTitle'); // implémentation asset
//
    startButton = new Buttons (1, this.matter.add.sprite(650,480,'sheet', 'Start.png', {shape: shapes.start}));
    instructionsButton = new Buttons (2, this.matter.add.sprite(665,670,'sheet', 'Instructions.png', {shape: shapes.instructions}));
    explications = new Buttons (3, this.add.image(960,540,'explications').setActive(false).setVisible(false));
    retour = new Buttons (4, this.add.image(1690,990,'retour').setActive(false).setVisible(false));

}

update(){
        if (sceneswitch == 1) {
            this.scene.start('zones');
        }
    }


}
