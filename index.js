function ageInDays(){
    var birthYear =prompt("Which year were you born?");
    var currentTime=new Date();
    var currentYear=currentTime.getFullYear();
    var days=(currentYear-birthYear)*365;
 
    //create a new h1 element
    var h1 =document.createElement('h1');
   // create a content
    var answer=document.createTextNode("You have lived "+ days +" days.");
 
    //set the id attribute to "age" to a h1 element   
         h1.setAttribute("id","age");  
    //put a text note into h1
    h1.appendChild(answer);
 
    //add h1 value to the "flex-box-result"
    document.getElementById("flex-box-result").appendChild(h1);
 }
 
 
 function reset(){
     //remove the 
     document.getElementById("age").remove();
 }
