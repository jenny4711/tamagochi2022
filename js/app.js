// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi
// alert("let's start!")


// setInterval-If I set 5 seconds, the method is operated repeatedly every 5 seconds.
// clearInterval-It stops me from doing setInterval .
class Tamagotchi{
// Display the following metrics for your pet:    
constructor( hunger=0,sleep=0,boredom=0,age=0){
this.hunger = hunger
this.sleep = sleep
this.boredom = boredom
this.age =age

//     Increase your pet's age every x minutes


this.life= setInterval(
    this.ageUp.bind(this),30000 )
    
     // Life level
this.timer =setInterval(
this.hungerGage.bind(this),3000)


this.timerS =setInterval(
this.sleepGage.bind(this),3000)




this.timerB =setInterval(
this.boredomGage.bind(this),3000)    
    
}



//  gage up
hungerGage(){
  

const hungerV =document.querySelector('.hungerP') 
for(let i = 0 ; i <1; i++){
this.hunger+=1
console.log(this.hunger)
}

if(this.hunger >=10){
clearInterval(this.timer)
clearInterval(this.timerB)
clearInterval(this.timerS)
alert('Your Pet is death')

 }
 hungerV.innerHTML =`${this.hunger}`
}

// sleepGage

sleepGage(){
const sleepV =document.querySelector('.sleepP')
console.log(sleepV) 
for(let i = 0 ; i <1; i++){
this.sleep+=1
console.log(this.sleep)
}
if(this.sleep >=10){
      
clearInterval(this.timer)
clearInterval(this.timerB)
clearInterval(this.timerS)
alert('Ypur Pet is death')

}
sleepV.innerHTML=`${this.sleep}`
}


boredomGage(){
  

  const boreV =document.querySelector('.boreP') 
  for(let i = 0 ; i <1; i++){
  this.boredom+=1
  console.log(this.boredom)
  }
if(this.hunger >=10){
  
clearInterval(this.timer)
clearInterval(this.timerB)
clearInterval(this.timerS)
alert('Ypur Pet is death')

  
}
boreV.innerHTML =`${this.boredom}`
  
}

    
//    Add buttons to the screen to feed your pet, turn off the lights, and play with your pet. 
 buttonOn(){
 const turnOn =document.querySelector('.onBtn')
turnOn.addEventListener('click',(event)=>{
event.preventDefault();
document.body.style.backgroundColor='skyblue'
document.body.style.color='black'
document.span.style.color='black'
})
}

    
buttonOff(){
const turnOff =document.querySelector('.offBtn')
turnOff.addEventListener('click',(event)=>{
event.preventDefault()
document.body.style.backgroundColor='black'
document.body.style.color='white'
})
}
// Add the ability to name your pet.
inputName(){
let userName =prompt("What  is your Pet's name?")
document.querySelector('#name').innerHTML =`Pet: ${userName}`;
        
}
//  Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.   
    
buttonFeed(){
const hungerV =document.querySelector('.hungerP')
const hunger =document.querySelector('.buttonH')
hunger.addEventListener('click',(event)=>{
event.preventDefault()
this.hunger-=1
          
hungerV.innerHTML =`${this.hunger}`  
          
console.log('hey')
    
     
})
 
 }
   
buttonSleep(){
const sleepV =document.querySelector('.sleepP')    
const sleep = document.querySelector('.buttonS')

sleep.addEventListener('click',(event)=>{
event.preventDefault()
this.sleep-=1
      
sleepV.innerHTML =`${this.sleep}`
          
      
          
 })
 }
    
 buttonPlay(){
 const boreV =document.querySelector('.boreP')    
 const boreBtn = document.querySelector('.buttonB')
 boreBtn.addEventListener('click',(event)=>{
 event.preventDefault()
 this.boredom-=1;
 if( this.boredom  ===-1){
 this.boredom =0
 console.log('pet is death for bore')
           }
boreV.innerHTML =`${this.boredom}`
           
       
           
})
}
//    Increase your pet's age every x minutes
 ageUp(){
 const ageBtn = document.querySelector('.urAge')
this.age++;
if(this.age ===3){
document.body.style.backgroundColor='Cyan'
document.body.style.color='black'
        
}
if(this.age ===5){
document.body.style.backgroundColor='pink'
}
if(this.age ===7){
document.body.style.backgroundColor='Gold'
}
       
ageBtn.innerHTML =`${this.age}`     
console.log(`${this.age}`)  
}
}
    

const game = new Tamagotchi()
game.buttonPlay();
game.buttonOn();
game.buttonOff();
game.buttonFeed()
game.buttonSleep()
game.ageUp()


 game.inputName()
game.hungerGage()
game.sleepGage()
game.boredomGage()


// class Jenny extends Tamagotchi{
//       constructor(hunger=0,sleep=0,boredom=0,age=0){
//             super(hunger=0,sleep=0,boredom=0,age=0)


