let cardContainer = document.getElementById("cardContainer");
let show=document.getElementById("show");
//api fetch
let img_arr=[
  "https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://www.analyticsinsight.net/wp-content/uploads/2021/08/Top-8-Programming-Languages-for-Hacking-2021.jpg",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://static.vecteezy.com/system/resources/previews/024/689/019/original/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-virtual-tunnel-warp-made-with-digital-code-data-flow-illustration-vector.jpg",
  "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Dvk7lTmbcO83aavqul3HN_M4W9EHpdjPqtIAHlIxAVzzKZalynQC5FVWAiNvvYJhuI4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxZp_JAd-6NLT2zdJ-gXCGJwtKeZ7wiNumg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7n6mxr82lUiuTaOBHMPBQaSYOiBJEHCeHQ&usqp=CAU",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60g",
]
  let url = fetch("https://kontests.net/api/v1/all");
url.then((v) => {
  return v.json();
})
.then((contest) => {
  console.log(contest);
  let ihtml = "";
  let i=0;
  for (item in contest) {
    // let i=Math.floor(Math.random()*7)
    ihtml += `
    <div class="card" style="width: 22rem;">
      <img src=${img_arr[i++]} alt="contest.jpg" class="card-img-top" width=100%>
      <div class="card-body">
      <h5 class="card-title">${contest[item].name}</h5>
      <p class="card-text">Site: ${contest[item].site}</p>
      <a href="${contest[item].url}" class="btn btn-primary">visit now</a>
      </div>
      </div>
      `
     if(i>9){
      i=0
     }
    }
    cardContainer.innerHTML = ihtml;
  });
  let arr=["blue","red"];
  let i=0;
  function changeColor(){
    randomColor=arr[i]
    show.style.color = randomColor;
    i++
    if(i>1){
      i=0;
    }
    }
  setInterval(changeColor, 500);