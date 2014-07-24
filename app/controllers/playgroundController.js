angular.module("LoL")
	.controller("playgroundController", ['$scope', '$http', function($scope, $http) {
		$scope.message = "Hello";

		$http({method: "GET", url:'api/lol/static-data/na/v1.2/item?itemListData=all'})
			.success(function(data) {
				$scope.items = data.data;
                $scope.categories = data.tree;
				$scope.blah = "blah";
			})
			.error(function() {
				console.log("we have a problem");
			});

        var buildCharacterPortrait = function(name) {
            return "http://ddragon.leagueoflegends.com/cdn/3.15.5/img/champion/" + name + ".png"
        };
	}]);