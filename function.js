function Buttons(numero, image){ // déclaration classe boutons
    this._number = numero;
    this._image = image;
    this._image.setInteractive();
    this._image.on('pointerdown', ()=>{ // fonction actions on click
        this.clicker();
    });
      if (this._number == 6) {
          this._image.setVisible(false).setActive(false);
      }
}

Buttons.prototype = Object.create(Phaser.GameObjects.Image.prototype);
Buttons.prototype.constructor = Buttons;

Buttons.prototype.clicker = function(){ // méthode classe bouton pour action on click.
    if (this._number == 1) {
        sceneswitch = 1;

    } else if (this._number == 2) {
        this._image.setVisible(false).setActive(false);
        startButton._image.setVisible(false).setActive(false);
        explications._image.setActive(true).setVisible(true);
        retour._image.setActive(true).setVisible(true);

    } else if (this._number == 4) {
          this._image.setVisible(false).setActive(false);
          startButton._image.setVisible(true).setActive(true);
          explications._image.setActive(false).setVisible(false);
          instructionsButton._image.setActive(true).setVisible(true);
    } else if (this._number == 5) {
        sceneswitch = 2;
    } else if (this._number == 6) {
        sceneswitch = 3;
    }
};
//
Buttons.prototype.showB = function (buttons){ // méthode pour dévoiler le bouton
    buttons._image.setVisible(true).setActive(true);
};
//
function show(){
    suivant._image.setVisible(true).setActive(true);
};
//


function Perso(sprite){ // déclaration classe perso
    this._sprite = sprite;
};
//
function pompes(){
    player.anims.play('pompes');
}
