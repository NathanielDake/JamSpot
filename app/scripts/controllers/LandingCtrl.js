(function() {
    function LandingCtrl() {                                
        this.heroTitle = "Turn the Music Up!";              
    }                                                       
    
    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);            

})();

//Landing controller for landing view template. The .controller() method has two 
//parameters, the name of the controller (in this case LandingCtrl) and a callback function    
//or an array that injects dependencies, with a callback function as the last item in the array
//In this case, the second argument is just a callback function that executes when the controller
//is intitialized. Note that like .config(), .controller() must be called on an angular module.

//To initialize the $scope object, a controller attaches properties to it. $scope properties
//contain the model, or data, that the view will present, and are available to the template
//at the point in the DOM where the controller is registered. In this case the LandingCtrl
//is registered for the landing.html template (in the state configuration in app.js)

//Controllers are javascript objects, created by a constructor function. Controllers should  
//only be used for 2 things. 1) Initialize the state of the $scope object, 2) add behavior to the 
//$scope object. They should NOT be used to manipulate the DOM. For that use directives. 
//In order to instantiate a controller, angular registers a new controller object via the   
//ng-Controller directive, which attaches a controller to a DOM element. However, with  
//UI-router we can register a controller for a particular state by adding a controller property
//to the state configuration (seen in app.js)