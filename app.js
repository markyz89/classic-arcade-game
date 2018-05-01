// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += (this.speed*dt);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

        // no need for speed as movement is not automatic
var Player = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png'; 
}

Player.prototype.update = function (dt) {
    // do I actually need to include something here?  
}

Player.prototype.handleInput = function (keyPress) {
     if (keyPress == 'left') {
        console.log("pressed left!");
        this.x -=100;
    }

    if (keyPress == 'right') {
        console.log("pressed right!");
        this.x +=100;
    }

    if (keyPress == 'up') {
        console.log("pressed up!");
        this.y -=80;
    }

    if (keyPress == 'down') {
        console.log("pressed down!");
        this.y +=80;
    }



};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// create a resetPlayer() method
// this can handle all of the collision logic






// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player (200, 380);
var allEnemies = [];


function createEnemies () {
    console.log('creating enemies')
    for (var i = 0; i < 10; i++) {
    allEnemies[i] = new Enemy(enemySpawn(), enemyLocation(), enemySpeed());
    // console.log(allEnemies[i].y);
    console.log('bug logged');


  

    }
}

createEnemies();
    // have all roaches appeared? create more then
window.setInterval(function checkRoaches() {
            var count = 0;
            for (var k = 0; k < allEnemies.length; k++) {
                if (allEnemies[k].x> 505) {
                    count += 1;
                    if (count > 8) {
                        createEnemies();
                        count = 0;
                        }
                    }
                } 
  console.log("checking...")
}, 500);






// if(allEnemies.y.every(checkRoaches) == true) {
//     console.log('more enemies!');
//     createEnemies();
// };



var roachSpeed;
function enemySpeed () {
    roachSpeed = (Math.random()*250)+100;
    return roachSpeed; 


}

// first enemy y position is 55
// 2nd 140
// 3rd 225
// 

function enemyLocation() {
    tier = Math.round(Math.random()*3);
    if (tier === 3) {
        return 225;
    }
    else if (tier === 2) {
        return 140;
    }
    else if (tier === 1) {
        return 55;
    }
    else {
        console.log("got a zero");
        return enemyLocation();
    }
}

var spawn;

function enemySpawn() {
     spawn = -Math.round(Math.random()*2000);
         for (var j = 0; j < allEnemies.length; j++) {
            if (spawn > (allEnemies[j].x - 100) && spawn < (allEnemies[j].x + 100)) {
                enemySpawn();
            } else {
                return spawn;
            }           
         }
     }







// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    console.log("something pressed");
});
