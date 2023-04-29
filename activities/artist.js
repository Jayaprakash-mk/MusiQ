let play = document.querySelector(".song-btn");
let play_btn = document.querySelector(".play-icon");
let pause_btn = document.querySelector(".pause-icon");
let seek_slider = document.querySelector(".seek-slider");
let curr_tym = document.getElementsByClassName(".current-time");


//data
const gv_songs = [
        {
            sng_name : "Pookkal Pookkum",
            artists : "Andrea Jeremiah, G. V. Prakash, Harini, Roop Kumar, Rathod",
            music : new Audio("songs/gvp/pookaal_pookkum.mp3"),
        },

        {
            sng_name : "Yathe Yathe",
            artists : "G. V. Prakash",
            music : new Audio("songs/gvp/Yathe_Yathe.mp3"),
        },

        {
            sng_name : "Vaa Vaathi",
            artists : "G. V. Prakash, Shweta Mohan",
            music : new Audio("songs/gvp/Vaa_Vaathi.mp3"),
        },

        {
            sng_name : "Un Mela Aasadhaan",
            artists : "Andrea Jeremiah, Dhanush, G. V. Prakash",
            music : new Audio("songs/gvp/Un_Mela_Aasadhaan.mp3"),
        },

];

const shawn_songs = [
    {
        sng_name : "Fallin All In You",
        artists : "Shawn Mendes",
        music : new Audio("songs/shawn/Fallin' All In You.mp3"),
    },

    {
        sng_name : "Heartbeat",
        artists : "Shawn Mendes",
        music : new Audio("songs/shawn/heartbeat.mp3"),
    },

    {
        sng_name : "Nothing Holdin Me Back",
        artists : "Shawn Mendes",
        music : new Audio("songs/shawn/Theres Nothing Holdin Me Back.mp3"),
    },

    {
        sng_name : "Where You re Gone",
        artists : "Shawn Mendes",
        music : new Audio("songs/shawn/When You're Gone.mp3"),
    },

];

const ysr_songs = [
    {
        sng_name : "Oru Naalil",
        artists : "Yuvan Shankar Raja",
        music : new Audio("songs/ysr/oru naalil.mp3"),
    },

    {
        sng_name : "En Kadhal Solla",
        artists : "Tanvi Shah, Yuvan Shankar Raja",
        music : new Audio("songs/ysr/en_kadhal_solla.mp3"),
    },

    {
        sng_name : "Andha Kanna Paathaakaa",
        artists : "Anirudh Ravichander, Yuvan Shankar Raja",
        music : new Audio("songs/ysr/Andha Kanna Paathaaka.mp3"),
    },

    {
        sng_name : "High On Love",
        artists : "Sid Sriram, Yuvan Shankar Raja",
        music : new Audio("songs/ysr/High On Love.mp3"),
    },

];

const jonita_songs = [
    {
        sng_name : "Mental Manadhil",
        artists : "A.R. Rahman, Jonita Gandhi",
        music : new Audio("songs/jonita/Mental Manadhil.mp3"),
    },

    {
        sng_name : "Arabic Kuthu",
        artists : "Anirudh Ravichander, Jonita Gandhi",
        music : new Audio("songs/jonita/Arabic Kuthu.mp3"),
    },

    {
        sng_name : "Azhagiye",
        artists : "A.R. Rahman, Arjun Chandy, Haricharan, Jonita Gandhi",
        music : new Audio("songs/jonita/Azhagiye.mp3"),
    },

    {
        sng_name : "Current Laga Re",
        artists : "Nakash, Dhvani, Jonita Gandhi, Lijo",
        music : new Audio("songs/jonita/current laga re.mp3"),
    },

];

