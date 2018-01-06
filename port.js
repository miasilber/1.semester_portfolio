var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

$ (window).on("load",sidenErLoadet);

function sidenErLoadet(){

    $(".start_button").on("click",skovlyd);
}

function skovlyd(){

    $(".start_button").off("click",ugle);
    $(".start_button").on("click",ugle);
}

function ugle () {

    $(".start_button").off("click",ugle);
    $(".start_button").on("click",mus);

}
