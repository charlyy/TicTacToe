

function TicTacToeCtrl($scope){
	 $scope.board = ['','','','','','','','',''];
	//$scope.board = [0,0,0,0,0,0,0,0,0];

  $scope.player = 1;
// $scope.player1 = ;
// $scope.player2 = ;
// $scope.winners = [];
$scope.togglePlayer = function(cellIndex)
{
  if ($scope.board[cellIndex]===""){
  	
  	if($scope.player === 1){
      		
				//	$scope.player1.push(cellIndex);
				$scope.board[cellIndex]="X";
				//	console.log(player1);
     			$scope.player = 2;
   		 
        } else {
					
      			//	$scope.player2.push(cellIndex);
				$scope.board[cellIndex]="O";
				//	console.log(player2);
        		$scope.player = 1;}
  }	else {    
    console.log("Can't move there!");
  }			
};




//function setCell(x, value) {
    //    $scope.board[x] = value
    //}



} // End of controller