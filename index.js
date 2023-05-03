function showd () {
   var hide =  document.getElementsByClassName("hide") ;
  
  var toggbutton = document.getElementsByClassName("toggbutton");
    
     
    console.log(toggbutton)
    for (let i = 0; i < hide.length; i++) {
    
   
    if (hide[i].style.display === "none") {
        hide[i].style.display = "block";
        toggbutton.innerText = "assdgh"
    }else {
        hide[i].style.display = "none" ; 
        toggbutton.innerText = "ddjdrreeerre" ;
    }
}
    
 
}

   

var submit = document.getElementById("submit");

submit.addEventListener("click" , submitfun);

function submitfun () {
     var navColor = document.getElementById("navcolor");
   
  
  const  nav = document.querySelector("nav");
    
    
    nav.style.backgroundColor = navColor.value ;  
    
    backgroundcolorstore = navColor.value ;
    
    var navtextColor = document.getElementById("textcolor");
     const links = document.getElementsByClassName("link");
   
    
     for(var i=0; i< links.length; i++){
      
        links[i].style.color = navtextColor.value ;      
      }  
     
      textcolorstore = navtextColor.value ;
    
const  navcode = `<nav>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Hassnain Tariq</label>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Free Chart</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
      </ul>
            </nav>`
            
            
 const navcss = `*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
body{
  font-family: montserrat;
  
}
nav{
  background-color: ${backgroundcolorstore} ;
  height: 80px;
  width: 100%;
  z-index: 2;
  
}
label.logo{
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0px 30px;
  font-weight: bold;
  
}
nav ul{
  float: right;
  margin-right: 20px;
}
nav ul li{
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a{
  color: ${textcolorstore} ;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}

.checkbtn{
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check{
  display: none;
}

@media (max-width: 952px){
  label.logo{
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a{
    font-size: 16px;
  }
}
@media (max-width: 858px){
  .checkbtn{
    display: block;
  }
ul{
    position: fixed;
    width: 60%;
    height: 100vh;
    background-color: #12d62f;
    top: 0px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    z-index: 3;
  }
  nav ul li{
    display: block;  
    margin: 50px 0;
    line-height: 30px;  
  }
nav ul li a{
    font-size: 20px;
  }

  #check:checked ~ ul{
    left: 0;
  }
}
@media (max-width: 359px){
label.logo{
    font-size: 16px;
    padding-left: 6px;
    
}
}

`         
            
    
   const html = document.getElementById("html");
   
   html.innerText = navcode ;
   /* html.innerText = navcode ; */
   
   
   const css = document.getElementById("css") ;
   
   css.innerText = navcss ;
           
            
            
            
            
}
 


  
            
            
