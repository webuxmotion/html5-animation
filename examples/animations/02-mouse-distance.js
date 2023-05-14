function MouseDistance ({ x, y, mouse }) {
    this.x = x;
    this.y = y;
    this.mouse = mouse;
  }
  
  MouseDistance.prototype.draw = function (context) {
    context.save();
    context.fillRect(this.x - 2, this.y - 2, 4, 4);
    
    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(this.x, this.y);
    context.lineTo(this.mouse.x, this.mouse.y);
    context.stroke();

    const dx = this.x - this.mouse.x;
    const dy = this.y - this.mouse.y;
    const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    
    context.font = "15px Arial";
    const textX = -dx * (distance / 2) / distance;
    const textY = -dy * (distance / 2) / distance;
    
    context.fillText(Math.floor(distance)  + 'px', this.x + textX - 10, this.y + textY - 10);

    context.restore();
  };
  