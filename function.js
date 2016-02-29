window.addEventListener('load', processinput, false);

function processinput (){

var myinput  = document.getElementById('myinput')

var mydiv  = document.getElementById('mydiv')

myinput.addEventListener('input',changetext,false)

function changetext(e){
  var foo = e.target
  console.log(foo.value)
  mydiv.style.background= foo.value
}

}
