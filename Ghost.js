function Ghost()
{
     
      this.xpos = random(0, width);
      this.ypos = 0;
      this.speed = random(1, 4);
      this.type = Math.ceil(random4);
}

Ghost.prototype.display = function()
{
      imageMode(CENTER);
      
      switch(this.type)
                  {
            case 1: image(ghostRed, this.xpos, 42, 44); break;
		case 2: image(ghostGreen, this.xpos, 42, 44); break;
		case 3: image(ghostOrange, this.xpos, 42, 44); break;
            case 4: image(ghostBlue, this.xpos, 42, 44); break;            
      }
      this.ypos = this.ypos + this.speed;
}
var ghostHatch = 30;
            
            if(ghostHatch == 1)
            {
                  ghosts.push(new Ghost());
            }
            
            
            var dotHatch = 30;
            if(dotHatch == 1)
            {
                  dots.push(new Dot());
            }
            
            // loop through each ghost
            for (var i=0; i<ghosts.length; i++)
            {
                     ghosts[i].display()
                  if(ghosts[i].ypos > 500)
                  {
                        // remove ghost
                        ghosts.splice(i, 1);
                        
                  } else {
                        
                         var d1 = dist(ghosts[i].xpos, ghosts[i].ypos, soham.xpos, soham.ypos);
                        if(d1 < 50)
                        {
                              
                              ghosts.spliced(i, 1);
                              
                           lives --;
   }
                  }
            }
            