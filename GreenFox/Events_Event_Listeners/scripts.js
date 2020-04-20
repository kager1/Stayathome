$("#button1").click(() => {
    console.log("Yeah, You clicked me")
});
$("#button2").click(() => {
    $("#button1").text("Yeah button")
});

let clicksCounter = 0

$("#button3").on('click', () => {
    clicksCounter++
    console.log(clicksCounter)
    value = $("#getcolor").val();
    if (clicksCounter < 2) {
        $("button").css("background-color", value)

    }
    
});