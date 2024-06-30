let btn1 = document.querySelector(".btn1")
let nav = document.querySelector(".nav")
let body2 = document.querySelector(".container2")
let span = document.querySelector(".spani")
let wrapper= document.querySelector(".wraper")
let image = document.querySelector(".im1")
let image1 = document.querySelector(".im2")
let image2 = document.querySelector(".im3")
let image3 = document.querySelector(".im4")
let change = document.querySelector(".change")
let para = document.querySelector(".para")
let imgg = document.querySelector(".imgg")
let btn4 = document.querySelector(".btn4")

var mode ="light"
btn1.addEventListener("click",()=>{

if(mode=="light"){
     let body = document.querySelector(".container")
     body2.style.backgroundColor="black";
     nav.style.backgroundColor="antiquewhite"
     span.style.color="white"
     btn1.innerHTML="Drak";
     span.style.textShadow="3px -2px 15px white"
     span.style.borderRight="6px solid white"
     mode="dark"
     wrapper.style.color="antiquewhite"
     imgg.style.border="10px double white"
    
     
     image.style.borderRadius="50%"
     image1.style.borderRadius="40%"
     change.style.color="red"
     para.style.color="cyan"
     

}else{
     body2.style.backgroundColor="antiquewhite";
     mode="light"
      span.style.color="black"
      span.style.borderRight="6px solid black"
      btn1.innerHTML="Light"
      wrapper.style.color="darkblue"
      change.style.color="black"
      para.style.color=" rgb(117, 45, 168)"

}
             

})



































































let btn2 = document.querySelector(".btn2")
dropmenu = document.querySelector(".nav-part3")
let doc = "hai"
btn2.addEventListener("click",()=>{
  if(doc=="hai"){
     dropmenu.style.visibility="visible"

     doc="bye"

     let close =document.querySelector(".close")
     close.addEventListener("click",()=>{
          dropmenu.style.visibility="hidden"

     })
  }else{
     dropmenu.style.visibility="hidden"
    
     doc="hai"
  }
})