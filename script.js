console.log("hello");
// fetch(`http://www.omdbapi.com/?t=${e.target.value}&apikey=${access_token}`)

let access_token = "9204632f";
// const btn = document.getElementById("btn");
const search = document.getElementById("search");
const suggestion = document.getElementById("match-list");

search.addEventListener("input", (e) => {
  const fetchApi = async function () {
    //  await fetch(`http://www.omdbapi.com/?t=${e.target.value}&apikey=${access_token}`)
    // .then(response => response.json())
    // .then((data => {
    //   console.log(data);
    // data = JSON.parse();
    const response = await fetch(
      `http://www.omdbapi.com/?t=${e.target.value}&apikey=${access_token}`
    );
    const data = await response.json();
    console.log(data);
    //  Object.entries(data).forEach(v => {

    const avatar = data.Title;
    const imgsrc = data.Poster;
    suggestion.innerHTML += `
          <div class="card-body">
        <h5 class="card-title">${avatar}</h5>
        <button id="fav" on>Favourite</button>
        <button id="detail">Details</button>
      </div>`;
      let favmovie = JSON.parse(localStorage.getItem('favMovie')) || [];
      localStorage.getItem('favMovie');
       
    let favlist = document.querySelectorAll('#fav');
    favlist.forEach((fav)=>{
       
    fav.addEventListener("click", function () {
      if(fav.innerHTML == "Favourite"){
        fav.innerHTML = "Unfavourite";
        favmovie.push(data);
        localStorage.setItem('favMovie', JSON.stringify(favmovie));
        e.target.value = " ";
        // var div = this.parentElement;
        // div.style.display = "none";
       
      }
     
    });
    })

    
    
    // let detail = document.getElementById('detail');
    // let moviedetail = document.getElementById('movie-detail');
    // console.log(moviedetail);
    // detail.addEventListener('click', function(){
      
      
    //   moviedetail.innerHTML += `<div class="card" style="width: 18rem;">
    //   <img src="${imgsrc}" class="card-img-top" alt="...">
    //   <div class="card-body">
    //     <h5 class="card-title">${avatar}</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    //   <ul class="list-group list-group-flush">
    //     <li class="list-group-item">An item</li>
    //     <li class="list-group-item">A second item</li>
    //     <li class="list-group-item">A third item</li>
    //   </ul>
    //   <div class="card-body">
    //     <a href="#" class="card-link">Card link</a>
    //     <a href="#" class="card-link">Another link</a>
    //   </div>
    // </div>`
    
     
    // })
    //  });
  };

  fetchApi();
  
});

