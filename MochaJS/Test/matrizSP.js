//Saddle point of a matriz
var createMatrix = function(size){
	var board = [];
	var aleatorio =0; 
    for(var row = 0; row < size; row++){
        var rowCollection = [];
        for(var col = 0; col < size; col++){
        	aleatorio = Math.round(Math.random()*9);
            rowCollection[col] = aleatorio;
        }
        board[row] = rowCollection;
        //console.log(board);
    }
    return board;
};
var getMaxRow = function(row){			
	var ordeRowDes = row.sort(function(a, b){return b-a});
	return ordeRowDes[0];
};

var getMinCol = function(col){
	var orderColAsc = col.sort(function(a, b){return a-b});
	return orderColAsc [0];

};

var getRow = function(matrix,pos){
	var row=[];
	var auxCol=[];
	for (var i = 0; i <= matrix.lengh; i++) {
		auxCol= getCol(matrix,i);
		
	};
	return row.push(col[0]);
};
var getCol = function(matrix,pos){	
		return matrix[pos];
}

 var getSaddlePoint = function(size){
 	var matrix = createMatrix(size);
 	var col = [];
 	var row = [];
 	var minCol,maxRow;
 	var coodSaddle = [];
 	
 	for (var i = 0; i <size-1; i++) {
 		col = getCol(matrix,i);
 		row = getRow(matrix,i);
 		minCol= getMinCol(col);
 		maxRow= getMaxRow(row);
 		var counter = 0;

 		if(minCol===maxRow)
 		{
 			counter++;
 			coodSaddle.push(minCol.coodinates()); 			

 		}
 			return coodSaddle;
 		else 
 			return 'No Saddle Point';

 	};
 	
 };