let playlistimage=document.getElementById("playlistimage");
let playlist_name=document.getElementById("playlist_name");
playlistimage.src=localStorage.getItem("playlist_img");
playlist_name.innerHTML=localStorage.getItem("playlist_txt");
let back1=document.getElementById("back1");
back1.addEventListener("click",()=>{
    location.href="index.html";
    localStorage.clear();
})

