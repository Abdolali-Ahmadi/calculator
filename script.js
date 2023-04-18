let a = document.querySelectorAll(".number");
let basicOp = document.querySelectorAll(".basic-op")
let textArea = document.querySelector('textarea');
let equal = document.querySelector('#equal')
let clearBtn = document.querySelector('#clear-btn')
let backSpace = document.querySelector('#back')
let dot = document.querySelector('#dot')
// console.log(a)


Array.from(a).forEach(el => {
    el.addEventListener("click", () => {
        if (textArea.value.includes('\n')) {
            textArea.value=""; 
        }
        textArea.value += el.innerText
    })
})
Array.from(basicOp).forEach(el => {
    el.addEventListener("click", () => {
        if (textArea.value.includes('\n')) {
            textArea.value=""; 
        }
        
        if (textArea.value.at(-1) != el.innerText) {
            if(textArea.value){
                textArea.value += el.innerText
            }
        }
    })
})
equal.addEventListener('click', () => {
    try {
        let result = Function(`return ${textArea.value}`)();
        if (!textArea.value.includes('\n')) {
            textArea.value += `\n${result}`
        }
    } catch (error) {
        textArea.value += `\n---Error---`
    }
   
})
clearBtn.addEventListener('click',()=>{
    textArea.value = ""
})
backSpace.addEventListener('click',()=>{
    textArea.value = textArea.value.slice(0,-1)
})
dot.addEventListener('click',()=>{
    if (textArea.value.at(-1) != '.') {
        textArea.value += '.'
    }
    if (textArea.value.includes('\n')) {
            textArea.value=""; 
        }
})

// for (let i = 0; i <= 9; i++) {
//     a[i].addEventListener('click', () => {
//         textArea.value += a[i].innerText
//     })
// }