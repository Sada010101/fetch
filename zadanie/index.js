// btn.addEventListener('click', ()=>{
//     alert('1')
// })
// btn2.addEventListener('click', ()=>{
//     alert('2')
// })
// btn3.addEventListener('click', ()=>{
//     alert('3')
// })
// btn4.addEventListener('click', ()=>{
//     alert('4')
// })




// btn5.addEventListener('dblclick', ()=>{
//     alert('Hello')
// })




// function a(){
//     console.log('message from me')
//  }

//  function b(){
//     console.log('Message')
// }




// function knopka(){
//     console.log('hi my friend')
// }

// function knopka2(){
//    console.log('Bye bye')
// }


// inp1.addEventListener('onkeydown', ()=>{
//     input.type=file
// })


// getElementById('inp1'); input.value = '';

// document.getElementById("clearButton").onclick = function(e) {
//     document.getElementById("inp1").value = "";
// // }





// inp.addEventListener('input', ()=>{
//     if (inp.value.length == 5){
//     inp2.focus()
//     inp.disabled = true;
//     p1.textContent = inp.value;
//     }
// })



let inp = document.querySelector('#inp')
let inp2 = document.querySelector('#inp2')
let par = document.querySelector('#p1')

btn.addEventListener('click', ()=>{
  for (let i=0; i<100; i++){
    if(inp2.value==inp.value){
      p1.textContent = inp.value;
    }  
  }
})

// function par (){
//   console.log(this.textContent)
// }

// p1.addEventListener('click', par)
// p2.addEventListener('click', par)
// p3.addEventListener('click', par)


// function par (){
//   console.log(this.value)
// }

// inp.addEventListener('click', par)
// inp2.addEventListener('click', par)
