function Dot()
{
      this.xpos = random(0, 600);
      this.ypos = 0;
      this.speed = random(1, 4);
}

Dot.prototype.display = function()
{
      ellipseMode(CENTER);
      fil(200);
      noStroke();
      ellipse(this.xpos, this.ypos, 25, 25);
      this.ypos = this.ypos + this.speed;
}