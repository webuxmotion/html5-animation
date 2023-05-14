function Oval ({ x, y }) {
    this.ball = new Ball();
    this.ball.radius = 4;
    this.angle = 0;
    this.centerX = x;
    this.centerY = y;
    this.radiusX = 200;
    this.radiusY = 100;
    this.speed = 0.1;
    this.numSteps = 50;
    this.steps = [];
    this.angleStep = (2 * Math.PI) / this.numSteps;
  }
  
  Oval.prototype.draw = function (context) {
    this.ball.x = this.centerX + Math.cos(this.angle) * this.radiusX;
    this.ball.y = this.centerY + Math.sin(this.angle) * this.radiusY;

    if (
      this.angle >= this.steps.length * this.angleStep &&
      this.steps.length < this.numSteps
    ) {
      this.steps.push({
        x: this.ball.x,
        y: this.ball.y,
      });
    } else if (this.steps.length === 0) {
      this.steps.push({
        x: this.ball.x,
        y: this.ball.y,
      });
    } else if (this.steps.length === this.numSteps) {
      context.beginPath();
      context.moveTo(this.steps[0].x, this.steps[0].y);
      this.steps.forEach((el, idx) => {
        if (idx !== 0) {
          context.lineTo(el.x, el.y);
        }
      });
      context.lineTo(this.steps[0].x, this.steps[0].y);
      context.stroke();
    }
  
    this.angle += this.speed;
    this.ball.draw(context);
  };
  