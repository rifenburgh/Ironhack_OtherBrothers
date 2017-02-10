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

}

Italian.prototype.update = function() {
  var img = document.getElementById("marioStanding");
  console.log("Mario Updating");
  context.fillStyle = "#5c94fc";
  context.fillRect(this.x, this.y, 30, 30); // context.drawImage(imgNothing, this.x, this.y);

  if (this.y >= 350) {
    this.y = 350;
  }
  else if (this.y < 350) {
    this.y += 1;
  }
  context.drawImage(img,this.x,this.y);
};
Italian.prototype.move = function (ev) {
  //move the italian

};



var update = function () {
    mario.update();
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
document.body.appendChild(canvas);
animate(step);
