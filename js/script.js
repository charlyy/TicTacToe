var gameTTT = angular.module('gameTTT', ["firebase"]);

gameTTT.controller('TicTacToeCtrl', function ($scope, $firebase){

// Track if we're player 1 or 2
var playerNum = null;
var moves = 0;

    var ticTacRef = new Firebase("https://elfuego.firebaseio.com/");
    var lastGame;
    // Ask for all existing game info from firebase
    ticTacRef.once('value', function(gamesSnapshot) {
    // get the actual games data
    var games = gamesSnapshot.val();
        if(games == null)
        {
          // No games at all, so make a new game -- As if we're Areg
          lastGame = ticTacRef.push( {waiting: true} );
          playerNum = 1;
            //////// function for not switching players
        }
        else  // I do have at least one game out there...
        {
          var keys = Object.keys(games);
          var lastGameKey = keys[ keys.length - 1 ];
          var lastGame = games[ lastGameKey ];
          console.log("This person's game: " + lastGameKey);
            if(lastGame.waiting)
            {
            // Currently someone is waiting -- Areg is there and we're Rocky
            // Grab from Firebase its last game object
            lastGame = ticTacRef.child(lastGameKey);
            // Set a new game on this
            lastGame.set( {
              player: 1,
              waiting: false, 
              moves: 0, 
              xWins: 0, 
              oWins: 0, 
              ties: 0, 
              won: false, 
              board:['','','','','','','','','']
              });
       playerNum = 2;
            console.log(playerNum)
            }
            else
            {
            // Make a new game -- As if we're Areg
            lastGame = ticTacRef.push( {waiting: true} );
            playerNum = 1;

            }
            // Attach the last game to what we're up to
            $scope.game = $firebase(lastGame);        
    };
  });


// Start at player one
  $scope.togglePlayer = function(cellIndex)
  {
    if ($scope.game.board[cellIndex] == "" && playerNum == $scope.game.player)
      {
          if($scope.game.player == 1)
            {
              $scope.game.board[cellIndex] = 'X';
              console.log(cellIndex);
              $scope.game.moves++;
              winFunction();
              $scope.game.player = 2;
              console.log("Playa 1")

            } 
            else 
              {
				        $scope.game.board[cellIndex] = 'O';
                console.log(cellIndex);
                $scope.game.moves++;
                winFunction();
                $scope.game.player = 1;
                console.log("Playa 2")
              }
              $scope.game.$save();
      }	
    else 
      {     
        alert("Can't move there!");
      }			
  };

    
var tieGame = function(){
  $scope.game.ties++;
  $scope.game.$save();
}


var youWon = function()
{
  if ($scope.game.player == 1)
  {
    $scope.game.xWins++;
    $scope.game.board = ['X','X','X','X','X','X','X','X','X'];
    console.log('X wins!');
    $scope.game.won =  true;
  }
  else
  {
    $scope.game.oWins++;
    $scope.game.board = ['O','O','O','O','O','O','O','O','O'];
    console.log('O wins!');
    $scope.game.won =  true;
  };
  $scope.game.$save();
};


$scope.clearBoard = function()
{
  $scope.game.board = ['','','','','','','','',''];
  $scope.game.moves = 0;
  $scope.game.won =  false;
  $scope.game.$save();
  $scope.game.player = 1;
}

 var winFunction = function()
        {
          if ($scope.game.moves > 4){

            if($scope.game.board[0] != '' && $scope.game.board[0] == $scope.game.board[1] && $scope.game.board[1] == $scope.game.board[2])
            {
              youWon();
            }
              else if($scope.game.board[3] != '' && $scope.game.board[3] == $scope.game.board[4] && $scope.game.board[4] == $scope.game.board[5])
            {
              youWon();
            }
              else if($scope.game.board[6] != '' && $scope.game.board[6] == $scope.game.board[7] && $scope.game.board[7] == $scope.game.board[8])
            {
              youWon();
            }
              else if($scope.game.board[0] != '' && $scope.game.board[0] == $scope.game.board[3] && $scope.game.board[3] == $scope.game.board[6])
            {
              youWon();
            }
              else if($scope.game.board[1] != '' && $scope.game.board[1] == $scope.game.board[4] && $scope.game.board[4] == $scope.game.board[7])
            {
              youWon();
            }
              else if($scope.game.board[2] != '' && $scope.game.board[2] == $scope.game.board[5] && $scope.game.board[5] == $scope.game.board[8])
            {
              youWon();
            }
              else if($scope.game.board[0] != '' && $scope.game.board[0] == $scope.game.board[4] && $scope.game.board[4] == $scope.game.board[8])
            {
              youWon();
            }
              else if($scope.game.board[2] != '' && $scope.game.board[2] == $scope.game.board[4] && $scope.game.board[4] == $scope.game.board[6])
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