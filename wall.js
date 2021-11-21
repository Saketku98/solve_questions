var n = 7;
var height = 100;
var width = 50;

function wallPaint(n, height, width) {   
    
    var areaOfWall = height * width; 
    
    if (areaOfWall % n == 0)          
        return areaOfWall / n;
    else
    return (areaOfWall/n)+1;
}

var totalWallPaint = wallPaint(n, height, width);  

console.log(totalWallPaint);