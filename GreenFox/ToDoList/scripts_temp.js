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
