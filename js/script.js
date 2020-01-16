let songName=["marigold","sleepwalk","veryape","memories"];
let artistName=["nirvana","santo&jonny","nirvana","panicatthedisco"];
songName.forEach(function(songName){
$(".songsName").append("<p>" +songName+ "</p>");
});
artistName.forEach(function(artistName){
$(".artistName").append("<p>" + artistName + "</p>");
});
