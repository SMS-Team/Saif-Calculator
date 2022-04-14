// Dom elements
let btnContainer = document.querySelector('.btn-container')
let input = document.querySelector('input')


// events
btnContainer.addEventListener('click',calculate)


// actions - functions
function calculate(e){
    btn = e.target ;
    if(btn.getAttribute('class') == 'btn'){
        btnContent = btn.innerText.trim()
        if(btnContent == 'del'){
            input.value = input.value.substring(0,input.value.length-1)
        }else if(btnContent != '='){
            let cond = "-*/+".includes(input.value.charAt(input.value.length-1))  
            if(cond && "*+/-".includes(btnContent)){
                alert('Check your input')
            }else if("1234567890-/*+".includes(btnContent)){
                input.value += btnContent
            }
        }else if(btnContent == '='){
            if(input.value != ""){
                input.value = eval(input.value)
            }
        }
    }
}




