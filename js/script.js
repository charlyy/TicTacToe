var gameTTT = angular.module('gameTTT', []);

gameTTT.controller('TicTacToeCtrl', function ($scope){


$scope.player = 1;
var moves = 0;



  $scope.togglePlayer = function(cellIndex)
  {
    if ($scope.board[cellIndex] == "")
      {
          if($scope.player == 1)
            {
    
              $scope.board[cellIndex] = 'X';
              console.log(cellIndex);
              $scope.player = 2;
              moves++;
              winFunction();

              
            } 
            else 
              {

				        $scope.board[cellIndex] = "O";
                console.log(cellIndex);
				        $scope.player = 1;
                moves++;
                winFunction();

              }

      }	
    else 
      {     
        alert("Can't move there!");
      }			
    };
      //$scope.winner = function(player)
    



 var winFunction = function()
        {
          console.log("hello")

          if (moves > 4){
            console.log("hello1")
            if($scope.board[0] == $scope.board[1] && $scope.board[1] == $scope.board[2])
            {
              console.log("You win!");
            }
              else if($scope.board[3] == $scope.board[4] && $scope.board[4] == $scope.board[5])
            {
              console.log("You win!");
            }
              else if($scope.board[6] == $scope.board[7] && $scope.board[7] == $scope.board[8])
            {
              console.log("You win!");
            }
              else if($scope.board[0] == $scope.board[3] && $scope.board[3] == $scope.board[6])
            {
              console.log("You win!");
            }
              else if($scope.board[1] == $scope.board[4] && $scope.board[4] == $scope.board[7])
            {
              console.log("You win!");
            }
              else if($scope.board[2] == $scope.board[5] && $scope.board[5] == $scope.board[8])
            {
              console.log("You win!");
            }
              else if($scope.board[0] == $scope.board[4] && $scope.board[4] == $scope.board[8])
            {
              console.log("You win!");
            }
              else if($scope.board[2] == $scope.board[4] && $scope.board[4] == $scope.board[6])
            {
              console.log("You win!");
            }
              else 
              {
              console.log("hi");
              } 
          }
      };


}); // End of controller