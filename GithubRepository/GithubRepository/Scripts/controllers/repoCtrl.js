var repoCtrl = function ($scope, $window, $rootScope, repoSrv) {

    $scope.isLoading = false;
    $scope.repositories = []; // search repositories by repositoty's key word and programming language
    $scope.knRepoDetail = {};
    $scope.searchObject = { q: "", language: "", page: 1 }; 
    $scope.detailObject = { owner: "", repo: "" };
    // paging
    $scope.pages = [];
    $scope.selectedPage = -1;
    // sorting
    $scope.predicate = "name"; // default sort by repository's name
    $scope.reverse = true;

    $scope.getRepos = function () {
        $scope.isLoading = true;
        repoSrv.getRepos($scope.searchObject)
                .then(function (response) {
                    $scope.repositories = response.data.items;
                    var itemsCount = response.data.total_count;
                    var pageSize = $scope.repositories.length;
                    $scope.pages = $rootScope.GetPagingGlobal(itemsCount, pageSize);

                    $scope.isLoading = false;
                },
                function (responseError) {
                    if (responseError.data != undefined)
                        $window.alert(responseError.data.Message); // lastActionResult
                    $scope.isLoading = false;
                }
            );
    }
    
    $scope.getDetails = function (name, owner) {
        $scope.isLoading = true;
        $scope.detailObject = { owner: owner, repo: name };

        repoSrv.getDetails($scope.detailObject)
                .then(function (response) {
                    $scope.knRepoDetail = response.data;
                    $scope.isLoading = false;
                    angular.element("#repoDetailModal").modal("show");
                },
                function (responseError) {
                    if (responseError.data != undefined)
                        $window.alert(responseError.data.Message); // lastActionResult
                    $scope.isLoading = false;
                }
            );
    }
    
    // go to repo's commit pages
    $scope.gotoRepoCommitPage = function(index) {
        var r = $scope.repositories[index];
        var repo = r.name;
        var owner = r.owner.login;
        $window.location = '/Home/RepoCommits?repo=' + repo + "&owner=" + owner;
    }

    $scope.getAnotherPage = function() {
        $scope.searchObject.page = $scope.selectedPage;
        $scope.getRepos();
    }

    $scope.sort = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
}

repoCtrl.$inject = ["$scope", "$window", "$rootScope", "repoSrv"];