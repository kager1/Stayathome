<<<<<<< HEAD
let todoadd = []

$("#addone").click(function () {
    todoadd.push($("input").val())
    console.log(todoadd);
    last_element = todoadd[todoadd.length - 1];
    $("#main").append('<div class="list"><p>' + last_element + '</p></div>')

 /*    var clicked;
    $('.list').click(function () {
        clicked = $(this);
    });
    $(clicked).toggleClass("stroke"); */
})
    $("div.list").on('click', function () {
        console.log("katt")
        $("p").toggleClass("stroke")
})



/* $("h1").on( "click", function() {
    console.log( 'This item was clicked' );
  });

$(document).on("click", "list" , function() {
    $(this).parent().remove()});

$("li").on('click',function() {
        $(this).css("background-color", "lime");
}) */
=======
let countOfitems = 0

$("#addone").click(() =>{
    countOfitems++
    liststring = $("#listitem").val();
    console.log(liststring)
    $("#main").append('<div><h2>' + liststring + '</div></h2>')
    $("#listitem").val("")
})

/* $("#addone").on('click', () => {
    countOfitems++
    let liststring = $("#listitem").val();
    $("ul").append("<li>"liststring"</li>")
)}; */
>>>>>>> parent of 31f4e81... almost working
