let itemlistli = document.querySelectorAll(".itemlistli");
let itemImg = document.querySelectorAll(".item_img");
let itemName = document.querySelectorAll(".itemName");
let itemPrice = document.querySelectorAll(".itemPrice");
let ulList = document.getElementById("ulList");
//item list

const item = [
  {
    id: 1,
    item_img_src: "itemListImg/item-list-1.jpg",
    item_name: "Fresh Organic Honey",
    price: 25,
    populirity:9,
    latest:5,
    average:1,
  },
  {
    id: 2,
    item_img_src: "itemListImg/item-list-2.jpg",
    item_name: "Cashue butter",
    price: 39,
    populirity:10,
    latest:9,
    average:3,
  },
  {
    id: 3,
    item_img_src: "itemListImg/item-list-3.jpg",
    item_name: "Diabetic Cookies",
    price: 31,
    populirity:7,
    latest:3,
    average:4,
  },
  {
    id: 4,
    item_img_src: "itemListImg/item-list-4.jpg",
    item_name: "Organic Face Scrub",
    price:32,
    populirity:6,
    latest:6,
    average:2,
  },
  {
    id: 5,
    item_img_src: "itemListImg/item-list-5.jpg",
    item_name: "Pulses From Organic Farm",
    price:23,
    populirity:4,
    latest:2,
    average:5,
  },
  {
    id: 6,
    item_img_src: "itemListImg/item-list-6.jpg",
    item_name: "Assorted Coffee",
    price: 15,
    populirity:1,
    latest:8,
    average:7,
  },
  {
    id: 7,
    item_img_src: "itemListImg/item-list-7.jpg",
    item_name: "Natural Extracted Edible Oil",
    price: 18,
    populirity:2,
    latest:1,
    average:8,
  },
  {
    id: 8,
    item_img_src: "itemListImg/item-list-8.jpg",
    item_name: "Wheat From Organic Farms",
    price: 35,
    populirity:3,
    latest:4,
    average:10,
  },
  {
    id: 9,
    item_img_src: "itemListImg/item-list-9.jpg",
    item_name: "Handpicked Red Chillies",
    price: 27,
    populirity:8,
    latest:7,
    average:9,
  },
  {
    id: 10,
    item_img_src: "itemListImg/item-list-10.jpg",
    item_name: "Hand Sanitizer",
    price: 16,
    populirity:5,
    latest:10,
    average:6,
  },
];

let isAppered = true;
let sort = document.getElementById("sort");
let sortLiBox = document.getElementById("sortLiBox");
let sortBox = document.getElementById("sortBox");
let sortLi = document.getElementById("sortLi");
const sortBy = document.querySelectorAll(".sortLi");
let sbox = document.getElementsByClassName("sbox");
let p2=false;
var sortbyLowPrice=item.slice(0);
var sortbyHighPrice=item.slice(0);
var sortbypopularity=item.slice(0);
var sortbylatest=item.slice(0);
var sortbyaverage=item.slice(0);

sortbypopularity.sort(function(a,b) {
    return a.populirity - b.populirity;
})
sortbyLowPrice.sort(function(a,b) {
    return a.price - b.price;
})
sortbylatest.sort(function(a,b) {
    return a.latest - b.latest;
})
sortbyaverage.sort(function(a,b) {
    return a.average - b.average;
})
sortbyHighPrice.sort(function(a,b) {
    return b.price - a.price;
})
itemlistli.forEach((e, i) => {
  itemImg[i].src = item[`${i}`].item_img_src;
  itemName[i].textContent = item[`${i}`].item_name;
  itemPrice[i].textContent = "£"+item[`${i}`].price+".00";
});
page1.onclick=()=>{
  itemlistli.forEach((e) => {
    e.style.display=""
  });
  itemlistli[0].style.display=''
  itemImg[0].src = item[0].item_img_src;
  itemName[0].textContent = item[0].item_name;
  itemPrice[0].textContent = "£"+item[0].price;
  p2=false;
  pagechange.innerHTML=` <i class="bi bi-arrow-right"></i>`
  page_result(p2);
  window.onload();
}
page2.onclick=()=>{
  itemlistli.forEach((e, i) => {
    e.style.display="none"
  });
  itemlistli[0].style.display=''
  itemImg[0].src = item[9].item_img_src;
  itemName[0].textContent = item[9].item_name;
  itemPrice[0].textContent = "£"+item[9].price;
  p2=true;
  pagechange.innerHTML=` <i class="bi bi-arrow-left"></i>`
  page_result(p2);
  window.onload();


}
let pgchange=false;
pagechange.onclick=()=>{
  if(pgchange){
    page2.onclick();
    pagechange.innerHTML=` <i class="bi bi-arrow-left"></i>`
    p2=true;
    page_result();
    pgchange=false;
  }
  else{
    page1.onclick();
    pagechange.innerHTML=` <i class="bi bi-arrow-right"></i>`
    p2=false;
    page_result();
    pgchange=true;
  }
  window.onload();

}

