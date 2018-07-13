<<<<<<< HEAD
 var playlist = {
   tupac: "Only God can Judge me"
 }

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
=======
var playlist = {
  tupac: "Only God can Judge me"
}

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, { [artist]: song })
}

function removeFromPlaylist(playlist, artist){
  
>>>>>>> e58c086e3851e6ba694d36027455af093efde474
}