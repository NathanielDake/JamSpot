(function() {
    
    function Fixtures() {                                                                
        var Fixtures = {};                                                              
                                                                                        
        var albumPicasso = {                                                            
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            stars: [1,2,3,4,5],
            rating: null,
            songs: [
                {title: 'Blue', duration: '161.71', audioUrl: 'assets/music/blue'},
                {title: 'Green', duration: '103.96', audioUrl: 'assets/music/green'},
                {title: 'Red', duration: '268.45', audioUrl: 'assets/music/red'},
                {title: 'Pink', duration: '153.14', audioUrl: 'assets/music/pink'},
                {title: 'Magenta', duration: '374.22', audioUrl: 'assets/music/magenta'},
            ]
        };

        var albumMarconi = {
             title: 'The Telephone',
             artist: 'Guglielmo Marconi',
             label: 'EM',
             year: '1909',
             albumArtUrl: '/assets/images/album_covers/20.png',
             stars: [1,2,3,4,5],
             rating: null,
             songs: [
                 { title: 'Hello, Operator?', duration: '1:01' },
                 { title: 'Ring, ring, ring', duration: '5:01' },
                 { title: 'Fits in your pocket', duration: '3:21'},
                 { title: 'Can you hear me now?', duration: '3:14' },
                 { title: 'Wrong phone number', duration: '2:15'}
             ]
        };
        
        Fixtures.getAlbum = function() {
            return albumPicasso;
        };
        
        Fixtures.getCollection = function(numberOfAlbums) {
            var albums = [];
            for (var i = 0; i <= numberOfAlbums; i++) {
                albums.push(albumPicasso);
            }
            return albums;
        };
        
        return Fixtures;
    }
    
    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);  
})();       
    
    
//Controllers have a specific role in an application and should note 
//share code or state between eachother. Instead, angular has services
//for that purpose. Angular services are objects that can share data and //behavior across several components (controllers, directives, filters, and
//even other services). To use a service it is injected as a dependency for 
//the component that depends on the service.

//In this case the service is factory recipe, which injects a function. 
//A service is registered in the same way a controller is, by calling a function
//on the applications module. 

//Within the Fixtures function (callback to factory recipe),
//a variable Fixtures is declared (set to empty object). 
//The factory will return this object and make its properties
//and methods available to other parts of angular application



