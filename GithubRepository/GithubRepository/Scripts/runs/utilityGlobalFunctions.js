repoModule.run(["$rootScope", function ($rootScope) {

    $rootScope.GetUrlQueryStringParameterValueByNameGlobal = function (name, url) {
        // parameter 'name' must have all LOWERCASE characters for this function

        if (!url) url = window.location.href;
        url = url.toLowerCase(); // This is just to avoid case sensitiveness  
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    $rootScope.GetPagingGlobal = function (itemsCount, pageSize) {
        var pageArray = [];
        var totalPages = Math.ceil(itemsCount / pageSize);
        for (var i = 1; i <= totalPages; i++) {
            pageArray[i] = {text: i, value: i};
        }
        return pageArray; 
    }
}])