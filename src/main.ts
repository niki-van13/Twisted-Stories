import './style.css'
import { gameLivell } from './gameData'

function onLoad(){  
  renderPassi()
}




let text = document.querySelector<HTMLDivElement>('#text')! 
let leftBtn = document.getElementById("leftBtn") as HTMLElement 
let rightBtn = document.getElementById("rightBtn") as HTMLElement 


let actualStep = gameLivell[0]

function GoGame(this: HTMLElement){
  let nextStep: number = 0  
  if (this.id == "leftBtn") {nextStep = actualStep.answers.leftBtn!.path
    
  } else if(this.id == "rightBtn") {nextStep = actualStep.answers.rightBtn!.path
  } 
  else(
    console.log("funziona")
    )
    const foundPassi = gameLivell.find(function(gameStep) {
      return gameStep.id == nextStep
    });
    if ( foundPassi ) {
      actualStep = foundPassi
      console.log(foundPassi)
      renderPassi()
    }
    
  }  
  
  function renderPassi() {
    text!.innerText = actualStep.question
    leftBtn!.innerText = actualStep.answers.leftBtn!.answer
    leftBtn!.addEventListener("click", GoGame)  
    rightBtn!.innerText = actualStep.answers.rightBtn!.answer
    rightBtn!.addEventListener("click", GoGame) 
 }
   
   
  

 


onLoad()

