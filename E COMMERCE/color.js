let btns=document.getElementsByTagName("BUTTON");
let i_tag=document.getElementsByTagName("I");
let menu = document.getElementById("menu");
let ulAnchors=document.querySelectorAll(".footerUl a");
let fonts=document.querySelectorAll(".rbox");
let popbox = document.getElementById("popbox");
let color_add = document.getElementById("color_add");
let color_remove = document.getElementById("color_remove");
let color =document.getElementsByClassName("color")[0];
let fonts1 =document.getElementsByClassName("mbox")[0];
let navs =document.querySelectorAll(".green_tag");
let list=color.getElementsByTagName("li");
let h1=document.getElementsByTagName('H1')
let h2=document.getElementsByTagName('H2')
let h3=document.getElementsByTagName('H3')
let h4=document.getElementsByTagName('H4')
let h5=document.getElementsByTagName('H5')
let h6=document.getElementsByTagName('H6')
let para=document.getElementsByTagName('p')
let spans=document.getElementsByTagName('span');
let add=document.getElementById("add")
let a=true;
//navbar
menu.onclick = () => {
    popbox.className = "pop";
};
remove.onclick = () => {
    popbox.className = "hide";
};
color_add.onmouseover = () => {
    add.style.color="white";
}
color_add.onmouseleave = () => {
    add.style.color="rgb(0, 85, 255)";
}
color_add.onclick = () => {
  if(a){
      color_add.style.right="250px";
      color.classList.remove('hide');
      a=false;
  }
  else{
    color.classList.add('hide');
    color_add.style.right=0;
    a=true;
  }
};
color_remove.onclick = () => {
    color.classList.add('hide');
    color_add.style.right=0;
    a=true;
};
for (const font of fonts) {
font.addEventListener('click',()=>{
    let f1=font.style.fontFamily;
    fontchoosed(f1);
})}
fonts1.addEventListener('click',()=>{
    let f1=fonts1.style.fontFamily;
    fontchoosed(f1);
})
for (const li of list) {
li.addEventListener('click',()=>{
    let color1=li.children[0].style.backgroundColor;
    let color2=li.children[1].style.backgroundColor;
    colored(color1,color2);
})}
// color

function fontchoosed(f1){
    document.body.style.fontFamily=f1;
    console.log(f1);
    for (const h of h1) {
        h.style.fontFamily=f1
    }
    for (const h of h2) {
        h.style.fontFamily=f1
    }
    for (const h of h3) {
        h.style.fontFamily=f1
    }
    for (const h of h4) {
        h.style.fontFamily=f1
    }
    for (const h of h5) {
        h.style.fontFamily=f1
    }
    for (const h of h6) {
        h.style.fontFamily=f1
    }
    for (const p of para) {
        p.style.fontFamily=f1
    }
    for (const span of spans) {
        span.style.fontFamily=f1
    }
}
function colored(color1,color2){
    for (const ulAnchor of ulAnchors) {
        ulAnchor.style.color=color1
    }
    for (const nav of navs) {
        nav.addEventListener('mouseover',()=>{
            nav.style.color=color2
        })
        nav.addEventListener('mouseleave',()=>{
            nav.style.color="black"
        })
    }
    for (const i of i_tag) {
        i.style.color=color1
    }
    for (const btn of btns) {
        btn.style.backgroundColor=color1
    }
}