var mainModule = angular.module('mainModule', ['ngAnimate','ngSanitize', 'mgcrea.ngStrap', 'ngRoute','ui.grid', 'ui.grid.resizeColumns', 'ui.grid.autoResize', 'ui.grid.selection','ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav'])
        .config(function ($routeProvider, $modalProvider, $httpProvider) {
            $routeProvider.when('/accBank', {
                title : 'Online Bank Account',
                controller: 'accBankController',
                templateUrl: 'views/accBank.html'
            });
            $routeProvider.when('/bulkUser', {
                title : 'Bulk Information',
                controller: 'bkController',
                paramExample: 'exampleA',
                templateUrl: 'views/bulkUser.html'
            });
            $routeProvider.when('/bulkAdmin', {
                title : 'Approve Bulk',
                controller: 'bulkAdminController',
                templateUrl: 'views/bulkAdmin.html'
            });
            $routeProvider.when('/skeyViewer', {
                title : 'SKEY Viewer',
                controller: 'skeyviewerController',
                templateUrl: 'views/skeyViewer.html'
            });
            angular.extend($modalProvider.defaults, {
                html: true,
                animation: 'am-flip-x'
            });
        })
        .run(function ($rootScope, $route, loadingService, settingService) {
            $rootScope.$on('$routeChangeStart', function (e, curr, prev) {
                loadingService.setLoading(true);
            });
            $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
                loadingService.setLoading(false);
                document.title = $route.current.title;
            });
            settingService.async().then(function () {
                $rootScope.settings = settingService.data();
            });
        });