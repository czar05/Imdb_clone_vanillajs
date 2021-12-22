let favm = document.getElementById("fav_movie");
let favmovie = localStorage.getItem("favMovie");

let savedMovie = JSON.parse(favmovie);
console.log("fav movie", savedMovie);

if (savedMovie == null) {
  favmovie = [];
} else {
  savedMovie.forEach(function (el) {
    const avatar = el.Title;
    const imgsrc = el.Poster;
  
    favm.innerHTML += ` 
   <ul>
    <li>
    <h5 class="card-title">${avatar}</h5>
    <button id="unfav">Unfavourite</button>
    
  
  </li>
  <ul>`;
    let Unfavourite = document.getElementById("unfav");
    Unfavourite.addEventListener("click", function () {
      localStorage.removeItem("favMovie");
      var div = this.parentElement;
      div.style.display = "none";
    });
  });
}
