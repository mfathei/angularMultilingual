var app = angular.module('Multilingual', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider){
 /**
    $translateProvider.translations('en',{
        'HELLO': 'Hello'
    });
    
    $translateProvider.translations('ar',{
        'HELLO': 'مرحبا'
    });
  */

    $translateProvider.useStaticFilesLoader({
        prefix: '/translations/locale-',
        suffix: '.json'
    });
    
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('ar');
    $translateProvider.useMissingTranslationHandlerLog();
    
}]);

app.run(['$rootScope', function($rootScope){
    $rootScope.lang = 'en';
    
    $rootScope.default_float = 'left';
    $rootScope.opposite_float = 'right';
    
    $rootScope.default_direction = 'ltr';
    $rootScope.opposite_direction = 'rtl';
}]);

app.controller('LanguageSwitchController', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate){
    $scope.changeLanguage = function(langKey){
        $translate.use(langKey);
    };
    
    $rootScope.$on('$translateChangeSuccess', function(event, data){
        var language = data.language;
        
        $rootScope.lang = language;
        
        $rootScope.default_direction = language === 'ar'? 'rtl':'ltr';
        $rootScope.opposite_direction = language === 'ar'? 'ltr':'rtl';
        
        $rootScope.default_float = language === 'ar'? 'right':'left';
        $rootScope.opposite_float = language === 'ar'? 'left':'right';
    });
    
}]);
