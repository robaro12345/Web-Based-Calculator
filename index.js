let prevValue;
function click0(){
    console.log(0);
    prevValue = $('.input').html()
    $(".input").append(0)
}
function click1(){
    console.log(1)
    prevValue = $('.input').html()
    $(".input").append(1)
}
function click2(){
    console.log(2)
    prevValue = $('.input').html()
    $(".input").append(2)
}
function click3(){
    console.log(3)
    prevValue = $('.input').html()
    $(".input").append(3)
}
function click4(){
    console.log(4)
    prevValue = $('.input').html()
    $(".input").append(4)
}
function click5(){
    console.log(5)
    prevValue = $('.input').html()
    $(".input").append(5)
}
function click6(){
    console.log(6)
    prevValue = $('.input').html()
    $(".input").append(6)
}
function click7(){
    console.log(7)
    prevValue = $('.input').html()
    $(".input").append(7)
}
function click8(){
    console.log(8)
    prevValue = $('.input').html()
    $(".input").append(8)
}
function click9(){
    console.log(9)
    prevValue = $('.input').html()
    $(".input").append(9)
}
function clickd(){
    console.log("Decimal")
    prevValue = $('.input').html()
    $(".input").append(".")
}
function clickX(){
    console.log("*")
    prevValue = $('.input').html()
    $(".input").append("*")
}
function clickdiv(){
    console.log("/")
    prevValue = $('.input').html()
    $(".input").append("/")
}
function clicks(){
    console.log("-")
    prevValue = $('.input').html()
    $(".input").append("-")
}
function clicka(){
    console.log("+")
    prevValue = $('.input').html()
    $(".input").append("+")
}
function clickdel(){
    console.log("Delete")
    $(".input").empty();
    $(".input").append(prevValue)
}
function clickAll () {
    console.log("Delete All")
    $(".input").empty();
}
function clickeq() {
    let result = eval($('.input').html());
    $(".input").empty();
    $(".input").append(result);
}
function clickbracket(){
    console.log("(")
    prevValue = $('.input').html()
    $(".input").append("(")
} 
function clicklbracket() {
    console.log(")")
    prevValue = $('.input').html()
    $(".input").append(")")
}