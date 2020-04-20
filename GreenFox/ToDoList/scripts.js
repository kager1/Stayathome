//let countOfitems = 0
let liststring = []
let listobject = ""

$("#addone").click(() => {
    //    countOfitems++
    //    liststring = [$("#listitem").val()];
    if ($("#listitem").val() == 0) {
        console.log("nothing to add");
    }
    else {
        liststring.push($("#listitem").val());
        listobject = $("#listitem").val()
        console.log(listobject);
        $("#listitem").val("")
        //$("ul").append(`<li class="">${listobject}</li>`)
        $("ul").append('<li class="">' + liststring.slice(-1) + '</li>')

    };

    $("li").click(function () {
            $(this).toggleClass("stroked" );
        }
        //$("li").toggleClass( "stroked", addOrRemove )
        //$li.toggleClass('stroked')
        //$(this).css("text-decoration", "line-through")
    )

});