// playpause-functions
// -1-
function playPause1(songName){
    var sng = gv_songs.find(function(sng) {
        return sng.sng_name === songName;

    });
    if(!sng){
        console.error("song not found:", songName);
        return;
    }
    else{
        console.log(sng);
    }
    
    var button = document.querySelector('button[onclick="playPause1(\'' + songName + '\')"]');
    if (!button) {
        console.error("Button not found:", songName);
        return;
    }
    var icon = button.querySelector('i');

    // let tot_tym = document.querySelector(".Total-duration");4
    let tot_tym = button.nextElementSibling.children[2];
    let seek_slider = button.nextElementSibling.children[1];
    let curr_tym = button.nextElementSibling.children[0];

    const formatTime = (time) => {
        let min = Math.floor(time/60);
        if(min < 10){
            min = `0${min}`;
        }
        let sec = Math.floor(time%60);
        if(sec < 10){
            sec = `0${sec}`;
        }
        return `${min} : ${sec}`;
    
    }
    seek_slider.max = sng.music.duration;
    tot_tym.innerHTML=formatTime(sng.music.duration);
    console.log(tot_tym.innerHTML);

    setInterval(() => {
        seek_slider.value = sng.music.currentTime;
        console.log(formatTime(sng.music.currentTime));
        curr_tym.innerHTML = formatTime(sng.music.currentTime);
    },600)
    
    seek_slider.addEventListener('change', ()=>{
        if(sng.music.currentTime == sng.artists.duration){
            seek_slider.value = 0;
        }
        sng.music.currentTime = seek_slider.value;
    })



    if(sng.music.paused){
        sng.music.play();
        console.log("playing");
        button.classList.remove('play');
        button.classList.add('pause');
        icon.classList.remove('fa-play-circle');
        icon.classList.add('fa-pause-circle');
    }
    else{
        sng.music.pause();
        console.log("on-pause")
        button.classList.remove('pause');
        button.classList.add('play');
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    }


}

// -2-
function playPause2(songName){
    var sng = shawn_songs.find(function(sng) {
        return sng.sng_name === songName;

    });
    if(!sng){
        console.error("song not found:", songName);
        return;
    }
    else{
        console.log(sng);
    }
    
    var button = document.querySelector('button[onclick="playPause2(\'' + songName + '\')"]');
    if (!button) {
        console.error("Button not found:", songName);
        return;
    }
    var icon = button.querySelector('i');

    // let tot_tym = document.querySelector(".Total-duration");4
    let tot_tym = button.nextElementSibling.children[2];
    let seek_slider = button.nextElementSibling.children[1];
    let curr_tym = button.nextElementSibling.children[0];

    const formatTime = (time) => {
        let min = Math.floor(time/60);
        if(min < 10){
            min = `0${min}`;
        }
        let sec = Math.floor(time%60);
        if(sec < 10){
            sec = `0${sec}`;
        }
        return `${min} : ${sec}`;
    
    }
    seek_slider.max = sng.music.duration;
    tot_tym.innerHTML=formatTime(sng.music.duration);
    console.log(tot_tym.innerHTML);

    setInterval(() => {
        seek_slider.value = sng.music.currentTime;
        console.log(formatTime(sng.music.currentTime));
        curr_tym.innerHTML = formatTime(sng.music.currentTime);
    },600)
    
    seek_slider.addEventListener('change', ()=>{
        if(sng.music.currentTime == sng.artists.duration){
            seek_slider.value = 0;
        }
        sng.music.currentTime = seek_slider.value;
    })



    if(sng.music.paused){
        sng.music.play();
        console.log("playing");
        button.classList.remove('play');
        button.classList.add('pause');
        icon.classList.remove('fa-play-circle');
        icon.classList.add('fa-pause-circle');
    }
    else{
        sng.music.pause();
        console.log("on-pause")
        button.classList.remove('pause');
        button.classList.add('play');
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    }


}

