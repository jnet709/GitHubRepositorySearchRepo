repoModule.directive("knRepoTemplateDirct", knRepoTemplateDirct);

repoModule.$inject = [];

function knRepoTemplateDirct() {
    return {
        restrict: "A",
        scope: true,
        templateUrl: "/Views/angularTemplates/repoDetailTemplate.html", 
        replace: false,
        link: function ($scope, $element, $attrs) {}
    };

}

