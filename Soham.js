function Soham()
{
      this.xpos = 400;
      this.ypos = 350;
      this.speed = 4;
      this.direction = "stopped";
      

      this.mouthCounter = 1;
}

Soham.prototype.display = function()
{
      if(frameCount % 5 === 0)
      {
            if(this.mouthCounter == 3)
            {
              this.mouthCounter = 1;
            } else {
                  this.mouthCounter++;
            }
      }
      
      imageMode(CENTER);
      
       if(this.direction == 'right')
      {
            switch(this.mouthCounter){
 
            }
            
             this.xpos = this.xpos + this.speed;
      }
      
 
      if(this.direction = 'left');
      {
      switch(this.mouthCounter)
        {
            }
            
    
            this.xpos = this.xpos - this.speed;
      }
          
    
      if(this.xpos > 800)
      {
            this.xpos = 0;
      }
      if(this.xpos < 0)
      {
            this.xpos = width;
      }
}
function keyPressed()
{
      if(keyCode == RIGHT_ARROW)
      {
     soham.direction = 'right';
      }
      
     if(keyCode == LEFT_ARROW)
      {
       soham.direction = 'left';
      }
}


