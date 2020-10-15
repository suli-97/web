const theater = document.querySelector(".theater");
const seats = document.querySelectorAll(".row .seat");
const counter = document.getElementById("counter");
const price = document.getElementById("price");
const movie = document.getElementById("movies");

var occupied = {
    0:[27,28],
    1:[35,36,37],
    2:[15,18,23],
    3:[45]
};
if(localStorage.getItem("selected")==null){
    var selected = {
        0:[],
        1:[],
        2:[],
        3:[]
    };
    var ct=0;
    var pr=0;
    localStorage.setItem("selected",JSON.stringify(selected));
    localStorage.setItem("counter",ct);
    localStorage.setItem("price",pr);
}
var ct=parseInt(localStorage.getItem("counter"));
var pr=parseInt(localStorage.getItem("price"));
counter.innerHTML=ct;
price.innerHTML=pr;
switchMovie();
function switchMovie(){
    var id = movie.selectedIndex;
    var selected_id = JSON.parse(localStorage.getItem("selected"));
    seats.forEach(function(seat){
        seat.classList.remove("selected","occupied")
    } );
    for(let x of occupied[id]){
        seats[x].classList.add("occupied");
    }
    for(let x of selected_id[id]){
        seats[x].classList.add("selected");
    }
};
function select(e){
    if(!e.target.classList.contains("seat") || e.target.classList.contains("occupied"))
        return;
    var id = movie.selectedIndex;
    var selected = JSON.parse(localStorage.getItem("selected"));
    e.target.classList.toggle("selected");
    if(e.target.classList.contains("selected")){
        ct++;
        counter.innerHTML=ct;
        pr += parseInt(movie.value);
        price.innerHTML = pr;
        selected[id].push([...seats].indexOf(e.target));
    }else{
        ct--;
        counter.innerHTML=ct;
        pr -= parseInt(movie.value);
        price.innerHTML = pr;
        selected[id].splice(selected[id].indexOf([...seats].indexOf(e.target)),1);
    }
    localStorage.setItem("selected",JSON.stringify(selected));
    localStorage.setItem("counter",ct);
    localStorage.setItem("price",pr);
};
movie.addEventListener("change",switchMovie);
theater.addEventListener("click",select);