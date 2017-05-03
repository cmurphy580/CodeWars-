function songDecoder(song){
  let a = /WUB/gi, b = /\s+/g, c = ' ';
  
  song = song.replace(a, c);
  song = song.replace(b, c); 
  song = song.trim(); 

  return song; 
}

/*
BEST PRACTICE: 

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

*/