
const submit = document.querySelector('input[type="submit"]')
const email = document.querySelector('#email')
const name = document.querySelector('#name')

      



submit.addEventListener('click', e =>{
    let spanNodelist = document.querySelectorAll('.span')

    let span = [...spanNodelist]

    
    const emailValue = email.value
    const nameValue = name.value
    
    
    const allinIfomation = [emailValue, nameValue]

    function Span(){
        const Span= span.map(elem =>{
            elem.innerHTML = "campo inválido"
            elem.classList.add('active')
            return elem
        }) 
    }
    
    if(!nameValue  ||  !emailValue ){
        e.preventDefault()
        

        Span()
        
    }else{
        const Span= span.map(elem =>{
            
            elem.innerHTML = ""
            elem.classList.remove('active')

        }) 

        let form = document.querySelector('form')
        form.action = "/add" , form.method = "POST"


    }
 
  
})

