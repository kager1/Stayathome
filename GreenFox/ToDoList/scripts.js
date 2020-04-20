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