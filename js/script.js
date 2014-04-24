var gameTTT = angular.module('gameTTT', []);

gameTTT.controller('TicTacToeCtrl', function ($scope){


$scope.player = 1;
var moves = 0;

$scope.xWins = 0;
$scope.oWins = 0;
$scope.ties = 0;

// Start at player one
  $scope.togglePlayer = function(cellIndex)
  {
    if ($scope.board[cellIndex] == "")
      {
          if($scope.player == 1)
            {
    
              $scope.board[cellIndex] = 'X';
              console.log(cellIndex);
              moves++;
              winFunction();
              $scope.player = 2;
              
            } 
            else 
              {

				        $scope.board[cellIndex] = "O";
                console.log(cellIndex);
                moves++;
                winFunction();
                $scope.player = 1;
              }

      }	
    else 
      {     
        alert("Can't move there!");
      }			
    };

// var winner = function(){
//   if($scope.player ==1){
//     $scope.board = ['X','X','X','X','X','X','X','X','X'];
//     console.log('X wins!')
//   } else {
//     $scope.board = ['O','O','O','O','O','O','O','O','O'];
//     console.log('O wins!')
//   }
// }

  
    
var tieGame = function(){
  $scope.ties++;
}

var youWon = function(){
  if ($scope.player == 1){
    $scope.xWins++;
    $scope.board = ['X','X','X','X','X','X','X','X','X'];
    console.log('X wins!');
    document.getElementById('htmlBG').style.backgroundImage="url('../images/Xbg.png'), url('../images/xbg2.png');";
  }else{
    $scope.oWins++;
    $scope.board = ['O','O','O','O','O','O','O','O','O'];
    console.log('O wins!');
    document.getElementById('htmlBG').style.backgroundImage="url('../images/obg.png'), url('../images/obg2.png');";
  };
};


$scope.clearBoard = function(){
  $scope.board = ['','','','','','','','',''];
  moves = 0;
  $scope.player = 1;
}




 var winFunction = function()
        {
          if (moves > 4){

            if($scope.board[0] != '' && $scope.board[0] == $scope.board[1] && $scope.board[1] == $scope.board[2])
            {
              youWon();
            }
              else if($scope.board[3] != '' && $scope.board[3] == $scope.board[4] && $scope.board[4] == $scope.board[5])
            {
              youWon();
            }
              else if($scope.board[6] != '' && $scope.board[6] == $scope.board[7] && $scope.board[7] == $scope.board[8])
            {
              youWon();
            }
              else if($scope.board[0] != '' && $scope.board[0] == $scope.board[3] && $scope.board[3] == $scope.board[6])
            {
              youWon();
            }
              else if($scope.board[1] != '' && $scope.board[1] == $scope.board[4] && $scope.board[4] == $scope.board[7])
            {
              youWon();
            }
              else if($scope.board[2] != '' && $scope.board[2] == $scope.board[5] && $scope.board[5] == $scope.board[8])
            {
              youWon();
            }
              else if($scope.board[0] != '' && $scope.board[0] == $scope.board[4] && $scope.board[4] == $scope.board[8])
            {
              youWon();
            }
              else if($scope.board[2] != '' && $scope.board[2] == $scope.board[4] && $scope.board[4] == $scope.board[6])
            {
              youWon();
            }
              else if (moves == 9)
              {
              console.log("hi");
              tieGame();
              } 
          }
      };


}); // End of controller