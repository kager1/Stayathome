$("#button1").click(() => {
    console.log("Yeah, You clicked me")
});
$("#button2").click(() => {
    $("#button1").text("Yeah button")
});
$("#button3").on('click', () => {
    $("button").css("background-color", "magenta")
});