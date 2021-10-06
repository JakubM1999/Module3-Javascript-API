var h1 = document.querySelector("h1");
var id = (id) => document.getElementById(id);
var classes = (classes) => document.getElementsByClassName(classes);

var spiderman = id("card1"),
goku = id("card2"),
sonic = id("card3"),
rayman = id("card4"),
crash = id("card5");

var favButton = classes("button"),
remButton = classes("button2"),
starOutline = classes("starNotClicked"),
starFill = classes("starClicked"),
goYourFavoriteHerosButton = classes("buttonHead");



favButton[0].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Spider-man", "favorite")
    starOutline[0].style.opacity = 0;
    starFill[0].style.opacity = 1;
    remButton[0].style.display = "initial";
    favButton[0].style.display = "none";
  })

  remButton[0].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Spider-man", "favorite")
    starOutline[0].style.opacity = 1;
    starFill[0].style.opacity = 0;
    remButton[0].style.display = "none";
    favButton[0].style.display = "initial";
  })

  favButton[1].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Goku", "favorite")
    starOutline[1].style.opacity = 0;
    starFill[1].style.opacity = 1;
    remButton[1].style.display = "initial";
    favButton[1].style.display = "none";
  })

  remButton[1].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Goku", "favorite")
    starOutline[1].style.opacity = 1;
    starFill[1].style.opacity = 0;
    remButton[1].style.display = "none";
    favButton[1].style.display = "initial";
  })

  favButton[2].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Sonic", "favorite")
    starOutline[2].style.opacity = 0;
    starFill[2].style.opacity = 1;
    remButton[2].style.display = "initial";
    favButton[2].style.display = "none";
  })

  remButton[2].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Sonic", "favorite")
    starOutline[2].style.opacity = 1;
    starFill[2].style.opacity = 0;
    remButton[2].style.display = "none";
    favButton[2].style.display = "initial";
  })

  favButton[3].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Rayman", "favorite")
    starOutline[3].style.opacity = 0;
    starFill[3].style.opacity = 1;
    remButton[3].style.display = "initial";
    favButton[3].style.display = "none";
  })

  remButton[3].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Rayman", "favorite")
    starOutline[3].style.opacity = 1;
    starFill[3].style.opacity = 0;
    remButton[3].style.display = "none";
    favButton[3].style.display = "initial";
  })

  favButton[4].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Crash", "favorite")
    starOutline[4].style.opacity = 0;
    starFill[4].style.opacity = 1;
    remButton[4].style.display = "initial";
    favButton[4].style.display = "none";
  })

  remButton[4].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Crash", "favorite")
    starOutline[4].style.opacity = 1;
    starFill[4].style.opacity = 0;
    remButton[4].style.display = "none";
    favButton[4].style.display = "initial";
  })


var favoriteHeroPage = () => {
    card1.innerHTML= "";
    card2.innerHTML= "";
    card3.innerHTML= "";
    card4.innerHTML= "";
    card5.innerHTML= "";
}

var getHero = () => {
    var x = localStorage.getItem("spiderman", "favorite");
    document.getElementById("card1").innerHTML = x;
}
goYourFavoriteHerosButton[0].addEventListener("click", getHero);
goYourFavoriteHerosButton[0].addEventListener("click", favoriteHeroPage);
