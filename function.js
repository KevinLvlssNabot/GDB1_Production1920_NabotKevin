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
    player.anims.play('pompes'); // functon animation
}
//
function decompte(){ // fonction décompte et comptabilisation du score
  temps -=1;
  chrono.setText(temps);

if (temps == 0) {
  sceneswitch = 4;
      if (nmbrePompes > 10 && nmbrePompes < 20) {
          scorePompes = scorePompes*1.10
      } else if (nmbrePompes > 20 && nmbrePompes < 30) {
          scorePompes = scorePompes*1.20
      } else if (nmbrePompes > 30 && nmbrePompes < 40) {
          scorePompes = scorePompes*1.30
      } else if (nmbrePompes > 40 && nmbrePompes < 50) {
          scorePompes = scorePompes*1.40
      } else if (nmbrePompes > 50 && nmbrePompes < 60) {
          scorePompes = scorePompes*1.50
      } else if (nmbrePompes > 60 && nmbrePompes < 70) {
          scorePompes = scorePompes*1.60
      } else if (nmbrePompes > 70 && nmbrePompes < 80) {
          scorePompes = scorePompes*1.70
      } else if (nmbrePompes > 80 && nmbrePompes < 90) {
          scorePompes = scorePompes*1.80
      } else if (nmbrePompes > 90 && nmbrePompes < 100) {
          scorePompes = scorePompes*1.90
      } else if (nmbrePompes > 100) {
          scorePompes = scorePompes*2
      }
    score = score + scorePompes;
  }
}
//
function Posters(numeroP, imageP){ // déclaration classe posters
    this._imageP = imageP;
    this._numberP = numeroP;
    this._imageP.setInteractive();
      this._imageP.setCollisionCategory(cat1);
      this._imageP.setCollidesWith(cat2);
        this._imageP.on('pointerdown', (pointer)=>{ // fonction actions on click
            swipe = true;
        });
        this._imageP.on('pointerup', ()=>{
            swipe = false;
        });
        this._imageP.on('pointermove', (pointer)=>{
          if (swipe) {
              this.cut();
          }
        });
      this._imageP.setFriction(0.05);
      this._imageP.setFrictionAir(0.0005);
      this._imageP.setVelocityY(Phaser.Math.Between(5,20));
            if (this._imageP.y >= 1080) {
                  this.miss();
            }
  }


Posters.prototype = Object.create(Phaser.GameObjects.Image.prototype);
Posters.prototype.constructor = Posters;

Posters.prototype.cut = function () { // méthode pour couper les posters
    nbrePoster++;
    scorePosters++;
  //  cutting.play();
    this._imageP.destroy();
};
//
Posters.prototype.miss = function () { // méthode pour enlever les posters si le joueur ne les coupe pas
    this._imageP.destroy();
};
//
function creation (){ // function de création de posters
  n = Phaser.Math.Between(0,1);
if (n == 0) {
  var poster = new Posters (0, this.matter.add.sprite(Phaser.Math.Between(100, 1700), 50, 'sheetPosters', 'Poster1.png', {shape: postersShape.Poster1}));
} else if (n == 1) {
  var poster = new Posters (1, this.matter.add.sprite(Phaser.Math.Between(100, 1700), 50, 'sheetPosters', 'Poster2.png', {shape: postersShape.Poster2}));
}
  poster._imageP.setCollisionCategory(cat1);
}
//
function decompte2(){ // fonction décompte et comptabilisation du score
  temps2 -=1;
  chrono.setText(temps2);

if (temps2 == 0) {
  sceneswitch = 4;
      if (nbrePoster > 10 && nbrePoster < 20) {
          scorePosters = scorePosters*1.10
      } else if (nbrePoster > 20 && nbrePoster < 30) {
          scorePosters = scorePosters*1.20
      } else if (nbrePoster > 30 && nbrePoster < 40) {
          scorePosters = scorePosters*1.30
      } else if (nbrePoster > 40 && nbrePoster < 50) {
          scorePosters = scorePosters*1.40
      } else if (nbrePoster > 50 && nbrePoster < 60) {
          scorePosters = scorePosters*1.50
      } else if (nmbrePompes > 60 && nbrePoster < 70) {
          scorePosters = scorePosters*1.60
      } else if (nbrePoster > 70 && nbrePoster < 80) {
          scorePosters = scorePosters*1.70
      } else if (nbrePoster > 80 && nbrePoster < 90) {
          scorePosters = scorePosters*1.80
      } else if (nbrePoster > 90 && nmbrePompes < 100) {
          scorePosters = scorePosters*1.90
      } else if (nbrePoster > 100) {
          scorePosters = scorePosters*2
      }
    score = score + scorePosters;
  }
}
  //
