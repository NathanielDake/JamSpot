(function () {
    
    function config($stateProvider, $locationProvider) {
        $locationProvider                                   
            .html5Mode({                                    
                enabled: true,
                requireBase: false
        });
        
        $stateProvider                                      
            .state('landing', {                             
                url:'/',                                    
                controller: 'LandingCtrl as landing',       
                templateUrl: '/templates/landing.html'       
            })                                              
            .state('album', {                               
                url: '/album',                              
                controller: 'AlbumCtrl as album',
                templateUrl: '/templates/album.html'        
            })                                              
            .state('collection', {                          
                url: '/collection',                          
                controller: 'CollectionCtrl as collection', 
                templateUrl: 'templates/collection.html'    
            });
        
            
    }
    
    angular
        .module('blocJams', ['ui.router'])                  
        .config(config);                                                                                      
                                                                                                                   
})();                                                       

//Declaring an angular module, which will act as a container for different
//parts of application. The .module method takes 2 arguments the first being the
//name, and the second being an array of dependencies to be injected into the module
//in this case, blocJams depends on the external module UI-router, so it is injected
//(dependency injection) to the module and listed in the second arguments array
//With UI-router, state configuration must be set up using angular provider (service
//used by angular modules to either configure or define default behavior for a certain
//angular module). In this case $stateProvider and $locationProvider will be used. 
//To make sure the providers are accessible throughout the application, they are injected
//using the config block on the applications root module (blocJams).

//$locationProvider (service, built in to angular) configures an applications paths. 
//html5Mode() can disable hashbang mode

//$stateProvider, a component of UI-router, will determine a number of properties
//for a state. In this case the name, URL route, controller, and template. 
//$stateProvider calls .state(), which takes two arguments, stateName and stateConfig. 
//stateName is a unique string that identifies a state, and stateConfig is an object that 
//defines specific properties of the state. With this state configuration, when navigating to  
//localhost:3000/ the ui-view directive in the global index.html file will load the template
//associated with the landing state.
//Note that $stateProvider.state() returns $stateProvider, allowing the chaining of calls.

//Note that to trigger a state, instead of using <a> tags with an href (hyperlink reference)
//UI-router triggers states by attaching a ui-sref (user interface state reference)
//So in essence, to change pages the following happens: In a template/html <ui-sref> 
//tag, when clicked it changed the state to that associated with the tag. ONCE that state
//has changed, then the ui-view directive on the index.html page will load the new 
//states templateUrl, so the view is changed/updated.