// -3-
function playPause3(songName){
    var sng = ysr_songs.find(function(sng) {
        return sng.sng_name === songName;

    });
    if(!sng){
        console.error("song not found:", songName);
        return;
    }
    else{
        console.log(sng);
    }
    
    var button = document.querySelector('button[onclick="playPause3(\'' + songName + '\')"]');
    if (!button) {
        console.error("Button not found:", songName);
        return;
    }
    var icon = button.querySelector('i');

    // let tot_tym = document.querySelector(".Total-duration");4
    let tot_tym = button.nextElementSibling.children[2];
    let seek_slider = button.nextElementSibling.children[1];
    let curr_tym = button.nextElementSibling.children[0];

    const formatTime = (time) => {
        let min = Math.floor(time/60);
        if(min < 10){
            min = `0${min}`;
        }
        let sec = Math.floor(time%60);
        if(sec < 10){
            sec = `0${sec}`;
        }
        return `${min} : ${sec}`;
    
    }
    seek_slider.max = sng.music.duration;
    tot_tym.innerHTML=formatTime(sng.music.duration);
    console.log(tot_tym.innerHTML);

    setInterval(() => {
        seek_slider.value = sng.music.currentTime;
        console.log(formatTime(sng.music.currentTime));
        curr_tym.innerHTML = formatTime(sng.music.currentTime);
    },600)
    
    seek_slider.addEventListener('change', ()=>{
        if(sng.music.currentTime == sng.artists.duration){
            seek_slider.value = 0;
        }
        sng.music.currentTime = seek_slider.value;
    })



    if(sng.music.paused){
        sng.music.play();
        console.log("playing");
        button.classList.remove('play');
        button.classList.add('pause');
        icon.classList.remove('fa-play-circle');
        icon.classList.add('fa-pause-circle');
    }
    else{
        sng.music.pause();
        console.log("on-pause")
        button.classList.remove('pause');
        button.classList.add('play');
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    }


}

function playPause4(songName){
    var sng = jonita_songs.find(function(sng) {
        return sng.sng_name === songName;

    });
    if(!sng){
        console.error("song not found:", songName);
        return;
    }
    else{
        console.log(sng);
    }
    
    var button = document.querySelector('button[onclick="playPause4(\'' + songName + '\')"]');
    if (!button) {
        console.error("Button not found:", songName);
        return;
    }
    var icon = button.querySelector('i');

    // let tot_tym = document.querySelector(".Total-duration");4
    let tot_tym = button.nextElementSibling.children[2];
    let seek_slider = button.nextElementSibling.children[1];
    let curr_tym = button.nextElementSibling.children[0];

    const formatTime = (time) => {
        let min = Math.floor(time/60);
        if(min < 10){
            min = `0${min}`;
        }
        let sec = Math.floor(time%60);
        if(sec < 10){
            sec = `0${sec}`;
        }
        return `${min} : ${sec}`;
    
    }
    seek_slider.max = sng.music.duration;
    tot_tym.innerHTML=formatTime(sng.music.duration);
    console.log(tot_tym.innerHTML);

    setInterval(() => {
        seek_slider.value = sng.music.currentTime;
        console.log(formatTime(sng.music.currentTime));
        curr_tym.innerHTML = formatTime(sng.music.currentTime);
    },600)
    
    seek_slider.addEventListener('change', ()=>{
        if(sng.music.currentTime == sng.artists.duration){
            seek_slider.value = 0;
        }
        sng.music.currentTime = seek_slider.value;
    })



    if(sng.music.paused){
        sng.music.play();
        console.log("playing");
        button.classList.remove('play');
        button.classList.add('pause');
        icon.classList.remove('fa-play-circle');
        icon.classList.add('fa-pause-circle');
    }
    else{
        sng.music.pause();
        console.log("on-pause")
        button.classList.remove('pause');
        button.classList.add('play');
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    }


}

/*
const setMusic = () => {
    seek_slider.value = 0;
    let song = class_name[song_index];
    curr_track.src = song.music;
    console.log(curr_track);

    seek_slider.max = curr_track.duration;
    setTimeout(() => {
        seek_slider.max=curr_track.duration;
        tot_tym.innerHTML=formatTime(curr_track.duration);
    }, 300);


}
setMusic();

const formatTime = (time) => {
    let min = Math.floor(time/60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;

}

setInterval(() => {
    seek_slider.value = curr_track.currentTime;
    console.log(formatTime(curr_track.currentTime));
    curr_tym.innerHTML = formatTime(curr_track.currentTime);
},600)

seek_slider.addEventListener('change', ()=>{
    curr_track.currentTime = seek_slider.value
})
*/

