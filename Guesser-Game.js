let formpart = document.querySelector("#form")
let userValue =formpart.querySelector(".uservalue")
let submitBtn = formpart.querySelector("#submit")
let Ruselt = document.querySelector(".game-result")
let resultMassage = document.querySelector(".result-title")
let winPart =document.querySelector(".win-part")
let lostPart =document.querySelector(".lost-part")
let remaning =document.querySelector(".remaning")




let totalAttempts =3;
let win = 0;
let lost = 0;
let Attemps = 0;

formpart.addEventListener("submit",(e)=>{

  Attemps++
  let gussNumber=Number(userValue.value)
  if(Attemps>=4){  
    userValue.disabled=true;
    submitBtn.disabled=true;
    RestarT();
    
  }else{
    chackgussingNumber(gussNumber)
    remaning.innerHTML=`Remaning Attempts :${totalAttempts-Attemps}`
    
  }
  e.target.reset();
  
    e.preventDefault()
})

const chackgussingNumber=(userValue)=>{
  let gussingNumber = guesserMethod(10);
  // console.log(gussingNumber);
  if(gussingNumber===userValue){

    // ----try two ways----


    // let Won =document.createElement("p");
    // let text= document.createTextNode('You have won')
    // Won.appendChild(text)
    // Ruselt.appendChild(Won)
    resultMassage.innerHTML=`You have win`
    win++
  }
  else if(gussingNumber>userValue){
    // resultMassage.innerHTML=`Number is to low .The rendom number is : ${gussingNumber}`
    resultMassage.innerHTML=`Number is to low `
    lost++
  }
  else{
    // resultMassage.innerHTML=`Number is too high. The rendom number is : ${gussingNumber}`
    resultMassage.innerHTML=`Number is too high`
   

  }
  winPart.innerHTML=`you are won : ${win}`
  lostPart.innerHTML=`you are lost : ${lost}`
  

}

const guesserMethod =(limit)=>{
  return Math.floor( Math.random()*limit)+1;
}

const RestarT=()=>{
  let reloadFrom=document.createElement("a")
  reloadFrom.setAttribute("href","#")
  reloadFrom.style.color="white"
  reloadFrom.innerHTML="Restart the game"
  let Wraper=document.querySelector(".wrapper");
  Wraper.appendChild(reloadFrom);
  reloadFrom.addEventListener("click",()=>{
    location.reload()
  })
}







