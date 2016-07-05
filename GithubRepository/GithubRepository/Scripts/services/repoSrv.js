// https://api.github.com/search/repositories?q=Tetris+language:java&sort=stars&order=desc
// https://api.github.com/repos/orfjackal/tdd-tetris-tutorial
// https://api.github.com/repos/orfjackal/tdd-tetris-tutorial/commits

var repoSrv = function ($http) {
    var _baseUrl = "https://api.github.com/";
    
    // search repositories by key word and programming language
    this.getRepos = function (searchObj) {
        var config = {
            method: "GET",  
            url: _baseUrl + "search/repositories?q=" + searchObj.q + "+language:" + searchObj.language + "&sort=stars&order=desc" + "&page=" + searchObj.page
        };

        return $http(config);
    };

    // details of a repository of an owner
    this.getDetails = function(detailObject) {
        var config = {
            method: "GET",
            url: _baseUrl + "repos/" + detailObject.owner + "/" + detailObject.repo
        };
        return $http(config);
    }

    // commits of a repository by some owner
    this.getRepoCommits = function (searchObj) {
        var config = {
            method: "GET",
            url: _baseUrl + "repos/" + searchObj.owner + "/" + searchObj.repo + "/commits"
        };
        return $http(config);
    }

};

repoSrv.$inject = ["$http"];