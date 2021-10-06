var id = (id) => document.getElementById(id);
var classes = (classes) => document.getElementsByClassName(classes);

var arrayOfIds = spiderman = id("card1"),
goku = id("card2"),
sonic = id("card3"),
rayman = id("card4"),
crash = id("card5");

var favButton = classes("button"),
starOutline = classes("starNotClicked"),
starFill = classes("starClicked");


favButton[0].addEventListener(()=>{
    starOutline[0].style.opacity = 0;
    starFill[0].style.opacity = 1;
  })