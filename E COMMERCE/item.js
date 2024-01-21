const item =document.querySelectorAll(".item");
const itemImg =document.getElementById("itemImg");
item.forEach((e)=>{
    e.addEventListener('click',(el)=>{
    console.log(e);
location.href="item.html";
itemfun(e.children[0].src);
// itemImg.src=`${e.children[0].src}`
})
})
function
itemfun(r){
    itemImg.src=r;
}