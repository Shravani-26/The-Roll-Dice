// var random1=Math.floor(Math.random()*6)+1;
// var random2=Math.floor(Math.random()*6)+1;
// document.querySelectorAll("img")[0].setAttribute("src","Images/dice"+random1+".png");
// document.querySelector(".img2").setAttribute("src","Images/dice"+random2+".png");
// if(random1>random2){
//   document.querySelector("h1").textContent="Player1 won the Game!!!";
// }
// else{
//   document.querySelector("h1").textContent="Player2 won the Game!!!";
function play(){
  var random1=Math.floor(Math.random()*6)+1;
  var random2=Math.floor(Math.random()*6)+1;
  $(".img1").attr("src","Images/dice"+random1+".png");
  $(".img2").attr("src","Images/dice"+random2+".png");
  if(random1>random2){
    $("h1").text("Player1 won the Game🥳");
  }
  else if(random2>random1){
    $("h1").text("Player2 won the Game🥳");
  }
  else{
    $("h1").text("Draw!! Try Again!");
  }
}
$(document).on("click",play);
$(document).keypress(play);