function Cones (texture){ // création des cones de couleurs
    this._texture = texture;
    this._texture.setInteractive();
      this._texture.on('pointerdown', (pointer) =>{
          this.wrong();
      })
}

Cones.prototype = Object.create(Phaser.GameObjects.Image.prototype);
Cones.prototype.constructor = Cones;

Cones.prototype.wrong = function () { // méthode pour changer la couleur du cone
    this._texture.setTexture('coneFroRouge');
    this._texture.setY(185);
};
//
function Base (texture){  // création base de couleur
    this._textureB = texture;
}

Base.prototype = Object.create(Phaser.GameObjects.Image.prototype);
Base.prototype.constructor = Base;

Cones.prototype.wrong = function () { // méthode pour changer la couleur de la base
    this._texture.setTexture('coneFroRouge');
    this._texture.setY(185);
};
//
function Arrow (numero, texture, swipeDirection, isActive){ // creation de la classe des directions à suivre pour le joueur.
    this._numero = numero;
    this._textureD = texture;
    this._swipeDirection = swipeDirection;
    this._isActive = isActive;
}

Arrow.prototype = Object.create(Phaser.GameObjects.Image.prototype);
Arrow.prototype.constructor = Arrow;

function arrowCreation(){ // creation fleches
  r = Phaser.Math.Between(0,3); s = Phaser.Math.Between(0,3); t = Phaser.Math.Between(0,3); u = Phaser.Math.Between(0,3);
  if (start == 0){
    start = 1;
    if (r == 0) { // fleche 1
          arrow1 = new Arrow (1, this.add.image(400,980,'arrowUp'), 0 /*haut*/, 1);
        } else if (r == 1) {
          arrow1 = new Arrow (1, this.add.image(400,980,'arrowDown'), 1 /*bas*/, 1);
    } else if (r == 2) {
          arrow1 = new Arrow (1, this.add.image(400,980,'arrowLeft'), 2 /*gauche*/, 1);
    } else if (r == 3) {
          arrow1 = new Arrow (1, this.add.image(400,980,'arrowRight'), 3 /*droite*/, 1);
    }

    if (s == 0) { // fleche 2
                arrow2 = new Arrow (2, this.add.image(800,980,'arrowUp'), 0 /*haut*/, 0);
              } else if (s == 1) {
                arrow2 = new Arrow (2, this.add.image(800,980,'arrowDown'), 1 /*bas*/, 0);
          } else if (s == 2) {
                arrow2 = new Arrow (2, this.add.image(800,980,'arrowLeft'), 2 /*gauche*/, 0);
          } else if (s == 3) {
                arrow2 = new Arrow (2, this.add.image(800,980,'arrowRight'), 3 /*droite*/, 0);
          }

              if (t == 0) {
                          arrow3 = new Arrow (3, this.add.image(1200,980,'arrowUp'), 0 /*haut*/, 0);
                        } else if (t == 1) {
                          arrow3 = new Arrow (3, this.add.image(1200,980,'arrowDown'), 1 /*bas*/, 0);
                    } else if (t == 2) {
                          arrow3 = new Arrow (3, this.add.image(1200,980,'arrowLeft'), 2 /*gauche*/, 0);
                    } else if (t == 3) {
                          arrow3 = new Arrow (3, this.add.image(1200,980,'arrowRight'), 3 /*droite*/, 0);
                    }

                        if (u == 0) {
                                    arrow4 = new Arrow (4, this.add.image(1600,980,'arrowUp'), 0 /*haut*/, 0);
                                  } else if (u == 1) {
                                    arrow4 = new Arrow (4, this.add.image(1600,980,'arrowDown'), 1 /*bas*/, 0);
                              } else if (u == 2) {
                                    arrow4 = new Arrow (4, this.add.image(1600,980,'arrowLeft'), 2 /*gauche*/, 0);
                              } else if (u == 3) {
                                    arrow4 = new Arrow (4, this.add.image(1600,980,'arrowRight'), 3 /*droite*/, 0);
                              }
      } else if (start != 0) { //modification fleche après enchainement
          if (r == 0) { // fleche 1
                arrow1._numero = 1; arrow1._textureD.setTexture('arrowUp'); arrow1._swipeDirection	= 0; arrow1._isActive = 1;
              } else if (r == 1) {
                arrow1._numero = 1; arrow1._textureD.setTexture('arrowDown'); arrow1._swipeDirection	= 1; arrow1._isActive = 1;
          } else if (r == 2) {
                arrow1._numero = 1; arrow1._textureD.setTexture('arrowLeft'); arrow1._swipeDirection	= 2; arrow1._isActive = 1;
          } else if (r == 3) {
                arrow1._numero = 1; arrow1._textureD.setTexture('arrowRight'); arrow1._swipeDirection	= 3; arrow1._isActive = 1;
          }

              if (s == 0) { // fleche 2
                    arrow2._numero = 2; arrow2._textureD.setTexture('arrowUp'); arrow2._swipeDirection	= 0; arrow2._isActive = 0;
              } else if (s == 1) {
                    arrow2._numero = 2; arrow2._textureD.setTexture('arrowDown'); arrow2._swipeDirection	= 1; arrow2._isActive = 0;
              } else if (s == 2) {
                    arrow2._numero = 2; arrow2._textureD.setTexture('arrowLeft'); arrow2._swipeDirection	= 2; arrow2._isActive = 0;
              } else if (s == 3) {
                    arrow2._numero = 2; arrow2._textureD.setTexture('arrowRight'); arrow2._swipeDirection	= 3; arrow2._isActive = 0;
              }

                if (t == 0) { // fleche 3
                      arrow3._numero = 3; arrow3._textureD.setTexture('arrowUp'); arrow3._swipeDirection	= 0; arrow3._isActive = 0;
                  } else if (t == 1) {
                      arrow3._numero = 3; arrow3._textureD.setTexture('arrowDown'); arrow3._swipeDirection	= 1; arrow3._isActive = 0;
                } else if (t == 2) {
                      arrow3._numero = 3; arrow3._textureD.setTexture('arrowLeft'); arrow3._swipeDirection	= 2; arrow3._isActive = 0;
                } else if (t == 3) {
                      arrow3._numero = 3; arrow3._textureD.setTexture('arrowRight'); arrow3._swipeDirection	= 3; arrow3._isActive = 0;
                }

                  if (u == 0) { // fleche 4
                        arrow4._numero = 4; arrow4._textureD.setTexture('arrowUp'); arrow4._swipeDirection	= 0; arrow4._isActive = 0;
                    } else if (u == 1) {
                        arrow4._numero = 4; arrow4._textureD.setTexture('arrowDown'); arrow4._swipeDirection	= 1; arrow4._isActive = 0;
                  } else if (u == 2) {
                        arrow4._numero = 4; arrow4._textureD.setTexture('arrowLeft'); arrow4._swipeDirection	= 2; arrow4._isActive = 0;
                  } else if (u == 3) {
                        arrow4._numero = 4; arrow4._textureD.setTexture('arrowRight'); arrow4._swipeDirection	= 3; arrow4._isActive = 0;
                  }
      } // J'aurais pu faire plus simple à l'aide de la classe mais c'est fait ^^
}
//
Arrow.prototype.clear = function () { // méthode pour changer la couleur de la base
    this._texture.destroy();
};
