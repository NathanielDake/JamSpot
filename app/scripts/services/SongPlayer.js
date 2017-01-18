(function() {
    function SongPlayer() {
        
        //SongPlayer variable is created and set to an empty object
        var SongPlayer = {};                                        
        
        var currentSong = null;
        
        /**
        * @desc Buzz object audio file
        * @type {object}
        */
        var currentBuzzObject = null;
        
        
         /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function(song) {
            if (currentBuzzObject){                                  
                currentBuzzObject.stop();                            
                currentSong.playing = null;                                                                                     
               }                                                        
           
            currentBuzzObject = new buzz.sound(song.audioUrl, {     
               formats: ['mp3'],                                         
                preload: true                                           
            });                     
            
            currentSong = song;
        };
        
        
        
        /**
        *Here the play method takes an argument, song, which is grabbed from album view 
        *when a user clicks the play button. The ng-repeat directive used in album template
        *will dictate which song to pass into the function. The play method creates a new
        *buzz object using the songs audioUrl property and then calls Buzz's own play method
        *on the object. To trigger the SongPlayer.play method an ngClick directive must be
        *added to the play button anchor tag in album.html
        */
        SongPlayer.play = function(song) {                              
           if (currentSong !== song){                                   
            setSong(song);                                              
            currentBuzzObject.play();                                   
            song.playing = true;                                        
                                                                        
            } else if (currentSong === song) {      
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };

        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        }
        
        /**The service (factory in this case) returns this object, making its 
        *properties and methods public to the rest of the application 
        */
        return SongPlayer;                                            
    }                                                               
                                                                
    
    
    //to use SongPlayer service, must be injected as a dependency. Music will
    //be played from the album view, so it is injected in the AlbumCtrl
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);                         
})();


/**
*the SongPlayer service contains:
* 2 private attributes: currentSong and currentBuzzObject
* 1 private function: setSong
* and two public methods: SongPlayer.play and SongPlayer.pause
*/
