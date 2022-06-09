var p1,p2;
function game()
{
    window.location.reload();
    var rn1=Math.floor(Math.random()*6)+1;
var rn2=Math.floor(Math.random()*6)+1;
var randimg1="dice"+rn1+".png";
var randimg2="dice"+rn2+".png";
var imgs1="images/" + randimg1;
var imgs2="images/" + randimg2;
var array =document.querySelectorAll(".content img");
array[0].setAttribute("src", imgs1);
array[1].setAttribute("src", imgs2);

var ms1= p1+" Win Match ";
var ms2= p2+" Win Match ";
if(rn1>rn2)
{
    // document.querySelectorAll(".guss p")[0].textContent=ms1;
    alert(ms1);
}
else if(rn1===rn2)
{
    // document.querySelectorAll(".guss p")[0].textContent="Nobody win.";
    alert("NO one is winner");
}
else 
{
    // document.querySelectorAll(".guss p")[0].textContent=ms2;
    alert(ms2);
}
}

function name1()
{
  p1=  prompt("Enter First Player Name : ");
  document.querySelectorAll(".content p")[0].textContent=p1;
  
}
function name2()
{
  
  p2=  prompt("Enter Second Player Name : ");
  document.querySelectorAll(".content p")[1].textContent=p2;
}