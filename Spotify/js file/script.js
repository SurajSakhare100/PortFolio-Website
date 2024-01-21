let recent=document.querySelectorAll(".recent")
let my_playlist_store=document.querySelectorAll(".my_playlist_store")
recent.forEach((element,i) => {
    element.addEventListener("click",()=>{
        
        let txt= element.childNodes[3].innerText;
        let img=element.childNodes[1].src;
        localStorage.setItem("playlist_txt",`${txt}`)
        localStorage.setItem("playlist_img",`${img}`)  
        localStorage.setItem("item",`${i+5}`)  
        location.href="page2.html";
       
    })
   
});
my_playlist_store.forEach((element,i) => {
    element.addEventListener("click",()=>{
        let txt= element.childNodes[3].innerText;
        let img=element.childNodes[1].src;
        localStorage.setItem("playlist_txt",`${txt}`)
        localStorage.setItem("playlist_img",`${img}`)
        localStorage.setItem("item",`${i+5}`)  
        location.href="page2.html";
    })
});
let describe=document.querySelectorAll(".describe")
fox.onclick=()=>{
for (let i = 0; i < describe.length; i++) {
    describe[i].remove();
}
}