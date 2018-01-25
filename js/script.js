var removeBtn = document.querySelector(".remove");
var redoBtn = document.querySelector(".redo");
var color = document.querySelectorAll(".colorSelect option");
var redoArray = [];



removeBtn.addEventListener("click", function () {

    var reng = document.querySelector(".colorSelect");
    var input = reng.value;


    for (i = 0; i < color.length; i++) {
        if (color[i].value == input) {
            redoArray.push(color[i]);
            reng.removeChild(color[i]);
            console.log(redoArray);

            // color.removeChild(color.children[color.childElementCount - 1]);    
        }
    }
});


redoBtn.addEventListener("click", function () {
    if (redoArray.length > 0) {
        document.querySelector(".colorSelect").appendChild(redoArray[redoArray.length - 1])
        redoArray.pop();
    }

});

