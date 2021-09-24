var ball = document.getElementById('ball');
var velocity = 30;
var positionX = 0;
var positionY = 0;
var reverse = false;

const changeColor = (domElement) => {
  domElement.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
}


function moveBall() {
  var Xmin = 0;
  var Xmax = 600;
  var Ymin = 0;
  var Ymax = 600;

  if(reverse == false) {
    positionX += velocity;
    positionY += velocity;
  } else {
    positionX -= velocity;
    positionY -= velocity;
  };
  if(positionX > Xmax || positionX == Xmin) {
    reverse = !reverse;
    changeColor(ball);
  };
  document.body.style.background = "yellow";
  ball.style.top = positionY + 'px';
  ball.style.left = positionX + 'px';
}

setInterval(moveBall, 100);