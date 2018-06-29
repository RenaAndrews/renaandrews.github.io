const kawaiiBowl = document.getElementById('kawaii-bowl');

/*This is my JQuery code to make the bowl link appear opaque. Hopefully gives
the user a clue to click/tap!*/
$('#kawaii-bowl').mouseover(function(){
  kawaiiBowl.style.opacity="0.5";
});
$('#kawaii-bowl').mouseout(function(){
  kawaiiBowl.style.opacity="1";
});