function sorting() {
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    sortBox.style.border="black .2px dashed";
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;
    isAppered = true;
  }
}
sortBy.forEach((element) => {
  element.onclick = () => {
    sortLi.textContent = element.textContent;
    if (isAppered) {
      sortLiBox.classList.toggle("hide") ;
      sortBox.style.border="black .2px dashed";
      isAppered = false;
    } 
    else {
      sortLiBox.classList.toggle("hide");
      sortBox.style.border=0;
      isAppered = true;
    }
  };
});
sortLiBox.children[0].onclick=(e)=>{
  itemlistli.forEach((e, i) => {
    itemImg[i].src = item[`${i}`].item_img_src;
    itemName[i].textContent = item[`${i}`].item_name;
    itemPrice[i].textContent = "£"+item[`${i}`].price+".00";
  });
  sortLi.textContent = e.target.textContent;
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    sortBox.style.border="black .2px dashed";
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;

    isAppered = true;
  }
}
sortLiBox.children[1].onclick=(e)=>{
  itemlistli.forEach((e, i) => {
    itemImg[i].src = sortbypopularity[`${i}`].item_img_src;
    itemName[i].textContent = sortbypopularity[`${i}`].item_name;
    itemPrice[i].textContent = "£"+sortbypopularity[`${i}`].price+".00";
  });
  sortLi.textContent = e.target.textContent;
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    sortBox.style.border="black .2px dashed";
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;

    isAppered = true;
  }
}
sortLiBox.children[2].onclick=(e)=>{
  itemlistli.forEach((e, i) => {
    itemImg[i].src = sortbyaverage[`${i}`].item_img_src;
    itemName[i].textContent = sortbyaverage[`${i}`].item_name;
    itemPrice[i].textContent = "£"+sortbyaverage[`${i}`].price+".00";
  });
  sortLi.textContent = e.target.textContent;
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;
    isAppered = true;
  }
}
sortLiBox.children[3].onclick=(e)=>{
  itemlistli.forEach((e, i) => {
    itemImg[i].src = sortbylatest[`${i}`].item_img_src;
    itemName[i].textContent = sortbylatest[`${i}`].item_name;
    itemPrice[i].textContent = "£"+sortbylatest[`${i}`].price+".00";
  });
  sortLi.textContent = e.target.textContent;
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;

    isAppered = true;
  }
}
sortLiBox.children[4].onclick=(e)=>{
  itemlistli.forEach((e, i) => {
    itemImg[i].src = sortbyHighPrice[`${i}`].item_img_src;
    itemName[i].textContent = sortbyHighPrice[`${i}`].item_name;
    itemPrice[i].textContent = "£"+sortbyHighPrice[`${i}`].price+".00";
  });
  sortLi.textContent = e.target.textContent;
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;

    isAppered = true;
  }
}
sortLiBox.children[5].onclick=(e)=>{
  itemlistli.forEach((e, i) => {
    itemImg[i].src = sortbyLowPrice[`${i}`].item_img_src;
    itemName[i].textContent = sortbyLowPrice[`${i}`].item_name;
    itemPrice[i].textContent = "£"+sortbyLowPrice[`${i}`].price+".00";
  });
  sortLi.textContent = e.target.textContent;
  if (isAppered) {
    sortLiBox.classList.toggle("hide") ;
    isAppered = false;
  } else {
    sortLiBox.classList.toggle("hide");
    sortBox.style.border=0;

    isAppered = true;
  }
}


let searchEnter=document.getElementById("searchEnter");  
let searchFilter=document.getElementById("searchFilter");
let page2Li=document.querySelectorAll(".page2Li")
searchEnter.onclick=()=>{
  let searchvalue=searchFilter.value;  
  if(searchvalue ===''){
    alert("enter something");
  }
  else{
    searchFilter.value=''
    search_title.style.fontSize="50px"
    search_title.innerText=`Search results: ${searchvalue}`
    search_title_inner.innerText=`/ Search results for : ${searchvalue}`
  }
  itemlistli.forEach((e,i)=> {
    if(item[i].item_name.toUpperCase().indexOf(searchvalue.toUpperCase())>-1){
      i>8?itemlistli[i].classList.remove("hide"):""
      itemlistli[i].style.display="";
    }
    else{
      itemlistli[i].style.display="none"
    }
  })
  
}
let s_result=document.getElementById("s_result");
function page_result(){
  if(p2){
    s_result.innerText=`Showing 10-10 of 10 results`;
  }
  else{
    s_result.innerText=`Showing 1-9 of 10 results`;
  }
}
// searchFilter.onbeforeinput=()=>{
//   console.log("dd");
// }

