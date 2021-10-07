/*DOM */

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


/*Card, Favorite and remove buttons that save to local storage and remove them */

favButton[0].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Spider-man", 
                        `<h2>SPIDER-MAN
                        <img class="starClicked" src="https://github.com/JakubM1999/Module3-Javascript-APIs/blob/main/img/star2.png?raw=true" alt="star">
                        </h2>
                        <img class="hero1" src="img/hero1.png" alt="Spider-Man">`)
    starOutline[0].style.opacity = 0;
    starFill[0].style.opacity = 1;
    remButton[0].style.display = "initial";
    favButton[0].style.display = "none";
  })

  remButton[0].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Spider-man")
    starOutline[0].style.opacity = 1;
    starFill[0].style.opacity = 0;
    remButton[0].style.display = "none";
    favButton[0].style.display = "initial";
  })

  favButton[1].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Goku", `<h2>GOKU
                                <img class="starClicked" src="https://github.com/JakubM1999/Module3-Javascript-APIs/blob/main/img/star2.png?raw=true" alt="star">
                                </h2>
                                <img class="hero2" src="img/hero2.png" alt="Goku">`)
    starOutline[1].style.opacity = 0;
    starFill[1].style.opacity = 1;
    remButton[1].style.display = "initial";
    favButton[1].style.display = "none";
  })

  remButton[1].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Goku")
    starOutline[1].style.opacity = 1;
    starFill[1].style.opacity = 0;
    remButton[1].style.display = "none";
    favButton[1].style.display = "initial";
  })

  favButton[2].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Sonic", `<h2>SONIC
                                    <img class="starClicked" src="https://github.com/JakubM1999/Module3-Javascript-APIs/blob/main/img/star2.png?raw=true" alt="star">
                                    </h2>
                                    <img class="hero3" src="img/hero3.png" alt="Sonic">`)
    starOutline[2].style.opacity = 0;
    starFill[2].style.opacity = 1;
    remButton[2].style.display = "initial";
    favButton[2].style.display = "none";
  })

  remButton[2].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Sonic")
    starOutline[2].style.opacity = 1;
    starFill[2].style.opacity = 0;
    remButton[2].style.display = "none";
    favButton[2].style.display = "initial";
  })

  favButton[3].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Rayman", `<h2>RAYMAN
                        <img class="starClicked" src="https://github.com/JakubM1999/Module3-Javascript-APIs/blob/main/img/star2.png?raw=true" alt="star">
                        </h2>
                        <img class="hero4" src="img/hero4.png" alt="Rayman">`)
    starOutline[3].style.opacity = 0;
    starFill[3].style.opacity = 1;
    remButton[3].style.display = "initial";
    favButton[3].style.display = "none";
  })

  remButton[3].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Rayman")
    starOutline[3].style.opacity = 1;
    starFill[3].style.opacity = 0;
    remButton[3].style.display = "none";
    favButton[3].style.display = "initial";
  })

  favButton[4].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.setItem("Crash", `<h2>CRASH
                        <img class="starClicked" src="https://github.com/JakubM1999/Module3-Javascript-APIs/blob/main/img/star2.png?raw=true" alt="star">
                        </h2>
                        <img class="hero5" src="img/hero5.png" alt="Crash">`)
    starOutline[4].style.opacity = 0;
    starFill[4].style.opacity = 1;
    remButton[4].style.display = "initial";
    favButton[4].style.display = "none";
  })

  remButton[4].addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("Crash")
    starOutline[4].style.opacity = 1;
    starFill[4].style.opacity = 0;
    remButton[4].style.display = "none";
    favButton[4].style.display = "initial";
  })


/*SPA */

var favoriteHeroPage = () => {
    h1.innerHTML= "Your Favorite Heros"
    card1.innerHTML= "";
    card2.innerHTML= "";
    card3.innerHTML= "";
    card4.innerHTML= "";
    card5.innerHTML= "";
/*GetItem property */
    var x = localStorage.getItem("Spider-man")
    card1.innerHTML = x;

    var x = localStorage.getItem("Goku")
    card2.innerHTML = x;

    var x = localStorage.getItem("Sonic")
    card3.innerHTML = x;

    var x = localStorage.getItem("Rayman")
    card4.innerHTML = x;

    var x = localStorage.getItem("Crash")
    card5.innerHTML = x;
}
/*calling functions */
goYourFavoriteHerosButton[0].addEventListener("click", favoriteHeroPage);
goYourFavoriteHerosButton[0].addEventListener("click", (e) => {
    e.preventDefault();
    goYourFavoriteHerosButton[0].style.display = "none";

})