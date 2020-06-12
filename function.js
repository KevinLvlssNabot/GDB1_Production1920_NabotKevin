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
  n = 0;
if (n == 0) {
  var poster = new Posters (0, this.matter.add.sprite(Phaser.Math.Between(100, 1700), 50, 'sheetPosters', 'Poster1.png', {shape: postersShape.Poster1}));
} else if (n == 1) {
  var poster = new Posters (1, this.matter.add.sprite(x, 50, 'sheetPosters', 'Poster2.png', {shape: postersShape.Poster2}));
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
