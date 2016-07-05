var repoCommitCtrl = function ($scope, $window, $rootScope, repoSrv) {

    $scope.isLoading = false;
    $scope.commits = []; // search repositories by repositoty's key word and programming language
    $scope.searchObject = { owner: "", repo: "" };
    // sorting
    $scope.predicate = "name"; // default sort by committer's name
    $scope.reverse = true;

    $scope.searchObject.repo = $rootScope.GetUrlQueryStringParameterValueByNameGlobal("repo");
    $scope.searchObject.owner = $rootScope.GetUrlQueryStringParameterValueByNameGlobal("owner");

    $scope.getRepoCommits = function () {
        $scope.isLoading = true;
        repoSrv.getRepoCommits($scope.searchObject)
                .then(function (response) {
                    $scope.commits = response.data;
                    $scope.isLoading = false;
                },
                function (responseError) {
                    if (responseError.data != undefined)
                        $window.alert(responseError.data.Message); // lastActionResult
                    $scope.isLoading = false;
                }
            );
    }

    $scope.sort = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    // initial call on first loading
    $scope.getRepoCommits();
}

repoCommitCtrl.$inject = ["$scope", "$window", "$rootScope", "repoSrv"];