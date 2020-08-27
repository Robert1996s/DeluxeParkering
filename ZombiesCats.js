

var x = 0;
var y = 0;

var catx;
var caty;

var zombiex = 0;
var zombiey =0;

nopicture();


function nopicture () {
    
        document.getElementById('candle').style.display = "none";
        document.getElementById('cat').style.display = "none";
        document.getElementById('zombie').style.display = "none";

}

function morex () {
    if (x <= 5) {
    ++x; 
    console.log(x,y);
    showImage(x,y);
    }
}


function lessx () {
    if (x > 0) {
    --x; 
    console.log(x,y);
    showImage(x,y);
    }
}

function morey () {
    if (y <= 5) {
    ++y; 
    console.log(x,y);
    showImage(x,y);
    }

}

function lessy () {
    if (y > 0) {
    --y; 
    console.log(x,y);
    showImage(x,y);
    }

}

newCat();

function newCat() {

    catx = Math.floor(Math.random() * 6);
    caty = Math.floor(Math.random() * 6);
    document.getElementById('cat').style.display = "block";
}

newZombie();

function newZombie() {

    zombiex = Math.floor(Math.random() * 6);
    zombiey = Math.floor(Math.random() * 6);
    document.getElementById('zombie').style.display = "block";
}

checkforzombie();

function checkforzombie () {
    if (zombiex == x && zombiey == y) {
        document.getElementById('zombie').style.display = "block";
    }
} 

moveZombie();

function moveZombie (){
    if (Math.floor(Math.random() * 6 ) > 4) {
    if (zombiex > x) {
        --zombiex;
    }
    if (zombiex < x) {
        ++zombiex;
    }
    if (zombiey > y) {
        --zombiey;
    }
    if (zombiey < y) {
        ++zombiey;
    }
 }
}


/*function showCat {
    if (catx == x && caty ==y) {
        document.getElementById('cat').style.display = "block";
    }
}

 /*function showTorch {
    if (x == 1 && y == 0) {
        document.getElementById('candle').style.display = block;
    }
} */



  //if (x === 1 && y === 0) {
    document.getElementById('candle').style.left = "400px";

//}



function showImage(x,y) {
    document.getElementById("spelplan").style.backgroundImage = "url('" + map[x][y] + "')";
    }


var map = [
    ["Cave.jpg","Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg"],
    ["Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg"],
    ["Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Cave.jpg","Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg"],
    ["Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg", "Cave.jpg", "Caveklipp1.jpg"] ]; 