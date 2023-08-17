console.log('welcome to spotify');

let main_bgcolor = document.querySelector('.container');
let footer_bgcolor = document.querySelector('.sound_bar');
let audio_element = new Audio('songs/todh.mp3');
let play_pause_btn = document.querySelector('#plays');
let progress_bar = document.querySelector('.seek_bar');
let tog_body = document.querySelector('.togbody');
let vol_bar = document.querySelector('.volume_bar');
let songs =
    [
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
        { song_name: "todh", File_path: "songs/todh.mp3", cover_path: src = "pics/Todh.png" },
    ];

let song_index = 0;



// -------------------------------- FOR PLAY/PAUSE AND SEEK BAR UPDATION------------------------------------------
play_pause_btn.addEventListener('click', () => {
    if (audio_element.paused || audio_element.currentTime <= 0) {
        // console.log('hellooo i am working');
        audio_element.play();
        play_pause_btn.classList.remove('fa-circle-play');
        play_pause_btn.classList.add('fa-circle-pause');
    }
    else {
        audio_element.pause();
        play_pause_btn.classList.remove('fa-circle-pause');
        play_pause_btn.classList.add('fa-circle-play');
    }
});


audio_element.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    let progress = parseInt((audio_element.currentTime / audio_element.duration) * 100);
    // console.log(progress);
    progress_bar.value = progress;
});





progress_bar.addEventListener('change', () => {
    audio_element.currentTime = progress_bar.value * audio_element.duration / 100;
})



// -----------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------- FOR DAY/NIGHT TOGGLE BUTTON ------------------------------------------

function toggle_fun(mycheck) {
    if (mycheck.checked == true) {
        tog_body.style.paddingLeft = ('2.5vw');
        tog_body.style.transition = ('padding-Left 0.5s');
        main_bgcolor.style.backgroundColor = ('#FFFFFF');
        footer_bgcolor.style.backgroundColor = ('#FFFFFF');
        footer_bgcolor.style.transition = ('backgroundColor 0.5s');
        main_bgcolor.style.transition = ('backgroundColor 0.5s');
        document.querySelector('.box1').style.backgroundColor = ('rgb(190 190 190)');
        document.querySelector('.box1').style.transition =('backgroundColor 0.5s');
        document.querySelector('.box2').style.backgroundColor = ('rgb(190 190 190)');
        document.querySelector('.box2').style.transition =('backgroundColor 0.5s');
        document.querySelector('.box3').style.backgroundColor = ('rgb(190 190 190)');
        document.querySelector('.box3').style.transition =('backgroundColor 0.5s');
        document.querySelector('.sub_box1').style.transition =('backgroundColor 0.5s');
        document.querySelector('.sub_box1').style.backgroundColor = ('black');
        tog_body.style.backgroundColor =('#1DB954');
        tog_body.style.transition =('all 0.5s');
        document.getElementById('day_night_logo').classList.remove('fa-moon');
        document.getElementById('day_night_logo').classList.add('fa-sun');
        document.querySelector('songsss').style.backgroundColor = ('#ffffff');
    }
    else {
        tog_body.style.paddingLeft = ('0rem');
        tog_body.style.transition = ('padding-Left 0.5s');
        main_bgcolor.style.backgroundColor = ('#000000');
        footer_bgcolor.style.backgroundColor = ('#000000');
        document.querySelector('.box1').style.backgroundColor = 'rgb(18 17 17)';
        document.querySelector('.box2').style.backgroundColor = 'rgb(18 17 17)';
        document.querySelector('.box3').style.backgroundColor = 'rgb(18 17 17)';
        document.querySelector('.sub_box1').style.backgroundColor = ('white');
        tog_body.style.backgroundColor =('white');
        tog_body.style.transition =('all 0.5s');
        document.getElementById('day_night_logo').classList.remove('fa-sun');
        document.getElementById('day_night_logo').classList.add('fa-moon');
        document.querySelector('.songsss').style.backgroundColor = ('#646464');
    }
}


