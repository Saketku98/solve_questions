let cylinder = {
    "height": 28, "radius":7 
}

function volumeOfCylinder(height, radius) {  
    return (3.14) * radius * radius * height; 
}



function surfaceAreaOfCylinder(height, radius) {
   return (2 * (3.14) * radius * height) + (2 * (3.14) * radius * radius); 
}

var volume = volumeOfCylinder(cylinder.height, cylinder.radius); 
var surfaceArea = surfaceAreaOfCylinder(cylinder.height, cylinder.radius);  
console.log(volume);
console.log(surfaceArea);  