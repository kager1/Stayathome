let clicksCounter = 0

$("h2").text(clicksCounter)

$("#incr").on('click', () => {
    clicksCounter++
    $("h2").text(clicksCounter)

})

$("#decr").on('click', () => {
    clicksCounter--
    $("h2").text(clicksCounter)

})