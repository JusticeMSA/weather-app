

//Elements involved in search
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let cityName = null;

//Elements who's innerHtml will be changed
let tempElement = document.querySelector(".today-forecust");
let tempIcon = Array.from(document.getElementsByClassName("scale-type"));