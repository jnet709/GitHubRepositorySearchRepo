repoModule.run(["$rootScope", function ($rootScope) {

    $rootScope.getColorGlobal = function (index) {
        return (index % 2 === 0) ? "lightgray" : "black";
    }
}])