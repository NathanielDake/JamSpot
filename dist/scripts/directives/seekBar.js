(function() {
    function seekBar($document){
        
        /**
        * @function calculatePercent
        * @desc calculates the horizontal percent along the seek bar where the event (passed
        * in from the view as $event) occured.
        * @param seekBar (directive, element in this case) and an event  
        */
        var calculatePercent = function(seekBar, event) {
            var offsetX = event.pageX - seekBar.offset().left;
            var seekBarWidth = seekBar.width();
            var offsetXPercent = offsetX / seekBarWidth;
            offsetXPercent = Math.max(0,offsetXPercent);
            offsetXPercent = Math.min(1,offsetXPercent);
            return offsetXPercent;
        };
        
        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true,
            restrict: 'E',
            scope: {},
            link: function(scope, element, attributes){
                
                /**
                * @desc holds value of the seek bar(i.e. current playing song time/current song volume)
                * @type number
                */
                scope.value = 0;
                
                /**
                * @desc holds max value of song and volume seekbars
                * @type number
                */
                scope.max = 100;
                
                /**
                * @desc Holds the element that matches the directive (<seek-bar>) as a jQuery object
                * so jQuery methods can be called on it.
                * @type directive
                */
                var seekBar = $(element);
                
                /**
                * @function percentString
                * @desc calculates a percent based on the value and max value of a seek bar
                */
                var percentString = function() {
                    var value = scope.value;
                    var max = scope.max;
                    var percent = value / max * 100;
                    return percent + '%';
                };
                
                /**
                * @function scope.fillStyle
                * @desc returns the width of the seek bar fill element based on calculated percent
                */
                scope.fillStyle = function() {
                  return {width: percentString()};  
                };
                
                /**
                * @function scope.onClickSeekBar
                * @desc updates the seek bar value based on the seekbars width and the location of 
                * the users click on the seek bar 
                * @param event
                */
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                };
                
                /**
                * @function scope.trackThumb
                * @desc similar to scope.onClickSeekBar, but uses $apply to constantly apply the change
                * in value of scope.value as the user drags the seek bar thumb
                */
                scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                        scope.$apply(function() {
                            scope.value = percent * scope.max;
                        });
                    });
                    
                    $document.bind('mouseup.thumb', function() {
                        $document.unbind('mousemove.thumb');
                        $document.unbind('mouseup.thumb');
                    });
                                                                   
                };
            }
        };
    }
    
    
    angular
        .module('blocJams')
        .directive('seekBar', ['$document', seekBar]);
})();



/**
* Any angular element in the HTML is a directive. A directive binds angular
* functionality to HTML on a page. Built in directives are ngApp, ngController, 
* ngRepeat, ngClick, ngShow, and so on. There are 3 main directive types:
*       1) Attribute Directive: This directive evalutes an expression
*       <div my-directive="expression"></div>
*       2)Class Directive: The my-directive class is applied to the element if the 
*       expression is true
*       <div class="my-directive: expression;"></div>
*       3)Element Directive: The directive name becomes a custom tag name
*       <my-directive></my-directive>
* Like controllers and services, directives are registered on modules
* For directives, the callback function (seekBar in this case), is a factory 
* function. It returns an object that describes the directives behavior to 
* Angulars HTML compiler. This object communicates the behavior through options. 
* 5 options here are returned: 
*       1) templateUrl: specifies a URL from which the directive will load a template
*       2) replace: Specifies what the template should replace. If true, the template 
*       replaces the directives elements. If false, the template replaces the contents
*       of the directives elements        
*       3) restrict: Restricts the directive to a specific declaration style: element
*       E, attribute A, class C.
*       4) scope: specifies that a new scope be created for the directive
*       5) link: Responsible for registering DOM listeners and updating the DOM
*       this is where we put most of the directive logic
* In this case the directive has been named seekBar, so angular will look for seek-bar in 
* the HTML and call this directive when it finds that markup. 
*   restrict: 'E' instructs angular to treat this directive as an element. For example, 
*   Angular will run the code if it finds <seek-bar> in the HTML, but not if it finds 
*   <div seek-bar>.
*   replace: true instructs angular to completely replace the <seek-bar> element with the 
*   directives HTML template,  rather than insert the HTML between the <seek-bar></seek-bar> tags. 
*   templateUrl: specifies the path to the HTML template that the directive will use. 
*   scope: and empty scope property {} ensures that a new scope will exist solely for the directive
*   link: the link function is automatically generated and scoped to the element defining the 
*   directive. It is a function that executes when the directive is instantiated in the view. This
*   is where all logic related to DOM manipulation will go. 
*   link takes 3 arguements:
*       1) scope: scope object, all methods and attributes will be accessible within the directives view
*       2) element: element that the directive matches
*       3) attributes: hash of attributes with which the directive was declared. If <seek-bar> is
*       declared with no attributes in the HTML, then this hash will be empty
*   seekBar's HTML template can access the attributes and methods of the directives scope object-in this 
*   case scope.value, scope.max, scope.fillStyle 
*<!--Can use ng-style to set CSS styles on an HTML element conditionally
*Note: scope does not proceed fillStyle() in view (e.g. scope.fillStyle())
*because a directive knows which attributes and methods are on its scope 
*and can be used in the view. However, could not call percentString() in the 
*view because it is not on the directive's scope object-->
*/