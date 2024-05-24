

var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (params) {
        var word = this.innerHTML;
        sound(word);
        ani(word);
});
}

document.addEventListener("keypress", function (event) {
    sound(event.key);
    ani(event.key);
})
function sound(word) {
    switch (word) {
        case "w":
            var t = new Audio("sounds/crash.mp3");
            t.play();
            break;
        case "a":
            var q = new Audio("sounds/kick-bass.mp3");
            q.play();
            break;
        case "s":
            var r = new Audio("sounds/snare.mp3");
            r.play();
            break;
        case "d":
            var y = new Audio("sounds/tom-1.mp3");
            y.play();
            break;
        case "j":
            var p = new Audio("sounds/tom-2.mp3");
            p.play();
            break;
        case "k":
            var v = new Audio("sounds/tom-3.mp3");
            v.play();
            break;
        case "l":
            var m = new Audio("sounds/tom-4.mp3");
            m.play();
            break;
        default:
            console.log(word);
    }
}
function ani (key){
    var sum = document.querySelector("."+key);
    sum.classList.add("pressed");
    setTimeout(function (){
        sum.classList.remove("pressed");
    }, 100);
}
