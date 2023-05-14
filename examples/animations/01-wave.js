function Wave ({ centerY, reverse }) {
    this.angle = 0;
    this.range = 50;
    this.centerY = centerY;
    this.xspeed = 1;
    this.yspeed = 0.05;
    this.xpos = 0;
    this.ypos = centerY;
    this.reverse = reverse;
  }
  
  Wave.prototype.draw = function (context) {
    context.save();
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(this.xpos, this.ypos);
    this.xpos += this.xspeed;
    this.angle += this.yspeed;
    const sinOrCos = this.reverse ? Math.cos(this.angle) : Math.sin(this.angle);
    this.ypos = this.centerY + sinOrCos * this.range;
    context.lineTo(this.xpos, this.ypos);
    context.stroke();
    context.restore();
  };
  