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
