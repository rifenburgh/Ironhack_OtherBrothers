$("document").ready(function(){

var animate = window.requestAnimateFrame = function (callback) {
  window.setTimeout(callback, 1000/30);

  //step();
};



var canvas = document.createElement("canvas");
var width = 800;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');


var render = function () {
    context.fillStyle = "#5c94fc";
    mario.update();
    //context.fillRect(0, 0, width, height);
};


window.onload  = function() {
  //animate();
  context.fillStyle = "#5c94fc";
  context.fillRect(0, 0, 800, 400)
  context.fillStyle = "black";
  context.fillRect(0, 380, 800, 20);
  render(step);
  console.log("Animating");
};

function step() {
  render();
}

function Italian() {
  this.x = 30;
  this.y = 1;
  //RIGHT is 1
  //LEFT is 2
  this.direction = 1;
}

Italian.prototype.update = function() {
  var imgStanding = document.getElementById("marioStanding");
  var imgJumping = document.getElementById("marioJumping");
  var imgStandingLeft = document.getElementById("marioStandingLeft");
  var imgJumpingLeft = document.getElementById("marioJumpingLeft");
  var img;


  context.fillStyle = "#5c94fc";
  context.fillRect(this.x, this.y, 30, 30); // context.drawImage(imgNothing, this.x, this.y);
  if ((this.y >= 350) && (this.direction === 1)){
    this.y = 350;
    img = imgStanding;
  } else if ((this.y >= 350) && (this.direction === 2)) {
    this.y = 350;
    img = imgStandingLeft;
  } else if ((this.y < 350) && (this.direction === 1)) {
    this.y += 1;
    img = imgJumping;
  } else if ((this.y < 350) && (this.direction === 2)) {
    this.y += 1;
    img = imgJumpingLeft;
  }
  context.drawImage(img,this.x,this.y);
};

Italian.prototype.move = function (ev) {
  //move the italian
  context.fillRect(this.x, this.y, 30, 30);
  if (this.y < 30) {
    this.y = 30;
  } else {
  this.y -= 50;
  }
};

Italian.prototype.moveLeft = function(ev) {
  this.direction = 2;
  if (this.x > 30) {
    context.fillRect(this.x, this.y, 30, 30);
    this.x -= 10;
  }
};
Italian.prototype.moveRight = function(ev) {
  this.direction = 1;
  if (this.x < 770) {
    context.fillRect(this.x, this.y, 30, 30);
    this.x += 10;
  }
};


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

var update = function () {
    mario.update();
    bullet.update();
    bullet1.update();
    bullet2.update();
    bullet3.update();
    bullet4.update();
    // player.update();
    // computer.update(ball);
    // ball.update(player.paddle, computer.paddle);
};

var step = function () {
    update();
    render();
    animate(step);
};

var mario = new Italian();
var bullet = new Enemy();
var bullet1 = new Enemy();
var bullet2 = new Enemy();
var bullet3 = new Enemy();
var bullet4 = new Enemy();
bullet1.move();
bullet2.move();
bullet3.move();
bullet4.move();
document.body.appendChild(canvas);
animate(step);

$("document").ready(function() {
  $(document).keydown(function(ev) {
    var acceptableKeys = [32, 66, 37, 39];
    if (!acceptableKeys.includes(ev.keyCode)) {
      return;
    }
    ev.preventDefault();
    switch(ev.keyCode) {
      case 32:
        mario.move();
        break;
      case 66:
        bullet.move();
        break;
      case 37:
        mario.moveLeft();
        break;
      case 39:
        mario.moveRight();
        break;
    }
  });
});
});
