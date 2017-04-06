var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists:  function () {
                    for (var elem in this.playlists) {
                       var result = `${elem}: ${this.playlists[elem].name} - ${this.playlists[elem]["tracks"].length} tracks`;
                       console.log(result);
                    }
                  },
  printTracks:  function () {
                    for (var elem in this.tracks) {
                       var result = `${elem}: ${this.tracks[elem].name} by ${this.tracks[elem].artist} (${this.tracks[elem].album})`;
                       console.log(result);
                    }
                },
  printPlaylist: function (playlistId) {
                  var resultPlaylist = `${playlistId}: ${this.playlists[playlistId]["name"]} - ${this.playlists[playlistId]["tracks"].length} tracks`;
                  console.log(resultPlaylist);
                  for (var track of this.playlists[playlistId]["tracks"]){
                    var resultTracks = `${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`;
                    console.log(resultTracks);
                  }
                },
  addTrackToPlaylist: function(trackId, playlistId) {
    
  },
  addTrack: function (name, artist, album) {
              var newTrack = `t${uid()}`;
              this.tracks[newTrack] = {"id": newTrack, "name": name, "artist": artist, "album": album};
              console.log(this.tracks);
              return this.tracks;
            },
  addPlaylist: function (name) {
                 var newPlaylist = `p${uid()}`;
                 var newTrack = `t${uid()}`;
                 var newTrackArr = [];
                 newTrackArr.push(newTrack);
                 this["playlists"][newPlaylist] = {"id": newPlaylist, "name": name, "tracks": newTrackArr};
                 console.log(this.playlists);
                 return this.playlists;
              }
}

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrack('foo','someone', 'something');
library.addPlaylist('foo');
