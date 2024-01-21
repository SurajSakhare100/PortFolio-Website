const song_content=[
    {
        id:1,
        song:"song/Chaleya - Jawan.mp3",
        poster:"poster/chaleya.jpg",
        song_name:"Chaleya",
        sub_title_text:"Anirudh",
    },
    {
        id:2,
        song:"song/Fire.mp3",
        poster:"poster/Fire.jpg",
        song_name:"Fire",
        sub_title_text:"bts",
    },
    {
        id:3,
        song:"song/Kesariya.mp3",
        poster:"poster/kesariya.jpg",
        song_name:"Kesariya",
        sub_title_text:"Araman malik",
    },
    {
        id:4,
        song:"song/on my way.mp3",
        poster:"poster/on my way.jpg",
        song_name:"on my way",
        sub_title_text:"Alan walker",
    },
    {
        id:5,
        song:"song/Ram Siya Ram.mp3",
        poster:"poster/ram siya ram.jpg",
        song_name:"Ram Siya Ram",
        sub_title_text:"Arjit singh",
    },
    {
        id:6,
        song:"song/JALSA 2.mp3",
        poster:"poster/jalsa 2.jpg",
        song_name:"JALSA",
        sub_title_text:"Anirudh",
    },
    {
        id:7,
        song:"song/Ice-Cream.mp3",
        poster:"poster/ICECREAM.jpg",
        song_name:"Ice-Cream",
        sub_title_text:"Blackpink",
    },
    {
        id:8,
        song:"song/Kalaastar.mp3",
        poster:"poster/kalastar.jpg",
        song_name:"Kalaastar",
        sub_title_text:"YO YO Honey Singh",

    },
    {
        id:9,
        song:"song/Leke Prabhu Ka Naam.mp3",
        poster:"poster/Leke Prabhu Ka Naam.jpg",
        song_name:"Leke Prabhu Ka Naam",
        sub_title_text:"SANDY",
    },
    {
        id:10,
        song:"song/Not Ramaiya Vastavaiya.mp3",
        poster:"poster/not ramaya.jpg",
        song_name:"Not Ramaiya Vastavaiya",
        sub_title_text:"Anirudh",
    },
    {
        id:11,
        song:"song/Sapna.mp3",
        poster:"poster/sapna.jpg",
        song_name:"Sapna",
        sub_title_text:"Nirja",
    },
    {
        id:12,
        song:"song/Zinda Banda - Jawan.mp3",
        poster:"poster/zinda-banda-jawan.jpg",
        song_name:"Zinda Banda",
        sub_title_text:"Anirudh",
    },
    {
        id:13,
        song:"song/Tere Vaste Falak Se Chand.mp3",
        poster:"poster/tere flak pe.jpg",
        song_name:"Tere Vaste Falak Se Chand",
        sub_title_text:"Pritam",
    },

]

