let ul=document.querySelector('ul')
let node=document.getElementsByTagName("li");
for (let i = 0; i < node.length; i++) {
  let span = document.createElement("SPAN");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  node[i].appendChild(span)
}
ul.addEventListener('click',(e)=>{
if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked')
}
},false)
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
function newElement(){
    let li=document.createElement("li");
    let inp=document.getElementById("myInput").value
    let txt=document.createTextNode(inp)
    li.appendChild(txt)
    if(inp===''){
        alert("You must write something!");
    }
    else{
        document.getElementById("myUL").appendChild(li)
        setTimeout(s=() => {
            console.log("object");
            document.getElementById("myUL").removeChild(li)
           return li
        }, 5000);
    }
    document.getElementById("myInput").value = "";
    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(text);
   li.appendChild(span);
   let close = document.getElementsByClassName("close");
   for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

}
function completed(){
   let b=s();
   document.getElementById("myUL").appendChild(b)

}
// console.log(new Date().getSeconds());