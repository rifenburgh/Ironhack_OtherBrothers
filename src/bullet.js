function Enemy() {
  this.x = 750;
  this.y = 50;
}
Enemy.prototype.update = function() {
  if (this.x < 5) {
    context.fillRect(this.x, this.y, 33, 30);
    return;
  }
  var bullet = document.getElementById("bullet");
  context.fillRect(this.x, this.y, 33, 30);
  this.x -= 5;
  context.drawImage(bullet, this.x, this.y);
  //Test Mario's range against the left side of the bullet
  if (((mario.x + 30) === (this.x)) && ((mario.y > this.y) && (mario.y < (this.y + 30)))) {
    ion.sound.play("die");
    console.log("Hit Bullet!");
  }
  // console.log(mario.x, mario.y, this.x, this.y);
};

Enemy.prototype.move = function() {
  //Delete Current Flying Bullet
  context.fillRect(this.x, this.y, 33, 30);
  //Create generation point for the new bullet
  this.y = (Math.floor(Math.random() * 350));
  this.x = 800;
};
