var gameTTT = angular.module('gameTTT', []);

gameTTT.controller('TicTacToeCtrl', function ($scope){


$scope.player = 1;


  $scope.togglePlayer = function(cellIndex)
  {
    if ($scope.board[cellIndex] == "")
      {
          if($scope.player == 1)
            {
              $scope.board[cellIndex] =  'X';
              value = 1;
              $scope.winFunction();
     		      $scope.player = 2;
            } 
            else 
              {
				        $scope.board[cellIndex] = "O";
                value = -1;
                $scope.winFunction();
				        $scope.player = 1;
              }

$scope.winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


$scope.winFunction = function(){
          if(Math.abs($scope.board[0] + $scope.board[1] + $scope.board[2]) == 3)
            {
              $scope.winner($scope.player);
            }
         else if(Math.abs($scope.board[3] + $scope.board[4] + $scope.board[5]) == 3)
            {
              $scope.winner($scope.player);
            }  
         else if(Math.abs($scope.board[6] + $scope.board[7] + $scope.board[8]) == 3)
            {
              $scope.winner($scope.player);
            }
         else if(Math.abs($scope.board[0] + $scope.board[3] + $scope.board[6]) == 3)
            {
              $scope.winner($scope.player);
            }
         else if(Math.abs($scope.board[1] + $scope.board[4] + $scope.board[7]) == 3)
            {
              $scope.winner($scope.player);
            }
         else if(Math.abs($scope.board[2] + $scope.board[5] + $scope.board[8]) == 3)
            {
              $scope.winner($scope.player);
            }
         else if(Math.abs($scope.board[0] + $scope.board[4] + $scope.board[8]) == 3)
            {
              $scope.winner($scope.player);
            }
         else if(Math.abs($scope.board[2] + $scope.board[4] + $scope.board[6]) == 3)
            {
              $scope.winner($scope.player);
            }
         else {
          console.log("Next Move")
         }   
};


      }	
    
    else 
      {     
        alert("Can't move there!");
      }			
  };

  $scope.winner = function(player)
  {
    alert("Player " + player + " won!");
  };



}); // End of controller