//  this.life= setInterval(
// this.ageUp.bind(this),30000 )
                  
//                    // Lift level
// this.timer =setInterval(
// this.hungerGage.bind(this),10000)
              
              
// this.timerS =setInterval(
// this.sleepGage.bind(this),10000)
              
              
              
              
// this.timerB =setInterval(
// this.boredomGage.bind(this),10000)    
//       }

// hungerGage(){
 

//       const hungerV =document.querySelector('.hungerP') 
//       for(let i = 0 ; i <1; i++){
//       this.hunger+=1
//       console.log(this.hunger)
//       }
      
//       if(this.hunger >=10){
      
//       clearInterval(this.timer)
//       alert('Yur Pet is death')
      
//        }
//        hungerV.innerHTML =`${this.hunger}`
      
//       }
      
//       // sleepGage
      
      
//       sleepGage(){
//             const hungerV =document.querySelector('.sleepP') 
//             for(let i = 0 ; i <1; i++){
//             this.sleep+=1
//             console.log(this.sleep)
//             }
//             if(this.sleep >=10){
            
//             clearInterval(this.timer)
//             alert('Ypur Pet is death')
      
            
//              }
//       }
      
      
//       boredomGage(){
        
      
//         const boreV =document.querySelector('.boreP') 
//         for(let i = 0 ; i <1; i++){
//         this.boredom+=1
//         console.log(this.boredom)
//         }
//         if(this.hunger >=10){
        
//         clearInterval(this.timerB)
//         alert('Ypur Pet is death')
      
        
//          }
//          boreV.innerHTML =`${this.boredom}`
        
//         }
      
          
//       //    Add buttons to the screen to feed your pet, turn off the lights, and play with your pet. 
//        buttonOn(){
//        const turnOn =document.querySelector('.onBtn')
//              turnOn.addEventListener('click',(event)=>{
//              event.preventDefault();
//        document.body.style.backgroundColor='skyblue'
//        document.body.style.color='black'
//        document.span.style.color='black'
//        })
//       }
      
          
//        buttonOff(){
//        const turnOff =document.querySelector('.offBtn')
//              turnOff.addEventListener('click',(event)=>{
//              event.preventDefault()
//        document.body.style.backgroundColor='black'
//        document.body.style.color='white'
//        })
//        }
//       // Add the ability to name your pet.
//       inputName(){
//            let userName =prompt("What  is your Pet's name?")
//         document.querySelector('#name').innerHTML =`Pet: ${userName}`;
              
//           }
//       //  Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.   
          
//       buttonFeed(){
//       const hungerV =document.querySelector('.hungerP')
//       const hunger =document.querySelector('.buttonH')
//             hunger.addEventListener('click',(event)=>{
//             event.preventDefault()
//             this.hunger-=1
                
//                  hungerV.innerHTML =`${this.hunger}`  
                
//                           console.log('hey')
          
           
//        })
       
//        }
         
//       buttonSleep(){
//       const sleepV =document.querySelector('.sleepP')    
//       const sleep = document.querySelector('.buttonS')
      
//             sleep.addEventListener('click',(event)=>{
//             event.preventDefault()
//             this.sleep-=1
            
//             sleepV.innerHTML =`${this.sleep}`
                
            
                
//        })
//        }
          
//        buttonPlay(){
//        const boreV =document.querySelector('.boreP')    
//        const boreBtn = document.querySelector('.buttonB')
//        boreBtn.addEventListener('click',(event)=>{
//        event.preventDefault()
//        this.boredom-=1;
//        if( this.boredom  ===-1){
//        this.boredom =0
//        console.log('pet is death for bore')
//                  }
//       boreV.innerHTML =`${this.boredom}`
                 
             
                 
//       })
//       }
         
//        ageUp(){
//        const ageBtn = document.querySelector('.urAge')
//              this.age++;
//              if(this.age ===3){
//               document.body.style.backgroundColor='pink'
//               document.body.style.color='black'
              
//              }
//              else if(this.age ===6){
//               document.body.style.backgroundColor='light-green'
//              }
             
//             ageBtn.innerHTML =`${this.age}`     
                           
//                 console.log(`${this.age}`)  
           
          
//       }
//       }
//       const nana = new Jenny()
//       function jennysnana(){
//             console.log('welcome to Pet play-ground~')
//       }
// //  nana.buttonOn(jennysnana);
// // nana.buttonOff(jennysnana);
// // nana.buttonFeed(jennysnana);
// // nana.buttonSleep(jennysnana);
// // nana.ageUp(jennysnana);


// //  nana.inputName(jennysnana);
// // nana.hungerGage(jennysnana);
// // nana.sleepGage(jennysnana);
// // nana.boredomGage(jennysnana);

