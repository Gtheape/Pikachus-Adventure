//when they press "no" make pikachu getting ready for thunderolt appear
$(".no").click(function(){
    $(".yes").hide();
    $(".no").hide();
    $(".right") .hide();
    $(".left") .hide();
    $("h2").text("Pikchu looks sad but furious... try to pet him by doubleclicking");
    $(".Pikachu-cry") .fadeIn ();
    $("body") .css ("background-color", "white") ;
});

$(".Pikachu-cry") .dblclick (function(){
    $(".Pikachu-cry") .fadeOut();
    $("h2") .text ("He thunderbolted you D:");
     $("body").css("background-image", "url('https://media2.giphy.com/media/14duI6o1KQF8qs/giphy.gif");
});

//when they press yes to make pikachu sneeze
$(".yes") .click (function(){
    $(".yes").hide();
    $(".no").hide();
    $("h2").text("Pikachu seems happy... but somethings off");
    $(".Pikachu") .fadeIn ();
    $("body") .css ("background-color", "#ffd633") ;
});

$(".Pikachu") .dblclick (function(){
    $(".Pikachu") .slideUp();
    $("h2") .text ("He sneezed!! lets click to follow him");
     $(".sneezing") .fadeIn ();
});

$(".sneezing") .click (function(){
    $("body").css("background-image", "url('https://media.xconomy.com/wordpress/wp-content/images/2018/05/06133256/fork-in-path-Depositphotos_12257535_original-resize-1100x825.jpg");
    $(".sneezing") .hide();
    $("h2") .text ("There are two paths which will you take...");
    $(".right") .show ();
    $(".left") .show ();
});

//Left path they get chased by beedrill
$(".left").click(function(){
    $("h2") .text ("Oh No its a flock of beedrill run!!!");
    $("body").css("background-image", "url('https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagepngbase64iVBORw0KGgoAAAANSUhEUgAABh4AAANx-774ead00d99ca4aac441da5491a9deda.jpg");
});

//Right path leads to a ketchup bottle
$(".right").click(function(){
    $("h2") .text ("The ketchup bottle there it is");
    $(".ketchup") .fadeIn ();
});

$(".ketchup").click(function(){
   $("h2") .text ("YAYYY U DID IT");
    $(".Pika") .fadeIn();
    $(".ketchup") .hide();
});