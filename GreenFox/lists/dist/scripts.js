let names = ["Annamaria", "Blanka", "Balazs", "Gergely"];
console.log(names.length);



names.forEach(element => {if (element === "Gergely") {
        $("ul").append("<li><strong>" + element + "</strong></li>")
} else {
    $("ul").append("<li>" + element + "</li>")
}

});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$("main").append("<h2>" + additionalBlock.title + "</h2>")
$("main").append("<p>" + additionalBlock.text + "</p>")