let back_btn=document.getElementById("back_btn");
let play_btn=document.getElementById("play_btn");
let next_btn=document.getElementById("next_btn");
// let progress=document.getElementById("progress");
let song_audio=document.getElementById("song_audio");
// let vol=document.getElementById("vol");
let i=0;
let b=true;
play_btn.addEventListener('click',()=>{
    if(b){
        subtitle.textContent=`${song_content[i].sub_title_text}`
        poster.src=`${song_content[i].poster}`;
        song_audio.src=song_content[i].song;
        play_btn.innerHTML=`<i class="bi bi-pause-fill"></i>`
        subt.textContent=`${song_content[i].song_name}`;
        song_audio.play();
        b=false;
    }
    else{
        play_btn.innerHTML=`<i class="bi bi-play-fill"></i>`
        song_audio.pause();
        b=true;
    }
})
back_btn.addEventListener('click',()=>{
    if(i>0){
           i--;
           play_btn.innerHTML=`<i class="bi bi-pause-fill"></i>`
           subtitle.textContent=`${song_content[i].sub_title_text}`
           subt.textContent=`${song_content[i].song_name}`;
           poster.src=`${song_content[i].poster}`;
           song_audio.src=song_content[i].song;
           song_audio.play();
           b=false;
       }
})
next_btn.addEventListener('click',()=>{
    if(i<12){
        i++;
        play_btn.innerHTML=`<i class="bi bi-pause-fill"></i>`
        subtitle.textContent=`${song_content[i].sub_title_text}`
        subt.textContent=`${song_content[i].song_name}`;
        poster.src=`${song_content[i].poster}`;
        song_audio.src=song_content[i].song;
        song_audio.play();
        b=false;
    }
})
let songbar=document.getElementById("songbar");
let bar=document.getElementsByClassName("bar");
let bar2=document.getElementById("bar2");
let dot=document.getElementsByClassName("dot")[0];
let volume_dot=document.getElementById("volume_dot")
let bar3=document.getElementById("bar3")
let vol=document.getElementById("vol")
let currentstart=document.getElementById("timestart");
let currentend=document.getElementById("timeend");
song_audio.addEventListener('timeupdate',()=>{
    let music_curr=song_audio.currentTime;
    let music_dur=song_audio.duration;
    let min1=parseInt(Math.floor(music_dur/60)) ;
    let sec1=parseInt(Math.floor(music_dur%60));
    let min2= parseInt(Math.floor(music_curr/60));
    let sec2=parseInt(Math.floor(music_curr%60));
    sec1=Number.parseInt(sec1);
    sec2=Number.parseInt(sec2);
    if(sec1<10){
        sec1=`0${sec2}`
    }
    if(sec2<10){
        sec2=`0${sec2}`
    }
    currentend.innerHTML=`${min1}:${sec1}`
    currentstart.innerHTML=`${min2}:${sec2}`
    let progressbar=parseInt((music_curr /music_dur)*100);
    songbar.value=progressbar
    bar2.style.width=`${songbar.value}%`
    dot.style.left=`${songbar.value}%`
    
    if(music_curr==music_dur){
        i++;
        play_btn.innerHTML=`<i class="bi bi-pause-fill"></i>`
        subtitle.textContent=`${song_content[i].sub_title_text}`
        subt.textContent=`${song_content[i].song_name}`;
        poster.src=`${song_content[i].poster}`;
        song_audio.src=song_content[i].song;
        song_audio.play();
        b=false;
    }
})
songbar.addEventListener('change',() => {
    song_audio.currentTime = (songbar.value * (song_audio.duration /100));
    bar2.style.width=`${songbar.value}%`
    dot.style.left=`${songbar.value}%`
    play_btn.innerHTML=`<i class="bi bi-pause-fill"></i>`
    song_audio.play();
    if(music_curr==music_dur){
        console.log("object");
    }
    
}
)

vol.addEventListener('change',()=>{
    bar3.style.width=`${vol.value*100}%`
    volume_dot.style.left=`${vol.value*100}%` 
})
let milk=`<tr class="playlist_song_box"><td>1</td><td class="title"><img ="playlist_song_box_poster" src="playlist/krishna.jpg" alt="alan" width="40px"><div class="info"><span>On My Way</span><span>Alan walker</span></div></td>
<td>Alan walker song</td>
<td>2 days ago</td>
</tr>`
let paneer='';
let n=localStorage.getItem("item");
for (let i = 0; i <(n); i++) {
    paneer+=milk;  
}
// let h=document.getElementById("h")
h.innerHTML=` <tr class="cd">
<th>#</th>
<th>Title</th>
<th>About</th>
<th>Date added</th>
</tr>
${paneer}
`
let playlist_song_box=document.querySelectorAll(".playlist_song_box");
playlist_song_box.forEach((element,index) => {
    playlist_song_box[index].childNodes[1].childNodes[0].src=`${song_content[index].poster}`;
    playlist_song_box[index].childNodes[1].childNodes[1].childNodes[1].textContent=`${song_content[index].sub_title_text}`
    playlist_song_box[index].childNodes[1].childNodes[1].childNodes[0].textContent=`${song_content[index].song_name}`
    element.childNodes[0].textContent=`${index+1}`
    element.childNodes[1].childNodes[0].addEventListener('click',()=>{
        song_audio.src=song_content[index].song;
        poster.src=`${song_content[index].poster}`;
        subtitle.textContent=`${song_content[index].sub_title_text}`;
        subt.textContent=`${song_content[index].song_name}`;
        song_audio.play();
        b=false;
   })
})
