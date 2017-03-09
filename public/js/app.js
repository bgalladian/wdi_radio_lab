angular
  .module("radio", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])

  .controller("SongsController", [
    "$firebaseArray",
    SongsControllerFunction])

    function RouterFunction($stateProvider){
      $stateProvider
      .state("songsIndex", {
        url: "/",
        templateUrl: "js/ng-views/index.html",
        controller: "SongsController",
        controllerAs: "vm"
      })
    }


  function SongsControllerFunction($firebaseArray) {
    let ref = firebase.database().ref().child("songs");
    this.songs = $firebaseArray(ref);

    this.create = function(){
      this.songs.$add(this.newSong).then ( () => this.newSong = {} )
    }

    this.delete = function(song) {
      this.songs.$remove (song);
    }
  }
