// *** 1 ***
function rotate(arr, num){
    var shiftNum = -num % arr.length;
    return arr.slice(shiftNum).concat(arr.slice(0, shiftNum));
}

rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]


// *** 2 ***
function makeXOGrid(x, y){
    var arr = [];
    var bool = false;
    for (var i = 0; i < x; i++){
        var temp = [];
        for (var j = 0; j < y; j++){
            if (!bool){
                temp.push("X");
            } else {
                temp.push("O");
            }
            bool = !bool;
        }
        arr.push(temp);
    }
    return arr;
}
makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/