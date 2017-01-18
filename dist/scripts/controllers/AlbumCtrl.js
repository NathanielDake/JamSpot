(function() {
    
    //passing in Fixtures and SongPlayer service as a parameters
    function AlbumCtrl(Fixtures, SongPlayer) {  
        
        this.albumData = Fixtures.getAlbum();
        
        //songPlayer property holds SongPlayer service and makes it accesible in album view
        this.songPlayer = SongPlayer;                                     
        
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer',AlbumCtrl]);     
        //Fixtures service is injected to AlbumCtrl by adding Fixtures to 
        //array of dependencies. Once injected, the service will be available
        //for use within the controller
})();                                                                       