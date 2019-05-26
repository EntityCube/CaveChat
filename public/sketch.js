var socket;

function setup() {
  createCanvas(400, 400)
  // default background color


  background(color(55, 55, 55));
  noStroke()

  socket = io.connect('https://137.97.55.15:3000')
  socket.on('mouse', newDrawing)

}

function newDrawing(data) {
  console.log('new data')
  fill('white')
  ellipse(data.x, data.y, 10, 10)
}

function mouseDragged() {

  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data)

  console.log('Sending:', mouseX, ',', mouseY)

  fill('grey')
  ellipse(mouseX, mouseY, 10, 10)
}

function draw() {}