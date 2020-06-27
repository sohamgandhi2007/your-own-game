var soham;
var sohamImage;
var ghosts = [];
var dots = [];
var lives;
var score;
var ghostRed, ghostGreen, ghostBlue, ghostOrange;
var ghostBlueImage,ghostGreenImage,ghostRedImage,ghostOrangeImage;
var heartImage
var heart;
var gameStarted;

function prelod()
{
      
      ghostRed = loadImage('images/ghostRed.png');
      ghostGreen = loadImage('images/ghostGreen.png');
      ghostOrange = loadImage('images/ghostOrange.png');
      ghostBlue = loadImage('images/ghostBlue.png');
      
       soham = loadImage('images/soham.png');
      heart = loadImage('images/heart.png');
      
}

function setup()
{
      // set canvas size
      createCanvas(800,400);
      

      soham = new Soham();
      
      // default lives and score values
      lives = 3;
      score = 0;
      
      // create clear button
      startButton = createButton('Start Game');
      startButton.position(375, 200);
      startButton.mousePressed(startGame);
      
      //set gameStarted equal to false
      gameStarted = false;
      
}

function draw()
{
      background("red");

      
      if(gameStarted == true)
      {
            // hide start button
            startButton.hide();
            
            // display score
            fill(200);
            noStroke();
            textSize(24);
            text("Score: " + score, 30, 50);
            
            // display number of lives
            switch(lives)
                        {
                  case 3:
                        image(heart, 650, width);
                        image(heart, 690, width);
                        image(heart, 730, width);
                  break;
                  case 2:
                        image(heart, 690, 30);
                        image(heart, 730, 30);
      		break;
                  case 1:
                        image(heart, 730, 30);
      		break;
            }
            
            
            soham.display();
            
            // loop through each dot
            for (var j=0; j<dots.length; j++)
            {
                  //display dots
                  dots[j].display();
                  
                  // check if dot reaches bottom of screen
                  if(dots[j].ypos > 500)
                  {
                        //remove dot
                        dots.splice(j, 1);
                        
                  } else {
                        
var d2 = dist(dots[j].xpos, dots[j].ypos, soham.xpos, soham.ypos);
                        if(d2 < 25)
                        {
                              // remove dot
                              dots.splice(j, 1);
                              
                              // increase score by one
                              score++;
                              
                       }
                  }
            }
            
            // check for game over
            if(lives <= 0)
            {
                  // reset lives and score
                  lives = 3;
                  lives = 0;
                  
                  soham.xpos = 400;
                  soham.direction = "stopped";
                  
                  ghosts = [];
                  dots = [];
                  
                  gameStarted = false;
            }
      
      } else {
            
            startButton.show();
            
      }
drawSprites()
}

function startGame()
{
      gameStarted = true;
      
     
}

