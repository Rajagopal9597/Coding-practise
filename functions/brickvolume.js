/*Brick Volume
A brick manufacturer approached us to help him develop a program which calculates cost to manufacture bricks for him. Default dimensions of the block are length = 100 units, width = 60 units and height = 40 units. And to manufacture 1 cubic unit costs him 0.00005 rupees. Sometimes the customers might ask him to manufacture custom bricks. Customer can ask either to change width or height or both of them.

Now we have to take total bricks count and dimensions of the brick and return the cost to manufacture them.

First line contains bricks count.

Second line contains y z dimensions of brick, which are width and height.

y z can be any positive integer, if he chooses default values then he chooses -1 for that dimension.

Input
10

-1 50

First line N positive intger. Total number of bricks.

Here he choose width default value which is 60, and for height he choose 50

Output
Single line returning the cost. This will be integer rounded to the closest integer.

Example
Input:

10

-1 30

Output:

90

Length will always be 100. If first element is -1 then width is 60, if second element is -1 then height is 40. He can choose one of them as -1 or both of them*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



// -------- Do NOT edit anything above this line ----------

// You should fill this functions using the volume and calculatePrice functions defined below this.
// dimensions is a list with 2 values width and height respectively
// brickCount is int representing total bricks
function calculateTotalPriceOfBricks(dimensions, brickCount){
	let width= dimensions[0], height = dimensions[1],length=100;
	if(width == -1 && height == -1) return calculatePrice(volume())*brickCount;
  else if(width >= 0 && height >= 0) return calculatePrice(volume(length,width,height))*brickCount;
  else if(width == -1 && height >=0) return calculatePrice(volume(length,width=60,height))*brickCount;
  else if(width >=0 && height == -1) return calculatePrice(volume(length,width,height=50))*brickCount;
}





// Do not change anything below this line
function volume(length=100,width=60,height=40){
  return length*width*height;
}

function calculatePrice(volume, price=0.00005){
	return Math.floor(volume*price);
}
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each]);
    }
    
}

let brickCount = parseInt(readLine());
dimensions = readLine().split(" ");
ConvertToNumber(dimensions);
totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
console.log(totalPrice);