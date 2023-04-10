
 
 
 const changeButton = document.getElementById("change") ;
 
 
 function change () {
  const navColor = document.getElementById("navcolor");
    
  const textColor = document.getElementById("textcolor");
  
  
    
    const  nav = document.querySelector("nav");
    
    
    const links = document.getElementsByClassName("link");
   
    
     for(var i=0; i< links.length; i++){
      
        links[i].style.color = textColor.value ;      
      }        
    nav.style.backgroundColor = navColor.value ;   
 }
 
function  over(em) {
const hoverColor = document.getElementById("hovercolor") ;
const textHoverColor  = document.getElementById("texthovercolor"); 
    
    
 em.style.backgroundColor = hoverColor.value ; 
 em.style.color = textHoverColor.value ;
   
}
function  out(em) {
    
 em.style.backgroundColor = "" ; 
  em.style.color = "" ;
 
   
}
