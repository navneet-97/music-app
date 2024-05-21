var songIndex = 0;
var audioElement = new Audio('/static/songs/1.mp3');
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById('myProgressBar');
// var gif = document.getElementById('gif');
var masterSongName = document.getElementById('masterSongName');
var songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Admirin' You - Karan Aujla", filePath: "/static/songs/Admiring You.mp3", coverPath: "/static/songs/admiring you.jpeg"},
    {songName: "Aararaari Raaro - Jawan", filePath: "/static/songs/Aararaari Raaro Jawan.mp3", coverPath: "/static/images/1.webp"},
    {songName: "Be-the-One - Dua Lipa", filePath: "/static/songs/Be-the-One---Dua-Lipa.mp3", coverPath: "/static/images/Dua_Lipa.webp"},
    {songName: "Jee Ni Lagda - Karan Aujla", filePath: "/static/songs/Jee Ni Lagda - Karan Aujla.mp3", coverPath: "/static/songs/jee ni lagda.jpeg"},
    {songName: "Faraatta - Jawan", filePath: "/static/songs/Faraatta Jawan.mp3", coverPath: "/static/images/1.webp"},
    {songName: "Kuley Kuley - Yo Yo Honey Singh", filePath: "/static/songs/Kuley Kuley - Yo Yo Honey Singh.mp3", coverPath: "/static/songs/kuley kuley.jpeg"},
    {songName: "Maan Meri Jaan - King", filePath: "/static/songs/Maan Meri Jaan.mp3", coverPath: "/static/images/King.webp"},
    {songName: "Chaleya - Jawan", filePath: "/static/songs/Chaleya Jawan.mp3", coverPath: "/static/images/1.webp"},
    {songName: "New-Love - Dua-Lipa", filePath: "/static/songs/New-Love---Dua-Lipa.mp3", coverPath: "/static/images/Dua_Lipa.webp"},
    {songName: "Savage Love - BTS", filePath: "/static/songs/Savage Love - BTS.mp3", coverPath: "/static/images/15.webp"},
    {songName: "Selfish Love - Solena Gomez", filePath: "/static/songs/Selfish Love.mp3", coverPath: "/static/images/Selena_Gomez.webp"},
    {songName: "Rag'n'Bone Man - Skin", filePath: "/static/songs/Skin.mp3", coverPath: "/static/images/14.webp"},
    {songName: "Getaway Car - Taylor Swift", filePath: "/static/songs/Taylor Swift - Getaway Car.mp3", coverPath: "/static/images/12.webp"},
    {songName: "Till I Collapse - Eminem", filePath: "/static/songs/Till I Collapse - Eminem.mp3", coverPath: "/static/images/Eminem.webp"},
    {songName: "Zinda Banda - Jawan", filePath: "/static/songs/Zinda Banda Jawan.mp3", coverPath: "/static/images/1.webp"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    var progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/static/songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/static/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `/static/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})