function scuberGreetingForFeet(ride){
if (ride <= 400 ){
  return "This one is on me!";
}
else if (ride > 400 && ride < 2000){
  return "That will be twenty bucks.";
}else if (ride > 2000 && ride <= 2500){
  return  "I will gladly take your thirty bucks.";
}else {
  return "No can do.";
}
}

function ternaryCheckCity(City){
let checkCity = (City === 'NYC' ) ? "Ok, sounds good.":"No go.";
return checkCity;
}



function switchOnCharmFromTip(Tip){
let response;
switch(Tip){
case ('generous'):
response = "Thank you so much."; 
break;
case('not as generous'):
response = "Thank you."
break;
default:
response = "Bye.";
}
return response;
}